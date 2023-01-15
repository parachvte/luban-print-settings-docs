Überhängender Wandwinkel
====
### **Beschreibung**
Diese Einstellung gibt den Schwellenwinkel an, ab dem eine Wand als „überhängende Wand“ markiert wird. Diese überhängenden Wände können mit der Einstellung [Overhanging Wall Speed](wall_overhang_speed_factor.md) mit einer anderen Geschwindigkeit gedruckt werden.

Wenn diese Einstellung auf 0° eingestellt ist, werden alle Wände als überhängende Wände behandelt. Wenn diese Einstellung auf 90° eingestellt ist, werden keine Wände als überhängende Wände behandelt. Auch Wände, die auf Stützen aufliegen, werden nicht als überhängende Wände behandelt.

Das Ziel dieser Funktion ist es, bessere Überhangqualitäten für Bereiche bereitzustellen, die fast von [support](../support/support_enable.md) unterstützt werden müssten, aber nicht ganz. Anstatt zusätzliche Zeit und Material für die Stütze aufzuwenden und die Oberfläche beim Entfernen dieser Stütze zu verkratzen, können Sie diese überhängenden Wände etwas langsamer drucken und den [Stützüberhangwinkel](../support/support_angle.md) etwas höher einstellen. Dadurch wird ein abgestufter Ansatz erreicht, um zunehmende Überhangwinkel besser zu drucken.

Wenn Sie diese Einstellung höher als den Stützwinkel einstellen, wird die Wirkung dieser Funktion erheblich reduziert, da Wände auf der Stütze nicht als überhängende Wände markiert werden und alle Wände, die in einem Überhangwinkel gedruckt werden, der als überhängende Wand angesehen würde, ebenfalls markiert würden unterstützt und nicht mit unterschiedlichen Geschwindigkeiten gedruckt. Diese Funktion wirkt sich jedoch auch dann aus, wenn die Unterstützung deaktiviert ist oder für Teile des Überhangs, die aus anderen Gründen nicht unterstützt werden, wie z. B. [Mindestunterstützungsbereich](../support_adv/minimum_support_area.md).