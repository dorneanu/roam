+++
title = "The Startup CTO's Handbook"
author = ["Victor Dorneanu"]
date = 2024-02-21
tags = ["management", "entrepreneurship", "book"]
draft = false
+++

## Notes {#notes}


### 257 {#257}

> Whether it’s due to the industry you are in, the size of your business, or the nature of your customers, most startups need to comply with at least one formal compliance framework. If your users are in Europe, then you need to comply with GDPR. If you’re taking in user data, it’s wise to under-stand the CCPA. If you’re working with enterprise clients, you’ll be asked for your SOC 2 or ISO 27001 certification. In healthcare, you’ve got HIPAA, and if you’re in payments, you’ve likely heard of PCI DSS.


### 243 {#243}

> Given that manual code review comes at a cost, it’s worth thinking about when that cost provides the highest return and using code review as a tool for the highest-ROI scenarios. This general idea was pop-ularized by a 2021 blog post by Rouan Wilsenach titled “Ship/Show/Ask” (ctohb.com/ssa).


### 243 {#243}

> Let’s examine the cost of code review. A code review requires two people—call them the Author and the Reviewer—to experience a number of context switches. A common asynchronous code pattern might be as follows: • Context Switch #1: Author stops coding on Project 1, sets up code review, and tags Reviewer. Author starts working on Project 2. • Context Switch #2: Reviewer gets a notification, stops their work on Project 3, and begins review of Project 1. Reviewer leaves feedback for Author, resumes work on Project 3. • Context Switch #3: Author is notified of feedback on Project 1, stops work on Project 2, and addresses comments from Reviewer. Then Author resumes work on Project 2. • Context Switch #4: Reviewer stops work on Project 3 and—best-case scenario—Reviewer is now satisfied with changes in Project 1 and approves the code review. Reviewer resumes work on Project 3. Worst case, Author and Reviewer must repeat Context Switches #3 and #4 several times. • Context Switch #5: Author is notified of approval, stops work on Project 2, merges Project 1, then resumes work on Project 2.

costs of code review


### 215 {#215}

> DevOps is all the work that goes into making sure the business software runs in places other than your developers’ machines. Unless you’ve got a DevOps specialist on your team, you’re prob-ably deprioritizing DevOps to some degree, and have underinvested in it as well. It’s not just my opinion; it’s becoming widely accepted throughout tech industries that high-quality DevOps is a key driver of overall engineer-ing velocity.

quote


### 193 {#193}

> a professional environment, the principal audience for any given line of code is not the computer but the developer who has to read that code at some point in the future for further development. This is the golden rule of programming: engineers should be writing code with the same level of readability that they expect of anyone else’s code.


### 186 {#186}

> There are many excellent resources that explore various architectural pat-terns deeply; one of my favorites is Martin Fowler’s Patterns of Enterprise Application Architecture. In this chapter, I’ll provide a summary of some key phrases you’ll hear so you have context when exploring these topics in depth elsewhere.


### 182 {#182}

> Here are a few easy wins to upgrade DX across your software engineering team: • Have a README file with instructions to run a codebase—ideally a one-liner to install dependencies—then build and run the code. • Enforce that all code be linted with a strict set of linting rules that is consistent across all usages of that language at your company. Fail your builds if linting doesn’t pass. If all developers have their IDE configured to auto-lint, builds should rarely fail for lint issues. • Ensure that lint configuration is checked into source control where pos-sible (i.e., by investing in setting up something like VSCode’s settings.json file, found at ctohb.com/vscode). • Invest time in making sure that local test data can be set up in local databases from scratch. Often a quick data generator or seed data script can short-circuit a lot of developer headaches. Better yet if the seed data can be easily augmented to add additional corner cases/use cases as the system evolves, so that the base set of test data can be as compre-hensive/representative as possible. • Develop a plan for how to either mock or actually spin up dependent services locally to test multiple-service interactions when necessary. Ideally, with good contracts and domain-driven design, the need for this will be rare, though it should still be easy when necessary.


### 179 {#179}

> There are two prerequisites to a great developer experience: 1 . Tools that make it easy to have highly reliable and reproducible envi-ronments and dependency chains 2. Documentation and consistency in practices for how things are done


### 179 {#179}

> DevOps tooling company Harness (harness.io) defines Developer Experience (DX) as “the overall interactions and feelings that the developer feels when working towards a goal. It is similar to the definition of User Experience (UX), except in this case the primary user is a software engineer.


### 156 {#156}

> MEASURING DEBT—THE DEBT INVENTORY Unlike with a mortgage or car loan, there’s no website you can visit that will give you a statement of your exact amount of tech debt and remaining payments. Some forms of debt can be measured quantitatively, but most of the analysis is qualitative. For healthy and responsible debt manage-ment at scale, I recommend a debt inventory survey. The survey should be taken at regular intervals. Somewhere from one to four times per year, do a sober analysis across the varying kinds of debt, 1 492.2 t e c h d e b t producing an honest assessment of where the team is operating. Don’t take the survey independently; rather, do so in collaboration with other engi-neers on the team who are working in the code every day and interacting with the debt on a regular basis. A survey can be as simple as this: for each of the following types of debt, rate how much we have on a scale of 1 to 10, then provide a few sentences justifying the score. Use the results of the survey to inform how your team spends its energy paying down debt, and compare results between surveys over time to ensure debt stays at a reasonable level and your team is regularly solving its biggest debt pain points.


