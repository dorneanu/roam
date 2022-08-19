+++
title = "AWS Databases"
draft = false
+++

## Relational () {#relational-aws-rds}

OLTP based

-   SQL server
-
-   Oracle
-
-
-   Aurora


## Non-relational {#non-relational}

Consist of:

-   collection (=table)
-   document (=row)
-   key value pairs (=fields)


## OLTP {#oltp}

Online Transaction Processing

-   pull in specific records (e.g. by id)


## OLAP {#olap}

Online Analytics Processing

-   pulls in large numbers of records
-   uses different type of architecture
    -   from a DB/infra perspective
-   examples: AWS


## Misc {#misc}

**Important**: Pay attention when client and server in different s:

-   server must allow `INBOUND` connections for clients security group


## Backups {#backups}

-   automated backups (by default)
    -   saved on S3
-   DB snapshots
    -   always user initiated
    -   stored even after you delete the RDS instance

When restoring backups, a new DNS name is needed.