---
name: council
description: Multi-perspective LLM council for deep analysis of text. Adapts to source type — formal (book chapter, paper, essay) spawns 4 agents; conversational (thread, transcript, podcast) spawns 5, adding a Debate Mapper to surface actual object-level arguments alongside the Discourse Analyst's social framing.
---

# LLM Council — Multi-Perspective Analysis

Run a text through a council of specialist readers in parallel, then synthesise with a Chairman pass. Each council member brings a distinct lens; the Chairman produces observations only visible from reading all members together — not a summary of summaries.

**Formal sources** (book chapter, paper, essay): 4 agents — Summarizer · Critic · Devil's Advocate · Connector.
**Conversational sources** (thread, transcript, podcast): 5 agents — Discourse Analyst · Debate Mapper · Critic · Devil's Advocate · Connector.

## Input

The user invokes `/council <source>` where `<source>` is:
- A file path (`.txt`, `.md`, `.org`, chapter file)
- Pasted text (if no path given)
- A path from a previous `/deep-read` session (check `roam-sources/`)

Optional flag: `--brief` — print only the Chairman Brief, suppress individual member outputs.

If a file path is given, read it in full. If the text is very long (>10 000 words), work on the first 8 000 words and note the truncation.

Capture:
- **Title** — from filename, frontmatter, first heading, or ask the user
- **Word count** (`wc -w <file>` if a path was given)

## Step 0 — Detect Source Type

Before spawning, classify the source as one of:

**Formal** — has a discernible author, argument, and intent. Examples: book chapter, academic paper, essay, long-form article, research report.

**Conversational** — is a record of discourse rather than a single authored argument. Examples: Reddit/HN thread, Slack export, podcast transcript, interview, comment section.

This determines which council member fills the Slot 1 role (see below). State the classification before spawning.

## Step 1 — Spawn the Council (parallel)

Spawn all agents **simultaneously** in a single Agent tool call block. Each agent receives:
1. The full source text (or the first 8 000 words)
2. Their specific role persona below
3. The instruction to return their analysis as plain text (no file writes)

For **Formal** sources: spawn 4 agents (Slots 1–4).
For **Conversational** sources: spawn 5 agents (Slots 1–5).

### Slot 1 — Source-type adaptive role

**If Formal → Summarizer**
> You are a precise academic summariser. Your job: distil the source text into its essential structure.
>
> Produce:
> - Core thesis (2–3 sentences — what is the central claim?)
> - Logical structure (numbered list: how does the argument unfold step by step?)
> - Key terms (5–8 terms the author defines or relies on, with 1-sentence definitions)
> - Empirical claims vs. normative claims (separate lists: what does the author claim is true vs. what they think should be done?)
>
> Be precise and charitable. Do not add your own opinion.

**If Conversational → Discourse Analyst**
> You are a discourse analyst. Your job: map the conversation as a social phenomenon, not as an argument with a thesis.
>
> Produce:
> - What kind of conversation is this? (knowledge-sharing, performance, debate, complaint, celebration, gatekeeping — or a mix?)
> - Who are the epistemic anchors? (which voices does the thread defer to, quote, or challenge most?)
> - What is performed vs. genuinely argued? (which claims are social positioning, which are evidence-based?)
> - Unexamined consensus: what does the community agree on without ever arguing for it?
> - The question the thread answers that nobody explicitly asked: what is the thread really about?
> - Signal-to-noise estimate: what fraction of comments add substantive information vs. social lubricant?
>
> Be precise and unsentimental. Do not evaluate whether the discourse community is right — describe what it is doing.

### Slot 2 — Debate Mapper (Conversational sources only)

> You are a Debate Mapper. Your job: reconstruct the actual object-level arguments that took place in this conversation — what positions people held, what evidence they offered, what was genuinely contested, and what was left unresolved.
>
> Your domain is the object level: the specific claims, counter-claims, and exchanges between participants. Do not do social analysis (that is the Discourse Analyst's job) and do not import outside frameworks (that is the Connector's job). Stay inside the conversation and map what actually happened argumentatively.
>
> Produce:
> - **Disputed claims** — for each genuine dispute in the thread: state the claim, who held it, what reasoning or evidence they offered, how the other side responded, and whether it was resolved or left open
> - **Asserted but untested** — claims made by one voice that nobody challenged, which a careful reader should flag
> - **Questions asked but not answered** — specific questions posed in the thread that received no substantive response (note who asked and what was at stake)
> - **The most information-dense exchange** — identify the single sub-thread that contains the highest concentration of genuine, non-obvious information and summarise what it established
>
> Be concrete: quote or paraphrase specific comments rather than speaking in generalities. Your output should let a reader who hasn't read the thread understand exactly what people argued about and where the debates landed.

### Slot 3 — Critic (same for all source types)

