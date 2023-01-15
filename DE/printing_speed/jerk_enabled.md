Ruckkontrolle aktivieren
====
Der Ruck bestimmt die Geschwindigkeit, mit der die Düse durch Ecken fahren kann. Wenn die Rucksteuerung aktiviert ist, steuert Luban, wie viel Ruck während verschiedener Teile des Drucks angewendet wird. Wenn es deaktiviert ist, wählt die Druckerfirmware einen Ruckwert.

![Die Beziehung zwischen Geschwindigkeit, Beschleunigung und Ruck](../images/velocity_acceleration_jerk.svg)

**Ruck im 3D-Druck ist nicht gleich Ruck in der Physik.** Der Begriff „Ruck“ wurde von Marlin eingeführt. Es wurde dort als Workaround für das inhärente Problem entwickelt, einem Pfad perfekt zu folgen. Da die Düse (theoretisch) nicht vom Pfad abweichen darf, müsste die Düse in jeder Ecke auf 0 mm/s abbremsen. Dies würde Ihren Druck ruinieren, da eine Verzögerung auf 0 mm/s einen Klecks in jeder Ecke verursachen würde. Es ist nicht erlaubt, Kurven zu machen, um die Ecke abzukürzen, noch darf es überschießen. Stattdessen ermöglicht Marlin eine sofortige Änderung des Geschwindigkeitsvektors in jeder Kurve. Die Größe dieser Änderung des Geschwindigkeitsvektors wird als "Ruck" bezeichnet.

Ruck ist also die maximale momentane Geschwindigkeitsänderung, die an jeder Ecke der Bewegung angewendet wird.