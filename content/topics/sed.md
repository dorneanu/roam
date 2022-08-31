+++
title = "sed"
draft = false
+++

## Recipes {#recipes}


### Append after match {#append-after-match}

```sh
for i in *.org; do sed '/^#+title.*/a #+date=`basename $i .org`' $i; done
```

This will append the `basename` after each line containing `#+title`.