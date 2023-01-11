F�llmuster
====
Das F�llmuster definiert eine Struktur, die verwendet wird, um das Volumen des Objekts zu f�llen. Es stehen verschiedene Muster zur Verf�gung, von denen jedes seine eigenen Vorteile hat. Einige sind auf ganz bestimmte Anwendungen spezialisiert.

Netz
----
![Netz](../images/infill_pattern_grid.png)

Das Gitterf�llmuster erzeugt zwei senkrechte Liniens�tze. Zusammen bildet dies ein Muster aus Quadraten.
* St�rkstes Muster in vertikaler Richtung.
* Ziemlich stark in den beiden Richtungen der Linien.
* Nicht so stark in diagonaler Richtung des quadratischen Musters.
* Sehr gut zur Unterst�tzung der Oberfl�che. Ihre Oberfl�che wird sehr glatt aussehen.

Linien
----
![Linien](../images/infill_pattern_lines.png)

Das Linienmuster erzeugt parallele Linien. Standardm��ig �ndert das Linienmuster seine Richtung senkrecht von Schicht zu Schicht, wodurch es auf den ersten Blick wie das Gittermuster aussieht. Dies kann jedoch mit der Einstellung [F�lllinienrichtungen](infill_angles.md) ge�ndert werden.
* Das beste Muster f�r eine glatte Oberfl�che zusammen mit Zickzack, da der Abstand zwischen den Linien am kleinsten ist.
* Neigt dazu, in vertikaler Richtung schwach zu sein, da die Schichten nur kleine Punkte haben, an denen sie sich verbinden.
* Wird in horizontaler Richtung extrem schwach sein, au�er in der einen Richtung, in der die Linien ausgerichtet sind. Aber selbst in dieser Richtung ist es nicht scherfest, so dass es unter Belastung ziemlich schnell versagt.

Dreiecke
----
![Dreiecke](../images/infill_pattern_triangles.png)

Das Dreiecksmuster erzeugt drei Reihen von Linien in drei verschiedenen Richtungen. Zusammen bildet dies ein Muster aus Dreiecken.
* Sehr widerstandsf�hig gegen Scherung.
* Bietet ungef�hr die gleiche St�rke in jeder horizontalen Richtung.
* Deckschichtlinien m�ssen ziemlich lange �berbr�cken, was viele Deckschichten erfordert, um eine gleichm��ige Oberfl�che zu erhalten.
* Der Fluss wird an Kreuzungen erheblich unterbrochen, was zu einer relativ geringen Festigkeit bei hoher F�lldichte f�hrt.

Tri-Sechseck
----
![Tri-Sechseck](../images/infill_pattern_trihexagon.png)

Das Drei-Sechseck-Muster erzeugt drei S�tze von Linien in drei verschiedenen Richtungen, genau wie das Dreiecksmuster, aber gegeneinander versetzt, sodass sie sich nicht alle an derselben Position schneiden.
* St�rkstes Muster in horizontaler Richtung.
* Bietet ungef�hr die gleiche St�rke in jeder horizontalen Richtung.
* Sehr widerstandsf�hig gegen Scherung.
* Deckschichtlinien m�ssen sehr lange �berbr�cken, was viele Deckschichten erfordert, um eine gleichm��ige Oberfl�che zu erhalten.

Kubisch
----
![Kubisch](../images/infill_pattern_cubic.png)

Das kubische Muster erzeugt W�rfel, ein dreidimensionales Muster. Die W�rfel sind mit einer Ecke nach unten ausgerichtet, wodurch sie bedruckt werden k�nnen, ohne dass die Innenfl�chen �berstehen.
* Bietet ungef�hr die gleiche Festigkeit in allen Richtungen, einschlie�lich der vertikalen Richtung.
* Ziemlich stark in jeder Richtung.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen hei�er Luft erzeugt.

Kubische Unterteilung
----
![Kubische Unterteilung](../images/infill_pattern_cubic_subdivision.png)

Das kubische Unterteilungsmuster erzeugt W�rfel, ein dreidimensionales Muster. Die W�rfel sind mit einer Ecke nach unten ausgerichtet, wodurch sie bedruckt werden k�nnen, ohne dass die Innenfl�chen �berstehen. Dieses Muster erzeugt gr��ere W�rfel zum Inneren des Volumens, was Material spart. Es l�sst die F�lllinien an Stellen weg, wo sie am wenigsten n�tzlich sind.

