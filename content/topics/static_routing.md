+++
title = "Static Routing"
draft = false
+++

2 types of routing

-   static routing
    -   manually setting routing information
-   dynamic routing
    -   routers share information


## Static routing {#static-routing}

Skeleton for the command:

```text
r (config)# ip route <dst network> <dst mask> [next hop IP addr|exit interface] <admin distance>
```

dst network
: the network where the router will try to route to

admin distance
: trustworthiness of a routing protocol
    the lower the admin distance, the better the router will trust that router

| Admin distance | Number |
|----------------|--------|
| Connected      | 0      |
| Static         | 1      |
|                | 120    |
|                | 90     |
|                | 110    |

The router will prefere the route the _minimum_ admin distance.


## Static routing in the LAB {#static-routing-in-the-lab}