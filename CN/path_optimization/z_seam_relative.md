Z 缝相对
====
如果 Z 缝对齐设置为用户指定，你可以输入坐标，规定缝隙的位置。一般，这些坐标会指定 Z 缝在打印平台上的绝对位置。但是如果启用此设置，则坐标是相对于模型的相对位置。

![Disabled: The coordinates point to an absolute position in the centre of the build plate, so all the blue striped point towards the middle](../images/z_seam_relative_disabled.png)
![Enabled: The coordinates are relative to the model so every model will have the blue stripes in the same corner](../images/z_seam_relative_enabled.png)

通过启用此设置，在打印平台上复制模型时，每个复制件的 Z 缝会位于模型上完全相同的位置。 Z 缝位置不是在打印平台上的绝对位置，所以不会受到模型复制的影响。不论复制件在打印平台的什么位置，您都可以用完全相同的方式打印每个复制件。