Wall Thickness
====
### **Description**
Wall Thickness determines how thick the wall of the print will be. 

The walls of a print consist of the outer wall and the inner walls. Normally, there is only one outer wall but multiple inner walls. Therefore, ultimately it adjusts the number of inner walls to achieve the desired Wall Thickness.

![0.8mm thick walls](../images/wall_thickness_0.8.png)
![1.6mm thick walls](../images/wall_thickness_1.6.png)

The wall thickness must be a multiple of the wall line width. If it is not, it will be rounded to be an exact multiple.

### **Influence**
Wall Thickness is a major factor in how strong the print will be. Since the walls are adjacent, they can reinforce each other leading to a stronger part. For larger prints, this can be a much more effective way to get a strong object than adjusting the infill, depending on the shape.

Increasing the wall thickness will:
* Greatly increase the strength of the print.
* Reduces the shine-through effect where the infill pattern is visible on the outside.
* Improve overhang stability.
* Make the model more watertight.
* Significantly increase the printing time and material consumption of the print.