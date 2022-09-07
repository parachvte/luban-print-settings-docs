Wall Line Count
====
### **Description**
This setting determines how many contours of wall will be drawn on every layer.

![Two walls](../images/wall_thickness_0.8.png)
![Four walls](../images/wall_thickness_1.6.png)

The walls of a print consist of the outer wall and the inner walls. Normally, there is only one outer wall but multiple inner walls. Therefore, ultimately it adjusts the number of inner walls to achieve the desired Wall Line Count.

### **Influence**
The number of walls is a major factor in how strong the print will be. Since the walls are adjacent, they can reinforce each other leading to a stronger part. For larger prints, this can be a much more effective way to get a strong object than adjusting the infill, depending on the shape.

Increasing the number of walls will:
* Greatly increase the strength of the print.
* Reduces the shine-through effect where the infill pattern is visible on the outside.
* Improve overhang stability.
* Make the model more watertight.
* Significantly increase the printing time and material consumption of the print.