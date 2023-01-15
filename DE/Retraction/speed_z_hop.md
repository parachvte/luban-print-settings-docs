Z-Hop-Geschwindigkeit
====
### **Beschreibung**
Diese Einstellung konfiguriert die Bewegungsrate, mit der die vertikalen Bewegungen in einem Z-Hop ausgeführt werden. Die horizontalen Bewegungen eines Z-Hop sind davon nicht betroffen, da diese durch die [Fahrgeschwindigkeit](speed_travel.md) konfiguriert werden.

![Die vertikale Bewegung erfolgt mit der Z-Hop-Geschwindigkeit](../images/speed_z_hop.svg)

### **Einfluss**
Bei den meisten Druckern ist die Z-Achse robust, aber langsam gebaut. Durch Erhöhen der Z-Sprunggeschwindigkeit werden die Grenzen der Z-Bewegung getestet, was dazu führen kann, dass der Z-Motor einige Schritte überspringt. Infolgedessen könnte die Düse nach dem Z-Sprung auf einer anderen Höhe landen. Eine Verringerung dieser Geschwindigkeit verringert die Wahrscheinlichkeit, dass dies geschieht.

Andererseits bewirkt eine höhere Z-Sprunggeschwindigkeit, dass sich die Düse schneller von der bedruckten Oberfläche wegbewegt. Dies kann die Größe von Blobs reduzieren.

Aufgrund niedriger Beschleunigungsraten der Z-Achse wird die gewünschte Z-Sprunggeschwindigkeit selten erreicht, es sei denn, die Z-Sprunghöhe ist sehr hoch oder die Geschwindigkeit sehr niedrig.