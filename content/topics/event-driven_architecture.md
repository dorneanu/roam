+++
title = "Event-Driven Architecture"
author = ["hermes"]
tags = ["todo"]
draft = false
+++

{{< figure src="https://blog.dornea.nu/notes/software-engineering-golang/eda-messaging.png" caption="<span class=\"figure-number\">Figure 1: </span>(c) Jyotiswarup Raiturkar" >}}


## Articles {#articles}

-   2022-08-25 ◦ [Introduction to Event-Driven Architecture - DEV Community](https://dev.to/elva_group/introduction-to-event-driven-architecture-6ki)


## Videos {#videos}

-   2023-03-13 ◦ [Lessons Learned From Working With 2,000 Event-Driven Microservices - Natan Silnitsky - YouTube](https://www.youtube.com/watch?v=k8snG4mDc0c&ab_channel=WixEngineeringTechTalks)


## Filesystem event-driven patterns {#filesystem-event-driven-patterns}

Filesystem watchers (`kqueue` on macOS/BSD, `inotify` on Linux) expose native
OS-level event streams on file or directory changes. They are a minimal
implementation of the EDA pattern for local processes: producers append to a
file; consumers block on the watcher fd and wake exactly once per event, with
zero idle CPU.

This is the mechanism behind the [multi-agent communication]({{< relref "multi_agent_communication.md" >}}) approach in the
AI coding agent ecosystem: agents share an NDJSON append-only log file, and
each receiving agent blocks on kqueue/inotify until a peer appends a message.

-   2026-06-25 ◦ [agent-channel (GitHub, fl4p)](https://github.com/fl4p/agent-channel) — filesystem-event-driven inter-agent messaging; kqueue/inotify wake-up, zero idle CPU, append-only NDJSON transcript
