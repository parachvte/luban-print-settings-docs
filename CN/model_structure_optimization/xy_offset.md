水平扩展
====
### **参数描述**
此设置将使得整个模型尺寸略微拓宽或收窄，以弥补打印过程中产生的尺寸误差。

![The original model](../images/xy_offset_neutral.png)
![Horizontally expanded, the screw holes are smaller now](../images/xy_offset_wider.png)
![A negative value shrinks the model, making the screw holes wider](../images/xy_offset_slimmer.png)

输入正值可拓宽打印件尺寸，减小孔洞尺寸。输入负值可收窄打印件尺寸，增大孔洞尺寸。

### **参数使用**
对于可容许偏差较小的打印件来说，此设置可以发挥重要作用。由于耗材会轻微变形，打印件的实际尺寸可能无法与数字模型的尺寸保持完全一致。增益误差仅需缩放模型即可解决，而打印方法不当造成的偏移误差则需通过此设置解决。

过度挤出或移动精度不足均可造成打印件过宽。若经常出现类似情况，您可通过此设置解决。