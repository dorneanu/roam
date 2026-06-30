+++
title = "Context window management"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

Context window management is the discipline of keeping an LLM's effective input
within useful bounds across multi-round or multi-stage pipelines. The challenge is
acute for cheap models (2–13B parameters), which have smaller windows and degrade
faster as context fills. But the problem is general: even frontier models with
million-token windows suffer quality degradation when context is poorly structured
or filled with redundant information.

The core approaches are: condensing prior-round evidence, caching and surfacing
cached results explicitly, structuring context with section delimiters, and
choosing what to inject at which stage.


## Prior context condensation {#prior-context-condensation}

In multi-round pipelines, prior round outputs accumulate and eventually bloat the
context window. The condensation step runs between rounds:

-   Replace full grep/tool output from prior rounds with a compact summary: `- pattern: first 3 matches (+N more)`
-   Mark condensed results as condensed so the model knows it is a summary
-   Retain the crux and verdict from prior rounds but compress the evidence

Memoization improvement: hash `(pattern, results)` across rounds. If the same grep
pattern returns identical results in a later round, inject `[CACHED — same as
round N]` rather than re-condensing. This prevents the model from treating
repeated identical output as new evidence.


## Cache visibility {#cache-visibility}

Tool results should be cached and the cache status must be **visible to the model**.
A cached result includes an explicit marker:

```text
[CACHED (round 1, 3 matches)]
```

Without this marker, the model may treat stale cached data as fresh confirmation —
which can produce spurious "new evidence" claims. Cache key design:

```text
(tool_name, sha256(args), sha256(file_scope), codebase_version_hash)
```

Pre-build expensive indexes (ctags, csearch) before the pipeline starts and cache
them for the session. Any tool taking &gt;100ms is a candidate for pre-execution.


## Structured section injection {#structured-section-injection}

Different types of context need to be weighed differently. Cheap models lose track
of this without explicit demarcation. Use explicit section tags:

```text
[SYSTEM INSTRUCTIONS]
[FINDING UNDER REVIEW]
[PRIOR ROUND EVIDENCE]   ← condensed
[CROSS-FILE CONTEXT]
[USER QUERY / CURRENT TASK]
```

The section tag approach also enables selective replacement: the orchestrator can
swap out the `[PRIOR ROUND EVIDENCE]` block between rounds without restructuring
the full prompt. Prior round evidence bleeds into current reasoning unpredictably
when section boundaries are absent.


## Stage-gated injection {#stage-gated-injection}

Rather than appending all context to conversation history, inject stage-specific
context directly into the system prompt at each stage:

-   Stage 1 output (summary/briefing) → injected as a system-level briefing for Stage 2, not as a conversation turn
-   Prior-round evidence → injected as a condensed summary block
-   Cross-file findings → injected as a dedicated context section

Conversation history accumulates tokens regardless of relevance; system-prompt
injection is a targeted alternative for context that informs but does not need to
be part of the dialogue.


## Related topics {#related-topics}

-   [Prompt engineering patterns]({{< relref "prompt_engineering_patterns.md" >}}) — structural patterns for cheap-model pipelines, including crux extraction and confidence escalation
-   [LLM tool use]({{< relref "llm_tool_use.md" >}}) — tool budget enforcement and cache visibility at the tool-call level
-   [AI]({{< relref "ai.md" >}}) — language model architecture and context window characteristics


## Resources {#resources}

-   2026-06-26 ◦ [nano-analyzer (GitHub, weareaisle)](https://github.com/weareaisle/nano-analyzer) — source for prior context condensation, memoized caching, and structured section injection patterns in multi-round LLM triage pipelines
