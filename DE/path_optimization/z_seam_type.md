Z-Naht-Ausrichtung
====
Mit dieser Einstellung können Sie auswählen, wo die Naht jeder Kontur platziert wird. Es stehen mehrere Optionen zur Verfügung, die eine große Kontrolle darüber geben, wo die Naht platziert wird, um ihre Auswirkungen zu minimieren oder es Ihnen zu ermöglichen, die Naht in der Nachbearbeitung leichter zu entfernen.

An der Naht beginnt und endet der Konturdruck in einer Schicht. Mit dieser Einstellung kann die Sichtbarkeit der Naht minimiert werden, indem sie irgendwo versteckt oder verteilt wird.

Benutzer angegeben
----
![Benutzer angegeben](../images/z_seam_type_user.png)

Mit dieser Option können Sie einen Standort manuell auswählen. Die Naht wird in der Ecke platziert, die der gewählten Stelle am nächsten liegt. Dadurch werden die Nähte normalerweise sehr eng aneinander ausgerichtet, sodass Sie sie leicht abschneiden können. Es ermöglicht auch eine feinkörnige Kontrolle darüber, wo die Naht sein sollte.

Standardmäßig wird eine Position auf der Rückseite des Druckers ausgewählt.

Kürzeste
----
![Kürzeste](../images/z_seam_type_shortest.png)

Diese Option minimiert die Länge der Bewegungsbewegungen, indem der Startpunkt am nächsten an der Position platziert wird, an der die Düse die vorherige Schicht beendet. Da der Fahrweg kürzer ist, sparen Sie ein wenig Zeit bei Fahrbewegungen. Die Naht wird auch etwas kleiner, da weniger Schlamm an der Stelle platziert wird, an der die Düse auf der Kontur landet.

Die gewünschte Eckenpräferenz wird immer noch beibehalten, indem eine Ecke in der Nähe der Düse ausgewählt wird. Es wird nicht die allernächste Ecke gewählt, aber es wird eine gewichtete Präferenz verwendet, um Bewegungsbewegungen etwas zu minimieren, aber auch eine geeignete Ecke für die Einstellung [Nahteckenpräferenz] (z_seam_corner.md) zu verwenden.

Willkürlich
----
![Zufall](../images/z_seam_type_random.png)

Für die Naht wird eine zufällige Stelle um den Umfang herum gewählt. Diese zufällige Position wird in jeder Schicht geändert, sodass die Naht ziemlich gleichmäßig um das Modell herum verteilt wird. Da die Nähte verschiedener Lagen nicht aneinander liegen, ist die Naht kaum sichtbar. Die Oberfläche wird jedoch insgesamt etwas unordentlicher aussehen.

Schärfste Ecke
----
![Schärfste Ecke](../images/z_seam_type_sharpest.png)

Die Naht wird in der schärfsten Ecke der gesamten Kontur platziert, entsprechend der Eckenpräferenz, die in der Einstellung [Nahteckenpräferenz] (z_seam_corner.md) ausgewählt wurde. Dies kann längere Fahrbewegungen erfordern, stellt jedoch sicher, dass die Naht entsprechend der für die Ecken eingestellten Voreinstellung maximal verdeckt oder freigelegt wird.