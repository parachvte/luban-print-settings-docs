Standby Temperature
====
### **Description**
Standby Temperature is the temperature of the stand-by nozzle during dual extrusion printing.

For printers that have more than one extruders, you can set Standby Temperature for each extruder. During dual extrusion printing, when one extruder is busy printing, the other extruder being inactive will use its standby temperature.

![While the blue extruder is printing, the red extruder cools down to the stand-by temperature](../images/temperature_regulation.svg)

### **Usage**
Generally, the Standby Temperature is set lower than the Printing Temperature. This is to prevent the nozzle from oozing out too much material in vain. 

Besides, if the nozzle temperature remains high while the extrusion motor does not move, the heat might extend back and upwards, melting the filament inside the motor. In this case, the gear will not be able to push forward the filament through the nozzle but chew a spot in the filament. This is known as “heat creep” and will cause your nozzle to clog.

However, if the Standby Temperature is set too low, the extruder will need more time to heat up to continue printing when the other extruders are done.

