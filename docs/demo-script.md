# Demo script (for the practice defense)

1. Open `index.html`. Show the **Machining** tab — schematic with real machine photos, status
   chips green/amber/red.
2. Let the mock PLC run — point out gantries moving wheels between stations **in parallel**.
3. Click a **station** → traceability popup: serial, heat code, stamp month/year, OP number,
   machine ID, OK/NotOK, controller (Sinumerik One / Fanuc 31iBP).
4. From the popup open **Process parameters** → params table for that equipment group.
5. Click a **wheel** → wheel drawer: identity, current location, full Route list with timestamps.
6. Switch to the **Testing** tab — balancing → UT → MPI → marking → peen flow.
7. Close on the integration story: everything is driven by `acceptPlcEvent(...)`; swap the mock
   for a real PLC/MES adapter and it's production-ready.

Screenshots for the deck: `demo-1-machining`, `demo-2-traceability`, `demo-3-params`,
`demo-4-wheel-drawer`, `demo-5-testing`.
