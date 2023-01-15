Füllmuster
====
Das Füllmuster definiert eine Struktur, die verwendet wird, um das Volumen des Objekts zu füllen. Es stehen verschiedene Muster zur Verfügung, von denen jedes seine eigenen Vorteile hat. Einige sind auf ganz bestimmte Anwendungen spezialisiert.

Netz
----
![Netz](../images/infill_pattern_grid.png)

Das Gitterfüllmuster erzeugt zwei senkrechte Liniensätze. Zusammen bildet dies ein Muster aus Quadraten.
* Stärkstes Muster in vertikaler Richtung.
* Ziemlich stark in den beiden Richtungen der Linien.
* Nicht so stark in diagonaler Richtung des quadratischen Musters.
* Sehr gut zur Unterstützung der Oberfläche. Ihre Oberfläche wird sehr glatt aussehen.

Linien
----
![Linien](../images/infill_pattern_lines.png)

Das Linienmuster erzeugt parallele Linien. Standardmäßig ändert das Linienmuster seine Richtung senkrecht von Schicht zu Schicht, wodurch es auf den ersten Blick wie das Gittermuster aussieht. Dies kann jedoch mit der Einstellung [Fülllinienrichtungen](infill_angles.md) geändert werden.
* Das beste Muster für eine glatte Oberfläche zusammen mit Zickzack, da der Abstand zwischen den Linien am kleinsten ist.
* Neigt dazu, in vertikaler Richtung schwach zu sein, da die Schichten nur kleine Punkte haben, an denen sie sich verbinden.
* Wird in horizontaler Richtung extrem schwach sein, außer in der einen Richtung, in der die Linien ausgerichtet sind. Aber selbst in dieser Richtung ist es nicht scherfest, so dass es unter Belastung ziemlich schnell versagt.

Dreiecke
----
![Dreiecke](../images/infill_pattern_triangles.png)

Das Dreiecksmuster erzeugt drei Reihen von Linien in drei verschiedenen Richtungen. Zusammen bildet dies ein Muster aus Dreiecken.
* Sehr widerstandsfähig gegen Scherung.
* Bietet ungefähr die gleiche Stärke in jeder horizontalen Richtung.
* Deckschichtlinien müssen ziemlich lange überbrücken, was viele Deckschichten erfordert, um eine gleichmäßige Oberfläche zu erhalten.
* Der Fluss wird an Kreuzungen erheblich unterbrochen, was zu einer relativ geringen Festigkeit bei hoher Fülldichte führt.

Tri-Sechseck
----
![Tri-Sechseck](../images/infill_pattern_trihexagon.png)

Das Drei-Sechseck-Muster erzeugt drei Sätze von Linien in drei verschiedenen Richtungen, genau wie das Dreiecksmuster, aber gegeneinander versetzt, sodass sie sich nicht alle an derselben Position schneiden.
* Stärkstes Muster in horizontaler Richtung.
* Bietet ungefähr die gleiche Stärke in jeder horizontalen Richtung.
* Sehr widerstandsfähig gegen Scherung.
* Deckschichtlinien müssen sehr lange überbrücken, was viele Deckschichten erfordert, um eine gleichmäßige Oberfläche zu erhalten.

Kubisch
----
![Kubisch](../images/infill_pattern_cubic.png)

Das kubische Muster erzeugt Würfel, ein dreidimensionales Muster. Die Würfel sind mit einer Ecke nach unten ausgerichtet, wodurch sie bedruckt werden können, ohne dass die Innenflächen überstehen.
* Bietet ungefähr die gleiche Festigkeit in allen Richtungen, einschließlich der vertikalen Richtung.
* Ziemlich stark in jeder Richtung.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen heißer Luft erzeugt.

Kubische Unterteilung
----
![Kubische Unterteilung](../images/infill_pattern_cubic_subdivision.png)

Das kubische Unterteilungsmuster erzeugt Würfel, ein dreidimensionales Muster. Die Würfel sind mit einer Ecke nach unten ausgerichtet, wodurch sie bedruckt werden können, ohne dass die Innenflächen überstehen. Dieses Muster erzeugt größere Würfel zum Inneren des Volumens, was Material spart. Es lässt die Fülllinien an Stellen weg, wo sie am wenigsten nützlich sind.

