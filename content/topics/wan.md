+++
title = "WAN"
draft = false
+++

From a basic point of view, a leased line WAN works a lot like an Ethernet crossover cable connecting two routers, but with few distance limitations. Each router can send at any time (full-duplex) over the leased line, for tens, hundreds, or even thousands of miles.

leased line
: Nowadays the term _service provider_ is rather used


## Naming {#naming}


## Examples {#examples}


### Leased Line Service {#leased-line-service}

Used 2 pairs of wires (full-duplex)

-   sending
-   receiving


## Components {#components}

CSU/DSU
: Channel Service Unit / Data Service Unit
    Can be integrated into the router (serial interface)
    Or external

CPE
: Customer Premises Equipment

Connected using .


## Data Link Details {#data-link-details}

A leased line provides a service. The most popular data link protocols for leased lines between 2 routers are:

-
-   Point-to-Point Protocol (PPP)


### HDLC Encapsulation {#hdlc-encapsulation}


## Service Provider {#service-provider}

Inside the SP's network , the SP uses any technology that it wants to create the specific Ethernet WAN service.


## Ethernet WAN Service {#ethernet-wan-service}

Goes by 2 names

-   Ethernet emulation
-   Ethernet over MPLS

-   service acts like one Ethernet link
-   Multi Protocol Label Switching

    Point of Presence

**** provides:

-   a point-to-point connection between 2 customer devices
-   behaviour as if a fiber Ethernet link existed between the 2 devices

2 routers `R1` and `R2` connect with an service instead of a serial link. The routers use Ethernet interfaces, and they can send data in both directions at the same time. Physically, each router connects to some SP **** but logically the 2 routers cand send Ethernet frames to each other over the link.


### Packet routing {#packet-routing}

**Atention**: Although each router is using 802.3 encapsulation, each router discards the old data link header/trailer and add its own ones


## Internet Access Links {#internet-access-links}

-
-