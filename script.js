/* ==========================================================================
 * RKTR / MAG India - Railway wheel MES visualization host controller
 *
 * Sections:
 *   1. Data        - WHEELS registry, STATUS mapping, journeys
 *   2. Bootstrap   - tabs, popup, SVG <object> wiring
 *   3. Zones       - data-zone-id discovery + world-space centroids
 *   4. Motion      - WAA-driven gantry + wheel-sprite transport
 *   5. Mock PLC    - scripted event runner per line
 *   6. Popup       - click handler + per-station / per-wheel data resolution
 *
 * To replace the mock PLC with a real feed, call acceptPlcEvent({serial,
 * fromZone, toZone, line, gantry}) — same contract the runner uses.
 * ========================================================================== */

/* -------------------- 1. Data --------------------------------------------- */

/* Sample MES wheel records (keyed by serial). The mock PLC walks them
 * through each line; replace with a real MES feed when available.
 * route is the per-wheel history log shown in the wheel drawer:
 *   [{ line, zoneId, ts, op, code }]  (op + code are display labels
 *   sourced from ROUTE_ZONES; ts is "HH:MM:SS").                          */
const WHEELS = {
  "SN-000128-MAGI": {
    serial: "SN-000128-MAGI",
    manufactureCode: "RKTR-WHL-2026-05-00128",
    stamp: "05 / 2026  14:37:02",
    heatCode: "H-2026-K-0042",
    partType: "LHB Wheel Type 101",
    dimensions: "OD 957 mm / ID 175 mm / web 38 mm",
    currentZone: null,
    currentLine: null,
    inTransit: false,
    transitTo: null,
    route: [],
  },
  "SN-000129-MAGI": {
    serial: "SN-000129-MAGI",
    manufactureCode: "RKTR-WHL-2026-05-00129",
    stamp: "05 / 2026  14:39:18",
    heatCode: "H-2026-K-0042",
    partType: "LHB Wheel Type 101",
    dimensions: "OD 957 mm / ID 175 mm / web 38 mm",
    currentZone: null,
    currentLine: null,
    inTransit: false,
    transitTo: null,
    route: [],
  },
  "SN-000130-MAGI": {
    serial: "SN-000130-MAGI",
    manufactureCode: "RKTR-WHL-2026-05-00130",
    stamp: "05 / 2026  14:41:55",
    heatCode: "H-2026-K-0043",
    partType: "LHB Wheel Type 101",
    dimensions: "OD 957 mm / ID 175 mm / web 38 mm",
    currentZone: null,
    currentLine: null,
    inTransit: false,
    transitTo: null,
    route: [],
  },
};

/* Display-side definition of each line's station sequence. Drives the
 * Route list in the wheel drawer (one row per zone, in plant order).
 * `op` is the operation tag (or "buffer"/"outfeed" for staging zones);
 * `code` is the short machine code shown next to it.                     */
const ROUTE_ZONES = {
  "Machining line": [
    { zoneId: "Z-INFEED",  op: "buffer",  code: "Infeed" },
    { zoneId: "Z-OP05",    op: "OP05",    code: "CAM-01" },
    { zoneId: "Z-VTL1",    op: "OP10/20", code: "VTL-01" },
    { zoneId: "Z-VTL2",    op: "OP10/20", code: "VTL-02" },
    { zoneId: "Z-VTL3",    op: "OP10/20", code: "VTL-03" },
    { zoneId: "Z-VTL4",    op: "OP10/20", code: "VTL-04" },
    { zoneId: "Z-VTL5",    op: "OP10/20", code: "VTL-05" },
    { zoneId: "Z-OP30",    op: "OP30",    code: "HMC-01" },
    { zoneId: "Z-OUTFEED", op: "outfeed", code: "Outfeed" },
  ],
  "Testing line": [
    { zoneId: "Z-FEED",  op: "buffer", code: "Infeed (from ML)" },
    { zoneId: "Z-OP40",  op: "OP40",   code: "BAL-01" },
    { zoneId: "Z-OP50",  op: "OP50",   code: "WSH-01" },
    { zoneId: "Z-OP60",  op: "OP60",   code: "MSR-01" },
    { zoneId: "Z-OP70A", op: "OP70",   code: "UT-01" },
    { zoneId: "Z-OP70B", op: "OP70",   code: "UT-02" },
    { zoneId: "Z-OP70C", op: "OP70",   code: "UT-03" },
    { zoneId: "Z-OP80",  op: "OP80",   code: "MRK-01" },
    { zoneId: "Z-OP90",  op: "OP90",   code: "MPT-01" },
    { zoneId: "Z-OP100", op: "OP100",  code: "WSH-01" },
    { zoneId: "Z-OP110", op: "OP110",  code: "PEN-01" },
    { zoneId: "Z-OP130", op: "OP130",  code: "VIS-01" },
    { zoneId: "Z-OP140", op: "OP140",  code: "CNV-01" },
  ],
};

