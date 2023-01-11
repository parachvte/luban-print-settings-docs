Regular/Maximum Fan Speed Threshold
====
### **Description**
Regular/Maximum Fan Speed Threshold configures a threshold of the layer printing time to determine the fan speed used in the layer. 

* If the printing time of a layer is equal to or larger than the Regular/Maximum Fan Speed Threshold, then this layer will be printed with the Regular Fan Speed.

* If the printing time of a layer is smaller than the Regular/Maximum Fan Speed Threshold but larger than the Minimum Layer Time, then the fan speed of this layer is calculated as follows:

    Fan Speed of the Layer = Maximum Fan Speed - (Maximum Fan Speed - Regular Fan Speed)/(Regular/Maximum Fan Speed Threshold - Minimum Layer Time) × (Printing Time of the Layer - Minimum Layer Time)

* If a layer is printed with the Minimum Layer Time, then this layer will be printed with the Maximum Fan Speed.

![Which fan speed is used where](../images/cool_fan_speed.svg)

### **Usage**
If the printing time of a layer is short, the layer may not be able to cool down properly. That's why we need to increase the fan speed to ensure that the layer is solidified.