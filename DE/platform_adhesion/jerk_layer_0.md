Ruck der ersten Schicht
====
### **Beschreibung**
Diese Einstellung bestimmt die Geschwindigkeit, mit der die Düse Ecken durchfahren kann, während die Anfangsschicht gedruckt wird. Sie kann separat von den übrigen Schichten konfiguriert werden.

### **Einfluss**
Das Durchfahren scharfer Kurven mit hoher Geschwindigkeit lässt den Werkzeugkopf nicht nur horizontal vibrieren. Es kann auch dazu führen, dass die Bauplatte vertikal vibriert. Dies wirkt sich negativ auf die Betthaftung aus. Etwas vorsichtiger durch die Ecken zu gehen während der ersten Schicht ermöglicht eine gleichmäßigere Betthaftung, dauert aber länger zum Drucken.

Darüber hinaus führt die Reduzierung des Rucks normalerweise dazu, dass der Drucker mehr Material in scharfen Ecken aufträgt, da die Düse langsamer wird, während der Materialfluss eine gewisse Verzögerung aufweist, wenn der Fluss reduziert wird. Diese scharfen Ecken sind oft dort, wo sich der Druck aufgrund von Verwerfungen zuerst von der Bauplatte löst. Es ist dann vorteilhaft, etwas zusätzliches Material in diese Ecken zu legen, da die Ecken dadurch besser haften.

### **Verwendung**
Die einzelnen Strukturen des Drucks könnten alle unterschiedliche Ruckwerte haben. Es gibt separate Einstellungen für die Füllung, die Unterseite, die Außen- und Innenwände, die Stütze und den Hauptturm. Diese Einstellung überschreibt alle diese. Nur die Einstellung [Rock/Brim Jerk](jerk_skirt_brim.md) überschreibt diesen Ruck, da Rock und Krempe nur in der ersten Ebene vorkommen können.