F�lldichte
====
### **Beschreibung**
Diese Einstellung konfiguriert die Dichte des Volumens innerhalb des Drucks, was ein wichtiger Faktor f�r die St�rke des endg�ltigen Drucks sowie f�r die Oberfl�chenqualit�t ist. Je gr��er die F�lldichte, desto dichter werden die F�lllinien zusammengelegt. Sie k�nnen sogar �ber 100 % Dichte gehen, aber das f�hrt zu einer �berextrusion.

![20% Dichte](../images/infill_sparse_density_high.png)
![10% Dichte](../images/infill_sparse_density_low.png)

### **Verwendung**
F�r unterschiedliche F�llmuster m�ssen Sie m�glicherweise unterschiedliche Dichten einstellen. F�llmuster mit vielen Ecken und Kreuzungen funktionieren bei gro�en F�lldichten nicht gut. Ecken sind ein Problem, da das Filament dazu neigt, mit der Ecke mitzuschleifen, wodurch Lufteinschl�sse an der Au�enseite der Ecke entstehen, wo das Material h�tte abgelegt werden sollen. Kreuzungen sind ein noch gr��eres Problem, denn wenn eine Linie eine andere kreuzt, wird der Linienfluss unterbrochen, was direkt nach der Kreuzung zu einer Unterextrusion f�hrt.

Das Erh�hen der F�lldichte (durch Verringern des Linienabstands) hat einen gro�en Einfluss auf Ihren Druck, n�mlich:
* Ihr Druck wird st�rker.
* Die Oberfl�che wird besser gest�tzt, glatter und wasserdichter.
* Der Polstereffekt wird reduziert, da die W�rmetaschen kleiner werden.
* Ihr Druck ben�tigt mehr Material und wird dadurch schwerer.
* Das Drucken dauert l�nger.