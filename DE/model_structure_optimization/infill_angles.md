Richtungen der Fülllinie
====
### **Beschreibung**
Fülllinien sind normalerweise in einem 45-Grad-Winkel ausgerichtet. Bei diesem Winkel arbeiten sowohl der X- als auch der Y-Motor zusammen, um eine maximale Beschleunigung des Werkzeugkopfes zu erreichen, wenn ein Drucker mit dem üblichen kartesischen Gantry-Mechanismus verwendet wird.

Mit dieser Einstellung können Sie diesen Winkel anpassen. Sie können es spezialisieren, um eine größere Festigkeit für Ihr spezifisches Modell zu erzeugen oder eine größere Beschleunigung für Ihr spezifisches Portalsystem zu erreichen.

![Linienfüllung mit Standardwinkeln von 45 und 135 Grad](../images/infill_angles_45_135.png)
![Linienfüllung mit benutzerdefinierten Winkeln von 0 und 30 Grad](../images/infill_angles_0_30.png)

### **Verwendung**
Der Wert dieser Einstellung muss eine durch Kommas getrennte Liste von Winkeln mit Klammern sein (z. B. [0,60,120]). Ein Winkel von 0 Grad ergibt eine Linie parallel zur Y-Achse. Die Liste der Winkel wird abwechselnd über den Ebenen angezeigt.
* Der endgültige Druck ist in Richtung der Fülllinien am stärksten. Wenn Sie möchten, dass der Druck eine bestimmte Kraft in horizontaler Richtung trägt, ist es hilfreich, die Fülllinien in dieser Richtung auszurichten.
* Belassen Sie die Einstellung in einer leeren Liste, um die Standardeinstellung zu verwenden.
* Die Standardeinstellung hängt vom Füllmuster ab:
   * Für Cross- und Cross-3D-Füllmuster ist der Standardwert [22]. Dadurch werden möglichst viele Linien nahe an den Diagonalen ausgerichtet.
   * Für Linien- und Zickzack-Füllmuster ist die Voreinstellung [45,135]. Dadurch wechselt die Orientierung Schicht für Schicht zwischen den beiden Diagonalen.
   * Alle anderen Muster verwenden einen Standardwert von [45]. Dadurch werden möglichst viele Linien nahe an den Diagonalen ausgerichtet.