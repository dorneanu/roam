+++
title = "org-roam"
tags = ["emacs", "org"]
draft = false
+++

## Capturing {#capturing}

-   2022-11-22 ◦ [An example workflow with Org-roam https://www.reddit.com/r/emacs/comments/ysfcmx/comment/iw3cl4u · GitHub](https://gist.github.com/nickanderson/00005b5b03e323a65ada98c5fa5ebb11)


## Functions {#functions}

-   Create ID for current buffer: `org-id-get-create`


## Articles {#articles}

-   2023-02-02 ◦ [My org-roam workflows for taking notes and writing articles](http://honnef.co/articles/my-org-roam-workflows-for-taking-notes-and-writing-articles/)

    > I want all of my notes to have a #+date property, set to the creation time of the note. Instead of having to modify all templates to include it, I add a hook to org-roam-capture-new-node-hook that inserts the property whenever a new note is created.

    ```emacs-lisp
    (defun dh/org-insert-date-keyword ()
      (org-roam-set-keyword "date" (format-time-string "[%Y-%m-%d %a]" (current-time))))

    (add-hook 'org-roam-capture-new-node-hook #'dh/org-insert-date-keyword)
    ```

-   2022-08-30 ◦ [Emacs CODE implementation](https://renatgalimov.github.io/org-basb-code/)
    -   some workflows
    -   implements `CODE` as proposed by [Tiago Forte]({{< relref "../books/building_a_second_brain.md" >}})
-   2022-08-30 ◦ [Graphing my External Brain with Org-Roam | Eigenbahn blog](https://www.eigenbahn.com/2021/09/15/org-roam)
-   2022-08-22 ◦ [5 Org Roam Hacks for Better Productivity in Emacs - System Crafters](https://systemcrafters.net/build-a-second-brain-in-emacs/5-org-roam-hacks/)


## Examples {#examples}

-   2022-12-12 ◦ [github.com/bphenriques/knowledge-base: Personal Wiki](https://github.com/bphenriques/knowledge-base)
-   2022-08-30 ◦ [Alex's Notes](https://notes.alexkehayias.com/)
