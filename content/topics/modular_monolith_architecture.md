+++
title = "Modular Monolith Architecture"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

The **modular monolith** architectural style is a _domain-partitioned_ monolithic architecture: a single deployment unit where functionality is grouped by domain rather than technical capability. Its isomorphic shape: _a single deployment unit with functionality grouped by domain area._

Added to _Fundamentals of Software Architecture_ 2nd edition (2025) due to the surge in popularity driven by DDD adoption. In the layered architecture, a customer profile component lives at `com.app.presentation.customer.profile` (third node = technical concern). In the modular monolith, it lives at `com.app.customer.profile` (third node = domain concern).


## Structural options {#structural-options}


### Monolithic structure {#monolithic-structure}

All modules in a single source-code repository, deployed as one unit. Simplest option but requires strict governance — developers tend to leak code across module boundaries, degrading the architecture toward a Big Ball of Mud.


### Modular structure {#modular-structure}

Each module is a self-contained artifact (JAR, DLL), assembled into a single deployment at build time. Cleaner boundaries; each module can live in its own repository. Disadvantage: interdependent modules create DLL Hell / JAR Hell.


## Module communication {#module-communication}

Inter-module communication should be minimised. Two options:

-   **Peer-to-peer**: direct class instantiation across modules. Simple but dangerous — too easy to erode boundaries.
-   **Mediator approach**: a mediator component routes requests between modules; modules don't know about each other. Trade-off: every module is coupled to the mediator.


## Governance {#governance}

Tools: ArchUnit (Java), ArchUnitNet / NetArchTest (.NET), PyTestArch (Python), TSArch (TypeScript).

1.  **Module compliance**: ensure all source code falls under a declared module namespace
2.  **Coupling limits**: limit total inter-module dependency points (e.g. max 5 per module)
3.  **Restricted dependencies**: prohibit specific module-to-module calls (e.g. OrderPlacement must not call Shipping)


## Characteristics scorecard {#characteristics-scorecard}

Primary strengths: cost, simplicity, modularity. Deployability/testability rate slightly higher than layered (due to domain modularity) but still limited by monolithic deployment. Scalability/elasticity one-star — monolith cannot scale individual modules independently.


## When to use {#when-to-use}

-   Tight budget/time constraints
-   New systems with unclear architectural direction (start here, migrate later)
-   Domain-focused, cross-functional teams
-   Systems where most changes are domain-based
-   Teams practicing DDD


## When not to use {#when-not-to-use}

-   High operational characteristic requirements (scalability, elasticity, availability, fault tolerance)
-   Majority of changes are technically oriented (changing UI framework or database technology impacts every module — use layered architecture instead)


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 11: topology, monolithic vs modular structure, module communication (peer-to-peer vs mediator), DLL/JAR Hell, governance pseudocode and ArchUnit examples, characteristics scorecard, EasyMeals worked example, when to use/not use
