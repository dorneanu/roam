+++
title = "Software Engineering at Google"
author = ["Titus Winters", "Tom Manshreck", "Hyrum Wright"]
date = 2026-04-28
tags = ["book", "softwareengineering", "google"]
draft = false
+++

👉 <https://www.goodreads.com/book/show/48816586-software-engineering-at-google>


## Part I: Thesis {#part-i-thesis}


### Ch 1: What Is Software Engineering? {#ch-1-what-is-software-engineering}

-   The core distinction
    -   "**Software engineering is programming integrated over time**" — programming produces code; [software engineering]({{< relref "../../topics/software_engineering.md" >}}) adds
        maintenance, modification, and sustainability over a lifespan
    -   The multiperson, multiversion nature adds team/scale complexity on top
-   Time and Change
    -   Code lifespan varies by ~100,000x (hours to decades) — best practices differ radically at each end
    -   A project is sustainable if it can react to change for its expected lifetime; you don't have to change, but you need
        to be capable of it
    -   Hyrum's Law: with enough users, all observable behaviors of an API will be depended on by somebody — regardless of
        what the contract says
    -   First upgrades (e.g. compiler) are always the most painful; regular upgrades build expertise and make future ones
        cheaper
    -   "It's programming if 'clever' is a compliment, but software engineering if 'clever' is an accusation"
-   Scale and Efficiency
    -   Policies that don't scale: pushing migration work to consumers ("upgrade by Aug 15th") — the Churn Rule inverts
        this: infra teams own migrations
    -   **The Beyoncé Rule**: "If you liked it, you should have put a [CI]({{< relref "../../topics/continuous_integration.md" >}}) test on it" — outages from infra changes not caught by
        [CI]({{< relref "../../topics/continuous_integration.md" >}}) are not the infra team's fault
    -   Expertise is viral; one good expert in a shared forum raises the whole organization
    -   Distributed builds example: solving one scaling problem created a new one (Jevons Paradox — consumption rises with
        efficiency)
-   Trade-offs and Costs
    -   "Cost" = financial + resource + personnel + transaction + opportunity + societal
    -   Decisions should be: "we must" (legal/customer) or "best option given evidence" — never "because I said so"
    -   Data-driven, but not data-only: evidence, precedent, and argument also count
    -   Leaders who admit mistakes are more respected, not less
-   TL;DRs
    -   Software is sustainable when capable of responding to changes in dependencies, technology, or product requirements
    -   Every repeated task should scale linearly or better in human input
    -   Process inefficiencies scale up slowly — beware boiled-frog problems
    -   Expertise + economies of scale pays off particularly well


## Part II: Culture {#part-ii-culture}


### Ch 2: How to Work Well on Teams {#ch-2-how-to-work-well-on-teams}

-   The **Genius Myth**
    -   We romanticize lone geniuses (Linus, Guido, Gates) but success is always a team effort
    -   The cave fantasy (vanish, build in secret, unveil masterpiece) is driven by insecurity
    -   "You are not your code" — self-worth shouldn't be tied to what you build
-   Hiding Considered Harmful
    -   Working alone delays detection of fundamental design mistakes
    -   Bus factor: the number of people who need to be hit by a bus before the project is doomed — raise it by sharing
        knowledge
    -   Feedback loops apply at project level too: many eyes keep the project relevant, not just bug-free
-   The Three Pillars: **Humility, Respect, Trust**

    -   Almost any social conflict traces back to a failure of one of these three
    -   _Lose the ego_ — aim for collective pride, not personal glory
    -   Frame critique as confusion ("I'm confused by this") not accusation ("you're wrong")
    -   "**The more open you are to influence, the more you are able to influence**"
    -   Admitting "I don't know" increases long-term credibility

    > If you chose to assert your ego in any number of ways, "I am going to do it my way," you pay a small steady price
    > throughout the whole of your professional career. And this, over a whole lifetime, adds up to an enormous amount of
    > needless trouble. — Richard Hamming
