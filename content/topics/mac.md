+++
title = "MAC"
draft = false
+++

Definition
: Media Access Control
    Used on devices like


## MAC {#mac}

-   48 bits length
-   First 24 bits are **OUI** (Organisational Unique Identifier) field
-   The 7th most significant bit is called **UL** (Universal Local) bit --&gt; this MAC addr is universally unique


## Structure {#structure}

{{< figure src="https://4.bp.blogspot.com/-4r4TR4Y0tfo/UeqCdtUrGCI/AAAAAAAAAMw/elXA0K4hS7E/s1600/MAC-48_Address.svg.png" >}}


## Broadcast {#broadcast}

-   Has DST MAC = FFFFFFF...
-   != "Flood" (Unicast: 1:1)
-   1:n
-   Sent to everybody on purpose