Dieses Muster kann F�lldichten erzeugen, die niedriger als erw�nscht sind. Es ist ratsam, die F�llungsdichte drastisch zu erh�hen, wenn Sie dieses Muster verwenden. Die Optimierung funktioniert am besten bei hoher F�lldichte.

Algorithmisch wird dieses Muster erzeugt, indem ein riesiger W�rfel um das gesamte Volumen herum erstellt wird und dieser W�rfel dann in 8 Unterw�rfel unterteilt wird, wenn er auf eine Wand trifft. Dies wird dann rekursiv ausgef�hrt, sodass die Teilw�rfel, die auf irgendwelche W�nde treffen, immer wieder unterteilt werden. Dies wiederholt sich, bis der F�lllinienabstand erreicht ist.
* St�rkstes Muster bei gleichem Gewicht und Druckzeit.
* Bietet ungef�hr die gleiche Festigkeit in allen Richtungen, einschlie�lich der vertikalen Richtung.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen hei�er Luft erzeugt.
* Wenn die F�llungsdichte erh�ht wird, scheint die F�llung nicht viel durch die W�nde, wodurch eine bessere Oberfl�chenqualit�t bei gleicher Druckzeit erzeugt wird.
* F�hrt Einziehungen ein, was bei flexiblen oder fl�ssigen Materialien nicht gut funktioniert.
* Das Schneiden dauert l�nger.

Oktett
----
![Oktett](../images/infill_pattern_octet.png)

Das Oktettmuster erzeugt eine Kombination aus regelm��igen Tetraedern und W�rfeln, ein dreidimensionales Muster. Von Zeit zu Zeit werden mehrere F�lllinien nebeneinander platziert.
* Erzeugt einen starken inneren Rahmen, wo sich mehrere parallele Linien ber�hren. Die Last wird schnell in Richtung dieses Innenrahmens abgeleitet.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen hei�er Luft erzeugt.
* F�hrt zu einer sehr langen �berbr�ckung der Deckschichten, was die Oberfl�chenqualit�t reduziert.

Viertelkubisch
----
![Viertelkubisch](../images/infill_pattern_quarter_cubic.png)

Das viertelkubische Muster erzeugt eine dreidimensionale Tesselation, die aus Tetraedern und abgeschnittenen Tetraedern besteht. Von Zeit zu Zeit werden mehrere F�lllinien nebeneinander platziert.
* Erzeugt zwei disjunkte interne Frames, �hnlich Oktett, wo sich mehrere parallele Linien ber�hren. Die Last wird schnell in Richtung dieses Innenrahmens abgeleitet. Die Rahmen sind in zwei verschiedene Richtungen ausgerichtet, was sie einzeln schw�cher macht, aber den Abstand verringert, um die Last auf diese Rahmen zu verteilen.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen hei�er Luft erzeugt.
* F�hrt zu einer sehr langen �berbr�ckung der Deckschichten, was die Oberfl�chenqualit�t reduziert.

Konzentrisch
----
![Konzentrisch](../images/infill_pattern_concentric.png)

Das konzentrische Muster erzeugt Ringe parallel zu den W�nden.
* Das st�rkste F�llungsmuster bei Verwendung von 100 % F�llung, da sich nicht nur keine Linien schneiden, sondern die Linien auch so ausgerichtet sind, dass die nicht isotrope St�rke der Linien die Last verteilt.
* Erzeugt die flexibelsten Drucke mit einer sehr schwachen und gleichm��igen St�rke in allen horizontalen Richtungen.
* St�rker in vertikaler Richtung als in horizontaler Richtung.
* Bei 100 % Sch�ttdichte k�nnte das Material in der Mitte verklumpen. Daher passt es nicht zu runden Modellen, da die konzentrischen Kreise schlie�lich in einem Punkt zusammenkommen.
* Bei einigen Formen k�nnten einige der F�lllinien in der Luft h�ngen, was keine zus�tzliche Festigkeit f�r die Materialkosten und die Druckzeit hinzuf�gt.
* Wenn keine 100 % F�llung verwendet wird, ist dies das schw�chste F�llungsmuster in horizontaler Richtung. Es f�gt �berhaupt keine Kraft hinzu.

Zickzack
----
![Zickzack](../images/infill_pattern_zigzag.png)

