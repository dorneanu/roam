+++
title = "BeyondCorp"
draft = false
+++

> BeyondCorp is Google's implementation of the zero trust security model that
> builds upon eight years of building zero trust networks at Google, combined with
> ideas and best practices from the community. By shifting access controls from
> the network perimeter to individual users and devices, BeyondCorp allows
> employees, contractors, and other users to work more securely from virtually any
> location without the need for a traditional VPN. -- [BeyondCorp at Google](https://cloud.google.com/beyondcorp)


## [Beyond Corp: A new approach to enterprise security](https://research.google/pubs/pub43231/) {#beyond-corp-a-new-approach-to-enterprise-security}

-   The perimeter security model is often compared to a medieval castle
-   access depends solely on device and user credentials, regard-less of a user’s network location—be it an enterprise location, a home network, or a hotel or coffee shop


## [Beyond Corp: Design to Deployment at Google](https://research.google/pubs/pub44860/) {#beyond-corp-design-to-deployment-at-google}

-   access policies are based on information about a device, its state, and its associated user
-   use of X.509 certificates as a persistent device identifier


## [Beyond Corp: The Access proxy](https://research.google/pubs/pub45728/) {#beyond-corp-the-access-proxy}

-   Google implemented a centralized policy enforcement front-end Access Proxy (AP) to handle coarse-grained company policies.
-   implemented for HTTP and [SSH]({{< relref "ssh.md" >}})
    -   wrap [SSH]({{< relref "ssh.md" >}}) traffic in HTTP over TLS (by using ProxyCommand)
    -   they developed a local proxy, similar to Corkscrew
-   The main components of Google’s front-end infrastructure are a f leet of HTTP/HTTPS reverse proxies called Google Front Ends
-   authentication:
    -   support OAUTH, OpenID connect and custom protocols
-   authorization:
    -   ACL engine queryable via RPCs