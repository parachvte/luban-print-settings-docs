Initial Layer Support Line Distance
====
### **Description**
The density of the support's first layer can be adjusted separately from the density of the rest of the support. This setting configures the distance between two adjacent lines where the support rests on the build plate.

![The pattern of the first layer is twice as dense as the rest of the support](../images/support_initial_layer_line_distance.png)

### **Usage**
This setting is useful to improve the adhesion between support and the build plate. Making the support pattern denser in the first layer will increase the contact area between the support and the build plate, making it stick better.

Since this setting only affects the first layer, so it doesn't significantly affect the strength of the support nor the time and material cost. It also doesn't affect the quality of overhangs. To adjust the density of support near the overhangs, look to the [Support Roof Line Distance](../support_adv/support_roof_line_distance.md) setting.

It is a good idea to make this setting a multiple of the line distance of the main body of support. This way, the lines of support will match up with the lines on the first layer, allowing them to rest on the first layer instead of floating in air.
