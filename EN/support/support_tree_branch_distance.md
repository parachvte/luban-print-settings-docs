Tree Support Branch Distance
====
### **Description**
This setting determines the distance between two adjacent branches where the branches touch the model.

![Branches placed 1.4mm apart](../images/support_tree_branch_distance_1_4.png)
![Branches placed 5mm apart](../images/support_tree_branch_distance_5.png)

Unlike Normal Support, the Tree Support does not support the model with a large flat roof. Instead, the tree support supports the model with sparse small branches, thus creating a lot of small contact points. By setting Tree Support Branch Distance, you can adjust how far apart each contact point are placed. 

### **Usage**
By reducing the branch distance, a better overhang quality can be achieved because the lines resting on top of the support won't need to bridge as far. The support will also be stiffer because more material will be used towards the top of the support, making the print more reliable.

However reducing the branch distance will also cause the support to take more material and printing time.

Reducing the branch distance below the [branch diameter](support_tree_branch_diameter.md) will cause the branches to merge before they could properly be formed. As a result the centre of large overhang areas may not get supported properly then.