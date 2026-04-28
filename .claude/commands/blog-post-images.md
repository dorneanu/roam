# blog-post-images

Convert inline `[[file:...]]` image references in a blog post org file to `#+html: {{< gbox >}}` shortcodes, and copy the image files to the correct static folder in the blog repo.

## Usage

```
/blog-post-images <org-file>
```

## Arguments

- `$ARGUMENTS` - path to the org file (relative to repo root or absolute)

## Examples

```
/blog-post-images org/blog/2026-04-20-claude-code-emacs-customizations.org
```

## Instructions

1. Read the org file to find all `[[file:...]]` image references. Also look for any `#+caption:` lines immediately above them.

2. Derive the post slug and year from the filename (e.g. `2026-04-20-claude-code-emacs-customizations.org` → year `2026`, slug `claude-code-emacs-customizations`).

3. Determine the target static folder in the blog repo (sibling of the roam repo, i.e. `../blog` relative to the roam repo root):
   ```
   ../blog/static/posts/img/<year>/<slug>/
   ```
   Create it if it doesn't exist.

4. For each image found:
   - Resolve the source path relative to the org file's directory
   - Copy it to the target static folder (use `cp`)
   - Build the Hugo static path: `/posts/img/<year>/<slug>/<filename>`

5. Replace each image block in the org file. The original pattern may be:
   ```org
   #+caption: Some caption text
   [[file:path/to/image.png]]
   ```
   or just:
   ```org
   [[file:path/to/image.png]]
   ```

   Replace with:
   ```org
   #+html: {{< gbox src="/posts/img/<year>/<slug>/<filename>" title="<title>" caption="<caption>" pos="left" >}}
   ```
   - Use the `#+caption:` text as both `title` and `caption` if present; otherwise derive a short title from the filename
   - Remove the `#+caption:` line (it's absorbed into the shortcode)

6. Report:
   - How many images were processed
   - The static folder they were copied to
   - Any images that could not be found at their source path
