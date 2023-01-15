Unterstützungsplatzierung
====
### **Beschreibung**
Mit dieser Einstellung können Sie auswählen, wo die Unterstützung platziert werden kann.

![Support wird für alle überhängenden Flächen generiert](../images/support_type_everywhere.png)
![Unterstützung wird nur dort erzeugt, wo sie auf der Bauplatte aufliegen kann](../images/support_type_touching_buildplate.png)

### **Einfluss**
Unterstützung überall zu platzieren ist zuverlässiger für die Unterstützung. Alle Überhänge, die durchhängen würden, werden ordnungsgemäß unterstützt. Die Stütze kann jedoch auch auf dem Modell aufliegen und dort, wo sie sich berührt, eine Narbe hinterlassen. Dies verringert die visuelle Qualität und die Glätte der Modelloberfläche nach dem Entfernen des Supports.

Wenn Sie die Stütze stattdessen nur auf der Bauplatte platzieren, wird verhindert, dass die Stütze auf dem Modell ruht. Dies kann jedoch dazu führen, dass einige Teile Ihres Modells nicht unterstützt werden.

### **Verwendung**
Als Trick, wenn Sie die Stütze nur auf der Bauplatte verwenden, versuchen Sie [Konische Stütze zu aktivieren](../experimental/support_conical_enabled.md) und geben Sie dem [Konischen Stützwinkel](../experimental/support_conical_angle.md) einen negativen Wert. Dadurch kann die Stütze um das Modell wachsen und dennoch den größten Teil des Netzes stützen, ohne auf dem Modell zu ruhen. Versuchen Sie alternativ die Baumunterstützung.