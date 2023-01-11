Maximale Lüftergeschwindigkeit
====
### **Beschreibung**
Die Geschwindigkeit, mit der sich die Lüfter im Werkzeugkopf drehen, wenn die Ebene mit der Mindestebenenzeit gedruckt wird.

![Welche Lüftergeschwindigkeit wird wo verwendet](../images/cool_fan_speed.svg)

Luban berechnet die Druckzeit jeder Schicht, um die Lüftergeschwindigkeit zu bestimmen. Wenn die Druckzeit einer Ebene größer als die minimale Ebenenzeit, aber kleiner als der normale/maximale Lüftergeschwindigkeitsschwellenwert ist, wird die Lüftergeschwindigkeit dieser Ebene wie folgt berechnet:

Lüftergeschwindigkeit der Ebene = Maximale Lüftergeschwindigkeit – (Maximale Lüftergeschwindigkeit – Normale Lüftergeschwindigkeit)/(Reguläre/Maximale Lüftergeschwindigkeitsschwelle – Minimale Ebenenzeit) × (Druckzeit der Ebene – Minimale Ebenenzeit)

### **Verwendung**
Durch die Verwendung der maximalen Lüftergeschwindigkeit können Schichten mit kurzer Druckzeit schneller abkühlen und sich verfestigen, bevor die nächste Schicht darüber gelegt wird, und somit ein Durchhängen verhindert.