function findRouteZone(lineName, zoneId) {
  const list = ROUTE_ZONES[lineName] || [];
  for (const z of list) if (z.zoneId === zoneId) return z;
  return null;
}

function formatNowHMS() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
}

const STATUS = {
  "status-running": { chip: "working", text: "Working" },
  "status-warning": { chip: "stopped", text: "Stopped" },
  "status-error":   { chip: "off",     text: "Off" },
  "status-idle":    { chip: "unknown", text: "No data" },
  "status-offline": { chip: "unknown", text: "Offline" },
};

/* Gantry geometry per line. baseCenterX is the X (in SVG viewBox units) of
 * the icon center when the gantry sits at its home position (no translate).
 * The rail bounds are used to clamp gantry travel so the icon does not
 * visually leave the rail.                                               */
const GANTRIES = {
  "Machining line": {
    rail: { min: 62, max: 1858 },
    heads: [
      { selector: ".gantry.gantry-1", baseCenterX: 526,  currentX: 0 }, // Area Gantry 1
      { selector: ".gantry.gantry-2", baseCenterX: 1394, currentX: 0 }, // Area Gantry 2
    ],
  },
  "Testing line": {
    rail: { min: 50, max: 1867 },
    heads: [
      { selector: ".gantry.gantry-1", baseCenterX: 346,  currentX: 0 }, // Linear Gantry 3
      { selector: ".gantry.gantry-2", baseCenterX: 926,  currentX: 0 }, // Linear Gantry 4
      { selector: ".gantry.gantry-3", baseCenterX: 1522, currentX: 0 }, // Linear Gantry 5
    ],
  },
};

/* Scripted PLC journeys. Each event is one of:
 *   { serial, from, to, gantry }  - pick-and-carry move
 *   { kind: "status", zone, to }  - flip a station's status class
 * The runner awaits each move's animation before emitting the next.    */
/* Each journey visits every station along the line, one neighbour at a
 * time. Gantry index is chosen so each head only handles stations within
 * its rail segment — no head skips far past its assigned range.        */
const JOURNEYS = {
  "Machining line": buildMachiningJourney(),
  "Testing line": buildTestingJourney(),
};

function buildMachiningJourney() {
  const events = [];
  const serials = ["SN-000128-MAGI", "SN-000129-MAGI", "SN-000130-MAGI"];
  /* Gantry 0 = Area Gantry 1 (infeed side), Gantry 1 = Area Gantry 2 (outfeed side) */
  const pairs = [
    { from: "Z-INFEED", to: "Z-OP05",    g: 0 },
    { from: "Z-OP05",   to: "Z-VTL1",    g: 0 },
    { from: "Z-VTL1",   to: "Z-VTL2",    g: 0 },
    { from: "Z-VTL2",   to: "Z-VTL3",    g: 0 },
    { from: "Z-VTL3",   to: "Z-VTL4",    g: 1 },
    { from: "Z-VTL4",   to: "Z-VTL5",    g: 1 },
    { from: "Z-VTL5",   to: "Z-OP30",    g: 1 },
    { from: "Z-OP30",   to: "Z-OUTFEED", g: 1 },
  ];
  for (const serial of serials) {
    for (const p of pairs) events.push({ serial, from: p.from, to: p.to, gantry: p.g });
  }
  return events;
}

