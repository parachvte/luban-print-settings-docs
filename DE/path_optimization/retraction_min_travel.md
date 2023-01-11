Retraction Minimum Travel
====
This setting prevents the material from retracting for very short travel moves. During those travel moves there is very little time for the material to ooze out of the nozzle anyway, so retracting would do more harm than good.

![The shortest travel move in the middle is not retracted](../images/retraction_min_travel.png)

Retracting the material is intended to prevent stringing. Very short travel moves don't produce stringing, because the material has not yet had the time to flow out of the nozzle. For extremely short travel moves of one line width or so, there will even be no room for any stringing. On the other hand, retracting causes the nozzle to stand still for a short while, while the material is flowing. This will produce a blob on the position where retraction occurs. For those reasons it tends to be better to not retract when travelling short distances, even if those tracks are on visible parts of the model.

Increasing this setting too much will cause stringing in detailed parts of the model or where parts are close together.