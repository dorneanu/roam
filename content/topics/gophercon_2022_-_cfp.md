+++
title = "GopherCon 2022 - CFP"
draft = false
+++

## Guidelines for proposal {#guidelines-for-proposal}

-   <https://www.papercall.io/gophercon-2022>


## Title options {#title-options}

-   Build Security software using [Golang]({{< relref "golang.md" >}})
-   Go, build some Security products!
-   Building Security like a Gopher
-   Clean, Cleaner, Gopher: Build enterprise Security products using Golang


## Bio {#bio}

Victor is a passionated Security engineer based in Berlin (Germany), currently securing products built on blockchain technologies. Some years ago he used to find flaws in software but meanwhile he switched sides and realized that building secure software is way more challenging. He's also an Agile evangelist and has a holistic approach to building modern, robust and secure IT infrastructure. In his free time he tries to expand his repertoire of statically-typed languages.


## Abstract / Description {#abstract-description}

Building maintainable Security related software can be difficult, especially when you don't have a software engineering background. However, principles like SOLID and clean code can be applied to every business domain. In fact, it turns out Golang has amazing built-in features to set clear boundaries between your components. And due to its rich ecosystem, you don't have to reinvent the wheel. You can already take full advantage of well established Go libraries and patterns.<br />
<br />
This talk is about my lessons learned while building services aimed at securing developers code. Learn how to build small tools but also complex software in a Security context. And most imporant: Learn how to build solutions that last for years and not for a short period of time.


## Presentation outline {#presentation-outline}

-   Introduction (1min)
    -   who am I
    -   what do I do as a **Security engineer**
    -   how and **why** I've started to build **Security** tools/software in **Golang**
-   What this presentation is NOT about
    -   focus is not on **offensive** Security
        -   no pentest tools, no malware development
        -   I focus on **defensive** methodologies in enterprise environments
    -   secure development workflow is out of scope
        -   I don't focus on linters nor on code syntax
    -   I don't focus on _secure_ Golang code
        -   also Security products should be tested, scanned accordingly
        -   this is a broad topic I won't address in this talk
-   Security in the Agile world
    -   Enable Security in the organization
        -   focus on **enabling** Security, rather than **doing** it
            -   measure Security team's success on what it can enable
            -   **build** tools that people actually use
            -   document whitehat/blackhat techniques
            -   **develop** and **deploy** secure services
    -   Building Tools and Software
        -   enable development teams to test for the security of their products
        -   build tools developers understand and also fit into their workflows
        -   don't force adoption of solutions
            -   let teams chose their tools based on their needs
            -   allow combination of multiple tools
            -   always build with your customers needs in mind
        -   follow modular approach
            -   extend your tools through APIs
            -   follow Unix principle
                -   solve one specific problem
                -   allow output to be piped/used into other tools
    -   What to build
        -   These are some examples what your team could build for your customers:
        -   Security **testing tools** that fit into the CI/CD pipeline
            -   Static code analysis
            -   Dependency inspection (for out-dated software/libraries)
            -   scan for low-hanging fruits and well-known attacks
            -   passing set of **automated scans** should add to overall level of confidence
        -   **Compliance** checks
            -   Check for misconfiguration
            -   Policies adoption
            -   User roles/permissions
        -   **Shared** security related **libraries/services**
            -   authentication
            -   cryptography
            -   Secrets management
-   Customer is king
    -   build products/services that deliver value to your customers
    -   incorporate customer feedback to validate the requirements
    -   build MVPs to create value quickly
        -   you can still have **clean code** and all then things **after** you're sure you're building the right thing
    -   It all starts with a user story Developers have put down following **user story**:
        -   for every push to master I'd like several **scans** to be triggered against recent push
            -   only new/modified files should be scanned
            -   scans should be fast
            -   reports should be exported in a machine-readable format (YAML, JSON)
        -   scan results should immediately be presented to the developers
            -   integrate reporting with developers workflow
            -   use different **communication channels**:
                -   E-Mail (not recommended)
                -   Slack
                -   Github
                    -   Create new issue and assign labels for better filtering
                    -   Comment on the recent PR with details on found vulnerability
                -   show results within the IDE
    -   Cookbook for Security scanning
        -   Ingredients
            -   version control system
                -   A Github **account**
                -   A Github **organization**
            -   cloud provider
                -   Implementation <span class="underline">should</span> be cloud-agnostic but that's hard for complex projects
                -   I'll use AWS cloud services for my examples
            -   Some Golang
        -   Steps
            -   Create (fictional) Github organization
            -   Deploy Github Application across whole organization
            -   Create some repositories
            -   Send specific events (commit, push) to a webhook
            -   Implement webhook for receiving Github events
                -   Takes incoming requests
                -   Validates request signature
                -   Creates new "Scan" tasks
                -   Push Scan tasks to worker pool (implemented as simple **queue**)
                -   Batch of Scan tasks is fetched from the queue
                -   Each task is processed
            -   Reporters will deliver a new Report to a communication channel
                -   Slack
                -   Post results as Github comment
                -   etc.
