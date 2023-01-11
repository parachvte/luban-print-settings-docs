Au�enkontur spiralisieren
====
### **Beschreibung**
Beim Spiralisieren des Modells erh�lt das Modell keine F�llung oder Spitzen. Es wird nur eine Wand und einen Boden bekommen. Entscheidend ist, dass, wenn [Smooth Spiralized Contours](smooth_spiralized_contours.md) aktiviert ist, die H�he der D�se im Verlauf einer Ebene allm�hlich zunimmt. Auf diese Weise entsteht eine Spirale, die der Kontur des Modells folgt. Es gibt keine signifikante Anhebung des Werkzeugkopfes von einer Schicht zur anderen, da sich die D�se allm�hlich nach oben zur n�chsten Schicht bewegt.

Beim schichtweisen Drucken muss sich die D�se normalerweise von einer Schicht zur n�chsten bewegen. Diese Bewegung bewirkt, dass die D�se f�r den Bruchteil einer Sekunde fast still in XY-Richtung steht, was eine Naht auf der Oberfl�che hinterl�sst, die als Z-Naht bezeichnet wird. Das Spiralisieren des Modells kann das verhindern.

### **Verwendung**
Der Spiralisierungsmodus ist bei vielen Slicern �blich. Es wird manchmal auch als "Vasenmodus" bezeichnet, weil es eine gute M�glichkeit ist, Vasen zu drucken. Au�enkontur spiralisieren hat die folgenden Effekte:
* Druckt extrem schnell.
* Die Oberfl�che wird sehr glatt. Es gibt keine [Z-Naht](../troubleshooting/seam.md) nicht mehr, wo es zur n�chsten Ebene verschoben wurde, wenn [Glatte spiralisierte Konturen](smooth_spiralized_contours.md) aktiviert.
* Das Modell wird nicht sehr stark sein. Wenn das Modell zu gro� ist, neigt es aufgrund von [Verzerrung](../troubleshooting/warping.md) dazu, sich zu teilen.
* Es ist schwierig, den Druck wasserdicht zu machen, wenn er gro� ist.

Spiralisieren funktioniert nicht gut bei Drucken mit vielen horizontalen Fl�chen. Es kommt �berhaupt nicht mit �berh�ngen zurecht und druckt keine oberen Fl�chen, sodass sich nichts auf einer horizontalen Fl�che abst�tzen kann. Es funktioniert auch nicht gut, wenn sich mehrere Teile auf einer Ebene befinden.