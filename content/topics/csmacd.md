+++
title = "CSMA/CD"
draft = false
+++

CSMA/CD
: Carrier Sense Multiple Access / Collision Detection

Following steps:

-   A device with a frame to send listens until the Ethernet is not busy
-   When the Ethernet is not busy, the sender begins sending the frame
-   The sender listens if a collision occurs, If this is the case, all currently sending nodes do the following:
    -   they send a jamming signal that tells that a collision happened
    -   they independently chose a random time to wait before trying again
-   the next steps start again at Step 1


## Recommended use {#recommended-use}