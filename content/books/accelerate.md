+++
title = "Accelerate"
date = 2021-10-01
tags = ["book"]
draft = false
+++

## Accelerate {#accelerate}


### Description {#description}

-   Building and Scaling High-Performing Technology Organizations
-   organizations should focus on [capabilities, rather than maturity](#capabilities-vs-maturity)
-   Research has found 24 key capabilities that drive improvement in [software delivery performance](#software-delivery-performance)
    -   The capabilities were classified into these categories
        -   Continuous Delivery (CD)
        -   Architecture / [Architectural characteristics](#architectural-characteristics)
            -   architectural decissions and effective architecture enable teams to easily test and deploy individual components/services also when the organization grows or the amount of services changes
            -   architectural characteristics rather than implementation details were more important
        -   Product and process
        -   [Lean Management](#lean-product-development-practices) and monitoring
        -   Culture
            -   [Culture by Westrum](#culture-by-westrum)
            -   [Types of culture](#types-of-culture)
    -   Low-performers
        -   were more likely to use a custom software developed by another company
        -   were more likely to work on mainframe systems
    -   in the rest of the cases there was no correlation between [system type](#types-of-systems) and [delivery performance](#software-delivery-performance)
-   also check [my latest blog post for a full summary](https://blog.dornea.nu/2021/11/24/book-review-accelerate-the-science-of-lean-software-and-devops/)
-   Mindmap

{{< figure src="/ox-hugo/plantuml-34NyQd.png" >}}


## Notes {#notes}


### Architectural characteristics {#architectural-characteristics}

-   High-performers focus on deployability and testability
-   those who agreed with these statements were more likely to be in the high-performing group
    -   We can do most of our testing without requiring an integrated environment &gt; We can and do deploy or release our application independently of other applications/services it depends on
-   to achieve this systems have to be , use , have a
    -   this enables scaling


### Capabilities vs Maturity {#capabilities-vs-maturity}

-   Capabilities vs. Maturity
    -   Why focusing on maturity is bad
        -   the overall improvement of an organization does not follow a continuous improvement paradigm
            -   once orgs arrive at a mature state, they declare themselves done with their journey
            -   by following maturity models, orgs don't adapt to technological changes and in the business landscape
            -   innovative companies and highest-performing orgs are always striving to be better and never consider themselves "mature" or "done"
        -   there is a lock-step or a linear formular
            -   similar set of technologies or capabilities are prescribed for every set of teams and orgs in order to progress
            -   however, by focussing on capabilities you allow different parts of the org to take a customized approach to improvement
                -   and focus on capabilities that will give them the most benefit based on their current context, own systems, own goals, own constraints
        -   maturity models measure technical proficiency or
            -   no focus on outcomes
            -   these "vanity metrics" don't tell anything about the impact they have on the business
            -   capabilities however focus on key outcomes
                -   this provides technical leadership with clear direction and strategy on high-level goals
                -   also enables team leaders and individual contributors to have goals related to the capabilities their team is focussing on
        -   maturity models define a static level of technological, process, and organizational abilities to achieve
            -   they don't take into account the ever-changing nature of technology and business
            -   what is good enough and high-performing today is no longer good enough in the next year
    -   orgs should focus on capabilities in order to continuously drive improvement
        -   they also focus on the right capabilities (outcomes based) and thus allowing them to develop and deliver software with improved speed and stability


### Culture by Westrum {#culture-by-westrum}

-   model defined by socioligist Ron Westrum on importance of "organizational culture"
    -   he has been researching human factors in system safety
        -   also in the context of accidents in technological domains that were highly complex and risky (aviation and healthcare)
    -   org culture predicts how information flows through an organization
-   Typology of organizational cultures (Westrum 2004)
    -   pathological (power-oriented)
        -   characterized by large amounts of fear and threat
        -   information is not made transparent and/or is withhold for political reasons
    -   Bureaucratic (rule-oriented)
        -   protect departments
        -   those in the department want to maintain their turf (area)
        -   insist on their own rules
        -   do things by their book
    -   Generative (performance-oriented)
        -   focus on the mission
        -   everything is focused on good performance, to doing what is supposed to do
-   Characteristics of good information
    -   provides answers to the questions the receivers needs answered
    -   it is timely
    -   presented in such a way that it can be effectively used by the receiver
-   also check [Google's DevOps Guide](https://cloud.google.com/architecture/devops/devops-culture-westrum-organizational-culture)


### Infosec {#infosec}

-   have security part of software building process
-   high-performers were spending 50% less time remediating issues than low performers
-   [DevOps]({{< relref "../../topics/devops.md" >}}) should be extended to cover security concerns
    -   DevSecOps
    -   Rugged [DevOps]({{< relref "../../topics/devops.md" >}})
        -   Combination of [DevOps]({{< relref "../../topics/devops.md" >}}) and Rugged Manifesto


### Lean product development practices {#lean-product-development-practices}

-   Work in small batches
    -   less than 1 week work
    -   release frequently
    -   use of MVPs
-   Make flow of work visible
    -   make visible how features actually reach the customers
    -   status of producst/features
-   Gather and implement customer feedback
    -   actively and regularly seek customer feedback
    -   incorporate feedback into design of products
-   Team experimentation
    -   create and change specifications as part of the development process without requiring approval


### Software Delivery Performance {#software-delivery-performance}

-   Lead Time
-   Deployment Frequency
-   Mean Time to Restore (MTTR)
-   Change Fail Percentage


### Transformational Leadership {#transformational-leadership}

-   leadership is about inspiring and motivating those around you
-   a good leader affects a team's ability to
    -   deliver code
    -   architect good systems
    -   apply [Lean product development practices](#lean-product-development-practices)
-   characteristics of a transformational leader (Rafferty and Griffin 2004)
    -   vision
        -   has clear understanding where the currently the org is and where it should be in the next 5 years
    -   inspirational communication
        -   inspires and motivates, even in an uncertain or changing environment
    -   intellectual stimulation
        -   challenges followers to think about problems in new ways
    -   Supportive leadership
        -   demonstrates care and consideration
    -   Personal recognition
        -   praises and acknowledges achievement of goals/improvements in work quality


### Types of culture {#types-of-culture}

-   culture can exist at 3 levels (Schein 1985)
    -   basic asumptions
        -   are formed over time
        -   relantionships, events, activities
        -   are not really "visible"
    -   values
        -   are more "visible"
        -   they often define the "culture" inside an organization
        -   also see [Culture by Westrum](#culture-by-westrum)
    -   artifacts
        -   the most visible
        -   mission statements
        -   creeds
        -   technology
        -   formal procedures
        -   heroes, rituals


### Types of systems {#types-of-systems}

-   Greenfield: new systems that have not yet been released
-   Systems of engagement (used directly by end users)
-   Systems of record (used to store business-critical information where data consistency and integrity is critical)
-   Custom software developed by another company
-   Custom software developed in-house
-   Packaged, commercial off-the-shelf software
-   Embedded software that runs on a manufactured hardware device
-   Software with a user-installed component (including mobile apps)
-   Non-mainframe software that runs on servers operated by another company
-   Non-mainframe software that runs on our own servers
-   Mainframe software


## Quotes {#quotes}


### Accelerate - Note 1 {#accelerate-note-1}

> Business as usual is no longer enough to remain competitive. Organizations in all industries, from finance and banking to retail, telecommunications, and even government, are turning away from delivering new products and services using big projects with long lead times. Instead, they are using small teams that work in short cycles and measure feedback from users to build products and services that delight their customers and rapidly deliver value to their organizations. These high performers are working incessantly to get better at what they do, letting no obstacles stand in their path, even in the face of high levels of risk and uncertainty about how they may achieve their goals.
>
> At the heart of this acceleration is software.


### Accelerate - Note 2 {#accelerate-note-2}

> Technology leaders need to deliver software quickly and reliably to win in the market. For many companies, this requires significant changes to the way we deliver software. The key to successful change is measuring and understanding the right things with a focus on capabilities—not on maturity.