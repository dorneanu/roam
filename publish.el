(require 'package)
(package-initialize)

(setq package-archives '(("melpa" . "https://melpa.org/packages/")
                         ("org" . "http://orgmode.org/elpa/")))

(require 'find-lisp)
(require 'ox-hugo)

;; https://github.com/kaushalmodi/ox-hugo/issues/500#issuecomment-1006674469
(defun replace-in-string (what with in)
  (replace-regexp-in-string (regexp-quote what) with in nil 'literal))

(defun zeeros/fix-doc-path (path)
  ;; (replace-in-string "../../topics/" "" (replace-in-string "../../topics/" "" path)
  (replace-in-string "../../topics/" "../topics/" path)
  (replace-in-string "../books/done/" "../books/" path)
  (replace-in-string "books/done/" "books/" path)

  )


(advice-add 'org-export-resolve-id-link :filter-return #'zeeros/fix-doc-path)

(defun brainfck/publish (file)
  (with-current-buffer (find-file-noselect file)
    (setq-local org-hugo-base-dir "/cs/priv/repos/roam")
    ;; (setq-local org-hugo-section "posts")
    (setq-local org-export-with-tags nil)
    (setq-local org-export-with-broken-links t)
    (setq-local org-agenda-files nil)
    (let ((org-id-extra-files (directory-files-recursively org-roam-directory "\.org$")))
      (org-hugo-export-wim-to-md))))
