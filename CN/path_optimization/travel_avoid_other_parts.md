空驶时避开已打印部分
====
### **参数描述**
启用该设置后，执行头在打印部件周围空驶时会尽量避开已打印对象。 执行头将绕行一小段距离。如果绕行可以使喷嘴不经过任何其他对象，则不会触发回抽，除非路径长度超过[最大梳距，无回抽](retraction_combing_max_distance.md) 设置。

![When disabled, travel moves can cross through other parts](../images/travel_avoid_other_parts_disabled.png)
![When enabled, travel moves will avoid other parts](../images/travel_avoid_other_parts_enabled.png)

除了避开其他部分外，空驶移动中喷嘴也会尽量靠近打印壁。这意味着当穿过打印壁进入或退出打印部件时，喷嘴进出路径将与壁垂直。

### **参数使用**
该设置通常会提高打印件的表面质量，因为喷嘴不再频繁穿过打印壁。穿过打印壁会导致壁上出现疤痕，应该避免。

然而，该设置也会增加耗材渗出量，因为更多的空驶移动将在不进行回抽的情况下进行，且空驶移动距离更长。对于容易渗出的材料，建议禁用避开其他部分的设置。

由于空驶距离增加，打印时间可能会略有增加，但该情况下的回抽次数减少通常可抵消增加的时间。