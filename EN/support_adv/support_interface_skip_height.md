Support Interface Resolution
====
Luban needs to determine where the support interface is printed by checking where it comes into contact with the model in the Z-direction. This setting determines the resolution at which it checks.

Increasing this setting causes Luban to sample at a lower resolution, which speeds up slicing. However increasing it too much can cause Luban to skip placing support interface if the model above or below the support is very thin. If the model is very thin, Luban's sampling could skip over the model, not noticing that it should place support interface there.