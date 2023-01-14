Unterstützungstyp
====
Mit dieser Einstellung können Sie auswählen, welcher Algorithmus zur Konstruktion der Stützstrukturen verwendet werden soll. Diese Konstruktionen haben sehr unterschiedliche Eigenschaften, sodass die Wahl eines Algorithmus einen großen Einfluss darauf hat, wie gut Ihr Druck unterstützt wird. Es stehen drei Optionen zur Verfügung.

Normal
----

![Normale Stützkonstruktion](../images/support_type_everywhere.png)

Dies ist eine traditionelle Unterstützungsstruktur, an die die meisten Menschen gewöhnt sind. Die Struktur wird unter den überhängenden Bereichen erzeugt und typischerweise mit einem Muster gefüllt, das die überhängenden Bereiche direkt unterstützt. Von dort wird es direkt nach unten fallen gelassen, bis es die Bauplatte oder einen Teil des Modells erreicht, das es trägt.

Die normale Stützkonstruktion war die Standardeinstellung für die meisten 3D-Druckverfahren und funktioniert in allen Slicern ähnlich. Das ist der goldene Standard, und das nicht ohne Grund:

* Aufgrund seiner robusten Struktur mit großen Kontaktflächen auf dem Modell und der Bauplatte ist es sehr zuverlässig. Es ist sehr nachsichtig mit schlechten Einstellungen oder einem schlecht abgestimmten Drucker.
* Da die Form einfach ist, ist es schnell zu schneiden.
* Die gerade Stützstruktur ist für einen Benutzer einfach anzupassen, da sofort klar ist, welche Grenzen unterstützt werden und welche nicht.

Die wichtigsten Nachteile ergeben sich aus den gleichen Eigenschaften:

* Aufgrund der großen Kontaktflächen ist die Bandage oft schwer zu entfernen und kann erhebliche Narben auf der Oberfläche hinterlassen, wo sie berührt wurde.
* Obwohl es stabil ist, kann es viel Material verbrauchen und viel Zeit zum Drucken benötigen. Durch die Verwendung von [conical support](../experimental/conical_overhang_enabled.md) kann dem teilweise entgegengewirkt werden.

## Baum

![Baumunterstützung](../images/support_structure_tree.png)

Bei der Baumunterstützung beginnt die Stützstruktur auf der Bauplatte klein und lässt Äste zu den Teilen des Drucks wachsen, die gestützt werden müssen.

Baumstützen können Hindernisse vermeiden, wenn sie in Richtung der Überhangbereiche wachsen, da die Stütze nicht gerade nach unten fallen muss. Wenn möglich, ruht die Stütze nur auf der Bauplatte, um ein Verkratzen der Oberfläche, auf der die Stütze ruht, zu vermeiden. Wenn kein Weg von der Bauplatte zum Überhang vorhanden ist, ruht sie auf einer Oberfläche, die so nah wie möglich am Überhang liegt, um den Materialverbrauch zu minimieren. Die Äste der Baumstütze werden durch den [Tree Support Ast Angle](support_tree_angle.md) begrenzt, damit sie selbst keinen zu steilen Überhang erzeugen. Dies schränkt ihre Fähigkeit ein, um Hindernisse herum zu wachsen.

Die Baumstützenkonstruktion hat gegenüber der normalen Stütze eine Reihe großer Vorteile:

* Baumstütze verbraucht oft viel weniger Material als gewöhnliche Stütze. Zwischen 25 % und 50 % des Materialeinsatzes sind üblich. Das spart viel Zeit und reduziert die Druckkosten.
* Aufgrund seiner kleinen Kontaktfläche sieht der Überhang bei Verwendung von Baumstützen tendenziell besser aus.
* Auch aufgrund der kleinen Kontaktfläche lässt sich die Stütze leichter entfernen.
* Sie hinterlässt weniger Narben auf der Oberfläche als eine normale Stütze, da sie von der Bauplatte bis zum Überhang um das Modell herum reichen kann.

Die Hauptnachteile sind jedoch:

* Das Slicen dauert deutlich länger als bei normaler Stütze. Gerade bei großen Models ist Geduld gefragt.
* Es gibt viele Unterbrechungen im Fluss, wenn die kleinsten Äste gedruckt werden, was Baumstützen ungeeignet macht, um mit Materialien zu drucken, die schwer zu extrudieren sind, wie PVA oder flexible Materialien.
* Baumstützen neigen dazu, zu wenige Äste zu platzieren, um flache, geneigte Überhänge zu stützen.

Baumstütze ist standardmäßig hohl. Aufgrund ihrer gezackten Form ist die Baumstütze normalerweise ziemlich stabil. Die [Stützdichte] (support_infill_rate.md) kann verwendet werden, um der Stütze mehr strukturelle Festigkeit zu verleihen.

## Keine Unterstützung
----

Für das Modell wird keine Unterstützung generiert. Wenn diese Option ausgewählt ist, können die überhängenden Teile des Modells während des Druckens zusammenbrechen.