支撑填充走线方向
====
### **参数描述**
此参数可用于调整支撑填充图案的走线方向。

支撑图案的走线方向通常垂直于其所支撑的大部分对象。这样支撑材料必须跨越的距离就能达到最短。

![An angle of 0°](../images/support_infill_angle_0.png)
![Alternating between 30° and 60°](../images/support_infill_angles.png)

该设置支持输入多个角度，各角度间用逗号隔开。Luban 将根据你设置的角度值在各层中交替变换走线方向。

### **参数使用**
如果打印模型时调整了[顶部/底部走线方向](skin_angles.md)，那么支撑的走线方向最好也要做相应的调整，使支撑的走线方向仍然与打印件底部的走线方向垂直。这样模型底部走线就能很好地依靠在支撑走线上，而不会落在走线间隙中。使用线条和锯齿形的[支撑图案](../support/support_pattern.md)时，这一点尤其重要，因为这两种图案的支撑走线是长直的线条，相邻走线之间会形成很长的间隙。
