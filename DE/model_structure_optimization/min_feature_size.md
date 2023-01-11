Minimale Feature-Größe
====
Diese Einstellung steuert die Mindestbreite der zu druckenden Details des Modells. Alles, was dünner ist, wird nicht gedruckt.

Details, die kleiner als die Düsengröße sind, werden wahrscheinlich nicht gut gedruckt. Dies ist eine Einschränkung des Druckers. Cura kann jedoch immer noch versuchen, sie zu drucken, wobei akzeptiert wird, dass es keine schöne Extrusionsrate hat oder dass die Details dicker als modelliert werden.

Durch das Reduzieren der minimalen Feature-Größe druckt der Drucker kleinere Details des Drucks. Abhängig von
 [Mindestbreite dünner Wandlinien](min_bead_width.md), diese winzigen Details können gedruckt werden, indem sehr wenig extrudiert wird
(verursacht [Unterextrusion](../troubleshooting/underextrusion.md)), oder indem vernünftigere Linienbreiten extrudiert, aber überdimensioniert gedruckt werden. Wenn Sie diesen Wert auf 0 setzen, geht der Drucker bis ganz in die Spitzen jeder scharfen Ecke.

Durch Erhöhen der minimalen Feature-Größe kümmert sich der Drucker nicht mehr um kleine Details, die sowieso nicht gut herauskommen würden. Das spart etwas Zeit und könnte den Druck sauberer erscheinen lassen.