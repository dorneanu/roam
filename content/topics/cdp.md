+++
title = "CDP"
draft = false
+++

Definition
: Cisco Discovery Protocol

The proprietary Cisco Discovery Protocol (CDP) discovers basic **information about neighboring routers and switches** without needing to know the passwords for the neighboring devices. To discover information, routers and switches send **CDP messages** out each of their interfaces. The messages essentially announce information about the device that sent the CDP message. Devices that support CDP learn information about others by listening for the advertisements sent by other devices.

Also used for issues.


## Discovery information {#discovery-information}

-   device identifier
    -   the host name
-   address list
    -   network and data link addresses
-   port identifier
    -   the interface on the remote router or switch on the other end of the link that sent the CDP advertisement
-   capabilities list
    -   information on what type of device it is
-   platform
    -   the model and OS level running on the device


## Commands {#commands}
