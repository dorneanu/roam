+++
title = "Claude Code skills"
author = ["hermes"]
tags = ["ai", "llm", "software"]
draft = false
+++

## Overview {#overview}

Claude Code skills are reusable prompt definitions stored as markdown files in
`.claude/commands/`, making them available as slash commands in any Claude Code
session. The community has converged on a library of shared skills covering
everything from project scaffolding to end-of-session retrospectives. Skills are
plain text; they can be version-controlled, shared, installed from GitHub, and
composed into multi-skill workflows.

The two most widely adopted community skills are GSD (Get-Shit-Done) for large
iterative projects and Superpowers for small-to-medium, well-defined work.
Beyond these, a growing ecosystem covers specialised domains: security auditing,
multi-agent orchestration, session context management, credential handling, and
domain-specific workflows.


## Top community picks {#top-community-picks}

Ranked by upvotes in the r/ClaudeAI community thread (most voted first):

| # | Skill                                                                                   | Best for                                           | Repo                                             |
|---|-----------------------------------------------------------------------------------------|----------------------------------------------------|--------------------------------------------------|
| 1 | [GSD (Get-Shit-Done)](https://github.com/gsd-build/get-shit-done)                       | Large, iterative projects with many phases         | github.com/gsd-build/get-shit-done               |
| 2 | [Superpowers](https://github.com/obra/superpowers)                                      | Small-medium, well-defined projects; brainstorming | github.com/obra/superpowers                      |
| 3 | [Meta-skill (self-improving)](https://github.com/rebelytics/one-skill-to-rule-them-all) | Autonomously improves your other skills over time  | github.com/rebelytics/one-skill-to-rule-them-all |
| 4 | /close                                                                                  | End-of-session context persistence; memory + git   | (prompt-only, see below)                         |
| 5 | [tonone](https://github.com/tonone-ai/tonone)                                           | Multi-agent team with 23 specialist agents         | github.com/tonone-ai/tonone                      |
| 6 | [LLM wiki](https://github.com/6eanut/llm-wiki)                                          | Karpathy wiki pattern as a Claude Code skill       | github.com/6eanut/llm-wiki                       |
| 7 | [LLM Council](https://github.com/karpathy/llm-council)                                  | Multi-model decisions; creative friction           | github.com/karpathy/llm-council                  |
| 8 | [authsome](https://github.com/agentrhq/authsome)                                        | Credential management; authenticated API calls     | github.com/agentrhq/authsome                     |

Notable also-rans: OpenSpec (quick iteration), grill-me (Socratic design review), Supabase Sentinel (security audit), Cabinet (repo-audit + handoff), Session 0 (project bootstrapping), Dendrite (biomimetic debugging), interactive-educator, PraxisKit (kanban for multi-agent workflows).


## Project-scope skill frameworks {#project-scope-skill-frameworks}


### GSD (Get-Shit-Done) {#gsd--get-shit-done}

-   Repo: <https://github.com/gsd-build/get-shit-done>
-   Install locally to a project: `npx --yes get-shit-done-cc@latest --claude --local`
-   Best for large projects with many iterations, safety checkpoints, and evolving scope
-   Phases-based workflow; maps existing codebases with `/gsd:map-codebase`
-   Slower than Superpowers but more thorough; re-checks and safety nets built in
-   Community verdict: "far more thorough — with a lot of safety nets and re-checks it produces far better results"


### Superpowers {#superpowers}

-   Repo: <https://github.com/obra/superpowers>
-   Best for small-to-medium, well-defined projects where the final result is known upfront
-   Fast, efficient; brainstorming mode is a fan favourite
-   Multi-model: plans with Opus, dispatches execution agents with Sonnet
-   Can be used for non-coding tasks (presentations, documents)


### When to choose which {#when-to-choose-which}

| Criterion     | GSD                    | Superpowers                |
|---------------|------------------------|----------------------------|
| Project size  | Large, many iterations | Small-medium, well-defined |
| End state     | Unknown at start       | Known from the start       |
| Speed         | Slower, methodical     | Faster                     |
| Safety        | Many checkpoints       | Fewer, more efficient      |
| Brainstorming | Adequate               | Excellent                  |


## Multi-agent team skill (tonone) {#multi-agent-team-skill--tonone}

tonone ships 23 specialist agents as a team, each owning a domain:

-   Apex — engineering lead
-   Forge — infrastructure
-   Spine — backend
-   Warden — security
-   Helm — head of product

Skills become agent-specific slash commands rather than one-size-fits-all:
`/spine-review` (API surface, performance, distributed systems), `/warden-audit`
(IAM, secrets, compliance), `/proof-strategy` (test coverage, E2E plan). Each
agent runs in its own git worktree so parallel work does not conflict.

Repo: <https://github.com/tonone-ai/tonone> (MIT licensed)

Key principle: domain ownership beats task-based parallelism. Agent context is
scoped to its domain so it does not dilute across unrelated concerns.


## Credential management skill {#credential-management-skill}

authsome manages credentials for GitHub, Google, OpenAI, Anthropic, Linear,
Slack, Notion, Resend, SendGrid, and others. Claude can make authenticated API
calls without raw secrets ever entering the chat; the agent never holds the raw
secret.

Setup: `alias authsome="uvx authsome@latest"`. After that, Claude picks up the
skill and runs the list → login → run workflow on its own.

Repo: <https://github.com/agentrhq/authsome>


## Security and auditing skills {#security-and-auditing-skills}

-   **Supabase Sentinel** — audits entire projects for Supabase-related security
    flaws; produces detailed fix plans.
    Repo: <https://github.com/Farenhytee/supabase-sentinel>
-   **Aegis** — audit, fix, and harden any codebase for security vulnerabilities.
    <https://www.myclaude.sh/p/aegis>
-   **Cabinet** — curated operator workflows; includes `repo-audit` (conservative
    trust assessment of unfamiliar repos) and `handoff~/~resume-from-handoff`
    (continuation-grade context transfer).
    Repo: <https://github.com/nikkogibler/cabinet>


## Session management skill (/close) {#session-management-skill--close}

The /close skill is a session-ending command that mechanises [context persistence]({{< relref "session_context_persistence.md" >}})
in three phases:

1.  **Retrospective** — scans session context for decisions, learnings, open tasks,
    and references; writes typed memory files (`user_*.md`, `feedback_*.md`,
    `project_*.md`, `reference_*.md`) and updates `MEMORY.md`.
2.  **Housekeeping** — checks `git status`, generates a commit message, asks before
    committing, and prepends a new entry to `SESSION_LOG.md`.
3.  **Close** — prints a rename suggestion for the session tab and a one-line
    summary of counters (thoughts captured, memory files updated, commits made).

Community verdict: "context persistence across sessions is the real unlock
before you start chasing autonomous skill tuning." Foundational and simpler to
get right than [self-improving agents]({{< relref "self_improving_agents.md" >}}).

A simpler variant: maintain a `decisions.md` file updated at the end of each
session with what changed and why — especially valuable when picking up a
project after weeks away.

See [Session context persistence]({{< relref "session_context_persistence.md" >}}) for the full three-phase implementation and memory
file taxonomy.


## Skill design patterns {#skill-design-patterns}


### Validators and hard stops over natural language {#validators-and-hard-stops-over-natural-language}

The most useful parts of a skill are not the natural language instructions — they
are the validators, hard stops, and accompanying scripts. One practitioner
reports a narrated video production skill that is 60% validation, gates, and
encoding scripts, and 40% actual prompting.


### Cross-runtime peer review {#cross-runtime-peer-review}

Claude builds, Codex reviews. Different model, different context, different
failure modes. The creative friction between the two catches things neither would
catch alone. Especially effective for document writing and code development.


### Write your own {#write-your-own}

If you know exactly what you want from a workflow, writing a custom skill
outperforms adopting a 200-line community skill. Community skills are good
sources of patterns to steal — not necessarily things to copy wholesale.


### Pre-flight principle {#pre-flight-principle}

Before declaring a skill output done, re-read the skill's own rules and check
the output against them. Makes explicit what is usually implicit, catching
"skill says no comments, generated skill has comments" class of failure.


### Socratic design-review skill (grill-me) {#socratic-design-review-skill--grill-me}

Matt Pocock's grill-me skill implements [Socratic questioning]({{< relref "socratic_questioning.md" >}}) as a slash command:
the model interviews the user relentlessly about a plan, walks every branch of
the decision tree one question at a time, and provides its own recommended answer
to each question. Terminates at "shared understanding" rather than a fixed
question count. If any question can be resolved by inspecting the codebase, the
model does so rather than burdening the user with recall.

Repo: <https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md>

Key design choices:

-   Serial interrogation (one question at a time) — prevents overload; forces
    commitment before proceeding.
-   Model provides its own answer — reduces interrogation pressure; surfaces the
    model's priors for the user to accept or correct.
-   Codebase exploration as a first-class fallback — grounds questions in evidence
    rather than memory.


## Related topics {#related-topics}

-   [Claude Code]({{< relref "claude_code.md" >}}) — the tool these skills run in; .claude/ directory structure
-   [Self-improving agents]({{< relref "self_improving_agents.md" >}}) — the meta-skill pattern for autonomous skill improvement
-   [Session context persistence]({{< relref "session_context_persistence.md" >}}) — /close pattern and memory management between sessions
-   [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}) — agentic design pattern implemented by GSD and Superpowers
-   [Socratic questioning]({{< relref "socratic_questioning.md" >}}) — the interrogation methodology behind grill-me
-   [AI]({{< relref "ai.md" >}}) — broader context of LLM-powered tooling


## Resources {#resources}

-   2026-06-12 ◦ [Drop your best Claude skills in here! (Reddit r/ClaudeAI)](https://www.reddit.com/r/ClaudeAI/comments/1sx44bc/drop_your_best_claude_skills_in_here/) — community thread collecting the most-used Claude Code skills; consensus top picks are GSD (large iterative projects) and Superpowers (small-medium well-defined work); also covers meta-skills, /close pattern, multi-agent orchestration, and credential management
-   2026-06-12 ◦ [grill-me SKILL.md (Matt Pocock)](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) — Socratic design-review skill: relentless one-at-a-time interrogation of a plan, walking the decision tree with recommended answers; triggers on "grill me"
