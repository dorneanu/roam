+++
title = "AWS RDS"
draft = false
+++

## Multi-AZ RDS {#multi-az-rds}

have an exact copy of your production DB

-   in another AZ
-   AWS handles the replication
-   is case of failver -&gt; standby instance
-   **only for disaster recovery**


## Read Replica {#read-replica}

have an exact copy (read-only) of your production DB

-   async replication from primary RDS to read replica
-   only for read-heavy DB workloads
-   **used for scaling, not for disaster recovery**
-   up to 5 read replica copies for any DB
-   each replica has its own DNS endpoint
-   you can have read replicas that have Multi-AZ
-   you can create read replicas of Multi-AZ source DBs
-   you can have a read replica in a 2nd region
