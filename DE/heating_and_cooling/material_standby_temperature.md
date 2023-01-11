SStandby-Temperatur
====
### **Beschreibung**
Standby-Temperatur ist die Temperatur der Standby-Düse während des Dual-Extrusionsdrucks.

Bei Druckern mit mehr als einem Extruder können Sie die Standby-Temperatur für jeden Extruder einstellen. Während des Dual-Extrusionsdrucks, wenn ein Extruder mit dem Drucken beschäftigt ist, verwendet der andere Extruder, der inaktiv ist, seine Standby-Temperatur.

![Während der blaue Extruder druckt, kühlt der rote Extruder auf Stand-by-Temperatur ab](../images/temperature_regulation.svg)

### **Verwendung**
Im Allgemeinen wird die Standby-Temperatur niedriger als die Drucktemperatur eingestellt. Damit soll verhindert werden, dass aus der Düse zu viel Material vergeblich austritt.

Wenn außerdem die Düsentemperatur hoch bleibt, während sich der Extrusionsmotor nicht bewegt, kann sich die Hitze nach hinten und nach oben ausbreiten und das Filament im Motor schmelzen. In diesem Fall kann das Zahnrad das Filament nicht durch die Düse nach vorne schieben, sondern einen Fleck im Filament kauen. Dies wird als „Hitzekriechen“ bezeichnet und führt dazu, dass Ihre Düse verstopft.

Wenn die Standby-Temperatur jedoch zu niedrig eingestellt ist, benötigt der Extruder mehr Zeit zum Aufheizen, um mit dem Drucken fortzufahren, wenn die anderen Extruder fertig sind.