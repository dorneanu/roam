;;; Directory Local Variables            -*- no-byte-compile: t -*-
;;; For more information see (info "(emacs) Directory Variables")

((org-mode . ((eval .
                    (progn
                      (setq-local
                       org-confirm-babel-evaluate nil
                       org-agenda-files nil)
                      (org-hugo-auto-export-mode))
              ))))