function buildTestingJourney() {
  const events = [];
  const serials = ["SN-000128-MAGI", "SN-000129-MAGI"];
  /* Gantry 0 = Linear Gantry 3, Gantry 1 = LG4, Gantry 2 = LG5 */
  const pairs = [
    { from: "Z-FEED",   to: "Z-OP40",   g: 0 },
    { from: "Z-OP40",   to: "Z-OP50",   g: 0 },
    { from: "Z-OP50",   to: "Z-OP60",   g: 0 },
    { from: "Z-OP60",   to: "Z-OP70A",  g: 0 },
    { from: "Z-OP70A",  to: "Z-OP70B",  g: 1 },
    { from: "Z-OP70B",  to: "Z-OP70C",  g: 1 },
    { from: "Z-OP70C",  to: "Z-OP80",   g: 1 },
    { from: "Z-OP80",   to: "Z-OP90",   g: 1 },
    { from: "Z-OP90",   to: "Z-OP100",  g: 2 },
    { from: "Z-OP100",  to: "Z-OP110",  g: 2 },
    { from: "Z-OP110",  to: "Z-OP130",  g: 2 },
    { from: "Z-OP130",  to: "Z-OP140",  g: 2 },
  ];
  for (const serial of serials) {
    for (const p of pairs) events.push({ serial, from: p.from, to: p.to, gantry: p.g });
  }
  return events;
}

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Mutable runtime state. */
const zoneRegistry   = { "Machining line": {}, "Testing line": {} };
const zoneOccupancy  = { "Machining line": {}, "Testing line": {} };
/* Last serial known to have been at each zone. Pre-seeded at init so that
 * any click before the mock PLC reaches that zone still shows real-looking
 * data. Carry routine updates this on every arrival; zoneOccupancy still
 * holds the strict "wheel is here right now" truth.                        */
const lastWheelAtZone = { "Machining line": {}, "Testing line": {} };
const svgRefs        = { "Machining line": null, "Testing line": null };
const plcRunning     = { "Machining line": false, "Testing line": false };

/* Currently-selected equipment, used by the Process Parameters panel. */
let currentParamKey = null;
let currentParamName = "";

/* Serial of the wheel currently displayed in the wheel drawer (null when
 * the drawer is closed). Used by pickAndCarry to refresh the drawer
 * live as the wheel moves.                                              */
let currentDrawerSerial = null;

/* -------------------- 2. Bootstrap --------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initPopup();
  initWheelDrawer();
  initParamPanel();
  initSvgObjects();
});

function initTabs() {
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".schematic-section");

  const activate = (target) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.target === target;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    sections.forEach((section) => {
      const active = section.id === target;
      section.classList.toggle("active", active);
      section.hidden = !active;
    });
  };

  tabs.forEach((button) => {
    button.addEventListener("click", () => activate(button.dataset.target));
  });

  const hashTarget = window.location.hash.slice(1);
  if (hashTarget && document.getElementById(hashTarget)) activate(hashTarget);
}

function initPopup() {
  const backdrop = document.getElementById("popup-backdrop");
  const popup = document.getElementById("trace-popup");
  const closeButton = popup.querySelector(".close-btn");

  const close = () => {
    backdrop.classList.remove("show");
    popup.classList.remove("show");
  };

  backdrop.addEventListener("click", close);
  closeButton.addEventListener("click", close);
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    const pp = document.getElementById("param-panel");
    if (pp && pp.classList.contains("show")) return; // param panel handles its own Esc first
    close();
  });
}

/* Inline each SVG into the main document via fetch + DOMParser. Avoids the
 * cross-document fragility of <object> / contentDocument timing (which in
 * some browsers fires load with an HTML placeholder doc, never updating). */
async function initSvgObjects() {
  const mounts = Array.from(document.querySelectorAll(".cad-mount"));
  await Promise.all(mounts.map(loadOneSvg));
}

