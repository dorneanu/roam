+++
title = "Multi-agent communication"
author = ["hermes"]
tags = ["ai", "llm", "software"]
draft = false
+++

## Overview {#overview}

Multi-agent communication is the set of protocols and mechanisms by which
separate AI agent instances — running in different sessions, processes, or even
on different harnesses — exchange messages and coordinate work. The key design
question is always: what is the transport, and how does a sleeping agent wake
when a peer message arrives?

The two broad approaches are broker-based (an MCP server or similar process
routes messages) and brokerless (agents share a file path or socket directly).
The brokerless, file-based approach has emerged as the dominant pattern in the
[Claude Code skills]({{< relref "claude_code_skills.md" >}}) ecosystem because it requires no server process, no API
keys, and no daemon.


## File-based channel protocol {#file-based-channel-protocol}

The canonical implementation (agent-channel, fl4p) uses a shared NDJSON file
as the message bus:

-   Agents append JSON-lines to `/tmp/claude-channels/<channel>.ndjson`
-   Each agent's name is written into the `from` field; a timestamp in the `ts` field
-   Each agent maintains a sibling cursor file (`<channel>.<agent>.cursor`) tracking
    its read position, so it never re-reads its own messages or processes the same
    message twice
-   The transcript is append-only; no message is ever deleted or overwritten

> {"from":"alice","ts":1234567890,"text":"hello"}

This pattern interoperates across harnesses (Claude Code, Codex, OpenCode) as
long as they share the same file path.


### Receive primitives {#receive-primitives}

Three receive modes with different trade-offs:

| Mode          | Mechanism        | Best for                                      |
|---------------|------------------|-----------------------------------------------|
| `wait`        | kqueue / inotify | Zero CPU; harnesses with background injection |
| `listen`      | Foreground poll  | Portable; no background wake-up needed        |
| `watch-start` | Detached daemon  | Notifications only; does not wake the agent   |

The `wait` mode is the most efficient: the Python process blocks on a native
filesystem event descriptor (`kqueue` on macOS/BSD, `inotify` on Linux) and
exits as soon as a peer message arrives, consuming zero CPU while idle. It
relies on the harness to re-invoke the agent when the background command exits
— a capability called background injection.


## Background injection {#background-injection}

Background injection is a harness capability: when a background command
(launched by the agent) exits, the harness automatically re-invokes the agent
with the command's output injected into context. This enables the zero-token
`wait` pattern:

1.  Agent launches `channel.py wait` as a background command and suspends
2.  A peer sends a message → the NDJSON file changes
3.  The OS wakes the `kqueue=/=inotify` watcher → `channel.py` prints the message and exits
4.  The harness sees the background exit → re-invokes the agent with the message

As of 2026, [Claude Code]({{< relref "claude_code.md" >}}) supports background injection. Codex and upstream
OpenCode do not yet (PRs are open). On those harnesses, the foreground
`listen --timeout N` mode is the alternative.


## Platform support {#platform-support}

The file-based approach degrades gracefully across platforms:

| OS            | Wake mechanism     | Notes                          |
|---------------|--------------------|--------------------------------|
| macOS         | `kqueue` events    | Zero idle CPU                  |
| Linux (glibc) | `inotify` events   | Zero idle CPU                  |
| Linux (musl)  | `inotify` events   | Zero idle CPU                  |
| Windows       | Bounded sleep poll | Small idle CPU; same semantics |

The `CHANNEL_DIR` environment variable overrides the default temp path, needed
when agents on different OSes might compute different paths.


## Cross-harness interoperability {#cross-harness-interoperability}

The agent-channel design is harness-agnostic: Claude Code, Codex, and OpenCode
agents can all join the same channel simultaneously, since the only shared
dependency is a file path. The skill file (`SKILL.md`) is the harness-specific
adapter — one per harness. A single Python helper (`channel.py`) is identical
across all three.

This makes the channel a form of cross-runtime peer review: a Claude Code
agent can build something and post the result to the channel; a Codex agent
on the other end reviews it — different model, different context, different
failure modes.


## Relationship to other agent patterns {#relationship-to-other-agent-patterns}

-   [Self-improving agents]({{< relref "self_improving_agents.md" >}}) — the meta-skill pattern; multi-agent channels could
    allow the meta-skill to coordinate with specialist reviewer agents
-   [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}) — the Planner and Evaluator roles could
    run on separate agent instances communicating over a channel
-   [Event-Driven Architecture]({{< relref "event-driven_architecture.md" >}}) — file-based channels are a minimal EDA: append-only
    log, durable cursor, event-driven wake-up
-   [Claude Code skills]({{< relref "claude_code_skills.md" >}}) — agent-channel is distributed as a Claude Code plugin
    and skill


## Resources {#resources}

-   2026-06-25 ◦ [agent-channel (GitHub, fl4p)](https://github.com/fl4p/agent-channel) — file-based named channels for AI coding agents; NDJSON append-only log, kqueue/inotify wake-up, cross-harness interop; zero-server, zero-API-key design
