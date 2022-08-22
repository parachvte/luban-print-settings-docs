支撑 X/Y 距离
====
该距离是指支撑与模型在水平方向上必须保持的距离。 

![A horizontal gap between the support and the model](../images/support_xy_distance.png)

设置水平距离的目的是防止支撑与模型叠合，以致在模型表面留下疤痕。 然而，这会使模型和支撑结构间的距离更大，导致部分悬垂结构无法获得支撑。

X/Y 距离和 Z 距离
----
X/Y 距离和 Z 距离可能会相互冲突。 此时，[支撑距离优先级](support_xy_overrides_z.md)设置可用来确定二者之间的优先级。

![X/Y overrides Z](../images/support_xy_overrides_z.svg)

如果 X/Y 距离的优先级更高，则优先确保 X/Y 距离符合要求，即便这会导致 Z 距离过大。但是，模型与支撑之间仍然会保持设置的最小 Z 距离。

![Z overrides X/Y](../images/support_z_overrides_xy.svg)

如果 Z 距离的优先级更高，则优先确保 Z 距离符合要求，即便这会导致 X/Y 距离过小。此时， X/Y 距离仅会在 Z 距离不起作用的位置对打印件产生影响，即支撑结构的侧面而非顶部。