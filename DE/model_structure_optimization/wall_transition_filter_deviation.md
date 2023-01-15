Wandübergangsfilterrand
====
Einige Modelle haben dünne Stücke, die um die Schwelle herum schweben, wo eine unterschiedliche Anzahl von Wänden verwendet wird. Dies könnte dazu führen, dass die Anzahl der Wände hin und her wechselt, obwohl die tatsächliche Breite des Stücks nicht sehr unterschiedlich ist. Der Wechsel ruiniert die Druckqualität, erfordert viele Flussänderungen und fügt mehr Bewegungsbewegungen hinzu. Mit dieser Funktion werden Übergänge entfernt, wenn sie hin und her übergegangen wären.

Wenn ein Übergang entfernt wird, können einige Linien vorübergehend zu breit oder zu dünn werden. Diese Einstellung begrenzt, welche Übergänge herausgefiltert werden, indem sie begrenzt, wie viel breiter oder dünner die Linie sein darf.

![Bei geringem Rand wechselt es zwischen 2 und 3 Wänden](../images/wall_transition_filter_off.png)
![Bei einem höheren Rand alterniert es nicht mehr](../images/wall_transition_filter_on.png)

Um genau zu sein, dürfen die Linien um diesen Rand dünner als die [Minimale Wandlinienbreite](min_wall_line_width.md) werden, wenn dies ein Hin- und Hergehen zwischen verschiedenen Wandzahlen verhindert. Ebenso dürfen Linien um diesen Rand etwas breiter werden, auch wenn eine zusätzliche Wand mit der minimalen Wandlinienbreite hätte passen können.

Dieser Filter zielt darauf ab, ein häufiges Problem mit dünnen Teilen unter Verwendung von 3D-Netzen mit niedriger Auflösung zu lösen. Das 3D-Modell, bestehend aus flachen Dreiecken, kann eine Kurve nicht exakt darstellen, sondern nur annähern. Die Kurve hat Kanten mit ebenen Flächen dazwischen. Beim Modellieren eines gekrümmten Teils mit konstanter Breite ist es wichtig, dass die Kanten auf der Außenseite mit den Kanten auf der Innenseite ausgerichtet sind. Wenn dies nicht der Fall ist, variiert die Breite des Rings geringfügig, was den oben gezeigten Effekt verursachen kann. Wenn dies der Fall ist, sollte der Übergangsfilter verhindern, dass er zu stark wirkt.

Das Erhöhen des Rands verhindert in einigen Fällen das Erstellen kleiner Liniensegmente. Dies ist schneller zu drucken und kann die Oberfläche glatter aussehen lassen. Es ermöglicht jedoch auch extremere Linienbreiten, die möglicherweise nicht gut aus Ihrer Düse herausragen. Beim Drucken von Modellen mit niedriger Auflösung und dünnen Stücken kann eine Erhöhung des Rands zur Verbesserung der Qualität beitragen. Bei schwierigen Materialien ist man lieber auf der sicheren Seite.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**