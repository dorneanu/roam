+++
title = "Software Architect"
author = ["hermes"]
draft = false
+++

-   Role
    -   define a blueprint for what needs to be built
    -   ensure the team has enough details to get the job done
    -   guides the rest of the team toward this design during execution
    -   talks to stakeholders
    -   it's possible to do the architect's job w/o coding:

        -   one must understand the low-level details, constraints and complexity

        > First of all, a software architect is a programmer; and continues to be a
        > programmer. Never fall for the lie that suggests that software architects
        > pull back from code to focus on higher-level issues. They do not! Software
        > architects are the best programmers, and they continue to take programming
        > tasks, while they also guide the rest of the team toward a design that
        > maximizes productivity. Software architects may not write as much code as
        > other programmers do, but they continue to engage in programming tasks.
    -   create a shape for the system that recognizes policy as the most essential element while making the details irrelevant
        -   this also allows decisions about the details to be delayed and deferred
    -   takes late decisions and shapes the [Software System]({{< relref "software_system.md" >}}) in a way that decisions can still be deferred or changed for as long as possible
        -   also maximizes number of decisions not made


## Eight expectations (Richards &amp; Ford) {#eight-expectations--richards-and-ford}

Richards and Ford identify eight core expectations for any software architect, regardless of title or organisation:

1.  **Make architecture decisions** — define and guide technology decisions (guide, don't dictate); ask whether a decision guides teams toward right choices or makes the choice for them.
2.  **Continually analyze the architecture** — assess architecture vitality (how viable is a 3+ year-old architecture today?); watch for structural decay.
3.  **Keep current with latest trends** — architect decisions are long-lasting; understanding trends ensures decisions remain relevant.
4.  **Ensure compliance with decisions** — continually verify development teams are following decisions and design principles; violations degrade architectural characteristics.
5.  **Understand diverse technologies** — not expert in everything, but familiar with a wide variety; focus on technical breadth over depth (see [knowledge pyramid]({{< relref "knowledge_pyramid.md" >}})).
6.  **Know the business domain** — understand the business problem, goals, and requirements; communicate credibly with C-level stakeholders.
7.  **Possess interpersonal skills** — leadership, facilitation, teamwork; "No matter what they tell you, it's always a people problem" (Weinberg); leadership skills are at least half the job.
8.  **Understand and navigate organizational politics** — almost every architectural decision will be challenged; negotiation skills are essential; architects must justify and fight for most decisions.


## Thinking like an architect {#thinking-like-an-architect}

See [architectural thinking]({{< relref "architectural_thinking.md" >}}) for the full treatment of: architecture vs design spectrum, technical breadth vs depth, trade-off analysis, Frozen Caveman antipattern, and balancing hands-on coding.


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](</Apps/Dropbox PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub>) — Ch. 1–2: eight expectations in full detail (pp. 41–58); leadership as "at least half" the role; organizational politics as a core architect competency; all eight expectations quoted from user's reading notes
