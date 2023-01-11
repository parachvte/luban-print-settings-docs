Layer Height
====
### **Description**
The 3D printer puts down plastic in layers. The Layer Height is the most important factor in both the visual quality of your final print and the printing time.

![0.1mm layer height](../images/layer_height_0.1.png)
![0.3mm layer height](../images/layer_height_0.3.png)

### **Influence**
Changing this setting will have the following effects:
* Having thinner layers will increase the visual quality of the print. Since the layers are thinner, the stair stepping effect at the layer's borders will be reduced. Also, the layers will be closer together and so the creases in between the layers will be smaller, leading to an overall smoother finish.
* Having thinner layers allows the printer to produce more detail on the top and bottom sides of your print.
* Having thicker layers tends to make the print stronger. There will be fewer borders between the layers, which tend to be a weak point. The thicker layers will not shear as much.
* Having thicker layers will reduce printing time, because the nozzle will not have to make as many horizontal movements.

### **Usage**
----
Many settings depend on the Layer Height. Because Layer Height significantly affects the flow rate of material through the nozzle, many parameters of the printing process will change. For instance, when increasing the Layer Height, you should probably increase the printing temperature slightly to offset the extra rate of heat loss. The temperature then affects the liquidity of the material which will affect how sharp your corners will be and what cooling is needed, and so on. It is always wise to start from a pre-made quality profile available to your printer that has a Layer Height close to what you want.

You can choose a desired layer height in Custom Mode, but pre-made profiles are available with various layer heights as well. You can choose from profiles for various layer heights in the Recommended Mode using a slider or using the drop-down widget in Custom Mode. Since these profiles also change some parameters that depend on the Layer Height, you'll probably achieve a better quality that way.

Additional notes
----
At very low layer heights, you could run into the resolution limit of your Z axis. Look up the step size of your printer's Z axis and make sure that the layer height is a multiple of the step size. If the step size and layer height don't match up properly, some layers will be thicker than others which will result in banding.

**Note that the layer height setting is not applicable to the initial layer of the print or for the raft layers, which have their own settings to adjust the layer height separately. When using adaptive layers, this layer height setting will be used as a baseline but the actual layer height will have some variation.**