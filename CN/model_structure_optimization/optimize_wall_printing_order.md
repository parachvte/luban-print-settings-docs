优化壁打印顺序
====
启用该设置后，Luban 将增加一些切片时间来优化壁打印顺序。其目标是通过连续打印同一部件的外周壁来减少空驶和回抽的次数。

![Optimisation disabled](../images/optimize_wall_printing_order_disabled.gif)
![Optimisation enabled](../images/optimize_wall_printing_order_enabled.gif)

启用该优化设置后，喷嘴会先打印完一个部件的所有内外壁，然后再开始打印下一个部件，而不是先打印完所有的内壁后再开始打印外壁。优化后，通常可以形成更好的打印效果。但在打印相邻的壁时，可以会遇到前面打印的壁还没完全固化的情况，进而影响尺寸精度。
