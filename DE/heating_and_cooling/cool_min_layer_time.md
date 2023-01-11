Minimum Layer Time
====
### **Description**
Minimum Layer Time configures the shortest duration of printing a layer that is allowed. The printer is not allowed to print a layer using any less time than this.

This ensures that a small layer has enough time to cool down and solidify before the next layer gets put on top of it, and therefore prevents sagging.

![Which fan speed is used where](../images/cool_fan_speed.svg)

### **Usage**
If a layer is so small that it would take less than the Minimum Layer Time to print at regular printing speed, then its actual printing speed will be reduced so that the layer still takes the Minimum Layer Time to print. But the printing speed will not be reduced below the [Minimum Speed](cool_min_speed.md) setting). If printing the layer at the minimum speed would take less than the Minimum Layer Time, the toolhead will wait at the end of the layer until the Minimum Layer Time has passed.

For a layer that is printed with the minimum layer time, the toolhead will use the [Maximum Fan Speed](cool_fan_speed_max.md) so as to cool down the layer faster.