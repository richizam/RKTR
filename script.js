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
