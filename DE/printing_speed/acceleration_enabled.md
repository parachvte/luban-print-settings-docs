Enable Acceleration Control
====
### **Description**
This setting configures how fast the toolhead should accelerate. 

![A graph of the speed (V) over time when moving a nozzle back and forth. Acceleration is the slope of the line when it is starting, stopping or changing direction.](../images/velocity_acceleration_jerk.svg)

### **Influence**
Increasing this setting have the following two effects:
* The toolhead will reach the desired speed sooner, which ensures faster print, especially when printing small parts. 

* More vibrations will occur, which will reduce dimensional accuracy and cause ringing.

### **Usage**
Normally the printer decides by itself how fast the toolhead should change direction and speed, but if this setting is enabled, Luban can decide this instead, which allows you to set different acceleration rates for each feature of a print.