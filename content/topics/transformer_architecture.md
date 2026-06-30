+++
title = "Transformer architecture"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

The Transformer is a neural network architecture introduced in the 2017 paper "Attention is All You Need" that has become the dominant architecture for deep learning across text, audio, image, and other modalities. Text-generative Transformers operate on the principle of next-token prediction: given an input prompt, the model predicts the most probable next token (word or sub-word). The core innovation is the self-attention mechanism, which allows the model to process entire sequences and capture long-range dependencies more effectively than RNNs or LSTMs.


## Three key components {#three-key-components}

Every text-generative Transformer has three major stages:

1.  **Embedding**: input text is broken into , each converted to a numerical vector () augmented with positional encoding
2.  **Transformer blocks**: stacked layers each containing a multi-head and an MLP sub-layer; representations deepen with each layer
3.  **Output probabilities**: a linear projection and softmax layer convert the final embeddings into a probability distribution over the vocabulary for next-token sampling


### Transformer block internals {#transformer-block-internals}

Each block contains, in order:

-   Layer normalisation (pre-attention)
-   Multi-head self-attention
-   Residual connection (input + attention output)
-   Layer normalisation (pre-MLP)
-   MLP (two linear layers with GELU activation, 4× expansion then compression)
-   Residual connection (input + MLP output)

GPT-2 (small) stacks 12 such blocks and has 124 million parameters total.


## MLP sub-layer {#mlp-sub-layer}

The MLP processes each token independently (no cross-token communication):

-   Linear layer expands from d_model (768 in GPT-2 small) to 4 × d_model (3072)
-   GELU non-linearity
-   Linear layer compresses back to d_model

While attention **routes information between tokens**, the MLP **refines each token's representation** within the expanded space, encoding factual knowledge and higher-order patterns.


## Auxiliary features {#auxiliary-features}


### Residual connections {#residual-connections}

Shortcuts that add a layer's input directly to its output, allowing gradients to flow through deep stacks without vanishing. First introduced by ResNet (2015); used twice per Transformer block in GPT-2.


### Layer normalisation {#layer-normalisation}

Normalises activations across the feature dimension to keep mean ≈ 0 and variance ≈ 1 at each step. Applied before both the attention and MLP sub-layers ("pre-norm" placement). Stabilises training and improves convergence speed.


### Dropout {#dropout}

Randomly zeroes a fraction of weights during training to prevent overfitting; deactivated at inference, effectively ensembling the trained sub-networks.


## Output sampling {#output-sampling}

After the final Transformer block, a linear projection maps to vocabulary size (50,257 tokens in GPT-2) producing logits. Softmax converts logits to probabilities. Next token is then sampled using:

-   **Temperature**: divides logits before softmax; &lt;1 sharpens, &gt;1 flattens the distribution
-   **Top-k**: restricts sampling to the k highest-probability tokens
-   **Top-p (nucleus)**: restricts to the smallest set of tokens whose cumulative probability exceeds p


## Scope beyond language {#scope-beyond-language}

Transformers now power:

-   Audio generation (speech and music models)
-   Image recognition (Vision Transformers / ViT)
-   Protein structure prediction (AlphaFold2)
-   Game-playing agents


## Related topics {#related-topics}

-   — the core self-attention operation inside each block
-   — how raw text is split into tokens before embedding
-   — the vector representations assigned to each token
-   — curriculum covering Transformers from mathematical first principles
-   [LLM wiki]({{< relref "llm_wiki.md" >}}) — knowledge-base pattern built on top of Transformer-based models


## Resources {#resources}

-   2026-06-23 ◦ [Transformer Explainer (Polo Club, Georgia Tech)](https://poloclub.github.io/transformer-explainer/) — interactive browser-based walkthrough of GPT-2 covering tokenisation, embeddings, Q/K/V matrices, 12-head masked self-attention, MLP, layer norm, residual connections, and temperature/top-k/top-p sampling
-   2026-06-23 ◦ [How generative AI works (FT interactive)](https://ig.ft.com/generative-ai/) — visual explainer on tokens, embeddings, and attention; paywalled, to read
