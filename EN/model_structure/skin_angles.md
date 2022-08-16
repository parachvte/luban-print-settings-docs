Top/Bottom Line Directions
====
### **Description**
This setting allows you to change the direction in which the lines of the top and bottom are printed. This setting applies to both Lines and Zigzag patterns.

You can specify a comma-separated list of angles (in degrees), and the lines will alternate directions per layer. For example, you can set **[0,90,180,270]**, and the lines will rotate by 90° per layer.

![Lines pattern with 0°, 60° and 120° angles alternating](../images/skin_angles.gif)

By default, lines are printed in the two diagonal directions. For Cartesian gantry systems this is the most accurate, because the printer can use both the X and Y motors to accelerate the nozzle when turning around for the next line.

### **Influence**
There can be several reasons to change these directions:
* To achieve an optical effect.
* To optimise strength.
* To reduce overhang. You can also choose a direction that is perpendicular to the infill. This can minimise overhang over infill and achieve a better top surface quality.