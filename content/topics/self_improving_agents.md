+++
title = "Self-improving agents"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

A self-improving agent is an AI system that observes its own performance over
time, logs deficiencies or improvement opportunities, and applies those
improvements to its own instructions or to other agents in the system — either
autonomously on a schedule or with human approval for critical changes.

The pattern has emerged prominently in the [Claude Code]({{< relref "claude_code.md" >}}) skills community as the
"meta-skill": a skill loaded in every session that silently observes the work,
accumulates a log of skill improvement opportunities, and then applies them in
scheduled autonomous sessions. One practitioner reports 600+ improvements applied
across ~40 skills since deployment.


## Core mechanism {#core-mechanism}

The canonical implementation (rebelytics, "one-skill-to-rule-them-all"):

1.  **Observe** — the skill loads automatically at session start (via CLAUDE.md
    instruction) and silently monitors the session for Claude non-compliance,
    workflow inefficiencies, sections that are never relevant, and complexity
    added just in case.
2.  **Log** — improvement opportunities are appended to a `skill-observations/`
    log with numbered entries and event-driven archival semantics.
3.  **Apply** — a scheduled task (Mon/Wed/Fri) reads the log and applies
    improvements to existing skills.
4.  **Approve** — critical changes require user approval before being applied;
    less critical improvements can be applied automatically.
5.  **Recommend** — when no existing skill covers a detected workflow pattern,
    the meta-skill recommends creating a new skill.

Repo: <https://github.com/rebelytics/one-skill-to-rule-them-all>


## Self-tuning benchmark approach {#self-tuning-benchmark-approach}

A more aggressive variant (dataviz1000) uses skill self-rewriting to tune
performance on a fixed benchmark task:

1.  Run the skill against five target websites (Yahoo Finance, TicketMaster,
    YouTube, Twitch, etc.)
2.  Measure: time taken, tokens consumed, quality of output
3.  Discard the outputs — they are not the goal
4.  Rewrite the skill based on the performance analysis
5.  Re-run to verify improvement; revert if regression detected
6.  Iterate until the skill can accomplish the task with fewer and fewer tokens

The skill is optimising itself, not producing the target artifacts. This is a
form of automated hyperparameter search over the skill's own prompt space.

Repo: <https://github.com/adam-s/intercept/tree/main/.claude/skills/instruction-tuning>


## Tradeoffs and risks {#tradeoffs-and-risks}


### Benefits {#benefits}

-   Compounds expertise and workflows automatically in the background
-   Closes real gaps discovered during actual work (not hypothetical improvements)
-   Scales across many skills simultaneously without manual attention per skill
-   Aligns with the principle that skills should evolve with the user's workflow


### Risks and mitigations {#risks-and-mitigations}

-   **Regression**: a well-functioning skill may degrade after an update
    -   Mitigation: user manually monitors observations and declines suspect suggestions
    -   The correction also happens automatically if regression is detected in later sessions
-   **Bloat**: automatically generated improvements may add complexity rather than reducing it
    -   Mitigation: signal lists for improvement (see below) include "complexity added just in case" as a target to remove
-   **Context burn**: a verbose meta-skill describing its own machinery burns context
    -   Mitigation: keep the skill lean; steal improvement signal lists rather than adopting the whole framework


### Improvement signal list {#improvement-signal-list}

Signals that indicate a skill needs improvement:

-   Claude non-compliance despite documentation
-   Sections never relevant across sessions
-   Complexity added just in case
-   Pre-flight check failures (output violates the skill's own stated rules)
-   Repeated user corrections for the same failure mode


## Relationship to memory systems {#relationship-to-memory-systems}

The `skill-observations/` log in the meta-skill pattern overlaps with memory
files (`feedback_*.md`, `user_*.md`, `project_*.md`) used by the
[session context persistence]({{< relref "session_context_persistence.md" >}}) pattern. Both capture corrections and non-obvious
confirmations from sessions. The difference is scope: memory files persist
session context for the **user**; the observations log drives **skill** evolution.

Some practitioners centralise skills in a GitHub repo to enable improvement
across all projects and devices, not just the current working directory.


## Related topics {#related-topics}

-   [Claude Code]({{< relref "claude_code.md" >}}) — the tool these agents run in
-   [Claude Code skills]({{< relref "claude_code_skills.md" >}}) — the skill ecosystem the meta-skill operates on
-   [Session context persistence]({{< relref "session_context_persistence.md" >}}) — complementary pattern for persisting user context
-   [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}) — self-improvement is a form of meta-evaluation
-   [Multi-agent communication]({{< relref "multi_agent_communication.md" >}}) — file-based channels allow self-improving agents to coordinate with peer agents or reviewer agents across sessions


## Resources {#resources}

-   2026-06-12 ◦ [Drop your best Claude skills in here! (Reddit r/ClaudeAI)](https://www.reddit.com/r/ClaudeAI/comments/1sx44bc/drop_your_best_claude_skills_in_here/) — community discussion on meta-skill pattern; rebelytics describes 600+ improvements applied across ~40 skills; dataviz1000 describes self-tuning via benchmark and rewrite loop
-   2026-06-12 ◦ [one-skill-to-rule-them-all (GitHub)](https://github.com/rebelytics/one-skill-to-rule-them-all) — canonical open-source meta-skill implementation; observe → log → scheduled apply → approve workflow
