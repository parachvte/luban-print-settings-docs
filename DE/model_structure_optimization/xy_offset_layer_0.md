Horizontale Expansion der ersten Schicht
====
### **Beschreibung**
Diese Einstellung erweitert nur die erste Schicht, die auf der Bauplatte (oder auf dem Raft) ruht. �hnlich wie bei [Horizontal Expansion](xy_offset.md) macht ein positiver Wert die Anfangsebene breiter, w�hrend ein negativer Wert die Anfangsebene verkleinert.

![Das Originalmodell](../images/xy_offset_layer_0_original.png)
![Die Anfangsebene wird verkleinert](../images/xy_offset_layer_0_enabled.png)

### **Verwendung**
Die Anfangsschicht wird oft auf eine erhitzte Bauplatte gedruckt, die sie in einem leicht fl�ssigen Zustand h�lt, um die Haftung auf der Bauplatte zu verbessern. Die Anfangsschicht ist normalerweise auch viel dicker als die restlichen Schichten. Dies l�sst gen�gend Zeit und Material, um die Schicht seitlich durchh�ngen zu lassen, wodurch ein Ph�nomen namens "Elefantenfu�" entsteht, bei dem die Unterseite des Drucks eine etwas breitere Lippe hat. Diese Einstellung kann den Elefantenfu� kompensieren, indem die erste Schicht im Voraus schlanker gemacht wird. Sie k�nnen ihn auf einen negativen Wert setzen, um eine kleinere Anfangsebene zu erhalten.

Sie k�nnen dieser Einstellung auch einen gro�en positiven Wert geben, um einen Pseudo-Rand um Ihren Druck zu erzeugen, der mit anderen Klebetechniken wie dem Flo� kombiniert werden kann.

Die Kombination dieser Einstellung mit einer Krempe ist unwirksam, da die Krempe sowieso einen gro�en Rand um die anf�ngliche Schicht erzeugt.