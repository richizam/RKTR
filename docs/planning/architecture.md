# Prototype architecture

No build step. Browser-only, served as static files. Chosen so the customer can open it
from a USB stick or a plain web server without Node/toolchain.

## Files
- `index.html` — two-tab shell (Machining line / Testing line) + popup + drawer containers.
- `styles.css` — dark CAD theme (engineering lines on near-black), status colors, popup/drawer.
- `machining-line.svg`, `testing-line.svg` — simplified schematics, one `<g>` per station with
  `data-*` attributes (station id, controller, op number).
- `script.js` — runtime: inline the SVGs, wire clicks, run the motion engine, drive status.
- `process-params.js` — static parameter dictionary per equipment group (added later).

## Runtime flow
1. `fetch()` both SVGs, inline them with DOMParser so they're part of the DOM and clickable.
2. Build a station model from each station `<g>` (id, label, centroid, controller).
3. Motion engine (WAAPI) animates wheel sprites between station centroids per gantry.
4. Click a station → traceability popup. Click a wheel → wheel drawer.

## Integration seam
A single entry point `acceptPlcEvent({ line, serial, fromZone, toZone, gantry })` is the only
thing a real PLC/MES adapter has to call. A mock PLC drives it during the demo
(`startMockPlc`). Swapping the mock for a real WebSocket/OPC-UA adapter is the production step.
