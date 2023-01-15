Schürzen-/Randbeschleunigung
====
### **Beschreibung**
Diese Einstellung steuert, wie schnell die Düse beim Drucken der Schürze oder des Randes in verschiedene Richtungen beschleunigt.

### **Einfluss**
Der Rand ist entscheidend für die Adhäsion des Betts, daher kann eine Reduzierung der Beschleunigungsraten während des Druckens des Rands Vibrationen reduzieren, während der Rand gedruckt wird, und dann die Haftung des Rands an der Bauplatte verbessern, wodurch die Wirksamkeit des Rands geringfügig erhöht wird Druckzeit kostet.

Die Auswirkung der Beschleunigung auf die Krempe und den Rock ist normalerweise jedoch äußerst gering, da die Krempe und der Rock aus Linien mit sanften Kurven bestehen. Die Beschleunigung wird oft komplett von der Einstellung [Skirt/Brim Jerk](jerk_skirt_brim.md) übernommen.

### **Verwendung**
Die Beschleunigung während des Rocks oder der Krempe kann auf eine andere Geschwindigkeit als der Rest des Drucks eingestellt werden. Obwohl Rock und Krempe immer exklusiv für die Anfangsebene sind, überschreibt diese Einstellung die Einstellung [Druckbeschleunigung der Anfangsebene](acceleration_print_layer_0.md). Die Krempe oder Schürze wird mit der Beschleunigung gedruckt, die mit dieser Einstellung bestimmt wird, nicht mit der Einstellung für die Anfangsschicht im Allgemeinen.