Modellstruktur
====
Mit dieser Einstellung können Sie auswählen, welche Art von Struktur Sie drucken möchten.

Normale Struktur
----
Standardmäßig verwendet Luban Normal Structure, um das Modell zu drucken. Bei dieser Auswahl werden alle Teile des Modells integral gedruckt.

Je stärker das Modell ist, desto länger dauert der Druck und desto mehr Material wird verbraucht. Im Gegenteil, je dünner das Modell ist, desto kürzer ist die Druckzeit und desto weniger Material wird verbraucht.

Vasenstruktur
----
Vase Structure, auch *Spiralize Outer Contour*/*Vase Mode* genannt, druckt nur die untere Schicht und die Außenwand des Modells. Die Struktur des Drucks ähnelt der einer Vase, mit einem Boden und einer Wand, aber ohne Füllung oder obere Abdeckung.

Entscheidend ist, dass, wenn [Smooth Spiralized Contours](smooth_spiralized_contours.md) aktiviert ist, die Höhe der Düse im Verlauf einer Ebene allmählich zunimmt. Auf diese Weise entsteht eine Spirale, die der Kontur des Modells folgt. Es gibt keine signifikante Anhebung des Werkzeugkopfes von einer Schicht zur anderen, da sich die Düse allmählich nach oben zur nächsten Schicht bewegt. Beim schichtweisen Drucken muss sich die Düse normalerweise von einer Schicht zur nächsten bewegen. Diese Bewegung bewirkt, dass die Düse für den Bruchteil einer Sekunde fast still in XY-Richtung steht, was eine Naht auf der Oberfläche hinterlässt, die als Z-Naht bezeichnet wird. Das Spiralisieren des Modells kann das verhindern.

Vasenstruktur hat die folgenden Effekte:
* Druckt extrem schnell.
* Die Oberfläche wird sehr glatt. Es gibt keine [Z-Naht](../troubleshooting/seam.md) mehr, wo sie zur nächsten Ebene verschoben wurde, wenn [Smooth Spiralized Contours](smooth_spiralized_contours.md) aktiviert ist.
* Das Modell wird nicht sehr stark sein. Wenn das Modell zu groß ist, neigt es aufgrund von [Verzerrung](../troubleshooting/warping.md) dazu, sich zu teilen.
* Es ist schwierig, den Druck wasserdicht zu machen, wenn er groß ist.

Vasenstruktur funktioniert nicht gut bei Drucken mit vielen horizontalen Flächen. Es kommt überhaupt nicht mit Überhängen zurecht und druckt keine oberen Flächen, sodass sich nichts auf einer horizontalen Fläche abstützen kann. Es funktioniert auch nicht gut, wenn sich mehrere Teile auf einer Ebene befinden.