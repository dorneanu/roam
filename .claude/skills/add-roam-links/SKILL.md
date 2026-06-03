---
name: add-roam-links
description: Scan an org file for concepts that match topics in the org-roam topic index and weave [[id:...][text]] links inline into the bullet content.
allowed-tools:
  - Read
  - Edit
  - Grep
---

# Add Org-Roam Links

Scans an org file for concepts that match entries in the persistent topic index and inserts
`[[id:UUID][display text]]` links inline into the bullet content (never into headings).

## Usage

```
/add-roam-links <org-file>
```

## Arguments

- `$ARGUMENTS` — path to the org file (relative to repo root or absolute)

## Topic Index

The complete topic index is stored in the project memory system as
`reference_org_roam_topics.md`. It will be available in the conversation context
(loaded from MEMORY.md). If not already loaded, ask Claude to read it from memory.

Always obtain the slug → UUID mapping before scanning the file.

## Instructions

1. **Load the topic index** — check conversation context for the org-roam topic table,
   or read it from the project memory file `reference_org_roam_topics.md`.

2. **Read the target org file** in full.

3. **Scan for matching concepts** — for each topic in the index, check whether the concept
   appears (by name or close synonym) anywhere in the file body. Focus on substantive
   mentions, not passing references. Good matches include:
   - Explicit named mentions ("static analysis", "TDD", "DevOps", "GTD", etc.)
   - Clear synonyms ("version control" → `git`, "containers" → `docker`,
     "continuous delivery" → `devops`, "knowledge management" → `basb`/`zettelkasten`)
   - Concepts already linked elsewhere in the file should be linked again where they
     recur in a new context, but don't add redundant links within the same bullet block

4. **Insert links inline** — add `[[id:UUID][display text]]` directly into the existing
   bullet text at the point of mention. Rules:
   - Place the link on the word/phrase being linked, not as a parenthetical "(see X)"
     unless the concept is tangential
   - Use "(see [[id:UUID][topic]])" only for tangential cross-references
   - **Never put links in org headings** (`** Ch N: ...`) — they render badly on export
   - Preserve all existing formatting, indentation, and org syntax
   - Do not add links that are already present

5. **Report**:
   - How many new links were added
   - Which topics were linked and where
   - Any strong candidates that were skipped (e.g. no matching topic in the index)
