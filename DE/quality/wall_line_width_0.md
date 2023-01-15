Wandlinienbreite
====
### **Beschreibung**
Diese Einstellung gibt an, wie breit die einzelnen Wandlinien sein werden. Die Linienstärke für die Wände kann separat vom Rest des Drucks eingestellt werden.

![Die Linien für die Wände sind viel breiter als der Rest](../images/wall_line_width.png)

### **Einfluss**
Das Reduzieren der Wände auf eine Linienbreite etwas unterhalb der Düsengröße ist vorteilhaft für die Festigkeit. Die Düse wird etwas weniger Material ausstoßen, aber ihre Öffnung wird sich mit den angrenzenden Wandlinien überlappen, was bewirkt, dass das Material von der zuvor platzierten Wand zur Seite an seine richtige Stelle gedrückt wird. Aber das bewirkt auch, dass der Kunststoff besser mit den angrenzenden Wänden verschmilzt, wodurch die Wände besser miteinander verschmelzen können, so dass sie ihre Stärke kombinieren können, wodurch die Stärke der Wände stark verbessert wird.

Das Reduzieren der Wandlinienbreite ermöglicht es der Düse auch, feinere Details zu drucken. Besonders die [Außenwandlinienbreite](wall_line_width_0.md) ist für diese Eigenschaft wichtig.

Das Erhöhen der Wandlinienbreite kann die Druckzeit verkürzen.

Linien passend machen
----
Beim Drucken dünner Teile ist das Anpassen der Wandlinienbreite ein wichtiges Werkzeug, um genaue und starke Teile zu erhalten. Luban zeichnet immer nur vollständige Konturen. Wenn also eine Kontur nicht in eine Lücke passt, fällt sie in die Wände, was die Festigkeit und Genauigkeit des Teils stark beeinträchtigt.

Luban wird versuchen, solche Lücken zwischen Wänden zu füllen, wenn [Lücken zwischen Wänden füllen](../shell/fill_perimeter_gaps.md) aktiviert ist, aber diese Technik ist für beliebige Formen nicht ideal und nimmt oft viel Druckzeit in Anspruch. Wenn sich zwei Wände überlappen, reduziert die Funktion [Wandüberlappungen kompensieren](../shell/travel_compensate_overlapping_walls_enabled.md) die Wandlinienbreite, um sicherzustellen, dass das Teil maßgenau ist, aber dies führt zu Flussänderungen, die die Qualität und Festigkeit von reduzieren auch der Aufdruck.

Für eine ideale Passform können Sie das Teil auf ein exaktes Vielfaches der Wandlinienbreite einstellen, sodass die Wände genau in das Teil passen. Wenn Sie wissen, wie breit Ihr Teil ist, können Sie dies leicht tun, indem Sie die Breite der Wände anpassen. Zuerst sehen Sie, wie viele Konturen Sie anpassen möchten, damit die Linien noch eine vernünftige Breite haben. Dann können Sie sehen, wie stark Sie die Wandlinienbreite anpassen müssen, damit die Linien richtig passen. Denken Sie daran, dass Sie die [Breite der äußeren Wandlinie](wall_line_width_0.md) und die [Breite der inneren Wandlinie](wall_line_width_x.md) separat anpassen können. Zählen Sie sorgfältig, wie oft jeder Wandtyp gezeichnet wird, um die Auswirkungen einer Änderung der Wandlinienbreite vorherzusagen.

Das Anpassen von Wandlinien ist eine wichtige Fähigkeit für den 3D-Druck, die erfahrene 3D-Drucker-Bediener von den anderen unterscheidet. Etwas Übung ist erforderlich.