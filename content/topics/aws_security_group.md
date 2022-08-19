+++
title = "AWS Security Group"
draft = false
+++

AWS's firewall
: stateful
    changes occur immediately


everything that you allow **in** will be (default) allowed **out**
    -   all **out-bound** traffic is allowed by default

everything blocked by default
    -   you can only **allow** not deny

you can multiple security groups


## Sec groups vs. ACLs {#sec-groups-vs.-acls}

-   sec groups are stateful
-   ACLs are stateless
-   can't block IP addresses using sec groups
    -   use ACLs instead