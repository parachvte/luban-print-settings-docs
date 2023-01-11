Schwellenwert f�r geteilte Mittellinie
====
Beim Drucken d�nner Teile passt Cura die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch daf�r entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung ist der Schwellenwert, bei dem Cura eine einzelne Linie in der Mitte in zwei teilt, wenn die Breite des Teils zunimmt. Sie kann getrennt von der [Schwelle, bei der eine neue Mittellinie hinzugef�gt wird] (wall_add_middle_threshold.md) angepasst werden.

Diese Einstellung entspricht der [Mindestbreite gerader Wandlinien] (min_even_wall_line_width.md), verwendet jedoch eine andere Einheit. Die Einheit dieser Einstellung ist in Bruchteilen einer Linienbreite, die die Breite eines Teils erh�hen muss, um die Mittellinie in zwei Teile zu teilen. Da der Unterschied in der Breite nach dem Teilen auf die beiden Linien in der Mitte aufgeteilt wird, entspricht eine kleinere Mindestbreite der geraden Wandlinie einem viel kleineren Schwellenwert f�r die geteilte mittlere Linie als im Fall des Entfernens einer ungeraden Wand.

![Die Mittellinie wird passend breiter gemacht](../images/min_wall_line_width_0_34.png)
![Wenn Sie diese Einstellung reduzieren, werden stattdessen zwei Linien verwendet](../images/min_wall_line_width_even_0_1.png)

Gerade vs. ungerade Linien
----
Diese Einstellung erm�glicht die Anpassung des Schwellenwerts f�r das Hinzuf�gen von Linien, insbesondere wenn es eine gerade Anzahl von Linien wird. Dies ist der Fall, wenn in der Mitte zwei Linien statt einer einzelnen Linie vorhanden sind. Es bestimmt, wann sich eine Linie in der Mitte in zwei Linien aufteilt.

Der Schwellenwert zum Teilen einer Mittellinie kann sich aufgrund der Art und Weise, wie sie miteinander verbunden werden, von dem Schwellenwert zum Hinzuf�gen einer Mittellinie unterscheiden. Sogar Linien verbinden sich an ihren Enden, indem sie die Enden n�her zusammenbringen. Dort gibt es eine gewisse �berlappung mit diesen Linien, was zu einer �berextrusion f�hrt. Das ist anders als bei einer ungeraden Anzahl von W�nden: Die Linie in der Mitte h�rt dann einfach auf und hinterl�sst eine L�cke im Druck. Das Verringern des Schwellwertes f�r die Mittellinie geteilt reduziert die �berextrusion an den �berg�ngen von geraden zu ungeraden Linien. Durch Verringern des Schwellenwerts �Mittellinie hinzuf�gen� wird die Gr��e der L�cke an den �berg�ngen von ungeraden zu geraden Linien verringert.

Die L�cken, die beim Hinzuf�gen einer Mittellinie verbleiben, sind im Endergebnis besser sichtbar als ein wenig �berextrusion an einer Verbindung, daher k�nnte es hilfreich sein, den Schwellenwert �Mittellinie teilen� etwas h�her als den Schwellenwert �Mittellinie hinzuf�gen� einzustellen.

Das Reduzieren dieser Einstellung f�hrt zu:
* Reduzierter �berlappungsbereich, wo zwei Linien zusammenkommen, um zu einer Linie zu verschmelzen.
* Reduzierte maximale Breite einzelner Mittellinien.
* D�nnere Linien, die m�glicherweise nicht gut extrudiert werden.
* Mehr Zeilen, deren Druck l�nger dauert.

**Diese Einstellung gilt nicht nur f�r normale W�nde, sondern auch f�r Au�enhautw�nde, St�tzw�nde, F�llw�nde und konzentrische Muster.**