先填充物后壁
====
启用此设置，打印层将先打印填充物后打印壁。

![Setting is disabled, so walls are printed first](../images/infill_before_walls_disabled.gif)
![Setting is enabled, so infill is printed first](../images/infill_before_walls_enabled.gif)

此设置是对尺寸精度和模型强度的取舍：
* 如果先打印壁后打印填充物，壁将无所依附，因而下垂更严重。但是，壁也将先行凝固，不会被填充物撑开，从而防止填充物露出壁面。
* 如果先打印填充物后打印壁，填充物可能会对模型壁造成向外的挤压，导致壁的尺寸精度降低。而且，填充物还可能会穿透外壁，在壁面形成可见的图案。但是，打印时，填充物可以更好地为壁提供依附，使其更为稳固。

