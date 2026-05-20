// AUTO-GENERATED from Traceability and visual Unit Display_Equipment-R00.xlsx — do not edit by hand
const PROCESS_PARAMS = {
  "OP5": {
    "equipment": "OP05 Camera Station",
    "params": [
      {
        "n": "1",
        "tag": "Match Quality Ok / Not Ok: Once the part number is captured, it’s often compared against a database or predefined list of valid part numbers for verification.",
        "bytes": "1bye",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "2",
        "tag": "Error Detection Alarm: Any mismatched or unreadable part numbers can trigger an error or alert for further inspection.",
        "bytes": "1byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "1= Orientation error\n2=Wrong model \n3= Loading quantity mismatch"
      },
      {
        "n": "3",
        "tag": "Part Database check Ok/ Not ok: The vision system should integrate with a database that contains the part numbers and corresponding details (e.g., material, supplier, etc.).",
        "bytes": "1byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "5",
        "tag": "Data tracking status, (Entry For Auto detection = 0, manual entry = 1)",
        "bytes": "1byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if Manual Entry OK = 1, Auto Entry = 0"
      },
      {
        "n": "7",
        "tag": "Part Count",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "2 bytes → 65,536 values"
      },
      {
        "n": "8",
        "tag": "End Cycle",
        "bytes": "1byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "9",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "10",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "11",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "12",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "13",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      }
    ]
  },
  "OP10": {
    "equipment": "OP10/20 VTL, VDM 1600 -01",
    "params": [
      {
        "n": "1",
        "tag": "Spindle load %",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "Maximum 200%"
      },
      {
        "n": "2",
        "tag": "Feed override  %",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "Feed Over irde 120%"
      },
      {
        "n": "3",
        "tag": "Cycle Time Monitoring: Track cycle time against preset limits for efficiency.",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "in second"
      },
      {
        "n": "4",
        "tag": "Lubrication System Status",
        "bytes": "1byte",
        "source": "Machine - VDM1600",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "5",
        "tag": "Program Number",
        "bytes": "10 byte",
        "source": "Machine - VDM1600",
        "example": "Wheel_101"
      },
      {
        "n": "6",
        "tag": "PLC alarm details",
        "bytes": "10 byte",
        "source": "Machine - VDM1600",
        "example": "750101"
      },
      {
        "n": "7",
        "tag": "NC alarm details",
        "bytes": "10 byte",
        "source": "Machine - VDM1600",
        "example": "NC252478"
      },
      {
