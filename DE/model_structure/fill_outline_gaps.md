Print Thin Walls
====
### **Description**
Normally, Luban will omit walls that are thinner than the [Outer Wall Line Width](../resolution/wall_line_width_0.md), discarding them as being too small to print.

If this setting is enabled, Luban will make an attempt at printing these pieces anyway. The resulting print will be inaccurate and messy, but it should produce the desired shape somewhat reliably.

![Some parts are too thin to print](../images/fill_outline_gaps_disabled.png)
![With this setting enabled, even thin parts will get printed](../images/fill_outline_gaps_enabled.png)

### **Influence**
The tiny pieces are filled with extremely thin lines. These lines are then combined if they are short and adjacent to one another. This works for many cases, but in some cases it produces a tiny zig zag, significantly increasing printing time.

It is advisable, before resorting to this setting, to try adjusting the outer wall line width slightly. If your part is slightly thinner than one line width, it might give a better result if you reduce the outer wall line width of your entire print such that the thin parts print normally. However reducing the line width too far will cause the material to flow unreliably, leading to underextrusion.

This will only attempt to print pieces that are thin in the horizontal plane. For thin pieces in the Z direction, see the [Slicing Tolerance](../experimental/slicing_tolerance.md) setting or increase the layer height.