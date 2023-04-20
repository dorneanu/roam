+++
title = "Git"
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


## Articles {#articles}

-   2023-01-25 ◦ [git - How can I reconcile detached HEAD with master/origin? - Stack Overflow](https://stackoverflow.com/questions/5772192/how-can-i-reconcile-detached-head-with-master-origin)
    -   When "HEAD detached at origin/main"
-   2022-08-30 ◦ [GIT - how and why to sign commits](https://dev.to/andreasaugustin/git-how-and-why-to-sign-commits-35dn)
