Minimaler Wandfluss
====
### **Beschreibung**
Durch das Kompensieren von Wandüberlappungen wird die Durchflussrate einiger Wandlinien reduziert. Dies kann problematisch sein, da es die Strömungsgeschwindigkeit beliebig weit reduzieren kann, bis auf 1 %, wenn sich die Wände fast vollständig überlappen. Das Drucken mit extrem niedrigen Flussraten funktioniert nicht gut. Es neigt dazu, ein Tropfenmuster zu bilden, anstatt kontinuierlich Linien zu extrudieren.

Diese Einstellung verwandelt diese Linien mit extrem niedriger Flussrate in Bewegungsbewegungen und bringt ihre Flussrate effektiv auf 0%. Das Material quillt immer noch wie bei normalen Fahrbewegungen heraus, bildet aber keine Perlen. Die Düse folgt weiterhin dem Weg der Wand, um an der richtigen Stelle auszusickern.

![Überlappungen zwischen Wänden werden normal ausgeglichen](../images/wall_min_flow_0.png)
![Wände mit weniger als 50 % Extrusion werden in Bewegungsbewegungen umgewandelt](../images/wall_min_flow_50.png)

### **Verwendung**
Wenn Sie diese Einstellung erhöhen, werden Ihre Wände dünner als gewünscht. Der Drucker lässt die sehr dünnen Linien weg. Technisch gesehen ist dies eine Unterextrusion, die dazu führt, dass Ihr Teil dünner als gewünscht ist. Anstatt eine lange Reihe von Blips oder Perlen über die Wand zu ziehen, wird nichts gedruckt, wodurch die Wand etwas glatter wird.

Stellen Sie diese Einstellung auf den minimalen Wanddurchfluss ein, den Ihre Düse ohne Tropfenbildung erreichen kann. Typischerweise sind dies etwa 60 %. Wenn die Linienbreite unter 60 % reduziert wird, würden sich diese Tröpfchen bilden. Wenn Sie mit größeren Schichthöhen drucken oder dickere Wandlinien verwenden, können Sie diese Einstellung möglicherweise etwas reduzieren, um eine größere Maßgenauigkeit zu erhalten.