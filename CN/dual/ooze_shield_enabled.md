启用渗出罩
====
渗出罩是打印在模型周围的单层外壳，用于双喷头打印中，可擦拭待机喷嘴渗出的耗材。

双喷头打印时，处于待机状态的喷嘴在喷嘴温度冷却下来前可能会持续渗出耗材。该喷嘴再次启用后，喷嘴口渗出的材料可能会挂在打印件表面，影响美观。启用渗出罩可以防止这一问题。

在每一层的打印过程中，最先开始打印的挤出机会先环绕模型打印一圈渗出罩。挤出机切换时，从待机状态切换回来的另一个挤出机将在渗出罩上擦拭喷嘴，从而避免渗出的耗材粘到模型表面。

![The ooze shield gets printed with the first extruder of a layer, causing an alternating pattern if printing with two extruders](../images/ooze_shield.png)
![Some parameters can be adjusted for the ooze shield](../images/ooze_shield.svg)

渗出罩的高度不超过挤出机切换的最大高度。在此高度之上，剩余模型仅需由一个挤出机进行打印，不再发生挤出机切换，因此也就不再需要打印渗出罩了。

渗出罩厚度很薄，便于切割和拆除；且与打印模型保持一定距离，不会损坏模型表面。