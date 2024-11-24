((org-mode . ((eval .
                   (progn
                     (org-hugo-auto-export-mode)
                     (add-to-list 'org-hugo-special-block-type-properties '("sidenote" . (:trim-pre t :trim-post t)))
                     (setq-local
                      org-agenda-files nil
                      org-hugo-base-dir org-roam-directory
                      org-hugo-section "topics"
                      org-export-with-tags nil
                      org-export-with-broken-links t
                      org-id-extra-files (directory-files-recursively org-roam-directory "\.org$"))
                     ;; https://github.com/kaushalmodi/ox-hugo/issues/500#issuecomment-1006674469
                     (defun replace-in-string (what with in)
                       (replace-regexp-in-string (regexp-quote what) with in nil 'literal))

                     (defun zeeros/fix-doc-path (path)
                       ;; (replace-in-string "../../topics/" "" (replace-in-string "../../topics/" "" path)
                       (replace-in-string "../../topics/" "../topics/" path)
                       (replace-in-string "../books/done/" "../books/" path)
                       (replace-in-string "books/done/" "books/" path))

                     ;; Make sure we get the right ids
                     (advice-add 'org-export-resolve-id-link :filter-return #'zeeros/fix-doc-path)
                     )))))
