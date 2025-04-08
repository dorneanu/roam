((nil .
      ((eval .
             (progn
               (setq-local
                org-agenda-files nil
                org-hugo-base-dir org-roam-directory
                org-hugo-section "books"
                org-export-with-tags nil
                org-export-with-broken-links t
                org-id-extra-files (directory-files-recursively org-roam-directory "\.org$"))))))

 (org-mode .
           ((eval .
                  (progn
                    ;; (setq org-startup-folded t
                    ;;       org-hide-block-startup t
                    ;;       org-startup-indented t
                    ;;       org-startup-align-all-tables t)
                    (setq org-agenda-files nil)
                    (org-hugo-auto-export-mode)
                    (org-modern-mode)
                    ;; Disable diff-hl mode (causes delays)
                    (diff-hl-mode -1)
                    (setq-local org-tags-column 90)
                    (setq-local fill-column 90)
                    (add-to-list 'org-hugo-special-block-type-properties '("sidenote" . (:trim-pre t :trim-post t)))
                    ))))
)
