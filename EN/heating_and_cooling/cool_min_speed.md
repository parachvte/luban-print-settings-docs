Minimum Speed
====
Minimum Speed configures the lowest printing speed that is allowed. This setting is to limit the printing speed of layers that use the [Minimum Layer Time](cool_min_layer_time.md).

If a layer is so small that it would take less than the Minimum Layer Time to print at regular printing speed, then its actual printing speed will be reduced so that the layer still takes the Minimum Layer Time to print. But the printing speed will not be reduced below the Minimum Speed. If printing the layer at the minimum speed would take less than the Minimum Layer Time, the toolhead will wait at the end of the layer until the Minimum Layer Time has passed.

If the printing speed is too slow, the heat from the nozzle will have time to spread out to lower layers and adjacent walls. As a result, the print surface may become messy and localised sagging may happen. That is why we need to set a minimum printing speed as a limit. 