+++
title = "Architecture Styles — Foundations"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

An **architectural style** describes a named set of characteristics that define an architecture's component topology, physical structure, deployment strategy, communication style, and data topology. Unlike a _pattern_ (a contextualized solution), a style describes the assumed and default characteristics — both beneficial and detrimental.

Architecture styles emerge bottom-up from the ecosystem. Microservices is the canonical example — it named an emergent approach, not a specification.

{{< gbox src="/img/fundamentals-software-architecture/arch-styles-partitioning.png" title="Technical vs Domain Partitioning" caption="Technical partitioning (layers) vs domain partitioning (components per domain). Source: Richards & Ford, FSA 2E Ch.9" pos="left" >}}


## Fundamental patterns {#fundamental-patterns}


### Big Ball of Mud (antipattern) {#big-ball-of-mud}

Defined by Foote and Yoder (1997): a haphazardly structured system where information is shared promiscuously and overall structure has eroded beyond recognition.

Consequences: any change has unpredictable rippling side effects; deployment, testability, scalability, and performance all suffer. Usually caused by a lack of governance around code quality and structure.


### Unitary architecture {#unitary-architecture}

Software and hardware as one entity. Still exists in embedded systems.


### Client/Server (two-tier) {#client-server}

Separates frontend from backend. Variants: desktop + database server; browser + web server; single-page app + API. Will always exist in some form.


### Three-tier {#three-tier}

Added an application tier. CORBA/DCOM-era protocol plumbing is gone, but the separation-of-concerns model persists. Historical note: Java's serialization was baked in because 1990s designers assumed three-tier would be permanent — it wasn't, but the legacy remains.


## Architecture partitioning {#architecture-partitioning}


### Technical partitioning {#technical-partitioning}

Top-level components organised by technical capability: Presentation, Business, Persistence. Aligns with MVC and layered architecture.

**Advantages**: easy to find code by category; natural separation of technical concerns.
**Disadvantages**: domains are smeared across all layers; doesn't fit DDD; Conway's Law pushes teams toward technical silos.


### Domain partitioning {#domain-partitioning}

Top-level components organised by domain/workflow. Aligns with modular monolith and microservices. Inspired by DDD bounded contexts.

**Advantages**: models business functions directly; enables cross-functional domain teams; easy to migrate to distributed architecture.
**Disadvantage**: customisation code appears in multiple places.

Industry trend: domain partitioning is now the dominant preference for both monolithic and distributed architectures.


## Conway's Law and team topologies {#conways-law}

> Organizations which design systems are constrained to produce designs which are copies of the communication structures of those organizations. — Melvin Conway, 1968

The **Inverse Conway Maneuver** (Jonny Leroy, Thoughtworks): evolve team structures intentionally toward the desired architecture. Now known as **team topologies**.

Skelton &amp; Pais (2019) define four team types: stream-aligned, enabling, complicated-subsystem, and platform.


## Fallacies of distributed computing {#fallacies-of-distributed-computing}

Originally listed by L. Peter Deutsch et al. (Sun Microsystems, 1994). All apply to modern distributed systems.

**The original eight:**

1.  The network is reliable
2.  Latency is zero
3.  Bandwidth is infinite
4.  The network is secure
5.  The topology never changes
6.  There is only one administrator
7.  Transport cost is zero
8.  The network is homogeneous

**Three extensions (Richards &amp; Ford):**

9.  Versioning is easy — teams often end up honoring dozens of versions
10. Compensating updates always work — the rollback can also fail; design for the failure of the failure handler
11. Observability is optional — logging is _critical_ in distributed architectures


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 9: styles vs patterns, Big Ball of Mud, historical architecture arc, technical vs domain partitioning, Silicon Sandwiches kata, Conway's Law + Inverse Conway Maneuver, monolithic vs distributed taxonomy, all 11 fallacies, Team Topologies four team types
