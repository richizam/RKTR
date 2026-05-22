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
        "n": "8",
        "tag": "Chuck Clamping clamping pressure in bar",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "75"
      },
      {
        "n": "9",
        "tag": "Hydaulic System pressure in bar",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "120"
      },
      {
        "n": "10",
        "tag": "Pnumatic pressure in Bar",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "5"
      },
      {
        "n": "11",
        "tag": "Coolant pressure in Bar",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "10"
      },
      {
        "n": "12",
        "tag": "Machine waiting time for gantry",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "250"
      },
      {
        "n": "13",
        "tag": "Part Count",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "2 bytes → 65,536 values"
      },
      {
        "n": "14",
        "tag": "Spindle motor temp",
        "bytes": "4byte",
        "source": "Machine - VDM1600",
        "example": "65.C"
      },
      {
        "n": "15",
        "tag": "X1 motor Temp",
        "bytes": "4byte",
        "source": "Machine - VDM1600",
        "example": "65.C"
      },
      {
        "n": "16",
        "tag": "Z1 motor Temp",
        "bytes": "4byte",
        "source": "Machine - VDM1600",
        "example": "65.C"
      },
      {
        "n": "17",
        "tag": "X2 Motor Temp",
        "bytes": "4byte",
        "source": "Machine - VDM1600",
        "example": "65.C"
      },
      {
        "n": "18",
        "tag": "Z2 Motor temp",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": "65.C"
      },
      {
        "n": "19",
        "tag": "Tool Life Pre-warning - Left Magazine",
        "bytes": "10Byte",
        "source": "Machine - VDM1600",
        "example": "tool number"
      },
      {
        "n": "20",
        "tag": "Tool Life Alarm Left Magazine",
        "bytes": "10Byte",
        "source": "Machine - VDM1600",
        "example": "tool number"
      },
      {
        "n": "21",
        "tag": "Tool Life Pre-warning - right Magazine",
        "bytes": "10Byte",
        "source": "Machine - VDM1600",
        "example": "tool number"
      },
      {
        "n": "22",
        "tag": "Tool Life Alarm right Magazine",
        "bytes": "10Byte",
        "source": "Machine - VDM1600",
        "example": "tool number"
      },
      {
        "n": "23",
        "tag": "Tool Breakage left Magazine",
        "bytes": "1byte",
        "source": "Machine - VDM1600",
        "example": "if yes=1, no=0"
      },
      {
        "n": "24",
        "tag": "Tool Breakage Right Magazine",
        "bytes": "1byte",
        "source": "Machine - VDM1600",
        "example": "if yes=1, no=0"
      },
      {
        "n": "25",
        "tag": "Probe Data 1:  Bore to OD Runout",
        "bytes": "8 byte",
        "source": "Machine - VDM1600",
        "example": "1000.011"
      },
      {
        "n": "26",
        "tag": "Probing Data-2 :Bore diameter",
        "bytes": "8 byte",
        "source": "Machine - VDM1600",
        "example": "1000.011"
      },
      {
        "n": "27",
        "tag": "Probing Data-3 : web thickness",
        "bytes": "8 byte",
        "source": "Machine - VDM1600",
        "example": "1000.011"
      },
      {
        "n": "28",
        "tag": "Probing Data-4 : Spare 1",
        "bytes": "8 byte",
        "source": "Machine - VDM1600",
        "example": "1000.011"
      },
      {
        "n": "29",
        "tag": "Probing Data-5 : Spare 2",
        "bytes": "8 byte",
        "source": "Machine - VDM1600",
        "example": "1000.011"
      },
      {
        "n": "30",
        "tag": "Probing Data-6 : Spare 3",
        "bytes": "8 byte",
        "source": "Machine - VDM1600",
        "example": "1000.011"
      },
      {
        "n": "31",
        "tag": "End Cycle",
        "bytes": "1byte",
        "source": "Machine - VDM1600",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "32",
        "tag": "Seat checking confirmation for OP20- Airgap to be measured is > 0,05 mm. The measure must be realized on a \nsurface which feature is at least < Rz 25",
        "bytes": "1byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "33",
        "tag": "Spindle RPM",
        "bytes": "1byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "34",
        "tag": "Spindle chiller temperature",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "35",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "36",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "37",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "38",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": ""
      },
      {
        "n": "39",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - VDM1600",
        "example": ""
      }
    ]
  },
  "OP30": {
    "equipment": "OP30 HMC, SPECHT 800",
    "params": [
      {
        "n": "1",
        "tag": "Spindle load %",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "Maximum 200%"
      },
      {
        "n": "2",
        "tag": "Feed override  %",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "Feed Over irde 120%"
      },
      {
        "n": "3",
        "tag": "Cycle Time Monitoring: Track cycle time against preset limits for efficiency.",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "in second"
      },
      {
        "n": "4",
        "tag": "Lubrication System Status",
        "bytes": "1byte",
        "source": "Machine - SPECHT800",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "5",
        "tag": "Program Number",
        "bytes": "10 byte",
        "source": "Machine - SPECHT800",
        "example": "Wheel_101"
      },
      {
        "n": "6",
        "tag": "PLC alarm details",
        "bytes": "10 byte",
        "source": "Machine - SPECHT800",
        "example": "750101"
      },
      {
        "n": "7",
        "tag": "NC alarm details",
        "bytes": "10 byte",
        "source": "Machine - SPECHT800",
        "example": "NC252478"
      },
      {
        "n": "8",
        "tag": "Chuck Clamping clamping pressure in bar",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "75"
      },
      {
        "n": "9",
        "tag": "Hydaulic System pressure in bar",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "120"
      },
      {
        "n": "10",
        "tag": "Pnumatic pressure in Bar",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "5"
      },
      {
        "n": "11",
        "tag": "Coolant pressure in Bar",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "10"
      },
      {
        "n": "12",
        "tag": "Machine waiting time for gantry",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "250"
      },
      {
        "n": "13",
        "tag": "Part Count",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "2 bytes → 65,536 values"
      },
      {
        "n": "14",
        "tag": "Spindle motor temp",
        "bytes": "4byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "15",
        "tag": "X1 motor Temp",
        "bytes": "4byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "16",
        "tag": "X2 Motor Temp",
        "bytes": "4byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "17",
        "tag": "Y1 motor Temp",
        "bytes": "4byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "18",
        "tag": "Y2 Motor Temp",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "19",
        "tag": "Z1 motor Temp",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "20",
        "tag": "Z2 Motor temp",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "21",
        "tag": "B1 Motor temp",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": "65.C"
      },
      {
        "n": "22",
        "tag": "Tool Life Pre-warning",
        "bytes": "10Byte",
        "source": "Machine - SPECHT800",
        "example": "tool number"
      },
      {
        "n": "23",
        "tag": "Tool Life Alarm",
        "bytes": "10Byte",
        "source": "Machine - SPECHT800",
        "example": "tool number"
      },
      {
        "n": "24",
        "tag": "Tool Breakage",
        "bytes": "1byte",
        "source": "Machine - SPECHT800",
        "example": "if yes=1, no=0"
      },
      {
        "n": "25",
        "tag": "Probe Data 1:  Bore to OD Runout",
        "bytes": "8 byte",
        "source": "Machine - SPECHT800",
        "example": "1000.011"
      },
      {
        "n": "26",
        "tag": "Probing Data-2 :Bore diameter",
        "bytes": "8 byte",
        "source": "Machine - SPECHT800",
        "example": "1000.011"
      },
      {
        "n": "27",
        "tag": "Probing Data-3 : web thickness",
        "bytes": "8 byte",
        "source": "Machine - SPECHT800",
        "example": "1000.011"
      },
      {
        "n": "28",
        "tag": "Probing Data-4 : Spare 1",
        "bytes": "8 byte",
        "source": "Machine - SPECHT800",
        "example": "1000.011"
      },
      {
        "n": "29",
        "tag": "Probing Data-5 : Spare 2",
        "bytes": "8 byte",
        "source": "Machine - SPECHT800",
        "example": "1000.011"
      },
      {
        "n": "30",
        "tag": "Probing Data-6 : Spare 3",
        "bytes": "8 byte",
        "source": "Machine - SPECHT800",
        "example": "1000.011"
      },
      {
        "n": "31",
        "tag": "End Cycle",
        "bytes": "1byte",
        "source": "Machine - SPECHT800",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "32",
        "tag": "Pallet confirmation for Opeartion",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "33",
        "tag": "Pallet seating confirmation",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "34",
        "tag": "Air seat checking confirmation",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "35",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "36",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "37",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "38",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      },
      {
        "n": "39",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Machine - SPECHT800",
        "example": ""
      }
    ]
  },
  "OP40": {
    "equipment": "OP40 Hofmann Balancing station",
    "params": [
      {
        "n": "1",
        "tag": "Machine Calibration Logs: Track calibration status and frequency, ensuring the machine is consistently accurate.",
        "bytes": "1 byte",
        "source": "Hofmann",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "2",
        "tag": "Cycle Time Monitoring: Track cycle time against preset limits for efficiency.",
        "bytes": "4 byte",
        "source": "Hofmann",
        "example": "250 sec"
      },
      {
        "n": "3",
        "tag": "Program Number",
        "bytes": "10 byte",
        "source": "Hofmann",
        "example": "Wheel_101"
      },
      {
        "n": "4",
        "tag": "PLC Alarm  Details",
        "bytes": "10 byte",
        "source": "Hofmann",
        "example": "750101"
      },
      {
        "n": "5",
        "tag": "NC Alarm Details",
        "bytes": "10 byte",
        "source": "Hofmann",
        "example": "NC252478"
      },
      {
        "n": "6",
        "tag": "Chuck Clamping actual pressure",
        "bytes": "2 byte",
