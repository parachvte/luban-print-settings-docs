Optimieren Sie die Reihenfolge des Wanddrucks
====
Wenn dies aktiviert ist, verbringt Luban etwas zus�tzliche Slicing-Zeit, um die Reihenfolge zu optimieren, in der die W�nde gedruckt werden. Ziel ist es, die Anzahl der Verfahr- und R�ckfahrbewegungen zu reduzieren, indem W�nde, die dasselbe Teil umgeben, nacheinander gedruckt werden.

![Optimierung deaktiviert](../images/optimize_wall_printing_order_disabled.gif)
![Optimierung aktiviert](../images/optimize_wall_printing_order_enabled.gif)

Wenn diese Optimierung aktiviert ist, druckt die D�se zuerst alle W�nde um ein Teil herum, bevor sie zum n�chsten Teil �bergeht, anstatt zuerst alle Innenw�nde zu drucken, bevor sie die Au�enw�nde drucken. Optimieren ist in der Regel positiv, kann sich aber bei manchen Teilen auf die Ma�haltigkeit auswirken, da die vorherige Wand noch nicht verfestigt ist, wenn die n�chste daneben platziert wird.