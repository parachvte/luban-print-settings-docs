Lift Head
====
With Lift Head enabled, the toolhead will rise up a bit when it reaches the end of a layer waiting for the Minimum Layer Time to pass.

If a layer is so small that it would take less than the Minimum Layer Time to print at regular printing speed, then its actual printing speed will be reduced so that the layer still takes the Minimum Layer Time to print. But the printing speed will not be reduced below the Minimum Speed. If printing the layer at Minimum Speed would take less than the Minimum Layer Time, the printer will wait at the end of the layer until the Minimum Layer Time has passed. Enabling Lift Head is to make the toolhead lift up a bit when it finish printing the very small layer.

If this setting is disabled, then the print head will wait at the end of the layer with the nozzle touching the print.

![When the minimum layer time is reached, the head may lift up](../images/cool_fan_speed.svg)

The print head will always move up by 3 mm. There is no setting to configure this at the moment.