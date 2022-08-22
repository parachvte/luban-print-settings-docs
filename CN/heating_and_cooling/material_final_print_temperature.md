最终打印温度
====
### **参数描述**
最终打印温度是指在双挤出打印过程中，当前喷嘴即将结束一轮打印并进入待机模式时的温度。

通常，我们会将最终打印温度设置成略低于正常打印温度。这样做的效果是，喷嘴会在挤出机快要完成一轮打印之前就开始冷却，当挤出机完成一轮打印准备切换的时候，喷嘴恰好冷却到最终打印温度。喷嘴切换下去之后，将继续冷却至待机温度。

![The moment to start cooling down (precool) is calculated such that the nozzle can cool down to the Final Printing Temperature when the nozzle switch happens](../images/temperature_regulation.svg)

### **参数使用**
如果最终打印温度略低于正常打印温度，则喷嘴进入待机状态后，不会渗出过多材料。