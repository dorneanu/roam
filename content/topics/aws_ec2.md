+++
title = "AWS EC2"
draft = false
+++

Elastic Compute Cloud
: still "only" a web service


## Pricing models {#pricing-models}

-   on-demand
    -   fixed by rate hour/seconds
    -   **low cost and flexible**
-   reserved
    -   capacity reservation
    -   discount on the hourly charge
    -   used for **web servers**
    -   ready state or **predictable** usage
    -   **up-front payments**
-   spot
    -   enables you to bid whatever price you want
    -   apps feasible at low compute prices
    -   urgent need for large amounts of extra capacity
-   dedicated hosts
    -   like dedicated servers
    -   helps you w/ licensing
    -   for regulatory requirements (e.g. multi-tenant virtualization)
    -   purchased on-demand (hourly)


## Instance types {#instance-types}

Remember the letters: **DR MC GIFTPX** or **FIGHT DR MCPX**

-   D: density
-   R: RAM
-   M: main choice
-   C: compute
-   G: graphics
-   I: IOPS
-   F: FPGA
-   T: cheap/general purpose
-   P: graphics (think of pics)
-   X: xtreme memory


## Automation {#automation}

Use of bash scripts (after booting)


## Retrieve metadata {#retrieve-metadata}

`$ curl http://169.254.169.254/latest/meta-data`


## Placement groups {#placement-groups}


### Clustered {#clustered}

-   grouping of instances within a single AZ
-   recommended for apps that need low latency, high net throughput
-   only certain instances can be launched
-   for big data
-   can't span multiple AZ


### Spread {#spread}

-   group of instances that are each placed on distinct underlying hardware
-   recommended for applications that small number of critical instances that should be kept separate from each other