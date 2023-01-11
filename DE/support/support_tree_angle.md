Tree Support Branch Angle
====
### **Description**
This setting determines the maximum overhang angle that the branches of tree support are allowed to make. If the angle is increased, the branches can be printed more horizontally, allowing them to reach farther. Reducing the branch angle will make the branches more vertical.

![A branch angle of 20°](../images/support_tree_angle_20.png)
![A branch angle of 40°](../images/support_tree_angle_40.png)

### **Influence**
If the Tree Support Branch Angle is increased, the branches will be allowed to have greater overhang angles. They can reach farther around obstacles, allowing the support to rest on the build plate more often, rather than on the model.

The most important effects of increasing the branch angle for tree support include:
* Reduced scarring. Less support needs to rest on the model. If [Support Placement](../support/support_type.md) is set to Touching Buildplate, more of the model can be supported.
* Reduced printing time and material usage. The branches can split off at higher elevations. The branches are split off just in time to be able to reach all of the overhang.
* Reduced reliability. If the overhang angle becomes too great, the support will be greatly weakened, increasing the chance that the support breaks or tumbles over.

### **Usage**
Large branch angles are best combined with low values for the [Tree Support Collision Resolution](support_tree_collision_resolution.md) setting. This will reduce the shifts in the tree's positions due to collision avoidance. That prevents the overhang distance from growing too big when the collision distance is adjusted.