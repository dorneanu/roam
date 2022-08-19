+++
title = "AWS EFS"
draft = false
+++

The storage service for

-   storage capacity is elastic
    -   growing/shrinking as you add/remove files
-   support for NFSv4
-   only pay for the sorage
-   data shared across multiple AZ's within a region
-   Read After Write Consistency
-   Name: `<name>.efs.<region>.amazonaws.com`

Uses cases:

-   fileserver
    -   across multiple EC2 instances
-   restrict access based on perms on files/folders