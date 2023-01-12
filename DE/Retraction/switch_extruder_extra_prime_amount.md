Nozzle Switch Extra-Prime-Menge
====
### **Beschreibung**
Mit dieser Einstellung können Sie den Drucker so konfigurieren, dass jedes Mal, wenn der Extruder zurückgeschaltet wird, etwas zusätzliches Material entfernt wird. Es soll den Druck an der Düse wiederherstellen, nachdem sie ausgetreten ist, während andere Extruder gedruckt haben, oder während eines Extruderwechsels.

### **Einfluss**
Während andere Extruder drucken, hat dieser Extruder auf Standby gewartet. Während dieser Zeit wird es jedoch Material sickern. Dieser Materialverlust kann durch etwas zusätzliches Material kompensiert werden. Dadurch wird der Druck in der Düsenkammer wieder hergestellt. Das herausgesickerte Material hängt jedoch immer noch unter der Düsenspitze. Wenn also kein [Prime Tower] (prime_tower_enable.md) oder [Ooze Shield] (ooze_shield_enabled.md) verwendet wird, landet es auf der Seite Ihres Drucks .

### **Verwendung**
Diese Einstellung ist pro Extruder konfigurierbar. Die konfigurierte Materialmenge wird vor dem Bedrucken mit dem Material ausgespült.