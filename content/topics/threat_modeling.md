+++
title = "Threat Modeling"
author = ["hermes"]
draft = false
+++

## Resources {#resources}


### General {#general}

-   2023-01-04 ◦ [OWASP Risk Rating Methodology | OWASP Foundation](https://owasp.org/www-community/OWASP_Risk_Rating_Methodology)
-   2022-12-13 ◦ [Threat Modeling Process | OWASP Foundation](https://owasp.org/www-community/Threat_Modeling_Process)
-   2022-12-13 ◦ [How to approach threat modeling | AWS Security Blog](https://aws.amazon.com/blogs/security/how-to-approach-threat-modeling/)
-   2022-11-30 ◦ [THREAT MODELING IN 2021 with Adam Shostack](https://www.youtube.com/watch?v=7jB5OS6mepU&ab_channel=DevSecCon-)
-   2022-11-29 ◦ [Threat Modeling - OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html)
-   2022-11-10 ◦ [Threat Model Examples](https://github.com/TalEliyahu/Threat_Model_Examples)


### STRIDE {#stride}

-   2022-12-14 ◦ [OWASP STRIDE reference sheets](https://owasp.org/www-pdf-archive/STRIDE_Reference_Sheets.pdf)
-   2022-11-30 ◦ [The STRIDE threat model with examples](https://dr-knz.net/stride-threat-model-with-examples.html)
-   2022-11-29 ◦ [STRIDE Threat Modelling vs DREAD Threat Modelling](https://haiderm.com/stride-threat-modelling-vs-dread-threat-modelling/)


### Blockchains {#blockchains}

-   2022-11-21 ◦ [[1903.03422] ABC: A Cryptocurrency-Focused Threat Modeling Framework](https://arxiv.org/abs/1903.03422)
-   2022-11-21 ◦ [Threat Modeling for the Blockchain — Howard Poston](https://www.howardposton.com/blog/threat-modeling-for-the-blockchain)


### Docker {#docker}

-   2023-01-11 ◦ [Docker Threat Model - CloudSecDocs](https://cloudsecdocs.com/container_security/theory/threats/docker_threat_model/)


### LLM systems {#llm-systems}

-   2026-07-02 ◦ [Prompt Injection as Role Confusion (Ye et al.)](https://arxiv.org/html/2603.12277v6) — [Prompt injection]({{< relref "prompt_injection.md" >}}) as a threat class for LLM-based systems: adversaries embed malicious instructions in low-privilege content (web pages, emails, tool outputs); the root mechanism is [role confusion]({{< relref "role_confusion_llm.md" >}}) — models perceive roles by text style rather than structural tags, defeating [instruction hierarchy]({{< relref "instruction_hierarchy.md" >}}) defenses; role probes can detect the attack before generation
