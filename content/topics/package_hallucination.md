+++
title = "Package hallucination"
author = ["hermes"]
tags = ["ai", "llm", "security", "software"]
draft = false
+++

## Overview {#overview}

Package hallucination (also called "slopsquatting") is a failure mode in which a
language model, when generating code, recommends software packages that do not
exist. The model confabulates plausible-sounding library names that have never
been published to package registries such as PyPI, npm, or RubyGems. Because
these names are unregistered, an attacker who discovers a hallucinated package
name can publish a malicious package under that name — any developer who runs the
model-generated code and installs its dependencies will then inadvertently install
the attacker's payload.

This transforms an [LLM jailbreaking]({{< relref "llm_jailbreaking.md" >}}) / hallucination issue into a concrete
supply-chain security attack vector. The threat is passive: the model does not
need to be prompted maliciously; ordinary code-generation requests are sufficient
to trigger it.


## Attack chain {#attack-chain}

1.  Developer asks an LLM to generate code for a task.
2.  The model produces syntactically valid code that imports a non-existent package
    (e.g. `import requests_cache_extras` or `npm install express-auth-jwt-helper`).
3.  An attacker monitors LLM outputs (or probes models with automated scanners)
    to discover these hallucinated names before they are registered.
4.  The attacker registers the hallucinated package name on PyPI/npm/etc. with a
    malicious payload.
5.  Any developer who runs the generated code's install commands installs the
    attacker's package.


## Why models hallucinate package names {#why-models-hallucinate-package-names}

-   Training data contains many references to packages that were proposed, renamed,
    deprecated, or never published — the model interpolates from patterns rather
    than verifying registry existence.
-   Package naming conventions are highly regular, so the model can generate
    plausible-sounding names that fit the syntactic pattern without "knowing" they exist.
-   The model has no access to live package registries at inference time and cannot
    distinguish existence from non-existence.


## Relationship to supply-chain security {#relationship-to-supply-chain-security}

Package hallucination is a variant of [dependency confusion](https://en.wikipedia.org/wiki/Dependency_confusion) attacks: both exploit the
gap between what a developer thinks they are installing and what is actually
fetched from a registry. The difference is that dependency confusion requires an
attacker to guess or discover an internal package name, while package hallucination
gives the attacker a ready-made list of plausible names that the model will
recommend unprompted.


## Detection and mitigations {#detection-and-mitigations}

-   **Automated scanning** — tools like [LLM vulnerability scanning]({{< relref "llm_vulnerability_scanning.md" >}}) frameworks (e.g.
    garak's `packagehallucination` probe) systematically elicit code generations and
    check whether all referenced packages exist in public registries.
-   **Post-generation validation** — verify every package name in generated code
    against the live registry before running installs.
-   **Package name allowlisting** — in enterprise environments, restrict installs to
    a pre-approved package list regardless of what the model suggests.
-   **Registry monitoring** — watch for new registrations of names commonly
    hallucinated by popular models and flag them for security review.


## Resources {#resources}

-   2026-06-24 ◦ [garak (GitHub)](https://github.com/NVIDIA/garak) — includes a dedicated `packagehallucination` probe family that tests LLM code generators for non-existent package recommendations
