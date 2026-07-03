+++
title = "Architecture Quantum"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

An **architecture quantum** is the smallest part of a system that can run independently — establishing the scope for a set of architectural characteristics. The concept was introduced in _Building Evolutionary Architectures_ and elaborated in _Fundamentals of Software Architecture, 2E_ to provide a measure of structural evolvability.

{{< gbox src="/img/fundamentals-software-architecture/arch-quantum-properties.png" title="Architecture Quantum — four defining properties" caption="Independent deployability, high functional cohesion, low static coupling, synchronous communication. Source: Richards & Ford, FSA 2E Ch.7" pos="left" >}}

{{< gbox src="/img/fundamentals-software-architecture/arch-quantum-coupling.png" title="Architecture Quantum — coupling taxonomy" caption="Static / dynamic / implementation / semantic coupling and how they manifest. Source: Richards & Ford, FSA 2E Ch.7" pos="left" >}}

An architecture quantum has four defining properties:

1.  **Independent deployment** — includes all necessary components to function without other quanta; a shared database means a quantum of one.
2.  **High functional cohesion** — does something purposeful; typically maps to a bounded context.
3.  **Low external implementation static coupling** — quanta should have few dependencies on one another; tight coupling is acceptable within a quantum, but broad-scope coupling should be loose.
4.  **Synchronous communication** — quanta communicate synchronously with each other; async communication (via message queues) has less operational impact because the queue acts as a buffer.

The rule of thumb: **higher coupling is allowed for narrower scopes; the broader the scope, the looser the coupling should be.**


## Types of coupling {#types-of-coupling}


### Semantic coupling {#semantic-coupling}

The natural coupling of the problem domain. Changes to domain requirements ripple through the architecture regardless of structure — no architecture pattern prevents this.


### Implementation coupling {#implementation-coupling}

How the team decides to implement dependencies — single database vs split data, monolith vs distributed. Little effect on semantic coupling but greatly affects architectural decisions.


### Static coupling {#static-coupling}

The structural "wiring": which services depend on which others. Two services sharing the same relational database are in the same quantum. Changing one statically-coupled component might break the other.


### Dynamic coupling {#dynamic-coupling}

Forces at runtime when quanta communicate. Synchronous calls (REST, RPC) create tighter dynamic coupling than asynchronous calls. Covered in depth in event-driven architecture.


## Bounded contexts and DDD {#bounded-contexts-and-ddd}

The architecture quantum concept aligns with Eric Evans's bounded context: everything related to a domain portion is visible internally but opaque externally. Each service in microservices architecture is its own quantum with its own database, maximising per-service operational characteristics.


## Using quanta to choose an architecture style {#using-quanta-to-choose-an-architecture-style}

The "Going Green" kata yields three clusters of characteristics:

-   **Public-facing** (kiosks/website): scalability, availability, agility
-   **Back-office**: security, data integrity, auditability
-   **Assessment engine**: maintainability, deployability, testability

These three clusters map to three separate quanta. Use characteristic clusters as a guide for separating quantum boundaries, then choose the architecture style.

Decision flow:

1.  Does the system need multiple groups of characteristics? → Yes: distributed; No: monolithic
2.  If distributed: determine quantum boundaries from characteristic clusters
3.  Choose persistence topology (shared vs per-service)
4.  Choose communication style: synchronous or asynchronous


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 7: architecture quantum definition, DDD bounded context, semantic/implementation/static/dynamic coupling taxonomy, quantum-based decision tree, Going Green kata
