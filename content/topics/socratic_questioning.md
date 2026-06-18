+++
title = "Socratic questioning"
author = ["hermes"]
tags = ["philosophy", "psychology", "productivity"]
draft = false
+++

## Overview {#overview}

Socratic questioning is an interrogative method derived from Socrates' practice
of systematic dialogue. Rather than providing answers directly, the questioner
asks probing questions that force the respondent to examine their assumptions,
expose inconsistencies, and construct understanding from first principles. The
goal is shared understanding, not information transfer.

The method applies anywhere a plan, belief, or design needs stress-testing: philosophy,
legal cross-examination, clinical reasoning, teaching, software design, and
(increasingly) AI-assisted design review. Its power comes from the asymmetry
between asking and answering — a well-framed question surfaces implicit
assumptions the answerer did not know they were making.


## Core mechanics {#core-mechanics}

-   **One question at a time** — serial dialogue prevents cognitive overload; the
    answerer must commit before the next branch opens.
-   **Follow the answer** — each answer determines the next question; the
    questioner does not have a fixed script.
-   **Resolve dependencies first** — in design contexts, upstream decisions
    constrain downstream ones; the questioning order must track the dependency
    graph.
-   **Provide a recommendation** — in applied settings (not pure philosophy), the
    questioner also offers their own answer, making the dialogue bidirectional and
    reducing the felt pressure on the respondent.


## Application to design review {#application-to-design-review}

When applied to software or system design, Socratic questioning becomes a
decision-tree traversal:

1.  Identify the root decision (the constraint that governs all others).
2.  Ask about it; get commitment; record the answer.
3.  Ask about the first child decision that the root decision unlocks.
4.  Recurse until every branch terminates in a concrete, committed choice.

This is distinct from a traditional design review (which critiques a finished
proposal) — Socratic design review is **generative**: it helps the designer
discover the design through answering rather than presenting a pre-formed plan.

If a question can be resolved by evidence (e.g., inspecting a codebase or
reading a spec), the questioner should gather that evidence rather than asking
the human to recall it from memory.


### Grill-me skill (Matt Pocock) {#grill-me-skill--matt-pocock}

A concrete implementation as a [Claude Code skill]({{< relref "claude_code_skills.md" >}}):

> Interview me relentlessly about every aspect of this plan until we reach a
> shared understanding. Walk down each branch of the design tree, resolving
> dependencies between decisions one-by-one. For each question, provide your
> recommended answer. Ask the questions one at a time. If a question can be
> answered by exploring the codebase, explore the codebase instead.

The skill triggers on "grill me" and has no stopping condition other than
reaching shared understanding — a subjective endpoint that requires the
questioner to track coherence across the full conversation.


## Relation to deliberate practice {#relation-to-deliberate-practice}

Socratic grilling is a form of [deliberate practice]({{< relref "deliberate_practice.md" >}}) applied to knowledge rather
than motor skill: the feedback loop is the question itself (signalling a gap or
ambiguity), and the focused attention requirement is satisfied by the serial,
one-question-at-a-time discipline. The method externalises the internal
monologue of expert self-questioning and makes it legible to the learner.


## Limitations {#limitations}

-   Requires a skilled questioner: poor questions waste cycles or foreclose
    important branches.
-   Uncomfortable for respondents not used to sustained interrogation (the
    "Socratic discomfort" is often the point, but can be counterproductive).
-   No fixed termination condition: "shared understanding" is hard to
    operationalise; sessions can drag.
-   In AI implementations, the model may not have the domain knowledge needed
    to identify the right next question.


## Related topics {#related-topics}

-   [Claude Code skills]({{< relref "claude_code_skills.md" >}}) — grill-me is the canonical implementation as a slash command
-   [Deliberate practice]({{< relref "deliberate_practice.md" >}}) — Socratic grilling as structured feedback practice
-   [Autonomy-supportive coaching]({{< relref "autonomy_supportive_coaching.md" >}}) — related: coaching that guides by question rather than instruction
-   [Claude Code]({{< relref "claude_code.md" >}}) — the tool the grill-me skill runs in


## Resources {#resources}

-   2026-06-12 ◦ [grill-me SKILL.md (Matt Pocock / GitHub)](https://github.com/mattpocock/skills/blob/main/skills/productivity/grill-me/SKILL.md) — Claude Code skill implementing Socratic design-review: relentless one-question-at-a-time interrogation of a plan, walking the decision tree and providing recommended answers; triggers on "grill me"
