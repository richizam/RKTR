# Decision — PLC / MES integration seam

**Problem:** the real transport from the line to the visualization isn't fixed yet
(candidates: WebSocket push from SCADA, OPC-UA bridge, HTTP poll, postMessage from a host MES).

**Decision:** isolate the unknown behind one function:

```js
acceptPlcEvent({ line, serial, fromZone, toZone, gantry })
```

Everything downstream (motion engine, status, traceability) only reacts to this. During the
demo a mock PLC (`startMockPlc`) emits synthetic "serial X moved zone A→B" events. Production
swaps the mock for a real adapter that calls the same function — no UI rewrite.

**Status:** transport still **open**, awaiting MAG/SCADA side. Tag addresses for process
parameters "awaiting details from supplier".
