Schwellwert für normale/maximale Lüftergeschwindigkeit
====
### **Beschreibung**
Der normale/maximale Schwellenwert für Lüftergeschwindigkeit konfiguriert einen Schwellenwert für die Schichtdruckzeit, um die in der Schicht verwendete Lüftergeschwindigkeit zu bestimmen.

* Wenn die Druckzeit einer Ebene gleich oder größer als der Schwellenwert für die normale/maximale Lüftergeschwindigkeit ist, wird diese Ebene mit der regulären Lüftergeschwindigkeit gedruckt.

* Wenn die Druckzeit einer Ebene kleiner als der reguläre/maximale Lüftergeschwindigkeitsschwellenwert, aber größer als die minimale Ebenenzeit ist, wird die Lüftergeschwindigkeit dieser Ebene wie folgt berechnet:

     Lüftergeschwindigkeit der Ebene = Maximale Lüftergeschwindigkeit - (Maximale Lüftergeschwindigkeit - Normale Lüftergeschwindigkeit)/(Reguläre/Maximale Lüftergeschwindigkeitsschwelle - Minimale Ebenenzeit) × (Druckzeit der Ebene - Minimale Ebenenzeit)

* Wenn eine Schicht mit der minimalen Schichtzeit gedruckt wird, wird diese Schicht mit der maximalen Lüftergeschwindigkeit gedruckt.
![Welche Lüftergeschwindigkeit wird wo verwendet](../images/cool_fan_speed.svg)

### **Verwendung**
Wenn die Druckzeit einer Schicht kurz ist, kann die Schicht möglicherweise nicht richtig abkühlen. Deshalb müssen wir die Lüftergeschwindigkeit erhöhen, um sicherzustellen, dass die Schicht verfestigt wird.