async function loadOneSvg(mount) {
  const lineName = mount.dataset.line;
  const url = mount.dataset.src;
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("HTTP " + response.status);
    const text = await response.text();
    const parsed = new DOMParser().parseFromString(text, "image/svg+xml");
    const parseErr = parsed.querySelector("parsererror");
    if (parseErr) throw new Error("SVG parse error");
    const svg = document.importNode(parsed.documentElement, true);
    svg.setAttribute("id", lineName === "Machining line" ? "svg-mach" : "svg-test");
    mount.appendChild(svg);
    svgRefs[lineName] = svg;
    wireClicks(svg, lineName);
    registerZones(svg, lineName);
    preSeedZones(lineName);
    injectWheelSprite(svg, lineName);
    injectParkedWheelSprites(svg, lineName);
    startMockPlc(lineName);
  } catch (err) {
    console.error("[init]", lineName, "load failed:", err);
  }
}

/* -------------------- 3. Zones ------------------------------------------- */

/* Pure attribute-based centroid computation. Doesn't depend on the SVG
 * having a current viewport (getCTM/getBBox can return null until the
 * inner document is fully laid out, which is unreliable inside <object>). */
function registerZones(doc, lineName) {
  const reg = zoneRegistry[lineName];
  doc.querySelectorAll("[data-zone-id]").forEach((el) => {
    const id = el.getAttribute("data-zone-id");
    const kind = el.getAttribute("data-zone-kind") || "station";
    const [baseX, baseY] = parseTranslate(el.getAttribute("transform"));
    let frame = el.querySelector(".station-frame");
    if (!frame) frame = el.querySelector("rect");
    const fx = frame ? parseFloat(frame.getAttribute("x") || "0") : 0;
    const fy = frame ? parseFloat(frame.getAttribute("y") || "0") : 0;
    const fw = frame ? parseFloat(frame.getAttribute("width") || "0") : 0;
    const fh = frame ? parseFloat(frame.getAttribute("height") || "0") : 0;
    reg[id] = {
      x: baseX + fx + fw / 2,
      y: baseY + fy + fh / 2,
      kind,
      element: el,
    };
  });
}

function parseTranslate(transformAttr) {
  if (!transformAttr) return [0, 0];
  const m = /translate\(\s*(-?\d+(?:\.\d+)?)[ ,]+(-?\d+(?:\.\d+)?)\s*\)/.exec(transformAttr);
  return m ? [parseFloat(m[1]), parseFloat(m[2])] : [0, 0];
}

/* Assign every zone an initial "last known wheel" by cycling through the
 * WHEELS registry. Any popup click before the mock PLC has cycled to that
 * zone still shows a real wheel record. The mock carry overwrites the entry
 * on every arrival, so the value stays current as the line runs.          */
function preSeedZones(lineName) {
  const serials = Object.keys(WHEELS);
  if (!serials.length) return;
  const zoneIds = Object.keys(zoneRegistry[lineName]);
  zoneIds.forEach((zId, i) => {
    lastWheelAtZone[lineName][zId] = serials[i % serials.length];
  });
}


/* -------------------- 4. Motion ------------------------------------------ */

const SVG_NS = "http://www.w3.org/2000/svg";

/* One wheel sprite per gantry, so multiple gantries can carry wheels in
 * parallel. Each sprite is hidden until its gantry starts a carry.       */
function injectWheelSprite(svgRoot, lineName) {
  const ownerDoc = svgRoot.ownerDocument;
  const layerId = lineName === "Machining line"
    ? "wheel-sprite-layer-machining"
    : "wheel-sprite-layer-testing";
  const symbolId = lineName === "Machining line" ? "icon-wheel-m" : "icon-wheel-t";

  let layer = svgRoot.querySelector("#" + layerId);
  if (!layer) {
    layer = ownerDoc.createElementNS(SVG_NS, "g");
    layer.setAttribute("id", layerId);
    svgRoot.appendChild(layer);
  }

  const heads = GANTRIES[lineName].heads;
  for (let i = 0; i < heads.length; i++) {
    const spriteId = layerId + "-" + i;
    if (svgRoot.querySelector("#" + spriteId)) continue;
    const sprite = ownerDoc.createElementNS(SVG_NS, "g");
    sprite.setAttribute("id", spriteId);
    sprite.setAttribute("class", "wheel-sprite wheel-anchor");
    sprite.setAttribute("data-station-name", "WHEEL IN TRANSIT");
    sprite.style.display = "none";
    const use = ownerDoc.createElementNS(SVG_NS, "use");
    use.setAttribute("href", "#" + symbolId);
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + symbolId);
    use.setAttribute("width", "44");
    use.setAttribute("height", "44");
    use.setAttribute("x", "-22");
    use.setAttribute("y", "-22");
    sprite.appendChild(use);
    layer.appendChild(sprite);
  }
}

