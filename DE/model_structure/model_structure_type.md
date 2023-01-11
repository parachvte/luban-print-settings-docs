Modellstruktur
====
Mit dieser Einstellung k�nnen Sie ausw�hlen, welche Art von Struktur Sie drucken m�chten.

Normale Struktur
----
Standardm��ig verwendet Luban Normal Structure, um das Modell zu drucken. Bei dieser Auswahl werden alle Teile des Modells integral gedruckt.

Je st�rker das Modell ist, desto l�nger dauert der Druck und desto mehr Material wird verbraucht. Im Gegenteil, je d�nner das Modell ist, desto k�rzer ist die Druckzeit und desto weniger Material wird verbraucht.

Vasenstruktur
----
Vase Structure, auch *Spiralize Outer Contour*/*Vase Mode* genannt, druckt nur die untere Schicht und die Au�enwand des Modells. Die Struktur des Drucks �hnelt der einer Vase, mit einem Boden und einer Wand, aber ohne F�llung oder obere Abdeckung.

Entscheidend ist, dass, wenn [Smooth Spiralized Contours](smooth_spiralized_contours.md) aktiviert ist, die H�he der D�se im Verlauf einer Ebene allm�hlich zunimmt. Auf diese Weise entsteht eine Spirale, die der Kontur des Modells folgt. Es gibt keine signifikante Anhebung des Werkzeugkopfes von einer Schicht zur anderen, da sich die D�se allm�hlich nach oben zur n�chsten Schicht bewegt. Beim schichtweisen Drucken muss sich die D�se normalerweise von einer Schicht zur n�chsten bewegen. Diese Bewegung bewirkt, dass die D�se f�r den Bruchteil einer Sekunde fast still in XY-Richtung steht, was eine Naht auf der Oberfl�che hinterl�sst, die als Z-Naht bezeichnet wird. Das Spiralisieren des Modells kann das verhindern.

Vasenstruktur hat die folgenden Effekte:
* Druckt extrem schnell.
* Die Oberfl�che wird sehr glatt. Es gibt keine [Z-Naht](../troubleshooting/seam.md) mehr, wo sie zur n�chsten Ebene verschoben wurde, wenn [Smooth Spiralized Contours](smooth_spiralized_contours.md) aktiviert ist.
* Das Modell wird nicht sehr stark sein. Wenn das Modell zu gro� ist, neigt es aufgrund von [Verzerrung](../troubleshooting/warping.md) dazu, sich zu teilen.
* Es ist schwierig, den Druck wasserdicht zu machen, wenn er gro� ist.

Vasenstruktur funktioniert nicht gut bei Drucken mit vielen horizontalen Fl�chen. Es kommt �berhaupt nicht mit �berh�ngen zurecht und druckt keine oberen Fl�chen, sodass sich nichts auf einer horizontalen Fl�che abst�tzen kann. Es funktioniert auch nicht gut, wenn sich mehrere Teile auf einer Ebene befinden.