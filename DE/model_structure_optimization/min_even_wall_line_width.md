Minimale gerade Wandlinienbreite
====
Beim Drucken d�nner Teile passt Cura die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch daf�r entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung ist der Schwellenwert, bei dem Cura zwei Linien zu einer kombiniert. Es kann getrennt von der eingestellt werden
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
Mit dieser Einstellung k�nnen Sie den Schwellenwert f�r das Entfernen von Linien speziell bei einer geraden Anzahl von Linien anpassen. Dies ist der Fall, wenn in der Mitte zwei Linien statt einer einzelnen Linie vorhanden sind. Es bestimmt, wann diese beiden Linien in der Mitte zu einer einzigen Linie kombiniert werden.

Die Mindestbreite der geraden Wandlinie kann aufgrund der Art und Weise, wie sie miteinander verbunden sind, von der Mindestbreite der ungeraden Wandlinie abweichen. Sogar Linien verbinden sich an ihren Enden, indem sie die Enden n�her zusammenbringen. Dort gibt es eine gewisse �berlappung mit diesen Linien, was zu einer �berextrusion f�hrt. Das ist anders als bei einer ungeraden Anzahl von W�nden: Die Linie in der Mitte h�rt dann einfach auf und hinterl�sst eine L�cke im Druck. Das Reduzieren der minimalen Breite der geraden Wandlinie reduziert die �berextrusion an den �berg�ngen von geraden zu ungeraden Linien. Das Reduzieren der minimalen Breite der ungeraden Wandlinien reduziert die Gr�e der L�cke an den �berg�ngen von ungeraden zu geraden Linien.

Die L�cken, die hinterlassen werden, wenn eine ungerade Linie endet, sind im Endergebnis besser sichtbar als ein bisschen �berextrusion an einer Verbindung, daher k�nnte es hilfreich sein, die minimale gerade Wandlinienbreite etwas h�her als die minimale ungerade Wandlinienbreite einzustellen.

Das Reduzieren dieser Einstellung f�hrt zu:
* Reduzierter �berlappungsbereich, wo zwei Linien zusammenkommen, um zu einer Linie zu verschmelzen.
* Reduzierte maximale Breite einzelner Mittellinien.
* D�nnere Linien, die m�glicherweise nicht gut extrudiert werden.
* Mehr Zeilen, deren Druck l�nger dauert.

**Diese Einstellung gilt nicht nur f�r normale W�nde, sondern auch f�r Au�enhautw�nde, St�tzw�nde, F�llw�nde und konzentrische Muster.**