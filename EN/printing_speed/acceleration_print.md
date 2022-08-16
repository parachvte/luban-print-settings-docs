Print Acceleration
====
### **Description**
This setting refers to the acceleration rate of toolhead towards the desired velocity when starting, stopping or changing direction. Just like a car, the toolhead needs to accelerate in order to change its speed or direction.

![A graph of the speed (V) over time when moving a nozzle back and forth. Acceleration is the slope of the line when it is starting, stopping or changing direction.](../images/velocity_acceleration_jerk.svg)

### **Influence**
Increasing this setting has the following two effects:
* The toolhead will reach the desired speed and direction sooner, which ensures faster print, especially when printing small parts.

* More vibrations will occur, which will reduce dimensional accuracy and cause ringing.