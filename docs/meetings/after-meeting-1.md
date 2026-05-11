# After meeting 1 — boss's brief

Source: `After_meeting_1.txt`.

Four tasks for the visualization, in priority order:

1. **Click interactivity** — clicking a wheel or a station opens a traceability popup with the
   live wheel info.
2. **Status colors** — tri-state per machine: green = running, amber = idle, red = stopped.
3. **Manipulator animation — MOST IMPORTANT** — the gantry/manipulator must animate
   pickup → work area → balancing, driven by real "wheel serial X moved zone A→B" events,
   not a canned loop.
4. **Improve the visual base** — make the schematic look less like a teaser and more like the
   real line (direction to be refined — see `docs/decisions/visual-style.md`).

## My reading
- (3) is the differentiator — build the motion engine around a real event seam from the start.
- (1) and (2) are well-specified by TZ §7/§8, do them first as they're low-risk.
- (4) is vague — ship a credible CAD style now, push for direction at the next review.
