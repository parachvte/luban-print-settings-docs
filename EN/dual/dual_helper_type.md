Dual Extrusion Helper Types
====
During dual extruder printing, the extruder being inactive may continue to ooze out material when its nozzle temperature is still high. Then, when this extruder starts printing again, the accumulated ooze beneath the nozzle may stick to the object, leading to an unsightly print. That's why we need to use dual extrusion helpers. Luban provides you with two types of dual extrusion helpers, each with its own feature. 

Prime Tower
----

Prime tower, also called *wipe tower*, is an additional print that's created separately on the build plate to help the inactive extruder switch back properly.

Actually, material oozing will not only cause unsightly appearance, but also result in an empty chamber, followed by improper flow at the beginning of the print. By printing the prime tower, the stand-by extruder can wipe off any ooze from its nozzle and prime its chamber for proper mateiral flow.

![How a prime tower looks, and the dimensions of it](../images/prime_tower.svg)

The prime tower is a hollow cylinder consists of a continuous outer shell printed by one extruder and some discontinous inner walls printed by the other extruder. The continuous outer shell is necessary for maintaining the stability of the tower, although it may cause extra extruder switches for some prints. The inner walls are not printed when there is no extruder switch.

The disadvantages of the prime tower are that it takes some extra time to print and occupies some space on the build plate.

Ooze Shield
----
Ooze shield is a one-layer wide wall around the object that catches ooze during dual extruder printing. The ooze shield is thin enough to break or cut easily, and keeps its distance from your model so that it can be removed without scarring the surface.

The ooze shield will get printed with the extruder that starts on a layer. Then, when extruder switch happens, the switched back extruder will wipe its nozzle on the ooze shield. This way, the oozed material won't fall on the model surface.

![The ooze shield gets printed with the first extruder of a layer, causing an alternating pattern if printing with two extruders](../images/ooze_shield.png)
![Some parameters can be adjusted for the ooze shield](../images/ooze_shield.svg)

The ooze shield will print up to the height of the highest extruder switch. Above that height, no nozzle will be moved into the print after being on stand-by mode, so printing an ooze shield is unnecessary. 