### 154 {#154}

> The same happens with technology debt. Your startup may accumulate it deliberately as part of a conscious tradeoff, and part of that tradeoff is establishing a realistic plan for paying it down. You should apply the same kind of logic you would to pay down financial debt to addressing your tech-nical debt: either pay it off upfront because you have extra resources (and no better place to put those resources), pay it off continuously over time, or pay it all off down the road but perhaps at a higher total price that includes interest. However you choose to pay down your tech debt, the key to doing so successfully is to recognize that debt is an inevitable part of the software engineering process, and proactively paying down debt is a necessary investment in overall engineering health.


### 155 {#155}

> There are at least seven types of technical debt: • Architecture or Design Debt arises when the design of the software is not capable of meeting the near-term or future needs of the business. For example, the design makes it too challenging to build the features the business needs, or the design won’t scale to the number of users or performance requirements of the business. • Code Debt accrues when the implementation itself was done without paying attention to best practices, yielding code that’s difficult to understand and maintain. • Test Debt accumulates when you’ve run insufficient automated tests to provide the team confidence in the correctness of the codebase. • Infrastructure Debt occurs when the infrastructure, observability, and supporting systems are not robust or have been poorly maintained, leading to difficulty scaling or deploying updates, or poor uptime and reliability. • Documentation Debt results when there’s insufficient documentation, or the documentation is stale/inaccurate, which can make it difficult for team members to onboard a project. • Skill Debt rises when the team members lack the needed skills to maintain or update the code or surrounding infrastructure. • Process Debt accrues when the team is inconsistent in how it solves problems, leading to mistakes, delays, or increased costs.


### 147 {#147}

> FREQUENCY REDUCES DIFFICULTY Under the heading of “Frequency Reduces Difficulty,” Martin Fowler expounds on the phrase, “If it hurts, do it more often” (ctohb.com/fowler). Any process or task that is painful, error-prone, or otherwise costly for your team, Fowler contends, is a symptom of that task being underdeveloped. Without pressure from you, painful technical tasks tend to be the last ones volunteered for. As a result, they’re neglected, and the pain gets worse over time. Alternatively, if your team culture emphasizes prioritizing these painful tasks, then more effort will go into automating, documenting, and improving those tasks, making them ultimately less painful or even entirely automated. As Fowler points out, doing tasks more frequently also provides 1 402.1 t e c h c u lt u r e a n d g e n e r a l p h i l o s o p h y more feedback on them and builds skill with practice, all of which further reduce the difficulty and pain of the task.


### 132 {#132}

> Given that your department’s costs are fairly predictable, and cen-tralized in a few line items, the model you make doesn’t have to be very sophisticated. My recommendation is that you maintain a spreadsheet that includes the following: • Payroll tab • SaaS/Costs of Goods Sold (CoGS) tab1 251.6 l e a d e r s h i p r e s p o n s i b i l i t i e s • Infrastructure tab • “Other” tab (including travel, hardware) • Summary tab You can find a sample technical department budget spreadsheet on ctohb.com/templates that will get you most of the way there on the actual modeling.

budget


### 95 {#95}

> Some examples of practices your guidebook should outline: • Software Engineering ○ Choice of programming languages ○ Opinions/requirements around CI/CD ○ Standards for naming (casing in code, casing in contracts) ○ Standards for data processing, protection, backup, security ○ Opinions on how to use source control (Git Flow, GitHub Flow)8 81.3 o n b o a r d i n g ○ Opinions on testing (kinds, tools, how much to do) ○ Standard patterns for frontend and backend authentication and authorization ○ Wire protocol standards (REST, gRPC, GraphQL, etc.) ○ Universal requirements (Do we support mobile, responsive, translation?) ○ Certification frameworks and related training (e.g., PCI, SOC2, GDPR) ○ Other coding logistics: accessing private repos, linting, static code analysis, commit message format/style. • Engineering Process ○ Opinions on cadence/ceremonies (Agile, Kanban, retrospectives) ○ Opinions on technical documentation/specification requirements ○ Opinions on how to use the ticketing system (What’s an epic? Do we use story points?) ○ Any metrics the team as a whole cares about (Are you measuring cycle time?) ○ How are production incidents handled (PagerDuty? RCA documents?) ○ How new technology gets incorporated into the stack ○ Process around bugs, tech debt. • People Management ○ Expectations for how performance reviews are conducted, how individuals are evaluated/promoted ○ Expectations for contribution to onboarding/hiring processes.8 91.3 o n b o a r d i n g The guidebook should be clearly labeled as a living document, with a well-defined process in place for proposing, getting feedback on, and incor-porating changes to the guidebook. For example, I’ve used a Request for Comments (RFC) process for updates.

example of enhineerig guielies


### 95 {#95}

