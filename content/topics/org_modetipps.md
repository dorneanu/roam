+++
title = "ORG Mode/Tipps"
draft = false
+++

-   editing
    -   make bold: `C-c C-x C-f *`
    -   make italic: `C-c C-x C-f /`
-   clock
    -   jump to current task: `C-c C-x C-j`
    -   reports
        -   recalculate: `C-c C-y`
        -   weekly
            -   \#+BEGIN: clocktable :maxlevel 4 :scope agenda :stepskip0 t :fileskip0 t :block thisweek
        -   monthly
            -   \#+BEGIN: clocktable :maxlevel 4 :scope agenda :fileskip0 t :block thismonth
-   tipps
    -   focus on current tree: `C-x n s`
    -   unfocus: `C-x n w`
-   agenda
    -   add current file to `org-agenda-files`: `M-x org-agenda-file-to-front` (especially when dealing with `gpg` files)
-   macros
    -   Increment number in titles:

        > `C-1 <f3> - [ ] Chapter <f3> <ret> C-5 <f4>` to get five chapters. (The C-1 is to start the counter at one, it usually starts at 0.) ([Source](https://emacs.stackexchange.com/questions/50770/orgmode-automatically-increment-an-unordered-list))
