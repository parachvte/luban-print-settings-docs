Muster oben/unten
====
Mit dieser Einstellung können Sie auswählen, wie die oberen und unteren Schichten mit Material gefüllt werden. Es stehen mehrere verschiedene Druckmuster zur Verfügung, aber die Muster hier sind begrenzter als die für die Füllung. Es sind nur Muster verfügbar, die feste Schichten erstellen.

Linien
---
![Linien](../images/top_bottom_pattern_lines.png)

Das Grundlinienmuster zeichnet gerade Linien über die Oberfläche. Diese Linien sind standardmäßig so ausgerichtet, dass sie gut durch die Füllung und Stütze unterstützt werden. Die Richtung der Linien wechselt zwischen den Schichten.
* Bietet eine schöne Oberflächenqualität.
* Haftet stark an den Wänden und bildet relativ starke Teile.

Konzentrisch
----
![Konzentrisch](../images/top_bottom_pattern_concentric.png)

Das konzentrische Muster zeichnet Konturen von den Wänden ins Innere des Modells.
* In alle Richtungen gleich stark.
* Verhindert das Entstehen von Lufteinschlüssen und Lücken. Mit diesem Muster ist es einfacher, wasserdichte Objekte zu erstellen.
* Tolle Überhangqualität, da die Leinen sehr gut überbrücken.
* Wenn das Teil kreisförmig ist, entsteht eine hässliche Stelle in der Mitte, wo die Konturen zusammenlaufen.
* Die Oberflächenqualität ist nicht optimal.

Zickzack
---
![Zickzack](../images/top_bottom_pattern_zigzag.png)

Das Zickzackmuster ist dem Linienmuster sehr ähnlich, aber anstatt die Linien in den Wänden zu beenden, dreht es sich um, wenn es die Wände berührt, und fährt fort, sich in Richtung der nächsten Linie zu extrudieren.
* Bietet eine hervorragende Oberflächenqualität.
* Hält die Extrusionsrate konstanter, was die Konsistenz der Oberfläche verbessert.
* Haftet nicht so gut an den Wänden wie das Linienmuster. Der Effekt der [Skin Overlap](skin_overlap.md) wird reduziert. Dies macht das Teil schwächer und verringert die Qualität von Überhängen.