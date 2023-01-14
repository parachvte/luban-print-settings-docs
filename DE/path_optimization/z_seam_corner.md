Nahtecke-Präferenz
====
### **Beschreibung**
Mit dieser Einstellung können Sie steuern, wie die Nähte relativ zu den Ecken in Ihrem Modell positioniert werden.

Im Allgemeinen gibt es zwei Möglichkeiten, wo die Naht platziert werden kann: versteckt in einer Innenecke oder sichtbar in einer Außenecke. Das Verstecken der Naht in einer Innenecke ist im Allgemeinen vorzuziehen, da die Naht dort kaum sichtbar ist. Es ist aber auch möglich, es an einer Außenecke anzubringen, damit Sie die Naht mit einem Messer abschneiden oder mit etwas Schleifpapier glatt schleifen können, wenn das Teil etwas nachbearbeitet werden kann.

### **Verwendung**
Für diese Einstellung stehen folgende Optionen zur Verfügung:
* **Keine:** Ecken werden überhaupt nicht bevorzugt. Die Naht wird so gewählt, dass sie den Anforderungen für [Z-Nahtausrichtung](z_seam_type.md) am besten entspricht.
* **Naht verbergen:** Dadurch wird die Naht vorzugsweise in einer Innenecke versteckt. Wenn die Z-Naht-Ausrichtung auf "Schärfste Ecke" eingestellt ist, wird immer die innerste Ecke gewählt. Wenn die Z-Naht-Ausrichtung auf „Kürzeste“ eingestellt ist, wird eine Innenecke in der Nähe der Position ausgewählt, an der die Düse die vorherige Ebene beendet.
* ** Naht freilegen: ** Dadurch wird die Naht vorzugsweise an einer Außenecke freigelegt. Wenn die Z-Naht-Ausrichtung auf "Schärfste Ecke" eingestellt ist, wird immer die allerschärfste äußere Ecke gewählt. Wenn es auf "Kürzeste" eingestellt ist, wird es eine äußere Ecke in der Nähe der Position wählen, an der die Düse die vorherige Ebene beendet.
* **Naht verbergen oder freilegen:** Dadurch wird eine Naht an einer scharfen Ecke platziert, sei es eine Innenecke oder eine Außenecke, solange sie sich nicht an einer flachen Wand befindet.
* **Smart Hiding:** Dadurch wird die Naht an einer scharfen Ecke platziert, genau wie bei "Naht verbergen oder freilegen", aber Innenecken sind Außenecken vorzuziehen, wenn Innenecken in der Kontur verfügbar sind. Wenn es keine Innenecken gibt, wird eine Außenecke gewählt.