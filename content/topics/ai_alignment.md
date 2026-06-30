+++
title = "AI alignment"
author = ["Dorneanu"]
tags = ["ai", "philosophy"]
draft = false
+++

## Overview {#overview}

AI alignment is the research program concerned with ensuring AI systems reliably
pursue goals and exhibit behaviors that are safe, beneficial, and consistent with
human values. The core challenge is that capable AI systems may pursue unintended
objectives — not from malice but from the difficulty of specifying human values
precisely in a training objective.

Alignment research spans technical methods (how to train models to behave well)
and governance questions (what institutional structures ensure safety). It is
distinct from AI capabilities research, though the two interact strongly: more
capable models create both larger benefits and larger alignment challenges.


## Key research directions {#key-research-directions}


### Constitutional AI (Anthropic) {#constitutional-ai--anthropic}

A technique in which a model is given a written "constitution" — a set of
principles it should embody — and trained through a cycle of self-critique and
revision. The model is prompted to evaluate its own outputs against constitutional
principles and to rewrite responses that violate them. This produces a model that
is both helpful and harmless without requiring human labelers to evaluate every
output. Constitutional AI is the conceptual ancestor of .

> The key idea is to use a set of principles, rather than human labelers, to
> provide the model with feedback on its own outputs.
> — Anthropic, Constitutional AI paper (2022)


### RLHF (Reinforcement Learning from Human Feedback) {#rlhf--reinforcement-learning-from-human-feedback}

Human raters evaluate model outputs and these ratings are used to train a reward
model, which then supervises further fine-tuning via RL. RLHF was the dominant
alignment technique before Constitutional AI and remains widely used. Limitations
include reward hacking and the cost of large-scale human annotation.


### Scalable oversight {#scalable-oversight}

How to evaluate AI outputs that are too complex or numerous for humans to reliably
assess. Proposed approaches include debate (AI systems argue for competing answers
while a human judges), amplification (bootstrapping human oversight through
AI-assisted decomposition), and recursive reward modeling.


### Constitutional Classifiers {#constitutional-classifiers}

Anthropic's applied safety technique: separate input/output classifiers trained
on constitution-derived synthetic data to detect and block jailbreaks at inference
time. See for full detail. Reduces jailbreak success
from 86% to 4.4% with minimal overrefusal.


## Responsible Scaling Policy {#responsible-scaling-policy}

Anthropic's Responsible Scaling Policy (RSP) defines AI Safety Levels (ASL) that
gate model deployment on demonstrated safety measures:

-   **ASL-2** — current production models; standard safety training sufficient
-   **ASL-3** — models that cross the CBRN (chemical, biological, radiological,
    nuclear) capability threshold; require proven safeguards like Constitutional
    Classifiers before deployment
-   **ASL-4 and above** — not yet reached; would require additional, more stringent
    safeguard demonstrations

The RSP creates a formal commitment: Anthropic will not deploy a model at a given
capability level unless it can demonstrate adequate mitigations. Constitutional
Classifiers is positioned as the primary mitigation for ASL-3 jailbreaking risks.


## Overrefusal as an alignment failure mode {#overrefusal-as-an-alignment-failure-mode}

Safety training and classifiers that are too restrictive produce **overrefusal**:
declining legitimate, harmless queries because they superficially resemble
prohibited ones. Overrefusal is itself an alignment failure — the model fails to
be genuinely helpful, which is a stated value. The Constitutional Classifiers
research explicitly measures and minimizes overrefusal, achieving only a 0.38%
increase in refusal rate on benign queries.


## Red teaming as an alignment evaluation method {#red-teaming-as-an-alignment-evaluation-method}

Red teaming — inviting skilled adversaries to attempt to break safety measures —
is a key empirical evaluation method in alignment. It differs from automated
evaluation in that human red-teamers can discover qualitatively novel attack
strategies that automated benchmarks miss. Anthropic ran formal bug-bounty red
teams (183 participants, &gt;3,000 hours) and a public demo (339 participants,
~3,700 hours) to evaluate Constitutional Classifiers.


## Resources {#resources}

-   2025-02-03 ◦ [Constitutional Classifiers (Anthropic)](https://www.anthropic.com/research/constitutional-classifiers) — applied alignment: classifier-based jailbreak defense; results from human red-teaming and public demo
-   2022-12-15 ◦ [Constitutional AI (Anthropic arXiv)](https://arxiv.org/abs/2212.08073) — original Constitutional AI paper introducing the constitution + self-critique training loop
-   [Responsible Scaling Policy (Anthropic)](https://www.anthropic.com/news/announcing-our-updated-responsible-scaling-policy) — formal policy defining ASL deployment gates and required safeguards per capability tier
-   2026-06-24 ◦ [Pliny HackAPrompt Dataset (HuggingFace)](https://huggingface.co/datasets/hackaprompt/Pliny_HackAPrompt_Dataset) — competitive red-teaming corpus of 16,902 jailbreak submissions; demonstrates the scale and diversity of adversarial pressure that alignment defenses must withstand; see for methodology