function getWheelSprite(lineName, gantryIdx) {
  const root = svgRefs[lineName];
  if (!root) return null;
  const layerId = lineName === "Machining line"
    ? "wheel-sprite-layer-machining"
    : "wheel-sprite-layer-testing";
  return root.querySelector("#" + layerId + "-" + gantryIdx);
}

/* Per-wheel "parked" sprite. One per WHEEL per line, hidden until the
 * wheel arrives at a station on this line. Stays visible while parked so
 * the operator can click it to open the wheel drawer. Hidden again when
 * the next gantry picks it up.                                            */
function lineShortKey(lineName) {
  return lineName === "Machining line" ? "m" : "t";
}

function parkedSpriteId(lineName, serial) {
  return "parked-" + lineShortKey(lineName) + "-" + serial.replace(/[^A-Za-z0-9-]/g, "_");
}

function injectParkedWheelSprites(svgRoot, lineName) {
  const ownerDoc = svgRoot.ownerDocument;
  const symbolId = lineName === "Machining line" ? "icon-wheel-m" : "icon-wheel-t";
  const layerId = "parked-wheel-layer-" + lineShortKey(lineName);
  let layer = svgRoot.querySelector("#" + layerId);
  if (!layer) {
    layer = ownerDoc.createElementNS(SVG_NS, "g");
    layer.setAttribute("id", layerId);
    svgRoot.appendChild(layer);
  }
  Object.keys(WHEELS).forEach((serial) => {
    const id = parkedSpriteId(lineName, serial);
    if (svgRoot.querySelector("#" + id)) return;
    const sprite = ownerDoc.createElementNS(SVG_NS, "g");
    sprite.setAttribute("id", id);
    sprite.setAttribute("class", "wheel-sprite parked-wheel wheel-anchor");
    sprite.setAttribute("data-serial", serial);
    sprite.setAttribute("data-station-name", "WHEEL PARKED");
    sprite.style.display = "none";
    const use = ownerDoc.createElementNS(SVG_NS, "use");
    use.setAttribute("href", "#" + symbolId);
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + symbolId);
    use.setAttribute("width", "44");
    use.setAttribute("height", "44");
    use.setAttribute("x", "-22");
    use.setAttribute("y", "-22");
    sprite.appendChild(use);
    layer.appendChild(sprite);
  });
}

function getParkedSprite(lineName, serial) {
  const root = svgRefs[lineName];
  if (!root) return null;
  return root.querySelector("#" + parkedSpriteId(lineName, serial));
}

function showParkedSpriteAt(lineName, serial, zoneId) {
  const sprite = getParkedSprite(lineName, serial);
  const zone = zoneRegistry[lineName] && zoneRegistry[lineName][zoneId];
  if (!sprite || !zone) return;
  sprite.style.transform = `translate(${zone.x}px, ${zone.y}px)`;
  sprite.style.display = "";
  const stationEl = zone.element;
  const stationName = stationEl ? (stationEl.getAttribute("data-station-name") || "") : "";
  sprite.setAttribute("data-station-name", stationName ? ("Wheel at " + stationName) : "Wheel parked");
  sprite.setAttribute("data-current-zone", zoneId);
}

function hideParkedSprite(lineName, serial) {
  const sprite = getParkedSprite(lineName, serial);
  if (!sprite) return;
  sprite.style.display = "none";
  sprite.removeAttribute("data-current-zone");
}

