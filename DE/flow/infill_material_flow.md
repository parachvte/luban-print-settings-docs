Füllfluss
====
### **Beschreibung**
Diese Einstellung passt die Durchflussrate für die Füllung an.


### **Verwendung**
Das Anpassen der Durchflussrate während des Füllens ist eine Stop-Gap-Methode, um Probleme mit der Extrusionsrate oder -stärke zu beheben. Der gleiche Effekt kann durch Einstellen des erreicht werden [Abstand zwischen den Linien](../infill/infill_line_distance.md) und [line width](../resolution/infill_line_width.md) der Füllung, aber diese Einstellung ist möglicherweise intuitiver.

Probleme mit der Extrusionsrate oder Festigkeit der Füllung werden hauptsächlich durch Kreuzungen im Füllungsmuster oder eine zu starke Änderung der Fließgeschwindigkeit zwischen der Füllung und anderen Strukturen verursacht. Anstatt diese Durchflussrate einzustellen, kann es effektiver sein, die einzustellen [Füllmuster](../infill/infill_pattern.md) oder der [Linienbreite](../resolution/infill_line_width.md). Wählen Sie ein Füllmuster, das sich nicht kreuzt, wie z. B. Zickzack. Wenn die Linienbreite aus Gründen der Festigkeit erhöht werden muss, aber die Durchflussrate begrenzt ist, ist es eine gute Idee, die zu verwenden [infill multiplier](../infill/infill_multiplier.md) anstatt den Durchfluss zu erhöhen.