Wandverteilungsz�hler
====
Cura kann die Breite der Wandlinien anpassen, um sie besser an die Form anzupassen, die Sie drucken, aber es muss nicht jede Wand um den gleichen Betrag anpassen. Es zieht es vor, die Breite der W�nde weiter zum Inneren des Modells hin zu �ndern. Diese Einstellung bestimmt die Anzahl der W�nde, von innen nach au�en gez�hlt, die an den verf�gbaren Platz angepasst werden.

![Konzentriert in der Mitte, mit gro�en Schwankungen in den Linienbreiten dort](../images/wall_distribution_count_1.png)
![Verteilt auf viele W�nde](../images/wall_distribution_count_5.png)

W�nde mit unterschiedlicher Breite sind schwieriger zu drucken als einfache W�nde mit konstanter Breite. Es dauert einige Zeit, die Durchflussrate aus der D�se einzustellen, und beim �bergang m�ssen auch einige scharfe Ecken hergestellt werden, die ein Klingeln verursachen k�nnen. All dies geschieht am besten so weit wie m�glich von au�en entfernt, wo es auf der Oberfl�che des Drucks sichtbar w�re. Daher wird Cura die Linienbreitenanpassungen auf die innersten W�nde konzentrieren.

Andererseits bedeutet die Konzentration der Variation auch, dass diese Linien in der Mitte stark divergierende Breiten haben. Wenn Sie dies auf mehr Linien verteilen, kann die Amplitude der Variationen kleiner sein, wodurch die Auswirkungen der variablen Linienbreite verringert werden, anstatt sie im Inneren zu verbergen.

Diese Einstellung w�hlt eine Reihe von W�nden von innen aus, zwischen denen die Linienbreite angepasst werden kann, um den verf�gbaren Platz auszuf�llen. Diese z�hlt in beide Richtungen von der Mitte, also wenn diese auf 2 eingestellt ist, k�nnen bis zu 4 W�nde in der Mitte angepasst werden. Die Anpassung ist auch innerhalb dieser W�nde nicht gleichm��ig verteilt. Die W�nde in der Mitte werden immer etwas st�rker angepasst als die W�nde weiter au�en.

Die Au�enwand wird m�glichst immer auf Nennlinienbreite gehalten. Diese Wand beeinflusst die Druckqualit�t so sehr, dass sie auf einer konstanten Linienbreite gehalten wird, um die Oberfl�che so glatt wie m�glich zu machen. Erst wenn das St�ck so d�nn wird, dass es nur noch aus Au�enw�nden besteht, werden diese W�nde angepasst.

In der Praxis ist es fast immer eine bessere Strategie, die Unvollkommenheiten in der Mitte zu verbergen, als die Unvollkommenheiten �ber mehrere W�nde zu verteilen. Daher ist es am besten, diese Einstellung so niedrig wie m�glich zu halten. Wenn Sie mit Materialien arbeiten, die schwer zu extrudieren sind oder deren Fluss sich �ndern l�sst, wie z. B. flexible Materialien, hilft es, diese Einstellung zu erh�hen, um Fluss�nderungen zu reduzieren. Es kann diese Fluss�nderungen jedoch niemals vollst�ndig verhindern.

**Diese Einstellung gilt nicht nur f�r normale W�nde, sondern auch f�r Au�enhautw�nde, St�tzw�nde, F�llw�nde und konzentrische Muster.**