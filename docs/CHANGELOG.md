# Changelog

## Final build
- Machine reference photos embedded in both SVGs (visual base).
- Wheel drawer: identity + current location + Route list with timestamps.
- Parked wheel sprites persist at stations and are clickable.
- Process Parameters panel (`process-params.js`, 14 groups / 262 rows).
- Traceability popup gained the Controller field.
- README + demo screenshots.
- Layout realigned to the MAG India OP list (real machines, not generic names).

## REV 0.5 — first reviewable prototype
- Two-tab shell, dark CAD theme.
- Machining + Testing schematics (real OP layout).
- WAAPI motion engine with per-gantry parallel queues.
- Tri-state status chips.
- Click-to-trace popup with TZ §8 fields (sample data).
- `acceptPlcEvent(...)` integration seam + mock PLC.

## Scaffolding
- Browser-only shell, two-tab layout, dark CAD theme.
- SVG schematics inlined at runtime for clickable stations.
