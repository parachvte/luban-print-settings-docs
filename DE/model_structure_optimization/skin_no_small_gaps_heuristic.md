No Skin In Z Gaps
====
If your model has a small slit, smaller than the top/bottom skin thickness, this setting doesn't bother filling the top and bottom above/below that completely with skin. This saves on slicing and printing time, but might expose infill to the air.

![Normally there is skin around the small horizontal slit](../images/skin_no_small_gaps_heuristic_disabled.png)
![If this is enabled, it doesn't properly close the skin](../images/skin_no_small_gaps_heuristic_enabled.png)

The main intent of this setting is to reduce slicing time. This setting effectively reduces the resolution where skin should have been placed. Depending on the shape of the model, this could save anywhere between 5% and 30% on slicing time. It will also save on printing time, because instead of skin it will print infill in small gaps. If the model has no gaps smaller than the skin thickness, the only effect will be reducing slicing time.

If the model does have such small gaps, there might be infill exposed through the gaps. However if the gap is small enough, the overhang would make the walls sag down enough that it won't be visible anyway.