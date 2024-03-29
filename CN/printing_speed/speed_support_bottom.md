支撑底板速度
====
### **参数描述**
如果[支撑底板已启用](../support_adv/support_bottom_enable.md)，则此设置可决定打印支撑底部的速度。

![Various structures printed at different speeds](../images/speed_difference.png)

较快的支撑底板速度可缩短打印时间。

### **参数使用**
此设置的效果极大地依赖于环境。对于某些材料，尤其是快速冷却且[支撑底部距离](../support_adv/support_bottom_distance.md)大的材料，较快的速度会增强支撑和模型之间的附着力。效果类似于桥接：在更快的速度下，材料悬浮更粗糙，没有足够时间进行执行头风扇冷却。此操作会导致支撑在打印件表面上留下更明显的痕迹。

对于其他材料，较快的速度会减少喷嘴放置材料的力量，使材料无法大量流出。仅在支撑底板起始和结束处即将达到流速变化限制时，较快的速度才比较有利。

如果支撑底板非常靠近模型，例如对于 PVA 或其他可溶性支撑材料，提高支撑底板速度还会导致喷嘴触碰模型，对轻度损坏模型表面。
