Hautkanten-Stützschichten
====
Beim Drucken von konkaven Formen gibt es eine obere Haut, die irgendwo in der Mitte der Füllung endet. Diese Einstellung fügt eine zusätzliche Linie durch die Füllung hinzu, um den Rand der Haut zu stützen, sodass sie etwas weniger durchhängt.

![Der Rand der Haut wird durch die Füllung nicht gut gestützt](../images/skin_edge_support_thickness_0.png)
![Ein Umfang wird durch die Füllung unter dem Rand der Haut gezogen](../images/skin_edge_support_thickness.png)

Eine einzelne Linie durch die Lücken in der Füllung wird immer noch durchhängen, sodass die Linie in mehreren Schichten unter dem Rand der Haut gezogen werden kann, die gestützt werden muss. Diese Einstellung konfiguriert die Anzahl der Schichten, durch die diese Linie unter dem Hautrand gezogen wird. Alternativ können Sie die [Dicke](skin_edge_support_thickness.md) der Schichten anpassen, durch die die Linie gezogen wird.

Eine Erhöhung der Anzahl der Schichten hat im Allgemeinen folgende Auswirkungen auf den Druck:
* Der Hautrand wird besser unterstützt, was zu einer glatteren Oberseite führt, da die Haut vollständig von einer Seite zur anderen überbrücken kann.
* Das Drucken dauert etwas länger und verbraucht mehr Material.

Wenn die Füllungsrate hoch ist, hat diese Einstellung kaum Auswirkungen auf die obere Oberfläche und könnte [Überextrusion](../troubleshooting/overextrusion.md) in der Füllung verursachen. Es wird dann am besten bei 0 Schichten belassen.