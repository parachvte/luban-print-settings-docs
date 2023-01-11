Minimale Breite der ungeraden Wandlinie
====
Beim Drucken d�nner Teile passt Luban die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch daf�r entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung ist der Schwellenwert, bei dem Cura eine Linie in der Mitte entfernt. Sie kann separat vom [Schwellenwert, bei dem die beiden mittleren Linien kombiniert werden] (min_even_wall_line_width.md) angepasst werden.

![Wenn die Mittellinie zu klein ist, werden die beiden Linien darum herum breiter](../images/min_wall_line_width_0_34.png)
![Wenn Sie diese Einstellung reduzieren, beginnt und endet die Mittellinie viel kleiner](../images/min_wall_line_width_odd_0_1.png)

Gerade vs. ungerade Linien
----
Diese Einstellung erm�glicht die Anpassung des Schwellenwerts f�r das Entfernen von Linien, insbesondere wenn eine ungerade Anzahl von Linien vorhanden ist. Dies ist der Fall, wenn sich in der Mitte eine einzelne Linie befindet und nicht zwei. Es bestimmt, wann diese einzelne Linie entfernt wird, damit die beiden Linien um sie herum etwas breiter sind.

Die minimale Breite der ungeraden Wandlinie kann aufgrund der Art und Weise, wie sie �bergehen, von der minimalen Breite der geraden Linie abweichen. Wenn eine ungerade Linie entfernt wird, stoppt sie vor dem �bergang und l�sst die umgebenden W�nde schlie�en. W�hrend des �bergangs gibt es eine kleine L�cke, wo die umgebenden Linien noch nicht ganz zusammengekommen sind. Dies ist anders als bei einer geraden Anzahl von W�nden: Die beiden Linien in der Mitte fallen dann zusammen und �berlappen sie leicht. Das Reduzieren der minimalen Breite der ungeraden Wandlinien reduziert die Gr�e der L�cke an den �berg�ngen von ungeraden zu geraden Linien. Das Reduzieren der minimalen Breite der geraden Wandlinie reduziert die �berextrusion an den �berg�ngen von geraden zu ungeraden Linien.

Die L�cken, die hinterlassen werden, wenn eine ungerade Linie endet, sind im Endergebnis besser sichtbar als ein bisschen �berextrusion an einer Verbindung, daher k�nnte es hilfreich sein, die minimale Breite der ungeraden Wandlinie etwas niedriger als die minimale Breite der geraden Wandlinie einzustellen.

Das Reduzieren dieser Einstellung f�hrt zu:
* Kleinere L�cken, wenn eine Mittellinie endet.
* Reduzierte maximale Breite eines Paares gerader Mittellinien.
* D�nnere Linien, die m�glicherweise nicht gut extrudiert werden.
* L�ngere Zeilen, deren Druck l�nger dauert.

**Diese Einstellung gilt nicht nur f�r normale W�nde, sondern auch f�r Au�enhautw�nde, St�tzw�nde, F�llw�nde und konzentrische Muster.**