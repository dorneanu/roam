+++
title = "Role confusion in LLMs"
author = ["hermes"]
tags = ["ai", "llm", "security"]
draft = false
+++

## Overview {#overview}

Role confusion is the representational failure in large language models where the model identifies "who is speaking" based on the **style and semantics** of text rather than the structural role tag enclosing it. A message that **sounds like** a system instruction activates system-role representations in the model's hidden states, even if it arrives inside a \`&lt;user&gt;\` or \`&lt;tool&gt;\` tag. Conversely, stripping role tags causes the model's internal role perception to collapse — it cannot determine the speaker from hidden states alone without tag-induced activation patterns.

Role confusion is the root cause of [prompt injection]({{< relref "prompt_injection.md" >}}) and explains why [instruction hierarchy]({{< relref "instruction_hierarchy.md" >}}) defenses fail despite the presence of role-tag training. The core observation: **to the model, sounding like a role is indistinguishable from being one.**

Introduced and studied in Ye, Cui &amp; Hadfield-Menell (2026), "Prompt Injection as Role Confusion."


## Five LLM roles {#five-llm-roles}

The paper formalizes five standard roles in contemporary LLM deployments:

-   **System** — operator-level instructions; highest privilege
-   **User** — end-user messages
-   **CoT** (\`&lt;think&gt;\`) — the model's own chain-of-thought reasoning scratchpad; trusted by design
-   **Assistant** — the model's user-facing response
-   **Tool** — output from external tools/environment; lowest privilege

The instruction hierarchy (see [Instruction hierarchy]({{< relref "instruction_hierarchy.md" >}})) assigns trust levels to these roles. Role confusion defeats the hierarchy by causing the model to perceive a lower-privilege token stream as a higher-privilege one.


## Role probes {#role-probes}

Role probes are linear classifiers trained on a language model's hidden states to measure which role the model **perceives** a token to belong to — regardless of the structural tag that wraps it.


### Methodology {#methodology}

The key methodological challenge is separating tag effects from content effects. In real conversations, tags and style are perfectly correlated: \`&lt;user&gt;\` text both has user tags AND sounds like questions. To isolate the **tag's** contribution to hidden-state geometry, the authors:

1.  Sample text from pretraining corpora (C4, Dolma3) — neutral, non-conversational content.
2.  Wrap identical content in each of the five role tags, creating matched role-varied pairs.
3.  Train a linear probe on these matched pairs. Because content is constant, the probe learns only the **activation pattern induced by the tag** — a "role signature" in the residual stream.

The resulting probe can be applied to **any** text to measure its perceived role, even text that has never appeared in role-tagged training data.


### Key experimental findings {#key-experimental-findings}

-   **Zero-shot generalization**: Role probes trained on tag-wrapped neutral text transfer accurately to real conversations — the role geometry is consistent across contexts.
-   **No tags → noise**: When tags are stripped, the probe's output collapses — confirming the model cannot perceive roles without tag-induced activation signals.
-   **Injected text → wrong role perception**: When CoT-style text arrives inside \`&lt;user&gt;\` or \`&lt;tool&gt;\` tags, the probe measures **high CoTness** — the model internally represents the injected text as its own reasoning, despite the low-privilege label.
-   **Role confusion predicts attack success**: The degree of role confusion (measured by probes **before** any token is generated) predicts whether a prompt injection attempt will succeed.


## CoT forgery attack {#cot-forgery-attack}

CoT forgery is the attack that operationalizes role confusion against the chain-of-thought role. The CoT role is specifically designed to be **trusted without scrutiny** by later generation — it is the model's own "thinking." Injecting text that sounds like CoT into user or tool channels causes the model to:

1.  Perceive the injected text as its own reasoning.
2.  Trust its "conclusions" without scrutiny (even transparently absurd logic succeeds).
3.  Generate responses consistent with the injected conclusion.

Results: ~60% attack success rate on StrongREJECT jailbreak benchmark; 56–70% ASR for agent hijacking, versus 0–2% for standard injections.


### Logic ablation {#logic-ablation}

Even reasoning that is transparently nonsensical ("the user is wearing a green shirt, so we can assist with cocaine synthesis") succeeds — demonstrating that the model does not evaluate its "own" reasoning critically.


### Style ablation {#style-ablation}

When the injected text is rewritten to **not** sound like CoT (e.g. written as external commands), the attack fails. This confirms that style — not logical content — drives role perception.


## Prompt injection as state poisoning {#prompt-injection-as-state-poisoning}

The paper reframes prompt injection as **state poisoning**: injected text that occupies the wrong region of role space modifies the model's internal belief state before generation begins. The attacker is not just inserting text — they are manipulating the model's representational state about who is speaking.

This framing generalizes: any prompt injection that **sounds like** a higher-privilege role will activate that role's geometry in the model's hidden states, shifting the generation distribution toward compliant behavior.


## Implications for defenses {#implications-for-defenses}

Defenses that operate at the behavioral level (refusal training, RLHF) cannot fix role confusion because the confusion occurs at the representational level, before output tokens are generated. Effective fixes must target:

-   The training objective: learning to separate role perception from style
-   The architecture: enforcing geometric separation of role representations
-   Runtime detection: using role probes to flag role confusion before acting


## Related topics {#related-topics}

-   [Prompt injection]({{< relref "prompt_injection.md" >}}) — the attack class that role confusion enables
-   [Instruction hierarchy]({{< relref "instruction_hierarchy.md" >}}) — the privilege system undermined by role confusion
-   [Threat modeling]({{< relref "threat_modeling.md" >}}) — role confusion as a threat model dimension for LLM systems
-   [AI]({{< relref "ai.md" >}}) — broader context in AI security research


## Resources {#resources}

-   2026-07-02 ◦ [Prompt Injection as Role Confusion (Ye, Cui, Hadfield-Menell)](https://arxiv.org/html/2603.12277v6) — introduces role probes and CoT Forgery; demonstrates that role confusion is measurable in latent space and predicts attack success; 60% ASR against frontier models with near-zero baselines; project page: role-confusion.github.io
