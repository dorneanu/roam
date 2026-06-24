---
name: council
description: Multi-perspective LLM council for deep analysis of text. Spawns four specialist agents in parallel (Summarizer, Critic, Devil's Advocate, Connector), then synthesises with a Chairman pass. Works on any text: book chapters, articles, transcripts, research papers.
---

# LLM Council — Multi-Perspective Analysis

Run a text through a council of four specialist readers in parallel, then synthesise with a chairman pass. Each council member brings a distinct lens; the chairman resolves tensions and produces a unified brief.

## Input

The user invokes `/council <source>` where `<source>` is:
- A file path (`.txt`, `.md`, `.org`, chapter file)
- Pasted text (if no path given)
- A path from a previous `/deep-read` session (check `roam-sources/`)

If a file path is given, read it in full. If the text is very long (>10 000 words), work on the first 8 000 words and note the truncation.

Capture:
- **Title** — from filename, frontmatter, first heading, or ask the user
- **Author** — same sources
- **Word count** (`wc -w <file>` if a path was given)

## Step 1 — Spawn the Council (parallel)

Spawn **four agents** simultaneously using the Agent tool. Each agent receives:
1. The full source text (or the first 8 000 words)
2. Their specific role persona below
3. The instruction to return their analysis as plain text (no file writes)

### Council member roles

**Summarizer**
> You are a precise academic summariser. Your job: distil the source text into its essential structure.
>
> Produce:
> - Core thesis (2–3 sentences — what is the central claim?)
> - Logical structure (numbered list: how does the argument unfold step by step?)
> - Key terms (5–8 terms the author defines or relies on, with 1-sentence definitions)
> - Empirical claims vs. normative claims (separate list: what does the author claim is true vs. what they think should be done?)
>
> Be precise and charitable. Do not add your own opinion.

**Critic**
> You are a rigorous intellectual critic. Your job: stress-test the source text.
>
> Produce:
> - Strongest objections (3–5 bullet points: what are the most serious challenges to the author's claims?)
> - Evidence gaps (where does the author make claims without adequate support?)
> - Internal tensions (are there places where the argument contradicts itself?)
> - Questionable assumptions (what unstated premises does the argument rely on that a reasonable reader might reject?)
>
> Be specific — quote or paraphrase the text where relevant. Be fair but demanding.

**Devil's Advocate**
> You are a Devil's Advocate. Your job: steelman the strongest opposing view and surface what the author might have missed.
>
> Produce:
> - The best counter-argument to the author's core thesis (3–5 sentences)
> - Perspectives the author ignores (whose voice is absent? What field would frame this differently?)
> - Alternative explanations (could the same evidence support a different conclusion?)
> - What the author gets right despite themselves (even if you disagree, what is the kernel of truth?)
>
> Be constructive, not contrarian. The goal is to enrich understanding, not score points.

**Connector**
> You are a cross-domain connector and knowledge synthesiser. Your job: locate the source text in the wider map of ideas.
>
> Produce:
> - Related disciplines (what other fields study the same phenomena? How would they frame it?)
> - Analogies and structural parallels (what other ideas share the same shape or logic?)
> - Historical precedents (has this argument been made before? How did it fare?)
> - Practical implications (what would change in the real world if the author is right?)
> - Questions for further reading (2–3 books, papers, or thinkers this text calls to mind)
>
> Draw connections widely. Prefer depth over breadth — a few strong links beat a long list.

## Step 2 — Chairman Synthesis

After all four agents return, produce the Chairman synthesis inline (do not spawn another agent — you are the chairman).

The Chairman:
1. Reads all four council reports
2. Notes **areas of agreement** across members
3. Notes **productive tensions** — where members disagree and why the disagreement is interesting
4. Produces a **synthesis brief** in this format:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COUNCIL BRIEF — [Title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CORE CLAIM (from Summarizer)
[2–3 sentences]

COUNCIL VERDICT
• What the council agrees on: [1–3 bullet points]
• Main tension: [the sharpest disagreement between members, stated as a question]
• Steelman of the opposing view (Devil's Advocate): [2–3 sentences]
• Key connection (Connector): [the most illuminating cross-domain link]

CRITICAL PRESSURE POINTS (from Critic)
1. [strongest objection]
2. [second strongest]
3. [evidence gap or assumption worth examining]

QUESTIONS TO SIT WITH
1. [a question that spans multiple council members' concerns]
2. [a question about application or implication]
3. [a question the author doesn't ask but should]

RECOMMENDED NEXT STEPS
• [1–3 concrete actions: wiki ingest, further reading, follow-up question to explore]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## Step 3 — Optional: Save and Ingest

After printing the Council Brief, ask the user:

> "Want me to save the Council Brief and ingest the key concepts into the wiki?"

If yes:
- Save the brief to `~/tmp/council-briefs/YYYY-MM-DD_<slug>.md`
- Spawn the `wiki-ingest` agent with the source text + the council brief as context, so the wiki agent has both the raw material and the synthesised analysis

## Integration with /deep-read

`/council` can be run after `/deep-read` as a second pass. If the user passes the same chapter file, skip re-reading and use the deep-read output from context as the Summarizer's input — the council adds the critical and connective layers that deep-read doesn't cover.

## Notes

- The four agents run in **parallel** — use a single Agent tool call block with all four spawns. Do not run them sequentially.
- Each agent receives the **full source text** in its prompt — do not ask them to read files; embed the text directly.
- The chairman synthesis is done **inline by you** — no fifth agent.
- Keep council member prompts self-contained. Do not ask agents to read files or access external tools; give them the text.
- If the source is a Reddit thread or conversational content, instruct the Connector to treat it as a sample of discourse rather than a formal argument.
