Retraktionen aktivieren
====
### **Beschreibung**
Wenn ein 3D-Drucker aufhört, Material zu drücken, hört das Material nicht sofort auf, aus dem Ende der Düse zu fließen. Das Restmaterial in der Düse quillt immer wieder heraus. Um das Fließen des Materials tatsächlich zu stoppen, muss der Drucker das Material von der Düsenöffnung nach hinten zurückziehen. Dies ist notwendig, um saubere Reisebewegungen ohne Besaitung auszuführen.

![Retraktionen deaktiviert](../images/retraction_enable_disabled.png)
![Rückzugsbewegungen werden heller blau dargestellt](../images/retraction_enable_enabled.png)

Nachdem Sie die Rückzüge aktiviert haben, zieht der Extruder Material zurück, während er Verfahrbewegungen ausführt, die besonders empfindlich auf Fadenziehen reagieren. Bei Fahrbewegungen, die nur durch Füllung oder von Stütze zu Stütze verlaufen, führt der Extruder kein Zurückziehen durch. Es gibt auch eine Grenze dafür, wie oft das Material zurückgezogen werden kann, durch die Einstellungen [Maximum Retraction Count](retraction_count_max.md) und [Minimum Extrusion Distance Window](retraction_extrusion_window.md).

Vorteile des Rückzugs
* Es wird das Stringing deutlich reduzieren.
* Es wird die Menge und Größe von Klecksen auf der Oberfläche, wo die Düse in den Umfang eines Teils eintritt, erheblich reduzieren.

Nachteile des Rückzugs
* Das Zurückziehen dauert etwas.
* Der Materialfluss wird bei einem Rückzug unterbrochen. Dies hat negative Folgen für die Maßhaltigkeit und kann zu Unterextrusion führen.
* Das Filament kann sich abnutzen, wenn zu viele Rückzüge erfolgen, wodurch verhindert wird, dass die Zuführung das Material greift.

### **Verwendung**
Flexible Materialien lassen sich schwerer zurückziehen, da durch Ziehen am Filament das Filament gedehnt wird, anstatt sich von der Düsenspitze nach hinten zurückzuziehen. Es kann sehr zeitaufwändig und relativ ineffektiv sein, das Zurückziehen mit solchen Materialien zu ermöglichen.