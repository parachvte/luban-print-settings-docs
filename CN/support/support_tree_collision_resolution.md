树形支撑碰撞分辨率
====
### **参数描述**
树形支撑的一大缺点是切片耗时很长。在对树形支撑进行切片时，大部分的时间用在计算支撑分支与模型表面之间的距离，以防止支撑与模型重叠。本设置用于调节此类计算的准确度。提高分辨率（降低准确性）可以节省大量计算时间，但是会导致接近模型的支撑部件凹凸不平。

![A low resolution (0.2mm) causes the branches to become jagged](../images/support_tree_collision_resolution_lo.png)
![A high resolution (0.02mm) creates smooth branches](../images/support_tree_collision_resolution_hi.png)

### **参数影响**
提高本设置会节省大量切片时间，但会导致支撑部件凹凸不平，影响支撑强度，增加支撑部件在打印过程中脱落、导致打印失败的风险。