+++
title = "Microkernel Architecture"
author = ["hermes"]
tags = ["software", "architecture"]
draft = false
+++

## Overview {#overview}

The **microkernel** architecture style (also called _plug-in architecture_) is a monolithic style built from two components: a **core system** and independent **plug-in components**. Its defining strength is isolating volatile, customisable behaviour into plug-ins while keeping the core stable.

Natural fit for: product-based software installed on customer sites, any domain requiring per-client or per-jurisdiction customisation.

{{< gbox src="/img/fundamentals-software-architecture/microkernel-architecture.png" title="Microkernel Architecture — topology" caption="Core system (layered internally) + plugin registry + compile-based and runtime-based plugins. Source: Richards & Ford, FSA 2E Ch.13" pos="left" >}}


## Core System {#core-system}

Formally: the _minimal functionality_ to run the system, or equivalently the _happy path_ — the general processing flow with little or no custom logic.

-   Cyclomatic complexity is deliberately removed and delegated to plug-ins
-   Internally the core can be a [Layered Architecture]({{< relref "layered_architecture.md" >}}) or a [Modular Monolith]({{< relref "modular_monolith_architecture.md" >}})
-   Presentation layer may be embedded in the core or a separate UI

**Going Green example**: `assessDevice()` replaces a sprawling `if/else` chain with a registry lookup that generically invokes the right plug-in.


## Plug-In Components {#plug-in-components}

Standalone, independent components with **no inter-plugin dependencies** (ideally). Two deployment modes:

| Mode | Description | Frameworks |
|---|---|---|
| Compile-based | JAR / DLL / Gem; full redeployment to add/remove | — |
| Runtime-based | hot-swap without redeploying core | OSGi, Jigsaw (Java); Prism (.NET) |

Implementation forms: shared library (JAR/DLL), package namespace (`app.plug-in.<domain>.<context>`), or remote service (REST/messaging — adds distribution overhead).


## Registry {#registry}

The core maintains a _plug-in registry_ mapping plugin name → implementation:

```java
registry.put("iPhone6s", "Iphone6sPlugin");       // point-to-point
registry.put("iPhone6s", "iphone6s.queue");       // messaging
registry.put("iPhone6s", "https://atlas/assess"); // REST
```

Simple in-memory `HashMap` or external discovery tool (Apache ZooKeeper, Consul).


## Contracts {#contracts}

Standard interface defines expected behaviour and data shape:

```java
public interface AssessmentPlugin {
    AssessmentOutput assess();
    String register();
    String deregister();
}
```

Third-party plug-ins that can't conform get an **adapter** so the core remains contract-uniform.


## "Microkern-ality" Spectrum {#microkernality-spectrum}

Not all plug-in-supporting systems are true microkernels. The spectrum runs from _pure_ (Eclipse IDE: core is just a text editor) to _plug-in-supporting_ (web browser: fully functional without plug-ins). Core volatility is the key discriminator.


## Data Topology {#data-topology}

Core owns the shared relational DB; plug-ins receive data through the core, not via direct DB access. Plug-ins may own private data stores (embedded DB, rules engine) — decouples schema changes from plug-in logic.


## Common Risks {#common-risks}

1.  **Volatile core** — if the core changes constantly, the main benefit (stable core, volatile plug-ins) is lost
2.  **Plug-in dependencies** — inter-plugin coupling creates transitive dependency management complexity; avoid
3.  **Remote plug-ins** — REST/messaging adds per-invocation latency; heavy plug-in traffic may incur unacceptable overhead


## Characteristics Scorecard {#characteristics-scorecard}

Always 1 architecture quantum (all requests route through core). Shared weakness with layered on scalability/elasticity/fault-tolerance (1★). Unique strengths above layered: testability ★★★, deployability ★★★, modularity ★★★, evolvability ★★★.

Only architecture style that can be simultaneously **technically partitioned AND domain partitioned**.


## When to Use {#when-to-use}

-   Product software requiring per-client / per-jurisdiction customisation (tax prep, insurance claims)
-   IDE-type tools (Eclipse, JetBrains, PMD, Jira, Jenkins)
-   Chrome / Firefox (browser extensions as plug-ins)
-   WildFly / JBoss application server (unplugging unused features for performance)


## When Not to Use {#when-not-to-use}

-   High scalability, elasticity, or fault-tolerance requirements (monolithic deployment)
-   Async, non-deterministic workflows → prefer event-driven architecture
-   Core changes frequently — defeats the value proposition


## Related {#related}

-   [Layered Architecture]({{< relref "layered_architecture.md" >}}) — common internal structure for the core system
-   [Modular Monolith]({{< relref "modular_monolith_architecture.md" >}}) — alternative internal structure for the core system
-   [Architecture Styles — Foundations]({{< relref "architecture_styles_foundations.md" >}}) — monolithic vs distributed taxonomy


## Resources {#resources}

-   2026-06-30 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](/Apps/Dropbox%20PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub) — Ch. 13: core system, plug-in components (compile vs runtime, point-to-point vs remote), plug-in registry, contracts &amp; adapters, "microkern-ality" spectrum, data topology, three common risks, governance fitness functions, team topologies, characteristics scorecard, Eclipse IDE and insurance-claims examples
