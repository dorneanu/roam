+++
title = "Building Microservices (2nd edition)"
date = 2022-06-01
tags = ["book"]
draft = false
+++

## Notes {#notes}


### Ch. 1: What are Microservices? {#ch-dot-1-what-are-microservices}


#### Definition {#definition}

> [Microservices](https://brainfck.org/#Microservices) are independently releasable services that are modeled around a business
> domain. A service encapsulates functionality and makes it accessible to other services via
> networks.

-   [Microservices](https://brainfck.org/#Microservices) are a type of [SOA](https://brainfck.org/#SOA) architecture
    -   service boundaries are important
    -   independent deployability is key
-   [Microservices](https://brainfck.org/#Microservices) embrace the concept of [Information hiding](https://brainfck.org/#Information%20hiding)

<div class="sidenote">

Introduced by David Parnas in _Information Distribution Aspects of Design Methodology_

</div>


#### Key Concepts {#key-concepts}

-   **Independent deployability**
    -   criteria for this: make sure microservices are [loosely coupled](#coupling)
        -   be able to change one service without having to change anything else
-   **Modeled around a business domain**
    -   definition of service boundaries (see [DDD](#ddd))
-   **Owning their own state**
    -   hide internal state (same as encapsulation in [OOP](https://brainfck.org/#OOP))
    -   clean delineation between internal implementation details and external contract
        -   be backward-compatible
    -   hide database that backs the service
        -   avoid DB showing
-   **Size**

    > "A microservice should be as big as my head" - James Lewis

    -   keep it to the size at which it can be easily understood
-   **Flexibility**

    > "Microservices buy you options" - James Lewis

    -   they have a cost and you must decide whether the cost is worth the options you want
        to take up
-   **Alignment of architecture and organization**

    > "Organizations which design systems are constrained to produce designs which are copies
    > of the communication structures of the organization" - Melvin Conway

    -   have team vertically organized
        -   same team owns front-end, business logic, data, back-end, security
            -   a so called stream-aligned team


#### Advantages {#advantages}

-   **Technology Heterogeneity**

{{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_4.jpg" title="Technology heterogenity" caption="You can use different technologies/programming languages for building multiple microservices." pos="left" >}}

-   **Robustness**
    -   a component in a system can fail but as long as the problem doesn't cascade, the rest
        of the system still works
-   **Scaling**

    <div class="sidenote">

    Book recommendation: [The art of scalability](https://www.goodreads.com/de/book/show/7282390-the-art-of-scalability)

    </div>
-   **Ease of Deployment**
    -   fast delivery of features
    -   decreases fear of deployment (see [Accelerate]({{< relref "accelerate.md" >}}))
    -   change a single service and deploy it independently of the system
-   **Organizational alignment**
    -   small teams working on small code bases tend to be more productive
    -   microservices allow us to better align our architecture to our organization
        -   minimize the number of people working in the team
            -   helps to find the sweet spot of team size and productivity
-   **Composability**
    -   reusable components
    -   allow functionality to be consumed in different ways
        -   for different purposes: website, desktop, mobile application etc.


#### Pain Points {#pain-points}

-   **Developer Experience**
    -   new technologies are options not requirements
    -   when adopting microservices
        -   you'll have to understand issues around data consistency, latency, service modeling
        -   and how these ideas change the way you think about software development
        -   it takes time to understand new concepts
            -   this leads to less time developing new features
-   **Technology overload**
-   **Costs**
-   **Reporting**
    -   data and logs are scattered across multiple components
-   **Monitoring and troubleshooting**

    <div class="sidenote">

    Book recommendation: [Distributed Systems Observability](https://www.oreilly.com/library/view/distributed-systems-observability/9781492033431/)

    </div>
-   **Security**
-   **Latency**
-   **Data consistency**


### Ch. 2: How to model microservices {#ch-dot-2-how-to-model-microservices}


#### [Information hiding](https://brainfck.org/#Information%20hiding) {#information-hiding}

-   hide as many details as possible behind a module / microservice boundary
-   Parnas identified following benefits:
    -   improved development time
    -   comprehensibility
        -   each module is isolated and therefore better to understand
    -   flexibility


#### Cohesion {#cohesion}

-   code that changes together, stays together
-   strong cohesion
    -   ensure related behavior is at one place
-   weak cohesion
    -   related functionality is spread across the system


#### Coupling {#coupling}

-   loosely coupled
    -   change to one service should not require a change to another
-   a loosely coupled services knows as little as it needs about the services it communicates with
    -   limitation of number of different types of calls is important


#### Interplay of coupling and cohesion {#interplay-of-coupling-and-cohesion}

> A structure is stable if cohesion is strong and coupling is low.

-   cohesion applies to the relationship between things **inside** a boundary
-   coupling describes relationship **between things across** a boundary
-   still: there is no best way how to organize code


#### [Types of coupling](https://brainfck.org/#Types%20of%20coupling) {#types-of-coupling}

<!--list-separator-->

-  Domain coupling

    -   one microservice interacts with another microservice because it needs the functionality
        the other microservice provides

    {{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_5.jpg" title="Domain coupling" caption="Each microservice has a different functionality" pos="left" >}}

    -   considered as a _loose_ form of coupling
    -   again, information hiding: Share only what you absolutely have to, and send only the
        absolute minimum amount of data that you need

<!--list-separator-->

-  Pass-through coupling

    -   one microservice passes data to some other microservice because data is needed by another microservice

    {{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_6.jpg" title="Pass-through coupling" caption="Some information is passed from one microservice to another" pos="left" >}}

<!--list-separator-->

-  Common coupling

    -   when 1 or 2 microservices make use of a **common** set of data
        -   use of shared DB
        -   use of shared memory/filesystem
    -   problem: changes to data can impact multiple microservices at once
    -   better solution would be to implement [CRUD](https://brainfck.org/#CRUD) operations and let only 1
        microservice handle shared DB operations

<!--list-separator-->

-  Content coupling

    {{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_7.jpg" title="Content coupling" caption="" pos="left" >}}

    -   when an upstream service reaches into internals of a downstream service anc changes its
        internal state


#### DDD {#ddd}

[DDD](https://brainfck.org/#DDD) stands for Domain-Driven Design.

<!--list-separator-->

-  Concepts

    <!--list-separator-->

    -  Ubiquitous language

        -   use the same terms in code as the user use
        -   have **common** language between delivery team and actual people (aka customers)
            -   helps to understand business by logic
            -   helps with communication
        -   use real-world language in code

    <!--list-separator-->

    -  Aggregates

        -   a **representation** of real domain concept
            -   something like an `Order`, an `Invoice`, `Stock Item`
        -   aggregates typically have an information cycle around them
        -   in general
            -   aggregate as something that has

                -   state
                -   identity
                -   information cycle

                that will be managed as part of the system
        -   aggregates can have **relationships** to other aggregates

            {{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_8.jpg" title="Relationship between aggregates" caption="If relationships exist inside scope of the same microservices, we could use foreign keys to store relationship" pos="left" >}}

    <!--list-separator-->

    -  Bounded context

        -   a larger organizational boundary
            -   within it explicit responsibilities need to be carried out
        -   bounded contexts hide implementation details ([Information hiding](https://brainfck.org/#Information%20hiding))
        -   bounded contexts contain `1-n` aggregates
            -   some aggregates may be exposed outside the bounded context
            -   others may be hidden internally

<!--list-separator-->

-  Event Storming

    -   collaborative brainstorming exercise designed to help design a domain model
    -   invented by [Alberto Brandolini](https://www.eventstorming.com/)

<!--list-separator-->

-  Boundaries between microservices

    There are some factors when defining clear boundaries between microservice

    -   **volatility**
    -   **data**
        -   also with concern to security
    -   **technology**
    -   **organizational**
        -   Layering Inside vs Layering Outside


### Ch. 3: Split the monolith {#ch-dot-3-split-the-monolith}

{{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_2.jpg" title="Monolith types" caption="Types of monoliths" pos="left" >}}

{{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_3.jpg" title="Monolith types" caption="Distributed monolith: A system that consists of multiple services but for whatever reason the entire system must be deployed together. " pos="left" >}}

-   you need to have a **goal** before moving to microservices
    -   should be a conscious decision
    -   without clear understanding of what you want to achieve, you could fall into the trap of **confusing activity with outcome**

        > Spinning up a few more copies of your existing monolith system behind a load balancer may well help you scale your system
        > much more efficiently than going through a complex and length decomposition to microservices.


#### Decomposition patterns {#decomposition-patterns}

-   Strangler fig pattern

<div class="sidenote">

By [Martin Fowler](https://martinfowler.com/bliki/StranglerFigApplication.html)

</div>

{{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_9.jpg" title="Strangler fig pattern" caption="An interception layer could catch calls and distribute them between a monolith and microservices." pos="left" >}}

-   Parallel run
-   Feature toggles


#### Data Decomposition concerns {#data-decomposition-concerns}

-   performance
-   data integrity
-   transactions
-   Tooling
-   Reporting DB


### Ch. 4: Communication styles {#ch-dot-4-communication-styles}

{{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_10.jpg" title="Communication styles" caption="In-process vs. inter-process communication (IPC)" pos="left" >}}

-   styles for IPC communications
    -   **synchronous blocking**
    -   **asynchronous blocking**
    -   **request-response**
    -   [Event-Driven Architecture](https://brainfck.org/#Event-Driven%20Architecture)
    -   **Common data**


#### EDA {#eda}

-   events vs messages
    -   **event**: is a fact
    -   **message**: is a thing
    -   a message contains an event


### Ch. 5: Implementing communication {#ch-dot-5-implementing-communication}


#### Criterias for ideal technology {#criterias-for-ideal-technology}

-   backward compatibility
-   make your interface(s) explicit
    -   use of explicit schemas

        <div class="sidenote">

        Like [OpenAPI](https://swagger.io/specification/)

        </div>
-   keep your APIs technology-agnostic
-   make your service simple for the consumers
-   hide internal implementation details


#### Technology choices {#technology-choices}

-   [RPC](https://brainfck.org/#RPC)
    -   SOAP
    -   [gRPC](https://brainfck.org/#gRPC)
-   REST

    <div class="sidenote">

    Book recommendation: [REST in Practice: Hypermedia and Systems Architecture](https://www.goodreads.com/en/book/show/8266727-rest-in-practice) (by Jim Webber, Savas Parastatidis, Ian Robinson)

    </div>
-   GraphQL
    -   alternative: [BFF](https://brainfck.org/#BFF) (Backend-For Frontend) pattern

        <div class="sidenote">

        This [article](https://blog.bitsrc.io/bff-pattern-backend-for-frontend-an-introduction-e4fa965128bf) provides a quite good introduction.

        </div>

        {{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_13.jpg" title="Backend for Frontend (BFF)" caption="Define different services for web, mobile, native clients and return only the amount of data needed. " pos="left" >}}

-   Message brokers
    -   use queues/topics


#### API Gateway {#api-gateway}

-   built on top on existing HTTP proxy products
-   main function: reverse proxy
    -   but also authentication, logging, rate limiting
-   Examples:
    -   [AWS API Gateway](https://aws.amazon.com/api-gateway/)
    -   [GCP API Gateway](https://cloud.google.com/api-gateway)

{{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_11.jpg" title="API Gateway" caption="North-south traffic is handled by an API GW (Gateway), east-west traffic via a service mesh. " pos="left" >}}


### Ch. 6: Workflow {#ch-dot-6-workflow}


#### Distributed Transactions {#distributed-transactions}

<!--list-separator-->

-  Two-phase Commits (2PC)

    -   a commit algorithm to make transactional changes in a distributed system, where multiple separate parts need to be updated

<!--list-separator-->

-  Sagas

    -   coordinate multiple changes in state
    -   but without locking resources for a long period
    -   involves
        -   backward recovery
        -   forward recovery
    -   allows to recover from _business_ failures not technical ones
    -   when rollback is involved, maybe a compensating transaction is needed

<!--list-separator-->

-  Books

    -   [Enterprise Integration Patterns: Designing, Building, and Deploying Messaging Solutions](https://www.goodreads.com/book/show/85012.Enterprise_Integration_Patterns)
    -   [Practical Process Automation](https://www.goodreads.com/en/book/show/55362275-practical-process-automation)


### Ch. 7: Build {#ch-dot-7-build}

-   on [Continuous Integration (CI)](https://brainfck.org/#Continuous%20Integration%20(CI))
-   how to organize artifacts
    -   monorepo
    -   multirepo


### Ch. 8: Deployment {#ch-dot-8-deployment}


#### [Principles of Microservices Deployment](https://brainfck.org/#Microservices/Deployment) {#principles-of-microservices-deployment}

-   **isolated execution**
    -   own computing resources
    -   don't impact other microservices instances
-   **focus on automation**
    -   adopt automation as core part of your culture
-   **Infrastructure as a Code**

    <div class="sidenote">

    Book: [Infrastructure as Code: Managing Servers in the Cloud](https://www.goodreads.com/en/book/show/26544394-infrastructure-as-code)

    </div>
-   **zero-downtime deployment**
    -   independent deployability
        -   new deployment of microservices can be done without downtime to users/clients of microservices
-   **desired state management**
    -   maintain microservices in a defined state
        -   allocate new instances if needed
    -   GitOps
        -   brings together desired state management and IaC (Infrastructure as Code)
-   **progressive delivery**
    -   implement many of the ideeas in [Accelerate]({{< relref "accelerate.md" >}})
    -   separate deployment from release
    -   feature releases
        -   use as part of trunk-based development
        -   not yet finished functionality can be deployed and hidden from users (e.g. feature toggles)
        -   functionality can still be turned on/off
    -   canary releases
    -   parallel runs


### Ch. 10: From monitoring to obersavability {#ch-dot-10-from-monitoring-to-obersavability}


#### The observability of a system {#the-observability-of-a-system}

-   is the extenct to which you can understand the internal state of the system
    from external output
-   **monitoring** is something we _do_
    -   it's an activity
-   **observability**
    -   rather a _property_ of a system
-   pillars of observability

    -   metrics
    -   logging/logs
    -   events
    -   traces

    {{< gbox src="/posts/img/2022/building-microservices-2nd-edition/microservices_07-02-2022_12.35_12.jpg" title="Correlation IDs in logs" caption="In order to correlate different logs (from different sources) a request ID could be used (and set in the API Gateway) and passed through to different microservices. " pos="left" >}}


#### Alert fatigue {#alert-fatigue}

> Alert fatigue—also known as alarm fatigue—is when an overwhelming number of
> alerts desensitizes the people tasked with responding to them, leading to missed
> or ignored alerts or delayed responses -- [Source](https://www.atlassian.com/incident-management/on-call/alert-fatigue)

<div class="sidenote">

Also a good reading: [Alarm design: From nuclear power to WebOps](https://humanisticsystems.com/2015/10/16/fit-for-purpose-questions-about-alarm-system-design-from-theory-and-practice/).

</div>

<!--list-separator-->

-  What makes a good alert

    An alert has to be:

    -   **relevant**
    -   **unique**
    -   **timely**
    -   **prioritized**
        -   give enough information to decide in which order alerts should be dealth
            with
    -   **understandable**
        -   information has to be clear and readable
    -   **diagnostic**
        -   it needs to be clear what is wrong
    -   **advisory**
        -   help the operator understand what actions need to taken
    -   **focussed**
        -   draw attention to the most important issues

<!--list-separator-->

-  On the importance of testing

    > "Not testing in production is like not practitioning with the full orchestra because your solo sounded fine at home"


#### Semantic monitoring {#semantic-monitoring}

-   compare against normal conditions
-   you could use synthetic transactions
-   other options
    -   A/B testing
    -   canary releases
    -   [Chaos engineering](https://brainfck.org/#Chaos%20engineering)
    -   parallel runs
    -   smoke tests


#### Tools {#tools}

-   [opentelemetry.io](https://opentelemetry.io/)


### Ch. 11: Security {#ch-dot-11-security}


#### Lifecycle of secrets {#lifecycle-of-secrets}

-   **Creation**
    -   How we create the secret
-   **Distribution**
    -   How do we make sure the secrets get to the right place?
-   **Storage**
    -   Is the secret stored in a way only authorized parties can access it?
-   **Monitoring**
    -   Do we know how secret is used?
-   **Rotations**
    -   Are we able to change the secret without causing problems?


### Ch. 12: Resiliency {#ch-dot-12-resiliency}


#### Resiliency {#resiliency}

-   defined by David D. Woods

    <div class="sidenote">

    Book: [Resilience Engineering: Concepts and Precepts](https://www.goodreads.com/book/show/910055.Resilience_Engineering)

    </div>
-   aspects
    -   **robustness**
        -   ability to absorb perturbation
    -   **rebound**
        -   recover after a traumatic event
    -   **graceful extensibility**
        -   how to deal with an unexpected situation
    -   **sustained adaptability**
        -   adapt to changing environments, stakeholders and demands


### Ch. 14: User interfaces {#ch-dot-14-user-interfaces}


#### Stream-aligned teams {#stream-aligned-teams}

-   topologies how to build organizations, teams

<div class="sidenote">

Book recommendation: [Team Topologies: Organizing Business and Technology Teams for Fast Flow](https://www.goodreads.com/en/book/show/44135420-team-topologies)

</div>

-   aka "full-stack teams"
-   a team aligned to a single, valuable stream of work
-   the team is empowered to build and deliver customer or user value as quickly
    and independently as possible, without requiring hand-offs to other teams to
    perform parts of the work


#### Microfrontends {#microfrontends}

-   architectural style where independently deliverable frontend applications are
    composed into a greater whole

    <div class="sidenote">

    Check out Martin Fowler's [article](https://martinfowler.com/articles/micro-frontends.html).

    </div>
-   possible implementations
    -   widget-based decomposition
    -   page-based decomposition


#### SCS {#scs}

-   stands for Self-Contained Systems

    <div class="sidenote">

    Read more on the [official site](https://scs-architecture.org/)

    </div>
-   highlights
    -   each SCS is an autonomous web application with no shared UI
    -   each SCS is owned by one team
    -   asynchronous communication should be used whenever possible
    -   no business code can be shared between multiple SCSs


### Ch. 15: Organizational structures {#ch-dot-15-organizational-structures}

-   [Stream-aligned teams](#stream-aligned-teams)
    -   concept aligns with loosely-coupled organizations (as in [Accelerate]({{< relref "accelerate.md" >}}))


#### Conways Law {#conways-law}

> "Any organization that designs a system will inevitably produce a design whose structure
> is a copy of the organizations communication structure" - Melvin Conway


#### All about people {#all-about-people}

> "Whatever industry you operate in, it is all about your people, and catching them doing things right, and providing them with the
> confidence, the motivation, the freedom and desire to achieve their true potential" - John Timpson

<div class="sidenote">

Also interesting is the concept of paved roads, where best-practices are available but deviations are also allowed.

</div>


### Ch. 16: The evolutionary architect {#ch-dot-16-the-evolutionary-architect}


#### Role of architects {#role-of-architects}

-   We should think of the role of IT architects more as **town planners** than architects for the built environment

    <div class="sidenote">

    Sam uses the [Seagram Building](https://en.wikipedia.org/wiki/Seagram_Building) (designed by Mies van der Rohe) as an universal place to visualize the role of an (IT) architect.

    </div>


#### Buildings and software {#buildings-and-software}

> The comparison with software should be obvious. As our users use our software, we need
> to react and change. We cannot foresee everything that will happen, and so rather than
> plan for any eventuality, we should plan to allow for change by avoiding the urge to
> overspecify every last thing. Our city (the system) needs to be a good, happy place for
> everyone who uses it. One thing that people often forget is that our system doesn't just
> accommodate users; it also accommodates developers and operations people who also have
> to work there, and who have the job of making sure it can change as required.


#### Governance {#governance}

> Governance ensures that enterprise objectives are achieved by evaluating
> stakeholder needs, conditions and options; setting direction through
> prioritisation and decision making; and monitoring performance, compliance and
> progress against agreed-on direction and objectives. -- Cobit 5


#### Responsibilities of the evolutionary architect {#responsibilities-of-the-evolutionary-architect}

-   **Vision**
    -   clearly communicated technical vision for the system that will help meet requirements of customers and organization
-   **Empathy**
    -   understand impact of decissions on customers and colleagues
-   **Collaboration**
    -   engage with as many of your pears and colleagues as possible to help
        define, refine and execute the vision
-   **Adaptability**
    -   tech vision changes as required by customers/organization
-   **Autonomy**
    -   balance between standardizing and enabling autonomy for your teams
-   **Governance**
    -   system being implemented fits the tech vision
    -   make sure it's easy for people to do the right thing


#### Book recommendations {#book-recommendations}

-   [Building evolutionary architectures](https://www.goodreads.com/en/book/show/35755822-building-evolutionary-architectures)
-   [The software architect elevator](https://www.goodreads.com/book/show/49828197-the-software-architect-elevator)