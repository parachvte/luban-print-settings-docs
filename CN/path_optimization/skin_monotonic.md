单调的顶/底顺序
====
通常，Cura 对顶线/底线进行排序，使它们之间的行进距离很小。如果启用此设置，它将对顶行/底行进行排序，以使相邻行始终在相同方向上重叠打印。

打印顶部/底部线条时，这些线条通常与它们旁边的线条有一点重叠，因为线条的形状不是完美的矩形。这种重叠使线条略微倾斜，导致它们在不同方向反射不同的光。如果相邻线条重叠不同，则此反射会发生变化。您可以在最终结果中看到这一点。它赋予表面的不同区域不同的光泽。以单调顺序打印可确保整个表面的重叠相同，因此反射光的方式没有差异。这使表面看起来更加一致和光滑。

![不是单调顺序](../images/skin_monotonic_disabled.gif)
![单调顺序，总是从右下角开始 角](../images/skin_monotonic_enabled.gif)

 单调顺序会略微增加行程移动的长度，但这种影响非常小。 它只对印刷品有视觉效果。 单调排序没有机械优势。

 要获得光滑的表面，请考虑将此设置与设置 [Combing Mode](../travel/retraction_combing.md) 配对以避免蒙皮，并可能启用 [Z Hops](../travel/retraction_hop.md)。 或者，您也可以启用 [ironing](ironing_enabled.md)，但这会完全覆盖此设置的用途。 熨烫有自己的[单调选项](ironing_monotonic.md)。

 ![当线条打印顺序不一致时微光是不同的](../images/skin_monotonic_disabled.jpg)
 ![单调顺序，微光到处都是一样的](../images/skin_monotonic_enabled.jpg)

<!--machine translation-->