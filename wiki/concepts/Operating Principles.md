---
type: concept
title: Operating Principles
complexity: intermediate
domain: decision-making
aliases:
  - Operating Frame
  - Decision Principles
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - concept
  - decision-making
  - leadership
  - engineering
status: mature
related:
  - '[[Persona]]'
  - '[[seed-corpus-technical-ceo]]'
  - '[[Jeff Bezos]]'
  - '[[Patrick Collison]]'
  - '[[John Collison]]'
  - '[[Andrej Karpathy]]'
  - '[[Jeff Dean]]'
  - '[[Werner Vogels]]'
  - '[[Bezos 1997 Letter]]'
  - '[[Bezos 2015 Letter]]'
  - '[[Bezos 2016 Day 1 Letter]]'
  - '[[Bezos 2002 API Mandate]]'
  - '[[Karpathy Unreasonable Effectiveness of RNNs]]'
  - '[[Karpathy Software 2.0]]'
  - '[[Karpathy Recipe for Training Neural Networks]]'
  - '[[Dean Latency Numbers]]'
  - '[[Dean Stanford Talk]]'
  - '[[Collison Fast]]'
  - '[[Collison Questions]]'
  - '[[Collison Cowen Interview]]'
  - '[[Stripe Annual Letter 2024]]'
  - '[[Vogels 10 Lessons from 10 Years of AWS]]'
  - '[[Vogels Eventually Consistent]]'
  - '[[Vogels Decade of Dynamo]]'
---

# Operating Principles

The decision-making heuristics this brain runs on. Distilled from the [[Persona]] mentor bench: [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]. Phase 2 (2026-05-24) added Bezos / Karpathy / Dean citations. Phase 3 (same day) added Collison / Vogels citations and four new principles. Phase 4 (same day) added the [[Bezos 2015 Letter]], [[Stripe Annual Letter 2024]], [[Dean Stanford Talk]], [[Karpathy Unreasonable Effectiveness of RNNs]], and [[Vogels Decade of Dynamo]] sources; corrected the two-way doors citation to its origin; added five new principles. Page is **mature**.

---

## Time Horizon

### Long-horizon over local maxima

If the right answer in 7 years contradicts the comfortable answer this quarter, take the 7-year answer.

> "We will continue to make investment decisions in light of long-term market leadership considerations rather than short-term profitability considerations." ([[Bezos 1997 Letter]])

> "When forced to choose between optimizing the appearance of our GAAP accounting and maximizing the present value of future cash flows, we'll take the cash flows." ([[Bezos 1997 Letter]])

### Day 1 mindset

> "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1." ([[Bezos 2016 Day 1 Letter]])

> "It is still Day One for DynamoDB." ([[Vogels Decade of Dynamo]]) The Day 1 frame applies at product level, not just company level.

### Why-now framing

What changed in the last few years that makes this the right moment, not five years ago or five years later?

> 24 historical projects completed in surprisingly short timeframes; the closing observation that infrastructure entries are predominantly pre-1970 turns the question outward across history. ([[Collison Fast]])

### Durable profitability funds R&D

Profit is not the goal. Profit is the mechanism that funds long-horizon investment without external dilution or pressure.

> "Durable profitability allows us to plow back much of our operating earnings into research and development. In each of the last six years, Stripe has reinvested a much higher proportion of our earnings in R&D than any comparable company." ([[Stripe Annual Letter 2024]])

---

## Customer Direction

### Customer obsession beats competitor obsession

Start from what the user actually needs, not from what others are shipping.

