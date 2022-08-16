Ooze Shield Distance
====
### **Description**
Ooze shield distance is the minimum distance between the ooze shield and the model in the XY plane. This is used to prevent the ooze shield from merging with the model.

![A horizontal distance is kept between the shield and the model](../images/ooze_shield.svg)

### **Influence**
Setting the parameter small will make the ooze shield close to the model, so that the nozzle needs less time to move between. This prevents the nozzle from further oozing.

However, sometimes the shield will have a greater distance to the model, because the shield must also maintain a certain overhang angle in order to not collapse. 

### **Usage**
An ooze shield distance of 2 mm away from the model and an ooze shield angle of 60° will work well for most materials and 3D printing scenarios.