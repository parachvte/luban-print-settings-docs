Unterstützungsentfernungspriorität
====
Es kommt häufig vor, dass der X/Y-Abstand der Stütze und der Z-Abstand der Stütze miteinander in Konflikt stehen. Die Einstellung Support Distance Priority wird verwendet, um die Präferenz zwischen den beiden zu bestimmen.

X/Y überschreibt Z
----
![X/Y überschreibt Z](../images/support_xy_overrides_z.svg)

Wenn der X/Y-Abstand den Z-Abstand überschreibt, wird der X/Y-Abstand immer konstant gehalten, selbst wenn sich dadurch der Z-Abstand auf verschiedenen Ebenen ändert. Der Z-Abstand wird jedoch immer noch als Mindestabstand gehalten. Wenn der Überhang also sehr horizontal ist, tritt der Z-Abstand immer noch ein, wodurch der X/Y-Abstand größer als gewünscht wird.

Z überschreibt X/Y
----
![Z überschreibt X/Y](../images/support_z_overrides_xy.svg)

Wenn die Z-Distanz die X/Y-Distanz überschreibt, wird die Z-Distanz immer konstant gehalten, selbst wenn dies bedeutet, dass sich die X/Y-Distanz auf verschiedenen Ebenen ändert. Der X/Y-Abstand hat dann nur dort Einfluss auf den Druck, wo der Z-Abstand nicht ins Spiel kommt, nicht oben an den Stützstrukturen, sondern nur an den Seiten.

Ein minimaler X/Y-Abstand wird dennoch eingehalten. Wenn der Überhang sehr senkrecht ist, würde der X/Y-Abstand so klein werden, dass die Stütze mit den Seiten des Modells verschmelzen könnte. Der [Mindestabstand X/Y](support_xy_distance_overhang.md) verhindert dies.