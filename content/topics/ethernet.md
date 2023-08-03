+++
title = "Ethernet"
draft = false
+++

Additions:

-   1000Base-LX
    -   fiber cabling
    -   5km cable length
-   1000Base-ZX
    -   support 70km cable length


## Cabling {#cabling}


## Types {#types}

-   **half-duplex**
    -   a port cannot send and receive data at the same time
    -   only one device is allowed to send data
    -   Use for collisions
-   **full-duplex**
    -   multiple devices are allowed to send data
-   **simplex**
    -   only one direction

**Collisions**:

-   there are collision domains
-   each switch has its own collision domain
-   each hub has its own collision domain


## Cabling {#cabling-1}


### Straight-through Cable {#straight-through-cable}


### Crossover Cable {#crossover-cable}


## How to choose the right cable {#how-to-choose-the-right-cable}

Crossover cable
: The endpoints transmit on the same pin pair

Straight-through cable
: The endpoints transmit on different pin pairs

| Transmits on Pins 1,2       | Transmits on Pins 3,6 |
|-----------------------------|-----------------------|
| PC NICs                     | Hubs                  |
| Routers                     | Switches              |
| WLANs ( Ethernet interface) |                       |


## Frame {#frame}


### Type field {#type-field}

Used to describe the data type inside the frame.

FCS
: Frame Check Sequence
