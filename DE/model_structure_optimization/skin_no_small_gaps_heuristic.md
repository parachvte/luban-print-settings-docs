Keine Haut in Z-Lücken
====
Wenn Ihr Modell einen kleinen Schlitz hat, der kleiner als die Hautdicke oben/unten ist, kümmert sich diese Einstellung nicht darum, die Ober- und Unterseite darüber/darunter vollständig mit Haut zu füllen. Dies spart Schnitt- und Druckzeit, kann aber die Füllung der Luft aussetzen.

![Normalerweise befindet sich Haut um den kleinen horizontalen Schlitz](../images/skin_no_small_gaps_heuristic_disabled.png)
![Wenn dies aktiviert ist, wird der Skin nicht richtig geschlossen](../images/skin_no_small_gaps_heuristic_enabled.png)

Der Hauptzweck dieser Einstellung besteht darin, die Slicing-Zeit zu reduzieren. Diese Einstellung reduziert effektiv die Auflösung dort, wo Skin hätte platziert werden sollen. Abhängig von der Form des Modells kann dies zwischen 5 % und 30 % der Slicing-Zeit einsparen. Es spart auch Druckzeit, da anstelle von Haut Füllungen in kleine Lücken gedruckt werden. Wenn das Modell keine Lücken aufweist, die kleiner als die Hautdicke sind, besteht der einzige Effekt darin, die Slicing-Zeit zu verkürzen.

Wenn das Modell solch kleine Lücken hat, kann es sein, dass durch die Lücken Füllmaterial freigelegt wird. Wenn die Lücke jedoch klein genug ist, würde der Überhang die Wände so stark durchhängen lassen, dass sie sowieso nicht sichtbar sind.