+++
title = "Broker-based Messaging"
draft = false
+++

-   A broker is a component that acts as the intermediary in a messaging system. Here, the clients connect to the broker and not to each other directly. Whenever clients want to send and receive messages, they need to specify a mailbox/topic/queue on the broker. Producers connect to the broker and send messages to a specific queue. Consumers connect to the broker and specify queue name from which they want to read messages.

-   Responsabilities
    -   Maintaining the mapping of queues, producers, and consumers reliably: This includes storing the messages in a durable format
    -   Handling message production: This includes storing messages written by the producers.
    -   Handling message consumption: This means ensuring that consumers reliably get messages and providing constructs to avoid duplicate messages
    -   Routing and transformation: Here, the message broker may transform or maintain multiple copies for each message to enable various topology models, which will be described in the following sections.

-   Models
    -   Queue
    -   Pub/Sub
