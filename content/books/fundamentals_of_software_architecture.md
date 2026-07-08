+++
title = "Fundamentals of Software Architecture"
author = ["Mark Richards", "Neal Ford"]
date = 2026-06-16
tags = ["book", "softwarearchitecture", "todo"]
draft = false
+++

goodreads
: <https://www.goodreads.com/book/show/58093808-fundamentals-of-software-architecture>

author
: Mark Richards, Neal Ford

edition
: 2nd (2025)

status
: reading (ch 1–6 ingested)


## About this book {#about-this-book}

A comprehensive, practical guide to software architecture covering the architect's role, architectural characteristics, structural patterns, and soft skills. The central thesis: architecture is not about finding perfect solutions but about understanding trade-offs. Grounded in three laws:

1.  **Everything in software architecture is a trade-off.** (First Law)
2.  **Why is more important than how.** (Second Law)
3.  **Most architecture decisions aren't binary but rather exist on a spectrum between extremes.** (Third Law)


## Key concepts {#key-concepts}

-   [Software Architecture]({{< relref "../../topics/software_architecture.md" >}}) — four dimensions: style, characteristics, components, decisions; architecture is about leaving options open and minimising lifetime cost
-   [Software Architect]({{< relref "../../topics/software_architect.md" >}}) — eight core expectations: make decisions, continually analyse, stay current, ensure compliance, understand technology, know the domain, lead, navigate politics
-   — architecture vs design spectrum; trade-off analysis; Frozen Caveman antipattern; the 20-minute breadth rule
-   — stuff you know / stuff you know you don't know / stuff you don't know you don't know; architects optimise for breadth over depth
-   — cohesion types (1–7), LCOM metric, abstractness/instability/distance from main sequence; connascence as a richer coupling vocabulary
-   — afferent vs efferent; Zone of Pain (concrete + stable) and Zone of Uselessness (abstract + unstable)
-   [Connascence]({{< relref "../../topics/connascence.md" >}}) — static (Name, Type, Meaning, Position, Algorithm) and dynamic (Execution, Timing, Values, Identity); strength, locality, degree properties; Weirich's two rules
-   [Architectural characteristics]({{< relref "../../topics/architectural_characteristics.md" >}}) — the "-ilities"; three criteria; four categories (operational, structural, cloud, cross-cutting); implicit vs explicit; Vasa antipattern; least-worst architecture principle
-   — structured practice exercises; Silicon Sandwiches and Going-Going-Gone worked examples; domain-concern translation table
-   — automated/manual × continuous/triggered; JDepend, ArchUnit, NetArchTest, chaos engineering; the enforcement arm of evolutionary architecture
-   — governing decisions through automated checks rather than manual reviews; checklist manifesto framing


## Notes {#notes}

<span class="underline">Reading in progress — chapters 1–6 ingested as of 2026-06-18. Will extend as reading advances (PR #7).</span>
