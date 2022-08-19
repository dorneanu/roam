+++
title = "AWS Storage Gateway"
draft = false
+++

Virtual Instance to replicate to

Supports VMWare ESXi / Microsoft Hyper-V


## Types {#types}


### File gateway (NFS) {#file-gateway-nfs}

-   files are stored as objects (in S3)


### Volumes gateway {#volumes-gateway}

-   basically a virtual hdd
-   presents applications with disk volumes using iSCSI block protocol
-   stored in the cloud as Amazon EBS snapshots (in S3)
-   snapshots are incremental


#### Stored volumes {#stored-volumes}

-   mount storage volumes as iSCI devices
-   data is asynchronously backed up to S3 as EBS (Elastic Block Storage)
-   1GB - 16TB in size
-   [!] entire data is stored on-site


#### Cached volumes {#cached-volumes}

-   [!] S3 as primary storage
-   frequently accessed data locally in the storage gateway
-   entire data is stored on S3
-   1GB - 32TB for cached volumes


### Tape gateway (VTL) {#tape-gateway-vtl}

-   let's you leverage existing tape-based to virtual tap on storage GW