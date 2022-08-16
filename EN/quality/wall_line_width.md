Wall Line Width
====
### **Description**
This setting indicates how wide the individual wall lines will be. The line width for the walls can be adjusted separately from the rest of the print. 

![The lines for the walls are much wider than the rest](../images/wall_line_width.png)

### **Influence**
Reducing the walls to a line width slightly below the nozzle size is beneficial for the strength. The nozzle will extrude slightly less material but its opening will overlap with the adjacent wall lines, which causes the material to be pushed aside by the previously-placed wall into its proper location. But that will also cause the plastic to fuse better to the adjacent walls, which allows the walls to fuse better together so that they can combine their strength, greatly improving the strength of the walls.

Reducing the Wall Line Width also allows the nozzle to print finer details. Especially the [Outer Wall Line Width](wall_line_width_0.md) is important for this property.

Increasing the Wall Line Width can reduce printing time. 

Making lines fit
----
When printing thin parts, adjusting the Wall Line Width is an important tool to get accurate and strong parts. Luban will only ever draw complete contours, so if a contour doesn't fit a gap, it will fall into the walls, which greatly compromises the strength and accuracy of the part.

Luban will attempt to fill such gaps between walls if [Fill Gaps Between Walls](../shell/fill_perimeter_gaps.md) is enabled, but that technique is less than ideal for arbitrary shapes and often takes a lot of printing time. When two walls overlap, the [Compensate Wall Overlaps](../shell/travel_compensate_overlapping_walls_enabled.md) feature will reduce the Wall Line Width to make sure that the part is dimensionally accurate, but this incurs flow changes which reduce the quality and strength of the print as well.

For an ideal fit, you can set the part to be an exact multiple of the Wall Line Width so that the walls fit precisely within the part. If you know how wide your part is, this can easily be done by adjusting the width of the walls. First you see how many contours you want to fit such that the lines still have a reasonable width. Then you can see how much you need to adjust the wall line width to make the lines fit properly. Keep in mind that you can adjust the [Outer Wall Line Width](wall_line_width_0.md) and [Inner Wall Line Width](wall_line_width_x.md) separately. Count carefully how many times each type of wall will be drawn to predict the effect of changing the Wall Line Width.

Fitting wall lines is an important skill for 3D printing that distinguishes expert 3D printer operators from the rest. Some practice is required.