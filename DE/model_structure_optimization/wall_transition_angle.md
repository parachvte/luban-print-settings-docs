Wand�bergangsschwellenwinkel
====
Dieser Winkel gibt den Winkel an, bei dem Cura beginnt, �berg�nge zu erstellen, um den Raum richtig zu f�llen. Alle Ecken, die sch�rfer als dieser Winkel sind, werden mit Linien variabler Breite gef�llt.

![Bei einer Breite von mehr als 10� werden keine �berg�nge mehr erstellt](../images/wall_transition_angle.png)

Effektiv schaltet dies variable Linienbreiten f�r bestimmte Ecken ein oder aus. Wenn zwei gegen�berliegende W�nde fast parallel sind, kleiner als der in dieser Einstellung angegebene Winkel, wird der Bereich zwischen ihnen mit Linien gef�llt, die in ihrer Breite variieren k�nnen. Wenn sie in einem gr��eren Winkel zueinander stehen, wird der Raum zwischen ihnen mit W�nden konstanter Breite ausgef�llt.

Wie immer ist dies ein Kompromiss. Die Verwendung einer variablen Breite hat einige Vorteile, wie zum Beispiel:
* Es hinterl�sst keine L�cken zwischen den Zeilen.
* Es f�llt denselben Raum nicht mehrmals.
* Die Abmessungen des Drucks werden dort genauer sein.

Allerdings hat es auch einige Nachteile:
* Es f�gt Ecken in d�nne St�cke ein, die als Wellen auf der Oberfl�che erscheinen k�nnen.
* Es erzeugt zus�tzliche Reisebewegungen.
* Der Drucker �ndert die Linienbreite m�glicherweise nicht genau in schneller Folge.

In der Praxis ist es gut, diesen Winkel gro� genug zu machen, um die Gr��e der L�cken in scharfen Ecken zu reduzieren, wie in der Ebenenansicht zu sehen, aber ansonsten so klein wie m�glich. Ein kleinerer Winkel l�sst die Oberfl�che im Allgemeinen glatter aussehen.

Es ist nicht m�glich, den Winkel auf 0� zu reduzieren, um variable Linienbreiten ganz zu beseitigen. Parallel gegen�berliegende W�nde erhalten immer eine Linienbreite, die an den Raum angepasst wird.

**Diese Einstellung gilt nicht nur f�r normale W�nde, sondern auch f�r Au�enhautw�nde, St�tzw�nde, F�llw�nde und konzentrische Muster.**