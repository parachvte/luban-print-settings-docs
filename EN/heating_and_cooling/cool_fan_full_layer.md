Regular Fan Speed at Layer
====
### **Description**
Regular Fan Speed at Layer configures the layer at which the fan speed is transitioned from Initial Fan Speed to Regular Fan Speed.

At the beginning of the print, the toolhead will use the lower Initial Fan Speed for the initial layer. Then, the fan speed will gradually increase and finally reach the Regular Fan Speed at the layer you set. For example, if you set the Initial Fan Speed to 0%, the Regular Fan Speed to 100%, and Regular Fan Speed At Layer to 6, then the fan speed will begin at 0%, continuously increase during the printing of the first five layers, and reach 100% at the sixth layer.

![Which fan speed is used where](../images/cool_fan_speed.svg)

### **Influence**
Normally, the Initial Fan Speed is set considerably lower to prevent warping and increase build plate adhesion. However, after the initial layer is printed, it may still be risky to increase the fan speed too suddenly. If the first few layers cool down too quickly, they may still shrink and through shear friction pull the first layer up, warping the print as well. The purpose of this setting is to allow printing multiple layers with a lower fan speed. This way, the warping can be prevented until the print has sufficient stiffness to resist the warping.

### **Usage**
* Increasing this setting can improve bed adhesion.
* If your build plate is heated to a high temperature, you might need to reduce this setting in order to prevent [elephant's foot](../troubleshooting/elephants_foot.md) or oozing.