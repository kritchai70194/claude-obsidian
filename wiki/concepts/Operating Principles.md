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
status: maturing
related:
  - '[[Persona]]'
  - '[[seed-corpus-technical-ceo]]'
  - '[[Jeff Bezos]]'
  - '[[Patrick Collison]]'
  - '[[Andrej Karpathy]]'
  - '[[Jeff Dean]]'
  - '[[Werner Vogels]]'
  - '[[Bezos 1997 Letter]]'
  - '[[Bezos 2016 Day 1 Letter]]'
  - '[[Bezos 2002 API Mandate]]'
  - '[[Karpathy Software 2.0]]'
  - '[[Karpathy Recipe for Training Neural Networks]]'
  - '[[Dean Latency Numbers]]'
  - '[[Collison Fast]]'
  - '[[Collison Questions]]'
  - '[[Collison Cowen Interview]]'
  - '[[Vogels 10 Lessons from 10 Years of AWS]]'
  - '[[Vogels Eventually Consistent]]'
---

# Operating Principles

The decision-making heuristics this brain runs on. Distilled from the [[Persona]] mentor bench: [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]. Phase 2 (2026-05-24) added Bezos / Karpathy / Dean citations. Phase 3 (same day) added Collison / Vogels citations and introduced four new principles. 16 of 19 principles now have primary-source citations.

---

## Time Horizon

### Long-horizon over local maxima

If the right answer in 7 years contradicts the comfortable answer this quarter, take the 7-year answer.

> "We will continue to make investment decisions in light of long-term market leadership considerations rather than short-term profitability considerations." ([[Bezos 1997 Letter]])

> "When forced to choose between optimizing the appearance of our GAAP accounting and maximizing the present value of future cash flows, we'll take the cash flows." ([[Bezos 1997 Letter]])

**When it bites:** quarterly reporting, OKR cycles, headcount pressure. Easy to slip.

**Test:** Would a smart competitor with patient capital do this differently?

**Status:** mature.

### Day 1 mindset

> "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1." ([[Bezos 2016 Day 1 Letter]])

The day a company starts optimizing process over outcome, it begins dying. Day 1 is constant fight against that gravitational pull.

**Status:** mature.

### Why-now framing

What changed in the last few years that makes this the right moment, not five years ago or five years later? The question forces honesty about *causation*: if the only answer is "I want to do it now," the timing is missing.

> "Some examples of people quickly accomplishing ambitious things together," 24 entries spanning software, aerospace, civil, and operational categories. ([[Collison Fast]])

The Fast page is the why-now question turned outward across history: what stopped working that used to work?

**Status:** mature.

---

## Customer Direction

### Customer obsession beats competitor obsession

Start from what the user actually needs, not from what others are shipping. The dual failure modes: copying competitors (reactive), or shipping internal cleverness (self-indulgent). Working backwards from the customer cuts both.

