+++
title = "Distributed Systems"
draft = false
+++

-   Architecture
    -   Components: Modular units with well-defined interfaces (such as services and databases
    -   Interconnects: The communication links between the components (sometimes with the additional responsibility of mediation/coordination between components)
-   Quirks
    -   In 1994, Peter Deutsch, who worked at Sun Microsystems, wrote about common wrong assumptions that developers/architects make, which cause things to go wrong in distributed systems. In 1997, James Gosling added to this list to create what is commonly known as the eight fallacies of distributed computing. They are described here.
        -   The network is reliable
        -   The topology doesn't change
            -   What does this mean in terms of code? It means not assuming location (endpoints) for various services. We need to build in service discovery, so that clients of services can figure out how to reach a particular service. There are two ways clients can discover service endpoints:
        -   The bandwidth is infinite
        -   The latency is zero
            -   Caching values every programmer should know about: <https://gist.github.com/jboner/2841832>
        -   The network is secure
        -   There is one administrator
        -   The transport cost is zero
        -   The network is homogeneous
