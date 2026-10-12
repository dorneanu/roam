# Claude Code Instructions

This file contains instructions and workflows for common tasks in this repository.

## File Deletion Workflow

When deleting topic files (.md and .org), follow these steps:

### 1. Delete Files Using Go Utility

Use the `scripts/delete-files` utility to delete files:

```bash
# Create a list of basenames (without extension) in a text file
# Example: files-to-delete.txt
# Content:
#   azure
#   blog
#   analogical_thinking

# Dry run first to verify what will be deleted
go run scripts/delete-files/main.go -f files-to-delete.txt -root /path/to/roam -dry-run

# Actually delete the files
go run scripts/delete-files/main.go -f files-to-delete.txt -root /path/to/roam
```

The utility will automatically find and delete:
- `.md` files in `content/topics/`
- `.org` files in `org/topics/`

### 2. Fix Broken References

After deleting files, check for broken references:

#### In Markdown Files (.md)

Search for Hugo relref links like:
```markdown
[Text]({{< relref "filename.md" >}})
```

**Action:** Remove the link but keep the text (or rephrase if needed).

#### In Org Files (.org)

Search for org-roam ID links. First, get the IDs from git history:

```bash
# Get the org-roam ID from deleted file
git show <commit>:org/topics/filename.org | grep -E "^:ID:"
```

Then search for references using that ID:
```bash
# Search in org files for the ID
grep -r "id:7edf3e3e-42c0-4ec6-b8dc-a3e71210d116" org/
```

**Action:** Remove the org-roam link syntax `[[id:...][Text]]` but **keep the text** (just write "Text" without the link).

### 3. Verify with Hugo

Always run Hugo to check for broken references:

```bash
hugo
```

Should complete without `REF_NOT_FOUND` errors.

## Go Utilities

### scripts/delete-files

Deletes files based on a list of basenames.

**Usage:**
```bash
go run scripts/delete-files/main.go -f <file-list> [-root <directory>] [-dry-run]
```

**Options:**
- `-f`: File containing list of basenames (one per line, without extension)
- `-root`: Root directory to search from (defaults to current directory)
- `-dry-run`: Show what would be deleted without actually deleting

**File list format:**
```
# Comments start with #
basename1
basename2
basename3.md    # Extensions are stripped automatically
```

## Wiki Ingest

For ingesting sources (articles, book chapters, podcast transcripts) into the wiki, use the specialized agent:

**Agent:** `.claude/agents/wiki-ingest.md`

The agent autonomously:
1. Saves the source to the private `roam-sources` repo (`~/repos/priv/roam-sources/`)
2. Extracts 5–15 key concepts from the source
3. Creates new org-roam topic files or updates existing ones in `org/topics/`
4. Wires up cross-links between related topics using `[[id:UUID][Text]]` syntax
5. Appends an entry to `org/wiki-log.org`
6. Updates `org/wiki-index.org` for new topics

**Two-repo structure:**
- `~/repos/priv/roam` (public) — org-roam topics, wiki log, wiki index
- `~/repos/priv/roam-sources` (private) — raw sources; never published

**Usage:** Pass the source to ingest — a URL, pasted article text, file path, or book chapter. The agent handles the rest.

## Recipe Ingest

For adding a new recipe to the collection, use the specialized agent:

**Agent:** `.claude/agents/recipe-ingest.md`

The agent:
1. Fetches the URL or accepts pasted recipe text
2. Translates to German if needed
3. Formats as org-mode (`*** Zutaten` / `*** Anweisungen zum Kochen`)
4. Appends to the appropriate file in `org/rez/recipes/`

**Recipe files:**
- `web_rezepte.org` — general web recipes (default)
- `backen.org` — baking
- `slowcooker_vegetarisch.org` — vegetarian slow cooker
- `slowcooker_bbcfood.org` — BBC slow cooker
- `slowcooker_suppen.org` — slow cooker soups

**Usage:** Pass a URL, pasted recipe text, or both. Optionally specify a target file.

## Wiki Query

For asking questions against the wiki, use the query agent:

**Agent:** `.claude/agents/wiki-query.md`

The agent navigates the wiki by index and cross-links (never loading all files), synthesises an answer with citations, notes gaps, and optionally saves novel synthesis back into the relevant topic file.

**Usage:** Ask any question. The agent finds relevant topic files, follows cross-links, and returns a grounded answer. Cite requests ("what does the wiki say about X") and synthesis requests ("how do safetyism and social comparison relate") both work.

## Wiki Lint

For auditing the wiki for health issues, use the lint agent:

**Agent:** `.claude/agents/wiki-lint.md`

The agent scans all `org/topics/*.org` files and reports:
- Broken org-roam ID links (`[[id:UUID]]` references with no matching `:ID:`)
- Local/Dropbox filesystem paths in Resources (should be `[[id:UUID][Book Title]]`)
- Plain Goodreads/author-site URLs that should be org-roam ID links
- Orphan pages (no incoming links from other topic files)
- Missing Resources sections on substantial topic files
- Missing per-section source attribution lines
- Potential duplicate content across topic files

