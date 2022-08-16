Wipe Inactive Nozzle on Prime Tower
====
### **Description**
If this parameter is activated, the printer will wipe off the previous nozzle after priming the next one in the prime tower.

The order of events will be as follows if this parameter is enabled:
1. The printer switches to the new Extruder A.
2. Extruder A is primed by printing the prime tower.
3. Extruder B that was active before switch is wiped on the prime tower.
4. The printer continues printing the model with Extruder A.

### **Influence**
With this setting enabled, an extruder will wipe its nozzle right after being switched off.

This setting allows the ooze that dribbled out to be wiped off in the middle of the prime tower, so that it doesn't end up on the side of your printed model.