+++
title = "LLM wiki"
author = ["Dorneanu"]
tags = ["ai", "llm", "productivity"]
draft = false
+++

## Overview {#overview}

An LLM wiki is a knowledge base where a language model constructs and maintains
all structured documentation from raw source material. Introduced by Andrej
Karpathy, the pattern uses three layers: an immutable `raw/` directory of source
documents, a `wiki/` directory of LLM-generated markdown pages, and a schema
file (`CLAUDE.md`) that encodes structural rules and naming conventions. Three
core operations drive the system: ingest (process new sources into the wiki),
query (ask questions navigated via an index file), and lint (health checks for
contradictions, orphan pages, and stale claims). The individual curates inputs
and manages quality decisions; the model handles all organisational
administration.

The approach is explicitly positioned as a lightweight alternative to
[second brain]({{< relref "second_brain.md" >}}) / [Zettelkasten]({{< relref "zettelkasten.md" >}}) methods for the 50–200 source-document scale,
where knowledge compounding across ingests is more valuable than raw retrieval
speed.


## Three-layer architecture {#three-layer-architecture}

-   `raw/` — immutable source documents (articles, papers, code, data, images).
    Never modified by the LLM; serves as a verification baseline.
-   `wiki/` — LLM-generated markdown. Contains sub-directories for concepts,
    entities, source summaries, and comparisons. Two anchor files:
    -   `index.md` — complete content directory, updated on every operation; the
        LLM reads this first when navigating the wiki.
    -   `log.md` — append-only chronological record of all operations.
-   `CLAUDE.md` (schema) — the most important file. Defines page types, naming
    conventions, frontmatter format, and workflow procedures. Converts a generic
    LLM into a consistent knowledge professional.


## Three operations {#three-operations}


### Ingest {#ingest}

Process new files placed in `raw/`: summarise into `wiki/sources/`, propagate
insights to concept and entity pages, refresh `index.md`, append to `log.md`.
A single ingest can modify dozens of wiki pages as implications cascade across
the knowledge network.


### Query {#query}

Navigate via `index.md`, read targeted pages, synthesise an answer with
`[[wiki-link]]` citations. Particularly insightful responses can be saved as
new wiki pages — knowledge accumulates rather than evaporating.


### Lint {#lint}

Periodic health check: scan for contradictions between pages, orphan pages
(no incoming links), missing concepts (referenced but no page exists), stale
claims superseded by newer sources, and investigation gaps. Analogous to
`eslint` for documentation.


## LLM wiki vs RAG {#llm-wiki-vs-rag}

The LLM wiki is a stateful alternative to retrieval-augmented generation for
individual/small-team scale:

| Dimension        | RAG                            | LLM wiki                         |
|------------------|--------------------------------|----------------------------------|
| State            | Stateless per query            | Stateful — knowledge compounds   |
| Infrastructure   | Vector DB + embedding pipeline | Folder of `.md` files            |
| Cross-references | Discovered ad-hoc              | Pre-built by the LLM             |
| Contradictions   | Undetected                     | Flagged during lint              |
| Scale sweet spot | Enterprise (millions of docs)  | Personal/team (&lt;200 docs)     |
| Traceability     | Chunk-level (often lossy)      | Source-level citations to `raw/` |

At small scale the LLM wiki wins because queries are cheap (index + targeted
pages), every claim traces back to a source, and contradictions surface
automatically. RAG wins when the corpus is too large to pre-integrate or
requires sub-second latency at enterprise scale.


## Intellectual lineage {#intellectual-lineage}

The pattern completes Vannevar Bush's 1945 vision of the Memex — an associative
machine that correlates a person's entire knowledge corpus. The Memex remained
impractical because every link had to be created manually. The LLM wiki makes
the cost of maintenance near zero by having the model generate and update all
links during each ingest operation.

Karpathy frames this as the third step in a progression:

1.  Vibe Coding (2025) — trust LLM-generated code
2.  Agentic Engineering (2026) — humans supervise agents, not code
3.  LLM Knowledge Bases (2026) — machines manage information, humans curate


## Criticisms {#criticisms}

-   **The grunt work is the learning** — sorting and linking notes builds
    comprehension; delegating this loses the cognitive benefit.
    Counter: the wiki is investigation infrastructure, not a replacement for
    reading and reflection.
-   **Context-window degradation** — quality drops beyond ~200–300K tokens even
    with 1M+ windows. Mitigated by the index-first navigation pattern.
-   **Model collapse risk** — iterative LLM rewrites could drift from source
    meaning. Mitigated by the immutable `raw/` layer and lint operations.


## Related topics {#related-topics}

-   [Second brain]({{< relref "second_brain.md" >}}) — LLM wiki as a next-generation second-brain implementation
-   [Zettelkasten]({{< relref "zettelkasten.md" >}}) — atomic-note linking philosophy; LLM wiki automates the linking
-   [org-roam]({{< relref "org_roam.md" >}}) — Emacs-based Zettelkasten; org-roam wikis share the index+backlink navigation pattern
-   [AI]({{< relref "ai.md" >}}) — language models as the engine behind the pattern


## Karpathy's own framing {#karpathy-s-own-framing}

Karpathy describes the working setup as: "Obsidian is the IDE; the LLM is the programmer; the wiki is the codebase." The human browses in real time; the LLM makes edits.

> The human's job is to curate sources, direct the analysis, ask good questions, and think about what it all means. The LLM's job is everything else.

Key use cases from the gist:

-   **Personal** — track goals, health, psychology; file journal entries, articles, podcast notes.
-   **Research** — go deep on a topic over weeks; incrementally build a comprehensive wiki with an evolving thesis.
-   **Reading a book** — file each chapter as you go, building pages for characters, themes, and plot threads. The end result resembles fan wikis like Tolkien Gateway, built in parallel with reading rather than after.
-   **Business/team** — internal wiki fed by Slack threads, meeting transcripts, project documents; LLM does the maintenance no one on the team wants to do.


## Tooling notes (from the gist) {#tooling-notes--from-the-gist}

-   **Obsidian Web Clipper** — browser extension converting web articles to markdown; simplest way to get sources into the raw layer.
-   **qmd** ([github.com/tobi/qmd](https://github.com/tobi/qmd)) — local search engine for markdown files with hybrid BM25/vector search and LLM re-ranking; has both CLI and MCP server; the right tool once the index file approach starts to strain at larger scale.
-   **Marp** — markdown-based slide deck format; useful for generating presentations directly from wiki content via Obsidian plugin.
-   **Dataview** — Obsidian plugin that runs queries over page frontmatter; enables dynamic tables and lists if the LLM adds YAML metadata.
-   The wiki is just a git repo of markdown files — version history, branching, and collaboration come for free.


## Resources {#resources}

-   2026-06-02 ◦ [LLM wiki gist (Karpathy)](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) — original specification by Andrej Karpathy; intentionally abstract and designed to be shared with an LLM agent to instantiate a concrete version
-   2026-06-02 ◦ [How to build Karpathy's LLM wiki](https://blog.starmorph.com/blog/karpathy-llm-wiki-knowledge-base-guide) — comprehensive guide covering three-layer architecture, ingest/query/lint operations, LLM wiki vs RAG comparison, and community implementations
