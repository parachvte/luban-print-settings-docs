Keine Haut in Z-L�cken
====
Wenn Ihr Modell einen kleinen Schlitz hat, der kleiner als die Hautdicke oben/unten ist, k�mmert sich diese Einstellung nicht darum, die Ober- und Unterseite dar�ber/darunter vollst�ndig mit Haut zu f�llen. Dies spart Schnitt- und Druckzeit, kann aber die F�llung der Luft aussetzen.

![Normalerweise befindet sich Haut um den kleinen horizontalen Schlitz](../images/skin_no_small_gaps_heuristic_disabled.png)
![Wenn dies aktiviert ist, wird der Skin nicht richtig geschlossen](../images/skin_no_small_gaps_heuristic_enabled.png)

Der Hauptzweck dieser Einstellung besteht darin, die Slicing-Zeit zu reduzieren. Diese Einstellung reduziert effektiv die Aufl�sung dort, wo Skin h�tte platziert werden sollen. Abh�ngig von der Form des Modells kann dies zwischen 5 % und 30 % der Slicing-Zeit einsparen. Es spart auch Druckzeit, da anstelle von Haut F�llungen in kleine L�cken gedruckt werden. Wenn das Modell keine L�cken aufweist, die kleiner als die Hautdicke sind, besteht der einzige Effekt darin, die Slicing-Zeit zu verk�rzen.

Wenn das Modell solch kleine L�cken hat, kann es sein, dass durch die L�cken F�llmaterial freigelegt wird. Wenn die L�cke jedoch klein genug ist, w�rde der �berhang die W�nde so stark durchh�ngen lassen, dass sie sowieso nicht sichtbar sind.