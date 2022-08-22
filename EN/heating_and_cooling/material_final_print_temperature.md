Final Printing Temperature
====
### **Description**
Final Printing Temperature refers to the temperature of the nozzle at the time when this nozzle is about to end a turn of printing and enter stand-by mode in dual extrusion printing. 

Generally, Final Printing Temperature is set slightly lower than the normal printing temperature. In effect, this causes the nozzle to cool down slightly earlier before the extruder has completed printing. The Final Printing Temperature is reached exactly when the extruder switch happens. After that, it will continue cooling down towards the standby temperature.

![The moment to start cooling down (precool) is calculated such that the nozzle can cool down to the Final Printing Temperature when the nozzle switch happens](../images/temperature_regulation.svg)

### **Usage**
If the Final Print Temperature temperature is slightly lower than the normal printing temperature, the nozzle won't ooze as much material on standby while the other nozzle is printing.