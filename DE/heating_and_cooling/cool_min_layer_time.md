Minimale Schichtzeit
====
### **Beschreibung**
Minimale Schichtzeit konfiguriert die kürzeste zulässige Druckdauer einer Schicht. In kürzerer Zeit darf der Drucker eine Ebene nicht drucken.

Dies stellt sicher, dass eine kleine Schicht genug Zeit hat, sich abzukühlen und zu verfestigen, bevor die nächste Schicht darauf gelegt wird, und verhindert so ein Durchhängen.
![Welche Lüftergeschwindigkeit wird wo verwendet](../images/cool_fan_speed.svg)

### **Verwendung**
Wenn eine Schicht so klein ist, dass das Drucken mit normaler Druckgeschwindigkeit weniger als die minimale Schichtzeit dauern würde, wird ihre tatsächliche Druckgeschwindigkeit verringert, sodass die Schicht immer noch die minimale Schichtzeit zum Drucken benötigt. Aber die Druckgeschwindigkeit wird nicht unter die reduziert [Mindestgeschwindigkeit](cool_min_speed.md) setting). Wenn das Drucken der Ebene mit der minimalen Geschwindigkeit weniger als die minimale Ebenenzeit dauern würde, wartet der Werkzeugkopf am Ende der Ebene, bis die minimale Ebenenzeit verstrichen ist.

Für eine Schicht, die mit der Mindestschichtzeit gedruckt wird, verwendet der Werkzeugkopf die[Maximale Lüftergeschwindigkeit](cool_fan_speed_max.md) um die Schicht schneller abzukühlen.