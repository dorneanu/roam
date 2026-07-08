+++
title = "Architectural thinking"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Architectural thinking is the ability to see systems from an architect's perspective — understanding how individual changes affect overall scalability, how system parts interact, and which technologies fit a given problem. It is distinct from coding or design thinking. Richards and Ford describe four core aspects: understanding the architecture/design spectrum, building technical breadth, translating business drivers into [architectural characteristics]({{< relref "architectural_characteristics.md" >}}), and analysing trade-offs systematically.

> Architecture is the stuff you can't Google or ask an LLM about.
>
> Mark Richards


## Architecture vs design {#architecture-vs-design}

Architecture and design exist on a spectrum, not in separate buckets. Three criteria help classify a decision:

1.  **Strategic vs tactical**: strategic decisions are long-term, involve many stakeholders, require weeks of planning → architectural. Tactical decisions are short-term, made alone or in a pair, change quickly → design.
2.  **Level of effort**: Martin Fowler defines architecture as "the stuff that's hard to change." Higher effort to change = more architectural.
3.  **Significance of trade-offs**: bigger trade-offs push a decision toward the architecture end. Moving monolith → microservices has enormous trade-offs; rearranging fields on a screen does not.


## Technical breadth vs depth {#technical-breadth-vs-depth}

Developers must have deep expertise (technical depth). Architects must have wide exposure (technical breadth). The [knowledge pyramid]({{< relref "knowledge_pyramid.md" >}}) captures this:

-   Top (small): stuff you know — your expertise, requiring maintenance
-   Middle (large): stuff you know you don't know — your breadth, the most valuable architect asset
-   Bottom (vast): stuff you don't know you don't know — the blind spots

For an architect, breadth is more important than depth. Knowing five solutions exist for a problem is more valuable than being the world's expert in one. The recommended posture: sacrifice some hard-won expertise periodically to broaden the portfolio.


### Dysfunctions from ignoring this {#dysfunctions-from-ignoring-this}

1.  Attempting to maintain depth across too many areas, succeeding in none.
2.  Stale expertise: outdated knowledge mistaken for current mastery (see Frozen Caveman antipattern below).


### Techniques for building breadth {#techniques-for-building-breadth}

-   **20-minute rule**: carve out 20 minutes each morning (before email) to learn something new — InfoQ, DZone Refcardz, Thoughtworks Technology Radar.
-   **Personal technology radar**: a living document structured like the Thoughtworks Radar (quadrants: Tools, Languages &amp; Frameworks, Techniques, Platforms; rings: Hold / Assess / Trial / Adopt) to track which technologies to pursue, trial, or avoid.


## Frozen Caveman antipattern {#frozen-caveman-antipattern}

Architects who have been burned by past failures become irrationally fixated on that failure mode in every future design, even when the risk is negligible. Example: an architect who once experienced a major outage becomes obsessed with a redundancy concern that is statistically unlikely in the new context. Recognising and overcoming Frozen Caveman thinking is part of mature architectural thinking.


## Trade-off analysis {#trade-off-analysis}

Every architecture decision has trade-offs — there are no universally "correct" answers, only contextual judgements.

> There are no right or wrong answers in architecture — only trade-offs.
>
> Neal Ford

<!--quoteend-->

> Programmers know the benefits of everything and the trade-offs of nothing. Architects need to understand both.
>
> Rich Hickey

Thinking architecturally means explicitly enumerating both the benefits and the costs of a solution before deciding. Example: pub/sub topics give extensibility and decoupling, but introduce data-access security risks, prevent heterogeneous contracts, and limit programmatic autoscaling — whereas point-to-point queues sacrifice extensibility for better isolation and monitoring.


## Balancing hands-on coding {#balancing-hands-on-coding}

Architects must stay hands-on to avoid losing credibility and to avoid the Bottleneck Trap (taking ownership of critical-path code and blocking the team). Techniques:

-   Code non-critical business functionality 1–3 iterations ahead
-   Do frequent proofs-of-concept (write production-quality POC code)
-   Take on technical debt tasks or bug fixes
-   Automate — write tooling and fitness functions
-   Do code reviews


## Related topics {#related-topics}

-   [Software architect]({{< relref "software_architect.md" >}}) — the role that exercises architectural thinking
-   [Knowledge pyramid]({{< relref "knowledge_pyramid.md" >}}) — the mental model underlying technical breadth/depth
-   [Architectural characteristics]({{< relref "architectural_characteristics.md" >}}) — translating business drivers into characteristics is a core part of architectural thinking
-   [Software architecture]({{< relref "software_architecture.md" >}}) — the laws that underpin all architectural thinking


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 2: architecture vs design spectrum, knowledge pyramid, technical breadth, 20-minute rule, personal radar, Frozen Caveman antipattern, trade-off analysis (topics vs queues case study), balancing hands-on coding; key quotes from Ford and Hickey on trade-offs
