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
status: developing
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
---

# Operating Principles

The decision-making heuristics this brain runs on. Distilled from the [[Persona]] mentor bench: [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]. Phase 2 ingest (2026-05-24) landed primary-source citations on 11 of the principles below; the remaining principles are paraphrased and marked as such.

---

## Time Horizon

### Long-horizon over local maxima

If the right answer in 7 years contradicts the comfortable answer this quarter, take the 7-year answer.

> "We will continue to make investment decisions in light of long-term market leadership considerations rather than short-term profitability considerations.", [[Bezos 1997 Letter]]

> "When forced to choose between optimizing the appearance of our GAAP accounting and maximizing the present value of future cash flows, we'll take the cash flows.", [[Bezos 1997 Letter]]

**When it bites:** quarterly reporting, OKR cycles, headcount pressure. Easy to slip.

**Test:** Would a smart competitor with patient capital do this differently?

**Status:** mature (2 primary citations).

### Day 1 mindset

> "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1.", [[Bezos 2016 Day 1 Letter]]

The day a company starts optimizing process over outcome, it begins dying. Day 1 is constant fight against that gravitational pull.

**Status:** mature.

---

## Customer Direction

### Customer obsession beats competitor obsession

Start from what the user actually needs, not from what others are shipping. The dual failure modes: copying competitors (reactive), or shipping internal cleverness (self-indulgent). Working backwards from the customer cuts both.

