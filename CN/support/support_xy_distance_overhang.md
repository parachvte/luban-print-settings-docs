最小支撑 X/Y 距离
====
### **参数描述**
如果 Z 距离的优先级高于 X/Y 距离，则支撑与模型之间的水平距离可小于[支撑 X/Y 距离](support_xy_distance.md)设置，以满足所需的[支撑 Z 距离](support_z_distance.md)。

此设置用于规定必须遵循的最小 X/Y 距离。无论 Z 距离如何，支撑与模型之间都必须保持最小 X/Y 距离。该最小 X/Y 距离优先于 Z 距离。 

![Minimum  X/Y  distance kicks in if the Z distance means that the  X/Y  distance would become very small](../images/support_z_overrides_xy.svg)

### **参数影响**
调高该参数值可降低支撑与模型侧面叠合的风险，避免在非必要位置留下疤痕，同时有利于更方便地移除支撑。但需要记住的是，这仅对中等陡度的悬垂起作用，这类悬垂结构是需要支撑的。调高该设置值还会使悬垂进一步下垂，降低其表面质量。