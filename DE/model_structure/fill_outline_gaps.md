Drucken Sie dünne Wände
====
### **Beschreibung**
Normalerweise verzichtet Luban auf dünnere Wände[Linienbreite der Außenwand](../resolution/wall_line_width_0.md), verwerfen, da sie zu klein zum Drucken sind.

Wenn diese Einstellung aktiviert ist, versucht Luban trotzdem, diese Teile zu drucken. Der resultierende Druck wird ungenau und unsauber sein, aber er sollte die gewünschte Form einigermaßen zuverlässig erzeugen.

![Einige Teile sind zu dünn zum Drucken](../images/fill_outline_gaps_disabled.png)
![Wenn diese Einstellung aktiviert ist, werden sogar dünne Teile gedruckt](../images/fill_outline_gaps_enabled.png)

### **Einfluss**
Die winzigen Stücke sind mit hauchdünnen Linien gefüllt. Diese Linien werden dann zusammengefasst, wenn sie kurz und nebeneinander sind. Dies funktioniert in vielen Fällen, aber in einigen Fällen erzeugt es einen winzigen Zickzack, wodurch die Druckzeit erheblich verlängert wird.

Bevor Sie auf diese Einstellung zurückgreifen, sollten Sie versuchen, die Breite der Außenwandlinie leicht anzupassen. Wenn Ihr Teil etwas dünner als eine Linienbreite ist, erhalten Sie möglicherweise ein besseres Ergebnis, wenn Sie die Linienbreite der Außenwand Ihres gesamten Drucks so reduzieren, dass die dünnen Teile normal gedruckt werden. Eine zu starke Verringerung der Linienbreite führt jedoch dazu, dass das Material unzuverlässig fließt, was zu einer Unterextrusion führt.

Dadurch wird nur versucht, Teile zu drucken, die in der horizontalen Ebene dünn sind. Für dünne Teile in Z-Richtung siehe die[Slicing-Toleranz](../experimental/slicing_tolerance.md) Ebenenhöhe einstellen oder erhöhen.