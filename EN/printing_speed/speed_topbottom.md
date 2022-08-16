Top/Bottom Speed
====
### **Description**
Top/Bottom Speed refers to the speed at which the top and bottom side of the model is printed. This setting can be configured separately from the normal print speed.

![Various structures printed at different speeds](../images/speed_difference.png)

### **Influence**
Printing the top and bottom side of the model slowly will cause the following effects:
* The printing time increases, sometimes drastically. Since the top and bottom sides have long lines, the speed has the greatest effect on printing time, rather than acceleration and jerk. Top and bottom can be a significant part of the total printing time.
* The quality of overhang will be improved, if there is a very flat overhang. Overhang that is still sloped steeply is not affected much, since the skin in that overhang is not exposed then. Printing overhang more slowly keeps the tension on the strings of filament, allowing it to cool down longer.
* Similar to overhang, it will improve the quality of the top surface. The same overhang effect is applied to the way that the top surface rests on the infill.
* The printer will generally vibrate less. If the build plate vibrates less, the top and bottom will look better.

**This setting has no significant effect on the build plate adhesion. The [Initial Layer Print Speed](speed_print_layer_0.md) is used for the first few layers.**