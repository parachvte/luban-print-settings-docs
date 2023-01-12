Unterstützung des Dachflusses
====
### **Beschreibung**
Diese Einstellung passt die Durchflussmenge für das Stützdach an.

### **Verwendung**
Die Durchflussmenge für das Stützendach kann getrennt von der Durchflussmenge der restlichen Stütze eingestellt werden.

Das Anpassen der Durchflussrate während des Stützdachs ist eine Stop-Gap-Methode, um Probleme mit der Extrusionsrate oder der Haftung zwischen Modell und Stütze zu beheben. Der gleiche Effekt kann durch Einstellen des erreicht werden [Linienbreite](../resolution/support_roof_line_width.md) oder [line spacing](../support/support_roof_line_distance.md) des Stützdachs, aber das Einstellen der Durchflussrate kann intuitiver sein.

Wenn es ein Problem mit der Extrusionsrate gibt, ist es besser, sich das anzusehen [Druckgeschwindigkeiten](../speed/speed_support_roof.md), [temperatur](material_print_temperature.md) und [Linienbreite](../resolution/support_roof_line_width.md). Möglicherweise besteht ein zu großer Unterschied zwischen der Strömungsgeschwindigkeit des Stützdachs und den anderen Strukturen auf der Schicht. Möglicherweise ist die Linienbreite zu dünn, um richtig zu extrudieren.

Wenn die Schnittstelle mit a bedruckt ist [unterschiedliches Material](../support/support_interface_extruder_nr.md), Ein häufiges Problem ist, dass das Material, mit dem die Schnittstelle bedruckt ist, nicht genug Zeit bekommt, um richtig zu fließen. Dies kann mit A behoben werden [prime tower](../dual/prime_tower_enable.md) oder Erhöhung der [Bereich des Stützdaches](../support/support_roof_offset.md).

Wenn die Stütze zu gut am Modell haftet, justieren Sie die [Linienbreite](../resolution/support_roof_line_width.md) ist in der Regel effektiver, da es auch dazu führt, dass die Linien näher beieinander liegen, um die gleiche Fülldichte der Stütze zu erreichen.


