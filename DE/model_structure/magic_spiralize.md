Spiralize Outer Contour
====
### **Description**
When spiralising the model, the model will not get any infill or any tops. It will only get one wall and a bottom. Crucially, if [Smooth Spiralized Contours](smooth_spiralized_contours.md) is enabled, height of the nozzle will gradually increase over the course of a layer. This way a spiral is created following the contour of the model. There will be no significant toolhead lift from one layer to another, because the nozzle is gradually moving up towards the next layer.

When printing layer by layer, the nozzle normally needs to move from one layer to the next. This movement causes the nozzle to stand almost still in XY direction for a fraction of a second, which leaves a seam on the surface called the Z seam. Spiralising the model can prevent that.

### **Usage**
Spiralize mode is common among many slicers. It is also known as "vase mode" sometimes, because it is a good way to print vases. Spiralize Outer Contour has the following effects:
* Prints extremely fast.
* The surface becomes very smooth. There is no [Z seam](../troubleshooting/seam.md) any more where it moved to the next layer if [Smooth Spiralized Contours](smooth_spiralized_contours.md) is enabled.
* The model will not be very strong. If the model is too big, it tends to split due to [warping](../troubleshooting/warping.md).
* It is difficult to get the print to be watertight if it is large.

Spiralize will not work well with prints with many horizontal surfaces. It doesn't handle overhangs at all, and doesn't print top surfaces so nothing will be able to lean on a horizontal surface. It also doesn't work well when there are multiple parts on a layer.