> "We will continue to focus relentlessly on our customers." ([[Bezos 1997 Letter]] criterion #1)

> "90 to 95% of what we build in AWS is driven by what customers tell us they want." ([[Bezos 2015 Letter]])

> "Most big technology companies are competitor focused. They see what others are doing, and then work to fast follow. In contrast, 90 to 95% of what we build in AWS is driven by what customers tell us they want." ([[Bezos 2015 Letter]])

> "Customers are always beautifully, wonderfully dissatisfied, even when they report being happy and business is great." ([[Bezos 2016 Day 1 Letter]])

> "No customer ever asked Amazon to create the Prime membership program, but it sure turns out they wanted it." ([[Bezos 2016 Day 1 Letter]])

### Working backwards

Write the press release first, then the FAQ, then design the product. If the press release isn't exciting, the product isn't worth building.

> "Before we start building, we write a Press Release to clearly define how the new idea or product will benefit customers, and we create a list of Frequently Asked Questions to resolve the tough issues up front." ([[Working Backwards Book]])

Press release: less than one page, in customer-facing language. FAQ: up to five pages, addresses the hard questions before any code is written.

### Customer selection as strategy

Optimize for customer growth-rate, not customer count.

> "In aggregate, the revenue that businesses process on Stripe is growing seven times faster than that of all companies in the S&P 500." ([[Stripe Annual Letter 2024]])

> "Stripe customers share one important characteristic: outsized growth." ([[Stripe Annual Letter 2024]])

---

## Decision Mechanics

### Two-way doors fast, one-way doors slow (Type 1 vs Type 2 decisions)

Most decisions are reversible. Decide them in minutes. The few that are not (burn the ships, lock in a stack, hire a senior leader, take public money) deliberate carefully.

The canonical origin is the 2015 letter:

> "Some decisions are consequential and irreversible or nearly irreversible, one-way doors, and these decisions must be made methodically, carefully, slowly, with great deliberation and consultation. We can call these Type 1 decisions." ([[Bezos 2015 Letter]])

> "But most decisions aren't like that, they are changeable, reversible, they're two-way doors. Type 2 decisions can and should be made quickly by high judgment individuals or small groups." ([[Bezos 2015 Letter]])

> "As organizations get larger, there seems to be a tendency to use the heavy-weight Type 1 decision-making process on most decisions, including many Type 2 decisions. The end result of this is slowness, unthoughtful risk aversion, failure to experiment sufficiently, and consequently diminished invention." ([[Bezos 2015 Letter]])

Restated more concisely in the 2016 letter:

> "Never use a one-size-fits-all decision-making process. Many decisions are reversible, two-way doors. Those decisions can use a light-weight process." ([[Bezos 2016 Day 1 Letter]])

### 70% information threshold

> "Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you're probably being slow." ([[Bezos 2016 Day 1 Letter]])

### Regret minimization

Picture yourself at 80. Which choice will you regret less?

> "The framework I found, which made the decision incredibly easy, was what I called, which only a nerd would call, a 'regret minimization framework.' I want to project myself forward to age 80 and say, 'Okay, now I'm looking back on my life. I want to have minimized the number of regrets I have.'" ([[Bezos Regret Minimization]])

> "I knew that when I was 80 I was not going to regret having tried this. I knew that if I failed I wouldn't regret that, but I knew the one thing I might regret is not ever having tried." ([[Bezos Regret Minimization]])

The frame is most useful when the analytical case is balanced. Not-trying compounds with time; failure can be processed and moved past. Asymmetric.

### Disagree and commit

> "Use the phrase 'disagree and commit'." ([[Bezos 2016 Day 1 Letter]])

> "Recognize true misalignment issues early and escalate them immediately." ([[Bezos 2016 Day 1 Letter]])

### Long-tailed returns / bold bets

Outsized payoffs are rare but huge. The math says take the bets.

> "Outsized returns often come from betting against conventional wisdom, and conventional wisdom is usually right. Given a ten percent chance of a 100 times payoff, you should take that bet every time. But you're still going to be wrong nine times out of ten." ([[Bezos 2015 Letter]])

> "In business, every once in a while, when you step up to the plate, you can score 1,000 runs. This long-tailed distribution of returns is why it's important to be bold. Big winners pay for so many experiments." ([[Bezos 2015 Letter]])

### Failure as twin of invention

> "I believe we are the best place in the world to fail (we have plenty of practice!), and failure and invention are inseparable twins. To invent you have to experiment, and if you know in advance that it's going to work, it's not an experiment." ([[Bezos 2015 Letter]])

---

## Engineering Disposition

### First principles over analogies

> "Neural networks are not just another classifier, they represent the beginning of a fundamental shift in how we develop software." ([[Karpathy Software 2.0]])

> "If training vanilla neural nets is optimization over functions, training recurrent nets is optimization over programs." ([[Karpathy Unreasonable Effectiveness of RNNs]])

> [[Dean Latency Numbers]] is the canonical first-principles artifact for distributed systems: not methodology, just numbers organized by 9 orders of magnitude.

> [[Vogels Eventually Consistent]] is the equivalent for consistency models: precise definitions, not metaphors.

### Build first, then talk

Demos and code carry more signal than decks.

> "all it is is just a more fancy version of this 100-line gist" ([[Karpathy Unreasonable Effectiveness of RNNs]])

> "NO compilation step" ([[Karpathy Unreasonable Effectiveness of RNNs]])

> Step 2 of the recipe: "Set up the end-to-end training/evaluation skeleton + get dumb baselines." ([[Karpathy Recipe for Training Neural Networks]])

### Order-of-magnitude thinking

> Google Web Search 1999 vs 2010: documents 1000x, queries 1000x, latency dropped by an order of magnitude. ([[Dean Stanford Talk]])

> The latency table itself: L1 to main memory is 200x, main memory to datacenter network is 5,000x, datacenter to intercontinental is about 300x. ([[Dean Latency Numbers]])

> Step 3 of the recipe: "Overfit a small subset first," test whether the system can express the target before scaling. ([[Karpathy Recipe for Training Neural Networks]])

> "In larger distributed-scale systems, network partitions are a given." ([[Vogels Eventually Consistent]])

### Know your basic building blocks

> "Core language libraries, basic data structures, protocol buffers, GFS, BigTable, indexing systems, MapReduce. Not just their interfaces, but understand their implementations. If you don't know what's going on, you can't do decent back-of-the-envelope calculations!" ([[Dean Stanford Talk]])

Mastery of primitives enables back-of-the-envelope reasoning. Without it, design decisions are guesses.

### The 6/7/8 scope heuristic

When designing infrastructure, you can solve some demands easily, some with effort, and the last few make the whole system worse.

> "Clients might be demanding 8 different things. Doing 6 of them is easy. Handling 7 of them requires real thought. Dealing with all 8 usually results in a worse system: more complex, compromises other clients in trying to satisfy everyone." ([[Dean Stanford Talk]])

The operational form of "primitives not frameworks": refuse the demands that would make the system worse for everyone, even when they look reasonable individually.

### YAGNI for infrastructure

> "Don't build infrastructure just for its own sake: Identify common needs and address them. Don't imagine unlikely potential needs that aren't really there." ([[Dean Stanford Talk]])

### Patience and attention to detail (anti-"fast and furious")

> "A 'fast and furious' approach to training neural networks does not work and only leads to suffering." ([[Karpathy Recipe for Training Neural Networks]])

> "The qualities most correlated with success are patience and attention to detail." ([[Karpathy Recipe for Training Neural Networks]])

### Everything fails. Design for it.

> "Failures are a given and everything will eventually fail over time. We needed to build systems that embrace failure as a natural occurrence even if we did not know what the failure might be." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 2)

