+++
title = "Coupling"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Coupling measures the degree to which components in a software system depend on one another. High coupling means a change in one component is likely to require changes in others — making systems brittle and expensive to maintain. Coupling is one of the three key metrics for measuring [modularity]({{< relref "modularity.md" >}}), alongside cohesion and [connascence]({{< relref "connascence.md" >}}). The concept originates in Edward Yourdon and Larry Constantine's _Structured Design_ (1979) and was extended for object-oriented systems by Meilir Page-Jones.


## Afferent and efferent coupling {#afferent-and-efferent-coupling}

The two primary coupling directions (both terms from _Structured Design_):

-   **Afferent coupling (Ca)**: the number of incoming connections to a code artifact — how many other components depend on this one. High afferent coupling makes a component influential but risky to change.
-   **Efferent coupling (Ce)**: the number of outgoing connections from a code artifact — how many components this one depends on. High efferent coupling makes a component fragile: if any dependency changes, this component may break.

Mnemonic: "a" comes before "e" in the alphabet, just as incoming comes before outgoing. "e" for efferent matches "e" for exit.


## Derived metrics (Robert C. Martin) {#derived-metrics--robert-c-dot-martin}


### Abstractness {#abstractness}

Ratio of abstract artifacts (interfaces, abstract classes) to all artifacts (abstract + concrete):

A = Σ abstract / (Σ concrete + Σ abstract)

A score near 0 = almost no abstractions (brittle); near 1 = all abstraction, no implementation (hard to use).


### Instability {#instability}

Ratio of efferent to total coupling:

I = Ce / (Ce + Ca)

High instability means the component is volatile — heavily dependent on others and thus easy to break when they change. Low instability (stable) means many things depend on this component, so it should change rarely.


### Distance from the Main Sequence {#distance-from-the-main-sequence}

A holistic health metric:

D = |A + I − 1|

Plots a component's position relative to the "main sequence" — the ideal relationship between abstractness and instability. Components far from the line fall into:

-   **Zone of Uselessness**: too abstract, too stable — no one uses these abstractions
-   **Zone of Pain**: too concrete, too unstable — tightly coupled implementation code that changes constantly


## Coupling types in object-oriented systems {#coupling-types-in-object-oriented-systems}

Yourdon and Constantine's vocabulary was designed for structured (procedural) programming. Object-oriented design requires a richer vocabulary: [connascence]({{< relref "connascence.md" >}}), introduced by Page-Jones, provides precise names for different coupling types in OO contexts (Connascence of Name, Type, Meaning, Position, Algorithm for static coupling; Execution, Timing, Values, Identity for dynamic coupling).


## Coupling and cohesion {#coupling-and-cohesion}

Coupling and cohesion are inversely related in practice: poorly cohesive modules that should be together but are split will require more inter-module calls, increasing coupling. As Larry Constantine observed:

> Attempting to divide a cohesive module would only result in increased coupling and decreased readability.

The goal is high cohesion within modules and low coupling between them.


## Coupling in architecture {#coupling-in-architecture}

At the architectural level, excessive coupling between services or components produces antipatterns:

-   Spaghetti Architecture
-   Distributed Monoliths
-   Big Ball of Distributed Mud

Granularity decisions (how small to make services or components) are the primary coupling driver at the architecture level. See [modularity]({{< relref "modularity.md" >}}) for the full picture.


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](</Apps/Dropbox PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub>) — Ch. 3: afferent/efferent coupling, abstractness, instability, distance from main sequence, Zone of Pain/Uselessness; coupling as one of three modularity metrics; user annotation "ci: llm ingest coupling" (p. 141)
