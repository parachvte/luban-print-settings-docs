Vermeiden Sie bedruckte Teile auf Reisen
====
### **Beschreibung**
Durch Aktivieren dieser Einstellung versucht der Werkzeugkopf zu vermeiden, andere Objekte zu treffen, wenn er sich im Bauvolumen bewegt. Stattdessen wird es einen kleinen Umweg geben. Wenn eine Umleitung möglich ist, die keine anderen Objekte trifft, wird kein Rückzug ausgelöst, es sei denn, die Länge des Pfads überschreitet die Einstellung [Max. Kammabstand ohne Rückzug] (retraction_combing_max_distance.md).

![Wenn deaktiviert, können Reisebewegungen andere Teile durchqueren](../images/travel_avoid_other_parts_disabled.png)
![Wenn aktiviert, vermeiden Reisebewegungen andere Teile](../images/travel_avoid_other_parts_enabled.png)

Abgesehen davon, dass andere Teile vermieden werden, versuchen die Reisebewegungen auch, so kurz wie möglich in der Nähe der Wände zu bleiben. Dies bedeutet, dass es beim Verlassen oder Betreten eines Teils durch eine Wand senkrecht zur Wand austritt oder eintritt.

### **Verwendung**
Diese Einstellung verbessert tendenziell die Oberflächenqualität des Drucks, da die Düse die Wände nicht so oft durchdringt. Das Durchqueren der Wände hinterlässt eine Narbe in der Wand, die vermieden werden sollte.

Diese Einstellung erhöht jedoch das Auslaufen, da mehr Verfahrbewegungen ohne Einfahren ausgeführt werden und die Verfahrbewegungen länger sind. Bei Materialien, die stark sickern, kann es ratsam sein, die Vermeidung anderer Teile zu deaktivieren.

Die Druckzeit könnte etwas verlängert werden, weil die Verfahrbewegungen länger sind, aber normalerweise wird dies durch die Verringerung der Anzahl der Rückzüge, die dies verursacht, vollständig ausgeglichen.