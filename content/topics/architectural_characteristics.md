+++
title = "Architectural characteristics"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Architectural characteristics are the capabilities a system must support to be successful — independent of the problem domain (the business behavior). They are what Richards and Ford call the "-ilities": scalability, availability, maintainability, security, and so on. The preferred term in _Fundamentals of Software Architecture_ (over "non-functional requirements" or "quality attributes") because it names concerns that are critical to architectural success rather than dismissing them as "non-functional." In the authors' framing: domain requirements describe what the system does; architectural characteristics describe how the system does it.


## Three criteria for an architectural characteristic {#three-criteria-for-an-architectural-characteristic}

A requirement qualifies as an architectural characteristic only if all three of the following are true:

1.  **Specifies a nondomain design consideration** — it is about capabilities (how), not behavior (what).
2.  **Influences some structural aspect of the design** — it cannot be fully handled by clever coding alone; it may require special structure.
3.  **Is critical or important to application success** — not every "-ility" earns architectural attention; only those essential to the project's success.

Adding architectural characteristics adds complexity. Architects should choose the fewest possible, not the most.


## Implicit vs explicit {#implicit-vs-explicit}

-   **Implicit characteristics** rarely appear in requirements documents but are necessary for success. Availability, reliability, and security underpin virtually all systems.
-   **Explicit characteristics** appear directly in requirements documents or specific instructions from stakeholders.


## Categories {#categories}


### Operational {#operational}

Cover runtime capabilities: availability, continuity (disaster recovery), performance, recoverability, reliability/safety, robustness, scalability. These overlap heavily with DevOps concerns and most often require special structural support.


### Structural {#structural}

Cover code-level quality: configurability, extensibility, installability, leverageability/reuse, localization, maintainability, portability, upgradeability. Architects bear primary responsibility for these.


### Cloud {#cloud}

Introduced in the 2nd edition: on-demand scalability, on-demand elasticity, zone-based availability, region-based privacy and security. These reflect that most modern systems have cloud interaction.


### Cross-cutting {#cross-cutting}

Characteristics that defy single-category classification: accessibility, archivability, authentication, authorization, legal/compliance, privacy, security, supportability, usability/achievability.


## Trade-offs and the least-worst principle {#trade-offs-and-the-least-worst-principle}

Architectural characteristics are synergistic — improving one often degrades another (e.g. adding encryption for security degrades performance). Because of this interaction, architects can rarely maximise every characteristic simultaneously. The guiding principle:

> Never strive for the best architecture; aim for the least worst architecture.

Trying to support too many characteristics produces unwieldy generic solutions. Prefer iterative architecture designs that are easy to change.


## Terminology note {#terminology-note}

"Non-functional requirements" is the legacy term (appearing since the late 1970s alongside function-point analysis). "Quality attributes" is another common alternative. Richards and Ford argue both terms are self-denigrating or misleading, and recommend "architectural characteristics" as the more precise and appropriately weighted term.


## Related topics {#related-topics}

-   [Software architecture]({{< relref "software_architecture.md" >}}) — the broader context; characteristics are one of four defining dimensions
-   — itself an implicit structural architectural characteristic
-   — translating business drivers into architectural characteristics is a core part of thinking like an architect


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](</Apps/Dropbox PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub>) — Ch. 4: full definition, three criteria, four categories (operational/structural/cloud/cross-cutting), implicit vs explicit, and trade-off / least-worst-architecture discussion; user highlight (p. 170): prefers "architectural characteristics" over "non-functional requirements"
