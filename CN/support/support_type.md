支撑放置
====
### **参数描述**
你可以通过本设置选择支撑放置的位置。

![Support is generated for all overhanging surfaces](../images/support_type_everywhere.png)
![Support is only generated where it can rest on the build plate](../images/support_type_touching_buildplate.png)

### **参数影响**
若允许支撑放置在任意位置，则所有会下垂的悬垂结构都能获得适当的支撑。不过，当支撑被放置在打印模型上时，可能会在模型与支撑接触的位置留下疤痕。这样会影响拆除支撑后模型的美观度和光滑度。

相反，只在打印平台放置支撑可以避免支撑被放置在打印模型上。不过，这样做可能会导致模型的一些部位不受支撑。

### **参数使用**
只在打印平台放置支撑时有一个技巧：尝试[启用锥形支撑](../experimental/support_conical_enabled.md)，并将[锥形支撑角度](../experimental/support_conical_angle.md)设为负值。这样可以让支撑即使生成于模型周围，仍然能支撑到大部分悬垂区域，无需放置在打印模型上。

当然，你也可以选择使用树形支撑。