> "We will continue to focus relentlessly on our customers.", [[Bezos 1997 Letter]] (criterion #1)

> "Customers are always beautifully, wonderfully dissatisfied, even when they report being happy and business is great.", [[Bezos 2016 Day 1 Letter]]

> "No customer ever asked Amazon to create the Prime membership program, but it sure turns out they wanted it.", [[Bezos 2016 Day 1 Letter]]

**Status:** mature.

### Working backwards

Write the press release first, then the FAQ, then design the product. If the press release isn't exciting, the product isn't worth building.

**Status:** paraphrased. Citation pending ingest of *Working Backwards* (Bryar & Carr).

---

## Decision Mechanics

### Two-way doors fast, one-way doors slow

Most decisions are reversible. Decide them in minutes. The few that are not, burn the ships, lock in a stack, hire a senior leader, take public money, deliberate carefully. Most teams calibrate backwards: agonize over reversible choices, rush the irreversible ones.

> "Never use a one-size-fits-all decision-making process. Many decisions are reversible, two-way doors. Those decisions can use a light-weight process.", [[Bezos 2016 Day 1 Letter]]

**Status:** mature.

### 70% information threshold

> "Most decisions should probably be made with somewhere around 70% of the information you wish you had. If you wait for 90%, in most cases, you're probably being slow.", [[Bezos 2016 Day 1 Letter]]

Quantified speed/quality tradeoff. Especially load-bearing for two-way doors.

**Status:** mature.

### Regret minimization

Picture yourself at 80. Which choice will you regret less? (Bezos on leaving the hedge fund to start Amazon.) Useful when the analytical case is balanced.

**Status:** paraphrased. Citation pending future interview-source ingest.

### Disagree and commit

State your disagreement clearly. Then, if overruled, execute as if the decision were yours. The opposite, passive resistance, "I told you so", kills momentum and dignity.

> "Use the phrase 'disagree and commit'.", [[Bezos 2016 Day 1 Letter]]

> "Recognize true misalignment issues early and escalate them immediately.", [[Bezos 2016 Day 1 Letter]] (the complement: when you can't commit, escalate, don't passive-aggress)

**Status:** mature.

---

## Engineering Disposition

### First principles over analogies

"How does the system actually work?" before "what do others do?" Analogies are useful for communication, dangerous for design.

> "Neural networks are not just another classifier, they represent the beginning of a fundamental shift in how we develop software.", [[Karpathy Software 2.0]]

Dean's [[Dean Latency Numbers|latency numbers table]] is the canonical first-principles artifact: not methodology, just numbers, organized by 9 orders of magnitude.

**Status:** mature (2 primary citations).

### Build first, then talk

Demos and code carry more signal than decks. Karpathy's nanoGPT, micrograd, and Zero-to-Hero series teach by building, not by describing. Stripe's earliest pitches were live API calls.

> Step 2 of the recipe: "Set up the end-to-end training/evaluation skeleton + get dumb baselines.", [[Karpathy Recipe for Training Neural Networks]]

**Status:** mature.

### Order-of-magnitude thinking

Distinguish 10% improvements from 10x improvements, they are different problem classes requiring different approaches.

> The latency table itself: L1 → main memory is **200×**, main memory → datacenter network is **5,000×**, datacenter → intercontinental is **~300×**., [[Dean Latency Numbers]]

> Step 3 of the recipe: "Overfit a small subset first", test whether the system can express the target before scaling., [[Karpathy Recipe for Training Neural Networks]]

**Status:** mature.

### Patience and attention to detail (anti-"fast and furious")

> "A 'fast and furious' approach to training neural networks does not work and only leads to suffering.", [[Karpathy Recipe for Training Neural Networks]]

> "The qualities most correlated with success are patience and attention to detail.", [[Karpathy Recipe for Training Neural Networks]]

Generalizes to any domain with silent failure modes: distributed systems, data pipelines, security configurations.

**Status:** mature.

### Everything fails. Design for it.

At scale, failures are the steady state, not the outlier. APIs, retries, idempotency, circuit breakers, design as if every dependency is mid-incident, because at some point each one is.

**Status:** paraphrased. Citation pending ingest of [[Werner Vogels]]'s "All Things Distributed" posts.

### APIs are forever

The contract you ship outlives the implementation. Bezos's 2002 mandate at Amazon was the definitive instance.

> "All teams will henceforth expose their data and functionality through service interfaces.", [[Bezos 2002 API Mandate]]

> "All service interfaces, without exception, must be designed from the ground up to be externalizable.", [[Bezos 2002 API Mandate]]

The "externalizable from day one" constraint was the load-bearing decision. It made AWS possible four years later.

**Status:** mature.

---

## Communication

### Write the memo before the meeting

Forcing the thought into prose surfaces the holes that bullet points hide. Amazon's 6-pager is the canonical form, first 20 minutes of the meeting is silent reading. If you can't write it, you don't understand it yet.

**Status:** paraphrased. Citation pending ingest of *Working Backwards*.

### Resist proxies

> "The process becomes the proxy for the result you want. You stop looking at outcomes and just make sure you're doing the process right.", [[Bezos 2016 Day 1 Letter]]

> "A remarkable customer experience starts with heart, intuition, curiosity, play, guts, taste. You won't find any of it in a survey.", [[Bezos 2016 Day 1 Letter]]

Process-as-proxy is the failure mode that hollows out previously-functional organizations. It applies recursively to this wiki: don't let the page exist as proxy for the knowledge it should encode.

**Status:** mature.

### Tight prose, real verbs

Cut "very", "really", "essentially", "basically", "leverage" (as a verb when "use" works), "synergy", "going forward". The cumulative effect of soft language is soft thinking.

**Status:** style preference, not citation-backed.

### Show the work for non-trivial reasoning

Especially for tradeoffs, show what was considered and rejected. The reasoning is more durable than the conclusion.

Bezos echoes this in criterion #6 of the 1997 letter: "We will share our strategic thought processes with you when we make bold choices.", [[Bezos 1997 Letter]]

**Status:** mature.

---

## Operational Discipline

### Boring fundamentals

Distribution, pricing, hiring, durability, latency, error budgets. The exciting parts get the attention; the boring fundamentals decide whether the company survives.

**Status:** paraphrased. Citation pending [[Patrick Collison]] / [[John Collison]] interview ingest.

### Mechanism over goodwill

Good outcomes from good systems, not good intentions. If a process depends on heroism, it will fail. If it depends on a single load-bearing person, it will fail when they leave.

> The API mandate's enforcement clause: "Anyone who doesn't do this will be fired.", [[Bezos 2002 API Mandate]]

Bezos didn't ask for service interfaces; he defined a mechanism and a forcing function. The culture became downstream of the architecture.

**Status:** mature.

### Owner mindset

> Hire and "weight their compensation to stock options rather than cash" so employees "must think like, and therefore must actually be, an owner.", [[Bezos 1997 Letter]]

Ownership is built into the compensation structure, not requested in onboarding.

**Status:** mature.

### Two-pizza teams

A team should be small enough that two pizzas can feed it. Larger than that, communication overhead exceeds output.

**Status:** paraphrased. Citation pending ingest of *Working Backwards*.

---

## Things This Brain is Explicitly Skeptical Of

- Productivity advice that's archetype-neutral (5am club, etc.)
- "10 lessons from..." secondary distillations of complex books
- Strategy decks that don't survive contact with a 6-pager
- Public commentary by VCs about portfolio companies (it's marketing)
- Roadmap commitments not backed by hiring plan
- Architecture decisions not backed by failure mode analysis
- Trend-following framed as strategy

---

## Status

This page is **developing → maturing.** 11 of ~18 principles now have primary-source citations (Phase 2 ingest, 2026-05-24). When the remaining principles are cited from queued sources ([[Werner Vogels]] All Things Distributed, *Working Backwards*, Collison interviews), promote the page to **mature**.

---

## Connections

- [[Persona]], the operating identity this serves
- [[seed-corpus-technical-ceo]], source roadmap that backs these claims
- [[Jeff Bezos]], [[Patrick Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]], mentor entities
- Primary sources currently cited: [[Bezos 1997 Letter]], [[Bezos 2016 Day 1 Letter]], [[Bezos 2002 API Mandate]], [[Karpathy Software 2.0]], [[Karpathy Recipe for Training Neural Networks]], [[Dean Latency Numbers]]
