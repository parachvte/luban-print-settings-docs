Unterstützung der horizontalen Expansion
====
Diese Einstellung bewirkt, dass die Stütze etwas breiter wird und sich horizontal in alle Richtungen ausdehnt.

![Die Unterstützung ist breiter als notwendig, um das Modell zu unterstützen](../images/support_offset.png)

Diese Einstellung hat mehrere Verwendungszwecke, abhängig vom Material, das für die Unterstützung verwendet wird, und der Art des Modells, das unterstützt werden muss:
* Wenn Sie diese Einstellung erhöhen, wird die Unterstützung breiter und damit stabiler. Dies ist nützlich für große Modelle mit kleinen Überhangbereichen, da der Überhang ansonsten mit einer sehr hohen, dünnen Stützsäule gestützt würde. Mit etwas horizontaler Ausdehnung wird es zu einer sehr hohen, aber etwas breiteren Stützsäule.
* Das Erhöhen dieser Einstellung dient auch als Sicherheitsmaßnahme, um sicherzustellen, dass Stützbereiche eine bestimmte Mindestfläche haben. Dies ist bei schwer extrudierbaren Materialien wie PVA erforderlich.
* Das Reduzieren dieser Einstellung reduziert den Materialverbrauch und die Druckzeit für den Support. Eine Erhöhung erhöht natürlich den Materialbedarf und die Druckzeit. Siehe auch die Funktion [conical support](../experimental/support_conical_enabled.md), die die Breite der Unterstützung verringert, ohne den Bereich zu beeinträchtigen, den die Unterstützung unterstützt.
* Die Einstellung auf einen negativen Wert kann auch dünne Stützpfeiler vollständig entfernen.