-   Golang implementation I'm not an expert in none of the following domains but these ones have inspired me a lot:
    -   I'll use a [DDD](https://en.wikipedia.org/wiki/Domain-driven_design) approach to identify (business) domains
    -   I'll use [SOLID](https://en.wikipedia.org/wiki/SOLID) for better code maintainability
    -   I'll use [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)/[Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/) to create decoupled application components that can easily interact with the outside world by using ports and adapters
    -   Basic Domains / Entities
        -   Repository
            -   holds information about a (git) repository
            -   can clone a specific repository
            -   can checkout a specific branch, commit hash
        -   Scan
            -   contains information about a scheduled scan
            -   it links to a Repository instance
            -   contains scan instructions for the Worker to execute
        -   Result
            -   contains scan results
            -   it might have a link to a Scan instance
        -   Repository
            -   Notes
                -   show how to implement webhook for a Github application
                -   show how to check for request signature
                -   show how to distinguish between Github events and create a new Scan
        -   Scan
            -   Notes
                -   show how to create a new Scan event
                -   show how to implement a simple worker pool, from where multiple Scan types are fetched and processed
        -   Result
            -   Notes
                -   show how to construct a Result type out of an output of 3rd-party scanners
                -   show how to send a result to different communication channels
                    -   Slack
                    -   Github comment
    -   Architecture
        -   Notes
            -   use **event-driven** approach
            -   use queues (e.g. AWS SQS) to pass "events" from one scan stage to another
            -   use queues to trigger reporting events (e.g. message to Slack channel)
            -   use **serverless** architecture for cost reasons and built-in scalability
    -   Deployment
        -   Notes
            -   use AWS CDK to build a small stack to be deployed on AWS
                -   webhook: lambda for incoming requests/events from Github
                -   scanning queue: SQS queue for holding Scan events
                -   reporting queue: SQS queue for holding Result objects to be sent to different communication channels
-   Outro


## Additional Notes {#additional-notes}

In my past career I've mainly used Python to build tools for different purposes. Some years ago I was given the task to build a static code analysis tool for the entire organization. I've soon realized that writing (small) tools and building enterprise software are completely two different things. Breaking down complexity and making sure each part part does its part well, was challenging enough. To also build maintainable software at the same time, seemed impossible to me.<br />
<br />
And this is where I've started to think about statically typed languages again, as they enforce some sort of contracts between different components. To me Golang seemed to be the perfect choice to come up with a reasonable MVP and from there to add more features.<br />
<br />
As a Security engineer and throughout my career I've specialized in application security. This domain was and still remains interesting enough as it deals with flaws and vulnerabilities in software products. On a daily basis I need to secure software in an Agile environment while keeping myself up-to-date with new technologies, products and libraries.<br />
<br />
Based on what I've learned working under these circumstances, here are my tipps for building Security products:

-   as design principles I use some combination of
    -   Uncle Bob's [clean architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
    -   Alistair Cockburn's [hexagonal architecture](https://alistair.cockburn.us/hexagonal-architecture/)
    -   Three Dots Labs [adapters and ports](https://threedots.tech/post/ddd-cqrs-clean-architecture-combined/)
-   nowadays almost every modern business uses Git for version control
    -   I've used [go-git](https://github.com/go-git/go-git) to interact with git repositories
    -   [go-github](https://github.com/google/go-github) has helped interact with the Github API
    -   there is also [go-gitlab](https://github.com/xanzy/go-gitlab) for Gitlab
-   I'm a big fan of serverless architectures
    -   using AWS Lambda proved to be quite easy since Amazon has its own [SDK for Go v2](https://github.com/aws/aws-sdk-go-v2)
    -   I've used the [Serverless framework](https://www.serverless.com/) in the past but I've switched to [AWS CDK](https://aws.amazon.com/cdk/) for deploying Golang binaries to the cloud
-   interacting with the Github ecosystem requires some effort
    -   make sure to use [Github Apps](https://docs.github.com/en/developers/apps/getting-started-with-apps/about-apps) as they allow you to authenticate on behalf of an user or organization
        -   no more need for personal tokens
        -   no more need for dedicated Github account to do the authentication
    -   using the [events API](https://docs.github.com/en/rest/reference/activity#events) you can setup a [webhook](https://docs.github.com/en/developers/webhooks-and-events/webhooks) to listen for certain events related to your repositories
        -   you can trigger certain events for every commit, push, comment made across the whole Github organization
-   there are several open source Security vulnerability scanners
    -   for static-code analysis I've used [gitleaks](https://github.com/zricethezav/gitleaks) to search for credentials and other regular expressions in the code
        -   you can also search in the git history
    -   Github itself has different solutions for code security
        -   [Github Advanced Security](https://github.com/features/security)
        -   [Dependabot](https://github.com/dependabot)
