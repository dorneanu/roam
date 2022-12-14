+++
title = "Zero Trust"
draft = false
+++

## Articles {#articles}

-   2022-12-06 ◦ [Zero-trust architecture: Why trusting no one is a smart way to protect your IT infrastructure | Enable Architect](https://www.redhat.com/architect/zero-trust-architecture)
-   2022-09-21 ◦ [Zero-trust security: What architects need to know | Enable Architect](https://www.redhat.com/architect/what-is-zero-trust)
-   2022-09-28 ◦ [From Zero to One Hundred - ACM Queue](https://queue.acm.org/detail.cfm?id=3561799)
    -   also found [here](https://www.reddit.com/r/netsec/comments/xn53z7/zero_trust_from_zero_to_one_hundred/)


### [From Zero To One Hundred](https://queue.acm.org/detail.cfm?id=3561799) {#from-zero-to-one-hundred}

> Firewalls were applied to create a strong **perimeter around enterprise networks**;
> however, once inside the perimeter, an attacker can easily move through a
> company's intranet. With the increasing adoption of mobile and cloud
> technologies, a singular perimeter is becoming more difficult to enforce. With
> **new attack vectors and technological changes, perimeter-based security models
> are moving toward obsolescence**

<!--quoteend-->

> The core ideas behind zero trust were first given major consideration in 2004.
> The Jericho Forum recognized that traditional security practices were quickly
> becoming inadequate as a result of increasing numbers of endpoints and device
> mobility requirements.3 Firewalls, antivirus, and IDS (intrusion detection
> system) did not consider the threat from within the network. The initial term
> used was **de-perimeterization**, which focused on strengthening internal defenses
> and placing less emphasis on the external boundary. In 2007, the Jericho Forum
> published "commandments" that outlined principles and practices necessary for
> de-perimeterization.

<!--quoteend-->

> It was not until **John Kindervag from Forrester Research**, Inc. introduced the
> **concept of zero trust and ZTA** (zero trust architecture) in 2010 that these ideas
> truly caught

<!--quoteend-->

> It requires that all **actors within a network be treated as if they could pose a
> threat**, because they really do. Enterprise resources should be protected
> individually and subjects accessing these resources should be constantly
> evaluated to ensure they are not a threat

<!--quoteend-->

> According to one of Forrester's seminal reports, **three core concepts** enable zero
> trust:
>
> -   All resources must be accessed securely;
> -   strict access control based on least privilege must be enforced;
> -   and all traffic must be inspected and logged

<!--quoteend-->

> A more recent definition from Jason Garbis and Jerry W. Chapman does a better
> job of explaining the core concepts enabling zero trust:
>
> A zero trust system is an integrated **security platform** that uses **contextual
> information** from **identity, security and IT Infrastructure**, and risk and
> analytics tools to inform and enable the dynamic enforcement of security
> policies uniformly across the enterprise. Zero trust **shifts security** from an
> **ineffective perimeter-centric model to a resource and identity-centric model**. As
> a result, organizations can continuously adapt access controls to a changing
> environment, obtaining improved security, reduced risk, simplified and resilient
> operations, and increased business agility.

<!--quoteend-->

> The zero trust mindset brings several benefits that are motivating enterprises
> to consider adopting it. Zero trust requires that all employees take an active
> role in the security of an organization. **With the increased prevalence of remote
> work, it is more important than ever that these workers be made aware of good
> security hygiene**. An organization that commits to zero trust will likely try to
> increase organizational awareness of security and drive acceptance of zero
> trust.17 This will have the knock-on benefit of forcing organizations to educate
> their employees about security. A more security-aware workforce will be a
> natural by-product of zero trust adoption

<!--quoteend-->

> The final major people-centric driver of zero trust is management support.
> Senior decision-makers can be more easily convinced to take on zero trust
> initiatives because they can lead to long-term cost savings. Legacy networks
> often require a multitude of vendors, technologies, and solutions to ensure that
> they remain secure. More time, money, and staffing are necessary to support
> these complex networks. Consolidating these controls into a more uniform and
> extensible zero trust solution means that vendor, management, and upkeep costs
> can be reduced more easily

<!--quoteend-->

> The open-ended nature of zero trust will **enable greater extensibility** to ensure
> organizations can freely adapt their security to the threat landscape.
> Extensibility by design is further aided by zero trust's emphasis on data
> collection and auditing. This allows enterprises to view information required to
> make informed decisions about secure process adjustments.6 Collectively, this
> serves to reduce future costs and increase an organization's agility

<!--quoteend-->

> Zero trust also has the potential to have a significant impact on the way
> enterprises use technology. **Networks can be greatly simplified and split into
> modular segments, reducing maintenance and upgrade costs**. Rather than continue
> managing the patchwork of devices and protocols across the whole network,
> individual segments can be implemented one at a time. This way the entire
> network need not be changed every time an upgrade is required

<!--quoteend-->

> Segmentation also allows flexibility in different parts of the network. An IoT
> network may require a different security configuration than a network supporting
> cloud applications. **Segmentation provides flexibility in implementing individual
> segments without compromising the overall needs of a zero trust network**.6
> Industry regulations, such as PCI DSS (Payment Card Industry Data Security
> Standard) require only that the relevant segmented area meets all the specific
> regulations. **A properly segmented network means that the focus on compliance can
> be limited to the segments that require it**

<!--quoteend-->

> **NIST SP 800-207** suggests a complete audit of network components, data sources, actors, and enterprise assets such as managed devices

<!--quoteend-->

> **IAM** (identity and access management) **is a necessity in any proper zero trust
> system**. Poor management of user groups and disparate identity providers can lead
> to significant difficulties while implementing zero trust. Zero trust policies
> leverage identity attributes and user groups to grant access to resources safely
> and reliably. **Zero trust could be the catalyst for improving IAM practices**, but
> this **still means that an enterprise needs to address these problems if it is to
> proceed with zero trust**

<!--quoteend-->

> Adopting a zero trust approach to cybersecurity is a high-risk, high-reward
> option for an enterprise. Correctly envisioned, zero trust offers a myriad of
> security improvements, an improved cultural mindset toward security, cost
> savings, and a highly extensible starting point for adding further enhancements.
> While the benefits are significant, it should be noted that zero trust needs to
> be an ongoing effort, and transitioning to a zero trust approach can be a long
> and arduous process. **Recommendations for an enterprise looking to adopt zero
> trust should follow the PPT template**.

<!--quoteend-->

> **NIST SP 800-207** provides an effective way to transition from a perimeter-based network. The key steps are:
>
> • Identifying actors who will use the system
> • Identifying enterprise assets
> • Identifying key processes and evaluating risks associated with executing process
> • Formulating policies for the ZTA candidate
> • Identifying candidate solutions
> • Planning for initial deployment and monitoring
> • Expanding ZTA

<!--quoteend-->

> As a whole, zero trust brings few new security principles to bear, but more
> importantly provides an approach to get the most out of what cybersecurity
> professionals already consider **good practice**. **Least privilege, strong
> authentication and access control, segmentation, defense in depth, and extensive
> logging and auditing** are all existing practices that zero trust puts together
> with a cohesive goal in mind

<!--quoteend-->

> A **PE (policy engine)** is located before the protected resources and makes the
> final decision regarding a subject's access to a given resource. A PE is paired
> with a **PA (policy administrator)**, which is responsible for carrying out access
> decisions. It will signal to the **PEP (policy enforcement point)** that a session
> be created or destroyed
>
> The PEP acts as the gateway and manages the actual sessions between an entity
> and a resource. As these are logical components, the specific implementation
> details can vary, sometimes having a single device play multiple roles.18 Many
> of these components also feed data into a data-acquisition network, which
> interacts with a variety of security policies, tools, and databases such as:
>
> • Access policy
> • SIEM (security information and event management)
> • CDM (continuous diagnostics and mitigation) programs
> • User databases
> • PKI (public-key infrastructure)
> • IDMS (integrated database management system)
> • Compliance databases
> • Activity logs
