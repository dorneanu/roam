+++
title = "Component Cohesion/CCP"
author = ["hermes"]
draft = false
+++

-   is the component form of the [Single Responsability Principle]({{< relref "solid.md#single-responsability-principle" >}})

-   separate classes into different components if they change for different reasons

    > Gather together those things that change at the same times and for the same reasons. Separate those things that change at different times or for different reasons.


## Relation to cohesion metrics {#relation-to-cohesion-metrics}

The CCP reflects the spirit of high cohesion: modules that change together belong together. It operationalises temporal and communicational cohesion at the component level — grouping code that responds to the same change forces, rather than just code that is structurally similar.

In the [modularity]({{< relref "modularity.md" >}}) framework of _Fundamentals of Software Architecture_, CCP is a design-level expression of the same principle captured by [component cohesion]({{< relref "component_cohesion.md" >}}) metrics: high cohesion (code that belongs together stays together) and low [coupling]({{< relref "coupling.md" >}}) (code that changes independently stays separate).


## Resources {#resources}

-   2026-06-16 ◦ [Fundamentals of Software Architecture, 2E — Richards &amp; Ford](</Apps/Dropbox PocketBook/E-Books/2026/OceanofPDF.com-Fundamentals_of_Software_Architecture_2E_-_Mark_Richards.epub>) — Ch. 3: cohesion as a modularity metric; the CCP principle is implicitly applied in the discussion of why splitting cohesive modules increases coupling; cross-linked to FSA's cohesion types (especially temporal and communicational cohesion)
