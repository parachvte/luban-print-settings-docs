Enable Ooze Shield
====
Ooze shield is a one-layer wide wall around the object that catches ooze during dual extruder printing.

During dual extruder printing, the extruder being inactive may continue to ooze out material when its nozzle temperature is still high. Then, when this extruder starts printing again, the accumulated ooze beneath the nozzle may stick to the object, leading to an unsightly print. That's the problem that the ooze shield is meant to prevent. 

The ooze shield will get printed with the extruder that starts on a layer. Then, when extruder switch happens, the switched back extruder will wipe its nozzle on the ooze shield. This way, the oozed material won't fall on the model surface.

![The ooze shield gets printed with the first extruder of a layer, causing an alternating pattern if printing with two extruders](../images/ooze_shield.png)
![Some parameters can be adjusted for the ooze shield](../images/ooze_shield.svg)

The ooze shield will print up to the height of the highest extruder switch. Above that height, no nozzle will be moved into the print after being on stand-by mode, so printing an ooze shield is unnecessary. 

The ooze shield is thin enough to break or cut easily, and keeps its distance from your model so that it can be removed without scarring the surface.