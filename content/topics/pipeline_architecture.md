+++
title = "Pipeline Architecture"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

The **pipeline** architecture (also known as **pipes and filters**) is one of the fundamental monolithic architecture styles. Known from Unix shell pipelines (Bash, Zsh), functional map/reduce abstractions, ETL tools, EDI transformations, and workflow orchestrators.

Isomorphic shape: _a single deployment unit with functionality contained within filters connected by unidirectional pipes._


## Topology {#topology}


### Filters {#filters}

Self-contained, stateless components performing **one specific function**. Four types:

-   **Producer**: starting point, outbound only (source). Examples: UI, Kafka subscriber.
-   **Transformer**: accepts input, optionally transforms data, forwards. Functional equivalent: map.
-   **Tester**: accepts input, tests against criteria, conditionally forwards. Functional equivalent: filter/reduce.
-   **Consumer**: termination point. Examples: persist to database, display on UI.

**The Knuth/McIlroy story**: Donald Knuth wrote 10+ pages of Pascal to find the _n_ most frequent words in a file. Doug McIlroy solved it with a Unix pipeline that fits in a tweet:

```sh
tr -cs A-Za-z '\n' | tr A-Z a-z | sort | uniq -c | sort -rn | sed ${1}q
```


### Pipes {#pipes}

Unidirectional, point-to-point communication channels between filters. Prefer smaller payloads for performance. Can be synchronous or asynchronous (threads or embedded messaging in monolithic deployments; REST/messaging/streaming in distributed deployments).


## Cloud deployments {#cloud-deployments}

Well suited for cloud due to high modularity. AWS Step Functions: each filter as a separate Lambda in a Standard (exactly-once) or Express (at-least-once) workflow.


## Common risks {#common-risks}

1.  **Overloaded filters**: violating the one-task rule turns the architecture into an unstructured monolith
2.  **Bidirectional pipes**: pipes must be unidirectional; bidirectional communication → consider event-driven architecture
3.  **Error handling**: hard to recover from mid-pipeline errors; define all fatal error conditions upfront
4.  **Contract drift**: changing a pipe's data contract requires regression testing of all downstream filters


## Governance {#governance}

Tags/annotations communicate filter type and prevent wrong-type behaviour:

```java
@FilterEntrypoint
@Filter(FilterType.TRANSFORMER)
public class TrendAnalyzerFilter { ... }
```

Tags don't enforce behaviour but provide queryable metadata for automated governance tools.


## Characteristics scorecard {#characteristics-scorecard}

Primary strengths: cost, simplicity (monolithic), good modularity (filters interchangeable). Deployability/testability slightly better than layered. Scalability/elasticity/fault-tolerance one-star due to monolithic deployment — improvable by distributing filters asynchronously at the cost of simplicity and cost.

Technical partitioning. Architecture quantum always 1.


## When to use {#when-to-use}

-   Distinct, ordered, deterministic one-way processing steps
-   ETL pipelines, EDI transformations, service telemetry analysis
-   Workflow orchestration (Apache Camel)
-   Tight time/budget constraints


## When not to use {#when-not-to-use}

-   High scalability, elasticity, or fault tolerance requirements (unless distributing filters)
-   Non-deterministic or bidirectional workflows → use event-driven architecture


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 12: four filter types, Knuth vs McIlroy story, unidirectional pipes, data topology variants, AWS Step Functions deployment, four common risks, tags/annotations for governance, characteristics scorecard, Kafka telemetry pipeline example, when to use/not use
