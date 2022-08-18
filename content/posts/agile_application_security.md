+++
title = "Agile Application Security"
date = 2021-08-01
tags = ["book", "security"]
draft = false
+++

## Preface {#preface}

-   Security professionals focus only on the cool stuff (vulnerability research, exploit development and stunt hacks)
-   But when was the last time a cool defensive measure or methodology had a cool name? (like Logjam, Shellshock etc.)


## What is Security {#what-is-security}

-   Is the intersection between tech and people
-   [Security]({{< relref "security.md" >}}) is about risk
    -   Vulnerability = Likelihood + Impact
        -   Likelihood
            -   Factors which lead to the calculation
                -   Technical skills required
                -   Reliability
                -   Automation
                -   Access
                -   Motivation
        -   Impact
            -   Money lost


### What is Cyber {#what-is-cyber}

-   Emanated from the US military
    -   It considered to be 4 theaters of war where countries could legally fight
        -   Land
        -   Sea
        -   Air
        -   Space
    -   When Internet was used by nations to communicate with each other, the military recognized a new theater of war: cyber
-   Unfortunately it has become a marketing term used to describe threats but also brand solutions
    -   It helps you get more points from people who are less familiar in the security space and are more focused on PR
    -   Be aware that depending on the location in the infosec spectrum, by using the term cyber, your message might be ignored


### Values {#values}


#### Protect {#protect}

-   Data
-   Systems
-   People


#### [CIA]({{< relref "cia.md" >}}) {#cia--cia-dot-md}


### Other activities {#other-activities}

-   Compliance
-   Regulation
-   Security Standards


## Agile Enablers {#agile-enablers}


### Build pipeline {#build-pipeline}

-   An automated, reliable, and repeatable way to of producing consistent deployable artifacts
-   Whenever source code is changed, a build process is started that is reliably and repeatably consistent
-   But just because you can compile and build the system, it doesn't mean it will work reliably. That's why you need automated testing


### Automated Testing {#automated-testing}

-   Unit tests
    -   Whitebox testing technique to ensure the code modules work as the author intended
    -   Require no running system
-   Functional tests
    -   Test whole suites of functions
    -   These tests try to model real-life case scenarios using known test data and the common actions that system users will perform
-   Integration tests
    -   Test if all subsystems communicate with each other properly
    -   Done mainly again internal services
        -   External services are mocked out
-   System testing
    -   Use external integrations and accounts
    -   Ensure that the who system runs as expected
    -   Ensure core functions/features work correctly from end-to-end


### [Continuous Integration]({{< relref "continuous_integration.md" >}}) {#continuous-integration--continuous-integration-dot-md}


### Infrastructure as a Code {#infrastructure-as-a-code}


### Release Management {#release-management}

-   Agile teams try to release more often
-   Releases are rather small which reduce operational risks as well as Security risks
-   Small changes are easier to understand, review and test
-   A security fix has to be no different than any other code change
    -   Fixes can be rapidly applied and deployed
    -   Automation is key here


### Continuous Delivery VS Continuous Deployment {#continuous-delivery-vs-continuous-deployment}

-   [Continuous Delivery]({{< relref "continuous_delivery.md" >}})
    -   Changes are always ready to be deployed to production by automation, building, testing, packaging and deployment steps so that they are executed for every change
-   [Continuous Deployment]({{< relref "continuous_deployment.md" >}})
    -   Changes automatically run through the same build and test stages and are immediately sent to production if all steps pass


## Welcome to the Agile Revolution {#welcome-to-the-agile-revolution}

-   [The Agile Manifesto]({{< relref "the_agile_manifesto.md" >}})
    -   The Agile principles
-   Scrum
-   [Extreme Programming]({{< relref "extreme_programming.md" >}})
-   Lean
    -   Came out of Kanban and Toyota Production system
    -   Methodology
        -   Build - Measure - Learn
    -   Uses Hypothesis Driven Development
        -   Instead of writing work units in terms of the value it will deliver to the customer (stories), just state a hypothesis on how the change will effect a business value measure
    -   Emphasizes early delivery of MVP
