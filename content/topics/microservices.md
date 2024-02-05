+++
title = "Microservices"
author = ["Victor Dorneanu"]
tags = ["microservices"]
draft = false
+++

Definition

> The basic concept of a microservice is simple---it's a simple, standalone application that does one thing only and does that one thing well. The objective is to retain the simplicity, isolation, and productivity of the early app. A microservice cannot live alone; no microservice is an island---it is part of a larger system, running and working alongside other microservices to accomplish what would normally be handled by one large standalone application.
> -- [Hands-On Software Architecture with Golang]({{< relref "../books/hands_on_software_architecture_with_golang.md" >}})


## Definition {#definition}

-   Each microservice is:
    -   autonomous
    -   independent
    -   self-contained
    -   and individually deployable
    -   and scalable.


## Concepts {#concepts}

-   Independent deployability
    -   criteria for this: make sure microservices are loosely coupled
        -   be able to change one service without having to change anything else
-   Modeled around a business domain
    -   definition of service boundaries (see [DDD]({{< relref "ddd.md" >}}))
-   Owning their own state
    -   hide internal state (same as encapsulation in [OOP]({{< relref "oop.md" >}}))
    -   clean delineation between internal implementation details and external contract
        -   be backward-compatible
    -   hide database that backs the service
        -   avoid DB showing
-   Size

    > "A microservice should be as big as my head" - James Lewis

    -   keep it to the size at which it can be easily understood
-   Flexibility

    > "Microservices buy you options" - James Lewis

    -   they have a cost and you must decide whether the cost is worth the options you want to take up
-   Alignment of architecture and organization
    -   [Conway's Law]({{< relref "conway_s_law.md" >}})
    -   have team vertically organized
        -   same team owns front-end, business logic, data, back-end, security
            -   a so called stream-aligned team


## Advantages {#advantages}

-   use the componentization strategy
    -   divide and rule more effectively
    -   with clear boundaries between components.
-   create the right tool for each job in a microservice
-   testability
-   improved developer productivity and feature velocity.


## Resources {#resources}

-   from [Building Microservices (2nd edition)]({{< relref "../books/building_microservices_2nd_edition.md" >}})


### Articles {#articles}

-   2024-02-01 ◦ [The False Dichotomy of Monolith vs. Microservices](https://www.infoq.com/articles/monolith-versus-microservices/)
-   2023-10-04 ◦ [The Complete Microservices Guide - DEV Community](https://dev.to/amplication/the-complete-microservices-guide-5d64)
-   2022-12-15 ◦ [Sam Newman: Practical Implications of Microservices in 14 Tips](https://www.infoq.com/articles/microservices-practical-tips/) (old but still good)
-   2022-09-13 ◦ [Event Storming to split Monolith into Microservices](https://dev.to/kanekotic/event-storming-to-split-monolith-into-microservices-17eo)
-   2022-09-06 ◦ [Common mistakes when splitting the monolith](https://dev.to/kanekotic/common-mistakes-when-splitting-the-monolith-j1)
-   2022-08-25 ◦ [Design patterns for microservices - Azure Architecture Center | Microsoft Docs](https://docs.microsoft.com/en-us/azure/architecture/microservices/design/patterns)
