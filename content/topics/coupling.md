+++
title = "Coupling"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Coupling measures the degree to which components in a software system depend on one another. High coupling means a change in one component is likely to require changes in others — making systems brittle and expensive to maintain. Coupling is one of the three key metrics for measuring , alongside cohesion and [connascence]({{< relref "connascence.md" >}}). The concept originates in Edward Yourdon and Larry Constantine's _Structured Design_ (1979) and was extended for object-oriented systems by Meilir Page-Jones.


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


## Governing coupling health with fitness functions {#governing-coupling-health-with-fitness-functions}

The distance-from-main-sequence metric can be enforced automatically using a — turning the metric from a diagnostic tool into a build gate. Using JDepend (Java):

```java
@Test
void AllPackages() {
  double ideal = 0.0;
  double tolerance = 0.5; // project-dependent
  Collection packages = jdepend.analyze();
  Iterator iter = packages.iterator();
  while (iter.hasNext()) {
    JavaPackage p = (JavaPackage)iter.next();
    assertEquals("Distance exceeded: " + p.getName(),
      ideal, p.distance(), tolerance);
  }
}
```

This establishes a per-package distance threshold; the build fails if any package drifts too far from the main sequence. ArchUnit provides similar capabilities with more expressive rule syntax.

Wiring these checks into CI means coupling health is governed continuously rather than periodically in code review — important because coupling degradation happens gradually and is invisible until structural damage is severe. See for the broader strategy.


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

Granularity decisions (how small to make services or components) are the primary coupling driver at the architecture level. See for the full picture.


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 3: afferent/efferent coupling, abstractness, instability, distance from main sequence, Zone of Pain/Uselessness; coupling as one of three modularity metrics; user annotation "ci: llm ingest coupling" (p. 141)
-   2026-06-18 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 6: distance-from-main-sequence fitness function (JDepend tolerance threshold per package); ArchUnit as more expressive alternative; wiring coupling health checks into CI as automated governance
