Dicke der Füllschicht
====
### **Beschreibung**
Diese Einstellung bewirkt, dass mehrere Füllschichten miteinander kombiniert werden. Wenn diese Einstellung aktiviert ist, druckt der Werkzeugkopf dann keine Füllung auf einige der Ebenen, aber in der höchsten der kombinierten Ebenen wird mehr Material extrudiert, um dies auszugleichen.

In der Ebenenansicht sieht es so aus, als wären die Fülllinien viel breiter geworden. Wenn sie tatsächlich gedruckt werden, fallen die Fülllinien weiter nach unten, anstatt sich horizontal auszubreiten.

![Die Dicke der Füllschicht ist auf das Dreifache der Schichthöhe eingestellt](../images/infill_sparse_thickness.png)

### **Verwendung**
Da die Schichthöhe der Füllung für die visuelle Qualität nicht wichtig ist, können Sie dickere Schichten für die Füllung verwenden, um die Druckzeit zu verkürzen.

Die Füllschichtdicke muss ein Vielfaches der normalen Schichthöhe sein. Andernfalls wird diese Einstellung auf die nächste Schichthöhe gerundet.

* Seien Sie vorsichtig, wenn Sie diese Einstellung zu stark erhöhen. Beim Wechseln zum und vom Füllen muss die Durchflussrate durch die Düse erheblich beschleunigt und verlangsamt werden. Beim Beschleunigen und Abbremsen gibt es eine gewisse Verzögerung, sodass die Düse zu Beginn des Füllvorgangs zu wenig und nach dem Ende des Füllvorgangs zu viel ausstößt.
* In den Zwischenschichten druckt der Werkzeugkopf immer noch Füllung mit einer geringeren Schichtdicke, wo keine Füllung in den Schichten um ihn herum vorhanden ist. Dies kann dazu führen, dass kleine Fülllinien entlang schräger Wände gedruckt werden.