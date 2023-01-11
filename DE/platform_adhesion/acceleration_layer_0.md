Beschleunigung der anf�nglichen Ebene
====
### **Beschreibung**
Diese Einstellung steuert, wie schnell die D�se beim Drucken der ersten Schicht in verschiedene Richtungen beschleunigt. Die Beschleunigung w�hrend der ersten Schicht kann auf eine andere Rate eingestellt werden als der Rest des Drucks.

### **Einfluss**
Drucken mit hoher Beschleunigung kann zu Vibrationen des Druckers f�hren. Insbesondere diese Vibrationen k�nnen dazu f�hren, dass die Bauplatte nach oben und unten r�ttelt, was der Haftung des Drucks auf der Bauplatte abtr�glich ist.

Die Reduzierung der Beschleunigung f�r die erste Schicht kann Vibrationen w�hrend dieses kritischen Teils des Druckprozesses reduzieren. Das Drucken dauert jedoch l�nger, und eine zu starke Reduzierung der Beschleunigungsraten kann zu einer ungleichm��igen Extrusion in den Ecken f�hren, was sich auch nachteilig auf die Haftung der Druckplatte auswirkt.

### **Verwendung**
W�hrend die W�nde, die Plattformhaftung, die B�den, die St�tze und die F�llung alle unterschiedliche Beschleunigungsraten haben k�nnen, werden sie w�hrend der ersten Schicht gleich gemacht. Die Beschleunigungsrate der anf�nglichen Schicht �berschreibt die Beschleunigungsraten der einzelnen Strukturen. Die Bewegungsbewegungen k�nnen immer noch eine andere Beschleunigungsrate haben als die Extrusionsbewegungen durch die Einstellungen [Initial Layer Travel Acceleration](acceleration_travel_layer_0.md) und [Initial Layer Print Acceleration](acceleration_print_layer_0.md). Die Einstellung [Skirt/Brim Acceleration](acceleration_skirt_brim.md) �berschreibt auch die anf�ngliche Druckbeschleunigung der Ebene.