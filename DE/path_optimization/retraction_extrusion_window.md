Fenster „Minimaler Extrusionsabstand“.
====
### **Beschreibung**
Das Zuführungsrad muss in das Filament greifen, um es richtig zu bewegen. Das Zurückziehen des Materials führt häufig dazu, dass das Zuführrad das Filament bis zu dem Punkt abnutzt, an dem es das Filament nicht mehr richtig greifen kann. Diese Einstellung begrenzt die Anzahl der Rückzüge innerhalb einer bestimmten Filamentlänge, um dieses Schleifen zu verhindern.

Die Rückzüge werden durch die Kombination aus [Maximum Retraction Count](retraction_count_max.md) und dieser Einstellung begrenzt. Das Material darf nicht um mehr als den Wert der maximalen Rückzugszahl innerhalb einer Filamentlänge zurückgezogen werden, die durch diese Einstellung des Fensters für die minimale Extrusionsdistanz angegeben wird.

![Eine bestimmte Filamentlänge, entlang der die Anzahl der Rückzüge begrenzt ist](../images/retraction_count_max.svg)

Die Filamentlänge, während der die Anzahl der Rückzüge begrenzt ist, ist ein Gleitfenster. Bei einer Fensterlänge von 3 mm und einer maximalen Rückzugszahl von 10 bedeutet dies beispielsweise, dass nicht mehr als 10 Rückzüge innerhalb von 3 mm Filament durchgeführt werden können.

### **Verwendung**
Das Erhöhen der Länge des Extrusionsfensters verringert das Schleifen auf dem Filament. Dies macht den Druck zuverlässiger, erhöht jedoch die Menge an Fäden und Klecksen auf der Oberfläche. Dies ist besonders nützlich für weichere Materialien, die empfindlicher auf Schleifen reagieren.