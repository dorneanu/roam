+++
title = "Emacs"
draft = false
+++

## elfeed {#elfeed}

-   2022-10-24 ◦ [A workflow for reading, managing and discovering ML research papers with Emacs | Koustuv Sinha](https://koustuvsinha.com/post/emacs_research_workflow/)
-   2022-10-24 ◦ [Add org-store-link Entry for elfeed - Yiming Chen](https://yiming.dev/blog/2016/01/28/add-org-store-link-entry-for-elfeed/)
    ```emacs-lisp
      ;; ---------------------
      ;; org capture in elfeed
      ;; ---------------------
      (defun private/org-elfeed-entry-store-link ()
        (when elfeed-show-entry
          (let* ((link (elfeed-entry-link elfeed-show-entry))
                 (title (elfeed-entry-title elfeed-show-entry)))
            (org-store-link-props
             :link link
             :description title)
            )))

      (add-hook 'org-store-link-functions
                'private/org-elfeed-entry-store-link)
    ```
    <div class="src-block-caption">
      <span class="src-block-number">Code Snippet 1:</span>
      <a href="https://yiming.dev/blog/2016/01/28/add-org-store-link-entry-for-elfeed/">https://yiming.dev/blog/2016/01/28/add-org-store-link-entry-for-elfeed/</a>
    </div>
-   2022-10-19 ◦ [github.com/iocanel/emacs.d/+elfeed.el](https://github.com/iocanel/emacs.d/blob/master/%2Belfeed.el)
-   2022-10-19 ◦ [github.com/skeeto/.emacs.d/feed-setup.el](https://github.com/skeeto/.emacs.d/blob/master/etc/feed-setup.el)
-   2022-10-19 ◦ [Lazy Elfeed | Karthinks](https://karthinks.com/software/lazy-elfeed/)
-   2022-10-19 ◦ [hooks - elfeed + olivetti modes - Emacs Stack Exchange](https://emacs.stackexchange.com/questions/59786/elfeed-olivetti-modes)
-   2022-10-19 ◦ [github.com/SqrtMinusOne/dotfiles/Emacs.org](https://github.com/SqrtMinusOne/dotfiles/blob/master/Emacs.org#elfeed)


### Functions {#functions}

```emacs-lisp
(defun elfeed-link-title (entry)
   "Copy the entry title and URL as org link to the clipboard."
   (interactive)
   (let* ((link (elfeed-entry-link entry))
          (title (elfeed-entry-title entry))
          (titlelink (org-make-link-string link title))))
   (when titlelink
     (kill-new titlelink)
     (x-set-selection 'PRIMARY titlelink)
     (message "Yanked: %s" titlelink)))
```
<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 2:</span>
  Source: <a href="http://heikkil.github.io/blog/2015/05/09/notes-from-elfeed-entries/">http://heikkil.github.io/blog/2015/05/09/notes-from-elfeed-entries/</a>
</div>

```emacs-lisp
(defun my/elfeed-search-filter-source (entry)
  "Filter elfeed search buffer by the feed under cursor."
  (interactive (list (elfeed-search-selected :ignore-region)))
  (when (elfeed-entry-p entry)
    (elfeed-search-set-filter
     (concat
      "@6-months-ago "
      "+unread "
      "="
      (replace-regexp-in-string
       (rx "?" (* not-newline) eos)
       ""
       (elfeed-feed-url (elfeed-entry-feed entry)))))))
```
<div class="src-block-caption">
  <span class="src-block-number">Code Snippet 1:</span>
  Source: <a href="https://sqrtminusone.xyz/posts/2021-09-07-emms/">https://sqrtminusone.xyz/posts/2021-09-07-emms/</a>
</div>


## Registers {#registers}


### Append text to registers {#append-text-to-registers}

When you are collecting text using append-to-register and prepend-to-register, you may want to separate individual collected pieces using a separator. In that case, configure a register-separator and store the separator text in to that register. For example, to get double newlines as text separator during the collection process, you can use the following setting.

```emacs-lisp
(setq register-separator ?+)
(set-register register-separator "\n\n")
```

[Source](https://www.gnu.org/software/emacs/manual/html_node/emacs/Text-Registers.html)


## Resources {#resources}


### Keyboard shortcuts {#keyboard-shortcuts}

-   2022-09-05 ◦ [GitHub - VernonGrant/emacs-keyboard-shortcuts: A list of Emacs keyboard shortcuts that I use on a regular basis.](https://github.com/VernonGrant/emacs-keyboard-shortcuts)


### Bookmarks {#bookmarks}

-   2022-10-11 ◦ [EmacsWiki: Book Marks](https://www.emacswiki.org/emacs/BookMarks)

    > Some keys in **Bookmark List**:
    >
    > ‘a’ – show annotation for the current bookmark
    > ‘A’ – show all annotations for your bookmarks
    > ‘d’ – mark various entries for deletion (‘x’ – to delete them)
    > ‘e’ – edit the annotation for the current bookmark
    > ‘m’ – mark various entries for display and other operations, (‘v’ – to visit)
    > ‘o’ – visit the current bookmark in another window, keeping the bookmark list open
    > ‘C-o’ – switch to the current bookmark in another window
    > ‘r’ – rename the current bookmark


### Configuration {#configuration}

-   2022-11-14 ◦ [GitHub - caisah/emacs.dz: Awesome emacs config files](https://github.com/caisah/emacs.dz)
-   2022-10-26 ◦ [Doom Emacs Configuration](https://abdelhakbougouffa.pro/posts/config/)
-   2022-10-25 ◦ [极简Emacs开发环境配置](https://huadeyu.tech/tools/emacs-setup-notes.html)
-   2022-10-18 ◦ [A Life Configuring Emacs](https://alhassy.github.io/emacs.d/)


### Evil {#evil}

-   2022-09-01 ◦ [GitHub - edkolev/evil-goggles: Display visual hint on evil edit operations](https://github.com/edkolev/evil-goggles)


### Emojis {#emojis}

-   2022-10-25 ◦ [Native Emojis in Emacs | Ian Y.E. Pan](https://ianyepan.github.io/posts/emacs-emojis/)


### GTD {#gtd}

-   2022-12-01 ◦ [How I use Emacs and Org-mode to implement GTD](https://members.optusnet.com.au/~charles57/GTD/gtd_workflow.html)


### Collection of awesome packages {#collection-of-awesome-packages}

-   2022-09-01 ◦ [GitHub - emacs-tw/awesome-emacs: A community driven list of useful Emacs packages, libraries and other items.](https://github.com/emacs-tw/awesome-emacs)
-   2022-09-01 ◦ [Emacs by Ernst de Hart (ehartc) | ZEEF](https://emacs.zeef.com/ehartc)
-   2022-09-01 ◦ [Lets share your top 3 packages that you cant live without. : emacs](https://www.reddit.com/r/emacs/comments/wcupae/lets_share_your_top_3_packages_that_you_cant_live/)
-   2022-09-01 ◦ [What are some must-have packages for emacs? : emacs](https://www.reddit.com/r/emacs/comments/w4gxoa/what_are_some_musthave_packages_for_emacs/)


### Writing {#writing}

-   2022-11-07 ◦ [blakewatson.com – Almost monospaced: the perfect fonts for writing](https://blakewatson.com/journal/almost-monospaced-the-perfect-fonts-for-writing/)
-   2022-09-20 ◦ [Creative writing with Emacs – Jacmoe's Cyber Soapbox](https://jacmoes.wordpress.com/2019/09/24/creative-writing-with-emacs/)


### org-babel {#org-babel}

-   2022-12-06 ◦ [github.com/dfeich/org-babel-examples](https://github.com/dfeich/org-babel-examples)
    -   Examples using emacs org mode babel inline source code with different backend languages


### UI {#ui}

-   2022-12-05 ◦ [gopiandcode/emacs-viewer: A web frontend for your Org-mode  - emacs-viewer - Codeberg.org](https://codeberg.org/gopiandcode/emacs-viewer)
