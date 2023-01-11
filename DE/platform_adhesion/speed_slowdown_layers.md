Anzahl der langsameren Schichten
====
### **Beschreibung**
Die Anfangsschicht ist nicht die einzige Schicht, die langsamer gedruckt wird. Diese Einstellung konfiguriert, wie viele Ebenen langsamer gedruckt werden. Im Laufe dieser Schichten wird die Druckgeschwindigkeit allmählich auf die normale Druckgeschwindigkeit erhöht.

![Die Druckgeschwindigkeit steigt allmählich auf 50 mm/s](../images/speed_slowdown_layers.svg)

### **Einfluss**
Beginnend mit der Anfangsschicht erhöht (oder verringert) sich die Geschwindigkeit linear auf die normale Druckgeschwindigkeit. Dies geschieht separat für Wände, Haut, Füllung usw., wenn sie mit unterschiedlichen Geschwindigkeiten gedruckt werden.

### **Verwendung**
Es gibt zwei Gründe, warum Sie über mehrere Ebenen hinweg zur normalen Druckgeschwindigkeit übergehen sollten:
(1) Die zweite und dritte Schicht befinden sich immer noch ziemlich nahe an der Bauplatte, und wenn Sie schnell darüber fahren, kann sich der Druck ziemlich leicht lösen.
(2) Der Unterschied in der Flussrate zwischen der Druckgeschwindigkeit der Anfangsschicht und der gewöhnlichen Druckgeschwindigkeit kann so groß sein, dass es einige Zeit dauern kann, bis die große Flussratenänderung wirksam wird.

Ein langsamer Übergang verhindert ein Unterextrudieren bei einer großen Geschwindigkeitsänderung.
Ein langsamer Übergang erhöht jedoch auch die Gesamtdruckzeit.