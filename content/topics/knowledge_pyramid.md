+++
title = "Knowledge pyramid"
author = ["hermes"]
tags = ["software", "productivity"]
draft = false
+++

## Overview {#overview}

The knowledge pyramid is a mental model for thinking about the distribution of technical knowledge, introduced in _Fundamentals of Software Architecture_ by Richards and Ford to explain why architects and developers need different knowledge profiles. It divides all technical knowledge into three levels:

1.  **Stuff you know** (top, smallest): technologies, languages, frameworks, tools you use daily and are expert in. Requires active maintenance — expertise decays if unused.
2.  **Stuff you know you don't know** (middle, large): things you've heard of or know exist but have little hands-on experience with. This is the breadth zone.
3.  **Stuff you don't know you don't know** (bottom, vast): the entire body of technologies, tools, and solutions you are unaware of — including ones that would be the perfect fit for a problem you're trying to solve.

The career goal for any technologist is to move knowledge upward: from the unknown bottom into the middle ("I know Clojure exists but can't code it"), and from the middle to the top when expertise is needed.


## Developers vs architects {#developers-vs-architects}

-   **Developers** should focus on expanding the top of the pyramid — deep expertise in the technologies they use daily. Their value comes from technical depth.
-   **Architects** should focus on expanding the middle section penetrating into the bottom — wide familiarity across many domains. Their value comes from technical breadth: knowing that five solutions exist for a problem is worth more than singular mastery of one.

For architects, the wise course of action is to periodically sacrifice some hard-won top-layer expertise to broaden the middle layer.


## Dysfunctions {#dysfunctions}

-   **Stale expertise**: top-layer knowledge that hasn't been maintained, but the holder still treats it as current. Common in long-tenured leads who have moved into architecture roles.
-   **Frozen Caveman antipattern**: a past traumatic experience creates a disproportionate fixation on one narrow risk, crowding out balanced architectural judgment (see [architectural thinking]({{< relref "architectural_thinking.md" >}})).
-   **Breadth overreach**: trying to maintain expertise across too many areas, succeeding in none.


## Growing the middle {#growing-the-middle}

Techniques for expanding "stuff you know you don't know" (see [architectural thinking]({{< relref "architectural_thinking.md" >}}) for details):

-   The 20-minute rule: 20 minutes each morning on something new, before email
-   The personal technology radar: a structured living document tracking what to adopt, trial, assess, or hold


## Cross-domain applicability {#cross-domain-applicability}

The pyramid applies beyond software: in any knowledge-intensive discipline, practitioners must decide how to allocate learning time between deepening existing expertise and broadening into adjacent domains. The same tension appears in [deep work]({{< relref "deep_work.md" >}}) (depth) vs the breadth needed for synthesis and creative cross-pollination.


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/fundamentals_of_software_architecture.md" >}}) — Ch. 2: the knowledge pyramid model (pp. 72ff.); user annotation "ci: elaborate on this" at p. 72; architect breadth vs developer depth; stale expertise and Frozen Caveman as failure modes
