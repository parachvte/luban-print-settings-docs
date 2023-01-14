Stützen Sie die Dicke der Füllschicht
====
### **Beschreibung**
Da die visuelle Qualität und Auflösung des Trägers nicht wichtig ist, können Sie dickere Schichten für den Träger verwenden, um die Druckzeit zu verkürzen. Diese Einstellung konfiguriert, wie dick die Schichten sein werden, mit denen der Träger gedruckt wird.

In der Ebenenansicht sieht es so aus, als ob die Unterstützungslinien viel breiter geworden sind. Wenn sie tatsächlich gedruckt werden, fallen die Stützlinien weiter nach unten, anstatt sich horizontal auszubreiten.

![Die Dicke der Stützfüllungsschicht ist auf das Dreifache der Schichthöhe eingestellt](../images/support_infill_sparse_thickness.png)

### **Verwendung**
Die Dicke der Stützfüllschicht muss ein Vielfaches der normalen Schichthöhe sein. Andernfalls wird die Dicke der Stützfüllungsschicht auf die nächste Schichthöhe gerundet.

Diese Einstellung gilt nicht für das Dach oder den Boden der Stütze, sondern nur für die Hauptstruktur der Stütze.

Diese Einstellung ist besonders nützlich, wenn der Träger mit einem anderen Material als der Rest des Drucks bedruckt wird, und noch mehr, wenn dieses Material schwer zu extrudieren ist, wie z. B. PVA. Da der Träger nicht auf jeder Schicht extrudiert wird, muss der Drucker den Extruder nicht so oft wechseln, was viel Zeit spart. Da mehr Material auf gedruckte Schichten extrudiert wird, werden Materialien, die einige Zeit brauchen, um den Fluss zu starten, zuverlässiger gedruckt.

Seien Sie vorsichtig, wenn Sie diese zu stark erhöhen. Beim Umschalten auf und von der Unterstützung muss die Durchflussrate durch die Düse erheblich beschleunigt und verlangsamt werden. Es gibt eine gewisse Verzögerung bei der Beschleunigung und Verzögerung, sodass der Werkzeugkopf zu Beginn der Stützung zu wenig und nach dem Ende der Stützung zu viel extrudiert.