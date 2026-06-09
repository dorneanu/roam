#!/usr/bin/env bash
# Export org files to Hugo Markdown (ox-hugo) using Emacs with full init.
# org-roam id: links are resolved via the DB; worktree duplicates are filtered out.
#
# Usage:
#   ./scripts/org-to-md.sh --pr 1                     # all .org files changed in a PR
#   ./scripts/org-to-md.sh org/topics/attention_economy.org
#   ./scripts/org-to-md.sh --pr 1 org/extra/file.org  # combined

set -euo pipefail

EMACS="${EMACS:-emacs}"
EMACS_USER_DIR="${EMACS_USER_DIR:-$HOME/.config/minimal-emacs-dev}"
PR_NUMBER=""
FILES=()

usage() {
  echo "Usage: $0 [--pr <number>] [file.org ...]"
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --pr)    PR_NUMBER="$2"; shift 2 ;;
    --help|-h) usage ;;
    *.org)   FILES+=("$1");  shift ;;
    *)       echo "Unknown argument: $1"; usage ;;
  esac
done

if [[ -n "$PR_NUMBER" ]]; then
  while IFS= read -r f; do
    FILES+=("$f")
  done < <(gh pr view "$PR_NUMBER" --json files --jq '.files[].path' | grep '\.org$' || true)
fi

if [[ ${#FILES[@]} -eq 0 ]]; then
  echo "No .org files specified." >&2
  usage
fi

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

ELISP_FILE="$(mktemp /tmp/org-export-XXXXXX.el)"
trap 'rm -f "$ELISP_FILE"' EXIT

file_list="("
for f in "${FILES[@]}"; do
  abs="$REPO_ROOT/$f"
  file_list="$file_list \"$abs\""
done
file_list="$file_list)"

cat > "$ELISP_FILE" <<ENDOFSCRIPT
;; org-roam is deferred in the init; set the directory explicitly for batch mode.
(setq org-roam-directory (expand-file-name "~/repos/priv/roam/"))

;; Disable autosync so the existing DB is used as-is without re-scanning.
;; Prevents stale worktree directories from polluting link resolution.
(when (fboundp 'org-roam-db-autosync-mode)
  (org-roam-db-autosync-mode -1))

(require 'org-id)
(setq org-id-extra-files nil)
;; org-id-locations may be an alist (org-roam stores it that way).
;; Convert to a hash table and strip any worktree paths so the canonical
;; path wins when the same ID appears twice.
(org-id-locations-load)
(let ((clean (make-hash-table :test 'equal)))
  (maphash (lambda (id file)
             (let ((abs (if (string-prefix-p "~" file)
                            (expand-file-name file)
                          file)))
               (unless (string-match-p "/\\.claude/worktrees/" abs)
                 (puthash id abs clean))))
           org-id-locations)
  (setq org-id-locations clean))

;; straight.el doesn't add build dirs to load-path in batch mode.
;; Add every package build dir so ox-hugo and its deps can be required.
(let ((build-dir (expand-file-name "straight/build" user-emacs-directory)))
  (dolist (pkg (directory-files build-dir t "^[^.]"))
    (when (file-directory-p pkg)
      (add-to-list 'load-path pkg))))
(require 'ox-hugo)
(setq org-export-with-broken-links t)

(let ((files (quote ${file_list})))
  (dolist (abs files)
    (if (not (file-exists-p abs))
        (message "SKIP (not found): %s" abs)
      (with-current-buffer (find-file-noselect abs)
        (setq-local org-hugo-base-dir org-roam-directory)
        (setq-local org-hugo-section
                    (cond
                     ((string-match-p "/org/topics/" abs)    "topics")
                     ((string-match-p "/org/books/"  abs)    "books")
                     ((string-match-p "/org/blog/"   abs)    "posts")
                     (t                                       "topics")))
        (setq-local org-export-with-broken-links t)
        (condition-case err
            (progn
              (org-hugo-export-wim-to-md)
              (message "OK: %s" abs))
          (error (message "ERROR: %s — %s" abs (error-message-string err))))))))
ENDOFSCRIPT

echo "Exporting ${#FILES[@]} file(s) via Emacs + ox-hugo..."

"$EMACS" --batch \
  --init-directory "$EMACS_USER_DIR" \
  --load "$ELISP_FILE" \
  2>&1 | grep -E "^(OK|SKIP|ERROR|Error:)" || true

echo "Done."
