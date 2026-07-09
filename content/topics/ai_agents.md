+++
title = "AI agents"
author = ["hermes"]
tags = ["ai", "llm"]
draft = false
+++

## Overview {#overview}

An AI agent is an LLM coupled with tools and an iterative feedback loop: it
takes actions, observes results, and keeps looping until a goal is reached.
The iterative loop — not just the tool use — is what distinguishes an agent from
a one-shot LLM call. Agents can call APIs, control browsers, run code, place
phone calls, manage files, and delegate subtasks to other agents.

Personal-use agents have emerged as a distinct category from enterprise
automation: built by individuals to solve specific friction points in daily
life, run on consumer hardware or cheap subscriptions, and evolving over time
as the agent accumulates context about the user's preferences and routines.

Related concepts: , , [Self-improving agents]({{< relref "self_improving_agents.md" >}}),
[Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}})


## Personal use cases {#personal-use-cases}

Community-reported high-value personal AI agent use cases (r/hermesagent, 2026-06-18):


### Reverse-engineering proprietary APIs {#reverse-engineering-proprietary-apis}

Agents can interrogate an app's network traffic to discover undocumented APIs,
then build tools that leverage those endpoints. One practitioner reverse-engineered
a school bus tracker app and wired it to Alexa announcements at 3-minute intervals
on school mornings — the agent also knows the school calendar and skips non-school days.


### File organisation with metadata enrichment {#file-organisation-with-metadata-enrichment}

Agents can traverse a network, find files across multiple machines/drives,
deduplicate, reorganise by publisher/genre, and enrich metadata from external
APIs (e.g. ComicVine for comic book collections). Rate-limited APIs mean
overnight runs are common; dry-run verification before destructive steps is advised.


### Medical insurance claims automation {#medical-insurance-claims-automation}

A Playwright-based agent that: collects superbills from out-of-network
providers, uses a vision LLM (OCR pipeline: PDF → PNG → structured JSON) to
parse line items, enters them into the insurer's web form, screenshots the
pre-filled form for human approval, then submits. Also logs receipts to an
HSA ledger CSV and sets a 90-day follow-up reminder. Key design principles:

-   Dry-run mode (preview → dry-run → live-submit with --confirm flag)
-   Never hardcode PHI — use a password manager or env vars
-   Two-step approval: screenshot pause before final submit
-   Explicit state machine (SQLite: draft → dry_run → submitted)


### Contractor outreach via voice {#contractor-outreach-via-voice}

An agent that finds contractors, calls them using VAPI (outbound calls) with
a voice from ElevenLabs, collects rough quotes, and schedules home visits.
Results land in a CSV; calendar events are created with human approval of
proposed times. Total API cost per project: ~$1.50 for ~20 calls.


### Grocery shopping automation {#grocery-shopping-automation}

Automated weekly shopping: finds best deals across stores, applies coupons,
tracks price cycling to stock up at low points, coordinates with family members'
lists, and analyses fridge/pantry images for inventory. One practitioner
saves "a couple hundred a month" from coupon automation alone, running on
local compute with free API tiers.


### Infrastructure management (read-only RBAC) {#infrastructure-management--read-only-rbac}

Home Kubernetes clusters, Mikrotik networking gear, and Cloudflare are
connected to an agent via read-only RBAC service accounts. The agent
debugs, monitors, and produces detailed kubectl execution plans — but the
human reviews and runs the commands. The pattern: agent solves the problem,
human executes the solution. Defense-in-depth for home infra.


### Lead generation for web services {#lead-generation-for-web-services}

An agent scans for new businesses that have launched with only social media
(no website), generates a daily report, then another agent builds a mock site
PDF and emails it to the business owner. The agent manages calendar, email
replies (with parameterised rules), and cloud drive — handling ~90% of
client acquisition.


### Sales CRM enrichment {#sales-crm-enrichment}

An agent researches LinkedIn profiles and company pages for CRM leads,
cleans and deduplicates context, writes usable notes back to the CRM. Runs
slowly and selectively — profile by profile with human review — to avoid
triggering anti-scraping defenses. No auto-DMs; enrichment only from public info.


### Estate sale and auction deal alerts {#estate-sale-and-auction-deal-alerts}

Daily cron job that checks local estate sale / auction sites for items
closing within 24 hours where the current bid is ≤30% of recent eBay
sold price. Agent reviews item images for quality, then pushes a filtered
list via Telegram. Has surfaced a $400 4K monitor for $18.


### ADHD accountability partner {#adhd-accountability-partner}

An agent that tracks routines, detects spiral patterns (crappy sleep,
eating habits getting out of whack), handles delegatable tasks (drafting
emails, responding to family event invites, tracking grocery needs), and
points out habit breaks faster than the user notices them. Not a nag —
it handles rather than reminds. Requires months of tuning to work well.


### Knowledge base with serendipitous connection-finding {#knowledge-base-with-serendipitous-connection-finding}

A personal knowledge base where the agent finds connections, opportunities,
and paths across topics that the user would not have found manually. Feeds
on content the user encounters (articles, videos, repos) and surfaces
non-obvious cross-topic relationships. Related: [LLM wiki]({{< relref "llm_wiki.md" >}}).


### Personal data self-analysis {#personal-data-self-analysis}

