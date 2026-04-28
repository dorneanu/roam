# create-blog-post

Create a new blog post org file in `org/blog/` with the correct frontmatter structure.

## Usage

```
/create-blog-post <slug> [tag1,tag2,...]
```

## Arguments

- `$ARGUMENTS` - a short hyphenated slug for the post title (required), optionally followed by comma-separated tags

## Examples

```
/create-blog-post claude-code-emacs-customizations emacs,ai,claudecode
/create-blog-post my-new-post
```

## Instructions

1. Parse `$ARGUMENTS`:
   - First token (before any space) is the slug
   - Remaining tokens (after the space) are comma-separated tags; default to `:blog:` if none provided
   - Derive a human-readable title from the slug by replacing hyphens with spaces and title-casing

2. Determine today's date in `YYYY-MM-DD` format.

3. Generate a UUID (use `uuidgen` via Bash, uppercase).

4. Build the filename: `YYYY-MM-DD-<slug>.org` and write it to `org/blog/`.

5. Write the file with this exact frontmatter structure:

```org
:PROPERTIES:
:ID:       <UUID>
:END:
#+title: <Title>
#+filetags: :<tag1>:<tag2>:
#+author: Victor Dorneanu
#+date: <YYYY-MM-DD>
#+setupfile: setup.org
#+draft: true
#+property: header-args :mkdirp yes

<short intro sentence — leave a TODO placeholder>

* Section 1

TODO: content

* Section 2

TODO: content

* Conclusion

TODO: content
```

6. Report the full path of the created file to the user.

## Notes

- The file is created with `#+draft: true` so it won't be published until the author sets it to `false`.
- The `#+setupfile: setup.org` line is required for Hugo export to work correctly.
- Sections are just placeholders — the author will fill them in.
