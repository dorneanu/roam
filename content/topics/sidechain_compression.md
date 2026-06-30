+++
title = "Sidechain compression"
author = ["hermes"]
tags = ["music"]
draft = false
+++

## Overview {#overview}

Sidechain compression is a technique where a compressor's gain-reduction is triggered by an external signal (the "sidechain" input) rather than the signal being compressed. The most common use in electronic music is keying a compressor on the bass or pads from the kick drum, so that every kick hit momentarily ducks the other elements — creating the characteristic rhythmic "pump" of house, techno, and related genres. The effect can range from subtle glue to an aggressive, audible pulse.

See also: [House drum groove]({{< relref "house_drum_groove.md" >}}), [Drums]({{< relref "drums.md" >}})


## How it works {#how-it-works}

1.  A compressor is inserted on the target channel (e.g. bass, pads, whole mix bus)
2.  The compressor's sidechain input is routed from a different source — typically the kick drum
3.  When the kick hits, the compressor detects it and reduces gain on the target channel
4.  When the kick decays, the compressor releases and the target channel returns to full volume
5.  The cycle creates a rhythmic volume envelope that locks the target to the kick's tempo


## Key parameter settings for the "pump" effect {#key-parameter-settings-for-the-pump-effect}

-   **Ratio:** Aggressive (8:1 or higher, sometimes limiting)
-   **Attack:** Zero or near-zero — compression starts instantly with the kick transient
-   **Release:** Tuned to taste; shorter release = tighter pump, longer = more breathe/sweep feel
-   **Threshold:** Set so that only the kick triggers significant compression

A slow release (200–400ms) creates a sweeping, breathing feel; a fast release (50–100ms) creates a tight staccato pump.


## Variants and creative uses {#variants-and-creative-uses}

-   **Melodic gating** — a noise gate (rather than compressor) sidechained from the bass can be used to gate an atmospheric loop, making the melody "breathe" in sync with the rhythm (Level 4 of the Loretti house groove framework)
-   **Parallel sidechain** — blend dry and compressed signals to preserve some of the original dynamics while adding pump
-   **Visual LFO as pseudo-sidechain** — some DAWs (Ableton Live) offer a volume LFO tool synced to the song tempo as a simpler sidechain approximation
-   **Roland MC-101 motion designer** — on hardware grooveboxes without true sidechain routing, a square-wave motion sequence on the volume parameter replicates the effect (SQr form, step length 4, min value 40, max value 90)


## Resources {#resources}

-   2026-06-17 ◦ [4 Levels of Drum Groove: From Beginner to Pro (Leo Loretti)](https://youtu.be/uoktpoQzsdw) — applied immediately in Level 1 of house groove construction: aggressive ratio, zero attack, fast release on bass sidechained from kick
-   2025-07-23 ◦ [MC-707 Tutorial: Side-chain Compression Effect](https://www.youtube.com/watch?v=oNczQLCocSY) — hardware implementation using Roland's Motion Designer to replicate sidechain pump on the MC-101 / MC-707
