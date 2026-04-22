# MDC feedback — required MES screens

Source: `MES_Design Develpoment & RKTR Feedback_R00 (1).xlsx`

The visualization is one screen of a larger MES. Screens requested by MDC / RKTR:

| Screen | Purpose | Touches this prototype? |
|---|---|---|
| Line Status (Andon) | live running/idle/stopped per station | **yes — this prototype** |
| OEE block | availability × performance × quality | indirectly (status feed) |
| Work Order management | release / track orders on the line | no |
| Quality Inspection | UT / MPI / CMM results, OK / NotOK | popup OK-NotOk field |
| Traceability | per-serial route + heat/stamp codes | **yes — wheel popup/drawer** |
| Maintenance / Downtime | MTBF / MTTR | no |
| Tool management | tool life per machine | no |
| Reporting | shift / production reports | no |

## Takeaway for the prototype
Stay focused on **Line Status + Traceability**. The popup must expose the traceability
fields (TZ §8) and the quality verdict; everything else is a separate MES module.
