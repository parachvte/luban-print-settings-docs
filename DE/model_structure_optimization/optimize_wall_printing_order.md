Optimieren Sie die Reihenfolge des Wanddrucks
====
Wenn dies aktiviert ist, verbringt Luban etwas zusätzliche Slicing-Zeit, um die Reihenfolge zu optimieren, in der die Wände gedruckt werden. Ziel ist es, die Anzahl der Verfahr- und Rückfahrbewegungen zu reduzieren, indem Wände, die dasselbe Teil umgeben, nacheinander gedruckt werden.

![Optimierung deaktiviert](../images/optimize_wall_printing_order_disabled.gif)
![Optimierung aktiviert](../images/optimize_wall_printing_order_enabled.gif)

Wenn diese Optimierung aktiviert ist, druckt die Düse zuerst alle Wände um ein Teil herum, bevor sie zum nächsten Teil übergeht, anstatt zuerst alle Innenwände zu drucken, bevor sie die Außenwände drucken. Optimieren ist in der Regel positiv, kann sich aber bei manchen Teilen auf die Maßhaltigkeit auswirken, da die vorherige Wand noch nicht verfestigt ist, wenn die nächste daneben platziert wird.