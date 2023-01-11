Richtungen der F�lllinie
====
### **Beschreibung**
F�lllinien sind normalerweise in einem 45-Grad-Winkel ausgerichtet. Bei diesem Winkel arbeiten sowohl der X- als auch der Y-Motor zusammen, um eine maximale Beschleunigung des Werkzeugkopfes zu erreichen, wenn ein Drucker mit dem �blichen kartesischen Gantry-Mechanismus verwendet wird.

Mit dieser Einstellung k�nnen Sie diesen Winkel anpassen. Sie k�nnen es spezialisieren, um eine gr��ere Festigkeit f�r Ihr spezifisches Modell zu erzeugen oder eine gr��ere Beschleunigung f�r Ihr spezifisches Portalsystem zu erreichen.

![Linienf�llung mit Standardwinkeln von 45 und 135 Grad](../images/infill_angles_45_135.png)
![Linienf�llung mit benutzerdefinierten Winkeln von 0 und 30 Grad](../images/infill_angles_0_30.png)

### **Verwendung**
Der Wert dieser Einstellung muss eine durch Kommas getrennte Liste von Winkeln mit Klammern sein (z. B. [0,60,120]). Ein Winkel von 0 Grad ergibt eine Linie parallel zur Y-Achse. Die Liste der Winkel wird abwechselnd �ber den Ebenen angezeigt.
* Der endg�ltige Druck ist in Richtung der F�lllinien am st�rksten. Wenn Sie m�chten, dass der Druck eine bestimmte Kraft in horizontaler Richtung tr�gt, ist es hilfreich, die F�lllinien in dieser Richtung auszurichten.
* Belassen Sie die Einstellung in einer leeren Liste, um die Standardeinstellung zu verwenden.
* Die Standardeinstellung h�ngt vom F�llmuster ab:
   * F�r Cross- und Cross-3D-F�llmuster ist der Standardwert [22]. Dadurch werden m�glichst viele Linien nahe an den Diagonalen ausgerichtet.
   * F�r Linien- und Zickzack-F�llmuster ist die Voreinstellung [45,135]. Dadurch wechselt die Orientierung Schicht f�r Schicht zwischen den beiden Diagonalen.
   * Alle anderen Muster verwenden einen Standardwert von [45]. Dadurch werden m�glichst viele Linien nahe an den Diagonalen ausgerichtet.