-   Blameless Post-Mortems (see [DevOps]({{< relref "../../topics/devops.md" >}}))
    -   Root-cause analysis, timeline, impact, action items with owners, lessons learned
    -   Goal: light up the runway for those who follow, not assign blame
-   "Googleyness"

    -   Thrives in ambiguity, values feedback, challenges status quo, puts user first, cares about team, does the right
        thing
    -   "Culture fit" easily becomes unconscious [bias]({{< relref "../../topics/bias.md" >}}) for "is just like me" — watch out

    > An interviewer's personal desire to have a beer with a candidate should never be considered a valid signal about
    > somebody else's performance or ability to thrive at Google.


### Ch 3: Knowledge Sharing {#ch-3-knowledge-sharing}

-   Challenges to Learning
    -   **Lack of psychological safety** — fear of making mistakes leads to avoiding transparency
    -   **Information islands** — fragmented knowledge across teams leads to duplication, skew, and incomplete pictures
    -   **Single Point of Failure (SPOF)** — "Let me take care of that for you" optimizes short-term at the cost of long-term
        scalability
    -   **All-or-nothing expertise** — only experts and novices, no middle ground; reinforces itself when experts don't mentor
    -   **Parroting** — mimicry without understanding, copying patterns without knowing why
    -   **Haunted graveyards** — code nobody dares touch out of fear and superstition
-   Philosophy: Tribal vs Documented Knowledge
    -   Tribal knowledge (unwritten expert knowledge) and documented knowledge are complementary, not competing
    -   One-to-one help is high-bandwidth but doesn't scale; documentation scales but is more generic
    -   The goal: document tribal knowledge so it's available beyond the expert's direct reach (see [BASB]({{< relref "../../topics/basb.md" >}}), [Zettelkasten]({{< relref "../../topics/zettelkasten.md" >}}))
