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
