Support Overhang Angle
====
### **Description**
The overhang angle influences how much material is used to support the print. The angle indicates the minimum angle that gets supported. Reducing the value of this setting generates more support.

![A low overhang angle generates more support](../images/support_angle_low.png)
![A high overhang angle generates less support](../images/support_angle_high.png)
![The supported areas are indicated in red](../images/support_angle_prepare_mode.png)

### **Influence**
Reducing this setting makes more of the printed parts get supported, even surfaces that are steeper and won't sag much during printing. If unnecessary support is generated, it'll increase the printing time and material usage unnecessarily and also create scars where the support touched the print.

However reducing the support angle is sometimes necessary to prevent the material from sagging too much. It generally improves the dimensional accuracy of the final part and makes the overhangs look better.

### **Usage**
Whenever working with support, it's a good idea to preview what the support looks like in the Preview stage. There you can see where it will actually generate support. Adjusting this setting can filter out unnecessary support.