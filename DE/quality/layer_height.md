Schichthöhe
====
### **Beschreibung**
Der 3D-Drucker trägt Kunststoff schichtweise auf. Die Schichthöhe ist der wichtigste Faktor sowohl für die visuelle Qualität Ihres endgültigen Drucks als auch für die Druckzeit.

![0.1mm Schichthöhe](../images/layer_height_0.1.png)
![0.3mm Schichthöhe](../images/layer_height_0.3.png)

### **Einfluss**
Das Ändern dieser Einstellung hat die folgenden Auswirkungen:
* Dünnere Schichten erhöhen die visuelle Qualität des Drucks. Da die Schichten dünner sind, wird der Treppenstufeneffekt an den Schichtgrenzen reduziert. Außerdem liegen die Schichten näher beieinander und die Falten zwischen den Schichten werden kleiner, was zu einem insgesamt glatteren Finish führt.
* Durch dünnere Schichten kann der Drucker mehr Details auf der Ober- und Unterseite Ihres Drucks erzeugen.
* Dickere Schichten neigen dazu, den Druck stärker zu machen. Es gibt weniger Grenzen zwischen den Schichten, die tendenziell ein Schwachpunkt sind. Die dickeren Schichten werden nicht so stark scheren.
* Dickere Schichten reduzieren die Druckzeit, da die Düse weniger horizontale Bewegungen ausführen muss.

### **Verwendung**
----
Viele Einstellungen hängen von der Layerhöhe ab. Da die Schichthöhe die Durchflussrate des Materials durch die Düse erheblich beeinflusst, ändern sich viele Parameter des Druckprozesses. Wenn Sie beispielsweise die Schichthöhe erhöhen, sollten Sie wahrscheinlich die Drucktemperatur leicht erhöhen, um den zusätzlichen Wärmeverlust auszugleichen. Die Temperatur wirkt sich dann auf die Flüssigkeit des Materials aus, was sich darauf auswirkt, wie scharf Ihre Ecken sein werden und welche Kühlung erforderlich ist, und so weiter. Es ist immer ratsam, mit einem vorgefertigten Qualitätsprofil zu beginnen, das Ihrem Drucker zur Verfügung steht und eine Schichthöhe hat, die Ihren Wünschen entspricht.

Sie können im benutzerdefinierten Modus eine gewünschte Schichthöhe auswählen, aber es sind auch vorgefertigte Profile mit verschiedenen Schichthöhen verfügbar. Sie können im empfohlenen Modus mithilfe eines Schiebereglers oder mithilfe des Dropdown-Widgets im benutzerdefinierten Modus aus Profilen für verschiedene Schichthöhen auswählen. Da diese Profile auch einige Parameter ändern, die von der Layer-Höhe abhängen, erreichen Sie auf diese Weise wahrscheinlich eine bessere Qualität.

Zusätzliche Bemerkungen
----
Bei sehr geringen Schichthöhen könnten Sie an die Auflösungsgrenze Ihrer Z-Achse stoßen. Schlagen Sie die Schrittweite der Z-Achse Ihres Druckers nach und vergewissern Sie sich, dass die Schichthöhe ein Vielfaches der Schrittweite ist. Wenn die Schrittgröße und die Schichthöhe nicht richtig übereinstimmen, sind einige Schichten dicker als andere, was zu Streifenbildung führt.

**Beachten Sie, dass die Schichthöheneinstellung nicht für die Anfangsschicht des Drucks oder für die Raft-Schichten gilt, die ihre eigenen Einstellungen haben, um die Schichthöhe separat anzupassen. Bei der Verwendung von adaptiven Ebenen wird diese Einstellung für die Ebenenhöhe als Basislinie verwendet, aber die tatsächliche Ebenenhöhe kann etwas variieren.**