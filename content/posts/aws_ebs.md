+++
title = "AWS EBS"
draft = false
+++

Elastic Block Storage
: like a virtual HDD
    create storage volumes and attach to EC2
    available in a AZ


## Types {#types}

-   SDD
    -   GP2: General purpose SSD
        -   3-10000 IOPS
    -   IO1: previsioned IOPS SSD
        -   &gt; 10000 IOPS
-   Magnetic
    -   ST1: throughput optimized HDD
        -   big data
        -   cannot be boot volume
        -   data warehouses
    -   SC1: cold hdd
        -   lowest storage cost
        -   file server
        -   cannot be boot volume
    -   Standard
        -   bootable
        -   infrequently
        -   storage costs

> EBS root volumes cannot be encrypted (only default AMI)
>
> -   It can by done using 3rd-party software
> -   additional volumes can be encrypted


### EC2 {#ec2}

-   instances and EBS volumes are in the same region
-   in order to make **backup** from 1 AZ to another: create snapshot
    -   same applies when region changes


#### Migrate EC2 to another region {#migrate-ec2-to-another-region}

-   create snapshot
-   create AMI from snapshot
-   create new instance in new region