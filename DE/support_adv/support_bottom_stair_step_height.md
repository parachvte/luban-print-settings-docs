Support Stair Step Height
====
### **Description**
If [Support Placement](support_type.md) is set to "Everywhere", the support is allowed to rest on the model. It won't follow the contours of the model exactly though. Instead, the bottom side of the support is given a stair stepping pattern. This way, the support only makes a connection to the model in a few locations.

This setting determines the height of these steps.

![Stair steps forming at the bottom of support](../images/support_bottom_stair_step_height.png)

### **Influence**
The [Support Stair Step Maximum Width](support_bottom_stair_step_width.md) setting limits the width of the steps. If the model's surface is so shallow that a small step height would incur a huge step width, the support will follow the surface of the model for the rest of the step's height.

Reducing this setting will cause the bottom of support to be smoother. This increases adhesion between the support and the model, making the support more stable but also making it harder to remove the support.