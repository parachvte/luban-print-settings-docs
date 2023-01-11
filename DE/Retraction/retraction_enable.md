Retraktionen aktivieren
====
### **Beschreibung**
Wenn ein 3D-Drucker aufh�rt, Material zu dr�cken, h�rt das Material nicht sofort auf, aus dem Ende der D�se zu flie�en. Das Restmaterial in der D�se quillt immer wieder heraus. Um das Flie�en des Materials tats�chlich zu stoppen, muss der Drucker das Material von der D�sen�ffnung nach hinten zur�ckziehen. Dies ist notwendig, um saubere Reisebewegungen ohne Besaitung auszuf�hren.

![Retraktionen deaktiviert](../images/retraction_enable_disabled.png)
![R�ckzugsbewegungen werden heller blau dargestellt](../images/retraction_enable_enabled.png)

Nachdem Sie die R�ckz�ge aktiviert haben, zieht der Extruder Material zur�ck, w�hrend er Verfahrbewegungen ausf�hrt, die besonders empfindlich auf Fadenziehen reagieren. Bei Fahrbewegungen, die nur durch F�llung oder von St�tze zu St�tze verlaufen, f�hrt der Extruder kein Zur�ckziehen durch. Es gibt auch eine Grenze daf�r, wie oft das Material zur�ckgezogen werden kann, durch die Einstellungen [Maximum Retraction Count](retraction_count_max.md) und [Minimum Extrusion Distance Window](retraction_extrusion_window.md).

Vorteile des R�ckzugs
* Es wird das Stringing deutlich reduzieren.
* Es wird die Menge und Gr��e von Klecksen auf der Oberfl�che, wo die D�se in den Umfang eines Teils eintritt, erheblich reduzieren.

Nachteile des R�ckzugs
* Das Zur�ckziehen dauert etwas.
* Der Materialfluss wird bei einem R�ckzug unterbrochen. Dies hat negative Folgen f�r die Ma�haltigkeit und kann zu Unterextrusion f�hren.
* Das Filament kann sich abnutzen, wenn zu viele R�ckz�ge erfolgen, wodurch verhindert wird, dass die Zuf�hrung das Material greift.

### **Verwendung**
Flexible Materialien lassen sich schwerer zur�ckziehen, da durch Ziehen am Filament das Filament gedehnt wird, anstatt sich von der D�senspitze nach hinten zur�ckzuziehen. Es kann sehr zeitaufw�ndig und relativ ineffektiv sein, das Zur�ckziehen mit solchen Materialien zu erm�glichen.