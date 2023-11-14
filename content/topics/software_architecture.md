+++
title = "Software Architecture"
author = ["Cyneox"]
tags = ["architecture"]
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
    -   Also check out [awesome-architecture.com](https://awesome-architecture.com/)
-   2022-11-07 [Road Movie Architecture](https://speakerdeck.com/ufried/road-movie-architectures)


### Books {#books}

-   2023-11-06 ◦ [mhadidg/software-architecture-books: A comprehensive list of books on Software Architecture](https://github.com/mhadidg/software-architecture-books)


### Articles {#articles}

-   2023-07-12 ◦ [How To Design Software Architecture For Startups](https://appventuretime.blog/how-to-design-software-architecture-for-startups)
-   2023-03-27 ◦ [Architects, Anti-Patterns, and Organizational Fuckery – charity.wtf](https://charity.wtf/2023/03/09/architects-anti-patterns-and-organizational-fuckery/)


### Talks {#talks}

-   2023-10-25 ◦ [Software Architecture, Team Topologies &amp; Complexity Science • James Lewis • YOW! 2022](https://www.youtube.com/watch?v=QfM38-I_Ea8)
