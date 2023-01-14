Druckruck der Anfangsschicht
====
### **Beschreibung**
Diese Einstellung bestimmt die Geschwindigkeit, mit der die Düse Ecken passieren kann, während die Anfangsschicht extrudiert wird. Sie kann während der Initialschicht getrennt von den Verfahrbewegungen konfiguriert werden.

### **Einfluss**
Durch Reduzieren des Rucks trägt der Drucker mehr Material in scharfen Ecken auf, da die Düse langsamer wird, während der Materialfluss etwas verzögert wird, wenn der Fluss reduziert wird. Diese scharfen Ecken sind oft dort, wo sich der Druck aufgrund von Verwerfungen zuerst von der Bauplatte löst. Es ist dann vorteilhaft, etwas zusätzliches Material in diese Ecken zu legen, da die Ecken dadurch besser haften.

Dieser Effekt ist während der Verfahrbewegungen der Anfangsschicht nicht vorhanden. Aus diesem Grund ist der Ruck beim Extrudieren der ersten Schicht normalerweise etwas geringer als der Ruck beim Verschieben der ersten Schicht.

### **Verwendung**
Die einzelnen Strukturen des Drucks könnten alle unterschiedliche Ruckwerte haben. Es gibt separate Einstellungen für die Füllung, die Unterseite, die Außen- und Innenwände, die Stütze und den Hauptturm. Diese Einstellung überschreibt alle diese. Nur die Einstellung [Rock/Brim Jerk](jerk_skirt_brim.md) überschreibt diesen Ruck, da Rock und Krempe nur in der ersten Ebene vorkommen können.