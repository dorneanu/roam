+++
title = "DDD"
draft = false
+++

## Concepts {#concepts}


### Ubiquitous language {#ubiquitous-language}

-   use the same terms in code as the user use
-   have **common** language between delivery team and actual people (aka customers)
    -   helps to understand business by logic
    -   helps with communication
-   use real-world language in code


### Aggregates {#aggregates}

-   a representatino of real domain concept
    -   something like an `Order`, an `Invoice`, `Stock Item`
-   aggregates typically have an information cycle around them
-   in general
    -   aggregate as something that has
        -   state
        -   identity
        -   information cycle
            -   that will be managed as part of the system
-   aggregates can have relationships to other aggregates


### Bounded context {#bounded-context}

-   a larger organizational boundary
    -   within it explicit responsibilities need to be carried out
-   bounded contexts hide implementation details ()
-   bounded contexts contain `1-n` aggregates
    -   some aggregates may be exposed outside the bounded context
    -   others may be hidden internally


### Event Storming {#event-storming}

-   collaborative brainstorming exercise designed to help design a domain model
-   invented by [Alberto Brandolini](https://www.eventstorming.com/)


## Boundaries between microservices {#boundaries-between-microservices}

-   There are some factors when defining clear boundaries between [Microservices]({{< relref "microservices.md" >}})
    -   volatility
    -   data
        -   also with concern to security
    -   technology
    -   organizational
        -   Layering Inside vs Layering Outside


## Resources {#resources}

-   2023-03-13 ◦ [A gentle introduction to Domain Driven Design | by The Lone Architect | Medium](https://blog.thelonearchitect.com/a-gentle-introduction-to-domain-driven-design-dc7cc169b1d)
-   2022-12-01 ◦ [Michael Plöd (@mploed) on Speaker Deck](https://speakerdeck.com/mploed)
    -   [Hands-on Domain-driven Design - by Example](https://leanpub.com/ddd-by-example) (on leanpub)
    -   writes about DDD in general