-   Psychological Safety
    -   Psychological safety is the most critical factor for an effective team (backed by Google's own research)
    -   Nooglers get a dedicated mentor (not their own team member) to lower the barrier for asking questions
    -   The _Recurse Center's social rules_ as anti-pattern guidelines:
        -   No feigned surprise ("You don't know what X is?!")
        -   No "well-actuallys" (pedantic grandstanding)
        -   No back-seat driving (opinions without committing to the conversation)
        -   No subtle "-isms" (microaggressions that make people feel unwelcome)
-   Growing Your Knowledge
    -   Always be asking questions; not asking when stuck is one of the biggest beginner mistakes
    -   **Chesterton's Fence**: before removing something, understand why it's there
    -   Leaders should model "I don't know" behavior — seniority ≠ omniscience
-   Scaling Questions (community tools)
    -   Group chats: fast, informal, topic-driven — great for quick questions; poor for archiving
    -   Mailing lists: structured, searchable, public — good for complex threads; stale over time
    -   YAQS (internal Stack Overflow): promoted answers, editable, supersedes some mailing lists
-   Scaling Your Knowledge (teaching)
    -   Expertise is a multidimensional vector — everyone can teach something
    -   Office hours: good for ambiguous problems where you don't even know what to ask yet
    -   Tech talks vs. classes: classes better when topic is complex, stable, benefits from Q&amp;A
-   Scaling Organization's Knowledge

    -   Culture first: focus on environment before output (code)
    -   "Brilliant jerks" are harmful to knowledge sharing — expertise and kindness are not mutually exclusive

    > Although a measure of technical leadership is expected at higher levels, not all leadership is directed at technical
    > problems. Leaders improve the quality of the people around them, improve the team's psychological safety, create a
    > culture of teamwork and collaboration, defuse tensions within the team, set an example of Google's culture and values,
    > and make Google a more vibrant and exciting place to work. Jerks are not good leaders.

    -   Incentives matter: peer bonuses and kudos (peer-driven, not management-driven) powerfully reinforce
        knowledge-sharing behavior
    -   Canonical sources: centralized, vetted, with explicit owners; go/ links make them discoverable and shareable
    -   [Static analysis]({{< relref "../../topics/lessons_from_building_static_analysis_tools_at_google.md" >}}) as scalable knowledge sharing: encodes best practices once, applies to every engineer automatically
    -   _Testing on the Toilet_ / _Learning on the Loo_: single-page newsletters posted in toilet stalls
-   Readability Process
    -   "Readability" at Google = certified mastery of a language's idioms, code structure, documentation, and testing
        standards — a form of [deliberate practice]({{< relref "../../topics/deliberate_practice.md" >}}) at organizational scale
    -   Every CL requires readability approval; ~20% of engineers are in the process at any time
    -   Reviewers (~1-2% of engineers, all volunteers) must treat it as mentorship, not gatekeeping
    -   Cite Chesterton's Fence: explain _why_ guidelines exist, don't just enforce them
    -   Trade-off: increased short-term review latency for long-term code quality and consistency across a monorepo
    -   EPR research: CLs by readability-certified authors take statistically less time to review; engineers report higher
        code quality satisfaction


### Ch 4: Engineering for Equity {#ch-4-engineering-for-equity}

-   Bias Is the Default
    -   All engineers carry unconscious [bias]({{< relref "../../topics/bias.md" >}}); even the most talented staff will inadvertently fail users when they don't
        consider diverse groups
    -   Google Photos (2015) classified Black users as "gorillas" — root causes: incomplete training data, lack of Black
        representation in the engineering org, insufficient testing across demographics
    -   Technology is not to blame by default, but designs that lack resilience against [bias]({{< relref "../../topics/bias.md" >}}) actively cause harm
-   Understanding the Need for Diversity
    -   A CS degree + work experience is necessary but not sufficient — it does not teach you how to build for users unlike
        yourself
    -   Engineering teams must be representative of their user populations; in the absence of that, individual engineers
        must learn to build for all users
-   Building Multicultural Capacity
    -   Engineers wield outsized power — tools built by a few can shape society for billions
    -   AI/facial recognition trained on biased datasets produces biased results; the responsibility to slow down and fix
        the data is on the engineers
    -   Multicultural, gender, and race studies education is not just personal responsibility — it's the employer's
        responsibility too
-   Making Diversity Actionable
    -   Don't defer to historical systemic discrimination as an excuse for inaction; move to quantifiable, actionable steps
    -   Hiring managers are accountable: balanced candidate slates, equitable growth opportunities
    -   Fixing the hiring pipeline alone is not sufficient — retention and progression inequities must be addressed
        simultaneously
-   Reject Singular Approaches
    -   "Fix hiring" is necessary but not the only lever; attrition of underrepresented groups undermines pipeline gains
    -   "Build for the majority first, edge cases later" is a flawed methodology — it gives already-advantaged users a head
        start
    -   Designing for the user least like you is a best practice, not a constraint
    -   Inclusive design from the start raises the floor for everyone
-   Values Versus Outcomes
    -   The failure point is not in stated values or investments, but in the _implementation_ — good intentions don't produce
        equitable outcomes automatically
    -   Practical checklist:
        -   Take a hard look in the mirror
        -   Don't build _for_ everyone — build _with_ everyone
        -   Design for the user who will have the most difficulty using your product
        -   Don't assume equity; measure it throughout your systems
        -   Change is possible
-   TL;DRs
    -   [Bias]({{< relref "../../topics/bias.md" >}}) is the default
    -   Diversity is necessary to design for a comprehensive user base
    -   Don't trade velocity for equity — slowing down to prevent harm is the right call


### Ch 5: How to Lead a Team {#ch-5-how-to-lead-a-team}

-   Roles
    -   **Manager**: leads people; responsible for performance, productivity, and happiness of everyone on the team
    -   **Tech Lead (TL)**: leads technology — architecture, priorities, velocity, project management; usually still an
        individual contributor
    -   **Tech Lead Manager (TLM)**: small/nascent teams where one person does both; hard to sustain without burning out
    -   Google prefers separating TL and EM on larger teams — two specialists beats one person doing both poorly
    -   See [engineering management]({{< relref "../../topics/engineering_management.md" >}})
-   Moving into Leadership

    -   Scaling yourself is the main reason to lead: one great engineer can write limited code; a team of great engineers
        can write much more
    -   **Servant leadership**: the leader's job is to serve the team — remove obstacles, build consensus, fill cracks — not to
        "manage" in the traditional sense
    -   Best advice from a Google engineering director: _Above all, resist the urge to manage_

    > Traditional managers worry about how to get things done, whereas great managers worry about what things get done (and
    > trust their team to figure out how to do it).
-   Antipatterns
    -   **Hire pushovers**: hiring less capable people to protect your position — the team can't function without you, you can
        never take a vacation
    -   **Ignore low performers**: "Hope is not a strategy" — high performers carry the low performer and eventually leave;
        address it early when you can still help
    -   **Ignore human issues**: ex-engineer managers focus only on technical health; social health is equally important and
        often harder to manage
    -   **Be everyone's friend**: power imbalance makes genuine reciprocal friendship impossible; you can be warm without
        confusing friendship with leadership
    -   **Compromise the hiring bar**: "A people hire A people; B people hire C people" — cost of a bad hire far exceeds the
        cost of a longer search
    -   **Treat your team like children**: people act how you treat them; micromanagement breeds the behavior it fears
-   Positive Patterns

    -   **Lose the ego**: cultivate collective team ego, not personal glory; apologize sincerely when wrong — it earns respect,
        not vulnerability
    -   **Be a Zen master**: you are always on stage; your calm (or panic) spreads infectiously through the chain of gears; ask
        questions instead of jumping to solutions
    -   **Be a catalyst**: build consensus; direct authority is less effective than earned agreement
    -   **Remove roadblocks**: knowing the right person is often more valuable than knowing the right answer
    -   **Be a teacher and mentor**: resist the urge to solve it yourself; gauge how much help the mentee actually needs —
        over-explaining is as bad as under-explaining
    -   **Set clear goals**: everyone pulling the truck in a different direction wastes enormous energy; a concise mission
        statement enables autonomy
    -   **Be honest**: no compliment sandwiches — people don't hear the feedback through the padding; be kind but direct

    > I won't lie to you, but I will tell you when I can't tell you something or if I just don't know.

    -   **Track happiness**: end every 1:1 with "What do you need?"; track careers, not just current work; give extra slack
        during hard personal times — it pays back when deadlines are tight
-   Other Tips
    -   **Delegate, but get your hands dirty**: picking up a grungy task on a new team builds respect faster than any resume
    -   **Seek to replace yourself**: hire people capable of your job; create paths to leadership; don't force great engineers
        into management
    -   **Know when to make waves**: problems rarely self-resolve; act quickly before damage spreads
    -   **Shield your team from chaos**: the organizational chaos above you is invisible to ICs; your job is to absorb it
    -   **Give air cover**: share relevant context; protect the team from frivolous demands
    -   **It's easy to say yes to something undoable**: reversibility is the key criterion for how much deliberation a
        decision needs
-   People Are Like Plants
    -   Different people need different amounts of motivation and direction; equal treatment ≠ equitable outcomes
    -   Intrinsic motivation (Dan Pink's _Drive_): autonomy, mastery, purpose — far more powerful than extrinsic rewards
        -   **Autonomy**: direction given, how left to them — creates ownership (see [deep work]({{< relref "../../topics/deep_work.md" >}}))
        -   **Mastery**: skills are like a knife blade; use without sharpening and they go dull (see [deliberate practice]({{< relref "../../topics/deliberate_practice.md" >}}))
        -   **Purpose**: connect people to the impact of their work; forward customer feedback directly to the team
-   Failure Is an Option
    -   Build a culture where failure is an acceptable learning mechanism
    -   Failing fast (low stakes) vs. failing slowly (more painful) vs. failing in production (most structured to learn
        from)
    -   Praise individuals publicly; give constructive criticism privately


### Ch 6: Leading at Scale {#ch-6-leading-at-scale}

-   The Three Always of Leadership
    -   **Always Be Deciding**, **Always Be Leaving**, **Always Be Scaling**
    -   As you move up, you go "broad" rather than "deep" — your prior technical expertise matters less, your general
        intuition and ability to galvanize people matters more
    -   Often demoralizing — until you realize you're having far more impact than as an individual contributor
-   Always Be Deciding
    -   At scale, decisions are about finding the right trade-offs, not solving specific engineering tasks
    -   Three steps: identify the **blinders** → identify the **key trade-offs** → decide and iterate
    -   **Blinders**: people steeped in a problem for years can't see the forest; fresh eyes have a real advantage
    -   No silver bullets: ambiguous problems have no permanent answer — only the best answer for this moment
    -   Avoid analysis paralysis: frame decisions as "we'll try this and revisit next month" to keep teams comfortable with
        iteration
    -   Case study — Google Search latency: years of "code yellow" hackathons kept failing because latency was never treated
        as a first-class goal alongside quality and capacity (Good/Fast/Cheap — pick two)
-   Always Be Leaving

    -   Goal: build an organization that solves the problem _by itself_, without you present
    -   If you can't take a week off without checking email, you've made yourself an SPOF — fix that
    -   Build a **self-driving team**: strong sub-leaders, healthy processes, self-perpetuating culture
    -   Anchor teams to **problems**, not **solutions** — "We own version control" not "We own the Git repos"; solutions get
        replaced, problems are evergreen
    -   Delegation is the main mechanism for growing leaders: assign, let them fail, iterate
    -   Ask yourself daily: _What can I do that nobody else on my team can do?_ — usually: define high-level strategy and see
        the forest
    -   Good management is 95% observation and listening, 5% critical adjustments in just the right place

    > There's a story about a Master of all things mechanical... The Master responded with another invoice, showing a $1
    > cost for the chalk to make the mark, and $9,999 for knowing where to put it.
-   Always Be Scaling
    -   The **Cycle of Success**: Analysis → Struggle → Traction → Reward (a new, harder problem with no new people) →
        Compression
        -   Success earns you more responsibility, not more resources; you must compress the old problem to half the effort
    -   **Important vs. Urgent** (Eisenhower): leaders default to 100% reactive mode; important things are almost never urgent
        -   Counter it: delegate urgencies, block dedicated time for important-not-urgent work, find a tracking system that
            works (see [GTD]({{< relref "../../topics/gtd.md" >}}), [multi-scale planning]({{< relref "../../topics/multi_scale_planning.md" >}}))
    -   **Learn to drop balls deliberately**: identify the top 20% critical things only you can do; give yourself permission to
        drop the other 80% (see [attention economy]({{< relref "../../topics/attention_economy.md" >}}))
        -   The middle 60% either gets picked up by sub-leaders or floats back up if truly critical
    -   **Protect your energy** (see [deep work]({{< relref "../../topics/deep_work.md" >}})):
        -   Take real vacations (≥1 week, truly disconnected — checking email ruins the recharge)
        -   Make disconnecting trivial (leave laptop at office, use work profile on phone)
        -   Take real weekends — sign out Friday night, sign in Monday
        -   Take breaks during the day (brain works in ~90-minute cycles)
        -   Give yourself permission for mental health days — a bad mood in a leader sets the tone for everyone


### Ch 7: Measuring Engineering Productivity {#ch-7-measuring-engineering-productivity}

-   **Why Measure?**
    -   As orgs grow linearly, communication overhead grows quadratically → individual
        productivity must increase to scale scope
    -   Google created a dedicated team of engineering productivity researchers: software
        engineers + social scientists (cognitive psychologists, behavioral economists)
    -   Goal: data-driven measurement and improvement of engineering productivity
-   **Triage: Is It Worth Measuring?**
    -   Measurement itself is expensive; don't measure unless it leads to action
    -   4 triage questions before starting:
        1.  What result are you expecting, and why? (surface your [bias]({{< relref "../../topics/bias.md" >}}) upfront)
        2.  If data supports the expected result, what action will be taken?
        3.  If we get a **negative** result, will appropriate action be taken? (stops most
            projects)
        4.  Who is the decision maker, and when will they act?
    -   When NOT to measure:
        -   Can't afford to act on result right now
        -   Result will soon be invalidated by other factors
        -   Decision is already made → metrics would only serve as vanity justification
        -   Available metrics are not precise enough to avoid confounding
-   **Goals/Signals/Metrics (GSM) Framework**
    -   **Goal**: desired end result, phrased without reference to specific metrics
    -   **Signal**: how you'd know you achieved the goal — may not be directly measurable
    -   **Metric**: a proxy for a signal; what you can actually measure
    -   Prevents the **streetlight effect** (measuring only what's easy, not what matters)
    -   Prevents metrics creep and metrics bias by selecting metrics **in advance**
    -   Maintains **traceability**: every metric traces back to a signal, and every signal to a
        goal
-   **QUANTS — 5 Dimensions of Productivity** (must balance all five)

    -   \*Qu\*ality of the code — test coverage, architecture quality
    -   \*A\*ttention from engineers — flow state, distractions, context switching
    -   I\*n\*tellectual complexity — cognitive load, unnecessary complexity
    -   \*T\*empo and velocity — task throughput, release speed
    -   \*S\*atisfaction — tool happiness, sense of purpose, burnout

    > "I can make your review velocity very fast: just remove code reviews entirely."

    (Extreme example of optimizing one QUANTS dimension at the expense of others)
-   **Validating Metrics with Data**
    -   Quantitative metrics give scale and power; qualitative studies give context and
        narrative
    -   When quantitative and qualitative disagree, it's usually the quantitative metric
        that's wrong
    -   Experience sampling study: interrupt engineers mid-task to ask about their experience
        in real time — avoids recall [bias]({{< relref "../../topics/bias.md" >}}) but introduces recency and sampling [bias]({{< relref "../../topics/bias.md" >}})
-   **Taking Action and Tracking Results**
    -   Research produces recommendations; ideal recs are "tool-driven" (built into
        workflows), not behavioral asks
    -   Assume engineers will make appropriate trade-offs if given proper data and suitable
        tools
    -   Readability process case study: found overall worthwhile — engineers with readability
        had faster reviews, felt they learned — pain points identified and tooling improved
-   **TL;DRs**
    -   Only measure when the result will drive action (positive or negative)
    -   Use GSM to select meaningful, traceable metrics
    -   Cover all five QUANTS dimensions — don't optimize one at the cost of another
    -   Qualitative metrics count too — longitudinal surveys matter
    -   Embed recommendations into developer workflows and incentive structures


## Part III: Processes {#part-iii-processes}


### Ch 8: Style Guides and Rules {#ch-8-style-guides-and-rules}

-   Rules exist to serve the organization at scale and over time, not individual engineers
-   Key question for any rule: does it serve the reader or the writer? Prefer the reader
-   Consistency matters more than "correctness" — a codebase should look like it was written by one person
-   Automate enforcement wherever possible (formatters, linters that block submission)


### Ch 9: Code Review {#ch-9-code-review}

-   Every change needs: correctness approval (any engineer), readability approval (language-certified), owner approval (OWNERS file)
-   4 types of review: greenfield, behavioral changes, bug fixes/rollbacks, refactors/large-scale changes
-   Greenfield is most critical: evaluate long-term sustainability, ensure all API endpoints are tested
-   Code review is not the time to debate design — that happens in design review beforehand
-   Optimize for the reader; keep CLs small; automation is critical to scale


### Ch 10: Documentation {#ch-10-documentation}

-   Treat docs like code: in source control, reviewed, owned, tested
-   Each document should have one clear purpose and one audience
-   Documentation changes should fit into the existing developer workflow (not a separate tool)
-   ~90% of Google's GooWiki docs had no views/updates in months — most documentation is zombie docs


### Ch 11: Testing Overview {#ch-11-testing-overview}

-   Test pyramid: 80% unit tests, 15% integration, 5% end-to-end
-   Antipatterns: _ice cream cone_ (too many E2E, few unit) and _hourglass_ (E2E + unit but no integration)
-   Test size ≠ test scope: a single-method test can be "medium" size if it boots a browser
-   Google runs on monorepo + no branching; all commits go to head; [CI]({{< relref "../../topics/continuous_integration.md" >}}) (TAP) validates everything
-   Brittle tests (especially over-mocked ones) resist change — Google has suffered badly from mock abuse


### Ch 12: Unit Testing {#ch-12-unit-testing}

-   Test behaviors, not methods — one test per behavior, not one test per function (see [TDD]({{< relref "../../topics/tdd.md" >}}))
-   Test via public APIs, not implementation internals
-   Test state, not interactions
-   DAMP over DRY for test code: Descriptive And Meaningful Phrases; a little repetition in tests is fine if it makes failures readable
-   Name tests after the behavior: `transferFunds_negativeAmount_throwsException` not `testTransfer`


### Ch 13: Test Doubles {#ch-13-test-doubles}

-   Prefer real implementations over test doubles when feasible
-   3 types: _fake_ (lightweight real implementation), _stub_ (returns canned values), _mock_ (verifies interactions)
-   Fakes are often ideal; stubs are OK; mocks (interaction testing) are dangerous — they couple tests to implementation details
-   Overuse of stubs → unclear tests; overuse of mocks → brittle tests


### Ch 14: Larger Testing {#ch-14-larger-testing}

-   Larger tests cover what unit tests can't: multi-component contracts, real-world data, config, storage
-   Components: System Under Test + Data + Action + Verification
-   Design should include a test strategy that maps risks to the appropriate test size that mitigates them
-   Larger tests must not create friction in daily workflow


### Ch 15: Deprecation {#ch-15-deprecation}

-   Old systems carry ongoing maintenance costs, esoteric expertise requirements, and ecosystem drag
-   Two types: _advisory_ (no deadline, aspirational) and _compulsory_ (deadline + enforcement mechanism)
-   Advisory deprecations rarely result in full migration — "Hope is not a strategy"
-   Compulsory deprecation must be staffed by a dedicated team; unfunded mandates breed resentment
-   Evolving a system in place is usually cheaper than replacing it when full turndown costs are included


## Part IV: Tools {#part-iv-tools}


### Ch 16: Version Control and Branch Management {#ch-16-version-control-and-branch-management}

-   **The One-Version Rule**: developers must never have a choice of "which version of this component
    should I depend on?" — choice violations lead to diamond dependencies, merge hell, and wasted effort
-   **Benefits of a monorepo**:
    -   One-Version adherence is trivial — harder to violate than to follow
    -   No process needed to discover which repos/versions are "official"
    -   Engineers can see what everyone else is doing and learn from it
    -   New tools and optimizations get applied across the entire org at once
    -   LSCs (large-scale changes) are feasible — in a federated repo world they're nearly impossible
    -   Microsoft, Facebook, Netflix, Uber all use it; DORA/Accelerate research supports it
-   Monorepo is not the only answer — the **principle** (One Version) matters more than the
    implementation; virtual monorepos (VMRs) can approximate it with fine-grained repos
-   Trunk-based development (no long-lived branches) is a predictive factor in high-performing
    orgs (DORA/Accelerate); long-lived dev branches are an anti-pattern (see [git]({{< relref "../../topics/git.md" >}}))


### Ch 17: Code Search {#ch-17-code-search}

-   A fast, org-wide code search is a major productivity multiplier — enables "question-and-answer"
    workflow at scale
-   Must index all code and return all results to be trusted; must be low-latency to be useful


### Ch 18: Build Systems and Build Philosophy {#ch-18-build-systems-and-build-philosophy}

-   Artifact-based systems (Bazel/Blaze) scale better than task-based (Make/Ant) — parallelism
    and caching based on declared inputs/outputs (relates to [software architecture]({{< relref "../../topics/software_architecture.md" >}}))
-   Fine-grained build targets → better parallelism and incrementality
-   Pin all external dependencies under source control; "latest" = unreproducible builds


### Ch 19: Critique: Google's Code Review Tool {#ch-19-critique-google-s-code-review-tool}

-   Code review tooling must integrate deeply into the workflow; key features: inline comments,
    attention sets (who needs to act?), automated analysis as first-pass reviewer


### Ch 20: Static Analysis {#ch-20-static-analysis}

-   Integrate [static analysis]({{< relref "../../topics/lessons_from_building_static_analysis_tools_at_google.md" >}}) into code review (where attention is), not just [CI]({{< relref "../../topics/continuous_integration.md" >}})
-   False positive rate is critical — one noisy check destroys trust in all checks
-   Empower domain experts to write their own analyses to scale coverage


### Ch 21: Dependency Management {#ch-21-dependency-management}

-   SemVer is a lossy human estimate elevated to an absolute by package managers → dependency hell
    or silent incompatibility
-   [CI]({{< relref "../../topics/continuous_integration.md" >}}) + testing is the actual evidence of compatibility, not version numbers
-   Adding a dependency has ongoing costs: maintenance, Hyrum's Law exposure, [supply chain security]({{< relref "../../topics/supply_chain_security.md" >}}) risk


### Ch 22: Large-Scale Changes {#ch-22-large-scale-changes}

-   A single logical change touching thousands of files (e.g. API rename across the whole codebase)
-   Traditional branch-and-merge refactoring breaks at this scale
-   Monorepo + automated tooling + incremental submission makes LSCs possible; one LSC at Google
    deleted &gt;1 billion lines of code in 3 days


### Ch 23: Continuous Integration {#ch-23-continuous-integration}

-   [CI]({{< relref "../../topics/continuous_integration.md" >}}) decides _which_ tests to run and _when_ — fast/reliable tests on presubmit; slower tests post-submit
-   Actionable, accessible failure feedback is what makes CI actually improve velocity


### Ch 24: Continuous Delivery {#ch-24-continuous-delivery}

-   Ship small and often — small batches are safer, not riskier (core [DevOps]({{< relref "../../topics/devops.md" >}}) principle)
-   Flag-guard features for staged evaluation; use real production traffic as benchmark
-   "Faster is safer": less risk per release, less time to market


### Ch 25: Compute as a Service {#ch-25-compute-as-a-service}

-   **Origin story**: In 2002, Jeff Dean described running batch jobs as "a logistical nightmare" —
    manually SSHing into 50+ machines, no auto-recovery, human-maintained scheduling. This drove
    Google to build automated scheduling (WorkQueue), which evolved into Borg (2003)
-   **Key efficiency insight that shaped Borg**: serving jobs need slack capacity for traffic spikes
    but sit at ~30% utilization — batch jobs can fill that slack and be preempted when needed →
    unified pool = batch jobs run nearly for free
-   **"Machines are anonymous"**: programs don't care which machine they run on → machines as cattle,
    not pets → company-wide hardware changes without per-team disruption
-   Borg was open-sourced as Kubernetes; same design: declare desired state, scheduler places it
    (see [Docker]({{< relref "../../topics/docker.md" >}}), [microservices]({{< relref "../../topics/microservices.md" >}}))
-   Design software for managed compute: expect to be moved, restarted, killed at any time —
    stateless where possible
