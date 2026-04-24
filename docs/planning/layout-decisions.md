# Layout decisions

## Don't redraw the CAD from scratch
TZ is explicit: simplify the original CAD sheet but keep recognizable geometry. So the SVGs
trace the real plant layout (infeed → machining → outfeed; feed → test cells → conveyor),
not an abstract block diagram.

## Two standalone schematics
Per TZ §3 the two lines are delivered as two independent schematics, switched by tabs — not
one combined drawing. Keeps each line readable and matches how operators think about them.

## Station order (locked against MAG OP list)
**Machining:** Z-INFEED → OP05 camera → 5× VTL (VDM 1600) → OP30 SPECHT 800 HMC → Z-OUTFEED.
2 area gantries.

**Testing:** Z-FEED → OP40 balance (Hofmann) → OP50 wash → OP60 measure (CMM) →
OP70 A/B/C ultrasonic → OP80 marking → OP90 MPT → OP100 wash → OP110 peen →
OP130 visual → OP140 conveyor. 3 linear gantries.

## Coordinate model
Each station `<g>` carries a centroid; the motion engine reads centroids from the live DOM
rather than hard-coding pixel paths, so moving a station in the SVG doesn't break animation.
