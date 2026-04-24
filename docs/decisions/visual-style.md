# Decision — visual style

**Context:** boss's post-meeting brief lists "improve the visual base" as a top ask, but the
direction was vague (richer CAD vs 3D-ish vs operator-screen style).

**Decision:** stay CAD-like. Dark near-black background, thin engineering lines, muted fills,
monospace/condensed labels. No glossy infographic look. This matches TZ §9 and the agreed
reference sheets (`docs/references/`).

**Later refinement:** embed real machine reference photos inside each station group so the
schematic reads as the actual plant, not generic glyphs. This is the concrete answer to
"improve the visual base".

**Rejected:** full 3D / WebGL — too heavy for a browser-only Andon screen and not asked for.
