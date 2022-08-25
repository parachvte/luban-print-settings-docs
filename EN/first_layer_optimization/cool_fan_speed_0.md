Initial Fan Speed
====
### **Description**
Initial Fan Speed is the rotation speed of the fans on the toolhead at the beginning of the printing. 

The fan speed will gradually transition from the Initial Fan Speed to the Regular Fan Speed based on the [Regular Fan Speed At Layer](cool_fan_full_layer.md) you set. For example, if you set the Initial Fan Speed to 0%, the Regular Fan Speed to 100%, and Regular Fan Speed At Layer to 6, then the fan speed will begin at 0%, continuously increase during the printing of the first five layers, and reach 100% at the sixth layer.

### **Usage**
The Initial Fan Speed is normally set lower than the Regular Fan Speed. This allows the material to cool down slower and sag further onto the build plate, and thus improves build plate adhesion.
