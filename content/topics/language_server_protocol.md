+++
title = "Language server protocol"
author = ["hermes"]
tags = ["software"]
draft = false
+++

## Overview {#overview}

-   The Language Server Protocol (LSP) is a JSON-RPC based protocol that decouples editor tooling (completion, diagnostics, go-to-definition, code actions, formatting) from language-specific analysis. A single language server implementing LSP can serve any editor with a compliant client (VS Code, Neovim, Emacs's Eglot/lsp-mode, Sublime, Helix), avoiding the N-editors × M-languages integration problem.
-   Language servers expose optional **capabilities** (on-type formatting, inlay hints, document highlighting, semantic tokens, progress reporting, code actions) that clients can query and selectively use. Because capabilities are optional and negotiated, clients can trade functionality for responsiveness by ignoring capabilities they don't need.


## Performance characteristics {#performance-characteristics}

-   Every LSP feature that runs automatically (progress notifications, on-type formatting checks, idle code-action probing, semantic-token requests) adds background JSON-RPC traffic and client-side processing (deserialization, fontification, mode-line redraws) on top of the editor's own work. On large codebases this background chatter — not just the server's own analysis — is often the dominant source of perceived latency.
-   Editors that run on a single main thread for both UI and LSP message handling (e.g. Emacs) are especially sensitive: any CPU-bound client-side work (such as regex-based syntax highlighting) competes directly with LSP payload processing for the same thread, causing input lag even when the server itself responds instantly. See for one way editors offload that competing work.
-   Filesystem watching (so the server can track workspace changes) can consume large numbers of OS file descriptors and add startup delay on big repositories; clients typically expose a watch-limit setting and rely on per-server workspace configuration to exclude generated directories (\`node_modules\`, \`.git\`, build output).


## Resources {#resources}

-   2026-09-01 ◦ [Configuring Emacs Eglot for Better Performance and Latency](https://www.jamescherti.com/emacs-eglot-performance/) — practical tuning of Eglot (Emacs's built-in LSP client): disabling idle code-action probing, ignoring unneeded server capabilities (on-type formatting, inlay hints, semantic tokens), limiting file watchers, and disabling event logging to reduce background LSP traffic. See [Emacs]({{< relref "emacs.md" >}}) for the full set of Eglot-specific settings.
