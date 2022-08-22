支撑悬垂角度
====
### **参数描述**
支撑悬垂角度设置的是受到支撑的最小悬垂角度。本设置会影响打印支撑的材料用量，降低本设置的值会导致生成更多支撑。

![A low overhang angle generates more support](../images/support_angle_low.png)
![A high overhang angle generates less support](../images/support_angle_high.png)
![The supported areas are indicated in red](../images/support_angle_prepare_mode.png)

### **参数影响**
降低本设置会让更多打印部件得到支撑，甚至包括表面坡度较大、打印过程中不太会下垂的部件。如果生成不必要的支撑，会增加打印时间和不必要的材料消耗，同时在支撑接触打印件的地方留下疤痕。

不过，有时候降低支撑悬垂角度是必要的，以免材料过度下垂。这样做通常可以改善打印成品的尺寸精确性，提高悬垂结构的打印质量。

### **参数使用**
在使用支撑时，最好在预览阶段提前查看支撑的生成情况。在预览中，你可以看到实际生成支撑的位置。调整本设置可以滤除不必要的支撑。