+++
title = "ARP"
draft = false
+++

Definition
: Address Resolution Protocol

PDU
: Packet

Packet:

|        |         |      |     |
|--------|---------|------|-----|
| Dst IP | Src. IP | Data | FCS |


## Example {#example}

We have 2 hosts: 10.10.10.1 (Host 1) and 10.10.10.2 (Host 2) with network mask 10.10.10.0/24. Both hosts are connected through a Layer 2 Switch.

| Host | MAC addr |
|------|----------|
| 1    | AAAA     |
| 2    | BBBB     |

Host 1 generates an **ARP request** (broadcast) for the address 10.10.10.2 which means "How ever has this IP address please send me your MAC addr".

Host 2 receives the broadcast and find out its own IP is 10.10.10.2. So it generates an **ARP Reply**' (Unicast) where it sends its MAC address to Host 1.

This process will happen only once (at the beginning).


## Encapsulation vs Decapsulation {#encapsulation-vs-decapsulation}

tbd
