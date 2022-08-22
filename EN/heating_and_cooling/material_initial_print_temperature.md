Initial Printing Temperature
====
### **Description**
Initial Printing Temperature refers to the temperature of the nozzle at the time when this nozzle is switched back and starts printing again in dual extrusion printing.

Generally, Initial Printing Temperature is set slightly lower than the normal printing temperature.
Then, after the printing starts, the nozzle temperature will quickly increase from the Initial Printing Temperature to normal printing temperature.

![The extruder switch happens at a slightly lower temperature than the normal printing temperature](../images/temperature_regulation.svg)

### **Usage**
Restarting the print at a slightly lower temperature is to reduce the amount of oozing when the nozzle is switching back. To restart the print, the nozzle needs to heat up from the Standby Temperature to a higher temperature at which the material can melt and be extruded properly. However, increasing temperature also cause the problem of oozing when the print has not started yet. Starting the print at a slightly lower temperature can reduce this oozing.