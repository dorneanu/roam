+++
title = "AI Engineering"
author = ["hermes"]
tags = ["ai", "engineering"]
draft = false
+++

## Overview {#overview}

AI engineering is the discipline of building AI systems from first principles —
deriving algorithms from mathematics before introducing any framework. This
contrasts with the prevalent tutorial-first approach of learning ML through
frameworks (PyTorch, TensorFlow) without understanding underlying foundations.

The field spans from linear algebra foundations through neural network
architectures, tokenization, attention mechanisms, and ultimately autonomous
agent systems.


## Math-first methodology {#math-first-methodology}

The core pedagogical principle: every algorithm is derived from raw math before
a single framework is imported. Each lesson follows the pattern:

1.  Read the problem
2.  Derive the math
3.  Write the code
4.  Run the test
5.  Keep the artifact (runnable, multi-language implementation)

This approach is contrasted against fragmented AI education (scattered tutorials,
framework-first shortcuts) to produce engineers who understand why algorithms
work, not just how to call them.


## Core topics {#core-topics}

-   **Foundations**: linear algebra, calculus, probability
-   **Core ML**: backpropagation, gradient descent, supervised/unsupervised learning
-   **Deep learning**: neural networks, tokenizers, attention mechanisms, transformers
-   **Applied**: [Python]({{< relref "python.md" >}}), TypeScript, Rust, Julia implementations
-   **Advanced**: autonomous agent loops, swarm architectures


## Open source curricula {#open-source-curricula}


### AI Engineering from Scratch {#ai-engineering-from-scratch}

-   **Maintainer**: Rohit Ghumare (github.com/rohitg00)
-   **Scale**: 503 lessons across 20 phases, MIT licensed, free
-   **Scope**: "Linear algebra at one end, autonomous swarms at the other"
-   **Access**: github.com/rohitg00/ai-engineering-from-scratch; runs locally, no paywall
-   **Languages**: [Python]({{< relref "python.md" >}}), TypeScript, [Rust]({{< relref "rust.md" >}}), Julia


## Relationship to AI tooling {#relationship-to-ai-tooling}

AI engineering is a prerequisite for understanding and effectively using
higher-level tools like [AI]({{< relref "ai.md" >}}) assistants, [LLM wikis]({{< relref "llm_wiki.md" >}}), and [Claude Code]({{< relref "claude_code.md" >}}).
Understanding backpropagation and attention mechanisms from scratch enables
informed decisions about model selection, fine-tuning, and system architecture.


## Resources {#resources}

-   2026-06-04 ◦ [AI Engineering from Scratch](https://aiengineeringfromscratch.com/) — 503-lesson open-source curriculum, math-first approach, 20 phases from linear algebra to autonomous swarms, MIT license, [Python]({{< relref "python.md" >}})/TypeScript/[Rust]({{< relref "rust.md" >}})/Julia
-   2026-06-23 ◦ [Transformer Explainer (Polo Club, Georgia Tech)](https://poloclub.github.io/transformer-explainer/) — interactive GPT-2 walkthrough covering the core AI engineering stack: [tokenisation]({{< relref "tokenisation.md" >}}), [word embeddings]({{< relref "word_embeddings.md" >}}), [attention mechanism]({{< relref "attention_mechanism.md" >}}) (Q/K/V, masking, 12-head splitting), MLP layers, layer norm, residual connections, and temperature/top-k/top-p sampling; see also [Transformer architecture]({{< relref "transformer_architecture.md" >}})
-   2026-06-26 ◦ [nano-analyzer (GitHub, weareaisle)](https://github.com/weareaisle/nano-analyzer) — applied AI engineering: cheap-model + Unix-tool pipeline for zero-day vulnerability scanning; demonstrates 13 architectural patterns for running 2–13B parameter models reliably via [prompt engineering patterns]({{< relref "prompt_engineering_patterns.md" >}}) and [LLM tool use]({{< relref "llm_tool_use.md" >}})
