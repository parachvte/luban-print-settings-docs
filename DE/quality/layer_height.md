Schichth�he
====
### **Beschreibung**
Der 3D-Drucker tr�gt Kunststoff schichtweise auf. Die Schichth�he ist der wichtigste Faktor sowohl f�r die visuelle Qualit�t Ihres endg�ltigen Drucks als auch f�r die Druckzeit.

![0.1mm Schichth�he](../images/layer_height_0.1.png)
![0.3mm Schichth�he](../images/layer_height_0.3.png)

### **Einfluss**
Das �ndern dieser Einstellung hat die folgenden Auswirkungen:
* D�nnere Schichten erh�hen die visuelle Qualit�t des Drucks. Da die Schichten d�nner sind, wird der Treppenstufeneffekt an den Schichtgrenzen reduziert. Au�erdem liegen die Schichten n�her beieinander und die Falten zwischen den Schichten werden kleiner, was zu einem insgesamt glatteren Finish f�hrt.
* Durch d�nnere Schichten kann der Drucker mehr Details auf der Ober- und Unterseite Ihres Drucks erzeugen.
* Dickere Schichten neigen dazu, den Druck st�rker zu machen. Es gibt weniger Grenzen zwischen den Schichten, die tendenziell ein Schwachpunkt sind. Die dickeren Schichten werden nicht so stark scheren.
* Dickere Schichten reduzieren die Druckzeit, da die D�se weniger horizontale Bewegungen ausf�hren muss.

### **Verwendung**
----
Viele Einstellungen h�ngen von der Layerh�he ab. Da die Schichth�he die Durchflussrate des Materials durch die D�se erheblich beeinflusst, �ndern sich viele Parameter des Druckprozesses. Wenn Sie beispielsweise die Schichth�he erh�hen, sollten Sie wahrscheinlich die Drucktemperatur leicht erh�hen, um den zus�tzlichen W�rmeverlust auszugleichen. Die Temperatur wirkt sich dann auf die Fl�ssigkeit des Materials aus, was sich darauf auswirkt, wie scharf Ihre Ecken sein werden und welche K�hlung erforderlich ist, und so weiter. Es ist immer ratsam, mit einem vorgefertigten Qualit�tsprofil zu beginnen, das Ihrem Drucker zur Verf�gung steht und eine Schichth�he hat, die Ihren W�nschen entspricht.

Sie k�nnen im benutzerdefinierten Modus eine gew�nschte Schichth�he ausw�hlen, aber es sind auch vorgefertigte Profile mit verschiedenen Schichth�hen verf�gbar. Sie k�nnen im empfohlenen Modus mithilfe eines Schiebereglers oder mithilfe des Dropdown-Widgets im benutzerdefinierten Modus aus Profilen f�r verschiedene Schichth�hen ausw�hlen. Da diese Profile auch einige Parameter �ndern, die von der Layer-H�he abh�ngen, erreichen Sie auf diese Weise wahrscheinlich eine bessere Qualit�t.

Zus�tzliche Bemerkungen
----
Bei sehr geringen Schichth�hen k�nnten Sie an die Aufl�sungsgrenze Ihrer Z-Achse sto�en. Schlagen Sie die Schrittweite der Z-Achse Ihres Druckers nach und vergewissern Sie sich, dass die Schichth�he ein Vielfaches der Schrittweite ist. Wenn die Schrittgr��e und die Schichth�he nicht richtig �bereinstimmen, sind einige Schichten dicker als andere, was zu Streifenbildung f�hrt.

**Beachten Sie, dass die Schichth�heneinstellung nicht f�r die Anfangsschicht des Drucks oder f�r die Raft-Schichten gilt, die ihre eigenen Einstellungen haben, um die Schichth�he separat anzupassen. Bei der Verwendung von adaptiven Ebenen wird diese Einstellung f�r die Ebenenh�he als Basislinie verwendet, aber die tats�chliche Ebenenh�he kann etwas variieren.**