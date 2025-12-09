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