Dieses Muster kann Fülldichten erzeugen, die niedriger als erwünscht sind. Es ist ratsam, die Füllungsdichte drastisch zu erhöhen, wenn Sie dieses Muster verwenden. Die Optimierung funktioniert am besten bei hoher Fülldichte.

Algorithmisch wird dieses Muster erzeugt, indem ein riesiger Würfel um das gesamte Volumen herum erstellt wird und dieser Würfel dann in 8 Unterwürfel unterteilt wird, wenn er auf eine Wand trifft. Dies wird dann rekursiv ausgeführt, sodass die Teilwürfel, die auf irgendwelche Wände treffen, immer wieder unterteilt werden. Dies wiederholt sich, bis der Fülllinienabstand erreicht ist.
* Stärkstes Muster bei gleichem Gewicht und Druckzeit.
* Bietet ungefähr die gleiche Festigkeit in allen Richtungen, einschließlich der vertikalen Richtung.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen heißer Luft erzeugt.
* Wenn die Füllungsdichte erhöht wird, scheint die Füllung nicht viel durch die Wände, wodurch eine bessere Oberflächenqualität bei gleicher Druckzeit erzeugt wird.
* Führt Einziehungen ein, was bei flexiblen oder flüssigen Materialien nicht gut funktioniert.
* Das Schneiden dauert länger.

Oktett
----
![Oktett](../images/infill_pattern_octet.png)

Das Oktettmuster erzeugt eine Kombination aus regelmäßigen Tetraedern und Würfeln, ein dreidimensionales Muster. Von Zeit zu Zeit werden mehrere Fülllinien nebeneinander platziert.
* Erzeugt einen starken inneren Rahmen, wo sich mehrere parallele Linien berühren. Die Last wird schnell in Richtung dieses Innenrahmens abgeleitet.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen heißer Luft erzeugt.
* Führt zu einer sehr langen Überbrückung der Deckschichten, was die Oberflächenqualität reduziert.

Viertelkubisch
----
![Viertelkubisch](../images/infill_pattern_quarter_cubic.png)

Das viertelkubische Muster erzeugt eine dreidimensionale Tesselation, die aus Tetraedern und abgeschnittenen Tetraedern besteht. Von Zeit zu Zeit werden mehrere Fülllinien nebeneinander platziert.
* Erzeugt zwei disjunkte interne Frames, ähnlich Oktett, wo sich mehrere parallele Linien berühren. Die Last wird schnell in Richtung dieses Innenrahmens abgeleitet. Die Rahmen sind in zwei verschiedene Richtungen ausgerichtet, was sie einzeln schwächer macht, aber den Abstand verringert, um die Last auf diese Rahmen zu verteilen.
* Reduzierte Wirkung des Kissens, da es keine langen vertikalen Taschen heißer Luft erzeugt.
* Führt zu einer sehr langen Überbrückung der Deckschichten, was die Oberflächenqualität reduziert.

Konzentrisch
----
![Konzentrisch](../images/infill_pattern_concentric.png)

Das konzentrische Muster erzeugt Ringe parallel zu den Wänden.
* Das stärkste Füllungsmuster bei Verwendung von 100 % Füllung, da sich nicht nur keine Linien schneiden, sondern die Linien auch so ausgerichtet sind, dass die nicht isotrope Stärke der Linien die Last verteilt.
* Erzeugt die flexibelsten Drucke mit einer sehr schwachen und gleichmäßigen Stärke in allen horizontalen Richtungen.
* Stärker in vertikaler Richtung als in horizontaler Richtung.
* Bei 100 % Schüttdichte könnte das Material in der Mitte verklumpen. Daher passt es nicht zu runden Modellen, da die konzentrischen Kreise schließlich in einem Punkt zusammenkommen.
* Bei einigen Formen könnten einige der Fülllinien in der Luft hängen, was keine zusätzliche Festigkeit für die Materialkosten und die Druckzeit hinzufügt.
* Wenn keine 100 % Füllung verwendet wird, ist dies das schwächste Füllungsmuster in horizontaler Richtung. Es fügt überhaupt keine Kraft hinzu.

Zickzack
----
![Zickzack](../images/infill_pattern_zigzag.png)

