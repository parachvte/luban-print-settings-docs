Top Surface Skin Layers
====
### **Description**
Top Surface Skin refers to the topmost layers that constitute the skin at the top surface of the print. Top Surface Skin Layers configures how many layers are printed for the top surface skin of the print.

The top surface skin layers are part of the top layers. However, you can configure different settings for the top surface skin layers from the rest of the top layers.

![The highest layer of the top is printed slower (blue) than the rest of the skin (green)](../images/roofing_layer_count.png)

### **Usage**
By adjusting settings for all the top layers, you can improve the the quality of the top surface, but that will also cost more material and time. However, if you adjust those settings only for the very top layer or two and print the rest of the top layers faster, you can achieve a similar effect with less material and time.

Settings that can be adjusted for the top surface skin:
* [Top Surface Skin Extruder](roofing_extruder_nr.md)
* [Top Surface Skin Flow](../material/roofing_material_flow.md)
* [Top Surface Skin Speed](../speed/speed_roofing.md)
* [Top Surface Skin Acceleration](../speed/acceleration_roofing.md)
* [Top Surface Skin Jerk](../speed/jerk_roofing.md)
* [Top Surface Skin Line Width](../experimental/roofing_line_width.md)
* [Top Surface Skin Pattern](../experimental/roofing_pattern.md)
* [Top Surface Skin Line Directions](../experimental/roofing_angles.md)

To achieve a nicer top surface, try reducing the speed and increasing the jerk.

When printing the top surface in a different colour (using the [Top Surface Skin Extruder](roofing_extruder_nr.md) setting), it is often necessary to print more than one layer in the other colour. Otherwise the original colour will still bleed through.