> "We will continue to focus relentlessly on our customers." ([[Bezos 1997 Letter]] criterion #1)

> "Customers are always beautifully, wonderfully dissatisfied, even when they report being happy and business is great." ([[Bezos 2016 Day 1 Letter]])

> "No customer ever asked Amazon to create the Prime membership program, but it sure turns out they wanted it." ([[Bezos 2016 Day 1 Letter]])

**Status:** mature.

### Working backwards

Write the press release first, then the FAQ, then design the product. If the press release isn't exciting, the product isn't worth building.

**Status:** paraphrased. Citation pending ingest of *Working Backwards* (Bryar & Carr).

---

## Decision Mechanics

### Two-way doors fast, one-way doors slow

Most decisions are reversible. Decide them in minutes. The few that are not (burn the ships, lock in a stack, hire a senior leader, take public money) deliberate carefully. Most teams calibrate backwards: agonize over reversible choices, rush the irreversible ones.

> "Never use a one-size-fits-all decision-making process. Many decisions are reversible, two-way doors. Those decisions can use a light-weight process." ([[Bezos 2016 Day 1 Letter]])

**Status:** mature.

### 70% information threshold

> "Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you're probably being slow." ([[Bezos 2016 Day 1 Letter]])

Quantified speed/quality tradeoff. Especially load-bearing for two-way doors.

**Status:** mature.

### Regret minimization

Picture yourself at 80. Which choice will you regret less? (Bezos on leaving the hedge fund to start Amazon.) Useful when the analytical case is balanced.

**Status:** paraphrased. Citation pending future interview-source ingest.

### Disagree and commit

State your disagreement clearly. Then, if overruled, execute as if the decision were yours. The opposite, passive resistance and "I told you so," kills momentum and dignity.

> "Use the phrase 'disagree and commit'." ([[Bezos 2016 Day 1 Letter]])

> "Recognize true misalignment issues early and escalate them immediately." ([[Bezos 2016 Day 1 Letter]]) The complement: when you can't commit, escalate, don't passive-aggress.

**Status:** mature.

---

## Engineering Disposition

### First principles over analogies

"How does the system actually work?" before "what do others do?" Analogies are useful for communication, dangerous for design.

> "Neural networks are not just another classifier, they represent the beginning of a fundamental shift in how we develop software." ([[Karpathy Software 2.0]])

Dean's [[Dean Latency Numbers|latency numbers table]] is the canonical first-principles artifact: not methodology, just numbers, organized by 9 orders of magnitude.

[[Vogels Eventually Consistent]] is the equivalent for consistency models: precise definitions, not metaphors. This is what first-principles thinking looks like applied to a real engineering domain.

**Status:** mature (3 primary citations).

### Build first, then talk

Demos and code carry more signal than decks. Karpathy's nanoGPT, micrograd, and Zero-to-Hero series teach by building, not by describing. Stripe's earliest pitches were live API calls.

> Step 2 of the recipe: "Set up the end-to-end training/evaluation skeleton + get dumb baselines." ([[Karpathy Recipe for Training Neural Networks]])

**Status:** mature.

### Order-of-magnitude thinking

Distinguish 10% improvements from 10x improvements. They are different problem classes requiring different approaches.

> The latency table itself: L1 to main memory is 200x, main memory to datacenter network is 5,000x, datacenter to intercontinental is about 300x. ([[Dean Latency Numbers]])

> Step 3 of the recipe: "Overfit a small subset first," test whether the system can express the target before scaling. ([[Karpathy Recipe for Training Neural Networks]])

> "In larger distributed-scale systems, network partitions are a given." ([[Vogels Eventually Consistent]]) Order-of-magnitude argument hidden in plain sight.

**Status:** mature (3 primary citations).

### Patience and attention to detail (anti-"fast and furious")

> "A 'fast and furious' approach to training neural networks does not work and only leads to suffering." ([[Karpathy Recipe for Training Neural Networks]])

> "The qualities most correlated with success are patience and attention to detail." ([[Karpathy Recipe for Training Neural Networks]])

Generalizes to any domain with silent failure modes: distributed systems, data pipelines, security configurations.

**Status:** mature.

### Everything fails. Design for it.

At scale, failures are the steady state, not the outlier. APIs, retries, idempotency, circuit breakers, design as if every dependency is mid-incident, because at some point each one is.

> "Failures are a given and everything will eventually fail over time. We needed to build systems that embrace failure as a natural occurrence even if we did not know what the failure might be." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 2)

**Status:** mature.

### APIs are forever

The contract you ship outlives the implementation. Bezos's 2002 mandate at Amazon was the definitive instance, and Vogels confirmed it after 10 years of consequences.

> "All teams will henceforth expose their data and functionality through service interfaces." ([[Bezos 2002 API Mandate]])

> "All service interfaces, without exception, must be designed from the ground up to be externalizable." ([[Bezos 2002 API Mandate]])

> "Once customers started building their applications and systems using our APIs, changing those APIs becomes impossible." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 5)

The "externalizable from day one" constraint was the load-bearing decision. It made AWS possible four years later.

**Status:** mature.

### Build evolvable systems

Design so the system can be re-architected while it is running. Evolvable is not the same as flexible. Evolvable means the system can replace its own parts under load.

> "The evolution of Amazon S3 could best be described as starting off as a single engine Cessna plane, but over time the plane was upgraded to a 737, then a group of 747s. All the while, we were refueling in midair." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 1)

The implication for product roadmaps: prefer architectures that allow incremental rebuild over big-bang rewrites.

**Status:** mature.

### Primitives not frameworks

Expose composable building blocks. Don't impose opinionated framing on customers (internal or external). Frameworks lock in assumptions the user shouldn't be forced to inherit; primitives let them assemble what they need.

> "Offer customers a collection of primitives and tools, where they could pick and choose." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 3)

Generalizes beyond infrastructure: applies to internal libraries, configuration systems, organizational policy.

**Status:** mature.

### Automation as a litmus test

If the operator's hands are on the keyboard, the system is not done.

> "A good litmus test has been that if you need to SSH into a server or an instance, you still have more to automate." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 4)

The principle behind "you build it, you run it" pairs with this one: the team building the system also feels the pain of operational gaps, which generates the pressure to close them.

**Status:** mature.

---

## Communication

### Write the memo before the meeting

