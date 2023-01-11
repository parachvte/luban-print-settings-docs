Skirt/Brim Jerk
====
### **Description**
This setting determines the speed at which the nozzle can go through corners while printing the skirt or brim. It can be configured separately from the rest of the initial layer.

### **Influence**
When the nozzle is going through corners, the toolhead will not only vibrate horizontally, but the build plate can also vibrate vertically. This vibration causes the adhesion between the skirt or brim and the build plate to be less consistent. Reducing the jerk during the printing of the skirt or the brim can reduce the chance of the print letting go of the build plate.

### **Usage**
Even though the skirt and brim are always part of the initial layer, the [Initial Layer Print Jerk](jerk_print_layer_0.md) has no effect on them. This setting overrides the Initial Layer Print Jerk.

