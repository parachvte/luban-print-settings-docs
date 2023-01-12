Wandübergangsschwellenwinkel
====
Dieser Winkel gibt den Winkel an, bei dem Cura beginnt, Übergänge zu erstellen, um den Raum richtig zu füllen. Alle Ecken, die schärfer als dieser Winkel sind, werden mit Linien variabler Breite gefüllt.

![Bei einer Breite von mehr als 10° werden keine Übergänge mehr erstellt](../images/wall_transition_angle.png)

Effektiv schaltet dies variable Linienbreiten für bestimmte Ecken ein oder aus. Wenn zwei gegenüberliegende Wände fast parallel sind, kleiner als der in dieser Einstellung angegebene Winkel, wird der Bereich zwischen ihnen mit Linien gefüllt, die in ihrer Breite variieren können. Wenn sie in einem größeren Winkel zueinander stehen, wird der Raum zwischen ihnen mit Wänden konstanter Breite ausgefüllt.

Wie immer ist dies ein Kompromiss. Die Verwendung einer variablen Breite hat einige Vorteile, wie zum Beispiel:
* Es hinterlässt keine Lücken zwischen den Zeilen.
* Es füllt denselben Raum nicht mehrmals.
* Die Abmessungen des Drucks werden dort genauer sein.

Allerdings hat es auch einige Nachteile:
* Es fügt Ecken in dünne Stücke ein, die als Wellen auf der Oberfläche erscheinen können.
* Es erzeugt zusätzliche Reisebewegungen.
* Der Drucker ändert die Linienbreite möglicherweise nicht genau in schneller Folge.

In der Praxis ist es gut, diesen Winkel groß genug zu machen, um die Größe der Lücken in scharfen Ecken zu reduzieren, wie in der Ebenenansicht zu sehen, aber ansonsten so klein wie möglich. Ein kleinerer Winkel lässt die Oberfläche im Allgemeinen glatter aussehen.

Es ist nicht möglich, den Winkel auf 0° zu reduzieren, um variable Linienbreiten ganz zu beseitigen. Parallel gegenüberliegende Wände erhalten immer eine Linienbreite, die an den Raum angepasst wird.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**