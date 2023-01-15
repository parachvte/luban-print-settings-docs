Kämmmodus
====
### **Beschreibung**
Beim Kämmen wird vermieden, die Wände des Drucks zu überqueren, wenn man von einem Ort zum anderen reist. Das Überqueren der Wände neigt dazu, eine Narbe auf der Oberfläche zu hinterlassen, wo eine heiße Düse aus dem Druckvolumen ausgetreten oder in das Druckvolumen eingetreten ist, so dass dies im Allgemeinen unerwünscht ist.

Das Kämmen allein bewirkt lediglich, dass die Düse den Wänden ausweicht, wenn sie durch das Innere des Siebs läuft. Sie können auch die Funktion [Gedruckte Teile während der Fahrt vermeiden](travel_avoid_other_parts.md) aktivieren, wodurch die Düse auch außerhalb des Volumens Objekte vermeidet.

![Kämmen deaktiviert, die Reisebewegung überquert die Wände des Drucks](../images/retraction_combing_off.png)
![Kämmen aktiviert, es wird ein Umweg gemacht, um das Überqueren der Wände zu vermeiden](../images/retraction_combing_on.png)

Wenn es einen Pfad durch das Objekt von der Start- zur Endposition gibt, ohne auf Wände zu stoßen, wird dieser Pfad ohne Rückzug genommen. Wenn sich die Start- und Endposition auf vollständig getrennten Pfaden befinden, bewegt sich die Düse zuerst zu der Position, an der die beiden Teile am nächsten beieinander liegen, fährt dann optional zurück (wenn [Rückzüge aktiviert sind] (retraction_enable.md)) und fährt zum Zielpfad , heben Sie optional den Rückzug auf und bewegen Sie sich dann durch den neuen Teil zu seinem endgültigen Ziel. In beiden Teilen wird es vermeiden, die Wände zu treffen, während es durch das Innere fährt. Beim Reisen von Teil zu Teil werden nur Teile vermieden, wenn die Einstellung [Bedruckte Teile während der Fahrt vermeiden] (travel_avoid_other_parts.md) aktiviert ist.

Das Ziel des Kämmens besteht darin, das Durchdringen der Wände des Objekts zu vermeiden und die Anzahl der Narben auf der Oberfläche zu verringern. Es wird auch das außen sichtbare Besaiten reduzieren, da es während der Reisebewegung immer noch sickert, aber dieses Schlamm wird auf der Innenseite des Modells platziert. Das Kämmen erhöht jedoch auch die Länge der Reisebewegung. Manchmal muss es einen großen Umweg machen.

Es gibt vier Optionen in der Dropdown-Liste für diese Einstellung:
* **Aus**: Kämmen ist deaktiviert. Reisebewegungen gehen immer direkt zu ihrem Zielort. Wenn dies zufällig keine Wände trifft, wird es nicht eingefahren.
* **Alle**: Die Düse trifft keine Wände, während sie durch das Innere des Drucks fährt, wie oben beschrieben.
* **Nicht in der Haut**: Die Düse vermeidet nach Möglichkeit auch den Kontakt mit der Haut. Dies kann die Narbenbildung auf der Oberseite des Drucks verringern, indem die Düse entlang der Wände geführt wird, anstatt durch die Haut zu schneiden. In einigen Fällen kann die Düse jedoch nicht entweichen und muss sich zurückziehen, wo sie sonst die Haut durchtrennt hätte.
* **Within Infill**: Der strengste Modus von allen, dieser erlaubt nur das Durchkämmen der Füllung. Dadurch wird ein Auftreffen auf die Innenwände sowie auf die Außenwände und auch ein Auftreffen auf die Haut vermieden. Trifft die Düse auf die Innenwände, ist sie manchmal noch außen sichtbar, da der Außenradius der Düse breiter sein kann als die Wände. Dies verhindert diesen Effekt. Es muss jedoch noch mehr Rückzüge machen, da häufig kein Pfad verfügbar ist.