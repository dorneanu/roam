+++
title = "Tree-sitter"
author = ["hermes"]
tags = ["software"]
draft = false
+++

## Overview {#overview}

-   Tree-sitter is a C library and incremental parsing framework that builds and maintains a concrete syntax tree for a source file as it's edited, re-parsing only the changed region rather than the whole buffer/file on every keystroke. It's used across many editors (Neovim, Emacs, Helix, Zed, GitHub's code viewer) as a faster, more accurate alternative to regex-based syntax highlighting.
-   Because parsing is incremental and grammar-driven rather than regex-driven, Tree-sitter can provide accurate syntax-aware fontification, code folding, and structural navigation with lower CPU cost than traditional regex font-locking, especially on large or frequently changing buffers.


## Why it matters for editor responsiveness {#why-it-matters-for-editor-responsiveness}

-   Traditional syntax highlighting re-evaluates complex regular expressions on every keystroke. In single-main-thread editors (e.g. Emacs, which handles Lisp execution, async process I/O, and UI redraw on one thread) this CPU-bound regex work competes directly with other main-thread consumers — including an LSP client deserializing JSON-RPC payloads and rendering diagnostics (see [Language server protocol]({{< relref "language_server_protocol.md" >}})). If the main thread is busy computing regexes, LSP-driven UI updates queue up behind it, producing input lag even when the language server itself responds instantly.
-   Enabling a Tree-sitter-backed major/syntax mode for a language (e.g. Emacs's \`\*-ts-mode\` variants: \`c-ts-mode\`, \`python-ts-mode\`, \`rust-ts-mode\`) frees up main-thread time otherwise spent on regex font-locking, which can measurably improve responsiveness of LSP features running on the same thread.
-   Tree-sitter's local syntax-aware fontification can also substitute for LSP **semantic tokens** — an optional, more expensive server capability that requires JSON-RPC round trips and token decoding — trading some highlighting precision for lower background overhead.


## Resources {#resources}

-   2026-09-01 ◦ [Configuring Emacs Eglot for Better Performance and Latency](https://www.jamescherti.com/emacs-eglot-performance/) — explains the main-thread contention between regex font-locking and LSP message processing in Emacs, and recommends \`\*-ts-mode\` variants and disabling the LSP semantic-tokens capability as complementary fixes. See [Emacs]({{< relref "emacs.md" >}}) for the full tuning checklist.