-   Dev and Ops
    -   Devs
        -   Work is measured by the velocity (amount of working software delivered)
    -   Ops
        -   Valued and rewarded on the basis of system stability (e.g. uptime or incidents)
    -   Different priorities
        -   Devs have to make decisions that trade off time to delivery and cost of delivery against long-term operability concerns
        -   Devs have to share some accountability for operations and support otherwise short-term thinking is encouraged
-   Security in the Agile world
    -   Different roles need to work together
        -   Devs
            -   Agile teams need to understand the and adopt security best practices
            -   They also need to take responsibility for the security of their system (you build it, you run, you keep it safe &amp; secure!)
        -   Product Owners
            -   Need to give agile teams enough time to implementation security measures
            -   Understand and prioritize security and compliance requirements
        -   Security Professionals
            -   Have a to learn to accepts change, to work faster and more iteratively
            -   Be able to think about security risks, how to manage them in incremental terms
            -   And most important: **Security needs to become an enabler not a blocker**!


## Working with your existing Agile Life Cycle {#working-with-your-existing-agile-life-cycle}

-   Traditional AppSec models
    -   Mostly implemented through gates that have to be passed
        -   Design/requirements review
        -   Architecture review
        -   Code review
        -   Security Testing (Pentests)
    -   Main idea is thats work is delivered in large batches
        -   Because the earlier a defect is detected, the cheaper it is to fix it
        -   However the solution is not the attempt to catch all defects earlier, but to focus on reducing the cost of fixing defects by making change safer and cheaper
-   Agile approach
    -   Security Testing in the [SDLC]({{< relref "sdlc.md" >}})
        -   Security team needs to to own the tools
            -   Responsible for deciding which features the tool should have, that'll is easy to embed in the pipeline and covers the areas that the team is concerned about
        -   Development team owns the implementation of the tools in the pipeline
            -   This means Dev team makes sure the tool is in the pipeline, is configured correctly and the team can act on results.
    -   Building Security teams that enable
        -   Instead of Security teams that do security, once should envision a team that enables security
        -   The teams primary purpose is to build tools, document techniques and build capacity to develop and deploy secure services
        -   Agile teams are measured on what they can enable to happen, rather than the security issues that have blocked them from doing work
        -   On Security Techniques
            -   In an Agile world working software is always valued over documentation
            -   Code always trumps paper
            -   Whenevet possible get security guidelines and checklists directly into code
                -   Secure headers
                -   Secure configuration
                -   Playbooks
                -   Cloud templates
                -   Automated security/compliance with checks that can be plugged into build pipeline and run in production


## Security and Requirements {#security-and-requirements}

-   Closely monitor the backlog for Security related stories
-   Security Stories
    -   Examples
        -   User logs in successfully
            -   What should the user be able to see and do?
            -   What is information should be recorded and where?
        -   User fails to log on because of invalid credentials
            -   What error should the user see?
            -   How many attempts in total?
            -   Which information should be recorded and where?
        -   User forgets credentials
        -   User is not registered
    -   Security Personas/Anti-Personas
        -   Fictional descriptions of different types of people who will use the system
        -   Each persona has a biography, background, experienced, technical skills, goals and preferences
        -   Anti-Personas are the ones who don't follow the normal rules
        -   Write attacker stories
            -   These can be tested using TDD
-   Tools
    -   Owasp ASVS
        -   Define acceptance criteria a
    -   SAFECODE Security Stories
        -   A free list of practical security stories and security tasks for agile development environments
    -   Attack Trees
        -   By Brücke Schneier
        -   Process
            -   Start outlining the goals of an attacker
            -   Then map all possible ways that someone could achieve the action
            -   Iterate over the attack tree and try to cover almost every scenario we can think of
            -   Once we have the tree we can Stadt looking at each node and determine
                -   Likelihood
                -   Cost
                -   Ease of attack
                -   Repeatability
                -   Chance of being able caught
                -   Reward to the attacker
            -   For each node in the tree we can identify the ones with higher risk by calculating the cost-benefit ratio for the attacker
