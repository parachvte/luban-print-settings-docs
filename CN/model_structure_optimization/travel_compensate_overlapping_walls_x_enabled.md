补偿内壁重叠
====
### **参数描述**
若启用此设置，则当执行头需要在狭窄的区域内打印两条内壁走线时，喷嘴会减少耗材的挤出。这样，狭窄区域内的两条内壁走线便不会重叠。

此设置仅应用于内壁。补偿内壁重叠后，模型外观变化很小。

![All lines are extruded with their full width, creating a part that will be too wide](../images/travel_compensate_overlapping_walls_x_enabled_disabled.png)
![Half of the lines have reduced their width, resulting in a more accurate print](../images/travel_compensate_overlapping_walls_x_enabled_enabled.png)

### **参数使用**
在细窄的打印部件中，若两条内壁走线重叠，会导致耗材过度挤出。在启用补偿内壁重叠设置后，内壁的走线宽度将变小，避免过度挤出，从而提高尺寸精度。

但此设置也会导致耗材流出速率不均匀，造成局部挤出不足或过度挤出等问题。同时，若耗材挤出速率下降至低于挤出机设置的最小流量率，还可能会导致流量中断，最终形成断断续续的打印走线。为避免此类问题，您可以设置[最小壁流量](wall_min_flow.md)，使喷嘴不打印过细的内壁走线，尽管这将对尺寸精度造成影响。

在分层预览时，启用此设置进行切片的模型可能显得不太平整。但在实际打印中，走线之间没有边界。分层视图仅展示 G 代码的路径。但在实际打印中，重叠的模型内壁会相互挤压。另外，实际的喷嘴挤出速率无法如此迅速调整，细微的流量降低不会在实际打印中表现出来。因此，实际打印成品将比分层视图中所展示的更加平整光滑。