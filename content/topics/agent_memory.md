+++
title = "Agent memory"
author = ["Dorneanu"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

Agent memory is the persistence layer that allows an AI agent to accumulate
context across sessions, rather than starting fresh on every conversation.
Memory transforms a stateless LLM into a long-running partner that knows the
user's projects, preferences, past decisions, and habitual patterns.

The design of memory matters as much as its existence: naive "save everything
and retrieve relevant chunks" approaches degrade over months of history. The
more useful mental model is a **living graph** where memories have authority
that can decay, reinforce, or be superseded — rather than a flat store where
everything is equally "remembered" forever.

Related: , ,
, [LLM wiki]({{< relref "llm_wiki.md" >}})


## Memory storage patterns {#memory-storage-patterns}


### Flat retrieval (naive) {#flat-retrieval--naive}

Save notes → embed → retrieve relevant chunks → stuff back into context.
Works for a few weeks of history but degrades once the agent has months of
data: everything is equally weighted, contradictions accumulate, and context
windows fill with low-authority old memories.


### Living graph (preferred for long-term) {#living-graph--preferred-for-long-term}

Store memories in a graph where edges encode relationships and nodes have
authority scores. Authority changes over time:

-   **Decay**: old memories lose authority if not referenced
-   **Reinforcement**: memories referenced repeatedly gain authority
-   **Supersession**: newer memories can override older ones on the same topic

Tool stack for this approach: SQLite + embeddings + a graph layer. The
graph/decay component matters more than the vector search quality.

One open-source implementation: Constellation Engine
(<https://github.com/CONSTELLATION-ENGINE/constellation-engine>), built
specifically because the standard "partner that grows with you" requirement
cannot be met by simple vector retrieval.


### File-system as memory {#file-system-as-memory}

A simpler pattern: the directory structure is the memory and context.
Files in a project folder accumulate context for that project. Switching
folders switches context. Avoids cross-contamination between projects.
The agent can be asked to "look in [path] for context" without polluting
the current session.


### Memory files taxonomy (Claude Code pattern) {#memory-files-taxonomy--claude-code-pattern}

The pattern uses three typed memory files:

-   `feedback_*.md` — corrections and non-obvious confirmations
-   `user_*.md` — preferences, working style, stated goals
-   `project_*.md` — decisions, state, open loops per project


## The co-evolution horizon {#the-co-evolution-horizon}

Short-term agents feel like chatbots you keep re-explaining yourself to.
Long-term agents with well-designed memory feel like partners: they know
your projects, notice when your habits break, surface connections you
missed, and gradually need less orientation per session.

The shift from "agent as tool" to "agent as partner" depends on memory
quality more than model quality. A weaker model with good persistent
memory often outperforms a stronger model with none.

> The high-value personal use case is co-evolution. You build a workflow,
> the agent remembers the shape of your life, stale stuff decays, important
> stuff sticks, and over time it stops feeling like a chatbot you keep
> re-explaining yourself to.
> — Similar_Boysenberry7, r/hermesagent, 2026-06-18


## Memory and scheduling {#memory-and-scheduling}

For personal agents running long-term, memory must integrate with scheduling:

-   Skills built in one session should be available in future sessions without
    re-explanation (persistent skill store)
-   Cron jobs and recurring tasks should carry context about past executions
    (e.g. "this auction site changes format on weekends")
-   The agent's sense of the user's calendar and routines should be a live
    graph, not a static snapshot


## When memory goes wrong {#when-memory-goes-wrong}

-   **Everything equally weighted**: agent treats a two-year-old preference as
    authoritative as yesterday's correction
-   **Context bloat**: verbose memory retrieval fills the context window before
    the task begins; use selective retrieval, not dump-all
-   **Cross-project contamination**: memories from one domain bleed into unrelated
    tasks; directory-scoped memory or explicit project isolation mitigates this
-   **Hallucinated memory**: the model confabulates plausible-sounding past events
    that never happened; write-through to persistent storage (SQLite, files)
    with timestamps prevents this


## Resources {#resources}

-   2026-06-18 ◦ [Am I missing the point of AI agents? (Reddit r/hermesagent)](https://www.reddit.com/r/hermesagent/comments/1tlh53c/am_i_missing_the_point_of_ai_agents/) — community discussion of long-term memory design; Similar_Boysenberry7 describes the "living graph" pattern with decay and reinforcement vs naive vector retrieval; points to Constellation Engine as an open-source implementation
-   2026-06-18 ◦ [Constellation Engine (GitHub)](https://github.com/CONSTELLATION-ENGINE/constellation-engine) — open-source memory/runtime layer implementing living-graph semantics (decay, reinforcement, authority) for personal AI agents
