+++
title = "Word embeddings"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

Word embeddings are dense numerical vector representations of tokens (words or sub-words) in a high-dimensional space. The core property is that tokens with similar meanings or usage patterns are placed close together in this space, while dissimilar tokens are farther apart. Embeddings are the bridge between discrete symbolic text and the continuous mathematics of neural networks.


## Embedding matrix {#embedding-matrix}

In a Transformer, the embedding layer is a matrix of shape (vocab_size, d_model). Each row is the embedding vector for one token. Given a token ID, its embedding is retrieved by a simple lookup (indexing into the matrix). The entire matrix is a learned parameter updated during training.

GPT-2 (small) specifics:

-   Vocabulary size: 50,257 tokens
-   Embedding dimension: 768
-   Matrix size: 50,257 × 768 ≈ 39 million parameters
-   This is one of the largest single parameter blocks in the model


## Semantic geometry {#semantic-geometry}

The high-dimensional space encodes meaning geometrically:

-   Synonyms cluster together
-   Analogical relationships appear as vector arithmetic (the classic "king − man + woman ≈ queen" from Word2Vec)
-   Semantic distance can be measured with cosine similarity

This geometry emerges from training on next-token prediction — the model learns representations that make prediction tractable, and semantic similarity turns out to be highly predictive.


## Token embedding vs contextual embedding {#token-embedding-vs-contextual-embedding}

-   **Static (token) embeddings**: each token type has one fixed vector regardless of context. Examples: Word2Vec, GloVe. The word "bank" has the same representation in "river bank" and "bank account".
-   **Contextual embeddings**: the vector for a token changes depending on surrounding tokens. This is what [attention mechanism]({{< relref "attention_mechanism.md" >}}) produces — the output of each Transformer block is a new, context-informed embedding for each position. Models like BERT, GPT-2 produce contextual embeddings.


## Positional encoding and the final embedding {#positional-encoding-and-the-final-embedding}

Because Transformers are permutation-invariant without explicit position information, a positional encoding vector is added to the token embedding before the first Transformer block:

> final_embedding = token_embedding + positional_embedding

This combined vector carries both the semantic identity of the token and its position in the sequence.


### GPT-2 positional embeddings {#gpt-2-positional-embeddings}

GPT-2 trains a separate positional embedding matrix of shape (max_seq_len, 768). This is a learned parameter — unlike the fixed sinusoidal scheme in the original Transformer paper — and is summed element-wise with the token embedding.


## Embeddings beyond words {#embeddings-beyond-words}

The embedding paradigm generalises:

-   **Sentence embeddings**: a single vector for an entire sentence; used in semantic search and retrieval-augmented generation
-   **Image patch embeddings**: Vision Transformers (ViT) divide images into fixed patches and embed each patch
-   **Protein embeddings**: ESMFold and AlphaFold2 use residue embeddings over amino acid sequences


## Related topics {#related-topics}

-   [Transformer architecture]({{< relref "transformer_architecture.md" >}}) — embedding is the first stage; contextual embeddings emerge from each block
-   [Tokenisation]({{< relref "tokenisation.md" >}}) — tokenisation produces the discrete token IDs that are looked up in the embedding matrix
-   [Attention mechanism]({{< relref "attention_mechanism.md" >}}) — produces context-sensitive updated embeddings for every token
-   — embedding layer derivation is an early mathematical milestone in from-scratch AI curricula


## Resources {#resources}

-   2026-06-23 ◦ [Transformer Explainer (Polo Club, Georgia Tech)](https://poloclub.github.io/transformer-explainer/) — interactive view of GPT-2's 50,257 × 768 embedding matrix; visualises how token IDs map to 768-dimensional vectors and how positional encodings are summed to form the final embedding
-   2026-06-23 ◦ [How generative AI works (FT interactive)](https://ig.ft.com/generative-ai/) — visual explainer on embeddings as numerical representations of tokens; paywalled, to read
