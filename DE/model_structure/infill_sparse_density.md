Infill Density
====
### **Description**
This setting configures the density of the volume inside the print, which is a major factor in the strength of the final print as well as the top surface quality. The greater the infill density, the closer the infill lines will be placed together. You can even go above 100% density, but that will result in overextrusion.

![20% density](../images/infill_sparse_density_high.png)
![10% density](../images/infill_sparse_density_low.png)

### **Usage**
For different infill patterns, you may need to set different densities. Infill patterns with lots of corners and crossings will not work well at great infill densities. Corners are a problem because the filament tends to drag along with the corner, creating air pockets in the outside of the corner where the material should've been deposited. Crossings are an even greater problem, because when one line crosses another, the line flow will get interrupted, causing underextrusion right after the crossing.

Increasing the infill density (by reducing the line distance) has a big effect on your print, namely:
* Your print will be stronger.
* The top surface will be supported better, becoming smoother and more watertight.
* The pillowing effect will be reduced because the pockets of heat will be smaller.
* Your print will require more material and as a result will be heavier.
* It takes longer time to print.