;;; Directory Local Variables            -*- no-byte-compile: t -*-
;;; For more information see (info "(emacs) Directory Variables")

((org-mode . ((eval .
                    (progn
                      (setq-local
                       org-confirm-babel-evaluate t
                       org-agenda-files nil
                       fill-column 100
                       ;; org-id-extra-files (directory-files-recursively org-roam-directory "\.org$")
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

                      (org-hugo-auto-export-mode))
                    ))))
