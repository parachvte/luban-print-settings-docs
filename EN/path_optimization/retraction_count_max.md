Maximum Retraction Count
====
### **Description**
The feeder wheel needs to grip into the filament in order to move it properly. Retracting the material often tends to cause the feeder wheel to wear down the filament to the point where it can no longer grip the filament properly. This setting limits the number of retractions within a certain length of filament in order to prevent this grinding.

The setting indicates how often the filament is allowed to be retracted during the length of filament indicated by the [Minimum Extrusion Distance Window](retraction_extrusion_window.md) setting. Any further retractions during this window will not retract, but just travel without retracting.

![Visualisation of retractions during a certain length of filament](../images/retraction_count_max.svg)

The length of filament during which the number of retractions is limited is a sliding window. For instance, with a window length of 3 mm and a maximum retraction count of 10, this means that no more than 10 retractions can be made within the 3 mm of filament.

### **Usage**
Reducing the maximum retraction count will reduce grinding on the filament. This is useful for softer materials, such as PVA. However it will also increase stringing, because it might no longer retract in some necessary positions.