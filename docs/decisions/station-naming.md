# Decision — station naming

**Question raised at Monday review:** name stations by operation (DRILL / MILL / BORE …) or
by the TZ's generic "Machining Station 1/2/3"?

**Decision:** name by the **real MAG OP numbers and machines** (OP05, OP10 VTL/VDM 1600,
OP30 SPECHT 800, OP40 balance …). Reasons:
- matches the customer's own item list and the MES OP scope table,
- removes ambiguity for traceability (Operation No is a TZ §8 mandatory field),
- generic names would have to be re-mapped to OPs anyway for the PLC feed.

Each station `<g>` carries `data-op`, `data-controller`, and a human label.
`paramKeyFromName()` maps the label to the process-parameter group key.
