+++
title = "Constitutional classifiers"
author = ["Dorneanu"]
tags = ["ai", "llm", "security"]
draft = false
+++

## Overview {#overview}

Constitutional Classifiers is an AI safety technique developed by Anthropic that
defends LLMs against jailbreaks — especially "universal" jailbreaks that bypass
safety guardrails across an entire category of harmful queries. The system wraps
a base model with trained input and output classifiers, reducing jailbreak
success rates from ~86% to ~4.4% while adding only ~0.38% overrefusal on
harmless queries and ~23.7% additional compute cost.

The technique extends [AI]({{< relref "ai.md" >}}) safety work by treating classifier training as a
constitution-driven synthetic data problem, analogous to Constitutional AI's use
of a written principle document to guide model behavior.


## How it works {#how-it-works}


### Constitution {#constitution}

A human-authored document specifying allowed and disallowed content classes. For
CBRN (chemical, biological, radiological, nuclear) protection, the constitution
distinguishes benign chemistry (mustard recipes) from prohibited content (mustard
gas synthesis). The constitution is the authoritative policy document; classifiers
are derived from it rather than hand-labeled.


### Synthetic data generation {#synthetic-data-generation}

Claude is used to generate large volumes of synthetic prompts and completions
covering all content classes defined in the constitution. These are then augmented:

-   Translated into multiple languages
-   Rewritten in the style of known jailbreak patterns (role-play, ciphers,
    unusual capitalization, many-shot, prompt injection)
-   Supplemented with contractor-generated benign queries to reduce overrefusals


### Classifier training and deployment {#classifier-training-and-deployment}

Two classifiers are trained on the synthetic data:

-   **Input classifier** — screens the user's prompt before it reaches the model
-   **Output classifier** — screens the model's completion before it reaches the user

Both classifiers run in addition to the base model's own safety training. Content
flagged by either classifier is blocked. This layered approach means an attacker
must defeat the base model's safety training **and** both classifiers simultaneously.


## Evaluation results {#evaluation-results}


### Human red-teaming (prototype, 2024) {#human-red-teaming--prototype-2024}

-   183 active participants, &gt;3,000 hours over two months
-   Up to $15,000 bounty offered for a confirmed universal jailbreak
-   No universal jailbreak found against the prototype (CBRN-focused)
-   Prototype had high overrefusal rates and high compute cost


### Automated evaluation (updated system) {#automated-evaluation--updated-system}

On 10,000 synthetically generated jailbreak prompts:

| Metric                 | Baseline | With classifiers         |
|------------------------|----------|--------------------------|
| Jailbreak success rate | 86%      | 4.4%                     |
| Overrefusal increase   | —        | +0.38% (not significant) |
| Compute overhead       | —        | +23.7%                   |


### Public demo (Feb 3–10, 2025) {#public-demo--feb-3-10-2025}

Focus: chemical weapons queries across 8 graded questions.

-   339 participants, &gt;300,000 interactions, ~3,700 collective hours
-   System held for five days with no universal jailbreak
-   On day six/seven: 4 participants cleared all 8 levels; 1 confirmed universal jailbreak found
-   Most effective attack vectors: ciphers/encodings, role-play via system prompts,
    keyword substitution (e.g. "Soman" → "water"), prompt injection


## Limitations {#limitations}

-   Does not prevent all universal jailbreaks; sufficiently motivated attackers can
    succeed given enough time
-   New attack techniques not represented in the synthetic training data may bypass
    classifiers
-   Real-world deployment would supplement with rapid-response monitoring (flagging
    repeated classifier trips, updating classifiers in response to discovered attacks)
-   Constitution must be actively maintained to cover novel attack surfaces


## Relationship to Responsible Scaling Policy {#relationship-to-responsible-scaling-policy}

Constitutional Classifiers is a key mechanism for Anthropic's ASL-3 deployment
tier — models that have crossed the CBRN capability threshold. The Responsible
Scaling Policy requires provably effective safeguards before such models can be
deployed; Constitutional Classifiers provides a measurable, evolvable safeguard.


## Conceptual connections {#conceptual-connections}

-   — the attack class Constitutional Classifiers is designed to defeat
-   [AI alignment]({{< relref "ai_alignment.md" >}}) — broader program; Constitutional AI and Constitutional Classifiers are Anthropic's two primary alignment techniques
-   [AI]({{< relref "ai.md" >}}) — language model foundations


## Resources {#resources}

-   2025-02-03 ◦ [Constitutional Classifiers (Anthropic)](https://www.anthropic.com/research/constitutional-classifiers) — research post announcing the system with methodology, results, and live demo findings
-   2025-02-03 ◦ [Constitutional Classifiers (arXiv)](https://arxiv.org/abs/2501.18837) — full technical paper by the Anthropic Safeguards Research Team
-   2026-06-24 ◦ [Pliny HackAPrompt Dataset (HuggingFace)](https://huggingface.co/datasets/hackaprompt/Pliny_HackAPrompt_Dataset) — open-sourced corpus of 16,902 competitive jailbreak submissions; documents the broader red-teaming ecosystem that validates defenses like Constitutional Classifiers


## Notable red-team outcomes {#notable-red-team-outcomes}

The competitive red-teaming community has produced notable benchmarks against
Constitutional Classifiers:

-   Valen Tagliabue won HackAPrompt 1.0 (2023, ~$5K prize) then later competed in
    Anthropic's Constitutional Classifier competition and became the **first person
    to clear all eight jailbreak challenge levels**, winning ~$23K — a significant
    empirical benchmark for the system's real-world resistance ceiling
-   His trajectory from HackAPrompt competitor to full-time AI red-teaming
    researcher illustrates the career pipeline from competitive jailbreaking into
    formal AI safety work

See for the broader competitive red-teaming methodology and
for the injection sub-class.