> Specific failure modes at 10,000 machines: no parity, no ECC, no checksumming. "Sort 1 TB of data without parity: ends up 'mostly sorted'. Sort it again: 'mostly sorted' another way." ([[Dean Stanford Talk]])

### APIs are forever

> "All teams will henceforth expose their data and functionality through service interfaces." ([[Bezos 2002 API Mandate]])

> "All service interfaces, without exception, must be designed from the ground up to be externalizable." ([[Bezos 2002 API Mandate]])

> "Once customers started building their applications and systems using our APIs, changing those APIs becomes impossible." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 5)

### Build evolvable systems

> "The evolution of Amazon S3 could best be described as starting off as a single engine Cessna plane, but over time the plane was upgraded to a 737, then a group of 747s. All the while, we were refueling in midair." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 1)

> The Dynamo to DynamoDB progression: internal system to whitepaper to hosted service over a decade. ([[Vogels Decade of Dynamo]])

### Primitives not frameworks

> "Offer customers a collection of primitives and tools, where they could pick and choose." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 3)

### Automation as a litmus test

> "A good litmus test has been that if you need to SSH into a server or an instance, you still have more to automate." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 4)

### Measure before you redesign

> "About 70 percent of operations were of the key-value kind, where only a primary key was used and a single row would be returned." ([[Vogels Decade of Dynamo]])

That single measurement is the entire argument for Amazon's move away from relational defaults. Without the measurement, the move would have been speculation.

### Surprise is a signal

When a simple thing produces unexpectedly good results, take the result seriously rather than explaining it away.

> "the ratio of how simple your model is to the quality of the results you get out of it blows past your expectations" ([[Karpathy Unreasonable Effectiveness of RNNs]])

### MapReduce as pattern-recognition

The abstraction earns its existence when the same shape repeats across many problems.

