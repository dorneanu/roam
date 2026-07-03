+++
title = "Component-Based Thinking"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

**Component-based thinking** is the architectural practice of seeing a system as a set of logical components — the building blocks at the level above individual classes. This is the level at which an architect "sees" the system. Components represent major business functions; each contains the source code implementing that function.

Logical components are manifested through **namespace or directory structures**. The leaf nodes containing source code are the components; higher-level nodes represent domains and subdomains.


## Logical vs physical architecture {#logical-vs-physical-architecture}

-   **Logical architecture**: shows components, interactions, actors, and data flows — independent of physical structure. No databases, services, or UIs.
-   **Physical architecture**: shows deployment artifacts — services, databases, UIs, containers. Should match a standard architecture style.

Bypassing the logical architecture to go directly to physical is a common mistake: it obscures where functionality lives and gives developers no guidance for structuring code.


## Creating a logical architecture {#creating-a-logical-architecture}

Component identification is an iterative feedback loop:

1.  **Identify initial core components** — best guess based on major workflows or user actions
2.  **Assign user stories/requirements** — fill the empty buckets
3.  **Analyse roles and responsibilities** — if the role statement needs "and/also/in addition", the component does too much
4.  **Analyse architectural characteristics** — scalability, fault tolerance, etc. may force splits
5.  **Restructure** — iterate continuously


### Workflow approach {#workflow-approach}

Map each step of the major happy-path workflow to a component. Not every step needs its own component — shared functionality reuses one. Good starting point when the general flow is known before detailed requirements.


### Actor/Action approach {#actor-action-approach}

Identify the major actors (customer, admin, system) and their main actions. Assign each action to a component. Generates more granular components than the Workflow approach. Useful for systems with multiple distinct actor types.


### Entity Trap (antipattern) {#entity-trap-antipattern}

Creating components from domain entities (CustomerManager, OrderManager). **Avoid** because:

-   Names like Manager/Supervisor/Controller don't describe the actual role
-   Entity-named components become dumping grounds for all entity-related functionality
-   They violate single-responsibility and become too coarse-grained

If a system is truly entity-based CRUD, it doesn't need an architecture — use a CRUD framework instead.


## Component coupling {#component-coupling}


### Static coupling {#static-coupling}

Synchronous component communication. Two types:

-   **Afferent (CA / fan-in)**: how many other components depend on this one (incoming). High CA = heavily used.
-   **Efferent (CE / fan-out)**: how many other components this one depends on (outgoing). High CE = fragile.


### Temporal coupling {#temporal-coupling}

Order-based dependencies (Order Placement must execute before Order Shipment). Hard to detect from tooling; identified through design documents or runtime errors.


### Law of Demeter (Principle of Least Knowledge) {#law-of-demeter}

A component should have **limited knowledge** of other components. Reducing what a component _knows_ about the system reduces its coupling — even if it doesn't reduce its _responsibility_.

Key: the Law of Demeter redistributes coupling rather than eliminating it. It moves knowledge to where it is naturally owned.


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 8: logical vs physical architecture, component identification cycle, Workflow/Actor-Action approaches, Entity Trap antipattern, role/responsibility analysis, static/temporal/Law of Demeter coupling, GGG case study
