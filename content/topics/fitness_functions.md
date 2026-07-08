+++
title = "Fitness functions"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

An architectural fitness function is any mechanism that provides an objective integrity assessment of some [architectural characteristic]({{< relref "architectural_characteristics.md" >}}) or combination of architectural characteristics. The term borrows from evolutionary computing (genetic algorithms), where a fitness function guides an algorithm toward its goal by measuring how close the output comes to the desired outcome.

Fitness functions are not a new framework to download. They offer a new perspective on many existing tools — unit testing libraries, metrics monitors, chaos engineering tools, and code analysis frameworks all qualify as fitness function implementations. The key shift is framing: architects declare what architectural properties matter and wire automated checks into the build/deployment pipeline to enforce them continuously.

> Fitness functions are not a heavyweight governance mechanism, but a mechanism for architects to express and automatically verify important architectural principles.
>
> Richards &amp; Ford, Fundamentals of Software Architecture, 2E


## Classification {#classification}

Fitness functions can be classified along two axes:


### Automated vs manual {#automated-vs-manual}

-   **Automated**: executed by machines — unit tests, CI checks, metrics dashboards, chaos experiments
-   **Manual**: human review processes — architectural reviews, threat model reviews, design sign-offs


### Continuous vs triggered {#continuous-vs-triggered}

-   **Continuous**: run constantly in production (e.g. monitors, chaos experiments that simulate load)
-   **Triggered**: run on demand or on a schedule — typically tied to the build pipeline (every commit or every deploy)

The most powerful governance comes from **automated + triggered** fitness functions wired into CI: they guard important but non-urgent architectural properties that would otherwise erode under schedule pressure.


## Examples {#examples}


### Cyclic dependencies (modularity) {#cyclic-dependencies--modularity}

Cyclic dependencies between components are a damaging antipattern: impossible to reuse one component without dragging in its cycle partners, pulling codebases toward Big Ball of Mud. A fitness function using JDepend (Java) can be wired into CI:

```java
@Test
void testAllPackages() {
  Collection packages = jdepend.analyze();
  assertEquals("Cycles exist", false, jdepend.containsCycles());
}
```


### Distance from the Main Sequence (coupling health) {#distance-from-the-main-sequence--coupling-health}

The [coupling]({{< relref "coupling.md" >}}) metric D = |A + I − 1| measures how far a component is from the ideal balance of abstractness and instability. A fitness function can enforce a tolerance threshold per package:

```java
@Test
void AllPackages() {
  double ideal = 0.0;
  double tolerance = 0.5; // project-dependent
  // fails if any package exceeds distance threshold
}
```


### Layer dependency governance (ArchUnit) {#layer-dependency-governance--archunit}

ArchUnit (Java) encodes layer dependency rules as unit tests, preventing e.g. Presentation from calling Data directly in a layered architecture. NetArchTest provides equivalent functionality for .NET/C#.


### Chaos engineering (Netflix Simian Army) {#chaos-engineering--netflix-simian-army}

Netflix's Chaos Monkey and Simian Army are production fitness functions simulating infrastructure failures:

-   **Chaos Monkey**: random instance termination to test resilience
-   **Latency Monkey**: simulates high latency on AWS instances
-   **Chaos Kong**: simulates full Amazon datacenter failure
-   **Conformity Monkey**: enforces governance rules (e.g. every service must respond without errors)
-   **Security Monkey**: scans for well-known security defects (open ports, configuration errors)
-   **Janitor Monkey**: removes orphan services with no active callers — keeping the system clean as services evolve


## Fitness functions vs unit tests {#fitness-functions-vs-unit-tests}

Unit tests verify domain behavior (does the code do what it should?). Fitness functions verify architectural properties (does the structure satisfy the architectural characteristics?). Both use the same execution infrastructure (JUnit, NUnit, pytest), but they target different concerns.

Unit tests are often written by developers; fitness functions are authored collaboratively by architects and developers. Architects must ensure developers understand the purpose of a fitness function before imposing it — otherwise developers may code to the metric rather than to the intent.


## Relation to evolutionary architecture {#relation-to-evolutionary-architecture}

Fitness functions are the governance mechanism inside an evolutionary architecture (see _Building Evolutionary Architectures_, Neal Ford et al., O'Reilly 2022). An evolutionary architecture supports guided, incremental change across multiple dimensions simultaneously; fitness functions are what makes the guidance objective and automated rather than ad hoc.


## Related topics {#related-topics}

-   [Architectural characteristics]({{< relref "architectural_characteristics.md" >}}) — fitness functions are the enforcement mechanism for characteristics
-   — fitness functions are the primary tool for automated governance
-   [Modularity]({{< relref "modularity.md" >}}) — cyclic dependency and cohesion checks are classic fitness function targets
-   [Coupling]({{< relref "coupling.md" >}}) — distance from main sequence fitness function guards coupling health


## Resources {#resources}

-   2026-06-18 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 6: fitness function definition (borrowed from evolutionary computing), automated vs manual / continuous vs triggered taxonomy, cyclic dependency JDepend example, distance-from-main-sequence JDepend example, ArchUnit/NetArchTest layer governance examples, Netflix Simian Army as production fitness functions, relationship to evolutionary architecture
