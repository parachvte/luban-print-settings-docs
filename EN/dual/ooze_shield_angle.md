Ooze Shield Angle
====
### **Description**
Ooze shield angle is the maximum non-obtuse angle between the ooze shield and the Z axis. This setting limits the steepness of the ooze shield so that it doesn't collapse.

Normally, the ooze shield closely follows the shape of the model. However, when the outline of the model becomes steep, the ooze shield distance from the model will adjust to maintain a slope angle no larger than the ooze shield angle.

![Instead of following the model down the bottom and the top, it doesn't go steeper than the specified angle](../images/ooze_shield.svg)

### **Influence**
If you set the parameter to 0°, the ooze shield will be completely vertical around the entire model shape. The lower the angle, the more stable the shield will be.

If you set the parameter to 90°, the ooze shield will follow the model outline exactly. The higher the angle, the better the ooze shield will prevent oozing on the model.