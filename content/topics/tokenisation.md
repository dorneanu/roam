+++
title = "Tokenisation"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

Tokenisation is the process of breaking raw text into discrete units called tokens before a language model processes it. Tokens are the atomic inputs to a model's embedding layer; each token is assigned a unique integer ID and then looked up in the embedding matrix. Tokens can correspond to whole words, sub-words, individual characters, or byte sequences depending on the algorithm used. The vocabulary — the complete set of valid tokens — is fixed before training.


## Why not characters or words? {#why-not-characters-or-words}

-   **Character-level**: very long sequences, loses morphological groupings
-   **Word-level**: huge vocabulary, cannot handle rare or misspelled words, no sharing between related forms
-   **Sub-word** (dominant approach): compact vocabulary, handles novel words by decomposing them, shares embeddings across morphological variants


## Common sub-word algorithms {#common-sub-word-algorithms}


### Byte Pair Encoding (BPE) {#byte-pair-encoding--bpe}

Start with individual bytes/characters; repeatedly merge the most frequent adjacent pair until a target vocabulary size is reached. Used by GPT-2, GPT-3, GPT-4. GPT-2 has a vocabulary of 50,257 tokens.


### WordPiece {#wordpiece}

Similar to BPE but merges based on likelihood increase rather than raw frequency. Used by BERT.


### SentencePiece / Unigram {#sentencepiece-unigram}

Language-agnostic; treats the tokenisation problem probabilistically and can produce multiple valid segmentations. Used in LLaMA, T5, many multilingual models.


## Tokenisation in GPT-2 {#tokenisation-in-gpt-2}

-   Vocabulary size: 50,257 tokens
-   Algorithm: BPE over byte sequences (handles any Unicode without unknown-token issues)
-   Single words ("Data", "visualization") often map to one token each
-   Less common words are split: "empowers" → ["emp", "owers"]
-   The token "embedding matrix" has shape (50,257, 768), holding ~39M parameters in GPT-2 small


## Positional encoding {#positional-encoding}

Because the Transformer attention operation is permutation-invariant (it sees a set, not a sequence), position must be injected separately. Two main approaches:

-   **Learned positional embeddings** (GPT-2): a separate (max_seq_len, d_model) matrix is trained from scratch; position IDs are looked up just like token IDs and summed with token embeddings
-   **Sinusoidal positional encoding** (original Transformer, BERT): fixed mathematical functions of position; not learned

The final embedding = token embedding + positional embedding, giving the model both semantic meaning and sequence order.


## Token count vs word count {#token-count-vs-word-count}

Tokens are not words:

-   English text averages roughly 1.3–1.5 tokens per word
-   Code and non-English text may tokenise less efficiently
-   Context-window limits (e.g. 128K tokens) are therefore shorter in word-equivalents than the raw number implies


## Related topics {#related-topics}

-   [Transformer architecture]({{< relref "transformer_architecture.md" >}}) — tokenisation is the first preprocessing step before any Transformer layer
-   — the lookup table that maps token IDs to dense vectors
-   [Attention mechanism]({{< relref "attention_mechanism.md" >}}) — operates on the embedded token sequences
-   — tokeniser implementation is an early milestone in from-scratch curricula


## Resources {#resources}

-   2026-06-23 ◦ [Transformer Explainer (Polo Club, Georgia Tech)](https://poloclub.github.io/transformer-explainer/) — interactive tokenisation step: shows how "Data visualization empowers users to" is split into GPT-2 BPE tokens with IDs, then embedded as 768-dimensional vectors
-   2026-06-23 ◦ [How generative AI works (FT interactive)](https://ig.ft.com/generative-ai/) — visual explainer on how text becomes tokens; paywalled, to read
