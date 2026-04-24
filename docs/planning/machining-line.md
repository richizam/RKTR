# Machining line — station notes

| OP | Station | Machine | Controller |
|----|---------|---------|------------|
| — | Z-INFEED | roller infeed | S7-1500 |
| OP05 | Camera / ID read | vision + RFID | IPC |
| OP10–OP20 | Vertical turning ×5 | VTL / VDM 1600 | Sinumerik One |
| OP30 | Horizontal machining | SPECHT 800 HMC | Fanuc 31iBP |
| — | Z-OUTFEED | roller outfeed | S7-1500 |

- 2 **area gantries** load/unload the VTLs and the HMC.
- Wheel travels infeed → VTL bank → HMC → outfeed.
- Status per machine: green running / amber idle / red stopped (TZ §7).
- Popup must show the controller per station (`data-controller`).
