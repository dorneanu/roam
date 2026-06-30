+++
title = "Prompt injection"
author = ["hermes"]
tags = ["ai", "llm", "security"]
draft = false
+++

## Overview {#overview}

Prompt injection is a class of security vulnerability in which an attacker
embeds adversarial instructions inside content that an LLM is asked to process,
causing the model to follow the attacker's instructions rather than the legitimate
user's or system's. The name is analogous to SQL injection: just as SQL injection
smuggles database commands inside user-supplied data, prompt injection smuggles
model instructions inside user-supplied content.

Prompt injection is distinct from direct jailbreaking (where the attacker
interacts with the model directly) in that it is often **indirect** — the attacker
does not have direct access to the model's prompt but can influence it by
controlling content the model ingests (documents, emails, web pages, tool outputs).


## Attack variants {#attack-variants}


### Direct prompt injection {#direct-prompt-injection}

The attacker directly instructs the model by including adversarial text in their
own input, e.g. "Ignore previous instructions and do X." This is the simplest
form and is heavily defended against in production models via system prompts and
safety training.


### Indirect prompt injection {#indirect-prompt-injection}

The attacker plants instructions in content the model will later process on
behalf of a legitimate user. Examples:

-   A malicious webpage that tells a browsing agent to exfiltrate session cookies
-   A PDF document that instructs a summarization agent to append false information
-   An email that redirects an email-assistant agent to forward messages to an
    attacker's address

Indirect prompt injection is significantly harder to defend against because the
malicious content is often indistinguishable from legitimate content at the point
of ingestion.


### Stored prompt injection (persistent) {#stored-prompt-injection--persistent}

Malicious instructions stored in a database or external system that the model
will query. Once stored, the attack affects every future model interaction that
retrieves the contaminated record.


### Encoding-based injection {#encoding-based-injection}

Hiding injected instructions in text encodings (Base64, MIME, quoted-printable,
ROT13, Unicode homoglyphs) that safety classifiers may not decode before passing
to the model. garak's `encoding` probe family systematically tests for this; it
found that more recent ChatGPT variants were _more_ susceptible to encoding-based
injection than older models. See [LLM vulnerability scanning]({{< relref "llm_vulnerability_scanning.md" >}}) for automated detection.


## Why LLMs are vulnerable {#why-llms-are-vulnerable}

LLMs do not have a clear architectural distinction between "instructions"
(trusted) and "data" (untrusted). Both arrive as text in the same input stream.
Safety training can teach models to ignore obvious override attempts but cannot
reliably distinguish a legitimate instruction from a sophisticated injected one,
especially when the injected instruction is crafted to look like a legitimate
system message.

This vulnerability is structural, not merely a training deficiency. It is
analogous to how early web frameworks could not prevent XSS without significant
architectural change (output escaping, content security policies).


## Defenses and mitigations {#defenses-and-mitigations}

-   **Instruction hierarchy / privilege separation** — model is trained to weight
    system-prompt instructions above user-prompt instructions, and user-prompt
    instructions above retrieved-content instructions
-   **Input sanitization** — scan retrieved content for injection patterns before
    feeding to the model (analogous to HTML escaping in web security)
-   **Output monitoring** — classify model outputs to detect signs of successful
    injection (e.g. unexpected actions, data exfiltration patterns)
-   **Minimal tool permissions** — limit what actions an agent can take so that a
    successful injection causes less damage (principle of least privilege)
-   **Human-in-the-loop** — require human approval for high-consequence actions,
    limiting the damage a successful injection can cause autonomously

No defense completely eliminates the risk; defense-in-depth is the recommended
approach.


## Relationship to [LLM jailbreaking]({{< relref "llm_jailbreaking.md" >}}) {#relationship-to-llm-jailbreaking--llm-jailbreaking-dot-md}

Prompt injection is often listed as a jailbreak technique because injected
instructions can be used to bypass safety training. However, the threat model
differs: jailbreaking typically involves a user trying to get the model to help
them; prompt injection typically involves a third-party attacker trying to
hijack the model's behavior in an agentic pipeline without the user's knowledge.


## Relationship to agentic AI {#relationship-to-agentic-ai}

Prompt injection is the primary security concern for [AI agents]({{< relref "ai_agents.md" >}}) that operate with
tool access and external data retrieval. As agents gain more autonomous
capabilities (browsing, email, code execution, API calls), successful injection
attacks can cause real-world harm far beyond generating harmful text.


## Competitive red-teaming data {#competitive-red-teaming-data}

The HackAPrompt MATS x Trails competition track specifically tests indirect
prompt injection in agentic settings. The broader [Pliny HackAPrompt Dataset](https://huggingface.co/datasets/hackaprompt/Pliny_HackAPrompt_Dataset)
(16,902 submissions) includes prompt injection as one of its tagged attack
categories and serves as an open benchmark for injection technique diversity.
See [Red teaming LLMs]({{< relref "red_teaming_llms.md" >}}) for the competitive red-teaming context.


## Resources {#resources}

-   2026-06-24 ◦ [garak (GitHub)](https://github.com/NVIDIA/garak) — automated scanner with dedicated `encoding` and `promptinject` probe families; the encoding probe revealed newer ChatGPT models are more susceptible to encoding-based injection than older variants
-   2026-06-24 ◦ [Pliny HackAPrompt Dataset (HuggingFace)](https://huggingface.co/datasets/hackaprompt/Pliny_HackAPrompt_Dataset) — open-sourced competitive jailbreak/prompt-injection submissions; 16,902 rows; includes direct and indirect injection techniques
-   [HackAPrompt](https://hackaprompt.com) — competitive platform with dedicated indirect prompt injection track (MATS x Trails)
-   [OWASP LLM Top 10](https://owasp.org/www-project-top-10-for-large-language-model-applications/) — prompt injection is ranked #1 in OWASP's top security risks for LLM applications