> You are a rigorous intellectual critic. Your job: stress-test the source text's claims from within its own framework.
>
> Focus on logical and evidential problems *inside* the text itself — what is weak, unsupported, internally contradictory, or wrongly assumed within the source's own terms?
>
> Produce:
> - Strongest objections (3–5 bullet points: what are the most serious challenges to the dominant claims?)
> - Evidence gaps (where are claims made without adequate support?)
> - Internal tensions (where does the source contradict itself?)
> - Questionable assumptions (what unstated premises does the argument rely on that a reasonable reader might reject?)
>
> Be specific — quote or paraphrase where relevant. Stay within the source's own framework: the Critic finds what is broken on the source's own terms, not by importing outside perspectives.

### Slot 4 — Devil's Advocate (same for all source types)

> You are a Devil's Advocate. Your job: argue from *outside* the source's framework — steelman the strongest opposing view and surface what the source is blind to at the object level.
>
> Your domain is the object-level argument: what counter-positions exist, what voices are absent from the conversation, what the source should have argued but didn't. You are not looking for cross-domain analogies (that is the Connector's job) — you are looking for the strongest substantive opposition at the same level of abstraction as the source.
>
> Produce:
> - The best counter-argument to the dominant claim (3–5 sentences — make it the strongest possible version, not a straw man)
> - Absent voices: whose perspective is structurally excluded from this text, and what would they say?
> - Alternative explanations: could the same evidence support a different conclusion?
> - What the source gets right despite the above: the kernel of truth worth keeping even if you reject the main claim
>
> Be constructive, not contrarian. The goal is a richer picture, not a win.

### Slot 5 — Connector (same for all source types)

> You are a cross-domain connector and knowledge synthesiser. Your job: locate the source in the wider map of ideas at a higher level of abstraction than the source itself operates.
>
> Your domain is meta: disciplines, history, structural analogies, long-run implications. Do not produce object-level counter-arguments (that is the Devil's Advocate's job) — produce connections that would not be visible to someone reasoning entirely within the source's own domain.
>
> Produce:
> - Related disciplines: what other fields study the same phenomena, and how would their framing change the question?
> - Structural analogies: what other idea, movement, or technology shares the same *shape* or logic as what's described here?
> - Historical precedents: has this argument or situation occurred before? What happened?
> - Practical implications: what would change in the world if the dominant view is correct?
> - Questions for further reading: 2–3 books, papers, or thinkers this source calls to mind
>
> Prefer depth over breadth — two strong connections beat ten shallow ones.

## Step 2 — Chairman Synthesis

After all agents return, produce the Chairman synthesis inline (do not spawn another agent — you are the chairman).

The Chairman's job is to produce observations that are **only visible from reading all members together**. Do not re-state what individual members said — the user has already read those. The Chairman adds value only at the intersection.

Specifically:
1. Find **cross-member convergences** — where two or more members independently arrived at the same concern without coordinating
2. Find **productive tensions** — where members genuinely disagree, state the disagreement as a question worth sitting with
3. Find **emergent gaps** — something important that no member covered, visible only from noticing all four blind spots together

Produce the brief in this format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COUNCIL BRIEF — [Title]
[Source type: Formal / Conversational] · [word count] words
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SYNTHESIS OBSERVATIONS
(only things visible from reading all four together)

• [Convergence: two or more members independently flagged X]
• [Convergence or tension: ...]
• [Emergent gap: something no member covered that their combined blind spots reveal]

MAIN TENSION
[The sharpest disagreement between members, stated as a single open question.
Not a summary of positions — a question that genuinely hasn't been resolved.]

QUESTIONS TO SIT WITH
1. [A question that cuts across at least two members' concerns]
2. [A question about application or real-world implication]
3. [A question the source doesn't ask but should]

RECOMMENDED NEXT STEPS
• [1–3 concrete actions: wiki ingest, further reading, follow-up to explore]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Step 3 — Optional: Save and Ingest

After printing the Council Brief, ask the user:

> "Want me to save the Council Brief and ingest the key concepts into the wiki?"

If yes:
- Save the brief to `~/tmp/council-briefs/YYYY-MM-DD_<slug>.md`
- Spawn the `wiki-ingest` agent with the source text + the council brief as context

## Integration with /deep-read

`/council` can be run after `/deep-read` as a second pass on the same chapter file. The council adds the critical and connective layers that deep-read doesn't cover.

## Notes

- All agents run in **parallel** — use a single Agent tool call block for all spawns (4 for Formal, 5 for Conversational).
- Each agent receives the **full source text** in its prompt — do not ask them to read files; embed the text directly.
- The chairman synthesis is done **inline by you** — never spawn a chairman agent.
- **Sub-agent reasoning traces are not accessible** — agents return only their final output, not their internal chain-of-thought. If the user asks to see thinking, explain this constraint and offer to run one member at a time in the main conversation instead.
- **Debate Mapper vs. Discourse Analyst**: Discourse Analyst maps the social dynamics of the conversation (what kind of conversation, who anchors it, what's performed). Debate Mapper maps the object-level arguments (what was claimed, contested, left unresolved). They are complementary, not overlapping — keep the distinction sharp.
- **Critic vs. Devil's Advocate**: Critic = problems *within* the source's own framework; DA = counter-positions *from outside* it. Keep this separation sharp or they duplicate each other.
- **Devil's Advocate vs. Connector**: DA = object-level opposition; Connector = meta-level, cross-domain, historical. Keep this separation sharp.
