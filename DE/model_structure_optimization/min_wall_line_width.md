Minimale Wandlinienbreite
====
Beim Drucken d�nner Teile passt Cura die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch daf�r entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung legt den Schwellenwert fest, bei dem Cura beschlie�t, eine Wand zu entfernen, anstatt die vorhandenen W�nde d�nner zu machen.

![Normalerweise werden die Linien breiter gemacht](../images/min_wall_line_width_0_34.png)
![Durch die Verringerung der minimalen Linienbreite werden mehr Linien verwendet](../images/min_wall_line_width_0_1.png)

Unterschiedliche Anzahl von W�nden
----
Wenn es eine einzelne zentrale Linie gibt und die [Wall Distribution Count] (wall_distribution_count.md) auf 1 gesetzt ist, funktioniert diese Einstellung genau wie angegeben. Wenn die Linie in der Mitte d�nner als eine bestimmte Breite wird, wird sie entfernt, um andere Linien breiter zu machen. In anderen F�llen ist die Berechnung komplexer.

Die genaue Berechnung ist komplex, aber ein intuitives Verst�ndnis kann hilfreich sein. Effektiv k�nnen Sie einfach die Gesamtbreite des Modells durch die [normale Linienbreite](../resolution/wall_line_width.md) teilen, um eine bestimmte Anzahl von W�nden zu erhalten. Dies kann jedoch ein Bruchteil sein (z. B. 5,3 Wandlinienbreiten). Die minimale Wandlinienbreite nimmt nur diesen Bruchteil (0,3 Linienbreiten) und f�gt eine zus�tzliche Wand hinzu, wenn sie die minimale Wandlinienbreite �berschreitet. Mit der bekannten Anzahl von W�nden bestimmt es dann die Breite jeder der Linien gem�� der Wandverteilungsz�hlung.

![Minimale Wandlinienbreite verschiebt den Schwellenwert f�r das Hinzuf�gen einer neuen Linie nach links oder rechts](../images/min_wall_line_width.svg)

Effektiv bedeutet dies, dass, wenn es mehr Linien gibt, deren Breite angepasst wird, die Linienbreite niemals so extrem sein wird, wie es die minimale Wandlinienbreite zulassen w�rde. Wenn beispielsweise die mittleren beiden Linien angepasst werden, f�llt die Linienbreite nicht unter den Durchschnitt der normalen Linienbreite und der minimalen Wandlinienbreite.

Die Einstellung kann separat f�r [even](min_even_wall_line_width.md) und [odd](min_odd_wall_line_width.md) Anzahl der W�nde angepasst werden. 0 W�nde zu haben ist auch ein separater Fall, der mit der Einstellung [Minimale Feature-Gr��e](min_feature_size.md) angepasst werden kann.

Abstimmung
----
Theoretisch stellt die Einstellung auf 50 % der Linienbreite sicher, dass die Linienbreite am n�chsten an der normalen Linienbreite bleibt. Es ist jedoch besser, etwas dar�ber zu bleiben. F�r einen Drucker ist es einfacher, Linien zu drucken, die breiter als die D�sengr��e sind, als d�nnere Linien zu drucken, und weniger Linien zu haben bedeutet auch, dass der Druck schneller ist.

Bei sehr viskosen Materialien oder wenn schneller gedruckt wird, sollte die Minimale Wandlinienbreite verringert werden, um zu breite Linien zu vermeiden. Diese sind schwer zu drucken, wenn das Material nicht gen�gend Zeit hat, an den Seiten herauszuflie�en. Wenn die minimale Wandlinienbreite zu hoch ist, haften die W�nde nicht gut zusammen, wodurch der Druck zerbrechlich wird.

**Diese Einstellung gilt nicht nur f�r normale W�nde, sondern auch f�r Au�enhautw�nde, St�tzw�nde, F�llw�nde und konzentrische Muster.**