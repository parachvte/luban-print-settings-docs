Astwinkel der Baumstütze
====
### **Beschreibung**
Diese Einstellung bestimmt den maximalen Überhangwinkel, den die Äste der Baumstütze machen dürfen. Wenn der Winkel vergrößert wird, können die Äste horizontaler gedruckt werden, sodass sie weiter reichen. Durch Verringern des Astwinkels werden die Äste vertikaler.

![Ein Astwinkel von 20°](../images/support_tree_angle_20.png)
![Ein Astwinkel von 40°](../images/support_tree_angle_40.png)

### **Einfluss**
Wenn der Astwinkel der Baumstütze erhöht wird, können die Äste größere Überhangwinkel haben. Sie können weiter um Hindernisse herumreichen, sodass die Stütze häufiger auf der Bauplatte als auf dem Modell ruhen kann.

Die wichtigsten Auswirkungen der Erhöhung des Astwinkels für die Baumstütze sind:
* Reduzierte Narbenbildung. Weniger Unterstützung muss auf dem Modell ruhen. Wenn [Support Placement](../support/support_type.md) auf Touching Buildplate eingestellt ist, kann mehr vom Modell unterstützt werden.
* Reduzierte Druckzeit und Materialverbrauch. In höheren Lagen können sich die Äste abspalten. Die Äste werden gerade noch rechtzeitig abgespalten, um den gesamten Überhang erreichen zu können.
* Reduzierte Zuverlässigkeit. Wenn der Überhangwinkel zu groß wird, wird die Stütze stark geschwächt, was die Wahrscheinlichkeit erhöht, dass die Stütze bricht oder umfällt.

### **Verwendung**
Große Verzweigungswinkel lassen sich am besten mit niedrigen Werten für die Einstellung [Tree Support Collision Resolution](support_tree_collision_resolution.md) kombinieren. Dies wird die Verschiebungen in den Positionen des Baums aufgrund der Kollisionsvermeidung reduzieren. Dadurch wird verhindert, dass der Überhangabstand zu groß wird, wenn der Kollisionsabstand angepasst wird.