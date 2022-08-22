启用加速度控制
====
### **参数描述**
此设置决定执行头应以多快的速度加速。 

![A graph of the speed (V) over time when moving a nozzle back and forth. Acceleration is the slope of the line when it is starting, stopping or changing direction.](../images/velocity_acceleration_jerk.svg)

### **参数影响**
调高此设置会产生以下两种效果：
* 执行头将更快达到所需速度，进而实现更快的打印速度，尤其在打印小零件时。 

* 打印机振动加剧，进而降低打印件尺寸精度并产生水波纹。

### **参数使用**
通常，打印机会自行决定执行头变向和变速的速度，但启用此设置后，即可使用 Luban 来决定相关速度，以便针对打印件的各个特征设置不同的加速度。
