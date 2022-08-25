Maximum Fan Speed
====
### **Description**
The speed at which the fans in the toolhead will spin when the layer is printed with the Minimum Layer Time.

![Which fan speed is used where](../images/cool_fan_speed.svg)

Luban will calculate the printing time of each layer so as to determine its fan speed. If the printing time of a layer is larger than the Minimum Layer Time but smaller than the Regular/Maximum Fan Speed Threshold, then the fan speed of this layer is calculated as follows:

Fan Speed of the Layer = Maximum Fan Speed - (Maximum Fan Speed - Regular Fan Speed)/(Regular/Maximum Fan Speed Threshold - Minimum Layer Time) × (Printing Time of the Layer - Minimum Layer Time)

### **Usage**
By using the Maximum Fan Speed, layers whose printing time is short can cool down faster and solidify before the next layer gets put on top of it, and therefore prevents sagging.