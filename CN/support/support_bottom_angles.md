支撑底板走线方向
====
此参数可用于调整支撑底板的走线方向。

通常，支撑底板走线应尽可能与其上方的支撑主体和下方的模型表面的走线方向相互垂直。如果已自定义模型顶部走线方向或支撑走线方向，建议相应地调整支撑底板走线方向。

![Both the roof and floor angled at 0° and 90°](../images/support_interface_angles_0.png)
![Both the roof and floor angled at 45° and 135°](../images/support_interface_angles_45.png)

在设置此参数的时候，你可以输入多个角度值，以逗号分隔。Luban 将根据你设置的角度值在各层中交替变换走线方向。

理想情况下，支撑底板走线应垂直于依附的模型走线和依附其上的支撑走线。两个接触的面走线方向相互垂直可减少走线桥接的必要距离，从而减少下垂并提高支撑稳定性。