Das Zickzack-F�llmuster bewirkt, dass die D�se Linien in einer Zickzack-Weise zeichnet. Das ist wie bei Leitungen, aber die Leitungen sind verbunden, was Str�mungsunterbrechungen verhindert.
* Das zweitst�rkste F�llungsmuster bei Verwendung von 100 % F�llung. Es druckt jedoch zuverl�ssiger als konzentrische F�llungen mit runden Formen.
* Das beste Muster f�r eine glatte Oberfl�che zusammen mit Zickzack, da der Abstand zwischen den Linien am kleinsten ist.
* Neigt dazu, in vertikaler Richtung ziemlich schwach zu sein, da die Schichten nur kleine Punkte haben, an denen sie sich verbinden.
* Wird in horizontaler Richtung extrem schwach sein, au�er in der einen Richtung, in der die Linien ausgerichtet sind. Aber selbst in dieser Richtung ist es nicht scherfest, so dass es unter Belastung ziemlich schnell versagt.

Cross
----
![Cross](../images/infill_pattern_cross.png)

Das Kreuzf�llungsmuster erzeugt eine raumf�llende Kurve, die etwas erzeugt, das wie Kreuze entlang der Innenseite des Volumens aussieht.
* Gleichm��ig matschig in allen horizontalen Richtungen, wodurch dies zum Drucken von weichen und flexiblen Objekten n�tzlich ist.
* Erzeugt keine langen geraden Linien in horizontaler Richtung, wodurch diese entlang des gesamten Umfangs gleichm��ig matschig werden. Es gibt keine starken Stellen.
* Erzeugt �berhaupt keine Einziehungen, was das Drucken mit flexiblen Materialien erleichtert.
* Wird in vertikaler Richtung st�rker sein als in horizontaler Richtung.
* Das Schneiden dauert lange.
* Wird in allen horizontalen Richtungen sehr schwach sein.

Kreuz 3D
----
![Kreuz 3D](../images/infill_pattern_cross_3d.png)

Das Kreuz-3D-F�llmuster erzeugt eine raumf�llende Kurve, die so etwas wie Kreuze entlang der Innenseite des Volumens erzeugt. Dieses Muster pulsiert entlang der Z-Achse, um es in vertikaler Richtung schw�cher zu machen.
* Ungef�hr gleichm��ig matschig in alle Richtungen, horizontal und vertikal, wodurch dies das n�tzlichste Muster zum Drucken weicher und flexibler Objekte ist.
* Erzeugt keine langen geraden Linien, wodurch diese entlang der gesamten Oberfl�che gleichm��ig matschig werden.
* Erzeugt �berhaupt keine Einziehungen, was das Drucken mit flexiblen Materialien erleichtert.
* Das Schneiden dauert lange.
* Wird in allen Richtungen sehr schwach sein.

Gyroid
----
![Gyroid](../images/infill_pattern_gyroid.png)

Das Gyroid-F�llmuster erzeugt ein Wellenmuster, das die Richtung wechselt.
* Erzeugt ein Volumen, das vollst�ndig fl�ssigkeitsdurchl�ssig ist, was es zu einem n�tzlichen Muster f�r aufl�sbare Materialien macht.
* In alle Richtungen gleich stark, aber nicht sehr stark. Dies macht es f�r flexible Materialien n�tzlich, aber das Ergebnis ist etwas h�rter und weniger matschig als die Cross (3D)-F�llmuster.
* Resistent gegen Scheren.
* Das Slicen dauert lange und erzeugt gro�e G-Code-Dateien. F�r einige Drucker kann es schwierig sein, mit den vielen G-Code-Befehlen pro Sekunde Schritt zu halten, und es kann schwierig sein, mit einer seriellen Verbindung mit niedrigen Baudraten Schritt zu halten.

Blitz
----

![Blitz](../images/infill_pattern_lightning.png)
![Das Blitzmuster baut sich von den Seiten auf](../images/infill_pattern_lightning_side.png)

Das Blitz-F�llmuster ist ein gezacktes minimales Muster, das nur darauf abzielt, die obere Oberfl�che zu st�tzen. Die angegebene Sch�ttdichte wird nur knapp unterhalb der Oberseite des Sch�ttvolumens erreicht.

* Spart enorm viel Zeit und Material, indem nur die F�llung unter der Oberfl�che hergestellt wird.
* Die Erh�hung der F�lldichte f�hrt zur besten Oberfl�chenqualit�t aller Dekore bei gleichzeitig geringem Zeit- und Materialaufwand.
* Verhindert, dass F�llmaterial an vielen Stellen durch die W�nde scheint, indem einfach kein F�llmaterial vorhanden ist.
* Tr�gt nicht wesentlich zur Festigkeit des Teils bei.