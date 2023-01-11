Mindestbreite d�nner Wandlinien
====
Diese Einstellung erm�glicht es, sehr kleine Details mit einer eigentlich zu gro�en Linienbreite zu drucken. Anstatt sehr d�nne Linien zu drucken, druckt es mit einer vern�nftigeren Linienbreite.

Wenn die [Minimale Feature-Gr��e] (min_feature_size.md) sehr niedrig ist, k�nnten einige sehr d�nne Teile gedruckt werden. Das funktioniert nicht gut. Es ist m�glich, Linien zu drucken, die kleiner als die D�sengr��e sind, aber nicht viel. Das Drucken zu d�nner Linien f�hrt zu einer inkonsistenten Extrusion.

Stattdessen werden diese sehr d�nnen Linien breiter gemacht, damit sie gleichm��iger extrudiert werden. Jeder Teil des Modells, der d�nner als die minimale Linienbreite f�r d�nne W�nde ist, wird mit einer einzelnen Linie der minimalen Linienbreite f�r d�nne W�nde gedruckt. Die Linien werden dann breiter als die urspr�ngliche Breite des Modells. Dies verringert die Ma�haltigkeit, druckt aber zumindest zuverl�ssig.

Der Wert dieser Einstellung sollte die d�nnste Linienbreite sein, die der Drucker zuverl�ssig erreichen kann, bevor er anf�ngt, raue Oberfl�chen und ungleichm��ige Extrusion zu erzeugen. Diese liegt normalerweise irgendwo zwischen der D�sengr��e und der halben D�sengr��e. Eine Erh�hung f�hrt dazu, dass d�nne Teile zu fett gedruckt werden, verringert jedoch die Wahrscheinlichkeit einer Unterextrusion aufgrund des Versuchs, zu d�nne Linien zu drucken.