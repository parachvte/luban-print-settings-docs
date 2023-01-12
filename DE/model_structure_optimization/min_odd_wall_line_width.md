Minimale Breite der ungeraden Wandlinie
====
Beim Drucken dünner Teile passt Luban die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch dafür entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung ist der Schwellenwert, bei dem Cura eine Linie in der Mitte entfernt. Sie kann separat vom [Schwellenwert, bei dem die beiden mittleren Linien kombiniert werden] (min_even_wall_line_width.md) angepasst werden.

![Wenn die Mittellinie zu klein ist, werden die beiden Linien darum herum breiter](../images/min_wall_line_width_0_34.png)
![Wenn Sie diese Einstellung reduzieren, beginnt und endet die Mittellinie viel kleiner](../images/min_wall_line_width_odd_0_1.png)

Gerade vs. ungerade Linien
----
Diese Einstellung ermöglicht die Anpassung des Schwellenwerts für das Entfernen von Linien, insbesondere wenn eine ungerade Anzahl von Linien vorhanden ist. Dies ist der Fall, wenn sich in der Mitte eine einzelne Linie befindet und nicht zwei. Es bestimmt, wann diese einzelne Linie entfernt wird, damit die beiden Linien um sie herum etwas breiter sind.

Die minimale Breite der ungeraden Wandlinie kann aufgrund der Art und Weise, wie sie übergehen, von der minimalen Breite der geraden Linie abweichen. Wenn eine ungerade Linie entfernt wird, stoppt sie vor dem Übergang und lässt die umgebenden Wände schließen. Während des Übergangs gibt es eine kleine Lücke, wo die umgebenden Linien noch nicht ganz zusammengekommen sind. Dies ist anders als bei einer geraden Anzahl von Wänden: Die beiden Linien in der Mitte fallen dann zusammen und überlappen sie leicht. Das Reduzieren der minimalen Breite der ungeraden Wandlinien reduziert die Grße der Lücke an den Übergängen von ungeraden zu geraden Linien. Das Reduzieren der minimalen Breite der geraden Wandlinie reduziert die Überextrusion an den Übergängen von geraden zu ungeraden Linien.

Die Lücken, die hinterlassen werden, wenn eine ungerade Linie endet, sind im Endergebnis besser sichtbar als ein bisschen Überextrusion an einer Verbindung, daher könnte es hilfreich sein, die minimale Breite der ungeraden Wandlinie etwas niedriger als die minimale Breite der geraden Wandlinie einzustellen.

Das Reduzieren dieser Einstellung führt zu:
* Kleinere Lücken, wenn eine Mittellinie endet.
* Reduzierte maximale Breite eines Paares gerader Mittellinien.
* Dünnere Linien, die möglicherweise nicht gut extrudiert werden.
* Längere Zeilen, deren Druck länger dauert.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**