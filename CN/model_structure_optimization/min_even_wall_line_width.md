最小均匀壁线宽
====
打印薄件时，Cura 会调整壁线的宽度以适合模型的确切宽度。 Cura 也可以决定改用更少的墙线。此设置是 Cura 将两条线合二为一的阈值。它可以与[移除中间线的阈值](min_odd_wall_line_width.md)分开调整。

![中心线变宽以适应](../images/min_wall_line_width_0_34.png)
![减少此设置，改为使用两条线](../images/min_wall_line_width_even_0_1.png)

偶数与奇数线
----
此设置允许调整删除行的阈值，特别是在行数为偶数时。这是当中心有两条线而不是一条线时。它确定中间的这两行何时合并为一行。

最小偶数墙线宽可能与最小奇数墙线宽不同，因为它们连接在一起的方式不同。连线加入 通过使目的更接近来达到目的。 那里与这些线有一些重叠，导致过度挤压。 这与有奇数个墙的情况不同：中间的线就停止了，在印刷品上留下了一个空隙。 减小最小偶数壁线宽度减少了从偶数线到奇数线的过渡处的过度挤压。 减小最小奇数壁线宽度减小了从奇数线到偶数线的过渡处的间隙尺寸。

奇数线结束时留下的间隙在最终结果中比接缝处的过度挤出更明显，因此将最小偶数墙线宽设置为比最小奇数墙线宽高一点可能会有所帮助。

减少此设置会导致：
* 减少两条线连接在一起合并为一条线的重叠区域。
* 减少单中心线的最大宽度。
* 较细的线条，可能无法很好地挤出。
* 更多行，打印时间更长。

**此设置不仅适用于普通墙壁，还适用于 也适用于额外的表皮壁、支撑壁、填充壁和同心图案。**


<!--machine translation-->