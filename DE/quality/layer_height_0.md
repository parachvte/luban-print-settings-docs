Anfängliche Schichthöhe
====
### **Beschreibung**
Diese Einstellung definiert die Dicke der ersten Schicht Ihres Drucks.

![Die erste Schicht ist dicker als die restlichen Schichten](../images/layer_height_0.png)

### **Einfluss**
Eine Erhöhung der Dicke der Anfangsschicht führt dazu, dass die Düse mehr Material über die gleiche Distanz extrudiert, was zusätzliche Kraft erfordert, da sich das Material zu den Seiten ausbreitet, um die volle Linienbreite auszufüllen. Diese zusätzliche Kraft bewirkt, dass das Material besser an der Bauplatte haftet. Darüber hinaus wird die dickere Schicht alle Unregelmäßigkeiten in der Ebenheit der Oberfläche beseitigen. Wenn die Bauplatte leicht gebogen ist, wird die Variabilität durch die Dicke der ersten Schicht absorbiert, da sonst die Düse beim Drucken der zweiten Schicht die erste Schicht abkratzen könnte.

### **Verwendung**
Die Anfangsschicht wird normalerweise dicker gedruckt als der Rest, um eine stärkere Haftung mit der Bauplatte zu erreichen. Mit dieser Einstellung kann die Dicke der Anfangsschicht erhöht werden, ohne die Auflösung des restlichen Drucks zu verringern.

Eine zu dicke Anfangsschicht führt dazu, dass die erste Schicht stärker durchhängt, was zu Elefantenfüßen führt. Die Einstellung [Anfängliche horizontale Ausdehnung der Ebene](../shell/xy_offset_layer_0.md) kann die Elefantenfüße verhindern, indem ein kleiner negativer Wert eingestellt wird.