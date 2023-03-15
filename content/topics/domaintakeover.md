+++
title = "Domain Takeover"
draft = false
+++

Basic scenario for hijacking:

-   The domain `test.disloops.com` is a `CNAME` record that points to disloops.com
-   The `disloops.com` domain is set up to use a distribution.
-   Because `test.disloops.com` was not added to the "Alternate Domain Names (CNAMEs)" field for the distribution, requests to `test.disloops.com` will fail.
-   Another user can create a distribution and add test.disloops.com to the "Alternate Domain Names (CNAMEs)" field to hijack the domain.


## CNAME in context of CFN {#cname-in-context-of-cfn}

> Before diving into the details, it is important to clarify that a alternate domain name (CNAME) i\*s not the same thing\* as the authoritative DNS domain name or canonical name, also known as a CNAME. These two entries are related by nature of establishing a link between two different entities, but each entry is separate and distinct from each other. The alternate domain name (CNAME) on a distribution allows you to serve your content using a custom CNAME from your DNS records, such as www.example.com, instead of the default domain that assigns, such as d123456abcdef8.cloudfront.net. Only the CNAME from your authoritative DNS records actually controls where your domain's traffic is pointed to and from which endpoint your traffic will be served to your end users.


## Remediations {#remediations}

| Service type | Remediation                                                                                                                                                                                                                                                                                                              |
|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|              | `The specified bucket does not exist`                                                                                                                                                                                                                                                                                    |
|              | not vulnerable anymore ([official statement](https://aws.amazon.com/blogs/networking-and-content-delivery/continually-enhancing-domain-security-on-amazon-cloudfront/)){.tc-tiddlylink-external rel="noopener noreferrer" target=“_blank”}, [github issue](https://github.com/EdOverflow/can-i-take-over-xyz/issues/29)) |


## Resources {#resources}

-   2023-03-15 ◦ [A comprehensive synopsis of 217 subdomain takeover reports](https://www.cyjax.com/2022/10/24/a-comprehensive-synopsis-of-217-subdomain-takeover-reports/)
