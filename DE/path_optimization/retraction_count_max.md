Maximale Rückzugszahl
====
### **Beschreibung**
Das Zuführungsrad muss in das Filament greifen, um es richtig zu bewegen. Das Zurückziehen des Materials führt häufig dazu, dass das Zuführrad das Filament bis zu dem Punkt abnutzt, an dem es das Filament nicht mehr richtig greifen kann. Diese Einstellung begrenzt die Anzahl der Rückzüge innerhalb einer bestimmten Filamentlänge, um dieses Schleifen zu verhindern.

Die Einstellung gibt an, wie oft das Filament während der durch die Einstellung [Minimum Extrusion Distance Window](retraction_extrusion_window.md) angegebenen Filamentlänge zurückgezogen werden darf. Alle weiteren Rückzüge während dieses Fensters werden nicht zurückgezogen, sondern fahren einfach ohne Rückzug.

![Visualisierung von Rückzügen während einer bestimmten Filamentlänge](../images/retraction_count_max.svg)

Die Filamentlänge, während der die Anzahl der Rückzüge begrenzt ist, ist ein Gleitfenster. Bei einer Fensterlänge von 3 mm und einer maximalen Rückzugszahl von 10 bedeutet dies beispielsweise, dass nicht mehr als 10 Rückzüge innerhalb von 3 mm Filament durchgeführt werden können.

### **Verwendung**
Das Reduzieren der maximalen Rückzugszahl reduziert das Schleifen auf dem Filament. Dies ist nützlich für weichere Materialien wie PVA. Allerdings erhöht es auch die Besaitung, da es in manchen notwendigen Positionen eventuell nicht mehr einfährt.