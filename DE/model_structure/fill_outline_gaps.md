Drucken Sie d�nne W�nde
====
### **Beschreibung**
Normalerweise verzichtet Luban auf d�nnere W�nde[Linienbreite der Au�enwand](../resolution/wall_line_width_0.md), verwerfen, da sie zu klein zum Drucken sind.

Wenn diese Einstellung aktiviert ist, versucht Luban trotzdem, diese Teile zu drucken. Der resultierende Druck wird ungenau und unsauber sein, aber er sollte die gew�nschte Form einigerma�en zuverl�ssig erzeugen.

![Einige Teile sind zu d�nn zum Drucken](../images/fill_outline_gaps_disabled.png)
![Wenn diese Einstellung aktiviert ist, werden sogar d�nne Teile gedruckt](../images/fill_outline_gaps_enabled.png)

### **Einfluss**
Die winzigen St�cke sind mit hauchd�nnen Linien gef�llt. Diese Linien werden dann zusammengefasst, wenn sie kurz und nebeneinander sind. Dies funktioniert in vielen F�llen, aber in einigen F�llen erzeugt es einen winzigen Zickzack, wodurch die Druckzeit erheblich verl�ngert wird.

Bevor Sie auf diese Einstellung zur�ckgreifen, sollten Sie versuchen, die Breite der Au�enwandlinie leicht anzupassen. Wenn Ihr Teil etwas d�nner als eine Linienbreite ist, erhalten Sie m�glicherweise ein besseres Ergebnis, wenn Sie die Linienbreite der Au�enwand Ihres gesamten Drucks so reduzieren, dass die d�nnen Teile normal gedruckt werden. Eine zu starke Verringerung der Linienbreite f�hrt jedoch dazu, dass das Material unzuverl�ssig flie�t, was zu einer Unterextrusion f�hrt.

Dadurch wird nur versucht, Teile zu drucken, die in der horizontalen Ebene d�nn sind. F�r d�nne Teile in Z-Richtung siehe die[Slicing-Toleranz](../experimental/slicing_tolerance.md) Ebenenh�he einstellen oder erh�hen.