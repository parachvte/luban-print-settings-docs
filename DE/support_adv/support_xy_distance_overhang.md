X/Y-Mindestabstand der Stütze
====
### **Beschreibung**
Wenn der Z-Abstand der Stütze gegenüber dem X/Y-Abstand bevorzugt wird, darf der horizontale Abstand zwischen der Stütze und dem Modell kleiner als die Einstellung [Support X/Y Distance](support_xy_distance.md) werden, um die erforderliche [Support Z-Abstand] (support_z_distance.md).

Diese Einstellung definiert einen minimalen X/Y-Abstand, der unabhängig vom Z-Abstand eingehalten werden muss. Dieser minimale X/Y-Abstand überschreibt wieder den Z-Abstand.

![Der minimale X/Y-Abstand tritt ein, wenn der Z-Abstand bedeutet, dass der X/Y-Abstand sehr klein werden würde](../images/support_z_overrides_xy.svg)

### **Einfluss**
Durch Erhöhen dieser Einstellung wird die Wahrscheinlichkeit verringert, dass die Stütze das Modell seitlich trifft und eine Narbe an unnötigen Stellen hinterlässt. Es erleichtert auch das Entfernen der Stütze. Beachten Sie jedoch, dass dies nur bei mittelsteilen Überhängen wirklich zum Tragen kommt, wo der Überhang normalerweise sowieso unterstützt werden muss. Eine Erhöhung dieser Einstellung führt auch zu einem stärkeren Durchhang des Überhangs, wodurch seine Oberflächenqualität verringert wird.