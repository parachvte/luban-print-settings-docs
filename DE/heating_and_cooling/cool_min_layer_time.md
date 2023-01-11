Minimale Schichtzeit
====
### **Beschreibung**
Minimale Schichtzeit konfiguriert die k�rzeste zul�ssige Druckdauer einer Schicht. In k�rzerer Zeit darf der Drucker eine Ebene nicht drucken.

Dies stellt sicher, dass eine kleine Schicht genug Zeit hat, sich abzuk�hlen und zu verfestigen, bevor die n�chste Schicht darauf gelegt wird, und verhindert so ein Durchh�ngen.
![Welche L�ftergeschwindigkeit wird wo verwendet](../images/cool_fan_speed.svg)

### **Verwendung**
Wenn eine Schicht so klein ist, dass das Drucken mit normaler Druckgeschwindigkeit weniger als die minimale Schichtzeit dauern w�rde, wird ihre tats�chliche Druckgeschwindigkeit verringert, sodass die Schicht immer noch die minimale Schichtzeit zum Drucken ben�tigt. Aber die Druckgeschwindigkeit wird nicht unter die reduziert [Mindestgeschwindigkeit](cool_min_speed.md) setting). Wenn das Drucken der Ebene mit der minimalen Geschwindigkeit weniger als die minimale Ebenenzeit dauern w�rde, wartet der Werkzeugkopf am Ende der Ebene, bis die minimale Ebenenzeit verstrichen ist.

F�r eine Schicht, die mit der Mindestschichtzeit gedruckt wird, verwendet der Werkzeugkopf die[Maximale L�ftergeschwindigkeit](cool_fan_speed_max.md) um die Schicht schneller abzuk�hlen.