Mindestgeschwindigkeit
====
Mindestgeschwindigkeit konfiguriert die niedrigste zulässige Druckgeschwindigkeit. Diese Einstellung dient dazu, die Druckgeschwindigkeit von Ebenen zu begrenzen, die die verwenden [Minimale Schichtzeit](cool_min_layer_time.md).

Wenn eine Schicht so klein ist, dass das Drucken mit normaler Druckgeschwindigkeit weniger als die minimale Schichtzeit dauern würde, wird ihre tatsächliche Druckgeschwindigkeit verringert, sodass die Schicht immer noch die minimale Schichtzeit zum Drucken benötigt. Die Druckgeschwindigkeit wird jedoch nicht unter die Mindestgeschwindigkeit reduziert. Wenn das Drucken der Ebene mit der minimalen Geschwindigkeit weniger als die minimale Ebenenzeit dauern würde, wartet der Werkzeugkopf am Ende der Ebene, bis die minimale Ebenenzeit verstrichen ist.

Wenn die Druckgeschwindigkeit zu langsam ist, hat die Hitze von der Düse Zeit, sich auf tiefere Schichten und benachbarte Wände auszubreiten. Infolgedessen kann die Druckoberfläche unordentlich werden und es kann zu einem örtlich begrenzten Durchhängen kommen. Deshalb müssen wir eine minimale Druckgeschwindigkeit als Limit festlegen.