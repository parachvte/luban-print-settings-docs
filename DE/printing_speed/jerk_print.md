Print Jerk
====
### **Description**
Jerk determines the speed at which the nozzle can go through corners. 

**Jerk in 3D printing is not the same as jerk in physics.** The term "jerk" was introduced by Marlin. It was designed there as a workaround for the inherent problem in trying to perfectly follow a path. Since the nozzle is not allowed to deviate from the path (in theory), the nozzle would need to decelerate to 0mm/s in every corner. This would ruin your print, because decelerating to 0mm/s would cause a blob in every corner. It is not allowed to make curves to shortcut the corner, nor can it overshoot. Instead, Marlin allows for an instantaneous change in the velocity vector in every corner. The magnitude of this change in the velocity vector is coined "jerk". So jerk is the maximum instantaneous change in velocity, applied at every corner of the motion.

### **Influence**
With high jerk values, the nozzle won't slow down as much when approaching a corner, resulting in a more constant velocity but also in greater vibrations.

Increasing the jerk will have two positive effects on your print:
* The printing time will be shortened, because the nozzle slows down less in the corners.
* Because the nozzle doesn't slow down to a crawl, you'll get less of a blob in the corners. The nozzle moves at a more constant pace, so it doesn't linger in the corner while material keeps flowing out the opening.

Increasing the jerk also has two negative effects:
* The printer will generally vibrate more for every corner, because the toolhead is instructed to make instantaneous changes in directions at certain acceleration. Those vibrations tend to create ripples in your print, resulting in ringing and reduced dimensional accuracy.
* At extreme values, your motors are likely to lose some steps in the corners, which can cause a layer shift.