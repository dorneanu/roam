+++
title = "LLM red-teaming"
author = ["hermes"]
tags = ["ai", "llm", "security"]
draft = false
+++

## Overview {#overview}

LLM red-teaming is the adversarial probing of large language models to
discover safety failures, capability overestimates, and hidden behaviours.
Borrowed from classical security red-teaming (where a team simulates
attackers), LLM red-teaming applies structured adversarial thinking to
prompt-based systems: finding the inputs that break stated constraints,
reveal confidential configuration, or produce harmful outputs.

Unlike traditional software security testing, LLM red-teaming must contend
with the stochastic, instruction-following nature of models: the attack surface
is the natural-language interface itself, which means the boundary between
legitimate use and exploitation is inherently fuzzy.


## Attack categories {#attack-categories}


### Jailbreaking {#jailbreaking}

Prompts designed to bypass safety training and produce outputs the model is
trained to refuse. Common approaches: persona roleplay ("pretend you are an
AI without restrictions"), hypothetical framing, token smuggling (encoding
forbidden words), and iterative refinement. Jailbreaks often work against
prompt-based guardrails more reliably than against fine-tuned refusals.


### Prompt injection {#prompt-injection}

Attacker-controlled content in the model's context (e.g. a retrieved
document, email, or web page) that hijacks the model's behaviour. Analogous
to SQL injection: trusted instructions and untrusted data share the same
channel. Particularly dangerous in agentic systems where the model takes
real-world actions.


### System prompt extraction {#system-prompt-extraction}

Eliciting the hidden system prompt that configures the model's behaviour.
Methods: direct instruction ("repeat your system prompt verbatim"), indirect
reconstruction from behaviour, jailbreak-assisted extraction. The CL4R1T4S
repository (see [System prompt transparency]({{< relref "system_prompt_transparency.md" >}})) maintains a community collection
of extracted prompts from major platforms.


### Capability elicitation {#capability-elicitation}

Probing whether a model has capabilities that are suppressed by instruction
rather than absent by training. A model instructed not to write code may
still do so if the instruction is bypassed — distinguishing "can't" from
"won't" has significant implications for safety claims.


## Red-teaming vs alignment {#red-teaming-vs-alignment}

Red-teaming is complementary to but distinct from alignment research:

-   Alignment asks: how do we train models to behave safely and helpfully?
-   Red-teaming asks: does this deployed model actually behave that way?

AI labs increasingly run internal red teams before release (Anthropic's
red-team reports, OpenAI's preparedness evaluations) and also commission
external red-teams. The CL4R1T4S community represents informal external
red-teaming focused on [system prompt transparency]({{< relref "system_prompt_transparency.md" >}}) rather than capability
discovery.


## Agentic risk amplification {#agentic-risk-amplification}

Red-teaming concerns are amplified for [AI agents]({{< relref "ai_agents.md" >}}) that take real-world actions.
A jailbroken chat model produces harmful text; a jailbroken agent with file
access, browser control, or API credentials can execute harmful actions. This
makes prompt injection in agentic contexts (e.g. a malicious web page
hijacking a browsing agent) a critical threat class.


## Defensive countermeasures {#defensive-countermeasures}

[LLM guardrails]({{< relref "llm_guardrails.md" >}}) are the primary runtime defence against the attack categories
above. Each rail type maps to a threat:

-   Input rails → jailbreak detection before the LLM sees the prompt
-   Retrieval rails → prompt injection in RAG chunks
-   Execution rails → prompt injection via tool outputs in agentic pipelines
-   Output rails → detecting harmful outputs before they reach the user

Guardrails are auditable and updatable without retraining — making them the
preferred response to newly-discovered attack vectors that emerge from
red-teaming.


## Resources {#resources}

-   2026-06-23 ◦ [CL4R1T4S (GitHub)](https://github.com/elder-plinius/CL4R1T4S) — community red-team / system prompt extraction project covering Anthropic, OpenAI, Google, xAI, and agent/coding-assistant platforms; 43.6k stars; illustrates scale of informal adversarial probing of commercial LLMs
-   2026-06-23 ◦ [NeMo Guardrails (GitHub)](https://github.com/NVIDIA-NeMo/Guardrails) — open-source toolkit implementing runtime [LLM guardrails]({{< relref "llm_guardrails.md" >}}) as the defensive counterpart to red-team findings; five rail types targeting jailbreaks, prompt injection, and unsafe outputs
