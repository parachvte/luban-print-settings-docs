Travel Speed
====
### **Description**
This setting configures the speed at which the toolhead moves when it's not extruding any material.

![Various structures printed at different speeds](../images/speed_difference.png)

### **Influence**
The Travel Speed is generally much higher than any other speed setting. Some effects of increasing the Travel Speed include:
* A higher Travel Speed can slightly reduce the printing time.
* Increasing the Travel Speed will reduce the time that the filament has to ooze out of the material, making a cleaner part overall with smaller blobs due to oozing.
* However, increasing the Travel Speed also tends to make the printer vibrate more, which increases ringing. 
* Increasing the Travel Speed increases the chance of your print being knocked over, especially if [combing](../travel/retraction_combing.md) is disabled.
* When taken to extreme speeds, the motors of the printer might also lose some steps, causing a layer shift.

### **Usage**
**The Travel Speed has less of an effect on the total printing time than most people assume. This is because the travel time is usually only a small fraction of the total printing time, and because it takes a long time for the high speeds are reached, being limited mostly by acceleration rather than maximum speed.**