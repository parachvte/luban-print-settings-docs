打印薄壁
====
### **描述**
通常，如果壁的宽度小于[外壁走线宽度](../resolution/wall_line_width_0.md)，因尺寸过小，无法打印，Luban 将会略过。

如果启用此设置，则 Luban 不会略过薄壁的打印。打印成品会变得凌乱，尺寸精度也会降低，但它从某种程度上来说更加符合模型原样。

![Some parts are too thin to print](../images/fill_outline_gaps_disabled.png)
![With this setting enabled, even thin parts will get printed](../images/fill_outline_gaps_enabled.png)

### **影响**
细小的打印结构由极细走线填充而成。如果这些走线既短又彼此相邻，它们将互相粘连。在某些情况下，将会产生小锯齿，进而大大增加打印时间。

在启用此设置前，您可尝试略微调整外壁走线宽度。如果部件略薄于单层走线宽度，您可调低整个打印件的外壁走线宽度，以便于正常打印细小部件，进而获得更好的打印效果。但过多调低走线宽度将会导致耗材流量不稳定，从而造成挤出不足。

此设置仅适用于打印水平方向上的细小结构。对于 Z 轴方向上的细小结构，请尝试调节[切片公差](../experimental/slicing_tolerance.md)，或调高层高。