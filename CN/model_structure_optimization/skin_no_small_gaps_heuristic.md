Z 间隙内无皮肤
====
若您的打印模型中包含窄于顶部或底部皮肤厚度的狭小间隙，启用此项参数后，打印时将不会在间隙的上下两侧填充皮肤。此项参数可节省切片和打印时间，但可能会暴露填充物。

![Normally there is skin around the small horizontal slit](../images/skin_no_small_gaps_heuristic_disabled.png)
![If this is enabled, it doesn't properly close the skin](../images/skin_no_small_gaps_heuristic_enabled.png)

此参数的主要用途是节省切片时间。启用后，狭小间隙上下两侧不需要打印皮肤，其分辨率会大幅下降。取决于模型的形状，切片时间可缩短 5% 至 30%。同时，采取在狭小间隙内侧打印填充物来取代皮肤的做法还可以节省打印时间。若模型中不存在窄于皮肤厚度的间隙，那么此参数的唯一作用即为节省切片时间。

若模型中存在狭小间隙，启用此参数可能导致间隙处填充外露。但若间隙足够狭小，模型壁会受悬垂影响下垂，形成隐藏填充的效果。