Wandübergangslänge
====
Bei dünnen Teilen passen nicht alle Wände in die Form. Wenn das Teil an einigen Stellen dünner ist als an anderen, muss Cura an einigen Stellen eine unterschiedliche Anzahl von Wänden verwenden. Diese Einstellung steuert, wie breit der Übergangsbereich sein wird, in dem eine der Wände hinzugefügt oder entfernt wird.

![Ein sehr kurzer Übergang](../images/wall_transition_length_0_2.png)
![Ein längerer Übergang](../images/wall_transition_length_1_5.png)

Der Übergangsbereich zwischen unterschiedlich vielen Wänden weist immer wieder kleine Probleme auf. Dies ist am sichtbarsten, wenn eine einzelne Linie in der Mitte endet und die beiden umgebenden Wände die Lücke füllen müssen. Sie füllen den Raum nicht sofort aus, und es bleibt eine Lücke. Dies führt zu winzigen Löchern auf der Ober- und Unterseite der Drucke. Das Gegenteil passiert, wenn sich zwei Wände zu einer verbinden, wodurch sie sich für einen Moment überlappen, bis sie zusammengekommen sind. Die Überextrusion kann zu Maßungenauigkeiten führen, insbesondere dort, wo dies in der Außenwand auftritt. All dies kann verhindert werden, indem der Übergang so kurz wie möglich gestaltet wird.

Ein kurzer Übergang bewirkt jedoch auch, dass die Düse einige sehr scharfe Kurven nimmt, um diese Lücke schnell zu füllen. Dies führt zu mehr Ringing, insbesondere wenn dies für das Bedrucken der Außenwand auftritt. Das Verlängern des Übergangs reduziert Beschleunigungen in der Düse, insbesondere wenn sie dadurch unter die [Ruck](../speed/jerk_print.md)-Grenze reduziert werden.

Das Einstellen dieser Länge auf das Ein- oder Zweifache der Linienbreite ist ein vernünftiger Ausgangspunkt. Drucker mit schwächeren Rahmen oder schwereren Druckköpfen müssen sie möglicherweise erhöhen, während Drucker, die ohne Klingeln schnell beschleunigen können, sich bemühen müssen, den Übergang zu verkürzen, um die visuelle Qualität zu verbessern.

**Diese Einstellung gilt nicht nur für normale Wände, sondern auch für Außenhautwände, Stützwände, Füllwände und konzentrische Muster.**