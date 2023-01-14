Unterstützung der Richtung der Fülllinie
====
### **Beschreibung**
Das Stützmuster ist normalerweise so ausgerichtet, dass die Linien senkrecht zu den meisten Dingen stehen, die es stützt. Auf diese Weise wird der Abstand, den das unterstützte Material überbrücken muss, minimiert. Mit dieser Einstellung kann die Ausrichtung der Hilfslinien angepasst werden.

![Ein Winkel von 0°](../images/support_infill_angle_0.png)
![Wechsel zwischen 30° und 60°](../images/support_infill_angles.png)

Diese Einstellung ermöglicht die Eingabe mehrerer Winkel, getrennt durch Kommas. Wenn mehrere Winkel eingegeben werden, wechselt Luban zwischen diesen Winkeln über die Ebenen.

### **Verwendung**
Wenn die [Richtungen der oberen/unteren Linie] (skin_angles.md) für das Modell angepasst wurden, ist es ratsam, den Winkel des Trägers entsprechend anzupassen, sodass er immer noch rechtwinklig zu den Linien der Unterseite des Drucks ist. Dadurch können diese unteren Linien richtig auf der Unterstützung ruhen, anstatt zwischen die Unterstützungslinien zu fallen. Dies ist besonders wichtig für Linien und Zickzack-[Unterstützungsmuster](support_pattern.md), wo es lange Geraden zwischen den Unterstützungslinien gibt, die keine Unterstützung bieten.