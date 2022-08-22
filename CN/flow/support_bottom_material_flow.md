支撑底板流量
====
### **参数描述**
此参数用于调节支撑底板的流量。 

### **参数使用**
支撑底板的流量可与支撑其他部位的流量分开调节。

调节支撑底板的流量是一个权宜之计，用于解决挤出速率异常或模型与支撑之间的附着问题。通过调节支撑底板的[线宽](../resolution/support_bottom_line_width.md) 或[走线间距](../support/support_bottom_line_distance.md) 可实现同样的效果，但调节流量或能实现更直观的效果。

如果挤出速率出现异常，建议检查[打印速度](../speed/speed_support_bottom.md)、[温度](material_print_temperature.md) 和[线宽](../resolution/support_bottom_line_width.md)。可能是由于支撑底板的流量与其他层结构的流量相差过大。可能是由于线条过细，以至于材料无法正常挤出。 

如果界面使用[不同的材料](../support/support_interface_extruder_nr.md)打印，常见的问题为，用于打印界面的材料还来不及开始正常流动。可使用[装填塔](../dual/prime_tower_enable.md) 或通过增加[支撑底板的面积](../support/support_bottom_offset.md) 来解决此问题。