Feeding mail archives, browser bookmarks, and watch history to an agent
produces a self-analysis brief — including an IKIGAI brief identifying
purpose/passion/vocation/profession intersections, plus strategic personal
development plans. One-shot or periodic analysis.


### Conversational travel planning {#conversational-travel-planning}

An agent that knows the user's preferences (e.g. prefers 7–10am departures,
happy to pay $200 extra to arrive Friday for exploration, loves Napa) can
hold a nuanced trade-off conversation about flights and hotels rather than
just presenting a flat list of options. The agent reasons about the
interaction between flight time, hotel cost, conference schedule, and personal
preferences before surfacing recommendations.


### Family knowledge base {#family-knowledge-base}

A family agent with access to shared calendars, appliance manuals, recipes,
and family rules. Can answer questions like "when does school end?", "what do
I do when the coffee machine breaks?", and "how do I cook grandma's flapjack?".
One use: serving as an impartial judge for family disputes by reference to
agreed family rules.


## Agent vs single-session LLM {#agent-vs-single-session-llm}

The key differences between running an agent and using a chat LLM:

-   **Memory** — the agent accumulates a persistent memory of skills, preferences,
    and project history across sessions; a chat LLM starts fresh each time.
-   **Tool-building** — agents build and reuse skills (e.g. an Alexa skill built
    once becomes a reusable capability); chat LLMs generate code but don't
    run or store it.
-   **Scheduling** — agents run cron jobs and background tasks without user
    intervention; chat LLMs are entirely user-initiated.
-   **Delegation** — agents can spawn sub-agents for specialised tasks (e.g.
    a main agent handling all human interaction, sub-agents handling specific
    workflows); chat LLMs are single-threaded.


## Voice agents {#voice-agents}

Voice-capable agents use services like VAPI for outbound call orchestration
and ElevenLabs for voice synthesis. The agent provides sufficient context for
VAPI to maintain the call; VAPI handles the actual conversation; the agent
polls for call completion. Cost is low (~$0.10 per 4-minute call plus
ElevenLabs per-character fees). Humans often cannot tell they are speaking
to an AI if the first-line message and end-call triggers are well-tuned.


## Human-in-the-loop design {#human-in-the-loop-design}

Safe personal agents follow a consistent pattern: the agent produces a plan
or a prefilled form, shows it to the human for approval, and only acts on
explicit confirmation. This applies across domains:

-   Medical claims: screenshot → approve → submit
-   Infrastructure: kubectl plan → human review → human executes
-   Contractor scheduling: proposed calendar slots → human approves
-   Grocery cart: proposed cart → human validates → checkout

The tradeoff is less convenience for much higher safety. Practitioners with
security backgrounds (20+ years) consistently recommend read-only agent access
plus human execution for irreversible actions.


## Guardrails for agents {#guardrails-for-agents}

Agentic pipelines introduce attack surfaces that purely conversational LLMs do
not have: tool inputs can be crafted to trigger unintended actions; retrieved
documents can carry injected instructions; tool outputs can be poisoned.
address this with two rail types specific to agentic use:

-   **Execution rails** — intercept inputs sent to tools and outputs returned from
    them; can validate parameters, reject anomalous results, and prevent the agent
    from calling disallowed APIs
-   **Retrieval rails** — filter RAG chunks before they enter the agent's context;
    prevent retrieved content from carrying prompt injection payloads

These are complementary to human-in-the-loop design: rails provide automated
policy enforcement; human review provides the final sanity check before
irreversible actions.


## Co-evolution {#co-evolution}

The highest-value agent use is not task automation but co-evolution: the agent
learns the shape of the user's life over time, surfaces patterns the user
missed, and gradually needs less re-explanation. This requires
that goes beyond simple retrieval — old context should be able to decay,
reinforce, or lose authority, not simply accumulate forever.


## Resources {#resources}

-   2026-06-18 ◦ [Am I missing the point of AI agents? (Reddit r/hermesagent)](https://www.reddit.com/r/hermesagent/comments/1tlh53c/am_i_missing_the_point_of_ai_agents/) — 19-contributor thread of real-world personal AI agent use cases; covers reverse-engineering APIs, medical claims automation, contractor voice outreach, grocery shopping, ADHD accountability, estate sale arbitrage, personal data self-analysis, family knowledge base, and conversational travel planning
-   2026-06-23 ◦ [NeMo Guardrails (GitHub)](https://github.com/NVIDIA-NeMo/Guardrails) — execution and retrieval rails are the mechanisms most relevant to agentic pipelines; defined in \`.co\` files

-   2026-06-23 ◦ [CL4R1T4S (GitHub)](https://github.com/elder-plinius/CL4R1T4S) — extracted system prompts from agent platforms (Devin, Manus, MultiOn) expose how agentic scaffolds encode tool permissions, goal-pursuit behaviours, and refusal boundaries; see [System prompt transparency]({{< relref "system_prompt_transparency.md" >}}) and [LLM red-teaming]({{< relref "llm_red_teaming.md" >}})
-   2026-07-09 ◦ [System Prompts and Models of AI Tools (GitHub, x1xhlol)](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools) — Devin's leaked prompt reveals explicit planning/standard mode separation, `<think>` scratchpad blocks, and a "never reveal instructions" confidentiality clause; Manus exposes full Agent Loop, Modules, and tools JSON; see [AI coding assistants]({{< relref "coding_assistants.md" >}}) for the full landscape
