Anzahl der langsameren Schichten
====
### **Beschreibung**
Die Anfangsschicht ist nicht die einzige Schicht, die langsamer gedruckt wird. Diese Einstellung konfiguriert, wie viele Ebenen langsamer gedruckt werden. Im Laufe dieser Schichten wird die Druckgeschwindigkeit allm�hlich auf die normale Druckgeschwindigkeit erh�ht.

![Die Druckgeschwindigkeit steigt allm�hlich auf 50 mm/s](../images/speed_slowdown_layers.svg)

### **Einfluss**
Beginnend mit der Anfangsschicht erh�ht (oder verringert) sich die Geschwindigkeit linear auf die normale Druckgeschwindigkeit. Dies geschieht separat f�r W�nde, Haut, F�llung usw., wenn sie mit unterschiedlichen Geschwindigkeiten gedruckt werden.

### **Verwendung**
Es gibt zwei Gr�nde, warum Sie �ber mehrere Ebenen hinweg zur normalen Druckgeschwindigkeit �bergehen sollten:
(1) Die zweite und dritte Schicht befinden sich immer noch ziemlich nahe an der Bauplatte, und wenn Sie schnell dar�ber fahren, kann sich der Druck ziemlich leicht l�sen.
(2) Der Unterschied in der Flussrate zwischen der Druckgeschwindigkeit der Anfangsschicht und der gew�hnlichen Druckgeschwindigkeit kann so gro� sein, dass es einige Zeit dauern kann, bis die gro�e Flussraten�nderung wirksam wird.

Ein langsamer �bergang verhindert ein Unterextrudieren bei einer gro�en Geschwindigkeits�nderung.
Ein langsamer �bergang erh�ht jedoch auch die Gesamtdruckzeit.