Filter Out Tiny Gaps
====
Filling gaps between walls introduces extra travel moves. If the gaps are extremely small, the material will typically not get enough time to flow out the nozzle very well. If this setting is enabled, the printer can skip some of the smallest gaps.

Gaps smaller than 2 square outer wall line widths count as "tiny gaps". For instance, if your [Outer Wall Line Width](../resolution/wall_line_width_0.md) is set to 0.4 mm, gaps with an area no larger than 0.4 mm × 0.4 mm × 2 = 0.32 mm² will not get filled.