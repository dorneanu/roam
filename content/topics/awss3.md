+++
title = "AWS/S3"
draft = false
+++

Simple Storage System
: per default all buckets are private
    access control by: ACLs / bucket policies
    (optional): logging to another S3 bucket (in other account)


universal namespace (due to DNS stuff)

URL scheme: s3-_region_.amazonaws.com//bucket-name/

object-based
    -   key
    -   value
    -   version id
    -   metadata

SLA: 99.9% availability


## Types of storage {#types-of-storage}

-   S3 standard
-   S3-IA (infrequently accessed)
-   S3 One Zone-IA
-   Glacier (archiving)


## Pricing {#pricing}

-   storage type
-   requests
-   store mgmt pricing (price for tags)
-   data transfer pricing
-   transfer acceleration


## Consistency models {#consistency-models}

-   read after write for PUTS of **new** objects
-   eventual consistency for overwrite PUTS/DELETES (for updates)


## Encryption {#encryption}


### Types {#types}

-   client-side
-   server-side (SSE)
    -   SSE-S3
    -   SSE-KMS
    -   SSE-C


### Depending on data {#depending-on-data}

-   in transit
    -   use SSL/
-   at rest
    -   server-side (see Types of encryption)


## Data versioning {#data-versioning}

-   pay attention when activating versioning for large files (costs!)
-   deletion should be done only with MFA
-   delete markers are replicated
    -   but can't delete delete markers


## S3 Transfer acceleration {#s3-transfer-acceleration}

-   uses to upload
-   `<bucket-name>.s3-accelerate.amazonaws.com`


## S3 Static website hosting {#s3-static-website-hosting}

-   `<bucket-name>.s3-website.<region>.amazonaws.com`


## Lifecycle Management {#lifecycle-management}

-   applied to current/previous versions
-   only high-level understanding (for the exam)


## Resources {#resources}

-   2022-11-10 ◦ [Securing S3 uploads and downloads with Origin Access Control](https://dev.to/aws-builders/securing-s3-uploads-and-downloads-with-origin-access-control-3fl0)
-   <https://blog.mindedsecurity.com/2018/09/a-practical-guide-to-testing-security.html>
