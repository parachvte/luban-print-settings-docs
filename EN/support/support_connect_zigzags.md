Connect Support ZigZags
====
### **Description**
If the zig-zag pattern is chosen for the [Support Pattern](support_pattern.md) setting, this setting makes the endpoints of the support pattern connect back towards itself, making the support stronger.

### **Usage**
For a normal zig-zag pattern, the endpoints are fairly weak, especially for materials that are hard to extrude and need some time to get started after a travel move. This setting prevents that by printing closed support lines without endpoints, making the support stronger. It improves adhesion to the build plate as well, since there is no enpoint where it can warp from.

This setting also increases the support's adhesion to the model significantly, if support is allowed to rest on the model. The extra connection of support endpoints increasing the surface with which support adheres to the model. This makes the support more stable but harder to remove and causes it to leave more of a scar.