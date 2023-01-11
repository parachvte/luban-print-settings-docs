Tree Support Collision Resolution
====
### **Description**
A major disadvantage of tree support is that it takes a long time to slice. Most of the calculations necessary for tree support are for the branches of the tree to avoid colliding with the mesh. This setting determines the accuracy of these collision avoidance calculations. Increasing this resolution (lower accuracy) will save a lot of time calculating, but will also make the support appear jagged when it's near the mesh.

![A low resolution (0.2mm) causes the branches to become jagged](../images/support_tree_collision_resolution_lo.png)
![A high resolution (0.02mm) creates smooth branches](../images/support_tree_collision_resolution_hi.png)

### **Influence**
Increasing this setting will save a lot of slicing time. It will also make the support more jagged, which compromises its strength, increasing the chance that the support breaks off during printing and making the print to fail.