Kompensieren Sie Außenwandüberlappungen
====
### **Beschreibung**
Wenn diese Einstellung aktiviert ist, wird die Extrusion für Außenwände reduziert, wenn der Werkzeugkopf zweimal über einen dünnen Bereich fahren muss. Auf diese Weise werden beide Wände im dünnen Teil ohne Überlappung gedruckt. Diese Einstellung gilt nur für die Außenwände.

![Wo die Linienbreite reduziert wird](../images/travel_compensate_overlapping_walls_enabled_schematic.svg)
![Alle Linien werden mit ihrer vollen Breite extrudiert, wodurch ein zu breiter Teil entsteht](../images/travel_compensate_overlapping_walls_enabled_disabled.png)
![Die Hälfte der Linien wurde verkleinert, was zu einem genaueren Druck führt](../images/travel_compensate_overlapping_walls_enabled_enabled.png)

### **Verwendung**
Die Linienbreite der Wand, die eine andere Wand überlappt, wird um den Überlappungsbereich reduziert. Dadurch wird die Überextrusion kompensiert und die Maßhaltigkeit erhöht.

Der Nachteil ist jedoch, dass die Fließgeschwindigkeit ungleichmäßiger wird, was an manchen Stellen zu Unterextrusion und an anderen zu Überextrusion führt. Außerdem kann die Durchflussrate unter die minimale Durchflussrate der Düsen- und Extruderanordnung reduziert werden, was zu ungleichmäßigem Durchfluss und Perlenbildung führt. Um diesen Effekt zu reduzieren, können Sie den [Mindestwandfluss] (wall_min_flow.md) einstellen, wodurch einige der dünnsten Wände auf Kosten der Maßgenauigkeit in Bewegungsbewegungen umgewandelt werden.

Diese Einstellung sieht in der Ebenenansicht tendenziell chaotischer aus. Im eigentlichen Druck gibt es keine Grenzen zwischen den Zeilen. Die Ebenenansicht zeigt nur die Pfade des G-Codes, aber tatsächlich wird das Material von der anderen Wand, mit der es sich überlappt, beiseite geschoben. Außerdem werden sich winzige Durchflussreduzierungen nicht im eigentlichen Druck bemerkbar machen, da sich die Durchflussrate durch die Düse nicht so schnell anpassen kann. Daher wird der tatsächliche Druck glatter erscheinen, als die Ebenenansicht vorhersagt.