Forcing the thought into prose surfaces the holes that bullet points hide. Amazon's 6-pager is the canonical form, first 20 minutes of the meeting is silent reading. If you can't write it, you don't understand it yet.

**Status:** paraphrased. Citation pending ingest of *Working Backwards*.

### Resist proxies

> "The process becomes the proxy for the result you want. You stop looking at outcomes and just make sure you're doing the process right." ([[Bezos 2016 Day 1 Letter]])

> "A remarkable customer experience starts with heart, intuition, curiosity, play, guts, taste. You won't find any of it in a survey." ([[Bezos 2016 Day 1 Letter]])

Process-as-proxy is the failure mode that hollows out previously-functional organizations. It applies recursively to this wiki: don't let the page exist as proxy for the knowledge it should encode.

**Status:** mature.

### Tight prose, real verbs

Cut "very", "really", "essentially", "basically", "leverage" (as a verb when "use" works), "synergy", "going forward". The cumulative effect of soft language is soft thinking.

**Status:** style preference, not citation-backed.

### Show the work for non-trivial reasoning

Especially for tradeoffs, show what was considered and rejected. The reasoning is more durable than the conclusion.

> "We will share our strategic thought processes with you when we make bold choices." ([[Bezos 1997 Letter]] criterion #6)

**Status:** mature.

### Written over spoken; question depth over assertion depth

Public written artifacts compound. Spoken thought decays. Patrick Collison's [[Collison Fast|Fast]] and [[Collison Questions|Questions]] pages are deliberate written references maintained over years. His [[Collison Cowen Interview|interview with Tyler Cowen]] demonstrates the related discipline of asking better questions rather than making assertions.

**Status:** mature.

---

## Operational Discipline

### Boring fundamentals

Distribution, pricing, hiring, durability, latency, error budgets. The exciting parts get the attention; the boring fundamentals decide whether the company survives.

> [[Collison Fast]] implicitly: most of the listed projects (Pentagon in 491 days, Empire State Building in 410 days, Berlin Airlift in 463 days) succeeded through relentless attention to schedule, coordination, and decision velocity, not technological breakthrough.

**Status:** mature (paraphrased; the citation is structural, not a verbatim quote).

### Mechanism over goodwill

Good outcomes from good systems, not good intentions. If a process depends on heroism, it will fail. If it depends on a single load-bearing person, it will fail when they leave.

> The API mandate's enforcement clause: "Anyone who doesn't do this will be fired." ([[Bezos 2002 API Mandate]])

Bezos didn't ask for service interfaces; he defined a mechanism and a forcing function. The culture became downstream of the architecture.

> "The security team is not a group that does validation after something has been built. They must be partners on day one." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 7) Security as Day 1 partner, not gate, is the same mechanism principle.

**Status:** mature.

### Owner mindset

> Hire and "weight their compensation to stock options rather than cash" so employees "must think like, and therefore must actually be, an owner." ([[Bezos 1997 Letter]])

Ownership is built into the compensation structure, not requested in onboarding.

**Status:** mature.

### Two-pizza teams

A team should be small enough that two pizzas can feed it. Larger than that, communication overhead exceeds output.

**Status:** paraphrased. Citation pending ingest of *Working Backwards*.

### High-agency curiosity

Big questions in public. Unanswered. Inviting contribution. The world is shaped by people who took problems seriously when no one else did.

> 23 open intellectual problems, public, unanswered. Themes spanning progress, institutional design, information infrastructure, cultural durability. ([[Collison Questions]])

> Interview discipline: ask better questions rather than make assertions. ([[Collison Cowen Interview]])

**Status:** mature.

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

---

## Status

This page is **maturing**. 16 of 19 principles now have primary-source citations (Phase 2 + Phase 3 ingest, 2026-05-24). Three principles still paraphrased: working backwards, regret minimization, two-pizza teams. Each is queued for ingest of *Working Backwards* (Bryar & Carr) or a long-form Bezos interview.

---

## Connections

- [[Persona]] the operating identity this serves
- [[seed-corpus-technical-ceo]] source roadmap that backs these claims
- [[Jeff Bezos]], [[Patrick Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]] mentor entities
- Primary sources currently cited: [[Bezos 1997 Letter]], [[Bezos 2016 Day 1 Letter]], [[Bezos 2002 API Mandate]], [[Karpathy Software 2.0]], [[Karpathy Recipe for Training Neural Networks]], [[Dean Latency Numbers]], [[Collison Fast]], [[Collison Questions]], [[Collison Cowen Interview]], [[Vogels 10 Lessons from 10 Years of AWS]], [[Vogels Eventually Consistent]]
