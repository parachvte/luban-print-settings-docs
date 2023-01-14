Hilfstypen für duale Extrusion
====
Während des Druckens mit zwei Extrudern kann der inaktive Extruder weiterhin Material austreten, wenn seine Düsentemperatur noch hoch ist. Wenn dieser Extruder dann wieder mit dem Drucken beginnt, kann der angesammelte Schlamm unter der Düse am Objekt haften bleiben, was zu einem unansehnlichen Druck führt. Deshalb müssen wir duale Extrusionshelfer verwenden. Luban bietet Ihnen zwei Arten von dualen Extrusionshilfen, jede mit ihrer eigenen Funktion.

Prime Tower
----

Prime Tower, auch *Wipe Tower* genannt, ist ein zusätzlicher Druck, der separat auf der Bauplatte erstellt wird, um dem inaktiven Extruder zu helfen, ordnungsgemäß zurückzuschalten.

Tatsächlich verursacht Materialaustritt nicht nur ein unansehnliches Erscheinungsbild, sondern führt auch zu einer leeren Kammer, gefolgt von einem unsachgemäßen Fluss zu Beginn des Drucks. Durch Drucken des Prime Tower kann der Standby-Extruder jeglichen Schlamm von seiner Düse abwischen und seine Kammer für einen ordnungsgemäßen Materialfluss vorbereiten.

![Wie ein Prime Tower aussieht und welche Abmessungen er hat](../images/prime_tower.svg)

Der Hauptturm ist ein Hohlzylinder, der aus einer kontinuierlichen Außenhülle besteht, die von einem Extruder gedruckt wird, und einigen diskontinuierlichen Innenwänden, die von dem anderen Extruder gedruckt werden. Die kontinuierliche Außenhülle ist notwendig, um die Stabilität des Turms aufrechtzuerhalten, obwohl sie bei einigen Drucken zusätzliche Extruderwechsel verursachen kann. Die Innenwände werden nicht bedruckt, wenn kein Extruderschalter vorhanden ist.

Die Nachteile des Prime Towers sind, dass das Drucken etwas mehr Zeit in Anspruch nimmt und etwas Platz auf der Bauplatte einnimmt.

Ooze-Schild
----
Ooze Shield ist eine einschichtige breite Wand um das Objekt herum, die beim Dual-Extruder-Drucken Ooze auffängt. Der Schleimschutz ist dünn genug, um leicht zu brechen oder zu schneiden, und hält Abstand zu Ihrem Modell, sodass er entfernt werden kann, ohne die Oberfläche zu verkratzen.

Der Schlammschild wird mit dem Extruder gedruckt, der auf einer Schicht beginnt. Wenn dann der Extruderwechsel erfolgt, wischt der zurückgeschaltete Extruder seine Düse am Schlammschild ab. Auf diese Weise fällt das ausgetretene Material nicht auf die Modelloberfläche.

![Der Schlammschild wird mit dem ersten Extruder einer Schicht gedruckt, wodurch beim Drucken mit zwei Extrudern ein alternierendes Muster entsteht](../images/ooze_shield.png)
![Einige Parameter können für den Schleimschild angepasst werden](../images/ooze_shield.svg)

Der Schlammschild wird bis zur Höhe des höchsten Extruderschalters gedruckt. Oberhalb dieser Höhe wird nach dem Stand-by-Modus keine Düse in den Druck bewegt, sodass das Drucken eines Schlammschutzes unnötig ist.