Mindestbreite dünner Wandlinien
====
Diese Einstellung ermöglicht es, sehr kleine Details mit einer eigentlich zu großen Linienbreite zu drucken. Anstatt sehr dünne Linien zu drucken, druckt es mit einer vernünftigeren Linienbreite.

Wenn die [Minimale Feature-Größe] (min_feature_size.md) sehr niedrig ist, könnten einige sehr dünne Teile gedruckt werden. Das funktioniert nicht gut. Es ist möglich, Linien zu drucken, die kleiner als die Düsengröße sind, aber nicht viel. Das Drucken zu dünner Linien führt zu einer inkonsistenten Extrusion.

Stattdessen werden diese sehr dünnen Linien breiter gemacht, damit sie gleichmäßiger extrudiert werden. Jeder Teil des Modells, der dünner als die minimale Linienbreite für dünne Wände ist, wird mit einer einzelnen Linie der minimalen Linienbreite für dünne Wände gedruckt. Die Linien werden dann breiter als die ursprüngliche Breite des Modells. Dies verringert die Maßhaltigkeit, druckt aber zumindest zuverlässig.

Der Wert dieser Einstellung sollte die dünnste Linienbreite sein, die der Drucker zuverlässig erreichen kann, bevor er anfängt, raue Oberflächen und ungleichmäßige Extrusion zu erzeugen. Diese liegt normalerweise irgendwo zwischen der Düsengröße und der halben Düsengröße. Eine Erhöhung führt dazu, dass dünne Teile zu fett gedruckt werden, verringert jedoch die Wahrscheinlichkeit einer Unterextrusion aufgrund des Versuchs, zu dünne Linien zu drucken.