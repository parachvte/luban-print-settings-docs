最小支撑面积
====
### **参数描述**
此参数规定支撑的最小面积。如果某一层上某个支撑的面积小于此参数的值，该支撑将被过滤。

![No filtering on area (minimum area is 0)](../images/minimum_support_area_0.png)
![Small pieces of support are left out](../images/minimum_support_area_10.png)

细支撑柱很容易倒塌。而且，依靠这些细支撑柱支撑的细小悬垂区域，或许在失去支撑后也能正常打印。而一旦支撑倒塌，打印件上将留下大量斑点。因此，最好不要使用这些细支撑。调节此参数可通过支撑横截面积过滤细支撑。

### **参数影响**
提高最小支撑面积将减少支撑的数量，从而略微缩短打印时间、节省打印材料；其更重要的作用是提高打印成功率，原因是支撑倒塌的可能性降低了。然而，这同时也会过滤打印件中细小悬垂的支撑，从而降低这些悬垂结构的打印质量。

对于某些形状而言，如果支撑顶部面积小于最小支撑面积，而支撑底部面积大于该值，那么支撑顶部将会被过滤掉，导致一些本应该得到支撑的部位失去支撑。

![The tip of the arc is not supported because the area on those layers is too small](../images/minimum_support_area_problem.png) 