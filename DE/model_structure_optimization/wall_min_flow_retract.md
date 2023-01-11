Prefer Retract
====
### **Description**
Compensating for wall overlaps will reduce the flow rate of some of the wall lines. If this flow rate gets below the value of the [Minimum Wall Flow](wall_min_flow.md) setting, a travel move is made instead of printing the wall line.

If this setting is enabled, the filament will be retracted during that travel move.

### **Usage**
The intended effect of this setting is to reduce oozing on the walls. The intent of the Minimum Wall Flow setting is to reduce the ooze from extremely thin walls which doesn't look nice. That can be improved even further by enabling Prefer Retract.

However retracting on the outer walls will cause the nozzle to pause momentarily while the filament is retracted. This leaves a blob on the surface where the retraction was made. It also increases printing time and wears down the filament faster.