Das Zickzack-Füllmuster bewirkt, dass die Düse Linien in einer Zickzack-Weise zeichnet. Das ist wie bei Leitungen, aber die Leitungen sind verbunden, was Strömungsunterbrechungen verhindert.
* Das zweitstärkste Füllungsmuster bei Verwendung von 100 % Füllung. Es druckt jedoch zuverlässiger als konzentrische Füllungen mit runden Formen.
* Das beste Muster für eine glatte Oberfläche zusammen mit Zickzack, da der Abstand zwischen den Linien am kleinsten ist.
* Neigt dazu, in vertikaler Richtung ziemlich schwach zu sein, da die Schichten nur kleine Punkte haben, an denen sie sich verbinden.
* Wird in horizontaler Richtung extrem schwach sein, außer in der einen Richtung, in der die Linien ausgerichtet sind. Aber selbst in dieser Richtung ist es nicht scherfest, so dass es unter Belastung ziemlich schnell versagt.

Cross
----
![Cross](../images/infill_pattern_cross.png)

Das Kreuzfüllungsmuster erzeugt eine raumfüllende Kurve, die etwas erzeugt, das wie Kreuze entlang der Innenseite des Volumens aussieht.
* Gleichmäßig matschig in allen horizontalen Richtungen, wodurch dies zum Drucken von weichen und flexiblen Objekten nützlich ist.
* Erzeugt keine langen geraden Linien in horizontaler Richtung, wodurch diese entlang des gesamten Umfangs gleichmäßig matschig werden. Es gibt keine starken Stellen.
* Erzeugt überhaupt keine Einziehungen, was das Drucken mit flexiblen Materialien erleichtert.
* Wird in vertikaler Richtung stärker sein als in horizontaler Richtung.
* Das Schneiden dauert lange.
* Wird in allen horizontalen Richtungen sehr schwach sein.

Kreuz 3D
----
![Kreuz 3D](../images/infill_pattern_cross_3d.png)

Das Kreuz-3D-Füllmuster erzeugt eine raumfüllende Kurve, die so etwas wie Kreuze entlang der Innenseite des Volumens erzeugt. Dieses Muster pulsiert entlang der Z-Achse, um es in vertikaler Richtung schwächer zu machen.
* Ungefähr gleichmäßig matschig in alle Richtungen, horizontal und vertikal, wodurch dies das nützlichste Muster zum Drucken weicher und flexibler Objekte ist.
* Erzeugt keine langen geraden Linien, wodurch diese entlang der gesamten Oberfläche gleichmäßig matschig werden.
* Erzeugt überhaupt keine Einziehungen, was das Drucken mit flexiblen Materialien erleichtert.
* Das Schneiden dauert lange.
* Wird in allen Richtungen sehr schwach sein.

Gyroid
----
![Gyroid](../images/infill_pattern_gyroid.png)

Das Gyroid-Füllmuster erzeugt ein Wellenmuster, das die Richtung wechselt.
* Erzeugt ein Volumen, das vollständig flüssigkeitsdurchlässig ist, was es zu einem nützlichen Muster für auflösbare Materialien macht.
* In alle Richtungen gleich stark, aber nicht sehr stark. Dies macht es für flexible Materialien nützlich, aber das Ergebnis ist etwas härter und weniger matschig als die Cross (3D)-Füllmuster.
* Resistent gegen Scheren.
* Das Slicen dauert lange und erzeugt große G-Code-Dateien. Für einige Drucker kann es schwierig sein, mit den vielen G-Code-Befehlen pro Sekunde Schritt zu halten, und es kann schwierig sein, mit einer seriellen Verbindung mit niedrigen Baudraten Schritt zu halten.

Blitz
----

![Blitz](../images/infill_pattern_lightning.png)
![Das Blitzmuster baut sich von den Seiten auf](../images/infill_pattern_lightning_side.png)

Das Blitz-Füllmuster ist ein gezacktes minimales Muster, das nur darauf abzielt, die obere Oberfläche zu stützen. Die angegebene Schüttdichte wird nur knapp unterhalb der Oberseite des Schüttvolumens erreicht.

* Spart enorm viel Zeit und Material, indem nur die Füllung unter der Oberfläche hergestellt wird.
* Die Erhöhung der Fülldichte führt zur besten Oberflächenqualität aller Dekore bei gleichzeitig geringem Zeit- und Materialaufwand.
* Verhindert, dass Füllmaterial an vielen Stellen durch die Wände scheint, indem einfach kein Füllmaterial vorhanden ist.
* Trägt nicht wesentlich zur Festigkeit des Teils bei.