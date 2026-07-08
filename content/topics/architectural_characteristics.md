+++
title = "Architectural characteristics"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Architectural characteristics are the capabilities a system must support to be successful — independent of the problem domain (the business behavior). They are what Richards and Ford call the "-ilities": scalability, availability, maintainability, security, and so on. The preferred term in _Fundamentals of Software Architecture_ (over "non-functional requirements" or "quality attributes") because it names concerns that are critical to architectural success rather than dismissing them as "non-functional." In the authors' framing: domain requirements describe what the system does; architectural characteristics describe how the system does it.


## Three criteria for an architectural characteristic {#three-criteria-for-an-architectural-characteristic}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 4)_

A requirement qualifies as an architectural characteristic only if all three of the following are true:

1.  **Specifies a nondomain design consideration** — it is about capabilities (how), not behavior (what).
2.  **Influences some structural aspect of the design** — it cannot be fully handled by clever coding alone; it may require special structure.
3.  **Is critical or important to application success** — not every "-ility" earns architectural attention; only those essential to the project's success.

Adding architectural characteristics adds complexity. Architects should choose the fewest possible, not the most.


## Implicit vs explicit {#implicit-vs-explicit}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 4)_

-   **Implicit characteristics** rarely appear in requirements documents but are necessary for success. Availability, reliability, and security underpin virtually all systems.
-   **Explicit characteristics** appear directly in requirements documents or specific instructions from stakeholders.


## Categories {#categories}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 4)_


### Operational {#operational}

Cover runtime capabilities: availability, continuity (disaster recovery), performance, recoverability, reliability/safety, robustness, scalability. These overlap heavily with DevOps concerns and most often require special structural support.


### Structural {#structural}

Cover code-level quality: configurability, extensibility, installability, leverageability/reuse, localization, maintainability, portability, upgradeability. Architects bear primary responsibility for these.


### Cloud {#cloud}

Introduced in the 2nd edition: on-demand scalability, on-demand elasticity, zone-based availability, region-based privacy and security. These reflect that most modern systems have cloud interaction.


### Cross-cutting {#cross-cutting}

Characteristics that defy single-category classification: accessibility, archivability, authentication, authorization, legal/compliance, privacy, security, supportability, usability/achievability.


## Trade-offs and the least-worst principle {#trade-offs-and-the-least-worst-principle}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 4)_

Architectural characteristics are synergistic — improving one often degrades another (e.g. adding encryption for security degrades performance). Because of this interaction, architects can rarely maximise every characteristic simultaneously. The guiding principle:

> Never strive for the best architecture; aim for the least worst architecture.

Trying to support too many characteristics produces unwieldy generic solutions. Prefer iterative architecture designs that are easy to change.


## Identifying characteristics from domain concerns {#identifying-characteristics-from-domain-concerns}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 5)_

Architects and domain stakeholders speak different languages: architects talk about scalability and fault tolerance; stakeholders talk about mergers, user satisfaction, and time to market. The key skill is translation.

| Domain concern           | Architectural characteristics                                    |
|--------------------------|------------------------------------------------------------------|
| Mergers and acquisitions | Interoperability, scalability, adaptability, extensibility       |
| Time to market           | Agility, testability, deployability                              |
| User satisfaction        | Performance, availability, fault tolerance, testability, agility |
| Competitive advantage    | Agility, testability, deployability, scalability, availability   |
| Time and budget          | Simplicity, feasibility                                          |

This translation is practiced through .


## Composite characteristics {#composite-characteristics}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 5)_

Some characteristics have no single objective definition — they are compositions of other measurable things. _Agility_ is the canonical example: it decomposes into deployability, modularity, and testability. A common antipattern is focusing on just one component of a composite (e.g. optimising only performance when a stakeholder says "the system must complete end-of-day processing on time," missing availability, scalability, reliability, and recoverability).

Decomposing composite characteristics into measurable parts is prerequisite to making them governable via .


## Measuring and governing characteristics {#measuring-and-governing-characteristics}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 6)_

Making characteristics operational — giving them concrete, measurable definitions — is necessary before they can be governed. Operational characteristics have direct metrics (response time, error rate). Structural characteristics require code-level tools (Cyclomatic Complexity, LCOM, [coupling]({{< relref "coupling.md" >}}) metrics). Process characteristics (testability, deployability) are measured through code coverage, deployment frequency, and failure rates.

Once defined and measured, characteristics are enforced through — see .


## Limiting and prioritising {#limiting-and-prioritising}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 5)_

Working with stakeholders to reduce the final list is essential. Each supported characteristic adds design complexity before addressing the domain problem. A practical technique: ask stakeholders to select the top three most important characteristics from the candidate list (rather than ranking all of them). This easier consensus-finding exercise drives the most important trade-off discussions.

The Vasa antipattern: the Swedish warship built in 1628 was specified to satisfy too many competing requirements (troops + guns + two gun decks) and sank on its maiden voyage. Overspecification of architectural characteristics has the same effect.


## Terminology note {#terminology-note}

_([Fundamentals of Software Architecture, 2E]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}), Ch. 4)_

"Non-functional requirements" is the legacy term (appearing since the late 1970s alongside function-point analysis). "Quality attributes" is another common alternative. Richards and Ford argue both terms are self-denigrating or misleading, and recommend "architectural characteristics" as the more precise and appropriately weighted term.


## Related topics {#related-topics}

-   [Software architecture]({{< relref "software_architecture.md" >}}) — the broader context; characteristics are one of four defining dimensions
-   — itself an implicit structural architectural characteristic
-   — translating business drivers into architectural characteristics is a core part of thinking like an architect
-   — the enforcement mechanism for making characteristics operational
-   — how architects automate adherence to chosen characteristics
-   — deliberate practice for deriving characteristics from domain descriptions


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 4: full definition, three criteria, four categories (operational/structural/cloud/cross-cutting), implicit vs explicit, and trade-off / least-worst-architecture discussion; user highlight (p. 170): prefers "architectural characteristics" over "non-functional requirements"
-   2026-06-18 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford]({{< relref "../books/done/fundamentals_of_software_architecture.md" >}}) — Ch. 5: domain-concern translation table, composite characteristics (agility = deployability + modularity + testability), Silicon Sandwiches and GGG katas, limiting to top-three prioritisation, Vasa antipattern; Ch. 6: making characteristics operational (Cyclomatic Complexity, code coverage, deployment metrics), governing via fitness functions
