Dicke der F�llschicht
====
### **Beschreibung**
Diese Einstellung bewirkt, dass mehrere F�llschichten miteinander kombiniert werden. Wenn diese Einstellung aktiviert ist, druckt der Werkzeugkopf dann keine F�llung auf einige der Ebenen, aber in der h�chsten der kombinierten Ebenen wird mehr Material extrudiert, um dies auszugleichen.

In der Ebenenansicht sieht es so aus, als w�ren die F�lllinien viel breiter geworden. Wenn sie tats�chlich gedruckt werden, fallen die F�lllinien weiter nach unten, anstatt sich horizontal auszubreiten.

![Die Dicke der F�llschicht ist auf das Dreifache der Schichth�he eingestellt](../images/infill_sparse_thickness.png)

### **Verwendung**
Da die Schichth�he der F�llung f�r die visuelle Qualit�t nicht wichtig ist, k�nnen Sie dickere Schichten f�r die F�llung verwenden, um die Druckzeit zu verk�rzen.

Die F�llschichtdicke muss ein Vielfaches der normalen Schichth�he sein. Andernfalls wird diese Einstellung auf die n�chste Schichth�he gerundet.

* Seien Sie vorsichtig, wenn Sie diese Einstellung zu stark erh�hen. Beim Wechseln zum und vom F�llen muss die Durchflussrate durch die D�se erheblich beschleunigt und verlangsamt werden. Beim Beschleunigen und Abbremsen gibt es eine gewisse Verz�gerung, sodass die D�se zu Beginn des F�llvorgangs zu wenig und nach dem Ende des F�llvorgangs zu viel ausst��t.
* In den Zwischenschichten druckt der Werkzeugkopf immer noch F�llung mit einer geringeren Schichtdicke, wo keine F�llung in den Schichten um ihn herum vorhanden ist. Dies kann dazu f�hren, dass kleine F�lllinien entlang schr�ger W�nde gedruckt werden.