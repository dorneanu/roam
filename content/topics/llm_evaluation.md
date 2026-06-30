+++
title = "LLM evaluation"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

LLM evaluation (evals) is the systematic practice of measuring a language model
or LLM-powered application against a defined set of test cases and criteria.
Unlike deterministic unit tests, evals must handle non-deterministic outputs —
the same input can produce multiple valid responses — so evaluation frameworks
use a mix of assertion types: string/regex matching, semantic similarity,
LLM-as-judge scoring, and human review. Evals serve both as quality gates
during development (catching prompt regressions before deployment) and as
benchmarks for choosing between models or configurations.

Evaluation frameworks typically separate concerns into: test-case definition,
model execution, assertion/detection, and reporting. They can be run locally,
as part of CI/CD pipelines, or as part of [LLM vulnerability scanning]({{< relref "llm_vulnerability_scanning.md" >}}) workflows
that use adversarial probes to find safety failures.


## Core concepts {#core-concepts}


### Assertion types {#assertion-types}

-   **Exact/regex match** — output must contain or equal a string pattern; fast and
    cheap but brittle for generative outputs
-   **Semantic similarity** — embedding-based cosine similarity against a reference
    answer; tolerates paraphrase but requires an embedding model
-   **LLM-as-judge** — a second LLM grades the output against criteria (correctness,
    groundedness, conformity, style); flexible but introduces model bias
-   **Custom functions** — arbitrary code assertions for domain-specific logic


### LLM-as-judge {#llm-as-judge}

Using a capable LLM (often GPT-4-class) to score or classify another model's
outputs. Common judge tasks: factual correctness, answer groundedness in
retrieved context (for RAG), refusal appropriateness, style conformity. The
Giskard library's built-in judges include \`Groundedness\`, \`Conformity\`, and
\`LLMJudge\`. Promptfoo supports LLM-as-judge via its \`llm-rubric\` assertion type.

Key caveat: judge models have their own biases and may favor outputs that
stylistically resemble their own outputs.


### Regression testing {#regression-testing}

Running the same eval suite before and after a model update, prompt change, or
fine-tuning run to detect behavioral regressions. Frameworks like promptfoo
integrate with CI/CD (GitHub Actions, GitLab CI) to fail builds when pass rates
drop below thresholds.


### Multi-turn / agentic evaluation {#multi-turn-agentic-evaluation}

Testing full conversations or multi-step agent pipelines, not just single
input-output pairs. Giskard v3's Scenario API supports defining multi-turn
interactions with \`.interact()\` chains. This is essential for evaluating agents
that maintain state across turns or take external actions.


## Tooling {#tooling}


### promptfoo {#promptfoo}

Open-source CLI + library (Node.js/TypeScript, also \`pip install promptfoo\`).
Developer-first, runs 100% locally (prompts never leave the machine). Acquired
by OpenAI in 2025, remains MIT licensed.

Key features:

-   YAML-based test-case definition
-   Side-by-side model comparison (OpenAI, Anthropic, Azure, Bedrock, Ollama, etc.)
-   Built-in assertion types plus LLM-as-judge
-   CI/CD integration with GitHub Actions
-   Red-teaming / [LLM vulnerability scanning]({{< relref "llm_vulnerability_scanning.md" >}}) mode that generates adversarial test suites
-   Pull-request code scanning for LLM security issues
-   Powers LLM apps serving 10M+ users in production


### Giskard (giskard-checks) {#giskard--giskard-checks}

Open-source Python library (Apache 2.0) for testing agentic systems. The
\`giskard-checks\` package provides the Scenario API for defining eval suites;
\`giskard-scan\` adds automated [red teaming]({{< relref "red_teaming_llms.md" >}}) against OWASP LLM Top-10 categories.

Key features:

-   Async-first, lightweight, modular package architecture
-   Scenario API with \`.interact()\` / \`.check()\` chaining
-   Built-in judges: \`Groundedness\`, \`Conformity\`, \`LLMJudge\`
-   RAG evaluation (planned in \`giskard-rag\`)
-   Designed for Python 3.12+; no heavy ML dependencies in core


## Relationship to red-teaming {#relationship-to-red-teaming}

Eval frameworks and [red teaming]({{< relref "red_teaming_llms.md" >}}) lie on a spectrum. Standard evals test expected
behaviors (does the model answer correctly?); red-team evals test failure modes
(can an adversary make the model misbehave?). Tools like promptfoo and Giskard
straddle both: they offer standard eval suites for quality and adversarial suites
for security. [LLM vulnerability scanning]({{< relref "llm_vulnerability_scanning.md" >}}) tools like garak focus exclusively on the
adversarial side.


## Resources {#resources}

-   2026-06-24 ◦ [promptfoo (GitHub)](https://github.com/promptfoo/promptfoo) — open-source CLI and library for LLM evals and red-teaming; supports model comparison, CI/CD integration, and code scanning; MIT licensed; acquired by OpenAI
-   2026-06-24 ◦ [Giskard (GitHub)](https://github.com/Giskard-AI/giskard-oss) — open-source Python library for testing and evaluating agentic systems; scenario API, LLM-as-judge, vulnerability scanner; Apache 2.0
-   2026-06-24 ◦ [Giskard documentation](https://docs.giskard.ai/oss) — Giskard v3 docs covering giskard-checks, scenario API, and giskard-scan
-   2026-06-24 ◦ [promptfoo documentation](https://www.promptfoo.dev/docs/intro/) — full docs for evals, red teaming, CI/CD integration, and provider configuration
