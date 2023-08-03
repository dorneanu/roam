+++
title = "AWS VPC"
draft = false
+++

## Example network {#example-network}


## VPC Endpoints {#vpc-endpoints}

A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network.


### Types {#types}


#### Interface endpoints {#interface-endpoints}

-   An interface endpoint is an elastic network interface with a private IP address from the IP address range of your subnet that serves as an entry point for traffic destined to a supported service.
-   usage of

{{< figure src="https://docs.aws.amazon.com/vpc/latest/userguide/images/vpc-endpoint-service.png" >}}


#### Gateway endpoints {#gateway-endpoints}

-   A gateway endpoint is a gateway that you specify as a target for a route in your route table for traffic destined to a supported AWS service.
-   a gateway endpoint is a target for a route in a route table to connect VPC resources to S3 or . Traffic is then routed from instances in a subnet to one of these two services.
-   Gateway endpoints do not use

{{< figure src="https://docs.aws.amazon.com/vpc/latest/userguide/images/vpc-endpoint-s3-diagram.png" >}}


## Best practices {#best-practices}

tbd


## Elastic network interface {#elastic-network-interface}

-   Lambda creates an elastic network interface for each combination of security group and subnet in your function's VPC configuration in a process that can take a minute or so.


### Sample VPC configurations {#sample-vpc-configurations}

-   [vpc-private.yaml](https://github.com/awsdocs/aws-lambda-developer-guide/blob/master/templates/vpc-private.yaml)
    -   A VPC with two private subnets and VPC endpoints for Amazon Simple Storage Service and Amazon .
-   [vpc-privatepublic.yaml](https://github.com/awsdocs/aws-lambda-developer-guide/blob/master/templates/vpc-privatepublic.yaml)
    -   A VPC with two private subnets, VPC endpoints, a public subnet with a NAT gateway, and an internet gateway. Internet-bound traffic from functions in the private subnets is routed to the NAT gateway by a route table.
