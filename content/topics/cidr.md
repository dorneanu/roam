+++
title = "CIDR"
draft = false
+++

Definition
: Classless Inter-Domain Routing


## Classles IP Addressing {#classles-ip-addressing}


### Example: Let's suppose we need only 30 IP address {#example-lets-suppose-we-need-only-30-ip-address}

IP range = 150.101.45.0/27

**How do we get?**:

-   Network address
-   Valid IP range
-   Broadcast address


### Network address {#network-address}

---

The network address is simply 150.101.45.0


### Network mask {#network-mask}

---

First 3 octets are set --&gt; Netmask = 255.255.255.\*224\*

because 3 bits set correspond to:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|---|---|---|---|
| 1   | 1  | 1  | 0  | 0 | 0 | 0 | 0 |

and if we had those values we get **224**.


### Block size {#block-size}

---

The **last** value of the Bit turned out gives the the **Block Size**. In our case:

| 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
|-----|----|----|----|---|---|---|---|
| 1   | 1  | 1  | 0  | 0 | 0 | 0 | 0 |


### Valid IP range {#valid-ip-range}

---

The **first** valid IP address is 150.101.45.1. The **last** possible IP address is 150.101.45.30 (**Block Size** - 2).


### Broadcast adress {#broadcast-adress}

---

The **broadcast address** is 150.101.45.31 (**Block Size** - 1)

<!--list-separator-->

-  Use the formula

    ---

    We have 5 host bits since:

    | 128     | 64 | 32   | 16 | 8 | 4 | 2 | 1 |
    |---------|----|------|----|---|---|---|---|
    | 1       | 1  | 1    | 0  | 0 | 0 | 0 | 0 |
    | Network |    | Host |    |   |   |   |   |

    2^5 - 2 = 30 Possible IP addresses


### Supposing we have 150.101.45.0/30 {#supposing-we-have-150.101.45.030}

This way you'll get only 2 valid IP addresses. This CIDR is used in **point-to-point** connection (e.g. between routers).


#### What is the valid host range for 150.101.64.0/19 {#what-is-the-valid-host-range-for-150.101.64.019}

Network mask is. 255.255.224.0

The block size is: 32

We have following networks/subnets (each time we had the block size):

| # Network | Beginning       |
|-----------|-----------------|
| 1         | 150.101.0.0/19  |
| 2         | 150.101.32.0/19 |
| 3         | 150.101.64.0/19 |
| 4         | 150.101.96.0/19 |

So the first valid IP address for 150.101.64.0/19 starts at **150.101.64.0/19** and ends at **150.101.95.255** (150.101.96.0/19 is the next network).

But since the last IP address is the **broadcast** address we have these valid IP range: **150.101.64.1 - 150.101.95.224**