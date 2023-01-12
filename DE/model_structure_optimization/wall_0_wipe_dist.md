Wischabstand der Außenwand
====
Bei dieser Einstellung fährt die Düse am Ende jeder Außenwand ohne Extrusion etwas weiter und wischt die Kontur geschlossen.

![Ein kleiner Reisezug nach Fertigstellung der Außenmauer](../images/wall_0_wipe_dist.png)

Das Ziel dieser Funktion ist es, die Sichtbarkeit der Naht zu reduzieren. Wenn die Wand fertiggestellt ist, befindet sich die Sicke normalerweise noch etwas hinter der Düse. Dieser kleine Hub verbindet die Raupe mit dem Konturanfang, sodass die Naht geschlossen wird.

Die Naht wird immer noch sichtbar sein, aber das Ergebnis sollte mit einem kleinen Wischabstand etwas besser sein. Eine zu starke Erhöhung dieser Einstellung hat keine Wirkung mehr, da die Düse über die Naht hinaus fährt, und kann später zu einer gewissen Unterextrusion führen, wenn sich die Düsenkammer während des Düsenwischens leert.

Dieser Effekt ist im Grunde das Gegenteil von [coasting](../experimental/coasting_enable.md), der das Extrudieren kurz vor Abschluss der Kontur beendet.