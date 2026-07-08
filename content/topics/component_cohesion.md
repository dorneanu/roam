+++
title = "Component Cohesion"
author = ["hermes"]
draft = false
+++

-   code that changes together, stays together
-   strong cohesion
    -   ensure related behavior is at one place
-   weak cohesion
    -   related functionality is spread across the system
-   : The Reuse/Release Equivalence Principle
-   : The Common Closure Principle
-   : The Common Reuse Principle


## Cohesion as a modularity metric {#cohesion-as-a-modularity-metric}

Cohesion refers to the extent to which a module's parts should be contained within the same module — how related the parts are to one another. An ideal cohesive module is one where all parts are packaged together; breaking it into smaller pieces would require coupling the parts via inter-module calls to achieve useful results.

> Attempting to divide a cohesive module would only result in increased coupling and decreased readability.
>
> Larry Constantine

This is part of the broader measurement toolkit, alongside [coupling]({{< relref "coupling.md" >}}) and [connascence]({{< relref "connascence.md" >}}).


### Seven types of cohesion (best to worst) {#seven-types-of-cohesion--best-to-worst}

1.  **Functional** — every part of the module is related and the module contains everything essential to function
2.  **Sequential** — one module outputs data that becomes another's input
3.  **Communicational** — modules form a communication chain, each operating on the same data or contributing to the same output
4.  **Procedural** — modules must execute in a specific order
5.  **Temporal** — modules are related by timing (e.g. things that must all be initialized at startup)
6.  **Logical** — data is related logically but not functionally (e.g. Java's `StringUtils` — static methods on String with no functional relationship to each other)
7.  **Coincidental** — elements are unrelated; they merely reside in the same source file (worst form)


### LCOM: Lack of Cohesion in Methods {#lcom-lack-of-cohesion-in-methods}

The Chidamber and Kemerer metric measures structural cohesion. LCOM = "the sum of sets of methods not shared via sharing fields." A high LCOM score indicates a class whose field/method pairs are independent of one another — a good candidate for splitting.

Limitation: LCOM can only find structural lack of cohesion. It cannot determine whether pieces fit together logically. This reflects the Second Law of Software Architecture: why is more important than how.


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 3: cohesion as modularity metric; seven cohesion types from functional (best) to coincidental (worst); LCOM metric and its limitations; Constantine's quote; user annotation "ci: llm ingest cohesion" (p. 130)
