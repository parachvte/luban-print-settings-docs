树形支撑分支直径
====
### **参数描述**
此参数决定了树形支撑分支末端的直径。

![The shape of a branch with a diameter of 1.4mm](../images/support_tree_branch_diameter_1_4mm_5.png)
![The shape of a branch with a diameter of 5mm](../images/support_tree_branch_diameter_5mm.png)

与通用支撑不同，树形支撑不使用平坦宽大的顶板，而是使用离散的细小分支来支撑模型，与模型悬垂区域之间会形成多个细小的圆点形接触面。设置树形支撑分支直径实际上是在调整每个接触点（也就是树形支撑分支顶部）的直径。 

就像树一样，树形支撑分支的底部较粗，越靠近顶部就越细，粗细的变化比率取决于[树形支撑分支直径角度](support_tree_branch_diameter_angle.md)。 

### **参数影响**
越粗的分支越稳定，树形支撑倒塌的可能性也越低。 

但是，较粗的分支也较难移除。此外，较粗的分支在绕开模型时也会更加困难。这可能会使得支撑更多地被打印在模型上而非打印平台上。因此，在移除支撑结构后，可能会在模型上留下更多疤痕。
