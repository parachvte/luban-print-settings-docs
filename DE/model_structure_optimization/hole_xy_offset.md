Horizontale Ausdehnung des Lochs
====
Dies ist eine Kompensationsmaßnahme für einen Druckeffekt, bei dem Löcher dazu neigen, kleiner als beabsichtigt gedruckt zu werden. Mit dieser Einstellung können Sie die Größe der Löcher in Ihrem Druck erweitern.

![Die Löcher wurden größer gemacht, aber der Rest der Form hat sich nicht verändert](../images/hole_xy_offset.png)

Aufgrund der Viskosität des Materials neigt der Kunststoff beim Drucken einer Kurve dazu, von der Düse entlang der Kurve gezogen zu werden. Dadurch wird die Kurve etwas kleiner als beabsichtigt, da die Schnur in die Innenseite der Kurve gezogen wird. Normalerweise ist dies nicht wirklich sichtbar, aber wenn Sie Artikel drucken, die sehr präzise sein müssen, oder wenn Sie Artikel mit sehr kleinen vertikalen Löchern drucken, wird dies die Genauigkeit Ihres Drucks ruinieren. Schrauben passen nicht mehr, Teile gleiten nicht mehr sauber ineinander und so weiter.

Diese Einstellung kompensiert dies, indem alle Löcher etwas größer gemacht werden. Im Gegensatz zu [Horizontal Expansion](xy_offset.md) betrifft dies nur geschlossene Löcher. Wenn auf einer Seite (horizontal, auf derselben Ebene) auch nur eine winzige Öffnung vorhanden ist, wird dieser Teil nicht als Loch betrachtet und von dieser Einstellung nicht beeinflusst.

Ein positiver Wert vergrößert die Löcher. Ein negativer Wert macht die Löcher kleiner. In Kombination mit der horizontalen Erweiterung werden die Löcher zuerst erweitert, bevor die normale horizontale Erweiterung angewendet wird. Dies könnte dazu führen, dass dünne Stücke vollständig verschwinden, bevor sie durch die gewöhnliche horizontale Ausdehnung expandiert werden.