 Ooze Schild aktivieren
====
Ooze Shield ist eine einschichtige breite Wand um das Objekt herum, die beim Dual-Extruder-Drucken Ooze auffängt.

Während des Druckens mit zwei Extrudern kann der inaktive Extruder weiterhin Material austreten, wenn seine Düsentemperatur noch hoch ist. Wenn dieser Extruder dann wieder mit dem Drucken beginnt, kann der angesammelte Schlamm unter der Düse am Objekt haften bleiben, was zu einem unansehnlichen Druck führt. Das ist das Problem, das der Schleimschild verhindern soll.

Der Schlammschild wird mit dem Extruder gedruckt, der auf einer Schicht beginnt. Wenn dann der Extruderwechsel erfolgt, wischt der zurückgeschaltete Extruder seine Düse am Schlammschild ab. Auf diese Weise fällt das ausgetretene Material nicht auf die Modelloberfläche.

![Der Schlammschild wird mit dem ersten Extruder einer Schicht gedruckt, wodurch beim Drucken mit zwei Extrudern ein alternierendes Muster entsteht](../images/ooze_shield.png)
![Einige Parameter können für den Schleimschild angepasst werden](../images/ooze_shield.svg)

Der Schlammschild wird bis zur Höhe des höchsten Extruderschalters gedruckt. Oberhalb dieser Höhe wird nach dem Stand-by-Modus keine Düse in den Druck bewegt, sodass das Drucken eines Schlammschutzes unnötig ist.

Der Schleimschutz ist dünn genug, um leicht zu brechen oder zu schneiden, und hält Abstand zu Ihrem Modell, sodass er entfernt werden kann, ohne die Oberfläche zu verkratzen.