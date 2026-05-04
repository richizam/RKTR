# Motion engine — design

The "manipulator animation" is the most important task (boss's brief). Design goals:
- driven by real events, not a fixed loop;
- multiple gantries moving in parallel;
- robust to layout changes (read centroids from the live DOM).

## Approach
- **WAAPI** (`element.animate`) to move wheel sprites between station centroids.
- One **promise queue per gantry** so gantries animate independently and in parallel.
- A move = pickup at `fromZone` centroid → travel → drop at `toZone` centroid (→ balancing).
- Triggered by `acceptPlcEvent({ line, serial, fromZone, toZone, gantry })`.

## Sprites
- Wheel sprites are SVG groups injected over the schematic.
- Parked sprites persist at their current station and are clickable (open the wheel drawer).

## Mock driver
`startMockPlc()` emits synthetic moves on a timer so the demo runs without a live PLC.
