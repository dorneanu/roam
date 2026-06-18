+++
title = "Session context persistence"
author = ["hermes"]
tags = ["ai", "llm", "productivity"]
draft = false
+++

## Overview {#overview}

Session context persistence is the practice of systematically saving the
knowledge, decisions, and state from one AI session so that the next session can
resume from a coherent starting point rather than rebuilding context from scratch.

The core problem: most AI tools (including [Claude Code]({{< relref "claude_code.md" >}})) do not automatically
persist what was decided, why it was decided, or what remains to be done.
Every new session starts cold. Without explicit persistence, the practitioner
must re-explain context, re-discover architectural decisions, and re-derive
conclusions already reached in prior sessions.

> The actual win is not the commit message — it is forcing the session to leave
> breadcrumbs for tomorrow. Claude feels way less magical when it has to rebuild
> context from vibes every morning.


## The /close pattern {#the-close-pattern}

The /close pattern is a session-ending [Claude Code skill]({{< relref "claude_code_skills.md" >}}) that mechanises context
persistence in three phases:


### Phase 1 — Retrospective {#phase-1-retrospective}

1.  Scan the session context for: decisions, learnings/inefficiencies, open tasks, references
2.  Determine the namespace by browsing recent memory (last 30 days) and matching to an existing project
3.  Capture thoughts via a memory tool for each relevant point (typed as `decision` / `insight` / `task` / `reference` / `general`)
4.  Update memory files in `~~/.claude/projects/.../memory/`:
    -   User preferences → `user_*.md`
    -   Workflow feedback → `feedback_*.md`
    -   Project state/deadlines → `project_*.md`
    -   External references → `reference_*.md`
    -   New files get an entry in `MEMORY.md`


### Phase 2 — Housekeeping {#phase-2-housekeeping}

1.  Check the git repo (`git rev-parse --show-toplevel`)
2.  Show git changes (`git status --short`, `git diff --stat HEAD`)
3.  Generate an English imperative commit message (`feat: add /close skill`) and ask before committing
4.  Write `SESSION_LOG.md` — prepend a new entry at the top with date, title, 1–2 sentence summary, and a pointer to the main artifact


### Phase 3 — Close {#phase-3-close}

1.  Print a rename suggestion in the format `[YYYY-MM-DD] <project-or-topic> - <what-was-done>` for copying as the session name
2.  Print a closing line summarising counters: `<N> thoughts → open-brain · <N> memory updates · <N> commits · SESSION_LOG updated`


## Memory file taxonomy {#memory-file-taxonomy}

A recurring pattern in the community is a typed memory file taxonomy stored
alongside the project or in a global Claude directory:

| File pattern     | Contents                                           |
|------------------|----------------------------------------------------|
| `user_*.md`      | User preferences, working style, personal rules    |
| `feedback_*.md`  | Workflow corrections and non-obvious confirmations |
| `project_*.md`   | Project state, deadlines, architectural decisions  |
| `reference_*.md` | External references, links, third-party docs       |
| `MEMORY.md`      | Index of all memory files; LLM reads this first    |

The "why" layer is the most valuable: capturing not just what changed but
why it was changed is what saves time when picking up a project after two
weeks away.


## decisions.md pattern {#decisions-dot-md-pattern}

A simpler variant used on client projects: maintain a `decisions.md` file that
is updated at the end of each session with what changed and why — not just what.

> The "why" part is what saves you when you pick it back up two weeks later and
> have no memory of why you made a weird architectural choice.


## Session 0 / project bootstrapping {#session-0-project-bootstrapping}

The Session 0 skill creates project scaffolding files at the start of a new
project:

-   `CLAUDE.md` — project constitution for the AI
-   `PROGRESS.md` — current state and what remains
-   `CHANGELOG.md` — history of changes

These serve as the initial context seed that the /close pattern then keeps
updated throughout the project's life.


## Context persistence vs meta-skills {#context-persistence-vs-meta-skills}

The community consensus: get context persistence working first before chasing
autonomous [self-improving agents]({{< relref "self_improving_agents.md" >}}).

> Context persistence across sessions is the real unlock before you start chasing
> autonomous skill tuning.

Self-improving agents are cool to watch but add complexity. Reliable session
handoffs are foundational and simpler to implement correctly.


## Related topics {#related-topics}

-   [Claude Code]({{< relref "claude_code.md" >}}) — the tool this pattern applies to
-   [Claude Code skills]({{< relref "claude_code_skills.md" >}}) — the skill ecosystem; /close is one skill within it
-   [Self-improving agents]({{< relref "self_improving_agents.md" >}}) — the meta-skill layer that builds on top of context persistence
-   [Second Brain]({{< relref "second_brain.md" >}}) — broader knowledge management philosophy; session context persistence is a specialised application
-   [LLM wiki]({{< relref "llm_wiki.md" >}}) — related pattern for persisting knowledge across LLM sessions


## Resources {#resources}

-   2026-06-12 ◦ [Drop your best Claude skills in here! (Reddit r/ClaudeAI)](https://www.reddit.com/r/ClaudeAI/comments/1sx44bc/drop_your_best_claude_skills_in_here/) — community discussion on the /close pattern; SYSWAVE shares a three-phase implementation (retrospective → housekeeping → close); multiple practitioners report it as underrated and foundational
