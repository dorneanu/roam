+++
title = "Wiki Index"
author = ["Dorneanu"]
tags = ["wiki", "index"]
draft = false
+++

Content-oriented index of all wiki topic pages, organized by domain.
Updated automatically on every ingest.


## Software Engineering {#software-engineering}

-   [Hyrum's Law]({{< relref "hyrum_law.md" >}}) — with enough API users, all observable behaviors become implicit contracts regardless of the documented spec; the engineering equivalent of entropy
-   [Psychological safety]({{< relref "psychological_safety.md" >}}) — the shared belief that the team is safe for interpersonal risk-taking; the single most important factor in effective team performance (Google Project Aristotle)
-   [Trunk-based development]({{< relref "trunk_based_development.md" >}}) — single-branch version control strategy where all commits go to trunk continuously; long-lived branches are an anti-pattern; key DORA predictor of high-performing engineering organizations
-   [Software Engineering]({{< relref "software_engineering.md" >}}) — collected principles, practices, and insights on building software well; includes SE@Google and other canonical sources
-   [Software Architecture]({{< relref "software_architecture.md" >}}) — shape given to a system through component division and arrangement; goals: leave options open, minimize cost, maximize maintainability
-   [Software System]({{< relref "software_system.md" >}}) — notes on system design patterns, boundaries, and composition strategies
-   [Software Architect]({{< relref "software_architect.md" >}}) — role, responsibilities, and skills of the software architect; contrast with developer
-   [SOLID]({{< relref "solid.md" >}}) — five object-oriented design principles (SRP, OCP, LSP, ISP, DIP) for arranging functions and data structures into cohesive, decoupled units
-   [DDD]({{< relref "ddd.md" >}}) — Domain-Driven Design: ubiquitous language, bounded contexts, aggregates, and entities as tools for aligning code with the business domain
-   [Microservices]({{< relref "microservices.md" >}}) — architectural style decomposing applications into small, independently deployable services; each does one thing and communicates over the network
-   [Git]({{< relref "git.md" >}}) — distributed version control; branching strategies, workflows, and internals
-   [Terraform]({{< relref "terraform.md" >}}) — infrastructure-as-code tool for provisioning cloud resources declaratively; state management and module patterns


## Security {#security}

-   [Zero Trust]({{< relref "zero_trust.md" >}}) — security model that eliminates implicit network trust; every request verified regardless of origin; replaces perimeter-based defenses
-   [Cloud Security]({{< relref "cloud_security.md" >}}) — network, identity, and data protection patterns specific to cloud environments
-   [XSS]({{< relref "xss.md" >}}) — Cross-Site Scripting: attacker injects scripts into trusted pages that execute in victims' browsers; impact, types, and prevention techniques
-   [OAuth]({{< relref "oauth.md" >}}) — authorization framework delegating resource access via tokens without sharing credentials; OAuth 2.0 flows and RFCs
-   [Scaling Static Analyses at Facebook]({{< relref "nitric_oxide.md" >}}) — lessons from deploying static analysis at scale: integrate into CI, fix over time, trust signal matters more than volume
-   [Lessons from building static analysis tools at Google]({{< relref "lessons_from_building_static_analysis_tools_at_google.md" >}}) — practical learnings on false positives, developer trust, and incremental rollout from Google's static analysis program


## AI / Machine Learning {#ai-machine-learning}

-   [AI]({{< relref "ai.md" >}}) — collected resources and notes on artificial intelligence, LLMs, and AI tooling
-   [LLM wiki]({{< relref "llm_wiki.md" >}}) — Karpathy's pattern for an LLM-maintained knowledge base: immutable raw sources, LLM-generated wiki pages, and a schema file; ingest/query/lint operations; stateful alternative to RAG at personal/small-team scale
-   [Claude Code]({{< relref "claude_code.md" >}}) — Anthropic's AI coding CLI; .claude/ as version-controlled team infrastructure (CLAUDE.md conventions, shared slash commands, settings hooks); home of the Planner-Generator-Evaluator pattern
-   [Planner-Generator-Evaluator pattern]({{< relref "planner_generator_evaluator.md" >}}) — agentic design pattern decomposing LLM coding workflows into Planner (brief→spec), Generator (sprint-by-sprint implementation), and Evaluator (live-app grading against hard thresholds)


## Productivity {#productivity}

-   [Deep Work]({{< relref "deep_work.md" >}}) — cognitively demanding work performed in distraction-free states; essential for acquiring new skills and producing rare, valuable output (Cal Newport)
-   [GTD]({{< relref "gtd.md" >}}) — Getting Things Done: capture all open loops, process into actionable next steps, review weekly; reduces cognitive load and stress
-   [Multi-scale planning]({{< relref "multi_scale_planning.md" >}}) — planning at monthly/quarterly, weekly, and daily scales simultaneously; plans are flexible, not rigid commitments
-   [Boredom]({{< relref "boredom.md" >}}) — tolerating boredom is a prerequisite for deep work; scheduling internet use and productive meditation as training tools
-   [Attention Economy]({{< relref "attention_economy.md" >}}) — business model that monetizes human attention; design patterns that exploit compulsive behavior; strategies for defensive consumption
-   [Second Brain]({{< relref "second_brain.md" >}}) — externalizing knowledge and ideas into a trusted digital system to reduce cognitive load and enable creative connections
-   [Zettelkasten]({{< relref "zettelkasten.md" >}}) — slip-box note-taking method; atomic notes linked by ideas rather than hierarchy; foundation of the second brain approach
-   [org-roam]({{< relref "org_roam.md" >}}) — Emacs package implementing a Zettelkasten over org-mode files; ID-based bidirectional links and backlinks


## Psychology {#psychology}

-   [ELIZA effect]({{< relref "eliza_effect.md" >}}) — the tendency to project emotional depth onto machines that simulate listening; foundational case study in human-AI interaction from Weizenbaum's 1966 chatbot to contemporary AI companions (Turkle)
-   [Phubbing]({{< relref "phubbing.md" >}}) — "phone snubbing": maintaining eye contact while texting; the ambient phone effect degrades conversation quality even when the phone is silent and face-down; dictionary-recognised cultural marker of normalised divided attention (Turkle)
-   [Safetyism]({{< relref "safetyism.md" >}}) — cultural tendency to prevent all discomfort and risk for children, producing more anxiety and less resilience
-   [Mean world syndrome]({{< relref "mean_world_syndrome.md" >}}) — Gerbner's concept: heavy media consumption inflates perceived danger far beyond actual risk levels
-   [Overparenting]({{< relref "overparenting.md" >}}) — excessive parental supervision and control that produces higher anxiety, depression, and learned helplessness
-   [Learned helplessness]({{< relref "learned_helplessness.md" >}}) — passivity and loss of agency produced when effort is repeatedly shown not to matter
-   [Autonomy-supportive coaching]({{< relref "autonomy_supportive_coaching.md" >}}) — leadership style that gradually transfers control to the learner, building intrinsic motivation and resilience
-   [Unstructured play]({{< relref "unstructured_play.md" >}}) — child-directed unsupervised play essential for conflict resolution, risk assessment, and emotional regulation


## Health {#health}

-   [Free-range parenting]({{< relref "free_range_parenting.md" >}}) — granting children age-appropriate independence and unsupervised exploration to support healthy development
-   [Phone-based childhood]({{< relref "phone_based_childhood.md" >}}) — the 2010–2015 transition from play-based to screen-based adolescent life and its four foundational harms: social deprivation, sleep deprivation, attention fragmentation, and addiction
-   [Antifragility]({{< relref "antifragility.md" >}}) — Taleb's concept applied to child development: children need exposure to manageable challenge, risk, and failure to grow strong; protection from all difficulty produces fragility, not safety
-   [Social comparison]({{< relref "social_comparison.md" >}}) — chronic upward comparison fueled by social media; the primary mechanism by which Instagram and TikTok harm girls' mental health during puberty
-   [Gaming addiction]({{< relref "gaming_addiction.md" >}}) — internet gaming disorder affecting ~7% of adolescent boys (1 in 13); four-group taxonomy (addicted, problematic, engaged, casual); opportunity cost and friendship recession as harms for non-addicted heavy users
-   [Pornography and adolescent harm]({{< relref "pornography_adolescent_harm.md" >}}) — online pornography as a prestige-hijacking harm for boys during the sensitive period for sexual development; Swedish prevalence data, 5:1–10:1 male addiction ratio, interpersonal satisfaction decline
-   [Anomie]({{< relref "anomie.md" >}}) — Durkheim's normlessness concept applied to Gen Z: departure from stable real-world communities into anonymous shifting networks produces purposelessness, despair, and suicide; hikikomori and NEET as downstream outcomes
-   [Sociogenic illness]({{< relref "sociogenic_illness.md" >}}) — illness spread by social transmission rather than pathogens; social media amplifies this via emotional contagion, prestige bias, and audience capture; explains rapid spread of tic disorders, DID, and anxiety among adolescent girls
