+++
title = "OSI"
draft = false
+++

Definition
: Open Systems Interconnection Model
    Remember the layers: \*P\*eople \*D\*o \*N\*eed \*T\*o \*S\*ee \*P\*amela \*A\*nderson


## Layer description {#layer-description}


## Examples {#examples}


## Encapsulation {#encapsulation}

The TCP/IP model uses terms such as segment, packet, and frame to refer to various layers and their respective , OSI uses a more generic term: protocol data unit (**PDU**).


## Benefits {#benefits}

-   Less complex
    -   Compared to not using a layered model, network models break the concepts into smaller parts. Standard interfaces: The standard interface definitions etween each layer allow multiple vendors to create products that fill a particular role, with all the benefits of open competition.
-   Easier to lear
    -   Humans can more easily discuss and learn about the many details of a protocol specification.
-   Easier to develop
    -   Reduced complexity allows easier program changes and faster product development.
-   Multivendor interoperability
    -   Creating products to meet the same networking standards means that computers and networking gear from multiple vendors can work in the same network.
-   Modular engineering
    -   One vendor can write software that implements higher layers---for example, a web browser---and another vendor can write software that implements the lower layers---for example, Microsoft's built-in TCP/IP software in its OSs.
