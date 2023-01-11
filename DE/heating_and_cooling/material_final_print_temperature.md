Endgültige Drucktemperatur
====
### **Beschreibung**
Endgültige Drucktemperatur bezieht sich auf die Temperatur der Düse zu dem Zeitpunkt, zu dem diese Düse im Begriff ist, eine Druckrunde zu beenden und beim Dual-Extrusionsdruck in den Standby-Modus überzugehen.

Im Allgemeinen wird die endgültige Drucktemperatur etwas niedriger als die normale Drucktemperatur eingestellt. Tatsächlich kühlt die Düse dadurch etwas früher ab, bevor der Extruder den Druckvorgang abgeschlossen hat. Die Druckendtemperatur wird genau dann erreicht, wenn der Extruder umgeschaltet wird. Danach kühlt es weiter auf die Standby-Temperatur ab.

![Der Moment, um mit dem Abkühlen zu beginnen (vorkühlen) wird so berechnet, dass die Düse beim Düsenwechsel auf die endgültige Drucktemperatur abkühlen kann](../images/temperature_regulation.svg)

### **Verwendung**
Wenn die Enddrucktemperatur etwas niedriger als die normale Drucktemperatur ist, tritt aus der Düse im Standby-Modus nicht so viel Material aus, während die andere Düse druckt.