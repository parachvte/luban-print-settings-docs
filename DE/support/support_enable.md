Generate Support
====
### **Description**
3D printers with fused-filament fabrication work by placing a string of molten plastic in the specified locations. If this plastic is not supported, it will sag down. Therefore, the overhanging parts of a model usually need to be supported by an additional support structure, which will be removed and discarded after the printing is finished.

This setting enables creating support structures to support the model while it's being printed.

![Marking the model red where support is needed](../images/support_enable_prepare_mode.png)
![Support structure (in cyan) to support the model during printing](../images/support_enable.png)

### **Influence**
Printing support takes a significant amount of time and material. Besides, the support will need to be broken or cut off from the model when the print is completed. This tends to leave a scar on the model surface.

However, support is still necessary for some situations. For instance, if the model has a piece that points down towards the build plate, this piece would otherwise just hang in mid air without support.

Design for preventing support
----
Although support is sometimes necessary, printing support should be prevented if possible. There are numerous techniques to prevent having to print support. 
* Place your model down to the build plate instead of making it float in mid air.
* Orient your model such that there are no flat surfaces overhanging in mid air.
* Avoid designing overhangs as much as possible.