-   Infrastructure and Operations requirements
    -   Metrics
        -   Business analytics
            -   Users and their activity
        -   Compliance
        -   Infosec
            -   Informations for attack monitoring and forensic analysis
        -   Ops
            -   System monitoring
            -   Operational metrics
        -   Development
            -   Application's logs
            -   Debug information
    -   Mapped to [CIA]({{< relref "cia.md" >}})
        -   Packaging and deployment
        -   Monitoring
        -   Secret management
        -   Data archival
        -   Availability
        -   Separation of duties
        -   Logging
-   Other security requirements
    -   Privacy
    -   Fraud protection
        -   Identity management
        -   Separation of duties
        -   Auditing and logging
    -   Regulatory compliance
    -   Encryption
        -   At rest
        -   In transport (SSL /TLS)


## Agile Vulnerability Management {#agile-vulnerability-management}

-   Tools
    -   UpGuard
        -   Continuous Vulnerability Assessment
-   What is to track
    -   Results-oriented from scanners
    -   Static code analysis
    -   Results from pentests and automated security teating
    -   Threat intelligence and vendor alerts
    -   Vulnerabilities in runtime containers and container images
    -   Vulnerabilities in cloud instances and unsafe configurations (using services like AWS Inspector)
    -   Manual code reviews and code audits
    -   Bug reports from partners, users, and other customers
-   How to manage vulns
    -   Tools
        -   Bugblast
        -   Code Dx l
        -   Denim Group's ThreadFix
-   Secure Software Supply Chain
    -   Tools
        -   Sonatype free supply chain costs and risks calculator
-   [Test-Driven Security]({{< relref "test_driven_security.md" >}})
    -   Write test (unit test acceptance test) that checks if a vulnerability has been closed
    -   The test will fail until the vulnerability gets fixed
    -   Tools
        -   GauntIt


## Risk for Agile Teams {#risk-for-agile-teams}

> "Instead of saying no, Security should say" yes, but" or even better "yes, and" and providing guidance and help to carry out the actions in the safest and most secure way possible

-   Threat
    -   What and who you have to protect your assets from
    -   What is could go wrong
    -   What could harm your assets (with disrespectful to [CIA]({{< relref "cia.md" >}}))
    -   Threats are specific
-   Risk
    -   The exposure of assets to threats (probability and costs)
    -   What can you do to reduce this exposure, and the cost trade-offs
    -   Risks are abstract
-   Dealing with risks
    -   Reducing
    -   Avoiding
    -   Acceptin
    -   Sharing or transferring
-   Making risks visible
    -   Continously scanning infra and code, including open source libraries and frameworks
    -   Tracking vulnerabilities and metrics on how they are managed
    -   Measure automated test coverage and code complexity in high-risk code areas
    -   Watch for Security stories and attacker stories in the backlog that have not been implemented
    -   Measure lead time for changes and MTTR (mean time to recovery) for problems in productio; these tell how fast the team can react to an serious problem/incident
    -   Track technical debt on the backlog as stories or using automated tools code anylises tools like SonarQube or Code Climate
-   Risk management and Security in an Agile world
    -   Activities can be done in
        -   Sprint planning
            -   Review and record risks
        -   Story writing
            -   Watch out for stories that add security/privacy/compliance risks
        -   Test writing
            -   Automated security tests and compliance checks
        -   Coding
            -   Use of vetted libraries and common design patterns
        -   Code reviews
            -   Ensure that high-risk code is reviewed for security risks and that all code is scanned using SCA
        -   Refactoring.guru
            -   Reduce technical complexity in code and design through refactoring
        -   Design
            -   Apply threat modeling when high-risk changes are made to to the systems attack surface
        -   Retrospectives
            -   When the team looks for improvement, consider security risks
        -   Post-mortem reviews
            -   Use feedback from failure/incident to examine underlying risks and come up with solutions
-   Quotes

    > "Security is another quality of software, in the same way that performance,
    > quality, efficiency and usability are qualities of the software (in the
    > context of risks and non-functional requirements)


## Threat Assessments and understanding Attacks {#threat-assessments-and-understanding-attacks}

-   Threat actors
-   Threat and attack targets
-   Threat intelligence
    -   To be incorporated into Agile and DevOps feedback loops
