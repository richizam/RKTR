# MES & Line Traceability — requirements digest

Source: `RKTR_MES_&_Line_traceability_interface_Specification_documents_18032025.docx`
(MAG India / FFG, spec V2.0, English).

## Scope split
- **MAG India (FFG)** — line builder, owns the machine/PLC layer and the OP item list.
- **RKTR (Ramkrishna Titagarh Rail Wheels, Chennai)** — end customer / plant owner.
- **MDC Plus** — MES + line-traceability software, including this Andon visualization layer.

## Control systems per area
- VTL / VDM 1600 turning — **Sinumerik One**
- HMC SPECHT 800 — **Fanuc 31iBP**
- Material handling / gantries — **Siemens S7-1500**
- Test & inspection cells — **PC-based / IPC-PLC**

## Hard requirements pulled for the visualization
- Andon display of live line status (running / idle / stopped).
- RFID-based traceability, wheel serial followed across every operation.
- **30-year data retention** for traceability records.
- OEE / KPI capture per station (availability, performance, quality).
- Network architecture: shop-floor PLCs → SCADA → MES; visualization consumes MES events.

## Open against this spec
- Real PLC → visualization transport (WebSocket / OPC-UA bridge / HTTP poll) not yet fixed.
- PLC tag addresses for process parameters "awaiting details from supplier".
