Linienbreite
====
### **Beschreibung**
Dies ist die horizontale Breite der Linien, die der Drucker nach unten platziert. Normalerweise bestimmt der Durchmesser der Düsenöffnung, wie breit Ihre Linien werden, aber durch das Extrudieren von mehr oder weniger Material kann der Drucker ein wenig variieren, wie breit die Linien werden.

![Sehr dünne Linien](../images/line_width_small.png)
![Sehr breite Linien](../images/line_width_large.png)

### **Einfluss**
Durch Verringern der Linienbreite kann der Drucker mehr Details drucken. Insbesondere erlaubt diese Einstellung dem Drucker auch dünne Teile zu drucken. Die Linienbreite ist eine der einflussreichsten Einstellungen in Ihrem Druck. Das Anpassen dieser Einstellung hat die folgenden Auswirkungen:
* Durch das Drucken dünnerer Linien können dünnere Teile gedruckt werden, da sogar eine Linie in die dünnsten Teile passt.
* Das Einstellen der Linienbreite auf ein gerades Vielfaches der Dicke Ihres Drucks kann das Objekt stärker machen und den Materialfluss verbessern.
* Eine kleinere Linienbreite lässt Ihre Oberfläche glatter aussehen.
* Das Drucken von Linien, die etwas kleiner als Ihre Düsengröße sind, verbessert tendenziell die Festigkeit. Es ermöglicht der Düse, benachbarte Linien miteinander zu verschmelzen, wenn sie einen zweiten Durchgang leicht über die vorherige Linie macht.
* Zu breite Drucklinien führen zu Unterextrusion. Der Drucker versucht, mehr Material zu extrudieren, genug, um die gewünschte Breite der Linie auszufüllen. Dieses Material wird versuchen, in jede beliebige Richtung zu fließen. Irgendwann wird der Gegendruck jedoch zu groß, so dass das Material nicht mehr ganz zur Seite der sehr breiten Linien fließt und Lücken zwischen den Linien entstehen.
* Auch zu kleine Drucklinien führen zu Unterextrusion. Wenn das Material nicht schnell genug durch die Düse fließt, führt die Oberflächenspannung des Materials dazu, dass es zu kleinen Tröpfchen koaguliert, wodurch die Extrusion ungleichmäßig wird und Lücken zwischen den Tröpfchen entstehen.
* Das Drucken dünnerer Linien verlängert die Druckzeit erheblich.

### **Verwendung**
*Es ist nicht ratsam, die Linienbreite unter 60 % der Düsengröße oder über 150 % zu reduzieren. Beide extrudieren möglicherweise nicht genug Material.*

Anpassen der Linienbreiten an genügend Wände
----
Wenn Sie mechanische Objekte drucken, die dünn, aber stark sein müssen, werden Sie regelmäßig auf das Problem stoßen, dass Ihr Stück kein sauberes gerades Vielfaches der Linienbreite hat. Wenn es sich nicht um ein gerades Vielfaches handelt, reduziert Luban normalerweise den Fluss einiger Linien aufgrund der Einstellung [Compensate Wall Overlaps](../shell/travel_compensate_overlapping_walls_enabled.md). Dadurch verändert sich die Strömungsgeschwindigkeit durch die Düse, was der visuellen Qualität abträglich ist. Wenn es sich um ein sauberes Vielfaches der Linienbreite, aber nicht um eine gerade Zahl handelt, wird eine der Wände auf 0 reduziert.

Die Erzeugung sauberer Konturen mit gleichmäßigen Linien kann den Druck stärker machen und besser aussehen.

![Standardlinienbreite, bei der die Konturen nicht passen und einige Linien dicker sind als andere](../images/line_width_fit_bad.png)
![Durch Reduzieren der Linienbreite passt sie sich gleichmäßig an](../images/line_width_fit_good_small.png)
![Erhöhen der Linienbreite funktioniert auch](../images/line_width_fit_good_large.png)

Den Durchfluss konstant halten
----
Große Durchflussschwankungen sind für FDM-Drucker mitunter problematisch. Die Düsenkammer hält etwas Material unter Druck, wodurch die tatsächliche Durchflussrate aus der Düse verzögert wird. Es dauert eine Weile, bis die Durchflussrate zu- oder abnimmt. Drucker mit einem Bowden-System zum Zuführen des Filaments haben auch eine Federung in der Bowden-Röhre, was den Effekt deutlich verschlechtert. Als Ergebnis erhalten Sie eine Unterextrusion, wenn Sie zu einer höheren Durchflussrate wechseln, und eine Überextrusion, wenn Sie zu einer niedrigeren Durchflussrate wechseln. Daher ist es eine gute Idee, die Durchflussrate so konstant wie möglich zu halten.

Die Linienbreite beeinflusst die Durchflussrate stark. Es ist ratsam, die Breite der Linien nahe beieinander und nahe an der Größe der Düse zu halten. Wenn Sie die Linienbreite stark angepasst haben, können Sie auch die Druckgeschwindigkeit anpassen, um die Durchflussrate konstanter zu halten. Dadurch wird die Maßhaltigkeit Ihres Drucks verbessert.