Wandverteilungszähler
====
Cura kann die Breite der Wandlinien anpassen, um sie besser an die Form anzupassen, die Sie drucken, aber es muss nicht jede Wand um den gleichen Betrag anpassen. Es zieht es vor, die Breite der Wände weiter zum Inneren des Modells hin zu ändern. Diese Einstellung bestimmt die Anzahl der Wände, von innen nach außen gezählt, die an den verfügbaren Platz angepasst werden.

![Konzentriert in der Mitte, mit großen Schwankungen in den Linienbreiten dort](../images/wall_distribution_count_1.png)
![Verteilt auf viele Wände](../images/wall_distribution_count_5.png)

Wände mit unterschiedlicher Breite sind schwieriger zu drucken als einfache Wände mit konstanter Breite. Es dauert einige Zeit, die Durchflussrate aus der Düse einzustellen, und beim Übergang müssen auch einige scharfe Ecken hergestellt werden, die ein Klingeln verursachen können. All dies geschieht am besten so weit wie möglich von außen entfernt, wo es auf der Oberfläche des Drucks sichtbar wäre. Daher wird Cura die Linienbreitenanpassungen auf die innersten Wände konzentrieren.

Andererseits bedeutet die Konzentration der Variation auch, dass diese Linien in der Mitte stark divergierende Breiten haben. Wenn Sie dies auf mehr Linien verteilen, kann die Amplitude der Variationen kleiner sein, wodurch die Auswirkungen der variablen Linienbreite verringert werden, anstatt sie im Inneren zu verbergen.

Diese Einstellung wählt eine Reihe von Wänden von innen aus, zwischen denen die Linienbreite angepasst werden kann, um den verfügbaren Platz auszufüllen. Diese zählt in beide Richtungen von der Mitte, also wenn diese auf 2 eingestellt ist, können bis zu 4 Wände in der Mitte angepasst werden. Die Anpassung ist auch innerhalb dieser Wände nicht gleichmäßig verteilt. Die Wände in der Mitte werden immer etwas stärker angepasst als die Wände weiter außen.

Die Außenwand wird möglichst immer auf Nennlinienbreite gehalten. Diese Wand beeinflusst die Druckqualität so sehr, dass sie auf einer konstanten Linienbreite gehalten wird, um die Oberfläche so glatt wie möglich zu machen. Erst wenn das Stück so dünn wird, dass es nur noch aus Außenwänden besteht, werden diese Wände angepasst.

In der Praxis ist es fast immer eine bessere Strategie, die Unvollkommenheiten in der Mitte zu verbergen, als die Unvollkommenheiten über mehrere Wände zu verteilen. Daher ist es am besten, diese Einstellung so niedrig wie möglich zu halten. Wenn Sie mit Materialien arbeiten, die schwer zu extrudieren sind oder deren Fluss sich ändern lässt, wie z. B. flexible Materialien, hilft es, diese Einstellung zu erhöhen, um Flussänderungen zu reduzieren. Es kann diese Flussänderungen jedoch niemals vollständig verhindern.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**