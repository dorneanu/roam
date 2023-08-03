+++
title = "Continuous Integration (CI)"
draft = false
+++

-   Keep feature branches short and integrate them into trunk/master frequently
-   each change triggers a build process (including running unit tests)
-   if any part of this process fails, developers should fix it immediately
-   How to find out you're doing CI the right way (from [Continuous Delivery: Reliable Software Releases Through Build, Test, and Deployment Automation](https://www.goodreads.com/book/show/8686650-continuous-delivery))
    -   Do you check in to main/master once per day?
    -   Do you have a suite of tests to validate your changes?
    -   When a build is broken, is it the priority #1 of the team to fix it?
