+++
title = "RIP"
draft = false
+++

Definition
: Router Information Protocol
    A Distance Vector Router Protocol (see below)
    V1 is **classful** (messages sent to 255.255.255.255)
    V2 is **classless** (messages sent to 224.0.0.9)


## Dynamic Routing {#dynamic-routing}

Is the process when 2 routers share:

-   networks
-   remote networks
-   remote routes
-   routes to remote destinations

_automatically_.

There are 2 types of **dynamic routing protocols**.

-
-


### RIP Versions {#rip-versions}

-   Version 1
    -   is only **classful**
    -   subnet mask information is not carryed within the update process


## Lab {#lab}

Exchange routing information between `R201`, `R1` and `R2`.


### r201 {#r201}

Previously erased static routes (because AD = 1).

Network statement
: Defines a list/range of address
    If an IP address is within that address, then the interface to which the IP belongs is included into RIP

<div class="html">

&lt;!-- --&gt;

</div>

```text
r201(config)# router rip

# Do a network statement
r201(config-router)# network 200.200.200.0

# Since Serial0/1/0 has 200.200.200.2 it will start sending
# RIP information on that interface.
r201(config-router)# write memory
```

Show routes:

```text
r201# show ip route
...
```

or

```text
r201# show ip route rip
```

**<code>[120/2]</code>**:

-   120: Administrative Distance (AD)
-   2: Metric (only 2 hops away from `R1`

Show protocols:

```text
r201# show ip protocols
```


### r1 {#r1}

Has 2 interfaces:

-   serial link
-   fast ethernet

<div class="html">

&lt;!-- --&gt;

</div>

```text
r1 (config)# router rip

# 200.200.200.0 is a class C IP address
r1 (config-router)# network 200.200.200.0

# Since 150 is a class B (meaning /16) and RIP is classful
# we should type 150.101.0.0
r1 (config-router)# network 150.101.0.0
```

**Debug** RIP:

```text
r1# debug ip rip
r1# debug ip rip events
```


### r2 {#r2}

```text
r2 (config)# router rip
r2 (config-router)# network 150.101.0.0

# 10.x and 20.x are class A (/8)
r2 (config-router)# network 10.0.0.0
r2 (config-router)# network 20.0.0.0
r2 (config-router)# write memory
```


## Switch to RIP v2 {#switch-to-rip-v2}

```text
r201(config)# router rip
r201(config-router)# version 2
```

Now you should not be able to see any classes of IP address but the right classes (/24 etc.)

Eventhough v2 has been enabled, v2 shows the bigger network class (auto-summary by default).


### Turn of auto-summary {#turn-of-auto-summary}

```text
r201(config-router)# no auto-summary
r201(config-router)#do wr
```


## Remove RIP {#remove-rip}

```text
r1(config)# no router rip
```