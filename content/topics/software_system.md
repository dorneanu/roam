+++
title = "Software System"
draft = false
+++

-   Every software system provides two different values to the stakeholders:
    -   behavior
    -   structure
-   Software developers are responsible for ensuring that both those values remain high.
-   Unfortunately, they often focus on one to the exclusion of the other. Even more unfortunately, they often focus on the lesser of the two values, leaving the software system eventually valueless.
-   What programmers are
    -   Programmers are hired to make machines behave in a way that makes or saves money for the stakeholders. We do this by helping the stakeholders develop a functional specification, or requirements document. Then we write the code that causes the stakeholder's machines to satisfy those requirements
-   must be developed by an organization with many teams
    -   they have many concerns that require a that facilitates independent actions by those teams
        -   this is done by seggregating the system into well-isolated, independently developable components
    -   this way you can continue to add new w/o interfering with old ones ([Open-Close Principle]({{< relref "solid.md#open-close-principle" >}}))