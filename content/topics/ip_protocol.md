+++
title = "IP Protocol"
draft = false
+++

Definition
: 32 bits in length
    writen in 4 fields of 8 bit each
    separated by a dot "."


All IP addresses in the same group must not be separated from each other by a router.

IP addresses separated from each other by a router must be in different groups.


### IPv4 Header {#ipv4-header}


### Octets {#octets}

x.x.x.x = len(x) \* 4 = 32 Bits

X is called **octet**. Each octet consists of 8 bits.


## Classful IP addressing {#classful-ip-addressing}

Used when IP addressing was brand new, it was broken down into **classes**. Nowadays IP addresses are not broken down **classfully**, but **classlessly** ().

| Class | Value of 1st octet | Subnet mask   |              | Example          |
|-------|--------------------|---------------|--------------|------------------|
| A     | 1-126              | 255.0.0.0     | /8           | 10.10.10.10/8    |
| B     | 128-191            | 255.255.0.0   | /16          | 150.101.45.45/16 |
| C     | 192-223            | 255.255.255.0 | /24          | 200.0.0.30/24    |
| D     | 224-239            | -             | multicasting | -                |
| E     | 240-255            | -             | Experimental | -                |

Multicast
: A magazine subscription
    The hosts have to **subscribe** to the "master"

127.0.0.0
: Reserved for experimental purposes


### Structure of the IP {#structure-of-the-ip}

A **subnet mask** separates a **host address** from the **network address**.


### Convert IP addr to binary {#convert-ip-addr-to-binary}


#### Class C address {#class-c-address}

---

IP = 200.10.10.10 --&gt; First octet is `200` / Network mask: 255.255.255.0

| 2^7 | 2^6 | 2^5 | 2^4 | 2^3 | 2^2 | 2^1 | 2^0 |
|-----|-----|-----|-----|-----|-----|-----|-----|
| 128 | 64  | 32  | 16  | 8   | 4   | 2   | 1   |
| 1   | 1   | 0   | 0   | 1   | 0   | 0   | 0   |

because:

1\*128 + 1\*64 + 0\*32 + 0\*16 + 1\*8 + 0\*4 + 0\*2 + 0\*1 = 200


#### Class B address {#class-b-address}

---

IP = 150.100.10.10 / Network address: 255.255.0.0

Network adress: 150.100.0.0/16

Broadcast address: 150.100.255.255

Last valid IP address: 150.100.255.254

Number of available address: 2^n - 2, where n = 16 because 16 bits of host address


### Naming conventions {#naming-conventions}

---

200.10.10.0/24 --&gt; **Network** address

200.10.10.255 --&gt; **Broadcast** address


### Number of available IP address {#number-of-available-ip-address}

---

For previous example it is: 200.10.10.1 - 200.10.10.254

**Formula**: 2^n - 2, where n = host bits (-2 because you **cannot** use the first and the last address)


### Routing theory {#routing-theory}

Routing
: Layer 3 function
    The process of going from one broadcast domain to another broadcast domain (both Layer 3 domains)

When H1 sends an ARP broadcast message, r1 will act as a **proxy Arp** responding with its own MAC address (on f0/0).
