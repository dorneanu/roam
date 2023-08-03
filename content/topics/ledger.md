+++
title = "ledger"
draft = false
+++

## Tipps {#tipps}


### Change commodity display style {#change-commodity-display-style}

[Documentation](https://hledger.org/1.27/hledger.html#commodity-styles) (hledger):

```sh
hledger print -c '1.000,0 EUR'
```

will print sth like:

```text
2000-09-xx * Something
    Assets:Bank                     -17,9 EUR
    Expenses:Unknown                 17,9 EUR
```


## Articles {#articles}

2022-09-06 ◦ [[<https://blog.leonardotamiano.xyz/posts/ledger-intro/>][How I Track my Expenses with Ledger
: Leonardo Tamiano's Cyberspace]]

2022-09-07 ◦ [Hledger cheatsheet](https://devhints.io/hledger)
