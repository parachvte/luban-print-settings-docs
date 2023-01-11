Mindestgeschwindigkeit
====
Mindestgeschwindigkeit konfiguriert die niedrigste zul�ssige Druckgeschwindigkeit. Diese Einstellung dient dazu, die Druckgeschwindigkeit von Ebenen zu begrenzen, die die verwenden [Minimale Schichtzeit](cool_min_layer_time.md).

Wenn eine Schicht so klein ist, dass das Drucken mit normaler Druckgeschwindigkeit weniger als die minimale Schichtzeit dauern w�rde, wird ihre tats�chliche Druckgeschwindigkeit verringert, sodass die Schicht immer noch die minimale Schichtzeit zum Drucken ben�tigt. Die Druckgeschwindigkeit wird jedoch nicht unter die Mindestgeschwindigkeit reduziert. Wenn das Drucken der Ebene mit der minimalen Geschwindigkeit weniger als die minimale Ebenenzeit dauern w�rde, wartet der Werkzeugkopf am Ende der Ebene, bis die minimale Ebenenzeit verstrichen ist.

Wenn die Druckgeschwindigkeit zu langsam ist, hat die Hitze von der D�se Zeit, sich auf tiefere Schichten und benachbarte W�nde auszubreiten. Infolgedessen kann die Druckoberfl�che unordentlich werden und es kann zu einem �rtlich begrenzten Durchh�ngen kommen. Deshalb m�ssen wir eine minimale Druckgeschwindigkeit als Limit festlegen.