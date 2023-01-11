Linienbreite
====
### **Beschreibung**
Dies ist die horizontale Breite der Linien, die der Drucker nach unten platziert. Normalerweise bestimmt der Durchmesser der D�sen�ffnung, wie breit Ihre Linien werden, aber durch das Extrudieren von mehr oder weniger Material kann der Drucker ein wenig variieren, wie breit die Linien werden.

![Sehr d�nne Linien](../images/line_width_small.png)
![Sehr breite Linien](../images/line_width_large.png)

### **Einfluss**
Durch Verringern der Linienbreite kann der Drucker mehr Details drucken. Insbesondere erlaubt diese Einstellung dem Drucker auch d�nne Teile zu drucken. Die Linienbreite ist eine der einflussreichsten Einstellungen in Ihrem Druck. Das Anpassen dieser Einstellung hat die folgenden Auswirkungen:
* Durch das Drucken d�nnerer Linien k�nnen d�nnere Teile gedruckt werden, da sogar eine Linie in die d�nnsten Teile passt.
* Das Einstellen der Linienbreite auf ein gerades Vielfaches der Dicke Ihres Drucks kann das Objekt st�rker machen und den Materialfluss verbessern.
* Eine kleinere Linienbreite l�sst Ihre Oberfl�che glatter aussehen.
* Das Drucken von Linien, die etwas kleiner als Ihre D�sengr��e sind, verbessert tendenziell die Festigkeit. Es erm�glicht der D�se, benachbarte Linien miteinander zu verschmelzen, wenn sie einen zweiten Durchgang leicht �ber die vorherige Linie macht.
* Zu breite Drucklinien f�hren zu Unterextrusion. Der Drucker versucht, mehr Material zu extrudieren, genug, um die gew�nschte Breite der Linie auszuf�llen. Dieses Material wird versuchen, in jede beliebige Richtung zu flie�en. Irgendwann wird der Gegendruck jedoch zu gro�, so dass das Material nicht mehr ganz zur Seite der sehr breiten Linien flie�t und L�cken zwischen den Linien entstehen.
* Auch zu kleine Drucklinien f�hren zu Unterextrusion. Wenn das Material nicht schnell genug durch die D�se flie�t, f�hrt die Oberfl�chenspannung des Materials dazu, dass es zu kleinen Tr�pfchen koaguliert, wodurch die Extrusion ungleichm��ig wird und L�cken zwischen den Tr�pfchen entstehen.
* Das Drucken d�nnerer Linien verl�ngert die Druckzeit erheblich.

### **Verwendung**
*Es ist nicht ratsam, die Linienbreite unter 60 % der D�sengr��e oder �ber 150 % zu reduzieren. Beide extrudieren m�glicherweise nicht genug Material.*

Anpassen der Linienbreiten an gen�gend W�nde
----
Wenn Sie mechanische Objekte drucken, die d�nn, aber stark sein m�ssen, werden Sie regelm��ig auf das Problem sto�en, dass Ihr St�ck kein sauberes gerades Vielfaches der Linienbreite hat. Wenn es sich nicht um ein gerades Vielfaches handelt, reduziert Luban normalerweise den Fluss einiger Linien aufgrund der Einstellung [Compensate Wall Overlaps](../shell/travel_compensate_overlapping_walls_enabled.md). Dadurch ver�ndert sich die Str�mungsgeschwindigkeit durch die D�se, was der visuellen Qualit�t abtr�glich ist. Wenn es sich um ein sauberes Vielfaches der Linienbreite, aber nicht um eine gerade Zahl handelt, wird eine der W�nde auf 0 reduziert.

Die Erzeugung sauberer Konturen mit gleichm��igen Linien kann den Druck st�rker machen und besser aussehen.

![Standardlinienbreite, bei der die Konturen nicht passen und einige Linien dicker sind als andere](../images/line_width_fit_bad.png)
![Durch Reduzieren der Linienbreite passt sie sich gleichm��ig an](../images/line_width_fit_good_small.png)
![Erh�hen der Linienbreite funktioniert auch](../images/line_width_fit_good_large.png)

Den Durchfluss konstant halten
----
Gro�e Durchflussschwankungen sind f�r FDM-Drucker mitunter problematisch. Die D�senkammer h�lt etwas Material unter Druck, wodurch die tats�chliche Durchflussrate aus der D�se verz�gert wird. Es dauert eine Weile, bis die Durchflussrate zu- oder abnimmt. Drucker mit einem Bowden-System zum Zuf�hren des Filaments haben auch eine Federung in der Bowden-R�hre, was den Effekt deutlich verschlechtert. Als Ergebnis erhalten Sie eine Unterextrusion, wenn Sie zu einer h�heren Durchflussrate wechseln, und eine �berextrusion, wenn Sie zu einer niedrigeren Durchflussrate wechseln. Daher ist es eine gute Idee, die Durchflussrate so konstant wie m�glich zu halten.

Die Linienbreite beeinflusst die Durchflussrate stark. Es ist ratsam, die Breite der Linien nahe beieinander und nahe an der Gr��e der D�se zu halten. Wenn Sie die Linienbreite stark angepasst haben, k�nnen Sie auch die Druckgeschwindigkeit anpassen, um die Durchflussrate konstanter zu halten. Dadurch wird die Ma�haltigkeit Ihres Drucks verbessert.