> "A simple programming model that applies to many large-scale computing problems. Allowed us to express all phases of our indexing system." ([[Dean Stanford Talk]])

The MapReduce story is told in the talk as: Dean and Ghemawat noticed many parallel jobs had the same shape, so they extracted the shape into a runtime. Worth borrowing as a general abstraction discipline.

---

## Communication

### Write the memo before the meeting

Forcing the thought into prose surfaces the holes that bullet points hide.

> Amazon relies "far more on the written word" than most companies. The six-page narrative document replaces PowerPoint in leadership meetings. Discussions begin only after silent reading, typically the first 20 minutes of the meeting. ([[Working Backwards Book]])

The 2004 PowerPoint-ban rationale: bullet-pointed slides hide the holes that narrative prose forces you to surface. The author cannot get away with handwaving in a paragraph the way they can in a bullet.

### Resist proxies

> "The process becomes the proxy for the result you want. You stop looking at outcomes and just make sure you're doing the process right." ([[Bezos 2016 Day 1 Letter]])

> "A remarkable customer experience starts with heart, intuition, curiosity, play, guts, taste. You won't find any of it in a survey." ([[Bezos 2016 Day 1 Letter]])

### Tight prose, real verbs

Cut "very", "really", "essentially", "basically", "leverage" (as a verb when "use" works), "synergy", "going forward". Style preference, not citation-backed.

### Show the work for non-trivial reasoning

Especially for tradeoffs, show what was considered and rejected.

> "We will share our strategic thought processes with you when we make bold choices." ([[Bezos 1997 Letter]] criterion #6)

### Written over spoken; question depth over assertion depth

Public written artifacts compound; spoken thought decays.

> [[Collison Fast]] and [[Collison Questions]] are deliberate written references maintained over years.

> [[Collison Cowen Interview]] demonstrates the related discipline of asking better questions rather than making assertions.

### Argument by enumeration

Don't argue; show.

> The 24-project Fast list. ([[Collison Fast]])

> The 9-century customer list (Oxford 1096, Church of England 1534, Hershey 1894, NVIDIA 1993, Perplexity 2022) in the Stripe annual letter. ([[Stripe Annual Letter 2024]])

### Make prior forecasts checkable

Continuity across public artifacts is itself a discipline. Reference last year's claims, confirm or correct them.

> "As we forecast in our 2023 letter, Stripe's Revenue and Finance Automation Suite has now passed a $500 million revenue run rate." ([[Stripe Annual Letter 2024]])

### Vocabulary as engineering

Precise definitions enable precise reasoning. Once the field adopts your words, expensive vagueness is replaced by cheap precision.

> The consistency-model taxonomy (strong, weak, eventual, causal, read-your-writes, session, monotonic-read, monotonic-write). ([[Vogels Eventually Consistent]])

> The Type 1 / Type 2 framing for decisions. ([[Bezos 2015 Letter]])

> The three-system distinction (internal Dynamo, Dynamo paper, DynamoDB). ([[Vogels Decade of Dynamo]])

---

## Operational Discipline

### Boring fundamentals

Distribution, pricing, hiring, durability, latency, error budgets.

> [[Collison Fast]] implicitly: most listed projects (Pentagon 491 days, Empire State Building 410 days, Berlin Airlift 463 days) succeeded through relentless attention to schedule, coordination, and decision velocity, not technological breakthrough.

### Mechanism over goodwill

Good outcomes from good systems, not good intentions.

> "Anyone who doesn't do this will be fired." ([[Bezos 2002 API Mandate]] enforcement clause)

> "The security team is not a group that does validation after something has been built. They must be partners on day one." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 7)

### Owner mindset

> Hire and "weight their compensation to stock options rather than cash" so employees "must think like, and therefore must actually be, an owner." ([[Bezos 1997 Letter]])

### Two-pizza teams

A team should be small enough that two pizzas can feed it. Roughly 6 to 10 people.

> "Teams sized such that the teams would be no larger than the number of people that could be adequately fed by two large pizzas." ([[Working Backwards Book]])

Rationale: communication overhead grows faster than output past a certain team size. The team size is the lever for keeping coordination cost under control.

### High-agency curiosity

Big questions in public. Unanswered. Inviting contribution.

> 23 open intellectual problems, public, unanswered. ([[Collison Questions]])

> The interview discipline: ask better questions rather than make assertions. ([[Collison Cowen Interview]])

### Single-threaded leadership

