Minimale Wandlinienbreite
====
Beim Drucken dünner Teile passt Cura die Breite der Wandlinien an die exakte Breite des Modells an. Cura kann sich auch dafür entscheiden, stattdessen weniger Wandlinien zu verwenden. Diese Einstellung legt den Schwellenwert fest, bei dem Cura beschließt, eine Wand zu entfernen, anstatt die vorhandenen Wände dünner zu machen.

![Normalerweise werden die Linien breiter gemacht](../images/min_wall_line_width_0_34.png)
![Durch die Verringerung der minimalen Linienbreite werden mehr Linien verwendet](../images/min_wall_line_width_0_1.png)

Unterschiedliche Anzahl von Wänden
----
Wenn es eine einzelne zentrale Linie gibt und die [Wall Distribution Count] (wall_distribution_count.md) auf 1 gesetzt ist, funktioniert diese Einstellung genau wie angegeben. Wenn die Linie in der Mitte dünner als eine bestimmte Breite wird, wird sie entfernt, um andere Linien breiter zu machen. In anderen Fällen ist die Berechnung komplexer.

Die genaue Berechnung ist komplex, aber ein intuitives Verständnis kann hilfreich sein. Effektiv können Sie einfach die Gesamtbreite des Modells durch die [normale Linienbreite](../resolution/wall_line_width.md) teilen, um eine bestimmte Anzahl von Wänden zu erhalten. Dies kann jedoch ein Bruchteil sein (z. B. 5,3 Wandlinienbreiten). Die minimale Wandlinienbreite nimmt nur diesen Bruchteil (0,3 Linienbreiten) und fügt eine zusätzliche Wand hinzu, wenn sie die minimale Wandlinienbreite überschreitet. Mit der bekannten Anzahl von Wänden bestimmt es dann die Breite jeder der Linien gemäß der Wandverteilungszählung.

![Minimale Wandlinienbreite verschiebt den Schwellenwert für das Hinzufügen einer neuen Linie nach links oder rechts](../images/min_wall_line_width.svg)

Effektiv bedeutet dies, dass, wenn es mehr Linien gibt, deren Breite angepasst wird, die Linienbreite niemals so extrem sein wird, wie es die minimale Wandlinienbreite zulassen würde. Wenn beispielsweise die mittleren beiden Linien angepasst werden, fällt die Linienbreite nicht unter den Durchschnitt der normalen Linienbreite und der minimalen Wandlinienbreite.

Die Einstellung kann separat für [even](min_even_wall_line_width.md) und [odd](min_odd_wall_line_width.md) Anzahl der Wände angepasst werden. 0 Wände zu haben ist auch ein separater Fall, der mit der Einstellung [Minimale Feature-Größe](min_feature_size.md) angepasst werden kann.

Abstimmung
----
Theoretisch stellt die Einstellung auf 50 % der Linienbreite sicher, dass die Linienbreite am nächsten an der normalen Linienbreite bleibt. Es ist jedoch besser, etwas darüber zu bleiben. Für einen Drucker ist es einfacher, Linien zu drucken, die breiter als die Düsengröße sind, als dünnere Linien zu drucken, und weniger Linien zu haben bedeutet auch, dass der Druck schneller ist.

Bei sehr viskosen Materialien oder wenn schneller gedruckt wird, sollte die Minimale Wandlinienbreite verringert werden, um zu breite Linien zu vermeiden. Diese sind schwer zu drucken, wenn das Material nicht genügend Zeit hat, an den Seiten herauszufließen. Wenn die minimale Wandlinienbreite zu hoch ist, haften die Wände nicht gut zusammen, wodurch der Druck zerbrechlich wird.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**