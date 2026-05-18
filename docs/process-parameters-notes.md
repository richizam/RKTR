# Process parameters — notes

Source: `Traceability and visual Unit Display_Equipment-R00.xlsx`.

`process-params.js` is auto-generated from that sheet: **14 equipment groups (OP05…OP140),
262 parameter rows**. Each row carries tag / bytes / source / example.

## Structure
```js
PROCESS_PARAMS = {
  "OP10-VTL": { title, controller, rows: [ { tag, bytes, source, example }, ... ] },
  ...
}
```

## Wiring
- The traceability popup has a "Process parameters — View / Open" link.
- Station label → group key via `paramKeyFromName()`.
- The params panel renders the group's rows as a table.

## Open
- PLC **tag addresses** are still placeholders — "Awaiting Details from Supplier".
- `bytes`/`source` columns are from the sheet; verify against the live PLC once available.
