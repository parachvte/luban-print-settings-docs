Normale Schicht Lüftergeschwindigkeit 
====
### **Beschreibung**
Normale Lüftergeschwindigkeit auf Ebene konfiguriert die Ebene, bei der die Lüftergeschwindigkeit von der anfänglichen Lüftergeschwindigkeit auf die normale Lüftergeschwindigkeit übergeht.

Zu Beginn des Drucks verwendet der Werkzeugkopf die niedrigere anfängliche Lüftergeschwindigkeit für die Anfangsschicht. Dann erhöht sich die Lüftergeschwindigkeit allmählich und erreicht schließlich die reguläre Lüftergeschwindigkeit auf der von Ihnen eingestellten Ebene. Wenn Sie beispielsweise die anfängliche Lüftergeschwindigkeit auf 0 %, die reguläre Lüftergeschwindigkeit auf 100 % und die reguläre Lüftergeschwindigkeit bei Ebene auf 6 einstellen, beginnt die Lüftergeschwindigkeit bei 0 % und steigt während des Druckens der ersten fünf kontinuierlich an Schichten und erreichen 100 % bei der sechsten Schicht.

![Welche Lüftergeschwindigkeit wird wo verwendet](../images/cool_fan_speed.svg)

### **Einfluss**
Normalerweise wird die anfängliche Lüftergeschwindigkeit erheblich niedriger eingestellt, um ein Verziehen zu verhindern und die Haftung der Bauplatte zu erhöhen. Nachdem die erste Schicht gedruckt wurde, kann es jedoch immer noch riskant sein, die Lüftergeschwindigkeit zu plötzlich zu erhöhen. Wenn die ersten Schichten zu schnell abkühlen, können sie dennoch schrumpfen und durch Scherreibung die erste Schicht nach oben ziehen, wodurch sich auch der Druck verzieht. Der Zweck dieser Einstellung besteht darin, das Drucken mehrerer Schichten mit einer niedrigeren Lüftergeschwindigkeit zu ermöglichen. Auf diese Weise kann das Verziehen verhindert werden, bis der Druck ausreichend steif ist, um dem Verziehen zu widerstehen.

### **Verwendung**
* Eine Erhöhung dieser Einstellung kann die Betthaftung verbessern.
* Wenn Ihre Bauplatte auf eine hohe Temperatur erhitzt wird, müssen Sie diese Einstellung möglicherweise reduzieren, um dies zu verhindern [Elefantenfuß](../troubleshooting/elephants_foot.md) or oozing.