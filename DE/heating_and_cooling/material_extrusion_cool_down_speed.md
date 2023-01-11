Extrusion Cool Down Speed Modifier
====
Wenn das Material in der Düsenkammer erhitzt wird, entzieht es der Düse Wärme. Das schnellere Extrudieren von Material führt dazu, dass der Düse mehr Wärme entzogen wird. Wenn sich der Temperaturfühler nicht genau an der Spitze der Düse befindet, führt dies dazu, dass die Düse beim Extrudieren von Material eine etwas niedrigere Temperatur hat als im Leerlauf. Diese Einstellung beschreibt, wie schnell die Wärme beim Drucken in der Düse verloren geht.

Wenn [Auto Temperatur](../experimental/material_flow_dependent_temperature.md) aktiviert ist, wird die Drucktemperatur angepasst, je nachdem, wie schnell die Wärme verloren geht. Der zusätzliche Wärmeverlust durch das Extrudieren wird dann durch Erhöhen der gewünschten Drucktemperatur aus dem G-Code kompensiert.

Der Wert der Einstellung hängt vom Düsendesign, der Wärmekapazität des bedruckten Materials und der Extrusionsgeschwindigkeit ab.