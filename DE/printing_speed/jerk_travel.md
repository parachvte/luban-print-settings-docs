Travel Jerk
====
### **Description**
This setting determines the speed at which the nozzle can go through corners while travelling across the build volume. 

### **Influence**
Setting the jerk too high can cause the motors to lose some steps, which can lead to a layer shift.

### **Usage**
If you've configured Luban to [avoid printed parts when travelling](../travel/travel_avoid_other_parts.md), then keeping a sufficient [distance](../travel/travel_avoid_distance.md) will prevent the nozzle from hitting your print even if it vibrates a bit. It's therefore useful to set the jerk very high during the travel moves to save printing time.

This setting can be configured separately from when the nozzle is extruding material.