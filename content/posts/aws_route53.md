+++
title = "AWS Route53"
draft = false
+++

-   SOA records
    -   name of the server that supplied data for the zone
    -   zone admin
    -   version of data file
    -   \# of seconds for the TTL file on resource files
-   Amazon is a domain register
-   `ALIAS` records
    -   map resource record sets to , or buckets
    -   difference to `CNAME`
        -   can't be used for naked domain names (without `A`-record, also zone as zone apex record)
    -   map one DNS name to another DNS name
    -   Route53 will automatically change response v4 for alias records
    -   requests for `CNAME` will be charged
        -   use `ALIAS` instead


## Routing policies {#routing-policies}


### Simple {#simple}

-   single resource that performs a given function for the domain
-   round robbin


### Weighted {#weighted}

-   example:
    -   send 20% of traffic to one region
    -   send 80% of traffic to another region
-   split traffic based on assigned weights


### Latency {#latency}

-   route traffic based on the lowest network latency for the end user
-   have to define region


### Failover {#failover}

-   when you want to create an active/passive setup


### Geolocation {#geolocation}

-   routing based on the geographic location of the client


### Multivalue answer {#multivalue-answer}

-   route traffic randomly to multiple resources
-   example
    -   web-servers get DNS responses containing list of available IP addresses for the web servers