function setSpriteAt(sprite, x, y) {
  if (sprite) sprite.style.transform = `translate(${x}px, ${y}px)`;
}

function showSprite(sprite, serial) {
  if (!sprite) return;
  sprite.style.display = "";
  sprite.setAttribute("data-serial", serial);
}

function hideSprite(sprite) {
  if (!sprite) return;
  sprite.style.display = "none";
  sprite.removeAttribute("data-serial");
}

function clampTargetCenterX(lineName, centerX) {
  const rail = GANTRIES[lineName].rail;
  if (centerX < rail.min) return rail.min;
  if (centerX > rail.max) return rail.max;
  return centerX;
}

function animateTranslate(el, fromX, toX, duration) {
  const dur = REDUCED_MOTION ? 0 : duration;
  const toStr = `translate(${toX}px, 0px)`;
  const anim = el.animate(
    [
      { transform: `translate(${fromX}px, 0px)` },
      { transform: toStr },
    ],
    { duration: dur, easing: "ease-in-out", fill: "forwards" }
  );
  return anim.finished.then(() => {
    /* Commit final value to inline style and cancel the animation so its
     * fill: forwards stops over-applying once the next move begins. */
    el.style.transform = toStr;
    try { anim.cancel(); } catch (_err) { /* already cancelled */ }
  });
}

async function moveGantry(lineName, gantryIdx, toZoneId, opts) {
  const cfg = GANTRIES[lineName];
  const root = svgRefs[lineName];
  const head = cfg && cfg.heads[gantryIdx];
  if (!root || !head) return;
  const gantryEl = root.querySelector(head.selector);
  const zone = zoneRegistry[lineName][toZoneId];
  if (!gantryEl || !zone) return;
  const clampedCenter = clampTargetCenterX(lineName, zone.x);
  const targetTx = clampedCenter - head.baseCenterX;
  const duration = (opts && opts.duration) || 1400;
  await animateTranslate(gantryEl, head.currentX, targetTx, duration);
  head.currentX = targetTx;
}

