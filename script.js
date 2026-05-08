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
