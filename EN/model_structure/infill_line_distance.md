Infill Line Distance
====
### **Description**
Besides setting the [Infill Density](infill_sparse_density.md) as a percentage, you can also adjust infill density by setting the distance between adjacent infill lines. A greater distance between infill lines will result in a lower infill density.

Normally the Infill Line Distance is computed from the desired infill density, depending on the selected infill pattern and line width.

![4mm distance between lines, resulting in 20% density](../images/infill_sparse_density_high.png)
![8mm distance between lines, resulting in 10% density](../images/infill_sparse_density_low.png)

### **Usage**
Infill Line Distance provides another perspective to look at infill density. On the top of the infill, the top layer lines have to cross from one infill line to the next. Reducing the Infill Line Distance reduces the bridged distance and improves the quality of the top surfaces.

Increasing the infill density (by reducing the line distance) has a big effect on your print, namely:
* Your print will be stronger.
* The top surface will be supported better, becoming smoother and more watertight.
* The pillowing effect will be reduced because the pockets of heat will be smaller.
* Your print will require more material and as a result will be heavier.
* It takes longer time to print.