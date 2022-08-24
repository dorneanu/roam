+++
title = "Switches"
draft = false
+++

Definition
: Performs the same basic core functions as a but at much faster speeds and with enhanced features.
    **If the network has no hub, each single link is considered its own collision domain**


## Types {#types}


### By Layer {#by-layer}

-   Layer 2 Switches
    -   typically send/receive frames
    -   will not forward data between two s
    -   does **not** forward frames outside a VLAN
-   Layer 3 Switches
    -   Using 2 devices (switch + router)
    -   also called **router on a stick**
    -   because of performance and costs both devices have been integrated into a single one (with the same functions)


## Collision domains {#collision-domains}

-   A **collision domain** is a set of network interface cards (NIC) for which a frame sent by one NIC could result in a collision with a frame sent by any other NIC in the same collision domain.
-   A **broadcast domain** is a set of NICs for which a broadcast frame sent by one NIC is received by all other NICs in the same broadcast domain.


## Loop prevention {#loop-prevention}

Using .


### Example {#example}


## Internal frame processing {#internal-frame-processing}

-   store-and-forward
    -   the switch must receive the entire frame before forwarding the first bit of the frame
    -   checks FCS for errors before forwarding
-   cut-through (Cisco)
    -   forward the frame before the entire frame has been received
    -   the switch starts sending the frame as soon as possible
    -   reduces latency
    -   the FCS is not being checked -&gt; the frame might be corrupt
-   fragment-free (Cisco)
    -   forward the frame before the entire frame has been received
    -   works like cut-through but tries to reduce the number of errored frames
    -   receives first 64 bytes of the frame before forwarding


## Segmenting Ethernet devices {#segmenting-ethernet-devices}


## Port security {#port-security}

Port security has several flexible options, but all operate with the same core concepts. First, switches enable port security per port, with different settings available per port. Each port has a maximum number of allowed MAC addresses, meaning that for all frames entering that port, only that number of different source MAC addresses can be used in different incoming frames before port security thinks a violation has occurred. When a frame with a new source MAC address arrives, pushing the number of MAC addresses past the allowed maximum, a port security violation occurs. At that point, the switch takes action---by default, discarding all future incoming traffic on that port.

Steps:

-   Define a maximum number of source MAC addresses allowed for all frames coming in the interface.
-   Watch all incoming frames, and keep a list of all source MAC addresses, plus a counter of the number of different source MAC addresses.
-   When adding a new source MAC address to the list, if the number of MAC addresses pushes past the configured maximum, a port security violation has occurred. The switch takes action (the default action is to shutdown the interface).


### Example {#example-1}


### Actions {#actions}

There are **links** between switches. There are **2** types of links:


## Access links/ports {#access-linksports}

---

Belong to only one at a time


### Commands {#commands}

-- `Create` VLAN

```text
sw1 (config)# vlan 150
sw1 (config-vlan)# name ccna
sw1 (config-vlan)# exit
sw1 (config-vlan)# do show vlan brief
```

-- `Apply` VLAN to a port

-   Option 1

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1# configure terminal
sw1 (config)# interface fastEthernet 0/24

# Tell the port to be an access port
sw1 (config-if)# switchport mode access

# Tell the port to be part of VLAN 150
sw1 (config-if) switchport access vlan 150
```

-   Option 2

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw 2 (config)# interface f0/24
sw 2 (config-if)# switchport access vlan 150
```

-- `Show` interfaces

```text
# 0 is the slot number
sw1# show interfaces fastEthernet 0/24
sw1# show interfaces fastEthernet 0/24 switchport
```

<br />


## Trunk links/ports {#trunk-linksports}

---

These will carry more then one VLAN at a time.

Frame tagging
: Each Frame between SW1 and SW2 will have an ID to identify the VLAN
    Using 2 protocols: **ISL** () and **(dot1q)**.

ISL
: Only between Cisco Devices
    Encapsulates the original frame into a new one
    Has an ID field

dot1q
: Insert information into original frame
    4 Bytes of additional information

Native VLAN
: Transverses the link w/o tagging


### Dynamic trunking protocol (DTP) {#dynamic-trunking-protocol-dtp}

-   Dynamic desirable
    -   The port will **send** DTP frabetmes **and** **respond** to DTP frames
    -   All Cisco switches modesl with **xx50** have ports in dynamic desirable mode
-   Dynamic auto
    -   The port will **respond** to DTP frames from other side
    -   But will **NOT** initiate trunking
    -   Switches models end with **xx60** will have all ports in dynamic mode
-   On
    -   Sets the local port to trunking **unconditionally**
    -   Will send **AND** respond to DTP frames


### Commands {#commands-1}

-   Desirable mode

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# interface fastEthernet 0/24
sw1 (config-if)# do show interface fastEthernet 0/1 switchport
sw1 (config-if)# do show interface trunk

# Change mode
sw1 (config-if)# switchport mode dynamic desirable
sw1 (config-if)# do show interface trunk

# Specify which VLANs should be allowed on a trunk
sw1 (config-if)# switchport allowed vlan 1,150,200-200

# Change native VLAN on the trunk
sw1 (config-if)# switchport trunk native vlan 150
```

-   On mode

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config-if)# switchport mode trunk encapsulation dot1q

# Disable sending DTP frames between the switches
sw1 (config-if)# switchport nonegotiate
```