+++
title = "Messaging System"
draft = false
+++

-   A messaging system can be judged on its performance in four aspects---scalability, availability, latency, and throughput.
    -   Scalability

        > This is how the system is able to handle increases in load without noticeable degradation of the other two factors, latency or availability. Here, load can mean things such as the number of topics, consumers, producers, messages/sec, or average message size

    -   Availability

        > In a distributed system, a variety of problems can occur at a unit level (servers, disks, network, and so on). The system's availability is a measure of how resilient the system is to these failures so that it is available to end users

    -   Latency

        > This is how much time it takes for a message to get to a consumer from a producer

    -   Throughput

        > This is how many messages can be processed per second by the messaging system

-