> THE ENGINEERING GUIDEBOOK “The Engineering Guidebook” gathers in a single document all of the opin-ions, best practices, structural elements, and business operations of your engineering team. It should be the single source any engineer can rely on to learn about choices and decisions that are expected to be consistent across the engineering organization. Be deliberate and thoughtful about exactly what practices should remain uniform across the organization. The larger your team becomes, the more it will make sense for pieces of the team to develop their own specialized way of getting work done. That said, for most small/medium startups of, say, less than seventy-five to one hundred developers, there is a ton of value and efficiency to be unlocked by adhering to a healthy and consistent set of best practices.

during onboarding


### 86 {#86}

> Make no mistake, writing these questions, sample answers, and scoring guides is a lot of work. The good news is that any given question is useful across multiple roles and can be reused over a long period of time. In fact, I encourage you to maintain a central repository of questions (and associated sample answers/scoring guides). When it comes time to write the next tech-nical focus interview guide, you’ll find your job much easier by being able to reuse questions from the repository as appropriate. See <https://ctohb.com/templates> for an example focus guide from my own question repository.

resource for templates


### 85 {#85}

> Technical Focus Interview Guide To find out where a candidate’s strengths and weaknesses are, and how much that matters in the role you are hiring for, first you need to decide what topic areas matter for your role. You do this by creating a technical focus interview guide, which should include a list of anywhere from four to eight technical areas, and within each area a set of sample questions, best practice answers, and a scoring guide. The sample answers and scoring guide are included to ensure fairness and uniformity in scoring across multiple interviewers and across candi-dates. You’re trying to differentiate where any given candidate has gaps vs. true expertise, so your questions should be designed to elicit one of three kinds of answers: bad, good, and amazing. Thus, they should lend them-selves to being scored as such. When it comes to scoring a question, to make the difference between a knowledge gap and true expertise obvious, I rec-ommend that a bad answer gets a score of 0‒2, a good answer gets a score of 3‒6, and only an amazing answer gets between 7‒10. When I say a “bad” answer, I mean a response


### 79 {#79}

> Currently, there are few formally structured interview programs that are widely used. The one that does come up fairly regularly is called “topgrading,” which refers to at least two different things: the topgrading method and the topgrading interview. The topgrading method (ctohb. com/topgrading) is an entire book hiring methodology that was purport-edly developed by General Electric in the 1980s/90s and written about in Verne Harnish’s Scaling Up. The topgrading interview (ctohb.com/inter-view), which I call the culture interview, is a specific interview agenda, style, and structure designed to learn about a candidate’s background and cultural fit. As formally designed, the topgrading interview walks a candidate through their employment history and asks the same set of questions about each of the candidate’s prior few roles. Depending on the candidate’s his-tory and how long they spent at their past few roles, you should cover any-where from two to five past positions. You want to capture a long enough period of time to try and identify trends and see growth, but also not keep the candidate in the interview for three hours discussing internships they had in college twenty years ago. For each role, topgrading has the interviewer ask the following questions:7 21.2 h i r i n g a n d i n t e r v i e w i n g • What were some notable successes or accomplishments in this position? • What were some mistakes or failures in this position? • What was your supervisor’s name and title? • What do you think the supervisor’s honest assessment of your strengths and weaknesses would be? • What do you feel your supervisor’s strengths and weaknesses were?


### 79 {#79}

> Whatever they are, they should be authentic and true to the company. If you’re struggling on this, I would refer you to Team of Teams by Stanley McChrystal, Work Rules! by Laszlo Bock, and Good Authority by Jonathan Raymond.

core values


### 49 {#49}

> “You can either be a shit funnel or a shit umbrella.” Todd Jackson, Gmail Product Manager (see ctohb.com/umbrella and ctohb.com/keytogmail.) Questions, concerns, and ideas about your product, absent any strict pro-cess for directing them elsewhere, will find their way to management. That includes not just you but everyone in management in your organization. Managers are the default inbox, and the crux of Jackson’s statement is that your team is the default outbox. You hear, “Hey, there’s a bug in X,” and you think, “OK, engineer Y wrote that feature, go send them the bug.” That would be an example of funneling inbound directly at your team. A better strategy is instead to act as an umbrella for the team. Rather than directing all the inbound in real time to the team, a good manager organizes, prioritizes, and gives the team a structured queue to work with. Your goal is to help the team focus, limit distraction, and provide a place for where inbound should go so it can be efficiently processed.


### 19 {#19}

> Kaizen : Continuous Improvement Kaizen is the Japanese word for “improvement.” The phrase was popularized as part of the Toyota Production System. At Toyota, all personnel are given a (literal or metaphorical) red handle to pull that stops the entire production line. If a worker identifies a problem with production, the idea is for them to pull the red handle, gather cowork-ers and resources to diagnose the issue, and then resolve it before work can continue. By empowering everyone on the team to improve the process and to be invested in its efficacy, Toyota can cost-effec-tively build higher-quality cars.


### 17 {#17}

> The golden rule of management: do what it takes to get the best out of your team. In technical leadership as in any other leadership role, the best measure of your performance as a manager is the performance of the team itself. That means you should be thinking about and spending time doing everything necessary to help individual team members do their best work, both independently and collectively. Helping your team succeed requires humility,
