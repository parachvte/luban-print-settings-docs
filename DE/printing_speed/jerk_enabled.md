Enable Jerk Control
====
Jerk determines the speed at which the nozzle can go through corners. If jerk control is enabled, Luban will control how much jerk to apply during various parts of the print. If it's disabled, the printer firmware will choose a jerk value. 

![The relation between velocity, acceleration and jerk](../images/velocity_acceleration_jerk.svg)

**Jerk in 3D printing is not the same as jerk in physics.** The term "jerk" was introduced by Marlin. It was designed there as a workaround for the inherent problem in trying to perfectly follow a path. Since the nozzle is not allowed to deviate from the path (in theory), the nozzle would need to decelerate to 0mm/s in every corner. This would ruin your print, because decelerating to 0mm/s would cause a blob in every corner. It is not allowed to make curves to shortcut the corner, nor can it overshoot. Instead, Marlin allows for an instantaneous change in the velocity vector in every corner. The magnitude of this change in the velocity vector is coined "jerk".

So jerk is the maximum instantaneous change in velocity, applied at every corner of the motion.