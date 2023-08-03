+++
title = "Hands-On Software Architecture with Golang"
date = 2020-02-01
tags = ["book", "golang"]
draft = false
+++

## Summary {#summary}

> Hands-On Software Architecture with Golang starts with a brief introduction to
> architectural elements, Go, and a case study to demonstrate architectural
> principles. You'll then move on to look at code-level aspects such as
> modularity, class design, and constructs specific to Golang and implementation
> of design patterns. As you make your way through the chapters, you'll explore
> the core objectives of architecture such as effectively managing complexity,
> scalability, and reliability of software systems. You'll also work through
> creating distributed systems and their communication before moving on to
> modeling and scaling of data. In the concluding chapters, you'll learn to deploy
> architectures and plan the migration of applications from other languages. -- [source](https://www.packtpub.com/eu/application-development/hands-software-architecture-golang)


## Engineering principles {#engineering-principles}


### **High-level design** {#high-level-design}

> This is the decomposition of the system into high-level components. This serves
> as the blueprint that the product and code need to follow at every stage of the
> product development life cycle. For example, once we have a layered architecture
> (see the following section), then we can easily identify for any new requirement
> to which layer each new component should


### **Quality attributes** {#quality-attributes}

> We want high quality code, and this means no code checking would be allowed
> without unit tests and 90% code coverage


### **Product velocity** {#product-velocity}

> The product has a bounded value in time and, to ensure that there is high
> developer productivity, the team should build Continuous Integration /
> Continuous Deployment (CICD) pipelines from the start.


### A/B testing {#a-b-testing}

> Every feature should have a flag, so that it can be shown only to an x
> percentage of users


## Software Architecture {#software-architecture}

-   package code into components
    -   divide system into partitions
    -   each parition has specific concern and role
    -   each component has well defined interfaces and responsabilities
-   work with the components as abstract entities
-   manage complexity
-   [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

    {{< figure src="/img/software-engineering-golang/clean-architecture.jpg" caption="<span class=\"figure-number\">Figure 1: </span>The Clean Architecture / (c) Robert C. Martin" >}}

    -   by Rober Cecil Martin (more commonly known as Uncle Bob)
    -   the dependency rule is important

        > This rule says that source code dependencies can only point inward.
        > Nothing in an inner circle (variables, classes, data, and private functions)
        > can know anything at all about something in an outer circle


## Role {#role}


### The role of the architect {#the-role-of-the-architect}

-   define a blueprint for what needs to be built
-   ensure the team has enough details to get the job done
-   guides the rest of the team toward this design during execution
-   talks to stakeholders
-   it's possible to do the architect's job w/o coding:
    -   one must understand the low-level details, constraints and complexity


## Microservices {#microservices}

**Definition:**

> The basic concept of a microservice is simple—it's a simple, standalone
> application that does one thing only and does that one thing well. The objective
> is to retain the simplicity, isolation, and productivity of the early app. A
> microservice cannot live alone; no microservice is an island—it is part of a
> larger system, running and working alongside other microservices to accomplish
> what would normally be handled by one large standalone application.

Each [microservice]({{< relref "../../topics/microservices.md" >}}) is:

-   autonomous
-   independent
-   self-contained
-   and individually deployable
-   and scalable.


### Advantages {#advantages}

-   use the componentization strategy
    -   divide and rule more effectively
    -   with clear boundaries between components.
-   create the right tool for each job in a microservice
-   testability
-   improved developer productivity and feature velocity.


## Go {#go}

> The Go programming language was conceived in late 2007 by Robert Griesemer, Rob
> Pike, and Ken Thompson, as an open source programming language that aims to
> simplify programming and make it fun again. It's sponsored by Google, but is a
> true open source project—it commits from Google first, to the open source
> projects, and then the public repository is imported internally.

<!--quoteend-->

> The language was designed by and for people who write, read, debug, and maintain
> large software systems. It's a statically-typed, compiled language with built-in
> concurrency and garbage collection as first-class citizens.


### <span class="org-todo todo TODO">TODO</span> Introduction {#introduction}

Ideas how to structure a Golang intro session

-   Hello World
-   Data types and structures
-   Functions and methods
-   Flow control
-   Packaging
-   Concurrency
-   Garbage collection


### Object orientation {#object-orientation}

For polymorphic behavior, Go uses **interfaces and duck typing**:

> "If it looks like a duck and quacks like a duck, it's a duck."

Duck typing:

-   class implements an interface if it has all methods and
-   implement these methods


### Class {#class}

> A class is a blueprint, or a template for objects that share the same behavior
> and properties. Being a template, it can be used as a specification to create
> objects.


### Contracts {#contracts}

> The individual constructs (or functions) by which you can invoke behavior on the
> object are called methods.


### Encapsulation {#encapsulation}

> `Encapsulation` is the key guiding principle for class design. It implies exposing
> a contract for the behavior of objects and hiding volatile implementation
> details. The private attributes and methods are hidden inside a capsule
> according to a need-to-know basis

<!--quoteend-->

> Encapsulation is defined as the wrapping up of data under a single unit. It is
> the mechanism that binds together code and the data it manipulates. In a
> different way, encapsulation is a protective shield that prevents the data from
> being accessed by the code outside this shield. -- [Encapsulation in Golang](https://www.geeksforgeeks.org/encapsulation-in-golang/)


### Polymorphism {#polymorphism}

> This ability of an interface method to behave differently based on the actual
> object is called polymorphism and is key to many design patterns


### Composition {#composition}

> An alternative to inheritance is to delegate behavior, also called composition.
> Instead of an is a, this is a has a relationship. It refers to combining simple
> types to make more complex ones.


#### Over Inheritance {#over-inheritance}

-   in Java for example inheritance defines a `is-a` relationship between classes
-   in Golang we build class relationships using a `has-a` relationship

Main concept in Golang:

> Classes implement an interface—which is the contract the base class offers.
> Functionality reuse happens through having references to objects, rather than
> deriving from classes. This is why many people, including people who code in Go,
> have the Composition Over Inheritance principle

[Good example](https://golangbot.com/inheritance/)

```go
  package main

  import (
      "fmt"
  )

  type author struct {
      firstName string
      lastName  string
      bio       string
  }

  func (a author) fullName() string {
      return fmt.Sprintf("%s %s", a.firstName, a.lastName)
  }

  type post struct {
      title   string
      content string
      author
  }

  func (p post) details() {
      fmt.Println("Title: ", p.title)
      fmt.Println("Content: ", p.content)
      fmt.Println("Author: ", p.fullName())
      fmt.Println("Bio: ", p.bio)
  }

  func main() {
      author1 := author{
          "Naveen",
          "Ramanathan",
          "Golang Enthusiast",
      }
      post1 := post{
          "Inheritance in Go",
          "Go supports composition instead of inheritance",
          author1,
      }
      post1.details()
  }
```

> Whenever one struct field is embedded in another, Go gives us the option to
> access the embedded fields as if they were part of the outer struct. This means
> that p.author.fullName() in line no. 11 of the above code can be replaced with
> p.fullName()


## Design patterns {#design-patterns}

>
>
> Design patterns are solutions to recurring problems in software engineering. Rather than a comprehensive solution, a design pattern is a description of a problem and a template of how to solve it. This template then becomes usable in many different contexts.

Idea:

-   study the problem and the solutions
-   goal is to identify patterns among your requirements and architecture
-   use pre-conceived solutions to the problem
-   if design is composed of well-known patterns, it's easy to:
    -   share idea
    -   communicate and discuss with other stakeholders


### Design principles {#design-principles}

-   2 aspects:
    -   What is the responsibility of each class?
    -   What other classes depend on the current one and what is the contract
        between these classed?


### SOLID {#solid}

-   for Go check [SOLID Go Design](https://dave.cheney.net/2016/08/20/solid-go-design)
-   Uncle Bob defines five principles of good class design in his book [Agile Software Development, Principles, Patterns and Pratices](https://www.goodreads.com/book/show/84985.Agile_Software_Development_Principles_Patterns_and_Practices)
-   **Single Responsibility Principle (S)**

    -   **Key point:** Structure functions, types, methods into packages that have
        "natural" cohesion; functions serve a single purpose

    > "One class should have one, and only one, responsibility"

    -   don't chose names like `common`, `utils` etc.
    -   use UNIX philosophy
        -   combine sharp tools to solve larges tasks
        -
-   **Open/Closed Principle (O)**
    -   **Key point:** compose simple types into more complex ones using embedding

        > Software entities should be open for extension, but closed for modification.

        <!--quoteend-->

        > "You should be able to extend a class's behavior without modifying it."

        <!--quoteend-->

        > This essentially means that classes should be open for extension but closed
        > for modification, so it should be possible to extend or override class
        > behavior without having to modify code. Behavior change should be pluggable
        > into the class, either through overriding some methods or injecting some
        > configuration. One excellent example of a framework exhibiting this principle
        > is the Spring Framework

<!--listend-->

-   **Liskov Substitution Principle (L)**
    -   **Key point:** express dependencies between packages in terms of interfaces
        and not concrete types
    -   This is a slight variation of the Open/Closed Principle, and Uncle Bob states it as follows:
        "Derived types must be substitutable for their base types."

    -   This principle is called Liskov because it was first written by [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov):

        > "What is wanted here is something like the following substitution property: If for each object o1 of type S there is an object o2 of type T such that for all programs P defined in terms of T, the behavior of P is unchanged when o1 is substituted for o2—then S is a subtype of T.
    -   basically a specification for an abstract base class with various concrete subtypes

        Example is the **io.Reader** interface:
        ```go
            type Reader interface {
            // Read reads up to len(buf) bytes into buf.
            Read(buf []byte) (n int, err error)
            }
        ```

        > Because io.Reader‘s deal with anything that can be expressed as a stream of
        > bytes, we can construct readers over just about anything; a constant string, a
        > byte array, standard in, a network stream, a gzip’d tar file, the standard out
        > of a command being executed remotely via ssh. And all of these implementations
        > are substitutable for one another because they fulfil the same simple contract.
        > -- [source](https://dave.cheney.net/2016/08/20/solid-go-design)

-   **Interface Segregation Principle (I)**
    -   **Key point:** define functions/methods that depend only on the behaviour that
        they need

        > Clients should not be forced to depend on methods they do not use. -- Robert
        >
        > 1.  Martin

        <!--quoteend-->

        > Many client-specific interfaces are better than one general-purpose interface

        Example:
        ```go
              // Save writes the contents of doc to the supplied Writer.
              func Save(w io.Writer, doc *Document) error
        ```

        > By applying the interface segregation principle to our Save function, the
        > results has simultaneously been a function which is the most specific in terms
        > of its requirements–it only needs a thing that is writable–and the most general
        > in its function, we can now use Save to save our data to anything which
        > implements io.Writer. -- [source](https://dave.cheney.net/2016/08/20/solid-go-design)

        which leads to:

        > A great rule of thumb for Go is accept interfaces, return structs.
        > –Jack Lindamood
-   **Dependency Inversion Principle (D)**

    > High-level modules should not depend on low-level modules. Both should depend on abstractions.
    > Abstractions should not depend on details. Details should depend on abstractions.
    > –Robert C. Martin

    <!--quoteend-->

    > Depend on abstractions, not on concretions.

    -   For Golang that means
        -   Every package should have interfaces that describe functionality without the implementation
        -   When a package needs a dependency, it should take that dependency as a
            parameter (specify interfaces as parameters)


### Creational {#creational}

> Creational design patterns are design patterns that deal with object creation
> mechanisms in a safe and efficient manner and decouple clients from
> implementation specifics. With these patterns, the code using an object need not
> know details about how the object is created, or even the specific type of
> object, as long as the object adheres to the interface expected.

-   Factory method
-   Builder
-   Abstract factory
-   Singleton


### Behavioral {#behavioral}

> Behavioral design patterns are design patterns that identify communication
> patterns among objects and provide solution templates for specific situations.
> In doing so, these patterns increase the extensibility of the interactions

-   Command
-   Chain of Responsibility
-   Mediator
-   Memento
-   Observer
-   Visitor
-   Strategy


### Structural {#structural}

> In Software Engineering, Structural Design Patterns are Design Patterns that
> ease the design by identifying a simple way to realize relationships between
> entities -- [Source](https://sourcemaking.com/design_patterns/structural_patterns)

-   Adapter
-   Bridge
-   Composite
-   Decorator
-   Facade
-   Flyweight
-   Proxy


## Scaling applications {#scaling-applications}


### Distributed algorithms {#distributed-algorithms}


#### Google's MapReduce {#google-s-mapreduce}

-   Map (C) -&gt; [(kx, vy)]: This extracts information from a record and generates key-value tuples.
-   Reduce (k, [vx,vy...[]) -&gt; (k,vagg): The reducer takes the key-value tuples generated in the map phase, grouped by the key, and generates an aggregate result.
-   [glow-map-reduce-for-golang](https://blog.gopheracademy.com/advent-2015/glow-map-reduce-for-golang/)


### Scalability bottlenecks {#scalability-bottlenecks}

-   [The C10k problem](http://www.kegel.com/c10k.html)
    At the start of the 21st century, engineers ran into a scalability bottleneck: web servers were not able to handle more than 10,000 concurrent connections.
-   The thundering herd problem
-   [common bottlenecks](http://highscalability.com/blog/2012/5/16/big-list-of-20-common-bottlenecks.html)


## Scaling systems {#scaling-systems}


### The Art of Scalability (Book) {#the-art-of-scalability--book}

{{< figure src="/img/software-engineering-golang/art-of-scalability.png" caption="<span class=\"figure-number\">Figure 2: </span>3D scalability model / (c) The scalability Book" >}}

-   X-axis scaling

    {{< figure src="/img/software-engineering-golang/scalability-x.png" caption="<span class=\"figure-number\">Figure 3: </span>(c) Jyotiswarup Raiturkar" >}}

    > Scaling along the x-axis means running multiple copies (instances) of the
    > application behind a load balancer. If there are n instances, then each
    > handles 1/n of the load. This is the simplest way of increasing scalability,
    > by throwing hardware at the problem
-   Y-axis scaling

    {{< figure src="/img/software-engineering-golang/scalability-y.png" caption="<span class=\"figure-number\">Figure 4: </span>(c) Jyotiswarup Raiturkar" >}}

    > The objective of scaling along the y-axis is splitting the application into
    > multiple, different services. Each service is responsible for one or more
    > closely related functions. This relates to our microservices discussion, and
    > is essentially a perfect deployment strategy for a service-oriented
    > architecture. The benefit of this type of architecture is that hardware can be
    > efficiently used for only those areas of the application that need it The
    > solution to these issues is to implement an API gateway: an endpoint that
    > clients calls which in turn handles the orchestration and composition of
    > communication between services to get the clients what they need
-   Z-axis scaling

    {{< figure src="/img/software-engineering-golang/scalability-z.png" caption="<span class=\"figure-number\">Figure 5: </span>(c) Jyotiswarup Raiturkar" >}}

    > z-axis scaling mode, each instance runs the same code, but with a different
    > set of data. That is, each server is responsible for only a subset of the
    > data. The orchestrator described previously now becomes more intelligent and
    > has to route requests to the specific instance having the data in order for
    > the request to complete. One commonly used routing parameter is the primary
    > key of the attribute for which the request is being made: for example, to get
    > bookings for a specific user, we can route the requests based on the user ID.
    > We can route not just on specific IDs, but also on segments; for example, the
    > travel website can provide premium customers with a better SLA than the rest
    > by outing the requests to a specific pool of high-capacity servers Z-axis
    > scaling mandates that the data (and hence the database) be split across the
    > various set of instances. This is called sharding. Sharding is typically done
    > on the primary key of the data and divides the whole data set into multiple
    > partitions


## Distributed systems {#distributed-systems}


### Architecture {#architecture}

-   Components: Modular units with well-defined interfaces (such as services and
    databases
-   Interconnects: The communication links between the components (sometimes with
    the additional responsibility of mediation/coordination between components)


### Distributed system quirks {#distributed-system-quirks}

In 1994, Peter Deutsch, who worked at Sun Microsystems, wrote about common wrong assumptions that developers/architects make, which cause things to go wrong in distributed systems. In 1997, James Gosling added to this list to create what is commonly known as the eight fallacies of distributed computing. They are described here.

-   The network is reliable
-   The topology doesn't change
    -   What does this mean in terms of code? It means not assuming location (endpoints) for various services. We need to build in service discovery, so that clients of services can figure out how to reach a particular service. There are two ways clients can discover service endpoints:
-   The bandwidth is infinite
-   The latency is zero
    -   Caching values every programmer should know about: <https://gist.github.com/jboner/2841832>
-   The network is secure
-   There is one administrator
-   The transport cost is zero
-   The network is homogeneous


## Distributed architectures {#distributed-architectures}


### Object-based {#object-based}

-   RPCs
-   RMIs


### Layered {#layered}

> This architectural style can be thought of as an inverted pyramid of reuse,
> where each layer aggregates the responsibilities and abstractions of the layer
> directly beneath it. When the layers are on different machines, they are
> called tiers. The most common example of strict layering is where components
> in one layer can interact only with components in the same layer or with
> components from the layer directly below it.


### P2P {#p2p}

-   Hybrid
-   Structured
    -   DHT (Distributed Hash Tables)


### Distributed computations {#distributed-computations}

-   MapReduce


### EDA (Event-driven Architecture) {#eda--event-driven-architecture}

{{< figure src="/img/software-engineering-golang/eda-messaging.png" caption="<span class=\"figure-number\">Figure 6: </span>(c) Jyotiswarup Raiturkar" >}}

-   promotes an architectural paradigm where behavior is composed by reacting to
    events.
-   Actor model
-   Stream processing


## Messaging {#messaging}

A messaging system can be judged on its performance in four aspects—scalability, availability, latency, and throughput.


### Scalability {#scalability}

> This is how the system is able to handle increases in load without noticeable
> degradation of the other two factors, latency or availability. Here, load can
> mean things such as the number of topics, consumers, producers, messages/sec, or
> average message size


### Availability {#availability}

> In a distributed system, a variety of problems can occur at a unit level
> (servers, disks, network, and so on). The system's availability is a measure of
> how resilient the system is to these failures so that it is available to end
> users


### Latency {#latency}

> This is how much time it takes for a message to get to a consumer from a
> producer


### Throughput {#throughput}

> This is how many messages can be processed per second by the messaging system


### Broker-based messaging {#broker-based-messaging}

> A broker is a component that acts as the intermediary in a messaging system.
> Here, the clients connect to the broker and not to each other directly. Whenever
> clients want to send and receive messages, they need to specify a
> mailbox/topic/queue on the broker. Producers connect to the broker and send
> messages to a specific queue. Consumers connect to the broker and specify queue
> name from which they want to read messages.


#### Responsabilities {#responsabilities}

-   Maintaining the mapping of queues, producers, and consumers reliably: This includes storing the messages in a durable format
-   Handling message production: This includes storing messages written by the producers.
-   Handling message consumption: This means ensuring that consumers reliably get messages and providing constructs to avoid duplicate messages
-   Routing and transformation: Here, the message broker may transform or maintain multiple copies for each message to enable various topology models, which will be described in the following sections.


#### Models {#models}

-   Queue
-   Pub/Sub


### Integration patterns {#integration-patterns}


#### Using Golang channels {#using-golang-channels}

-   The request-reply pattern
-   The correletation identified pattern
-   The pipes and filters pattern
-   The content-based router pattern
-   The fan-in pattern
-   The fan-out pattern
-   The background worker pattern


## API {#api}


### REST {#rest}


#### Constraints {#constraints}

-   client-server model
-   stateless
-   uniform interface

    > The REST paradigm promotes a uniform interface for all interactions between the
    > client and the server. As described earlier, the key abstraction is the
    > resource. A resource is identified by a unique hierarchical name, and can have
    > multiple representations.


#### Richardson Maturity Level {#richardson-maturity-level}

-   Level 0

    > At level 0, the API uses the implementing protocol (normally HTTP, but it
    > doesn't have to be) like a transport protocol. There is no effort to utilize the
    > protocol to indicate state; it is just used to pass requests and responses back
    > and forth. The system typically has one entry point (URI) and one method
    > (normally POST in the case of HTTP).
-   Level 1 - resources

    > Here, the API distinguishes between multiple resources using different URLs.
    > However, there is still typically only one method (POST) of interaction. This is
    > better than the previous level because now there is a hierarchical definition of
    > resources. Instead of going through /hotels, now the API assigns IDs to each
    > hotel and uses that to see which hotel the request is for, so the API will have
    > URLs of the /hotels/&lt;id&gt; form.
-   Level 2 - HTTP Verbs

    > This level indicates that the API uses protocol properties (namely, HTTP verbs)
    > to define the nature of the API. Thus GET is used for a read, POST is used to
    > create a new resource, PUT to update a resource, and DELETE to of course delete
    > the resource. The API also uses standard responses code such as 200 (OK) and 202
    > (ACCEPTED) to describe the result of the request.
    >
    > Generally, most REST API implementations are at this level.

-   Level 3 - Hypermedia controls

    > Level 3, the highest level, uses Hypertext As The Engine Of Application State
    > (HATEOAS) to allow clients to deal with discovering the resources and the
    > identifiers.

    Example:
    ```nil
      GET /hotels/xyz
    ```
    Response:
    ```nil
      {
          "city": "Delhi",
          "display_name": "Hotel Xyz",
          "star_rating": 4,
          "links": [
              {
                  "href": "xyz/book",
                  "rel": "book",
                  "type": "POST"
              },
             {
                  "href": "xyz/rooms",
                  "rel": "rooms",
                  "type": "GET"
      ...
    ```


## Anti-fragile systems {#anti-fragile-systems}


### Engineering reliability {#engineering-reliability}


#### Messaging {#messaging}

-   The asynchonous computation pattern
-   The orchestrator pattern
-   The compensating-transaction pattern
-   The pipes and filter pattern
-   The sidecar pattern
