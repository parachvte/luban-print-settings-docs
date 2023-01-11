Enable Retractions
====
### **Description**
When a 3D printer stops pushing material, the material won't immediately stop flowing from the end of the nozzle. The residual material in the nozzle will keep oozing out. To actually stop the material from flowing, the printer needs to retract the material backward from the nozzle opening. This is necessary to make clean travel moves without stringing.

![Retractions disabled](../images/retraction_enable_disabled.png)
![Retracted travel moves show as a lighter blue](../images/retraction_enable_enabled.png)

After you enable retractions, the extruder will retract material while making travel moves that are particularly sensitive to stringing. For travel moves that only pass through infill or from support to support, the extruder will not perform retraction. There is also a limit to how often the material can be retracted, through the [Maximum Retraction Count](retraction_count_max.md) and [Minimum Extrusion Distance Window](retraction_extrusion_window.md) settings.

Advantages of Retraction
* It'll reduce stringing significantly.
* It will significantly reduce the amount and size of blobs on the surface where the nozzle enters the perimeter of a part.

Disadvantages of Retraction
* It takes a bit of time to retract.
* The material flow gets interrupted when a retraction happens. This has negative consequences for dimensional accuracy, and may lead to underextrusion.
* The filament could wear down when too many retractions happen, preventing the feeder from gripping the material.

### **Usage**
Flexible materials are harder to retract, because pulling on the filament makes the filament stretch instead of retracting backward from the nozzle tip. It may be very time consuming and relatively ineffective to enable retraction with such materials.

