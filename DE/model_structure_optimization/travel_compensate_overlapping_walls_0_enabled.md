Compensate Outer Wall Overlaps
====
### **Description**
With this setting enabled, the extrusion for outer walls is reduced when the toolhead has to go over a thin area twice. This way, both walls in the thin part are printed without overlapping. This setting applies only to the outer walls.

![Where the line width gets reduced](../images/travel_compensate_overlapping_walls_enabled_schematic.svg)
![All lines are extruded with their full width, creating a part that will be too wide](../images/travel_compensate_overlapping_walls_enabled_disabled.png)
![Half of the lines have reduced their width, resulting in a more accurate print](../images/travel_compensate_overlapping_walls_enabled_enabled.png)

### **Usage**
The line width of the wall that overlaps another wall is reduced by the overlapping area. This compensates for the overextrusion and increases dimensional accuracy.

However, the disadvantage is that the flow rate becomes less even, which causes underextrusion in some places and overextrusion in others. Also, the flow rate can be reduced below the minimum flow rate of the nozzle and extruder set-up, leading to inconsistent flow and beading. To reduce this effect, you can set the [Minimum Wall Flow](wall_min_flow.md) which will turn some of the thinnest walls into travel moves at the cost of dimensional accuracy.

This setting tends to look messier in layer view. In the actual print, there are no borders between lines. The layer view shows only the paths of the g-code, but in actuality the material gets pushed aside by the other wall that it overlaps with. Also, tiny reductions in flow will not manifest itself in the actual print since the flow rate through the nozzle can't adjust that fast. Therefore, the actual print will come out smoother than layer view predicts.