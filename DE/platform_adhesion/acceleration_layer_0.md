Beschleunigung der anfänglichen Ebene
====
### **Beschreibung**
Diese Einstellung steuert, wie schnell die Düse beim Drucken der ersten Schicht in verschiedene Richtungen beschleunigt. Die Beschleunigung während der ersten Schicht kann auf eine andere Rate eingestellt werden als der Rest des Drucks.

### **Einfluss**
Drucken mit hoher Beschleunigung kann zu Vibrationen des Druckers führen. Insbesondere diese Vibrationen können dazu führen, dass die Bauplatte nach oben und unten rüttelt, was der Haftung des Drucks auf der Bauplatte abträglich ist.

Die Reduzierung der Beschleunigung für die erste Schicht kann Vibrationen während dieses kritischen Teils des Druckprozesses reduzieren. Das Drucken dauert jedoch länger, und eine zu starke Reduzierung der Beschleunigungsraten kann zu einer ungleichmäßigen Extrusion in den Ecken führen, was sich auch nachteilig auf die Haftung der Druckplatte auswirkt.

### **Verwendung**
Während die Wände, die Plattformhaftung, die Böden, die Stütze und die Füllung alle unterschiedliche Beschleunigungsraten haben können, werden sie während der ersten Schicht gleich gemacht. Die Beschleunigungsrate der anfänglichen Schicht überschreibt die Beschleunigungsraten der einzelnen Strukturen. Die Bewegungsbewegungen können immer noch eine andere Beschleunigungsrate haben als die Extrusionsbewegungen durch die Einstellungen [Initial Layer Travel Acceleration](acceleration_travel_layer_0.md) und [Initial Layer Print Acceleration](acceleration_print_layer_0.md). Die Einstellung [Skirt/Brim Acceleration](acceleration_skirt_brim.md) überschreibt auch die anfängliche Druckbeschleunigung der Ebene.