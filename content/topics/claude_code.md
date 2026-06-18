+++
title = "Claude Code"
author = ["hermes"]
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


## Community skill ecosystem {#community-skill-ecosystem}

A large community of practitioners shares reusable Claude Code skills as open-source
markdown files. Skills are plain text, version-controllable, and composable. The two
dominant community skill frameworks are GSD (for large, iterative projects) and
Superpowers (for small-to-medium, well-defined work). Beyond these, skills exist for
session context management, multi-agent orchestration, security auditing, credential
handling, and self-improvement of the skills themselves.

See [Claude Code skills]({{< relref "claude_code_skills.md" >}}) for the full taxonomy, design patterns, and key community
frameworks. See [Session context persistence]({{< relref "session_context_persistence.md" >}}) for the /close pattern and memory
management. See [Self-improving agents]({{< relref "self_improving_agents.md" >}}) for the meta-skill pattern.


## Related topics {#related-topics}

-   [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}) — the primary agentic design pattern for Claude Code workflows
-   [Claude Code skills]({{< relref "claude_code_skills.md" >}}) — community-shared reusable prompt definitions; GSD, Superpowers, /close, and more
-   [Session context persistence]({{< relref "session_context_persistence.md" >}}) — /close pattern for persisting decisions and state across sessions
-   [Self-improving agents]({{< relref "self_improving_agents.md" >}}) — meta-skill pattern for autonomous skill improvement
-   [LLM wiki]({{< relref "llm_wiki.md" >}}) — CLAUDE.md as schema file parallels the LLM wiki schema file pattern
-   [Software Engineering]({{< relref "software_engineering.md" >}}) — team conventions, quality gates, and shared context
-   [AI]({{< relref "ai.md" >}}) — Claude Code as an LLM-powered development tool


## Resources {#resources}

-   2026-06-03 ◦ [Claude Code: Team Infrastructure and Agentic Patterns (talk slides)](~/repos/priv/roam-sources/articles/2026/2026-06-03_claude-code-team-infrastructure-agentic-patterns.md) — presentation slides on .claude/ as team infrastructure and the Planner-Generator-Evaluator agentic pattern
-   2026-06-12 ◦ [Drop your best Claude skills in here! (Reddit r/ClaudeAI)](https://www.reddit.com/r/ClaudeAI/comments/1sx44bc/drop_your_best_claude_skills_in_here/) — community survey of the most-used Claude Code skills; validators and hard stops matter more than natural language; CLAUDE.md quality degrades over time and requires active maintenance
