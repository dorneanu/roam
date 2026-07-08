+++
title = "Architectural governance"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Architectural governance is the practice of ensuring that developers respect and implement architectural decisions correctly over time — regardless of schedule pressure. Derived from the Greek _kubernan_ (to steer), governance covers any aspect of the software development process that architects want to influence. Neglecting architectural quality (modularity, layer separation, coupling, security) often leads to structural decay even when the system continues to function correctly in the short term.

The historical trajectory: Extreme Programming introduced CI automation → DevOps extended automation to operations → architectural governance extends automation to structural integrity. This chain means architects now have access to the same automation discipline that transformed testing and deployment, applied to architectural properties.


## The governance problem {#the-governance-problem}

On real projects, urgency consistently dominates importance. Architectural properties like modularity are important but rarely urgent — they are the first to erode under schedule pressure. Code reviews help but arrive too late: if developers import rampantly across component boundaries for a week before a review, the structural damage is already done.

Architects need governance mechanisms that run continuously and automatically rather than relying on after-the-fact human checks.


## Automated governance via fitness functions {#automated-governance-via-fitness-functions}

The primary mechanism for modern architectural governance is [fitness functions]({{< relref "fitness_functions.md" >}}) — automated checks wired into the build/deployment pipeline. Key tools:


### ArchUnit (Java) {#archunit--java}

A JUnit-based framework for encoding architectural rules as tests. Example: preventing layer access violations in a layered architecture (Presentation → Service → Persistence, never skipping layers). Rules are expressed as readable code and fail the build if violated.


### NetArchTest (.NET/C#) {#netarchtest--dot-net-c}

The .NET equivalent of ArchUnit: namespace-based dependency rules expressed as C# tests. Catches e.g. Presentation directly referencing Data without going through Service.


### JDepend (Java) {#jdepend--java}

Analyzes package dependencies; used for cyclic dependency detection and distance-from-main-sequence measurements. Can be called from JUnit tests.


### Chaos engineering tools {#chaos-engineering-tools}

Netflix's Simian Army (Chaos Monkey, Conformity Monkey, Security Monkey, Janitor Monkey) act as production governance — enforcing operational architectural characteristics like resilience and security at runtime. See [fitness functions]({{< relref "fitness_functions.md" >}}) for the full taxonomy.


## The checklist manifesto analogy {#the-checklist-manifesto-analogy}

Atul Gawande's _The Checklist Manifesto_ documents how airline pilots and surgeons use checklists not because they don't know their jobs, but because highly detailed, repetitive work makes it easy for critical details to slip. Fitness functions serve the same role for architects: they are concise automated reminders that important architectural properties are being honored, without requiring constant manual attention.


## Governance and developer trust {#governance-and-developer-trust}

Fitness functions are only effective if developers understand and trust them. Architects must:

1.  Explain the purpose of each fitness function before imposing it
2.  Collaborate with developers when designing governance checks
3.  Avoid ivory-tower governance — rules should be understandable, not obscure
4.  Accept that determined rule-breakers will find workarounds, but fitness functions prevent accidental lapses

The intent is never to catch developers out; it is to automate the structural hygiene that everyone agrees matters but that schedule pressure consistently undermines.


## Related topics {#related-topics}

-   [Fitness functions]({{< relref "fitness_functions.md" >}}) — the primary automated governance tool
-   [Architectural characteristics]({{< relref "architectural_characteristics.md" >}}) — what governance is protecting
-   [Modularity]({{< relref "modularity.md" >}}) — the most commonly governed structural property
-   [Software architecture]({{< relref "software_architecture.md" >}}) — governance as one of the architect's core responsibilities


## Resources {#resources}

-   2026-06-18 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 6: governance as CI→DevOps→architectural-governance evolution; ArchUnit, NetArchTest, JDepend as tooling; Netflix Simian Army as production governance; checklist manifesto framing; developer-trust principle
