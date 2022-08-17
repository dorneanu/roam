+++
title = "AWS/AMI"
draft = false
+++

AMI selection based on:

-   region/AZ
-   OS
-   ARCH (32/64)
-   launch permissions
-   storage for the root device:
    -   instance store (**ephemeral** storage)
    -   EBS backed volumes


## Types {#types}

-   EBS
    -   root device is an Amazon EBS volume created from an Amazon EBS snapshot
    -   **can** be stopped (without losing data)
-   Instance Store
    -   you cannot stop the instance
    -   less durability than EBS
    -   if underlying host fails, you will lose data

**Important**:

-   by default root volumes will be deleted on termination
-   but you can keep EBS volumes