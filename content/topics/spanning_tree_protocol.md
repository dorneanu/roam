+++
title = "Spanning Tree Protocol"
draft = false
+++

## Description {#description}

**STP** limits where a switch chooses to forward frames, for the purpose of preventing problems with loops. These problems happen because, in some cases, the core LAN switch logic would literally forward a frame around the LAN forever without some external method like STP to prevent it. So, to understand STP, you need a good recall of the core logic of a LAN switch, particularly the switch forwarding logic. Then you can understand why frames would loop without STP, and then how STP prevents the loop.

-   **IEEE 802.1D**


## Problems {#problems}


### Broadcast storm {#broadcast-storm}


### MAC Table instability {#mac-table-instability}

The continual updating of a switch's MAC address table with incorrect entries, in reaction to looping frames, resulting in frames being sent to the wrong locations.


### Multiple frame transmission {#multiple-frame-transmission}

A side effect of looping frames in which multiple copies of one frame are delivered to the intended host, confusing the host.


## How does it work {#how-does-it-work}

-   STP elects a root switch
    -   STP puts all working interfaces in the **forwarding state**
-   Each _nonroot_ switch considers one of its ports to have the least administrative cost between itself and the _root_ switch
    -   that is the switch's **root cost**
    -   STP places its port that is part of the least root cost path, called the switch's **root port** (`RP`), in forwarding state
-   Many switches can attach to the same segment, but in modern networks, normally two switches connect to each link
    -   The switch with the lowest root cost, as compared with the other switches attached to the same link, is placed in **forwarding state**
    -   That switch is the **designated switch**, and that switch's interface, attached to that segment, is called **designated port** (`DP`)


## Components {#components}


### Bridge ID {#bridge-id}

-   8-byte value unique to each switch
    -   2-byte priority field and a
    -   6-byte system ID (burned-in MAC address)


### BPDU {#bpdu}

-   STP defines messages:
    -   Bridge Protocol Data Units
    -   {{< figure src="STP%20-%20BPDU%20-%20Fields.png" >}}
-   2 types of messages:
    -   superior
    -   inferrior


## States {#states}


## Process {#process}


### Root Election {#root-election}

Summarizing, the root election happens through each switch claiming to be root, with the best switch being elected based on the numerically lowest **BID**. Breaking down the BID into its components, the comparisons can be made as:

-   the lowest **bridge ID**
-   if that ties, the lowest **MAC address**


### Root Port {#root-port}

Has the least STP cost to reach the root switch.

STP/root cost
: The STP port cost is simply an integer value assigned to each interface, per VLAN,

for the purpose of providing an objective measurement that allows STP to choose which interfaces to add to the STP topology.


### Designated Port {#designated-port}

The **designated port** on each LAN segment is the switch that advertises the lowest-cost hello onto a LAN segment.


## How Switches react to changes with STP {#how-switches-react-to-changes-with-stp}

There are some timers:


## Additions {#additions}


###  {#etherchannel}


###  {#portfast}

allows a switch to immediately transition from blocking to forwarding, bypassing listening and learning states. However, the only ports on which you can safely enable are ports on which you know that no bridges, switches, or other STP-speaking devices are connected. Otherwise, using risks creating loops, the very thing that the listening and learning states are intended to avoid.

is most appropriate for connections to end-user devices. If you turn on on ports connected to end-user devices, when an end-user PC boots, the switch port can move to an STP forwarding state and forward traffic as soon as the PC NIC is active. Without , each port must wait while the switch confirms that the port is a DP, and then wait while the interface sits in the temporary listening and learning states before settling into the forwarding state.


### BPDU Guard {#bpdu-guard}

STP has some attack vectores. For example:

-   An attacker could connect a switch to one of these ports, one with a low STP priority value, and become the root switch. The new STP topology could have worse performance than the desired topology.
-   The attacker could plug into multiple ports, into multiple switches, become root, and actually forward much of the traffic in the LAN. Without the networking staff realizing it, the attacker could use a LAN analyzer to copy large numbers of data frames sent through the LAN.
-   Users could innocently harm the LAN when they buy and connect an inexpensive consumer LAN switch (one that does not use STP). Such a switch, without any STP function, would not choose to block any ports and would likely cause a loop.

The **Cisco BPDU Guard** feature helps defeat these kinds of problems by disabling a port if any BPDUs are received on the port.

So, this feature is particularly useful on ports that should be used only as an access port and never connected to another switch.

In addition, the BPDU Guard feature helps prevent problems with . should be enabled only on access ports that connect to user devices, not to other LAN switches. Using BPDU Guard on these same ports makes sense because if another switch connects to such a port, the local switch can disable the port before a loop is created.


### Rapid STP (IEEE 802.1W) {#rapid-stp-ieee-802.1w}

**RSTP** works like **STP**. Main improvement: **convergence**. STP takes a relatively long time to converge (50 seconds with the default settings). RSTP improves network convergence when topology changes occur, usually converging within a few seconds, or in poor conditions, in about 10 seconds.


## Advanced topics {#advanced-topics}


### Campus LAN {#campus-lan}


### Types {#types}

-   Per-Vlan Spanning Tree Plus (PVST+, PVSTP)
    -   Cisco proprietery
    -   improvement of 802.1D STP
    -   Creates a different topology per VLAN (STP does not do that)
    -   Also introduced ****
    -   used as the **default** on Cisco switches


### PVST+ {#pvst}

tbd


## Configuring {#configuring}


### STP System ID Extension {#stp-system-id-extension}

-   you can configure only the priority part
    -   it must be a multiple of 4096: 0, 4096, 8192, 12288 etc. till 61440
    -   **default** priority: `32768`
-   the switch fills the burned-in MAC address as the system ID
-   it also plugs in the VLAN id of a VLAN in the 12-bit system ID extension field


### Port cost {#port-cost}


### Influencing the root election {#influencing-the-root-election}

-   If the current root has a base priority higher than 24,576, the local switch uses a base priority of 24,576.
-   If the current root's base priority is 24,576 or lower, the local switch sets its base priority to the highest multiple of 4096 that still results in the local switch becoming root.


### Add  {#add-etherchannel}

Cisco supports:

-   Port Aggregation Protocol () (propritary)
-   IEEE Standard Link Aggregation Control Protocol (LACP)

How to use it properly: