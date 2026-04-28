# publish-blog-post

Commit and push a blog post in both the roam repo and the blog repo.

## Usage

```
/publish-blog-post <slug>
```

## Arguments

- `$ARGUMENTS` - the post slug (e.g. `claude-code-emacs-customizations`). Used to identify changed files in both repos.

## Examples

```
/publish-blog-post claude-code-emacs-customizations
```

## Instructions

1. Derive the post slug from `$ARGUMENTS`.

2. **In the roam repo** (the current working directory):

   a. Run `git status` to see what's changed.

   b. Stage all files related to the post:
      - `org/blog/*<slug>*` — the org source file
      - `org/blog/<Section>/` — any screenshot folders (e.g. `Setup/`)
      - Any other modified files shown by `git status` that are clearly part of this post

   c. Commit with a message following the existing convention (e.g. `feat(blog): Add <title> blog post` for new posts, `update(blog): ...` for updates). Derive the title from the slug by replacing hyphens with spaces and title-casing.

   d. Push to `origin main`.

3. **In the blog repo** (find it by running `git remote -v` in the current repo, then derive the sibling `blog` repo path — or use `../blog` relative to the roam repo root):

   a. Run `git status` to see what's changed.

   b. Stage all files related to the post:
      - `content/posts/*<slug>*` — the exported markdown file
      - `static/posts/img/**/*<slug>*` — the images folder

   c. Commit with a matching message (same convention as roam).

   d. Push to `origin main`.

4. Report the commit SHAs and push results for both repos.

## Notes

- Always run `git status` first — never blindly `git add .`
- If there are unrelated changes in either repo, stage only the post-related files and leave the rest unstaged
- If either push fails, report the error and stop — do not force push
