Horizontale Ausdehnung des Lochs
====
Dies ist eine Kompensationsma�nahme f�r einen Druckeffekt, bei dem L�cher dazu neigen, kleiner als beabsichtigt gedruckt zu werden. Mit dieser Einstellung k�nnen Sie die Gr��e der L�cher in Ihrem Druck erweitern.

![Die L�cher wurden gr��er gemacht, aber der Rest der Form hat sich nicht ver�ndert](../images/hole_xy_offset.png)

Aufgrund der Viskosit�t des Materials neigt der Kunststoff beim Drucken einer Kurve dazu, von der D�se entlang der Kurve gezogen zu werden. Dadurch wird die Kurve etwas kleiner als beabsichtigt, da die Schnur in die Innenseite der Kurve gezogen wird. Normalerweise ist dies nicht wirklich sichtbar, aber wenn Sie Artikel drucken, die sehr pr�zise sein m�ssen, oder wenn Sie Artikel mit sehr kleinen vertikalen L�chern drucken, wird dies die Genauigkeit Ihres Drucks ruinieren. Schrauben passen nicht mehr, Teile gleiten nicht mehr sauber ineinander und so weiter.

Diese Einstellung kompensiert dies, indem alle L�cher etwas gr��er gemacht werden. Im Gegensatz zu [Horizontal Expansion](xy_offset.md) betrifft dies nur geschlossene L�cher. Wenn auf einer Seite (horizontal, auf derselben Ebene) auch nur eine winzige �ffnung vorhanden ist, wird dieser Teil nicht als Loch betrachtet und von dieser Einstellung nicht beeinflusst.

Ein positiver Wert vergr��ert die L�cher. Ein negativer Wert macht die L�cher kleiner. In Kombination mit der horizontalen Erweiterung werden die L�cher zuerst erweitert, bevor die normale horizontale Erweiterung angewendet wird. Dies k�nnte dazu f�hren, dass d�nne St�cke vollst�ndig verschwinden, bevor sie durch die gew�hnliche horizontale Ausdehnung expandiert werden.