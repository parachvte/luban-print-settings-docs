Nozzle Switch Extra-Prime-Menge
====
### **Beschreibung**
Mit dieser Einstellung k�nnen Sie den Drucker so konfigurieren, dass jedes Mal, wenn der Extruder zur�ckgeschaltet wird, etwas zus�tzliches Material entfernt wird. Es soll den Druck an der D�se wiederherstellen, nachdem sie ausgetreten ist, w�hrend andere Extruder gedruckt haben, oder w�hrend eines Extruderwechsels.

### **Einfluss**
W�hrend andere Extruder drucken, hat dieser Extruder auf Standby gewartet. W�hrend dieser Zeit wird es jedoch Material sickern. Dieser Materialverlust kann durch etwas zus�tzliches Material kompensiert werden. Dadurch wird der Druck in der D�senkammer wieder hergestellt. Das herausgesickerte Material h�ngt jedoch immer noch unter der D�senspitze. Wenn also kein [Prime Tower] (prime_tower_enable.md) oder [Ooze Shield] (ooze_shield_enabled.md) verwendet wird, landet es auf der Seite Ihres Drucks .

### **Verwendung**
Diese Einstellung ist pro Extruder konfigurierbar. Die konfigurierte Materialmenge wird vor dem Bedrucken mit dem Material ausgesp�lt.