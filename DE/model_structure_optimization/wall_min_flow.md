Minimaler Wandfluss
====
### **Beschreibung**
Durch das Kompensieren von Wand�berlappungen wird die Durchflussrate einiger Wandlinien reduziert. Dies kann problematisch sein, da es die Str�mungsgeschwindigkeit beliebig weit reduzieren kann, bis auf 1 %, wenn sich die W�nde fast vollst�ndig �berlappen. Das Drucken mit extrem niedrigen Flussraten funktioniert nicht gut. Es neigt dazu, ein Tropfenmuster zu bilden, anstatt kontinuierlich Linien zu extrudieren.

Diese Einstellung verwandelt diese Linien mit extrem niedriger Flussrate in Bewegungsbewegungen und bringt ihre Flussrate effektiv auf 0%. Das Material quillt immer noch wie bei normalen Fahrbewegungen heraus, bildet aber keine Perlen. Die D�se folgt weiterhin dem Weg der Wand, um an der richtigen Stelle auszusickern.

![�berlappungen zwischen W�nden werden normal ausgeglichen](../images/wall_min_flow_0.png)
![W�nde mit weniger als 50 % Extrusion werden in Bewegungsbewegungen umgewandelt](../images/wall_min_flow_50.png)

### **Verwendung**
Wenn Sie diese Einstellung erh�hen, werden Ihre W�nde d�nner als gew�nscht. Der Drucker l�sst die sehr d�nnen Linien weg. Technisch gesehen ist dies eine Unterextrusion, die dazu f�hrt, dass Ihr Teil d�nner als gew�nscht ist. Anstatt eine lange Reihe von Blips oder Perlen �ber die Wand zu ziehen, wird nichts gedruckt, wodurch die Wand etwas glatter wird.

Stellen Sie diese Einstellung auf den minimalen Wanddurchfluss ein, den Ihre D�se ohne Tropfenbildung erreichen kann. Typischerweise sind dies etwa 60 %. Wenn die Linienbreite unter 60 % reduziert wird, w�rden sich diese Tr�pfchen bilden. Wenn Sie mit gr��eren Schichth�hen drucken oder dickere Wandlinien verwenden, k�nnen Sie diese Einstellung m�glicherweise etwas reduzieren, um eine gr��ere Ma�genauigkeit zu erhalten.