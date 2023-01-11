Minimale Feature-Gr��e
====
Diese Einstellung steuert die Mindestbreite der zu druckenden Details des Modells. Alles, was d�nner ist, wird nicht gedruckt.

Details, die kleiner als die D�sengr��e sind, werden wahrscheinlich nicht gut gedruckt. Dies ist eine Einschr�nkung des Druckers. Cura kann jedoch immer noch versuchen, sie zu drucken, wobei akzeptiert wird, dass es keine sch�ne Extrusionsrate hat oder dass die Details dicker als modelliert werden.

Durch das Reduzieren der minimalen Feature-Gr��e druckt der Drucker kleinere Details des Drucks. Abh�ngig von
 [Mindestbreite d�nner Wandlinien](min_bead_width.md), diese winzigen Details k�nnen gedruckt werden, indem sehr wenig extrudiert wird
(verursacht [Unterextrusion](../troubleshooting/underextrusion.md)), oder indem vern�nftigere Linienbreiten extrudiert, aber �berdimensioniert gedruckt werden. Wenn Sie diesen Wert auf 0 setzen, geht der Drucker bis ganz in die Spitzen jeder scharfen Ecke.

Durch Erh�hen der minimalen Feature-Gr��e k�mmert sich der Drucker nicht mehr um kleine Details, die sowieso nicht gut herauskommen w�rden. Das spart etwas Zeit und k�nnte den Druck sauberer erscheinen lassen.