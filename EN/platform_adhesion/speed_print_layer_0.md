Initial Layer Print Speed
====
### **Description**
This setting controls the speed when printing the initial layer of the model.

### **Influence**
Reducing the initial layer printing speed will improve the adhesion between the model and the build plate. This is because the material stays hotter for a longer time and can then flow out further. This reduces the internal stresses in the material and increases the contact area, both of which increase the adhesion.

### **Usage**
Adjusting this setting will adjust the speed of the extrusion moves in the first layer, but not the travel moves. For that, adjust the [Initial Layer Travel Speed](speed_travel_layer_0.md) setting. By default, this setting influences the [Skirt/Brim Speed](skirt_brim_speed.md) setting, but it can still be adjusted separately. The [speed of the raft base layer](../platform_adhesion/raft_base_speed.md) is not affected.
