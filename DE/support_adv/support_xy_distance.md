Unterstützung X/Y-Abstand
====
Dieser gibt an, wie viel Abstand horizontal zwischen Stütze und Modell eingehalten werden muss.

![Eine horizontale Lücke zwischen der Stütze und dem Modell](../images/support_xy_distance.png)

Der horizontale Abstand soll verhindern, dass der Support auf das Modell trifft und dort eine Narbe auf der Oberfläche hinterlassen würde. Dadurch entsteht jedoch auch ein größerer Abstand zwischen dem Modell und der Stützstruktur, wo sich der Überhang befindet, wodurch einige Überhänge ungestützt bleiben.

X/Y-Abstand und Z-Abstand
----
Der X/Y-Abstand und der Z-Abstand könnten miteinander in Konflikt geraten. In diesem Fall kann die Einstellung [Support Distance Priority](support_xy_overrides_z.md) verwendet werden, um die Präferenz zwischen den beiden zu bestimmen.

![X/Y überschreibt Z](../images/support_xy_overrides_z.svg)

Wenn X/Y Z überschreibt, wird der X/Y-Abstand gehalten, auch wenn dadurch der Z-Abstand zu groß ist. Der Z-Abstand wird weiterhin als Minimum gehalten.

![Z überschreibt X/Y](../images/support_z_overrides_xy.svg)

Wenn Z X/Y überschreibt, wird der Z-Abstand gehalten, auch wenn dies bedeutet, dass der X/Y-Abstand zu klein ist. Der X/Y-Abstand hat dann nur abseits der Auflagerhöhe, wo der Z-Abstand keinen Einfluss hat, einen Einfluss.