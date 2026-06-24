---
name: deep-read
description: 3-pass deep reading of a book chapter using LLMs. Summarizes, extracts key concepts, generates Socratic Q&A, saves to roam-sources, and optionally ingests into the wiki. Triggers on "deep read", "deep-read", "read chapter", "understand chapter", "analyze chapter".
---

# Deep Read — LLM-Augmented Chapter Comprehension

Apply Karpathy's 3-pass reading method to a book chapter: structured summarize → Socratic Q&A → optional wiki ingest.

## Input

The user invokes `/deep-read <path>` where `<path>` is:
- A `.txt` or `.md` file containing an already-extracted chapter
- An EPUB file path (optionally followed by a chapter number or title)
- Pasted text (if no path is given)

If the input is an EPUB, extract the chapter first using the epub-processor workflow (pandoc to markdown, grep for chapter boundaries, sed to split). Work in `/tmp`.

## Step 1: Read the Chapter

Read the file and hold the full text in context. Note:
- Book title and author (from filename, frontmatter, or ask)
- Chapter number and title
- Approximate word count (`wc -w <file>`)

If the chapter is very long (>8000 words), work section by section but produce one unified output at the end.

## Step 2: Pass 2 — Structured Summarize

Analyze the chapter text and produce:

### Core argument
2–3 sentences: what is the central claim or thesis of this chapter?

### Key concepts (5–7)
For each: concept name + 1–2 sentence plain-language definition. Focus on concepts the author introduces or relies on — not just mentioned terms.

### Surprising or counterintuitive claims
What in this chapter would challenge a reader's prior assumptions or common intuitions? List 2–4 specific points.

### Connections to existing wiki topics
Check the wiki index for related topics:
```bash
ROAM="$(git -C ~/projects/roam rev-parse --show-toplevel 2>/dev/null || echo ~/projects/roam)"
grep -i "keyword" "$ROAM/org/topics/wiki_index.org"
```
Try 3–5 keywords from the key concepts. List matching wiki topics that this chapter relates to or enriches.

## Step 3: Pass 3 — Socratic Q&A

Generate **5 Socratic questions** — questions that test genuine understanding, not surface recall. Each question should require the reader to explain, apply, or connect a concept.

Format each as:

**Q1: [question]**
*Answer:* [2–4 sentence model answer]
*Go deeper:* [one follow-up question or tension to explore]

Flag any question that points to a gap or contradiction in the chapter worth pursuing further with `⚠️ worth exploring`.

## Step 4: Save to roam-sources

Derive paths:
```bash
ROAM="$(git -C ~/projects/roam rev-parse --show-toplevel 2>/dev/null || echo ~/projects/roam)"
SOURCES="$(cd "$ROAM/../roam-sources" 2>/dev/null && pwd || echo "$ROAM/../roam-sources")"
```

Save the chapter text to:
```
$SOURCES/books/YYYY/author-lastname_book-title-slug/chapter-NN_chapter-title.md
```

With frontmatter:
```markdown
---
title: "Book Title — Chapter N: Chapter Title"
author: "Author Name"
source_type: book
date: YYYY-MM-DD
tags: [book, chapter]
---

[full chapter text]
```

Skip if the file already exists at that path.

## Step 5: Ask about wiki ingest

After completing the analysis, ask the user:

> "Want me to ingest this chapter into the wiki? The wiki-ingest agent will update/create org-roam topic files for the key concepts and wire cross-links."

If yes, spawn the `wiki-ingest` agent and pass the chapter text plus the key concepts identified in Pass 2 as context.

## Step 6: Print Reading Digest

At the end, print a compact digest the user can reference:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEEP READ — [Book Title], Ch. N: [Title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CORE ARGUMENT
[2–3 sentence summary]

KEY CONCEPTS
• Concept 1 — definition
• Concept 2 — definition
...

QUESTIONS TO SIT WITH (try to answer before reading below)
1. [question only]
2. [question only]
3. [question only]
4. [question only]
5. [question only]

[Answers available above ↑]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

The digest lists questions *without* answers so the user has to actively recall before checking. This is the pass 3 active recall step.

## Notes

- Never summarize in a way that replaces reading — the user has already done pass 1. Pass 2 is synthesis and clarification, not a substitute.
- If a key concept is already well-covered in the wiki, note that and skip re-explaining it; instead link to the existing topic.
- Keep the Socratic questions generative, not trivial. Avoid "what is X?" questions — prefer "why does X matter more than Y?" or "how would X change if Z were different?"
- The digest is the deliverable the user keeps. Make it crisp and scannable.
