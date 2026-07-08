+++
title = "Architecture katas"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

Architecture katas are structured practice exercises that give aspiring architects a way to practise deriving [architectural characteristics]({{< relref "architectural_characteristics.md" >}}) from domain-targeted problem descriptions. Devised by Ted Neward (the term _kata_ comes from Japanese martial arts: an individual training exercise emphasising proper form and technique). Because large architectural projects take years and an architect may design only a handful of systems in a career, katas provide a safe laboratory to build pattern recognition and trade-off reasoning.

Richards and Ford maintain an updated kata collection at fundamentalsofsoftwarearchitecture.com.


## Kata structure {#kata-structure}

Each kata has four sections:

-   **Description**: the overall domain problem the system is trying to solve
-   **Users**: expected number and/or types of users
-   **Requirements**: domain requirements as stated by domain experts
-   **Additional context**: important considerations that may not appear in requirements — business constraints, future plans, staffing

The format intentionally mirrors real-world architectural engagements where requirements are incomplete and context matters.


## How katas are used {#how-katas-are-used}

Small teams (2–4 people) work on a design within a time box. The output is:

1.  A list of identified [architectural characteristics]({{< relref "architectural_characteristics.md" >}}) (explicit and implicit), prioritised
2.  An architectural diagram sketching the structural approach
3.  A trade-off analysis

Groups share results and vote on the best architecture. An experienced architect facilitates discussion of missed trade-offs and alternatives. The point is not the final answer — it is building the instinct for spotting structural concerns from business language.


## Worked example: Silicon Sandwiches {#worked-example-silicon-sandwiches}

A national sandwich franchise wants online ordering in addition to call-in. Thousands of users today, potentially millions in future. Requirements include: ordering, pickup/delivery dispatch, mobile access, national + local promotions, online payment. Context: franchised ownership, planned overseas expansion, cost-driven staffing.

Key architectural characteristics derived:

-   **Scalability** — thousands → millions users; stated in the Users section not the Requirements
-   **Elasticity** — burst traffic at mealtimes; implicit domain knowledge, not stated
-   **Performance** — mobile-sensitive page load requirements; driven by UX + requirements
-   **Availability** / **reliability** — implicit; no one buys from a site that drops connections
-   **Security** — implicit baseline; payment handled by third party so no special structural need
-   **Customizability** — local promotions and recipe overrides; composite, potentially structural

Characteristics culled: performance (least critical given scalability/availability priority) and customizability (can be handled at design level via Template Method pattern without requiring microkernel architecture).


## Worked example: Going, Going, Gone (GGG) {#worked-example-going-going-gone--ggg}

An online auction system. Key characteristics typically identified:

-   **Availability** — auctions must not go down mid-bid
-   **Scalability** — concurrent bidders during popular auctions
-   **Reliability** — bid integrity; no lost bids
-   **Performance** — real-time bid updates
-   **Security** — payment and identity


## The domain-concern translation table {#the-domain-concern-translation-table}

A key skill katas develop: translating business language into architectural characteristics.

| Domain concern           | Architectural characteristics                                    |
|--------------------------|------------------------------------------------------------------|
| Mergers and acquisitions | Interoperability, scalability, adaptability, extensibility       |
| Time to market           | Agility, testability, deployability                              |
| User satisfaction        | Performance, availability, fault tolerance, testability, agility |
| Competitive advantage    | Agility, testability, deployability, scalability, availability   |
| Time and budget          | Simplicity, feasibility                                          |


## Composite characteristics {#composite-characteristics}

Many business goals map to composite architectural characteristics — ones with no single objective definition, composed of smaller measurable things. _Agility_ is the canonical example: architects must decompose it into modularity, deployability, and testability to get measurable targets. Katas train architects to spot composite characteristics and decompose them rather than treating them as a single dial.


## Related topics {#related-topics}

-   [Architectural characteristics]({{< relref "architectural_characteristics.md" >}}) — what katas train architects to identify
-   [Architectural thinking]({{< relref "architectural_thinking.md" >}}) — katas build the core architectural thinking instinct
-   [Software architect]({{< relref "software_architect.md" >}}) — katas as a deliberate practice path for the role


## Resources {#resources}

-   2026-06-18 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](</Apps/Dropbox PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub>) — Ch. 5: full kata methodology, Silicon Sandwiches worked example (explicit vs implicit characteristics, trade-off analysis, customizability as architecture vs design question), domain-concern translation table, composite characteristics, limiting architectural characteristics to top three
