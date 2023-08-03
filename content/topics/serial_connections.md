+++
title = "Serial Connections"
draft = false
+++

CSU
: Channel Service Unit

DSU
: Data Service Unit

DCE
: Data Connecting Equipment
    Provides **clocking**
    Has the equivalent task of an crossover cable by swapping the transmit and receive wire pairs

DTE
: Data Terminating Equipment
    Used between Routers and CSU/DSU

HDLC
: High Level Data Link Control
    Default **encapsulation** type for a serial connection

Clocking
: CSU/DSU tells the router when to exactly send each bit through signaling over the serial cable


## Implenting in a Lab {#implenting-wan-in-a-lab}


## Serial connections {#serial-connections}

-   Denoted by a bolt connection
-   Termination Point
-   the router will have a serial connection to a demarcation point
-   where the responsabilities of the ISP ends


## Commands {#commands}

```text
r1 (config)# show ip interface brief
```

you will get

| Method | Protocol | Issue   |
|--------|----------|---------|
| down   | down     | Layer 1 |
| up     | down     | Layer 2 |

With Layer 2 issues

-   no keep-alives
-   missmatch encapsulation
-   no clock rate set on **DCE** end


## Lab {#lab}

/30 is used only for **point-to-point** serial connections.

Router 1: 200.200.200.1\* **DCE** device

-   provides clocking
-   DTE (Data Terminating Equipment) device
-   router

Router 2: 200.200.200.2

/30 will have a block size of 4. So first network will be between 200.200.200.1 - 200.200.200.3 where 200.200.200.3 is the broadcast address.


### router r201 {#router-r201}

```text
r201# show interfaces serial 0/1/0
```

Serial interfaces have no MAC addresses.

Sign IP address:

```text
r201# show ip interface brief
r201# configure terminal
r201(config)# interface serial 0/1/0

# /30 network mask
r201(config-if)# ip address 200.200.200.255.255.255.252
r201(config-f)# no shutdown
```


### router 1 {#router-1}

```text
r1# conf
r1# configure terminal
r1(config)# interface serial 0/0/0
r1(config-if)# ip address 200.200.200.1 255.255.255.252
r1(config-if)# no shutdown
```

Make sure interface is up:

```text
r1# show ip interface brief
r1#ping 200.200.200.2
```

Change clock rate:

```text
r1#configure t
r1(config)# interface serial 0/0/0

# 128k bit/s
r1(config-if)# clock rate 128000

r1(config-if)# do show controllers serial 0/0/0
```


### DTE/DCE {#dtedce}

Figure out which side is the DCE/DTE side:

```text
r1# show controllers serial 0/0/0
...
DCE V.35, clock rate 2000000
...
```

Check the other end:

```text
r201# controllers serial 0/1/0
...
DTE V.35 TX and RX clocks detected
...
```
