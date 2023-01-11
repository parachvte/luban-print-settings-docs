Fülldichte
====
### **Beschreibung**
Diese Einstellung konfiguriert die Dichte des Volumens innerhalb des Drucks, was ein wichtiger Faktor für die Stärke des endgültigen Drucks sowie für die Oberflächenqualität ist. Je größer die Fülldichte, desto dichter werden die Fülllinien zusammengelegt. Sie können sogar über 100 % Dichte gehen, aber das führt zu einer Überextrusion.

![20% Dichte](../images/infill_sparse_density_high.png)
![10% Dichte](../images/infill_sparse_density_low.png)

### **Verwendung**
Für unterschiedliche Füllmuster müssen Sie möglicherweise unterschiedliche Dichten einstellen. Füllmuster mit vielen Ecken und Kreuzungen funktionieren bei großen Fülldichten nicht gut. Ecken sind ein Problem, da das Filament dazu neigt, mit der Ecke mitzuschleifen, wodurch Lufteinschlüsse an der Außenseite der Ecke entstehen, wo das Material hätte abgelegt werden sollen. Kreuzungen sind ein noch größeres Problem, denn wenn eine Linie eine andere kreuzt, wird der Linienfluss unterbrochen, was direkt nach der Kreuzung zu einer Unterextrusion führt.

Das Erhöhen der Fülldichte (durch Verringern des Linienabstands) hat einen großen Einfluss auf Ihren Druck, nämlich:
* Ihr Druck wird stärker.
* Die Oberfläche wird besser gestützt, glatter und wasserdichter.
* Der Polstereffekt wird reduziert, da die Wärmetaschen kleiner werden.
* Ihr Druck benötigt mehr Material und wird dadurch schwerer.
* Das Drucken dauert länger.