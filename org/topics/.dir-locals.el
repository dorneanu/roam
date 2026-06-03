((org-mode . ((eval .
                   (progn
                     (org-hugo-auto-export-mode)
                     (add-to-list 'org-hugo-special-block-type-properties '("sidenote" . (:trim-pre t :trim-post t)))
                     (org-modern-mode)
                     (diff-hl-mode)
                     (setq-local
                      org-agenda-files nil
                      org-hugo-base-dir org-roam-directory
                      org-hugo-section "topics"
                      org-export-with-tags nil
                      org-export-with-broken-links t
                      org-id-extra-files nil
                      )
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

                     ;; Fix: org-roam sets org-id-locations to an alist but ox-hugo
                     ;; expects a hash table; reset it before each export
                     (advice-add 'org-hugo-export-wim-to-md :before
                                 (lambda (&rest _)
                                   (when (listp org-id-locations)
                                     (setq org-id-locations (make-hash-table :test 'equal))))
                                 '((name . "fix-org-id-locations-for-hugo")))
                     )))))