**Usage:** Run the agent to get a prioritised list of suggestions. The agent delegates to the Go tool at `/home/hermes/projects/ai-tools/wiki-lint/wiki-lint` (~90ms for a full scan). The agent is read-only — it never edits files. Review the report and approve which items to act on.

## Book Summary Posts

For creating quarterly book summary posts, use the specialized agent:

**Agent:** `.claude/agents/book-summary-post.md`

The agent handles the complete workflow from finding books by date to formatting entries with proper Hugo-compatible links.

## EPUB Processing

For EPUB processing workflows, use the specialized agent:

**Agent:** `.claude/agents/epub-processor.md`

The agent handles the complete workflow from EPUB conversion to text file splitting with proper naming conventions.

## Writing Voice (Blog Posts)

When editing or assisting with blog posts in `org/blog/`, you are a
**copy-editor, not a ghostwriter.** Correct toward Victor's voice, never away.

Full profile with examples: `org/writing-voice-profile.org`

### Voice fingerprint

Direct, first-person, technical but personal. Short punchy sentences mixed
with longer accumulative ones. Humor is dry — appears in parentheticals or
at sentence-end with emoji. Genuine uncertainty left in intentionally
("I somehow disagree", "which kind of makes me happy", "retrospectively,
I wish I'd..."). Org-mode italics (`/word/`) for concept and role names,
bold (`*word*`) for key terms only — not decoratively. Tools named precisely
in `~monospace~`. Colleagues and personal life referenced by name and specific
detail (bongos, La Pavoni, Cluj, etc.).

### Grammar rules

1. Fix spelling silently.
2. Fix grammatical errors — show the fix if sentence structure changes.
3. Preserve: Oxford commas, em-dashes with spaces, informal ellipsis in asides.
4. Unclear but grammatically valid sentence → add `[UNCLEAR?]` + one-line note. Do NOT rewrite.
5. Sentence suggestions → 2–3 options in a suggestion block (see below), voice-closest marked `- [*]`. Victor chooses.
6. Never polish a valid sentence just because it could sound smoother.
7. Preserve ALL org-mode syntax: `{{{zk_topic(...)}}}` macros, `#+begin_sidenote`,
   code blocks, gbox tags, properties drawers, filetags. These are not errors.

### Suggestion blocks

When a sentence could be better (or is unclear), do NOT rewrite it in place.
Leave a comment block directly after the paragraph (indented to match if the
paragraph is inside a list item):

```org
#+begin_comment
[SUGGEST] "the original phrase, quoted" (optional one-line reason)
- [*] option closest to Victor's voice
- second option
- third option
#+end_comment
```

- Use `[UNCLEAR?]` instead of `[SUGGEST]` when the meaning itself is unclear;
  say in one line what is unclear, then give the options.
- The `[*]` marker goes at the *front* of the recommended option.
- One block per paragraph; a block may hold several quoted phrases, each with
  its own option list.

Round trip:

1. Claude fixes spelling and clear grammar errors directly, and adds
   suggestion blocks for everything else.
2. Victor chooses by deleting the options he doesn't want, so one option is
   left per quoted phrase (he may edit its wording).
3. On the next `cl` / "check now", Claude puts the remaining option into the
   sentence, replacing only the quoted phrase, and deletes the whole block.
   Blocks that still have several options are left untouched.

### AI-tell watchlist — flag with `[AI-TELL?]`

These phrases appeared in AI-assisted posts and are NOT Victor's voice:

- "seamless integration" / "killer feature"
- "navigate" as metaphor for dealing with problems
- "it's worth noting that"
- "in today's landscape / world / environment"
- "characterized by growth and learning" / "a year of significant transitions"
- "perhaps the most noteworthy" / "Having said this,"
- Passive constructions to avoid agency ("X was decided" → "I decided X")
- Marketing-copy photo captions
- Bullet lists summarizing what the preceding paragraph already said

### Inline `cl:` instructions

Blog drafts may contain `(cl: ...)` inline instructions. Process them as follows:

- `(cl: grammar)` — fix mechanics in the surrounding sentence, remove marker
- `(cl: suggest next — [idea])` — offer 2–3 next-sentence options in Victor's
  voice as a suggestion block (see above), voice-closest marked `- [*]`
- `(cl: add sidenote about X)` — add `#+begin_sidenote ... #+end_sidenote` after the sentence
- `(cl: add zk_tag)` — wrap nearby concept in `{{{zk_topic(slug,Label)}}}`
- `(cl: audit voice)` — scan surrounding paragraph for AI-tells, flag them

Remove the `(cl: ...)` marker after processing. For suggestions, leave the
suggestion block in place and follow the round trip above.

## Common Tasks

### Adding New Topic Files

- Markdown files go in: `content/topics/`
- Org files go in: `org/topics/`

### Running Hugo Locally

```bash
hugo server
```

### Building the Site

```bash
hugo
```
