Außenkontur spiralisieren
====
### **Beschreibung**
Beim Spiralisieren des Modells erhält das Modell keine Füllung oder Spitzen. Es wird nur eine Wand und einen Boden bekommen. Entscheidend ist, dass, wenn [Smooth Spiralized Contours](smooth_spiralized_contours.md) aktiviert ist, die Höhe der Düse im Verlauf einer Ebene allmählich zunimmt. Auf diese Weise entsteht eine Spirale, die der Kontur des Modells folgt. Es gibt keine signifikante Anhebung des Werkzeugkopfes von einer Schicht zur anderen, da sich die Düse allmählich nach oben zur nächsten Schicht bewegt.

Beim schichtweisen Drucken muss sich die Düse normalerweise von einer Schicht zur nächsten bewegen. Diese Bewegung bewirkt, dass die Düse für den Bruchteil einer Sekunde fast still in XY-Richtung steht, was eine Naht auf der Oberfläche hinterlässt, die als Z-Naht bezeichnet wird. Das Spiralisieren des Modells kann das verhindern.

### **Verwendung**
Der Spiralisierungsmodus ist bei vielen Slicern üblich. Es wird manchmal auch als "Vasenmodus" bezeichnet, weil es eine gute Möglichkeit ist, Vasen zu drucken. Außenkontur spiralisieren hat die folgenden Effekte:
* Druckt extrem schnell.
* Die Oberfläche wird sehr glatt. Es gibt keine [Z-Naht](../troubleshooting/seam.md) nicht mehr, wo es zur nächsten Ebene verschoben wurde, wenn [Glatte spiralisierte Konturen](smooth_spiralized_contours.md) aktiviert.
* Das Modell wird nicht sehr stark sein. Wenn das Modell zu groß ist, neigt es aufgrund von [Verzerrung](../troubleshooting/warping.md) dazu, sich zu teilen.
* Es ist schwierig, den Druck wasserdicht zu machen, wenn er groß ist.

Spiralisieren funktioniert nicht gut bei Drucken mit vielen horizontalen Flächen. Es kommt überhaupt nicht mit Überhängen zurecht und druckt keine oberen Flächen, sodass sich nichts auf einer horizontalen Fläche abstützen kann. Es funktioniert auch nicht gut, wenn sich mehrere Teile auf einer Ebene befinden.