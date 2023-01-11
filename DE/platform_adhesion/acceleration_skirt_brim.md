Skirt/Brim Acceleration
====
### **Description**
This setting controls how fast the nozzle accelerates into different directions while printing the skirt or the brim. 

### **Influence**
The brim is crucial for bed adhesion, so reducing the acceleration rates during the printing of the brim can reduce vibrations while the brim is printed and then make the adhesion of the brim to the build plate better, increasing the effectiveness of the brim at a minor printing time cost.

The effect of acceleration on the brim and skirt is usually extremely small though, because the brim and skirt consist of lines with smooth curves. The acceleration is often completely taken over by the [Skirt/Brim Jerk](jerk_skirt_brim.md) setting.

### **Usage**
The acceleration during the skirt or the brim can be set to a different rate than the rest of the print. Even though the skirt and brim are always exclusive to the initial layer, this setting overrides the [Initial Layer Print Acceleration](acceleration_print_layer_0.md) setting. The Brim or skirt will be printed using the acceleration determined with this setting, not the setting for the initial layer in general.



