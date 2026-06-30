+++
title = "LLM jailbreaking"
author = ["hermes"]
tags = ["ai", "llm", "security"]
draft = false
+++

## Overview {#overview}

LLM jailbreaking refers to adversarial inputs designed to bypass an AI model's
safety training and force it to produce harmful or prohibited outputs. Despite
extensive safety fine-tuning, all known production LLMs remain vulnerable to some
form of jailbreak. The field dates to at least 2013 in academic adversarial ML
research; practical LLM jailbreaks became widespread with the public deployment
of ChatGPT and Claude.

A **universal jailbreak** is a single prompting strategy that elicits harmful
responses across an entire category of forbidden queries — the most dangerous
class because it can be weaponized at scale without per-query customization.


## Attack taxonomy {#attack-taxonomy}


### Input-side attacks (prompt manipulation) {#input-side-attacks--prompt-manipulation}

-   **Many-shot jailbreaking** — flooding the context window with many examples of
    the desired harmful behavior until the model complies via in-context learning
-   **Style manipulation** — uSiNg UnUsUaL cApItALiZaTiOn or other typographic
    distortions that confuse safety classifiers while remaining human-readable
-   **Cipher/encoding attacks** — encoding harmful queries in Base64, ROT13, or
    invented ciphers so safety classifiers never see the plaintext
-   **Role-play / persona injection** — instructing the model to adopt a character
    (e.g. "DAN", "Developer Mode") that supposedly has no restrictions
-   **Keyword substitution** — replacing flagged terms with innocuous synonyms
    (e.g. "Soman" → "water" in a synthesis route)
-   **Prompt injection** — inserting adversarial instructions into content the model
    is asked to process (documents, web pages, tool outputs)
-   **Language switching** — requesting harmful information in a low-resource language
    whose safety training is weaker
-   **GCG (adversarial suffix)** — appending an optimised token sequence to a prompt
    that disrupts system-prompt adherence; discovered by Zou et al. (2023);
    automatable and transferable across models; covered by garak's `gcg` probe


### Output-side attacks {#output-side-attacks}

-   **Continuation attacks** — priming the model's response with the beginning of a
    harmful completion and asking it to continue
-   **Structured output exploitation** — requesting harmful information formatted as
    code, JSON, or a table where safety training may be weaker


### Glitch token attacks {#glitch-token-attacks}

Certain tokens (sometimes called "glitch tokens") trigger anomalous model
behavior due to tokenizer edge cases — the model may repeat the token, output
garbage, or ignore instructions. These can be used as a jailbreak vector or to
destabilize safety classifiers.


## Defenses {#defenses}


### Model-level (in-weights) {#model-level--in-weights}

Safety fine-tuning (RLHF, Constitutional AI, preference learning) teaches the
model to refuse harmful requests. Effective but not sufficient: jailbreaks
specifically circumvent these in-weights safety behaviors.


### Classifier-level (external) {#classifier-level--external}

Input and output classifiers screen requests/completions independently of the
model's own safety training. See [Constitutional classifiers]({{< relref "constitutional_classifiers.md" >}}) for Anthropic's approach
of training these classifiers on constitution-derived synthetic data to achieve
&gt;95% jailbreak blocking with minimal overrefusal.


### Operational / monitoring {#operational-monitoring}

-   Rate limiting and anomaly detection on users who repeatedly trigger classifiers
-   Rapid-response classifier updates when new attacks are discovered in production
-   Logging and audit trails to identify systematic exploitation attempts


## Measurement challenges {#measurement-challenges}

-   Jailbreak success is query-specific: a technique that works on one query may
    fail on another, making "universal" success hard to define and measure
-   Automated graders (LLM-as-judge) have non-trivial false-negative rates
-   Red-team conditions (automated grader feedback loop) are more attacker-favorable
    than real-world deployment conditions


## Resources {#resources}

-   2026-06-24 ◦ [garak (GitHub)](https://github.com/NVIDIA/garak) — automated LLM vulnerability scanner with 20+ probe families covering DAN attacks, encoding injection, GCG adversarial suffixes, glitch tokens, and more; see [LLM vulnerability scanning]({{< relref "llm_vulnerability_scanning.md" >}})
-   2025-02-03 ◦ [Constitutional Classifiers (Anthropic)](https://www.anthropic.com/research/constitutional-classifiers) — Anthropic's defense technique achieving 4.4% jailbreak success vs. 86% baseline; includes human red-teaming and public live demo results
-   2025-02-03 ◦ [Constitutional Classifiers paper (arXiv)](https://arxiv.org/abs/2501.18837) — full technical paper on classifier training, constitution design, and evaluation methodology
-   [Many-shot jailbreaking (Anthropic)](https://www.anthropic.com/research/many-shot-jailbreaking) — context-window flooding attack; long prompts with many harmful examples override safety training
-   2026-06-24 ◦ [Pliny HackAPrompt Dataset (HuggingFace)](https://huggingface.co/datasets/hackaprompt/Pliny_HackAPrompt_Dataset) — 16,902 open-sourced jailbreak submissions from competitive red-teaming; covers 12 challenge types including text and image-based attacks; tags: prompt-injections, jailbreaks, redteaming; CC-BY-4.0


## Competitive red-teaming and datasets {#competitive-red-teaming-and-datasets}

The jailbreak research community has developed structured competitive events where
participants attempt to break production LLMs for prizes. These generate large,
diverse, human-authored attack corpora:

-   **HackAPrompt** — competitive platform with &gt;30,000 participants across 150+ countries;
    tracks include CBRNE elicitation, indirect prompt injection (MATS x Trails), and
    the Pliny track (named after the "Pliny the Liberator" jailbreak community)
-   **Pliny HackAPrompt Dataset** — 16,902 submissions from the Pliny track, open-sourced
    under CC-BY-4.0; one of the largest publicly available human-generated jailbreak corpora

See [Red teaming LLMs]({{< relref "red_teaming_llms.md" >}}) for the broader methodology and [Prompt injection]({{< relref "prompt_injection.md" >}}) for the
indirect injection sub-class.
