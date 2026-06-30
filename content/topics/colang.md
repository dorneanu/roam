+++
title = "Colang"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

Colang is an event-based domain-specific language for designing conversational interactions between humans and bots. Developed by NVIDIA as part of the NeMo Guardrails toolkit, it is designed to feel like a mix of natural language and Python: flows are described in near-plain-English, while action invocations and control flow use Python-like syntax. Files carry the \`.co\` extension and are interpreted by a Python runtime embedded in NeMo Guardrails.

Colang's primary purpose is to define the "rails" that govern how an [AI]({{< relref "ai.md" >}})-powered bot responds — which topics it may engage with, what actions it may take, how it handles disallowed input, and what dialog paths it must follow. It is the declarative layer on top of the imperative Python action handlers in [LLM guardrails]({{< relref "llm_guardrails.md" >}}).


## Colang 1.0 vs 2.0 {#colang-1-dot-0-vs-2-dot-0}

| Dimension   | Colang 1.0      | Colang 2.0                                                 |
|-------------|-----------------|------------------------------------------------------------|
| Status      | Deprecated      | Current                                                    |
| Actions     | Sequential only | Parallel actions supported                                 |
| Flows       | Flat            | Hierarchical flows                                         |
| Modality    | Text            | Multimodal (text + other signals)                          |
| Event model | Basic           | UMIM (Unified Multimodal Interaction Model) actions/events |

Colang 2.0 introduces UMIM — a standardised event/action vocabulary for multimodal interactions — allowing flows to react to speech, gestures, and other input channels, not just text messages.


## Core concepts {#core-concepts}


### Flows {#flows}

The fundamental unit of a Colang program. A flow describes a sequence (or branching set) of conversational steps: user utterances, bot responses, and action invocations. In Colang 2.0, flows can run in parallel and be composed hierarchically.


### Events {#events}

Colang 2.0 models the conversation as a stream of events (user spoke, bot responded, action completed). Rails are triggered by matching event patterns — making the system reactive rather than polling.


### Actions {#actions}

Callable units that invoke external logic — an LLM call, a tool, a Python function, or a prebuilt pipeline. In NVIDIA ACE Agent, Colang actions can call:

-   Non-LLM models: Joint Intent &amp; Slot detection, Named Entity Recognition, Extractive QA
-   Custom business logic plugins
-   Prebuilt RAG pipelines


## Colang in NeMo Guardrails {#colang-in-nemo-guardrails}

In the NeMo Guardrails toolkit, each rail type (input, dialog, retrieval, execution, output) is configured via \`.co\` files. The Python \`LLMRails\` class loads the Colang configuration at startup and routes each incoming message through the relevant rails before and after the LLM call.

A minimal Colang flow for blocking a disallowed topic looks like:

> define user ask about competitor
>   "Tell me about your competitor"
>   "How does CompetitorX compare?"
>
> define flow competitor block
>   user ask about competitor
>   bot refuse to discuss competitors


## Use in NVIDIA ACE Agent {#use-in-nvidia-ace-agent}

ACE Agent is NVIDIA's conversational AI platform for real-time avatar interactions. Colang is the primary orchestration language: it sequences speech recognition, intent detection, LLM reasoning, and speech synthesis within a single \`.co\` file. The multimodal event model in Colang 2.0 was developed specifically to support avatar interactions where timing, gesture, and speech must be coordinated.


## Related topics {#related-topics}

-   [LLM guardrails]({{< relref "llm_guardrails.md" >}}) — the NeMo Guardrails toolkit that uses Colang as its configuration language
-   [AI agents]({{< relref "ai_agents.md" >}}) — agentic pipelines where Colang execution rails control tool I/O


## Resources {#resources}

-   2026-06-23 ◦ [Colang documentation (NVIDIA ACE Agent 4.1)](https://archive.docs.nvidia.com/ace/ace-agent/4.1/user/colang.html) — event-based modeling language for conversational AI; 1.0 vs 2.0 comparison; UMIM multimodal event model; parallel actions and hierarchical flows; use in ACE Agent for avatar interactions
-   2026-06-23 ◦ [NeMo Guardrails (GitHub)](https://github.com/NVIDIA-NeMo/Guardrails) — Colang is the DSL bundled with this toolkit; \`.co\` files define rails; \`LLMRails\` interprets them at runtime
