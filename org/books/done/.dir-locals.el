((nil .
      ((eval .
             (progn
               (setq-local
                org-agenda-files nil
                org-hugo-base-dir "/cs/priv/repos/roam"
                org-hugo-section "books"
                org-export-with-tags nil
                org-export-with-broken-links t
                org-id-extra-files (directory-files-recursively org-roam-directory "\.org$"))))))

 (org-mode .
           ((eval .
                  (progn
                    (setq org-startup-folded t
                          org-hide-block-startup t
                          org-startup-indented t
                          org-startup-align-all-tables t)
                    (org-hugo-auto-export-mode)
                    (add-to-list 'org-hugo-special-block-type-properties '("sidenote" . (:trim-pre t :trim-post t)))
                    ))))
)