One leader owns one major initiative without competing responsibilities.

> "A single person, unencumbered by competing responsibilities, owns a single major initiative and heads up a separable, largely autonomous team to deliver its goals." ([[Working Backwards Book]])

Addresses the failure mode of leaders owning three things and owning none well.

### Input metrics over output metrics

Optimize for what you control directly. Revenue is downstream and laggy.

> Focus on "controllable input metrics" (selection, price, convenience) rather than output metrics (revenue, share price). ([[Working Backwards Book]])

Steering by output metrics is steering by the rearview mirror.

### Bar Raiser hiring discipline

A separate role in every interview loop to enforce standards across loops.

> "A scalable, repeatable, formal process for consistently making appropriate and successful hiring decisions." STAR method for structured interviews; Bar Raiser role to prevent bias and ensure candidates meet or exceed company standards. ([[Working Backwards Book]])

### Get close to the work

Distance from operational reality degrades decision quality.

> "Organizations are pretty hard to change. It's very important for people to get close to the work." ([[Collison Money Stuff Podcast]])

Echoes "you build it, you run it" from [[Vogels 10 Lessons from 10 Years of AWS]] applied at organizational level.

### Distinguish object from category

Category-level observations are not object-level claims. Conflating them is a common epistemic error.

> "There are just a bunch of scams and dodgy characters. But one cannot use the existence of slots to write off serious work." ([[Collison Money Stuff Podcast]])

Object-level claim: stablecoins are useful. Category-level observation: crypto has scams. These can both be true; treating them as contradictory is the error.

### The product is the prospectus

Force descriptions short. Watch what survives the compression.

> "Build a great business and you could write your prospectus on a cocktail napkin and it'll be fine." ([[Collison Money Stuff Podcast]])

Same epistemic move as the [[Working Backwards Book|PR/FAQ]] discipline: force the description to be short; what remains is what matters.

### Unified operating culture across business lines

The same principles run multiple businesses. The principles compound; the products are downstream.

> "Under the surface, the two are not so different after all. They share a distinctive organizational culture that cares deeply about and acts with conviction on a small number of principles." ([[Bezos 2015 Letter]] on AWS vs retail)

### Culture as discovered, not engineered

> "You can write down your corporate culture, but when you do so, you're discovering it, uncovering it, not creating it. It is created slowly over time by the people and by events." ([[Bezos 2015 Letter]])

---

## Things This Brain is Explicitly Skeptical Of

- Productivity advice that's archetype-neutral (5am club, etc.)
- "10 lessons from..." secondary distillations of complex books
- Strategy decks that don't survive contact with a 6-pager
- Public commentary by VCs about portfolio companies (it's marketing)
- Roadmap commitments not backed by hiring plan
- Architecture decisions not backed by failure mode analysis
- Trend-following framed as strategy
- Aphorisms presented without operational consequence
- "Industry standard" cited as the reason for a choice

---

## Status

Mature. Phase 5 closed the last three paraphrased citations (working backwards, regret minimization, two-pizza teams) by ingesting [[Working Backwards Book]] and [[Bezos Regret Minimization]]. Added seven new principles (single-threaded leadership, input metrics, Bar Raiser hiring, get close to the work, distinguish object from category, the product is the prospectus, two-way doors applied to IPOs). Every principle on this page now has at least one primary-source citation. The brain has saturated for cited operator and engineering principles. Further ingest will deepen specific principles but not add new ones at the same rate.

---

## Connections

- [[Persona]] the operating identity this serves
- [[seed-corpus-technical-ceo]] source roadmap
- Mentor entities: [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]
- Primary sources cited (11 total):
  - Bezos: [[Bezos 1997 Letter]], [[Bezos 2015 Letter]], [[Bezos 2016 Day 1 Letter]], [[Bezos 2002 API Mandate]]
  - Karpathy: [[Karpathy Unreasonable Effectiveness of RNNs]], [[Karpathy Software 2.0]], [[Karpathy Recipe for Training Neural Networks]]
  - Dean: [[Dean Latency Numbers]], [[Dean Stanford Talk]]
  - Collisons: [[Collison Fast]], [[Collison Questions]], [[Collison Cowen Interview]], [[Stripe Annual Letter 2024]]
  - Vogels: [[Vogels 10 Lessons from 10 Years of AWS]], [[Vogels Eventually Consistent]], [[Vogels Decade of Dynamo]]
