+++
title = "Planner-Generator-Evaluator pattern"
author = ["Dorneanu"]
tags = ["ai", "llm", "software"]
draft = false
+++

## Overview {#overview}

The Planner-Generator-Evaluator pattern is an agentic design pattern for
LLM-assisted software development. It decomposes a development workflow into three
specialised agent roles with distinct scopes and responsibilities, preventing any
single agent from holding too much context or making unreviewable decisions in one
pass.


## The three roles {#the-three-roles}


### Planner {#planner}

-   Input: a user brief or feature request
-   Output: a full specification (not code)
-   Constraint: plan-level only — no implementation details
-   In [Claude Code]({{< relref "claude_code.md" >}}): uses plan mode to generate the spec

The Planner's scope restriction is deliberate: keeping it at spec-level means its
output is reviewable by a human before any code is generated.


### Generator {#generator}

-   Input: the spec from the Planner
-   Output: implemented features, sprint by sprint
-   Builds incrementally — one sprint (or feature slice) at a time rather than
    generating the entire codebase in a single pass

The incremental approach limits blast radius: if a sprint's output is wrong, the
damage is bounded and the Evaluator can catch it before the next sprint begins.


### Evaluator {#evaluator}

-   Input: the live running application (not just the code)
-   Output: a grade (pass/fail) against hard-coded thresholds
-   Method: interacts with the live app — not a code review, but behavioural verification
-   Implementation options:
    -   A `/goal` or `/code-review` skill (slash command)
    -   A dedicated verification subagent

The Evaluator grading against hard thresholds is the quality gate: it prevents
Generator drift from accumulating across sprints undetected.


## Why this pattern matters {#why-this-pattern-matters}

Single-agent coding loops have two failure modes: (1) the agent drifts from the
original intent across a long context window, and (2) the agent self-evaluates
optimistically. The Planner-Generator-Evaluator pattern addresses both:

-   Separating planning from generation forces explicit scope definition upfront
-   Sprint-by-sprint generation bounds context length per step
-   An independent Evaluator role eliminates self-evaluation bias

The pattern mirrors human engineering team structure: architect (Planner), engineers
(Generator), QA (Evaluator).


## Related topics {#related-topics}

-   [Claude Code]({{< relref "claude_code.md" >}}) — the tool that provides plan mode for the Planner role and slash commands for the Evaluator
-   [LLM wiki]({{< relref "llm_wiki.md" >}}) — another multi-role LLM pattern (ingest/query/lint) that separates concerns similarly
-   [Design Patterns]({{< relref "design_patterns.md" >}}) — general design-pattern context; this is an agentic/workflow pattern rather than a structural one
-   [Software Engineering]({{< relref "software_engineering.md" >}}) — QA, spec-first development, and sprint-based delivery as background practices


## Resources {#resources}

-   2026-06-03 ◦ [Claude Code: Team Infrastructure and Agentic Patterns (talk slides)](~/repos/priv/roam-sources/articles/2026/2026-06-03_claude-code-team-infrastructure-agentic-patterns.md) — slide introducing the pattern with Planner (brief → spec), Generator (sprint-by-sprint), and Evaluator (live-app grading) roles
