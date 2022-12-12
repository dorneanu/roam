(require 'package)
(package-initialize)

(setq package-archives '(("melpa" . "https://melpa.org/packages/")
                         ("org" . "http://orgmode.org/elpa/")))

(require 'find-lisp)

;; Enable local variables
(setq enable-local-variables t)
(setq enable-dir-local-variables t)

;; Disable couple of things
(projectile-mode -1)
;; (setq projectile-cache-file "/tmp/projectile.cache")

(dtrt-indent-mode nil)
(recentf-mode nil)


;; (require 'org)
;; (require 'ox-publish)
(require 'ox-hugo)

;; https://github.com/kaushalmodi/ox-hugo/issues/500#issuecomment-1006674469
(defun replace-in-string (what with in)
  (replace-regexp-in-string (regexp-quote what) with in nil 'literal))

(defun zeeros/fix-doc-path (path)
  ;; (replace-in-string "../../topics/" "" (replace-in-string "../../topics/" "" path)
  (replace-in-string "../../topics/" "../topics/" path)
  (replace-in-string "../books/done/" "../books/" path)
  (replace-in-string "books/done/" "books/" path))

(advice-add 'org-export-resolve-id-link :filter-return #'zeeros/fix-doc-path)

(defun brainfck/publish (file)
  (with-current-buffer (find-file-noselect file)
    ;; Apply dir-locals.el
    (hack-dir-local-variables)
    (hack-local-variables-apply)

    ;; Enable org mode (not sure if needed at all)
    (org-mode)

    (setq-local org-hugo-base-dir "/cs/priv/repos/roam")
    ;; (setq-local org-hugo-section "topics")
    (setq-local org-export-with-tags nil)
    (setq-local org-export-with-broken-links t)
    (add-to-list 'org-hugo-special-block-type-properties '("sidenote" . (:trim-pre t :trim-post t)))
    (setq org-agenda-files nil)
    ;; =====
    (message "file: %S" (buffer-file-name))
    (message "enable-local-dir-variables: %s" enable-dir-local-variables)
    (message "enable-local-variables = %S" enable-local-variables)
    (message "org-hugo-section (safe-local-variable) = %S" (get
                                                            'org-hugo-section 'safe-local-variable))
    (if-let* ((valid-dir-locals-found (dir-locals-find-file (buffer-file-name)))
              (dir (if (listp valid-dir-locals-found)
                       (car valid-dir-locals-found)
                     valid-dir-locals-found)))
        (message ".dir-locals.el file: %s"
                 (car
                  (dir-locals--all-files dir))))

    (message "[ox-hugo section-path DBG] org-hugo-section: %S" org-hugo-section)
    ;; =====
    (let ((org-id-extra-files (directory-files-recursively org-roam-directory "\.org$")))
      (org-hugo-export-wim-to-md))))
