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
