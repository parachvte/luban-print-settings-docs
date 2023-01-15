Monotone obere/untere Ordnung
====
Normalerweise ordnet Cura Top/Bottom-Linien so an, dass die Reisedistanz zwischen ihnen klein ist. Wenn diese Einstellung aktiviert ist, werden die oberen/unteren Zeilen so angeordnet, dass benachbarte Zeilen immer in derselben Richtung überlappend gedruckt werden.

Beim Drucken von oberen/unteren Linien überlappen sich die Linien normalerweise etwas mit den Linien daneben, da die Form einer Linie kein perfektes Rechteck ist. Diese Überlappung verleiht den Linien eine leichte Neigung, wodurch sie das Licht unterschiedlich in verschiedene Richtungen reflektieren. Wenn sich benachbarte Linien unterschiedlich überlappen, ändert sich diese Reflexion. Das sieht man am Endergebnis. Es verleiht verschiedenen Bereichen der Oberfläche einen unterschiedlichen Glanz. Das Drucken in einer monotonen Reihenfolge stellt sicher, dass die Überlappung auf der gesamten Oberfläche gleich ist, sodass es keinen Unterschied in der Lichtreflexion gibt. Dadurch sieht die Oberfläche gleichmäßiger und glatter aus.

![Keine monotone Reihenfolge](../images/skin_monotonic_disabled.gif)
![Monotone Reihenfolge, immer von der unteren rechten Ecke](../images/skin_monotonic_enabled.gif)

Die monotone Reihenfolge wird die Länge der Verfahrbewegungen leicht verlängern, aber dieser Effekt ist sehr gering. Es wirkt sich nur optisch auf den Druck aus. Die monotone Ordnung hat keine mechanischen Vorteile.

Um eine glatte Oberfläche zu erzielen, ziehen Sie in Betracht, diese Einstellung mit der Einstellung des [Kammmodus] (../travel/retraction_combing.md) zu kombinieren, um Haut zu vermeiden, und möglicherweise [Z Hops] (../travel/retraction_hop.md) zu aktivieren. Alternativ könnten Sie auch [ironing](ironing_enabled.md) aktivieren, aber das überschreibt die Nützlichkeit dieser Einstellung vollständig. Bügeln hat seine eigene [monotone Option](ironing_monotonic.md).

![Der Schimmer ist anders, wenn Linien in uneinheitlicher Reihenfolge gedruckt werden](../images/skin_monotonic_disabled.jpg)
![Bei monotoner Reihenfolge ist der Schimmer überall gleich](../images/skin_monotonic_enabled.jpg)