+++
title = "LLM tool use"
author = ["hermes"]
tags = ["ai", "llm", "software"]
draft = false
+++

## Overview {#overview}

LLM tool use is the pattern by which a language model invokes external,
deterministic processes — Unix tools (grep, ripgrep, ctags, awk, find, nm,
objdump), APIs, code execution environments — to augment its own probabilistic
recall with ground-truth evidence. The fundamental motivation: replace the model's
unreliable memory with a reliable external lookup.

> Unix tools are not a search engine bolted on — they are the model's only reliable
> contact with reality.

This page focuses on cheap-model + Unix-tool pipelines. For general agentic tool
use in multi-agent settings, see [Multi-agent communication]({{< relref "multi_agent_communication.md" >}}).


## Hypothesis-before-tool {#hypothesis-before-tool}

Before any tool call, the model must emit a structured hypothesis:

```text
HYPOTHESIS: <one-sentence claim about what to expect>
EXPECT: <what a match or no-match would mean for the hypothesis>
GREP: <pattern>
```

This transforms tool calls from fishing expeditions into targeted hypothesis tests.
The key insight: **a tool call should change the model's belief state, not just fill
context**. If the grep output doesn't change what the model believes, the grep
shouldn't have been run.

Without this pattern: cheap models over-grep (using tools as a crutch to avoid
reasoning) or under-grep (concluding without verification).


## Tool budget enforcement {#tool-budget-enforcement}

Assign a maximum number of tool calls per round (e.g. 3 greps/round for a 7B
model, 1–2 for smaller models). The budget must be enforced by the orchestrator,
not just stated in the prompt:

```text
[SYSTEM]: Tool budget exhausted for this round. Reflect on the evidence collected
and reach a conclusion.
```

Budget enforcement:

-   Prevents context bloat from excessive tool output
-   Forces the model to prioritize: "Which single grep gives me the most evidence?"
-   Creates natural pressure toward decisive, targeted searches


## Unix tool to reasoning gap mapping {#unix-tool-to-reasoning-gap-mapping}

| Reasoning gap in cheap LLM                                  | Best Unix tool       |
|-------------------------------------------------------------|----------------------|
| Precise recall of specific values (buffer sizes, constants) | `grep -n`, `ripgrep` |
| Function call graph, callers/callees                        | `ctags -x`, `cscope` |
| All occurrences of a pattern across codebase                | `ripgrep`, `csearch` |
| Binary symbols, function signatures                         | `nm`, `objdump`      |
| File structure and metadata                                 | `find`, `stat`       |
| Structured data (JSON/YAML config)                          | `jq`, `yq`           |
| Integer arithmetic verification                             | `awk`                |

Principle: replace probabilistic recall with deterministic search. If the model
might misremember a code pattern, grep for it.


## Security sandbox for tool execution {#security-sandbox-for-tool-execution}

Any pipeline executing model-generated patterns against a real filesystem must
treat the model as potentially adversarial:

-   **Never `shell=True`** — always pass arguments as a list to `subprocess.run()`
-   **Validate patterns before execution**: whitelist alphanumeric + safe regex chars; block `;|$()` and path traversals
-   **Run inside a read-only container** (Docker/nsjail): codebase mounted read-only, no network, non-root user
-   **Timeout every tool call** (e.g. 10s) and cap output size (e.g. 2000 tokens)
-   **Log all tool invocations** with validated pattern and result for audit

Cheap models are more dangerous here than strong models — weaker instruction
following makes them more likely to emit malformed or adversarial patterns
accidentally.


## Cache visibility {#cache-visibility}

Tool results should be cached and the cache status should be **visible to the
model**. A cached result should include a marker:

```text
[CACHED (round 1, 3 matches)]
```

This prevents the model from treating old data as new evidence in later rounds —
which would allow it to claim "new confirmation" from information already processed.

Cache key: `(tool_name, sha256(args), sha256(file_scope), codebase_version_hash)`

Any tool taking &gt;100ms should be pre-executed and indexed (ctags, csearch) before
the pipeline starts, then cached for the session.


## Related topics {#related-topics}

-   [Prompt engineering patterns]({{< relref "prompt_engineering_patterns.md" >}}) — broader patterns for structuring cheap-model pipelines
-   — managing context across rounds of tool calls
-   [Multi-agent communication]({{< relref "multi_agent_communication.md" >}}) — multi-agent tool coordination
-   [AI]({{< relref "ai.md" >}}) — underlying language model capabilities and limitations


## Resources {#resources}

-   2026-06-26 ◦ [nano-analyzer (GitHub, weareaisle)](https://github.com/weareaisle/nano-analyzer) — LLM-powered zero-day vulnerability scanner; source for hypothesis-before-tool, tool budget enforcement, Unix tool gap mapping, and security sandbox patterns
