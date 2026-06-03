+++
title = "Claude Code"
author = ["Dorneanu"]
tags = ["ai", "llm", "software"]
draft = false
+++

## Overview {#overview}

Claude Code is Anthropic's AI coding assistant delivered as a CLI tool. It operates
within a project-scoped configuration directory (`.claude/`) that the team checks into
version control. The central design philosophy is that the `.claude/` directory is
team infrastructure — treated like code, reviewed like code, and shared on clone.


## .claude/ as team infrastructure {#dot-claude-as-team-infrastructure}

The `.claude/` directory contains three key artefacts:

-   `CLAUDE.md` — the project constitution: shared conventions, domain glossary,
    constraints, rules, and module-specific context. Every team member and every
    Claude session reads this file first.
-   `.claude/commands/` — reusable team skills stored as slash-command definitions.
    Examples: design interviews, test patterns, architecture checks. Available to all
    contributors automatically on `git clone`.
-   `.claude/settings.json` — team guardrails enforced via hooks: linting, blocking
    destructive operations, audit logging, and peer-reviewed policies. Hooks run
    automatically without the user needing to remember them.

The practical effect is that team conventions, quality gates, and AI interaction
patterns are codified and version-controlled alongside the application code itself,
rather than living in individual heads or onboarding documents.


## Plan mode {#plan-mode}

Claude Code has a dedicated plan mode in which it produces a full specification from
a brief without generating any implementation code. This is used as the Planner role
in the [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}).


## Related topics {#related-topics}

-   [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}) — the primary agentic design pattern for Claude Code workflows
-   [LLM wiki]({{< relref "llm_wiki.md" >}}) — CLAUDE.md as schema file parallels the LLM wiki schema file pattern
-   [Software Engineering]({{< relref "software_engineering.md" >}}) — team conventions, quality gates, and shared context
-   [AI]({{< relref "ai.md" >}}) — Claude Code as an LLM-powered development tool


## Resources {#resources}

-   2026-06-03 ◦ [Claude Code: Team Infrastructure and Agentic Patterns (talk slides)](~/repos/priv/roam-sources/articles/2026/2026-06-03_claude-code-team-infrastructure-agentic-patterns.md) — presentation slides on .claude/ as team infrastructure and the Planner-Generator-Evaluator agentic pattern
