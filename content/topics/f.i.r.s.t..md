+++
title = "F.I.R.S.T."
draft = false
+++

-   fast: tests should be fast
-   independent: tests should not depenend on each other
    -   one test should not set up the conditions for the next test
    -   test should be run independently and in any order you like
-   repeatable: tests should be runnable in any environment
    -   if your tests aren't repeatable in any environment they you always have an excuse why the fail
-   self-validating: the tests should have a boolean output
    -   test either pass or fail
-   timely: test need to be written in a timely fashion
    -   unit tests should be written just before the production code that makes them pass
    -   if you write tests after production, then you may find the production code to be hard to test
    -   you may even decide that production code is not testable