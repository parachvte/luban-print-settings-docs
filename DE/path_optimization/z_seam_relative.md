Z Seam Relative
====
If Z Seam Alignment is set to User Specified, you can enter coordinates for where the seam must be located. Normally those coordinates specify the absolute position of Z seam on the build plate. If this setting is enabled, those coordinates will be taken relative to the position of the model.

![Disabled: The coordinates point to an absolute position in the centre of the build plate, so all the blue striped point towards the middle](../images/z_seam_relative_disabled.png)
![Enabled: The coordinates are relative to the model so every model will have the blue stripes in the same corner](../images/z_seam_relative_enabled.png)

When a model is duplicated on the build plate, this setting causes the Z seam to be positioned in exactly the same location for each of the duplicates, rather than having them point toward the same point on the build plate. This allows you to print every copy in exactly the same way regardless of their positions on the build plate.