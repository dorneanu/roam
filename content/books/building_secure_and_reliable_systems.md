+++
title = "Building Secure and Reliable Systems"
date = 2022-09-01
tags = ["sre", "security", "book"]
draft = false
+++

## Intersection of Security and Reliability {#intersection-of-security-and-reliability}

> There are many lively active discussions in the industry about security engineers becoming
> more like software developers, and SREs and software developers becoming more like
> security engineers.


### Security vs privacy {#security-vs-privacy}

> Security and privacy are closely related concepts. In order for a system to respect user
> privacy, it must be fundamentally secure and behave as intended in the presence of an
> adversary. Similarly, a perfectly secure system doesn’t meet the needs of many users if it
> doesn’t respect user privacy


## <span class="org-todo todo TODO">TODO</span> Understanding adversaries {#understanding-adversaries}


### Attack motivations {#attack-motivations}

> Therefore, we can consider the purpose of attacks through the eyes of the people
> who carry them out. Doing so may better equip us to understand how we should
> respond, both proactively (during system design) and reactively (during
> incidents). Consider the following attack motivations:
>
> -   Fun
>     -   To undermine the security of a system for the sheer joy of knowing it can be done.
> -   Fame
>     -   To gain notoriety for showing off technical skills.
> -   Activism
>     -   To make a point or broadcast a message—typically, a political viewpoint— widely.
> -   Financial gain
>     -   To make money.
> -   Coercion
>     -   To get a victim to knowingly do something they don’t want to do.
> -   Manipulation
>     -   To create an intended outcome or change behavior—for example, by publishing false data (misinformation).
> -   Espionage
>     -   To gain information that might be valuable (spying, including industrial espionage). These attacks are often performed by intelligence agencies.
> -   Destruction
> -   To sabotage a system, destroy its data, or just take it offline


### Threat modelling (insider risk) {#threat-modelling--insider-risk}

[Threat Modeling]({{< relref "../../topics/threat_modeling.md" >}})

> Threat modeling insider risk Numerous frameworks exist for modeling insider
> risk, ranging from simple to highly topic-specific, sophisticated, and detailed.
> If your organization needs a simple model to get started, we have successfully
> used the framework in Table 2-2. This model is also adaptable to a quick
> brainstorming session or fun card game. Table hier


### Mitigations against insider risk {#mitigations-against-insider-risk}

> We have found a few concepts to be particularly effective when thinking about insider risk:
>
> -   Least privilege
>     -   Granting the fewest privileges necessary to perform job duties, both in terms of scope and duration of access. See Chapter 5.
> -   [Zero trust]({{< relref "../../topics/zero_trust.md" >}})
>     -   Designing automated or proxy mechanisms for managing systems so that insiders don’t have broad access that allows them to cause harm. See Chapter 3.
> -   Multi-party authorization
>     -   Using technical controls to require more than one person to authorize sensitive actions. See Chapter 5.
> -   Business justifications
>     -   Requiring employees to formally document their reason for accessing sensitive data or systems. See Chapter 5.
> -   Auditing and detection
>     -   Reviewing all access logs and justifications to make sure they’re appropriate. See Chapter 15.
> -   Recoverability
>     -   The ability to recover systems after a destructive action, like a disgruntled employee deleting critical files or systems. See Chapter 9
