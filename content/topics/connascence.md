+++
title = "Connascence"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Connascence is a precise vocabulary for describing types of between components in object-oriented systems. Coined by Meilir Page-Jones in _What Every Programmer Should Know about Object-Oriented Design_ (1996), it goes beyond the blunt afferent/efferent coupling metrics by naming and categorising the specific reasons two components must change together. Two components are connascent if a change in one would require the other to be modified to maintain overall correctness. Unlike coupling metrics, connascence is a language for conversations about code quality, not just a measurement.


## Types of connascence {#types-of-connascence}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 3)_


### Static connascence {#static-connascence}

Static connascence is source-code-level coupling, detectable by analysis without executing the code.

-   **Connascence of Name (CoN)** — multiple components must agree on the name of an entity. The most common and most desirable form; modern refactoring tools make it trivial to manage.
-   **Connascence of Type (CoT)** — multiple components must agree on the type of an entity. Common in statically typed languages; also appears selectively in dynamic languages (e.g. Clojure Spec).
-   **Connascence of Meaning (CoM) / Convention** — multiple components must agree on the meaning of particular values. Classic example: hardcoded `TRUE = 1` / `FALSE = 0` — flipping them breaks everything.
-   **Connascence of Position (CoP)** — multiple components must agree on the order of values. Arises with positional method parameters; calling `updateSeat("14D", "Ford, N")` vs `updateSeat("Ford, N", "14D")` is a CoP bug even if types are correct.
-   **Connascence of Algorithm (CoA)** — multiple components must agree on a particular algorithm. Example: a security hashing algorithm that must produce identical results on both server and client.


### Dynamic connascence {#dynamic-connascence}

Dynamic connascence is execution-time coupling, harder to detect and generally more expensive to fix.

-   **Connascence of Execution (CoE)** — the order of execution of multiple components matters. Example: calling `email.send()` before `email.setSubject()` is set.
-   **Connascence of Timing (CoT)** — the timing of execution matters. Typical case: a race condition from two threads executing simultaneously.
-   **Connascence of Values (CoV)** — several values depend on one another and must change together. Classic distributed-systems case: a value that must be consistent across multiple databases in a transaction.
-   **Connascence of Identity (CoI)** — multiple components must reference the same entity. Example: two independent components sharing and updating a common distributed queue.


## Properties {#properties}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 3)_


### Strength {#strength}

Strength measures how easy it is to refactor a coupling. Static connascence is generally weaker (more manageable) than dynamic. Connascence of Name is the weakest and most desirable; Connascence of Identity is the strongest and most problematic. Architects should prefer refactoring toward weaker forms.


### Locality {#locality}

Locality measures how close (proximal) the coupled modules are in the codebase. High connascence between modules in the same package is far less damaging than the same connascence across module boundaries. This mirrors the bounded-context idea in [DDD]({{< relref "ddd.md" >}}): limit implementation coupling as narrowly as practical.


### Degree {#degree}

Degree relates to the scope of impact: does a change affect a few classes or many? High-degree connascence in a small system may be acceptable; the same connascence in a large, growing codebase becomes increasingly expensive.


## Rules and guidelines {#rules-and-guidelines}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 3)_

Page-Jones' three guidelines for using connascence to improve :

1.  Minimise overall connascence by breaking the system into encapsulated elements.
2.  Minimise any remaining connascence that crosses encapsulation boundaries.
3.  Maximise connascence within encapsulation boundaries.

Jim Weirich's two rules (from "Connascence Examined", 2012):

-   **Rule of Degree:** Convert strong forms of connascence into weaker forms.
-   **Rule of Locality:** As the distance between software elements increases, use weaker forms of connascence.


## Practical use {#practical-use}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 3)_

Connascence gives architects and reviewers a shared vocabulary. Instead of saying "don't use magic strings," an architect can say "you have Connascence of Meaning — refactor to Connascence of Name by extracting a named constant." This precision speeds up code review and makes refactoring intent explicit.

Connascence relates directly to metrics: it extends Yourdon and Constantine's afferent/efferent coupling for object-oriented contexts and is one of the three key tools for measuring (alongside cohesion and coupling).


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](</Apps/Dropbox PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub>) — Ch. 3: full taxonomy of static and dynamic connascence, properties (strength, locality, degree), and Weirich's rules; connascence positioned as a vocabulary for coupling conversations (user annotation: "ci: llm ingest connascence", p. 152)
