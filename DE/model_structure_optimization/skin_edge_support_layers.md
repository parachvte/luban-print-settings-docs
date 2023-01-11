Hautkanten-St�tzschichten
====
Beim Drucken von konkaven Formen gibt es eine obere Haut, die irgendwo in der Mitte der F�llung endet. Diese Einstellung f�gt eine zus�tzliche Linie durch die F�llung hinzu, um den Rand der Haut zu st�tzen, sodass sie etwas weniger durchh�ngt.

![Der Rand der Haut wird durch die F�llung nicht gut gest�tzt](../images/skin_edge_support_thickness_0.png)
![Ein Umfang wird durch die F�llung unter dem Rand der Haut gezogen](../images/skin_edge_support_thickness.png)

Eine einzelne Linie durch die L�cken in der F�llung wird immer noch durchh�ngen, sodass die Linie in mehreren Schichten unter dem Rand der Haut gezogen werden kann, die gest�tzt werden muss. Diese Einstellung konfiguriert die Anzahl der Schichten, durch die diese Linie unter dem Hautrand gezogen wird. Alternativ k�nnen Sie die [Dicke](skin_edge_support_thickness.md) der Schichten anpassen, durch die die Linie gezogen wird.

Eine Erh�hung der Anzahl der Schichten hat im Allgemeinen folgende Auswirkungen auf den Druck:
* Der Hautrand wird besser unterst�tzt, was zu einer glatteren Oberseite f�hrt, da die Haut vollst�ndig von einer Seite zur anderen �berbr�cken kann.
* Das Drucken dauert etwas l�nger und verbraucht mehr Material.

Wenn die F�llungsrate hoch ist, hat diese Einstellung kaum Auswirkungen auf die obere Oberfl�che und k�nnte [�berextrusion](../troubleshooting/overextrusion.md) in der F�llung verursachen. Es wird dann am besten bei 0 Schichten belassen.