async function pickAndCarry(lineName, serial, fromZoneId, toZoneId, opts) {
  const gantryIdx = (opts && opts.gantryIdx) || 0;
  const fromZ = zoneRegistry[lineName][fromZoneId];
  const toZ = zoneRegistry[lineName][toZoneId];
  if (!fromZ || !toZ) return;

  const sprite = getWheelSprite(lineName, gantryIdx);

  /* Cycle-restart: when the mock PLC loops a wheel back to the line's
   * first zone, reset its route history for this line so the drawer
   * shows a fresh journey, not the cumulative ladder.                 */
  const firstZone = ROUTE_ZONES[lineName] && ROUTE_ZONES[lineName][0];
  if (firstZone && fromZoneId === firstZone.zoneId && WHEELS[serial]
      && WHEELS[serial].route.some((r) => r.line === lineName)) {
    WHEELS[serial].route = WHEELS[serial].route.filter((r) => r.line !== lineName);
  }

  /* 1) Highlight pickup station; gantry moves to it empty.
   *    Hide the parked sprite at the source — the wheel is leaving.   */
  hideParkedSprite(lineName, serial);
  setActiveStation(lineName, fromZoneId, true);
  await moveGantry(lineName, gantryIdx, fromZoneId, { duration: 800 });
  await sleep(REDUCED_MOTION ? 0 : 280);

  /* 2) Switch highlight to destination, reveal the transit sprite at the pickup. */
  setActiveStation(lineName, fromZoneId, false);
  setActiveStation(lineName, toZoneId, true);

  setSpriteAt(sprite, fromZ.x, fromZ.y);
  const destEl = zoneRegistry[lineName][toZoneId] && zoneRegistry[lineName][toZoneId].element;
  const destLabel = (destEl && destEl.getAttribute("data-station-name")) || toZoneId;
  if (sprite) sprite.setAttribute("data-station-name", "In transit → " + destLabel);
  showSprite(sprite, serial);

  /* Mark the wheel as in transit so the wheel drawer reflects it. */
  if (WHEELS[serial]) {
    WHEELS[serial].inTransit = true;
    WHEELS[serial].transitTo = toZoneId;
    WHEELS[serial].currentLine = lineName;
  }

  const carryDuration = REDUCED_MOTION ? 0 : 1200;
  const toStr = `translate(${toZ.x}px, ${toZ.y}px)`;
  const spriteAnim = sprite && sprite.animate(
    [
      { transform: `translate(${fromZ.x}px, ${fromZ.y}px)` },
      { transform: toStr },
    ],
    { duration: carryDuration, easing: "ease-in-out", fill: "forwards" }
  );
  const gantryMove = moveGantry(lineName, gantryIdx, toZoneId, { duration: carryDuration });

  await Promise.all([
    spriteAnim ? spriteAnim.finished : Promise.resolve(),
    gantryMove,
  ]);

  if (sprite) sprite.style.transform = toStr;
  if (spriteAnim) { try { spriteAnim.cancel(); } catch (_err) { /* already cancelled */ } }

  /* 3) Drop dwell, optional shuttle bounce, hide transit sprite,
   *    reveal parked sprite at destination, clear highlight.            */
  maybeShuttleAnimate(lineName, toZoneId);
  await sleep(REDUCED_MOTION ? 0 : 380);
  hideSprite(sprite);
  showParkedSpriteAt(lineName, serial, toZoneId);
  setActiveStation(lineName, toZoneId, false);

  /* 4) Update wheel + zone occupancy state and append a route entry. */
  if (WHEELS[serial]) {
    WHEELS[serial].currentZone = toZoneId;
    WHEELS[serial].currentLine = lineName;
    WHEELS[serial].inTransit = false;
    WHEELS[serial].transitTo = null;
    const zoneDef = findRouteZone(lineName, toZoneId);
    WHEELS[serial].route.push({
      line: lineName,
      zoneId: toZoneId,
      ts: formatNowHMS(),
      op: zoneDef ? zoneDef.op : "",
      code: zoneDef ? zoneDef.code : toZoneId,
    });
  }
  Object.keys(zoneOccupancy[lineName]).forEach((zId) => {
    if (zoneOccupancy[lineName][zId] === serial) zoneOccupancy[lineName][zId] = null;
  });
  zoneOccupancy[lineName][toZoneId] = serial;
  lastWheelAtZone[lineName][toZoneId] = serial;

  /* If the drawer is showing this wheel, refresh it live. */
  if (currentDrawerSerial === serial) populateWheelDrawer(serial);

  /* 5) Return gantry to home so it can start the next wheel. */
  await moveGantryHome(lineName, gantryIdx);
}

async function moveGantryHome(lineName, gantryIdx) {
  const head = GANTRIES[lineName].heads[gantryIdx];
  const root = svgRefs[lineName];
  if (!head || !root || head.currentX === 0) return;
  const gantryEl = root.querySelector(head.selector);
  if (!gantryEl) return;
  await animateTranslate(gantryEl, head.currentX, 0, 700);
  head.currentX = 0;
}

/* Highlights a station while a wheel is moving to it: applies a CSS class
 * for the glow + a slight SVG-attribute scale so the box visibly pops.   */
function setActiveStation(lineName, zoneId, active) {
  const zone = zoneRegistry[lineName] && zoneRegistry[lineName][zoneId];
  if (!zone || !zone.element) return;
  const el = zone.element;
  if (active) {
    if (!el.hasAttribute("data-base-transform")) {
      el.setAttribute("data-base-transform", el.getAttribute("transform") || "");
    }
    const baseTx = el.getAttribute("data-base-transform");
    const frame = el.querySelector(".station-frame") || el.querySelector("rect");
    if (frame) {
      const fx = parseFloat(frame.getAttribute("x") || "0");
      const fy = parseFloat(frame.getAttribute("y") || "0");
      const fw = parseFloat(frame.getAttribute("width") || "0");
      const fh = parseFloat(frame.getAttribute("height") || "0");
      const cx = fx + fw / 2;
      const cy = fy + fh / 2;
      el.setAttribute("transform",
