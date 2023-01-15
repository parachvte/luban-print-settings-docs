Ruck drucken
====
### **Beschreibung**
Der Ruck bestimmt die Geschwindigkeit, mit der die Düse durch Ecken fahren kann.

**Ruck im 3D-Druck ist nicht gleich Ruck in der Physik.** Der Begriff „Ruck“ wurde von Marlin eingeführt. Es wurde dort als Workaround für das inhärente Problem entwickelt, einem Pfad perfekt zu folgen. Da die Düse (theoretisch) nicht vom Pfad abweichen darf, müsste die Düse in jeder Ecke auf 0 mm/s abbremsen. Dies würde Ihren Druck ruinieren, da eine Verzögerung auf 0 mm/s einen Klecks in jeder Ecke verursachen würde. Es ist nicht erlaubt, Kurven zu machen, um die Ecke abzukürzen, noch darf es überschießen. Stattdessen ermöglicht Marlin eine sofortige Änderung des Geschwindigkeitsvektors in jeder Kurve. Die Größe dieser Änderung des Geschwindigkeitsvektors wird als "Ruck" bezeichnet. Ruck ist also die maximale momentane Geschwindigkeitsänderung, die an jeder Ecke der Bewegung angewendet wird.

### **Einfluss**
Bei hohen Ruckwerten wird die Düse bei Annäherung an eine Ecke nicht so stark abgebremst, was zu einer konstanteren Geschwindigkeit, aber auch zu stärkeren Vibrationen führt.

Das Erhöhen des Rucks hat zwei positive Auswirkungen auf Ihren Druck:
* Die Druckzeit wird verkürzt, da die Düse in den Ecken weniger langsam wird.
* Da die Düse nicht zu einem Schleichen verlangsamt wird, werden Sie weniger Kleckse in den Ecken bekommen. Die Düse bewegt sich mit konstanterer Geschwindigkeit, sodass sie nicht in der Ecke verweilt, während das Material weiter aus der Öffnung fließt.

Die Erhöhung des Rucks hat auch zwei negative Auswirkungen:
* Der Drucker vibriert im Allgemeinen für jede Ecke stärker, da der Werkzeugkopf angewiesen wird, bei einer bestimmten Beschleunigung sofortige Richtungsänderungen vorzunehmen. Diese Vibrationen neigen dazu, Wellen in Ihrem Druck zu erzeugen, was zu Klingeln und verringerter Maßhaltigkeit führt.
* Bei extremen Werten verlieren Ihre Motoren wahrscheinlich einige Schritte in den Kurven, was zu einer Schichtverschiebung führen kann.