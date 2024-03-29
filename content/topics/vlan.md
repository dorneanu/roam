+++
title = "VLAN"
draft = false
+++

Definion
: Layer 2 Broadcast Address
    Virtual switches inside the main physical device
    By default all ports on a switch belong to VLAN1
    Number of VLANs on a device: VLAN1 - VLAN4094
    VLAN1 - VLAN1005: Normal VLANs
    Implementatioons: ,


## Reasons {#reasons}

-   Waste of money if using multiple switches
-   Isolate management network from employers network
-   Create logical virtual LANs


## Benefits {#benefits}

-   Save money
-   Use all ports on the switch
-   To reduce CPU overhead on each device by reducing the number of devices that receive each broadcast frame
-   To reduce security risks by reducing the number of hosts that receive copies of frames that the switches flood (broadcasts, multicasts, and unknown unicasts)
-   To improve security for hosts that send sensitive data by keeping those hosts on a separate VLAN
-   To create more flexible designs that group users by department, or by groups that work together, instead of by physical location
-   To solve problems more quickly, because the failure domain for many problems is the same set of devices as those in the same broadcast domain
-   To reduce the workload for the Spanning Tree Protocol (STP) by limiting a VLAN to a single access switch


## VLAN Trunking {#vlan-trunking}


## VLAN Tagging {#vlan-tagging}

Using


## Commands {#commands}


## Configuration {#configuration}


#### Old way {#old-way}

`Create`

```text
sw1> enable
sw1> vlan database
sw1 (vlan)# vlan 50 <name>
sw1 (vlan)# exit
sw1 (vlan)# show vlan brief
```

`Delete`

```text
sw1> no vlan 1000 name test
```

<br />


#### New way {#new-way}

`Create`

```text
sw1> enable
sw1 (config)# vlan 100
sw1 (config-vlan)# name ccna
sw1 (config-vlan)# do show vlan brief
```

`Delete`

```text
sw1>conf t
sw1 (config)# no vlan 100
```

or

```text
sw>delete vlan.dat
```


## Management VLAN {#management-vlan}

Configure IP access to switch for **VLAN 1**:

```text
s1 (config)# interface vlan 1
s1 (config-if)# ip address 10.10.10.254 255.255.255.0
s1 (config-if)# no shutdown
s1 (config-if)# exit
s1 (config)# ip default-gateway 192.168.0.1
```
