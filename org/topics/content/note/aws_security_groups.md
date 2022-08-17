+++
title = "AWS Security Groups"
draft = false
+++

-   changes occur immediately
-   stateful
    -   everything that you allow `in` will also be allowed `out`
    -   all out-bound traffic is allowed by default
-   everything blocked by default (you can't deny, only allow)
-   associate multiple security groups


## Difference between SGs and ACLs {#difference-between-sgs-and-acls}

-   SGs are `stateful`
-   ACLs are stateless
-   **important**: can't block IP address using SGs (must use ACLs instead)