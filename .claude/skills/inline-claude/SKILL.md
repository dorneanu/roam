---
name: inline-claude
description: Process files containing embedded Claude instructions in (claude: ...) format. Contextually executes instructions based on surrounding text and removes them after processing.
allowed-tools:
  - Read
  - Edit
  - Grep
  - Bash
---

# Inline Claude Instructions Processor

This skill processes files containing embedded `(claude: ...)` instructions, executing them contextually based on surrounding text.

## When to Use This Skill

- Processing blog posts with embedded Claude instructions
- Cleaning up draft documents with pending tasks
- Batch processing files with inline editing requests
- Converting draft content to final formatted content

## Processing Workflow

1. **Parse Instructions** — Find all `(claude: ...)` patterns in the file
2. **Context Analysis** — Analyze surrounding text to understand intent
3. **Execute Instructions** — Perform the requested actions contextually
4. **Clean Output** — Remove processed instructions from the file

## Instruction Types

### Auto-tagging
```
Before: "discusses stoicism (claude: add zk_tag)"
After:  "discusses {{{zk_tag(stoicism,Stoicism)}}}"
```

### Content Expansion
```
Before: "Marcus Aurelius (claude: add brief bio)"
After:  "Marcus Aurelius (121-180 AD, Roman Emperor and Stoic philosopher)"
```

### Format Conversion
```
Before: "ten principles (claude: make bullet points)"
After:  "ten principles:
         1. Turn obstacles into opportunities
         2. Focus on what you control
         ..."
```

### Add Sidenotes
```
Before: "negative visualization (claude: add sidenote about William Irvine)"
After:  "negative visualization
         #+sidenote
         This technique is also taught by William B. Irvine
         #+sidenote"
```

### Cross-references
```
Before: "the philosophers (claude: show lineage from Zeno to Marcus)"
After:  "the philosophers: Zeno → Cleanthes → Chrysippus → Epictetus → Marcus Aurelius"
```

## Context Analysis Strategy

The skill analyzes:
- **Keywords** near the instruction (±20 words)
- **File type** (.org, .md) for appropriate formatting
- **Existing patterns** in the file for consistency
- **Semantic context** to determine appropriate actions

## Pattern Recognition

```regex
\(claude:\s*([^)]+)\)
```

Common instruction patterns:
- `(claude: add zk_tag)` — Auto-tag based on nearby keywords
- `(claude: add [content])` — Insert specific content
- `(claude: make [format])` — Convert to specified format
- `(claude: show [relationship])` — Display connections/relationships

## Usage

```bash
/inline-claude path/to/file.org
```

## Processing Checklist

For each instruction found:

- [ ] Context analyzed (surrounding 20-50 words)
- [ ] Instruction type identified
- [ ] Appropriate action determined
- [ ] Content generated/modified
- [ ] Original instruction removed
- [ ] File formatting preserved

## Output

The skill reports:
- Total instructions found
- Instructions processed successfully
- Any instructions that couldn't be processed
- Summary of changes made