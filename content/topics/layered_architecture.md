+++
title = "Layered Architecture"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

The **layered** architecture style (also known as _n-tiered_) is one of the most common architecture styles — the de facto standard for many legacy applications due to simplicity, familiarity, and low cost. It is a **technically partitioned** architecture: components are separated by technical role rather than domain.

Risk: developers who "just start coding" often end up here by default — the _Architecture by Implication_ antipattern.

{{< gbox src="/img/fundamentals-software-architecture/layered-architecture.png" title="Layered Architecture topology" caption="4-layer stack (Presentation → Business → Persistence → DB), open/closed layers, Architecture Sinkhole antipattern bypass. Source: Richards & Ford, FSA 2E Ch.10" pos="left" >}}


## Topology {#topology}

Four standard layers:

1.  **Presentation** — UI and browser communication logic
2.  **Business** — business rules execution
3.  **Persistence** — ORM/SQL mapping
4.  **Database** — the database server

Physical deployment variants: all four in one unit; presentation separate from business+persistence; all separate.


## Layers of isolation {#layers-of-isolation}

Each layer can be **open** (requests may bypass it) or **closed** (requests must pass through it).

The **layers of isolation** principle: changes in one layer don't impact others, provided contracts are unchanged. This requires main request-handling layers to be closed.

**Architecture Sinkhole antipattern**: requests pass through layers with no processing — just object instantiation and SQL passthrough. Normal in small doses; if &gt;80% of requests are sinkholes, layered architecture may not be the right style.


## Governance {#governance}

Well-supported by ArchUnit (Java) and NetArchTest (.NET):

```java
layeredArchitecture()
    .layer("Controller").definedBy("..controller..")
    .layer("Service").definedBy("..service..")
    .layer("Persistence").definedBy("..persistence..")
    .whereLayer("Controller").mayNotBeAccessedByAnyLayer()
    .whereLayer("Service").mayOnlyBeAccessedByLayers("Controller")
    .whereLayer("Persistence").mayOnlyBeAccessedByLayers("Service")
```


## Characteristics scorecard {#characteristics-scorecard}

Lowest cost and simplest of all styles. Ratings degrade as the monolith grows. Deployability one-star (full redeployment for any change). Scalability/elasticity one-star (quantum always 1). No fault tolerance — one failure crashes the unit.


## When to use {#when-to-use}

-   Small, simple applications or websites
-   Very tight budget/time constraints
-   Starting point when evaluating more complex styles

Keep code reuse minimal and inheritance hierarchies shallow to ease future migration.


## When not to use {#when-not-to-use}

-   Large applications needing maintainability, agility, testability, or deployability
-   Anything requiring high scalability, elasticity, or fault tolerance


## Related {#related}

-   [Hexagonal Architecture]({{< relref "hexagonal_architecture.md" >}}) — ports &amp; adapters alternative
-   [Clean Architecture]({{< relref "../books/the_clean_architecture.md" >}}) — Uncle Bob's layered variant


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 10: four-layer topology, physical deployment variants, layers of isolation (open vs closed), Architecture Sinkhole antipattern, ArchUnit governance example, characteristics scorecard, when to use/not use, OS and OSI model as real-world examples
