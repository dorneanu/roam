+++
title = "VTP"
draft = false
+++

Definition
: Trunking Protocol

Description
: Has nothing to do with trunks
    It only works over trunk links or trunked ports

Use scenarios
: If you have 50 and configure VLAN X-Y on all devices
    You'll have to login on every device and configure the device

Difference between VTP v1 and v2
: Only difference: V2 supports **token ring** VLANs

VTP has a **client-server** mechanisms. All you'll have to do:

-   create a VTP **server**
-   all other hosts are **clients**

VTP has 3 operating **modes**:

-   VTP **Server** mode
    -   VLANs are stored on a device in a file called `vlan.dat`
    -   In server mode changes to the file are allowed
    -   These changes/modifications are carried down to the clients as **VTP advertisements**
-   VTP **cliet** mode
    -   Will listen to the changes sent by the server and apply the changes
    -   Is not allowed to modify the file `vlan.dat`
-   VTP **transparent** mode
    -   Will relay/forward VTP advertisemnts to downstream clients
    -   **BUT** will not apply the changes
    -   **IS** allowed to add/delete VLANs
    -   **CAN** modify its `vlan.dat`


## Lab configuration {#lab-configuration}

1.  Make SW1 the VTP server.
2.  Make SW2 and SW3 VTP transparent
3.  Make SW4 to VTP client.

<br />


### VTP Server mode {#vtp-server-mode}

-   Put in server mode

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# vtp mode server
```

By default all Cisco switches are in VTP server mode.

-   Create VTP domain

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# vtp domain ccna
```

-   Set VTP password

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# vtp password cisco
```

-   Show VTP status

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# do show vtp status
```

-   Use VTP version 2 (by default its version 1)

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# vtp version 2
```

-   Show password

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw1 (config)# do show vtp password
```

Configuration revision
: A count of how many changes that have been made to `vlan.dat`

<br />


### VTP transparent mode {#vtp-transparent-mode}

-   Put in mode

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw2 (config)# vtp mode transparent
```

-   Set VTP domain

<div class="html">

&lt;!-- --&gt;

</div>

```text
sw2 (config)# vtp domain ccna
```

<br />


### VTP Client mode {#vtp-client-mode}

```text
sw4 (config)# vtp domain cccna
sw4 (config)# vtp pass cisco
sw4 (config)# vtp mode client
sw4 (config)# do show vtp status
```
