+++
title = "Git"
author = ["Cyneox"]
tags = ["software"]
draft = false
+++

## Signing {#signing}

In the local repository you would do:

```sh
# Specify signing key
git config user.signingKey ~/.ssh/<your SSH key>.pub

# Tell git to sign using a SSH key
git config gpg.format ssh

# Always sign commits
git config commit.gpgSign true
```


## Tipps {#tipps}

-   Undo last commit: `git reset --soft HEAD~1`


## Tools {#tools}

-   2023-10-26 ◦ [gittuf](https://gittuf.github.io/)


## Articles {#articles}

-   2023-12-06 ◦ [Understanding Git And Git Workflow - DEV Community](https://dev.to/untilyou58/understanding-git-and-git-workflow-1e6a)
-   2023-10-18 ◦ [Organizing multiple Git identities | Garrit's Notes](https://garrit.xyz/posts/2023-10-13-organizing-multiple-git-identities)

    Use multiple identities. Sth like:
    ```text
      [user]
        name = Garrit Franke
        email = garrit@slashdev.space

      [includeIf "gitdir:~/work/"]
          path = ~/.gitconfig-work

      [includeIf "gitdir:~/work/client2/"]
          path = ~/.gitconfig-client2

      [includeIf "gitdir:~/sources/"]
          path = ~/.gitconfig-personal

      # ...
    ```
-   2023-01-25 ◦ [git - How can I reconcile detached HEAD with master/origin? - Stack Overflow](https://stackoverflow.com/questions/5772192/how-can-i-reconcile-detached-head-with-master-origin)
    -   When "HEAD detached at origin/main"
-   2022-08-30 ◦ [GIT - how and why to sign commits](https://dev.to/andreasaugustin/git-how-and-why-to-sign-commits-35dn)