-   Threat assessment
    -   Attack-driven defense
        -   Use information from attacks that are underway in production to drive security priorities
    -   Mapping your System's attack surface
        -   Network
        -   Application
        -   Human
-   Threat modeling
    -   Identify trust boundaries between components and
        -   Read more at page 157
    -   Think like a Hacker
        -   STRIDE
            -   Tabelle Seite 159
    -   Has to be done in a lightweight, incremental and iterative way since the in the Agile world the attack surface is constantly changing


## Building Sécure and Usable Systems {#building-sécure-and-usable-systems}

-   Different controls can be implementers in order to secure the system
    -   Technical controls
        -   They mostly address low-hanging fruits or specific edge cases
        -   They should be part of a wider, more holistic approach to secure your system
        -   Types
            -   Deterrent
                -   They make clear to people what will happen if they attack your system
            -   Resistive
                -   Designed to slow down an attacker, not stop them
                -   This also leads to frustration of attackers
                -   These can also be code obfuscation, generic error messages and responsive session management
            -   Protective
                -   Prevent an attack from occurring
                -   These include firewalls, ACLs, IP restrictions
            -   Detective
                -   Merely detect an intrusion
                -   These can be log audit, honeypots, traffic glow graphs or even CPU load for abnormalities
            -   Compensating
                -   2FA combined with of monitoring of location to detect abuse l
-   Security Architecture
    -   Perimeterless Security
        -   Because to much depends on trust boundaries or a few perimeters
        -   Instead systems should be built so that they not assume other points (outside their trust boundaries) are trustworthy
            -   Zero Trust Network
                -   [BeyondCorp]({{< relref "beyondcorp.md" >}})
                -   Book: Zero Trust Networks - Building Trusted Systems in Untrusted Networks
        -   Everything on the network has to be protected against outside attackers or insiders
            -   Reassess and audit-identity at every point
                -   Always prove identity through
                    -   Time-sensitiv Tokens
                    -   Use of authentication server
                    -   Use of Crypto safe keys
            -   Use TLS for network communication
            -   Revalidate and check inputs from core services and other services
                -   Validate all headers
                -   And every field of every request
            -   Enforce ACLs for data / API access
            -   Treat all sensitive data as toxic
            -   Log traffic at each point
            -   Harden all runtimes (OS, VMs, containers, databases)
            -   Use circuit breakers and bulkheads to contain runtime failures and to minimize the blast radius of a security breach
                -   These are stability patterns from Michael Nygard's book "Release it!"
                -   Example: Netflix's Hystrix
            -   Use containers to manage and protect services
            -   Use a secure key management for storing private keys and other secrets
    -   Complexity and Security

        > "You can't secure what you don't understand" - Bruce Schneier


## Code Reviews and Security {#code-reviews-and-security}

-   Resources for coding guidelines
    -   Google's coding guidelines for differentiate languages
    -   CERT coding standards
    -   Microsoft's secure  .NET coding guidelines
    -   Oracle's Java SE coding guidelines
    -   OWASP Sécure Coding Practices
    -   Mozilla's Web Application Secure Coding Guidelines
-   Alternative to [SCA]({{< relref "sca.md" >}})
    -   IAST (Interactive or Instrumented Application Security Testing)
    -   RASP (Runtime Application Self-Protection)
-   More about refactoring
    -   Books
        -   [The Clean Code]({{< relref "the_clean_code.md" >}}) by Bob Martin
        -   Refactoring: Improving the Design of Existing Code (Kent Beck and Martin Fowler)
        -   Working Effectively with Legacy Code

> "All Input is Evil"


## Agile Security Testing {#agile-security-testing}

-   Up to half of software vulnerability are caused by simple coding mistakes
    -   Apple Goto Fail
-   Get off the happy path
    -   But attackers don't stay on the happy path l
    -   That's why a Hacker mindset is important
-   [BDD]({{< relref "bdd.md" >}})
    -   Integration tests l
    -   Service level tests against the APIs
    -   Tools
        -   GauntIt
        -   BDD-Security
-   Where Security Testing fits into your Pipeline