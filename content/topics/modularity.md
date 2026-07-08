+++
title = "Modularity"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Modularity is an organizing principle in software architecture: a logical grouping of related code (classes, functions, or any other grouping) that doesn't necessarily imply physical separation. Modularity is distinct from granularity — modularity is about breaking systems apart into smaller pieces; granularity is about the size of those pieces. Architects focus on modularity because software systems, like physical systems, tend toward entropy — structural soundness requires constant deliberate effort. As Glenford J. Myers observed in 1978: "95% of the words written about software architecture are spent extolling the benefits of 'modularity' and little, if anything, is said about how to achieve it."

> Embrace modularity, but beware of granularity.
>
> Mark Richards

Excessive granularity (over-splitting into too-small components) leads to antipatterns: Spaghetti Architecture, Distributed Monoliths, Big Ball of Distributed Mud. Modularity is itself an implicit [architectural characteristic]({{< relref "architectural_characteristics.md" >}}) — rarely specified in requirements yet essential for sustainable codebases.


## Modularity vs granularity {#modularity-vs-granularity}

-   **Modularity**: breaking systems into smaller pieces (e.g. monolith → microservices)
-   **Granularity**: the size of those pieces — how large or small a service or component should be

The trouble arises from over-granularity: services that are too small become coupled to one another, recreating the very coupling they were supposed to eliminate.


## Measuring modularity {#measuring-modularity}

Architects use three key concepts to measure modularity:


### Cohesion {#cohesion}

How related the parts of a module are to one another. An ideal cohesive module packages everything it needs; splitting it would require cross-module calls. Seven types, from best to worst:

1.  **Functional** — every part is related and the module contains everything it needs
2.  **Sequential** — one module's output is another's input
3.  **Communicational** — modules share data or contribute to the same output
4.  **Procedural** — modules must execute in a particular order
5.  **Temporal** — modules are related by timing (e.g. startup initialization tasks)
6.  **Logical** — data within the module is related logically but not functionally (e.g. `StringUtils`)
7.  **Coincidental** — elements are unrelated; they just happen to live in the same file

The LCOM (Lack of Cohesion in Methods) metric measures structural cohesion. A high LCOM score indicates that a class could be split without loss. LCOM cannot detect logical cohesion — only structural patterns. See [architectural characteristics]({{< relref "architectural_characteristics.md" >}}) note on why metrics require interpretation.


### Coupling {#coupling}

How many incoming and outgoing dependencies a component has:

-   **Afferent coupling (Ca)**: incoming connections — how many things depend on this component
-   **Efferent coupling (Ce)**: outgoing connections — how many things this component depends on

Derived metrics (Robert C. Martin):

-   **Abstractness (A)** = abstract artifacts / (concrete + abstract artifacts) — ratio of abstractions to implementations
-   **Instability (I)** = Ce / (Ce + Ca) — volatility; high instability means easy breakage on change
-   **Distance from Main Sequence (D)** = |A + I − 1| — how well-balanced a component is between abstraction and stability
    -   Zone of Uselessness: too abstract, hard to use
    -   Zone of Pain: too concrete, brittle and hard to maintain

See also [coupling]({{< relref "coupling.md" >}}).


### Connascence {#connascence}

A more precise vocabulary for describing coupling in object-oriented systems — see [connascence]({{< relref "connascence.md" >}}).


## Governing modularity with fitness functions {#governing-modularity-with-fitness-functions}

Modularity is important but not urgent — the first casualty under schedule pressure. IDE auto-import features make it trivially easy for developers to create unintended cross-component dependencies without thinking about it. [Fitness functions]({{< relref "fitness_functions.md" >}}) provide automated governance:


### Cyclic dependency fitness function {#cyclic-dependency-fitness-function}

Cyclic dependencies (component A depends on B, B depends on C, C depends on A) are a particularly damaging antipattern: no component in the cycle can be reused without dragging in the others, pulling the codebase toward Big Ball of Mud. A JDepend-based fitness function wired into CI detects cycles automatically:

```java
@Test
void testAllPackages() {
  Collection packages = jdepend.analyze();
  assertEquals("Cycles exist", false, jdepend.containsCycles());
}
```

This turns a "review it and hope" concern into a hard build failure on every commit.


### ArchUnit layer governance {#archunit-layer-governance}

For layered architectures, ArchUnit (Java) or NetArchTest (.NET) can enforce that components only call their permitted neighbours (e.g. Controller → Service → Persistence, never skipping). This prevents architectural erosion where developers shortcut layers for local performance reasons.

See for the broader tool landscape and governance philosophy.


## Cyclomatic Complexity {#cyclomatic-complexity}

Beyond coupling and cohesion, code complexity itself threatens modularity. Cyclomatic Complexity (CC), defined by Thomas McCabe Sr. in 1976, measures decision-point density: CC = E − N + 2 (edges minus nodes plus 2). Guidelines:

-   CC &lt; 5: cohesive, well-factored (preferred threshold)
-   CC &lt; 10: generally acceptable
-   CC &gt; 50: no amount of test coverage compensates for the structural problems

Overly complex code harms modularity, testability, deployability, and every other desirable characteristic. Test-driven development (TDD) has the beneficial side effect of generating smaller, less complex methods.


## Historical context {#historical-context}

Modular languages (Modula, Ada) appeared in the mid-1980s as structured programming evolved, before object-oriented languages eclipsed them. Java's package mechanism, .NET namespaces, and similar constructs are the modern descendants of module systems. The concept predates OOP and remains relevant across all paradigms.


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/fundamentals_of_software_architecture.md" >}}) — Ch. 3: full treatment of modularity, granularity vs modularity, cohesion types, coupling metrics (afferent/efferent, abstractness, instability, distance from main sequence), and connascence as the three measurement tools; quotes Myers 1978 and Constantine on cohesion
-   2026-06-18 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/fundamentals_of_software_architecture.md" >}}) — Ch. 6: cyclic dependency antipattern and JDepend fitness function; ArchUnit / NetArchTest for layer governance; Cyclomatic Complexity metric (CC = E − N + 2); TDD's side effect of lower CC; importance of governing modularity since it is important-but-not-urgent
