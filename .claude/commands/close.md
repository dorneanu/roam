# close

End-of-session skill. Persists decisions, learnings, and state so the next
session can resume from a coherent starting point rather than rebuilding context
from scratch. Runs three phases in order: Retrospective → Housekeeping → Close.

## Usage

```
/close
```

No arguments. Run this at the end of every session.

## Instructions

### Phase 1 — Retrospective

1. Scan the full session context for anything worth keeping:
   - **Decisions** — architectural or process choices made
   - **Learnings / inefficiencies** — what worked, what didn't, surprising findings
   - **Open tasks** — anything started but not finished
   - **References** — URLs, file paths, external resources consulted
   Only capture what is actually relevant; skip noise.

2. Determine the namespace by browsing recent memory files (last 30 days) under
   `~/.claude/projects/.../memory/` and matching the session to an existing
   project slug. If none match, derive a new slug from the session topic.

3. Write or update typed memory files under `~/.claude/projects/<namespace>/memory/`:
   - `user_*.md` — user preferences and personal working rules
   - `feedback_*.md` — workflow corrections and non-obvious confirmations
   - `project_*.md` — project state, deadlines, architectural decisions
   - `reference_*.md` — external references, links, third-party docs
   Each file needs frontmatter with `name`, `description`, and `metadata.type`.
   New files must get a one-line entry added to `MEMORY.md` (the index).

### Phase 2 — Housekeeping

1. Check whether the current directory is inside a git repo:
   ```bash
   git rev-parse --show-toplevel
   ```
   If not in a repo, skip git steps.

2. Show what changed:
   ```bash
   git status --short
   git diff --stat HEAD
   ```

3. If there are uncommitted changes, generate a concise English imperative commit
   message (e.g. `feat: add /close skill`) and **ask the user before committing**.
   Do not commit without confirmation.

4. Write a `SESSION_LOG.md` entry — prepend (do not append) a new block at the
   top of the file at the git root (fall back to `~/SESSION_LOG.md`):
   ```
   ## [YYYY-MM-DD] <title>

   <1–2 sentence summary of what was accomplished>

   Main artifact: <file path or URL>
   ```

### Phase 3 — Close

1. Print a rename suggestion for the session tab in this exact format:
   ```
   [YYYY-MM-DD] <project-or-topic> - <what-was-done>
   ```

2. Print a one-line closing summary:
   ```
   <N> thoughts captured · <N> memory files updated · <N> commits · SESSION_LOG updated
   ```

## Notes

- The win is not the commit message — it is leaving breadcrumbs for tomorrow.
  "Claude feels way less magical when it has to rebuild context from vibes every morning."
- If a memory file already exists for a topic, update it rather than creating a duplicate.
- Keep the "why" layer: capture not just what changed but why it was changed.
