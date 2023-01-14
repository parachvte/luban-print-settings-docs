Äußere vor inneren Wänden
====
Diese Einstellung bestimmt, welche Wände zuerst gedruckt werden, die äußere oder die innere Wand.

<!--screenshot {
"image_path": "outer_inset_first_disabled.gif",
"models": [{"script": "calendar_holder.scad"}],
"camera_position": [0, 0, 120],
"settings": {
    "skin_outline_count": 0,
    "outer_inset_first": false
},
"layer": 2,
"line": [0, 1, 2, 3, 4, 5, 6, 7, 8, 17, 23, 29, 35, 45, 51, 57, 63, 67, 68, 69, 70, 71, 72, 73, 74, 84, 90, 96, 102, 113, 119, 125, 131],
"delay": 125,
"colours": 32
}-->
<!--screenshot {
"image_path": "outer_inset_first_enabled.gif",
"models": [{"script": "calendar_holder.scad"}],
"camera_position": [0, 0, 120],
"settings": {
    "skin_outline_count": 0,
    "outer_inset_first": true
},
"layer": 2,
"line": [0, 1, 2, 3, 4, 5, 6, 7, 8, 18, 24, 30, 36, 47, 53, 59, 65, 70, 71, 72, 73, 74, 75, 76, 77, 86, 92, 98, 104, 114, 120, 126, 132],
"delay": 125,
"colours": 32
}-->
![Zuerst wird die Innenwand bedruckt](../images/outer_inset_first_disabled.gif)
![Zuerst wird die Außenwand bedruckt](../images/outer_inset_first_enabled.gif)

Die Aktivierung dieser Einstellung hat einen kleinen Einfluss auf die Qualität sowie die Maßhaltigkeit:
* Es verbessert die Maßhaltigkeit. Benachbarte Wände schieben sich im Allgemeinen ein wenig aneinander, insbesondere wenn die Wandlinienbreite kleiner als die Düsengröße ist. Die Wand, die zuerst gedruckt wird, ist verfestigt und wird dann nicht mehr so stark gedrückt. Wenn Sie also zuerst die Außenwand drucken, befindet sich Ihre Außenwand an einer genaueren Position.
* Wenn die Füllung vor den Wänden gedruckt wird, wird das Durchscheinen der Füllung auf der Oberfläche verringert. Andernfalls wird zuerst die Füllung gedruckt, dann die Innenwände, die durch die Füllung nach außen gedrückt werden, und dann die Außenwand, die durch die Innenwände nach außen gedrückt wird. Dadurch könnte auf der Außenseite ein Muster sichtbar sein. Wenn die Außenwand zuerst gedruckt wird, kann die Außenwand erstarren, bevor die Innenwand darauf drücken kann.
* Das Drucken der Außenwand zuerst ist im Allgemeinen schlechter für Überhänge. Die Außenwand ist weiter von der vorherigen Schicht entfernt als die Innenwand. Wenn Sie zuerst die Außenwand drucken, hat die Außenwand noch nichts zum Anfassen. Wenn die Innenwand zuerst bedruckt wird, kann die Außenwand seitlich an der Außenwand befestigt werden.