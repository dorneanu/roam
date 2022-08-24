+++
title = "Cisco IOS Inter-VLAN Routing"
draft = false
+++

<https://www.cybrary.it/video/layer3-ip-routing-lab/>

Doing some **inter-VLAN** routing between SW8 and R2.

| PC  | Network    | Netmask       | VLAN    |
|-----|------------|---------------|---------|
| PC1 | 10.10.10.1 | 255.255.255.0 | VLAN 10 |
| PC2 | 10.10.10.2 | 255.255.255.0 | VLAN 10 |
| PC3 | 20.20.20.3 | 255.255.255.0 | VLAN 20 |
| PC4 | 20.20.20.4 | 255.255.255.0 | VLAN 20 |


## Configure SW8 {#configure-sw8}

Create VLANs:

```text
# VLAN 10
sw8 (config)# vlan 10
sw8 (config-vlan)# vlan acct.

# VLAN 20
sw8 (config)# vlan 20
sw8 (config-vlan)# vlan sales
sw (config-vlan)# exit

# Check
sw8 (config)# do show vlan brief
```

Put PCs into VLANs:

```text
# Configure port 1 and 2
sw8 (config)# interface range fastEthernet 0/1-2
sw8 (config-if-range)# switchport mode access
sw8 (config-if-range)# switchport access vlan 10

# Configure port 3 and 4
sw8 (config)# interface range fastEthernet 0/3-4
sw8 (config-if-range)# switchport mode access
sw8 (config-if-range)# switchport access vlan 20
sw8 (config-if-range)# exit
sw8 (config)# do show vlan brief
```

Make ports go up

```text
sw8 (config)# interface fastEthernet 0/1-4

# Ports go directly to forwarding
sw8 (config-if-range)# spanning-tree portfast

# Save work
sw8 (config-if-range)# exit
sw8 (config)# wr
```

At this moment PC1 is not able to ping PC3 (due to different broadcast domains). The link between the switch (SW1) and the router (R2) will be a trunk link, since it allows to carry more than one VLAN.

Configure **trunk port** on the switch:

```text
sw8 (config)# interface fastEthernet 0/24
sw8 (config-if)# switchport trunk encapsulation dot1q
sw8 (config-if)# switchport mode trunk

# Turn off DTP (no negotiate), Routers don't understand DTP anyway
sw8 (config-if)# no negotiate
sw8 (config-if)# do show interface fastEthernet switchport
```

Now the switch side is alsmost done. We'll have to specify which VLANs should be allowed on a port:

```text
sw8 (config)# interface fastEthernet 0/24

# Allow only VLAN 10 and VLAN 20
sw8 (config-if)# switchport trunk allowed vlan 10,20

# Check that
sw8 (config-if)# do show interface f0/24 switchport
```


## Configure R2 {#configure-r2}

```text
r2# conf t
r2 (config)# interface fastEthernet 0/1
r2 (config-if)# no shutdown
r2 (config-if)# no ip address
r2 (config-if)# description TRUNK_TO_SW8
r2 (config-if)# exit
```

No IP address since we are going to create **sub-interfaces**.

```text
### Sub-interface to carry VLAN 10
r2 (config)# interface fastEthernet 0/1.10
r2 (config)# do show ip interface brief

# Assign last IP address (will generate error)
r2 (config)# ip address 10.10.10.254 255.255.255.0
% Configuring IP routing on a LAN subinterface is only allowed if that  subinterface is already configured as part of an IEEE 802.10, IEEE 802.1q or  ISL VLAN.

# Set encapsulation to dot1q and assign again the IP address
r2 (config)# encapsulation dot1q 10
r2 (config)# ip address 10.10.10.254 255.255.255.0


### Sub-interface to carry VLAN 20
r2 (config)# interface fastEthernet 0/1.20
r2 (config-subif)# encapsulation dot1q 20
r2 (config-subif)# ip address 20.20.20.254 255.255.255.0
```

Check settings:

```text
r2 (config)# show ip interface brief
```


## Set default gateway {#set-default-gateway}

We'll still have to setup the **default gateway** (GW) for the PCs.

| PC  | Default gateway |
|-----|-----------------|
| PC1 | 10.10.10.254    |
| PC2 | 10.10.10.254    |
| PC3 | 20.20.20.254    |
| PC4 | 20.20.20.254    |

Now PC1 should be able to ping PC3. First check if R2 has both networks in its **IP routing table**:

```text
r2# show ip route
```

Show of sub-interface:

```text
r2# show interfaces f0/1.1
```