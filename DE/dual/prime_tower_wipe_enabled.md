Wischen Sie die inaktive Düse am Prime Tower ab
====
### **Beschreibung**
Wenn dieser Parameter aktiviert ist, wischt der Drucker die vorherige Düse ab, nachdem er die nächste im Prime Tower vorbereitet hat.

Die Reihenfolge der Ereignisse ist wie folgt, wenn dieser Parameter aktiviert ist:
1. Der Drucker wechselt zum neuen Extruder A.
2. Extruder A wird durch Drucken des Prime Tower vorbereitet.
3. Extruder B, der vor dem Umschalten aktiv war, wird auf dem Hauptturm gelöscht.
4. Der Drucker druckt das Modell kontinuierlich mit Extruder A.

### **Einfluss**
Wenn diese Einstellung aktiviert ist, wischt ein Extruder seine Düse direkt nach dem Ausschalten ab.

Diese Einstellung ermöglicht es, dass der herausgetropfte Schlamm in der Mitte des Prime Towers abgewischt wird, sodass er nicht auf der Seite Ihres gedruckten Modells landet.