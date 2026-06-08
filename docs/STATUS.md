# STATUS — final build

## Done
- [x] Two-tab shell, dark CAD theme
- [x] Machining + Testing SVGs realigned to the MAG OP list
- [x] Real machine reference photos embedded per station
- [x] WAAPI motion engine, per-gantry parallel queues
- [x] Tri-state status chips
- [x] Traceability popup — TZ §8 fields + Controller (Sinumerik One / Fanuc 31iBP / IPC-PLC)
- [x] Wheel drawer — identity, current location, Route list (visited/current/pending + timestamps)
- [x] Parked wheel sprites persist at stations, clickable
- [x] Process Parameters panel from `process-params.js` (14 groups, 262 rows)
- [x] `paramKeyFromName()` maps station → param group
- [x] `acceptPlcEvent(...)` seam + mock PLC
- [x] README + demo screenshots

## Acceptance (TZ §10)
All 8 criteria PASS.

## Open (awaiting customer / supplier)
- Real PLC transport + payload format
- PLC tag addresses for process parameters ("awaiting supplier")
- Final visual-base sign-off
