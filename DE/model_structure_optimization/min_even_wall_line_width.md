Minimale gerade Wandlinienbreite
====
Beim Drucken dünner Teile passt Cura die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch dafür entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung ist der Schwellenwert, bei dem Cura zwei Linien zu einer kombiniert. Es kann getrennt von der eingestellt werden
[Schwelle, bei der die mittlere Linie entfernt wird](min_odd_wall_line_width.md).

<!--screenshot {
"image_path": "min_wall_line_width_0_34.png",
"models": [{"script": "moon_sickle.scad"}],
"camera_position": [0, 0, 63],
"settings": {
	"min_wall_line_width": 0.34,
	"wall_line_count": 3,
	"wall_transition_angle": 20
},
"layer": 14,
"colours": 32
}-->
<!--screenshot {
"image_path": "min_wall_line_width_even_0_1.png",
"models": [{"script": "moon_sickle.scad"}],
"camera_position": [0, 0, 63],
"settings": {
	"min_even_wall_line_width": 0.1,
	"min_wall_line_width": 0.34,
	"wall_line_count": 3,
	"wall_transition_angle": 20
},
"layer": 14,
"colours": 32
}-->
![The centre line is made wider to fit](../images/min_wall_line_width_0_34.png)
![Reducing this setting, it uses two lines instead](../images/min_wall_line_width_even_0_1.png)

Gerade vs. ungerade Linien
----
Mit dieser Einstellung können Sie den Schwellenwert für das Entfernen von Linien speziell bei einer geraden Anzahl von Linien anpassen. Dies ist der Fall, wenn in der Mitte zwei Linien statt einer einzelnen Linie vorhanden sind. Es bestimmt, wann diese beiden Linien in der Mitte zu einer einzigen Linie kombiniert werden.

Die Mindestbreite der geraden Wandlinie kann aufgrund der Art und Weise, wie sie miteinander verbunden sind, von der Mindestbreite der ungeraden Wandlinie abweichen. Sogar Linien verbinden sich an ihren Enden, indem sie die Enden näher zusammenbringen. Dort gibt es eine gewisse Überlappung mit diesen Linien, was zu einer Überextrusion führt. Das ist anders als bei einer ungeraden Anzahl von Wänden: Die Linie in der Mitte hört dann einfach auf und hinterlässt eine Lücke im Druck. Das Reduzieren der minimalen Breite der geraden Wandlinie reduziert die Überextrusion an den Übergängen von geraden zu ungeraden Linien. Das Reduzieren der minimalen Breite der ungeraden Wandlinien reduziert die Grße der Lücke an den Übergängen von ungeraden zu geraden Linien.

Die Lücken, die hinterlassen werden, wenn eine ungerade Linie endet, sind im Endergebnis besser sichtbar als ein bisschen Überextrusion an einer Verbindung, daher könnte es hilfreich sein, die minimale gerade Wandlinienbreite etwas höher als die minimale ungerade Wandlinienbreite einzustellen.

Das Reduzieren dieser Einstellung führt zu:
* Reduzierter Überlappungsbereich, wo zwei Linien zusammenkommen, um zu einer Linie zu verschmelzen.
* Reduzierte maximale Breite einzelner Mittellinien.
* Dünnere Linien, die möglicherweise nicht gut extrudiert werden.
* Mehr Zeilen, deren Druck länger dauert.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**