Schwellenwert für geteilte Mittellinie
====
Beim Drucken dünner Teile passt Cura die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch dafür entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung ist der Schwellenwert, bei dem Cura eine einzelne Linie in der Mitte in zwei teilt, wenn die Breite des Teils zunimmt. Sie kann getrennt von der [Schwelle, bei der eine neue Mittellinie hinzugefügt wird] (wall_add_middle_threshold.md) angepasst werden.

Diese Einstellung entspricht der [Mindestbreite gerader Wandlinien] (min_even_wall_line_width.md), verwendet jedoch eine andere Einheit. Die Einheit dieser Einstellung ist in Bruchteilen einer Linienbreite, die die Breite eines Teils erhöhen muss, um die Mittellinie in zwei Teile zu teilen. Da der Unterschied in der Breite nach dem Teilen auf die beiden Linien in der Mitte aufgeteilt wird, entspricht eine kleinere Mindestbreite der geraden Wandlinie einem viel kleineren Schwellenwert für die geteilte mittlere Linie als im Fall des Entfernens einer ungeraden Wand.

![Die Mittellinie wird passend breiter gemacht](../images/min_wall_line_width_0_34.png)
![Wenn Sie diese Einstellung reduzieren, werden stattdessen zwei Linien verwendet](../images/min_wall_line_width_even_0_1.png)

Gerade vs. ungerade Linien
----
Diese Einstellung ermöglicht die Anpassung des Schwellenwerts für das Hinzufügen von Linien, insbesondere wenn es eine gerade Anzahl von Linien wird. Dies ist der Fall, wenn in der Mitte zwei Linien statt einer einzelnen Linie vorhanden sind. Es bestimmt, wann sich eine Linie in der Mitte in zwei Linien aufteilt.

Der Schwellenwert zum Teilen einer Mittellinie kann sich aufgrund der Art und Weise, wie sie miteinander verbunden werden, von dem Schwellenwert zum Hinzufügen einer Mittellinie unterscheiden. Sogar Linien verbinden sich an ihren Enden, indem sie die Enden näher zusammenbringen. Dort gibt es eine gewisse Überlappung mit diesen Linien, was zu einer Überextrusion führt. Das ist anders als bei einer ungeraden Anzahl von Wänden: Die Linie in der Mitte hört dann einfach auf und hinterlässt eine Lücke im Druck. Das Verringern des Schwellwertes für die Mittellinie geteilt reduziert die Überextrusion an den Übergängen von geraden zu ungeraden Linien. Durch Verringern des Schwellenwerts „Mittellinie hinzufügen“ wird die Größe der Lücke an den Übergängen von ungeraden zu geraden Linien verringert.

Die Lücken, die beim Hinzufügen einer Mittellinie verbleiben, sind im Endergebnis besser sichtbar als ein wenig Überextrusion an einer Verbindung, daher könnte es hilfreich sein, den Schwellenwert „Mittellinie teilen“ etwas höher als den Schwellenwert „Mittellinie hinzufügen“ einzustellen.

Das Reduzieren dieser Einstellung führt zu:
* Reduzierter Überlappungsbereich, wo zwei Linien zusammenkommen, um zu einer Linie zu verschmelzen.
* Reduzierte maximale Breite einzelner Mittellinien.
* Dünnere Linien, die möglicherweise nicht gut extrudiert werden.
* Mehr Zeilen, deren Druck länger dauert.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**