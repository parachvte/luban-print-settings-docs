Bodenfluss unterstützen
====
### **Beschreibung**
Diese Einstellung passt die Durchflussrate für den Stützboden an.

### **Verwendung**
Die Durchflussmenge für den Stützboden kann getrennt von der Durchflussmenge der restlichen Stütze eingestellt werden.

Das Anpassen der Durchflussrate während des Support-Bodens ist eine Stop-Gap-Methode, um Probleme mit der Extrusionsrate oder der Haftung zwischen dem Modell und dem Support zu beheben. Derselbe Effekt kann durch Anpassen der [Linienbreite](../resolution/support_bottom_line_width.md) oder des [Linienabstands](../support/support_bottom_line_distance.md) des Stützbodens erzielt werden, aber möglicherweise durch Anpassen der Durchflussrate intuitiver.

Wenn es ein Problem mit der Extrusionsrate gibt, ist es besser, sich das anzusehen [Druckgeschwindigkeiten](../speed/speed_support_bottom.md), [Temperatur](material_print_temperature.md) und [linienbreite](../resolution/support_bottom_line_width.md). Möglicherweise besteht ein zu großer Unterschied zwischen der Strömungsgeschwindigkeit des Stützbodens und den anderen Strukturen auf der Schicht. Möglicherweise ist die Linienbreite zu dünn, um richtig zu extrudieren. 

Wenn die Schnittstelle mit a bedruckt ist [unterschiedliches Material](../support/support_interface_extruder_nr.md), Ein häufiges Problem ist, dass das Material, mit dem die Schnittstelle bedruckt ist, nicht genug Zeit bekommt, um richtig zu fließen. Dies kann mit a behoben werden [prime tower](../dual/prime_tower_enable.md) oder Erhöhung der [Bereich des Stützbodens](../support/support_bottom_offset.md).


