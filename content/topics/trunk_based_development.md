+++
title = "Trunk-based development"
author = ["Dorneanu"]
tags = ["software"]
draft = false
+++

## Overview {#overview}

Trunk-based development (TBD) is a version control strategy in which all engineers commit directly to a single shared branch ("trunk" or "main") rather than maintaining long-lived feature or release branches. Changes are kept small and integrated continuously; feature isolation is achieved via feature flags rather than branches. DORA/Accelerate research identifies trunk-based development as one of the key predictive factors separating high-performing software organizations from low-performing ones.


## Key properties {#key-properties}

-   No long-lived branches: commits go to trunk within hours or days, not weeks
-   Short-lived topic branches (&lt; 1 day) are acceptable; branches lasting longer than a day are a smell
-   Feature flags gate incomplete work in production rather than source-level branching
-   The entire codebase is always in a releasable state
-   Continuous integration is a natural consequence: if everyone commits to trunk, everyone's changes must integrate immediately


## Relationship to monorepos {#relationship-to-monorepos}

-   The **One-Version Rule** (from Google's engineering practices) states that developers should never face a choice of "which version of this component should I depend on?" — trunk-based development at monorepo scale enforces this automatically
-   Google's monorepo (~2 billion lines of code) operates entirely on trunk; there are no release branches and no version numbers for internal dependencies
-   LSCs (large-scale changes) — single logical changes touching thousands of files — are only feasible in a trunk-based, monorepo model


## Why long-lived branches fail at scale {#why-long-lived-branches-fail-at-scale}

-   Merge conflicts compound over time; the longer a branch lives, the more expensive integration becomes
-   Integration risk is pushed to the end of a feature cycle instead of distributed continuously
-   Long-lived branches hide broken builds from the main team, defeating the purpose of [Continuous Integration]({{< relref "continuous_integration.md" >}})
-   The cost of a "big bang" merge is superlinear in branch age


## Resources {#resources}

-   2026-06-02 ◦ [Software Engineering at Google (Winters, Manshreck, Wright, 2020)](https://www.goodreads.com/book/show/48816586-software-engineering-at-google) — Chapter 16 presents trunk-based development as a predictive factor (DORA/Accelerate) and describes Google's "no branching" monorepo model; long-lived dev branches are explicitly named as an anti-pattern
-   2026-06-02 ◦ [trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/) — reference implementation guide
