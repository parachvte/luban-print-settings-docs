Enable Prime Tower
====
### **Description**
Prime tower, also called *wipe tower*, is an additional print that's created separately on the build plate to help the inactive extruder switch back properly.

During dual extruder printing, the extruder being inactive may continue to ooze out material when its nozzle temperature is still high. The oozed material may hang beneath the nozzle, while the nozzle chamber becomes void. In this case, when this extruder starts printing again, the accumulated ooze will cause unsightly appearance, and the empty chamber will cause improper flow at the beginning. Those are the problems that the prime tower is meant to prevent.

![How a prime tower looks, and the dimensions of it](../images/prime_tower.svg)

### **Usage**
By printing the prime tower, the stand-by extruder can wipe off any ooze from its nozzle and prime its chamber for proper mateiral flow.

The prime tower is a hollow cylinder consists of a continuous outer shell printed by one extruder and some discontinous inner walls printed by the other extruder. The continuous outer shell is necessary for maintaining the stability of the tower, although it may cause extra extruder switches for some prints. The inner walls are not printed when there is no extruder switch.

The disadvantages of the prime tower are that it takes some extra time to print and takes away some space on the build plate.