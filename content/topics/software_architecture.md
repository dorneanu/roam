+++
title = "Software Architecture"
draft = false
+++

## Definition {#definition}

-   The architecture of a software system is the shape given to that system by those who build it. The form of that shape is in the division of that system into components, the arrangement of those components, and the ways in which those components communicate with each other.


## Goals {#goals}

-   leave as many options open as possible, for as long as possible
-   minimize lifetime cost of the system and maximize programmer productivity
-   support life cycle of the system ()
-   makes the system easy to understand, easy to develop, easy to maintain and easy to deploy
-   low-level components depend on high-level components ([Dependency Inversion Principle]({{< relref "solid.md#dependency-inversion-principle" >}}))
    -   reduces impact of change
        -   trivial but urgent changes at the lowest levels of the system have little to no impact on the higher, more important, levels
-   centered on so that can describe the structures supporting those use cases without committing to frameworks/tools/environments


## Consists of {#consists-of}

-   policies
    -   business rules and procedures
    -   where the true value of the system lives
-   details


## Roles {#roles}

-   [Role of the Software Architect]({{< relref "software_architect.md" >}})


## Additional literature {#additional-literature}

-   [Object-Oriented Software Engineering by Ivar Jacobson](https://www.goodreads.com/book/show/296981.Object_Oriented_Software_Engineering)


## Resource {#resource}

-   2022-11-07 ◦ [GitHub - mehdihadeli/awesome-software-architecture: A curated list of awesome articles, videos, and other resources to learn and practice software architecture, patterns, and principles.](https://github.com/mehdihadeli/awesome-software-architecture)
-   2022-11-07 [Road Movie Architecture](https://speakerdeck.com/ufried/road-movie-architectures)
