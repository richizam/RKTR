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
        "source": "Hofmann",
        "example": "120 bar"
      },
      {
        "n": "7",
        "tag": "Machine waiting time for gantry",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "45 sec"
      },
      {
        "n": "8",
        "tag": "Tolerance",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "125 gm"
      },
      {
        "n": "9",
        "tag": "Balancing Status: Track the balance status - Balance Tolerance/ Grade",
        "bytes": "4 byte",
        "source": "Hofmann",
        "example": "FL,FR,RL,RR, E1/E2/E3"
      },
      {
        "n": "10",
        "tag": "Correction Weight Applied: Record the amount and location of the corrective weight applied to the part.",
        "bytes": "2byte",
        "source": "Hofmann",
        "example": "10"
      },
      {
        "n": "11",
        "tag": "Iniitial Unbalance : Speed",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "400"
      },
      {
        "n": "12",
        "tag": "Iniitial Unbalance : Status",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": ""
      },
      {
        "n": "13",
        "tag": "Iniitial Unbalance : Stock",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "13.11gm/0.00."
      },
      {
        "n": "14",
        "tag": "Residual Unbalance : Speed",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "400"
      },
      {
        "n": "15",
        "tag": "Residual Unbalance : Status",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": ""
      },
      {
        "n": "16",
        "tag": "Residual Unbalance : Stock",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "13.11gm/0.00."
      },
      {
        "n": "17",
        "tag": "Wheel Status",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "18",
        "tag": "End Cycle",
        "bytes": "8 byte",
        "source": "Hofmann",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "19",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Hofmann",
        "example": ""
      },
      {
        "n": "20",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Hofmann",
        "example": ""
      },
      {
        "n": "21",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Hofmann",
        "example": ""
      },
      {
        "n": "22",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Hofmann",
        "example": ""
      },
      {
        "n": "23",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Hofmann",
        "example": ""
      }
    ]
  },
  "OP50": {
    "equipment": "OP50 Washing station",
    "params": [
      {
        "n": "1",
        "tag": "Water Temperature",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "25.C"
      },
      {
        "n": "2",
        "tag": "Water Flow",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "3lpm"
      },
      {
        "n": "3",
        "tag": "Filter health status",
        "bytes": "1 byte",
        "source": "Washing machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "4",
        "tag": "Water level",
        "bytes": "2 byte",
        "source": "Washing machine",
        "example": "450"
      },
      {
        "n": "5",
        "tag": "Water level pre-warning",
        "bytes": "2 byte",
        "source": "Washing machine",
        "example": "350"
      },
      {
        "n": "6",
        "tag": "pump Status",
        "bytes": "1 byte",
        "source": "Washing machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "7",
        "tag": "Program Number  / Receipe details",
        "bytes": "10 byte",
        "source": "Washing machine",
        "example": "Rec245"
      },
      {
        "n": "8",
        "tag": "PLC Alarm  Details",
        "bytes": "10 byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "9",
        "tag": "Machine waiting time for gantry",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "250sc"
      },
      {
        "n": "10",
        "tag": "End Cycle",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "11",
        "tag": "Dryer blower running cofirmation",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "12",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "13",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "14",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "15",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "16",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      }
    ]
  },
  "OP60": {
    "equipment": "OP60 Measuring station- 1",
    "params": [
      {
        "n": "1",
        "tag": "Wheel OD",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": "1250"
      },
      {
        "n": "2",
        "tag": "Wheel ID",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": "125"
      },
      {
        "n": "3",
        "tag": "Calibration status",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": "if 1=Ok, 0=Nok"
      },
      {
        "n": "4",
        "tag": "RIM thickness",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "5",
        "tag": "Hub Thickness",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "6",
        "tag": "Web Thickness",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "7",
        "tag": "Room temperature",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "8",
        "tag": "Wheel Runout OD",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "9",
        "tag": "Wheel OD to ID concensity",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "10",
        "tag": "Bore tapper & ovalaity",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "11",
        "tag": "End Cycle",
        "bytes": "4 byte",
        "source": "Measuring station",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "11",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "11",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "11",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "11",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Measuring station",
        "example": ""
      },
      {
        "n": "11",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Measuring station",
        "example": ""
      }
    ]
  },
  "OP70": {
    "equipment": "OP70 Ultrasonic testing -1",
    "params": [
      {
        "n": "1",
        "tag": "Calbriation Block :",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": "Wheel Model 1: 101\nWheel Model 2: 102"
      },
      {
        "n": "2",
        "tag": "Calbriation Probe Frequency in MHz",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": "150"
      },
      {
        "n": "3",
        "tag": "Calbriation Probe Angle",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": "45"
      },
      {
        "n": "4",
        "tag": "Calbriation Sensitivity Level in Db",
        "bytes": "4 byte",
        "source": "RosenXt UT machine",
        "example": "?"
      },
      {
        "n": "5",
        "tag": "Couplant Used",
        "bytes": "4 byte",
        "source": "RosenXt UT machine",
        "example": "?"
      },
      {
        "n": "6",
        "tag": "Sensitivity Level",
        "bytes": "4 byte",
        "source": "RosenXt UT machine",
        "example": "?"
      },
      {
        "n": "7",
        "tag": "Reference Db",
        "bytes": "4 byte",
        "source": "RosenXt UT machine",
        "example": ""
      },
      {
        "n": "8",
        "tag": "Scanning Method",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if Automated = 1 / Manual = 0"
      },
      {
        "n": "9",
        "tag": "Coverage Area",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if All= 1, Rim= 2, Rim & Flang = 3, Rim & Hub = 4"
      },
      {
        "n": "10",
        "tag": "Scanning Speed",
        "bytes": "4 byte",
        "source": "RosenXt UT machine",
        "example": "450"
      },
      {
        "n": "11",
        "tag": "Number of Probes Used",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": "?"
      },
      {
        "n": "12",
        "tag": "Probe Frequency in MHz",
        "bytes": "4 byte",
        "source": "RosenXt UT machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "13",
        "tag": "Rim testing",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "14",
        "tag": "Hub testing",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "15",
        "tag": "Web Testing",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "16",
        "tag": "Bore Testing",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "17",
        "tag": "Reference Standard & Accepatance cretira",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": ""
      },
      {
        "n": "18",
        "tag": "End Cycle",
        "bytes": "1byte",
        "source": "RosenXt UT machine",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "19",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": ""
      },
      {
        "n": "20",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": ""
      },
      {
        "n": "21",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": ""
      },
      {
        "n": "22",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": ""
      },
      {
        "n": "23",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "RosenXt UT machine",
        "example": ""
      }
    ]
  },
  "OP80": {
    "equipment": "OP80 Dot matrix marking",
    "params": [
      {
        "n": "1",
        "tag": "Dot Matrix code",
        "bytes": "30 byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "RKT 02/24 ABC012 ER8 00001"
      },
      {
        "n": "2",
        "tag": "Marking Results (Coordinates): Number of Parts ok / Not ok",
        "bytes": "4 byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "3",
        "tag": "Marking head Servo motor load in %",
        "bytes": "4 byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "120"
      },
      {
        "n": "4",
        "tag": "Torque Alarm",
        "bytes": "4 byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "5",
        "tag": "Marking Head Alarm",
        "bytes": "4 byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "6",
        "tag": "Program Number",
        "bytes": "10Byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "7",
        "tag": "NC Alarm Code",
        "bytes": "10Byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "8",
        "tag": "PLC Alarm details",
        "bytes": "10Byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      },
      {
        "n": "9",
        "tag": "End Cycle",
        "bytes": "1byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": "if 1=Cycle End, 0=Cycle not end"
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
      },
      {
        "n": "14",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "Gantry IPC / Floor Auromation",
        "example": ""
      }
    ]
  },
  "OP90": {
    "equipment": "OP90 Magnetic particle inspection -01",
    "params": [
      {
        "n": "1",
        "tag": "Hub Internal Diameter",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": "184"
      },
      {
        "n": "2",
        "tag": "Hub Thickness",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": "190"
      },
      {
        "n": "3",
        "tag": "Rim Thickness",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": "131"
      },
      {
        "n": "4",
        "tag": "Rolling Diameter",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": "918"
      },
      {
        "n": "5",
        "tag": "General note  (From CGM Machine)",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": "1=Good \n2=Crack\n3=\n4="
      },
      {
        "n": "6",
        "tag": "Inspection Cycle type",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": "1= Lateral+Rolling\n2=\n3="
      },
      {
        "n": "7",
        "tag": "Lower coil - Magnetization Preset [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "11500Ats"
      },
      {
        "n": "8",
        "tag": "Lower coil Read out [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "11472Ats"
      },
      {
        "n": "9",
        "tag": "Lower coil - DeMagnetization Preset [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "12500Ats"
      },
      {
        "n": "10",
        "tag": "Upper coil - Magnetization Preset [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "11500Ats"
      },
      {
        "n": "11",
        "tag": "Upper coil Read out [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "11411Ats"
      },
      {
        "n": "12",
        "tag": "Upper coil - DeMagnetization Preset [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "12500Ats"
      },
      {
        "n": "13",
        "tag": "Yoke coil - Magnetization Preset [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "11000Ats"
      },
      {
        "n": "14",
        "tag": "Yoke coil Read out [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "11039Ats"
      },
      {
        "n": "15",
        "tag": "Yoke coil - DeMagnetization Preset [ATS]",
        "bytes": "4 byte",
        "source": "CGM MPI Station",
        "example": "12000Ats"
      },
      {
        "n": "16",
        "tag": "DeMagnetization Performed",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": "if Yes=1, No=0"
      },
      {
        "n": "17",
        "tag": "DeMagnetization  gauss Level",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": ""
      },
      {
        "n": "18",
        "tag": "Acceptance creitria  with refernnce standrad",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": ""
      },
      {
        "n": "19",
        "tag": "Inspection Result",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": "if 1=Wheel Accepted, 0=Wheel not ok"
      },
      {
        "n": "20",
        "tag": "END CYCLE",
        "bytes": "1byte",
        "source": "CGM MPI Station",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "21",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": ""
      },
      {
        "n": "22",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": ""
      },
      {
        "n": "23",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": ""
      },
      {
        "n": "24",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": ""
      },
      {
        "n": "25",
        "tag": "Spare",
        "bytes": "2byte",
        "source": "CGM MPI Station",
        "example": ""
      }
    ]
  },
  "OP100": {
    "equipment": "OP100 Washing station",
    "params": [
      {
        "n": "1",
        "tag": "Water Temperature",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "25.C"
      },
      {
        "n": "2",
        "tag": "Water Flow",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "3lpm"
      },
      {
        "n": "3",
        "tag": "Filter health status",
        "bytes": "1 byte",
        "source": "Washing machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "4",
        "tag": "Water level",
        "bytes": "2 byte",
        "source": "Washing machine",
        "example": "450"
      },
      {
        "n": "5",
        "tag": "Water level pre-warning",
        "bytes": "2 byte",
        "source": "Washing machine",
        "example": "350"
      },
      {
        "n": "6",
        "tag": "pump Status",
        "bytes": "1 byte",
        "source": "Washing machine",
        "example": "if ok=1, Nok=0"
      },
      {
        "n": "7",
        "tag": "Program Number  / Receipe details",
        "bytes": "10 byte",
        "source": "Washing machine",
        "example": "Rec245"
      },
      {
        "n": "8",
        "tag": "PLC Alarm  Details",
        "bytes": "10 byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "9",
        "tag": "Machine waiting time for gantry",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "250sc"
      },
      {
        "n": "10",
        "tag": "End Cycle",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": "if 1=Cycle End, 0=Cycle not end"
      },
      {
        "n": "11",
        "tag": "Dryer blower running cofirmation",
        "bytes": "2byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "12",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "13",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "14",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "15",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": ""
      },
      {
        "n": "16",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Washing machine",
        "example": ""
      }
    ]
  },
  "OP110": {
    "equipment": "OP110 Shot peening",
    "params": [
      {
        "n": "1",
        "tag": "Machine waiting time for gantry",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "2",
        "tag": "Program Number",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "3",
        "tag": "",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "4",
        "tag": "Machine waiting time for gantry",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "5",
        "tag": "Program Number",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "6",
        "tag": "Part peening time",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "7",
        "tag": "flow rate",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "8",
        "tag": "Turbine RPM",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "9",
        "tag": "induv Turbine current",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "10",
        "tag": "Roller RPM(Peening chamber)",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "11",
        "tag": "Shorts level ( Weight)",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "12",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "13",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "14",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "15",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "16",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      }
    ]
  },
  "OP120": {
    "equipment": "OP120 Oil and Painting",
    "params": [
      {
        "n": "1",
        "tag": "Machine waiting time for gantry",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "2",
        "tag": "Program Number",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "3",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "4",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "4",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "4",
        "tag": "Spare",
        "bytes": "4 byte",
        "source": "Gantry IPC / MES interface",
        "example": ""
      },
      {
        "n": "4",
        "tag": "Spare",
