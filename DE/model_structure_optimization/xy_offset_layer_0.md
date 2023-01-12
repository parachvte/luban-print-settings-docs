Horizontale Expansion der ersten Schicht
====
### **Beschreibung**
Diese Einstellung erweitert nur die erste Schicht, die auf der Bauplatte (oder auf dem Raft) ruht. Ähnlich wie bei [Horizontal Expansion](xy_offset.md) macht ein positiver Wert die Anfangsebene breiter, während ein negativer Wert die Anfangsebene verkleinert.

![Das Originalmodell](../images/xy_offset_layer_0_original.png)
![Die Anfangsebene wird verkleinert](../images/xy_offset_layer_0_enabled.png)

### **Verwendung**
Die Anfangsschicht wird oft auf eine erhitzte Bauplatte gedruckt, die sie in einem leicht flüssigen Zustand hält, um die Haftung auf der Bauplatte zu verbessern. Die Anfangsschicht ist normalerweise auch viel dicker als die restlichen Schichten. Dies lässt genügend Zeit und Material, um die Schicht seitlich durchhängen zu lassen, wodurch ein Phänomen namens "Elefantenfuß" entsteht, bei dem die Unterseite des Drucks eine etwas breitere Lippe hat. Diese Einstellung kann den Elefantenfuß kompensieren, indem die erste Schicht im Voraus schlanker gemacht wird. Sie können ihn auf einen negativen Wert setzen, um eine kleinere Anfangsebene zu erhalten.

Sie können dieser Einstellung auch einen großen positiven Wert geben, um einen Pseudo-Rand um Ihren Druck zu erzeugen, der mit anderen Klebetechniken wie dem Floß kombiniert werden kann.

Die Kombination dieser Einstellung mit einer Krempe ist unwirksam, da die Krempe sowieso einen großen Rand um die anfängliche Schicht erzeugt.