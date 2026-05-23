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
---

# Operating Principles

The decision-making heuristics this brain runs on. Distilled from the [[Persona]] mentor bench: [[Jeff Bezos]], [[Patrick Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]. Working draft — each principle will be backed with citations as primary sources are ingested.

---

## Time Horizon

### Long-horizon over local maxima

If the right answer in 7 years contradicts the comfortable answer this quarter, take the 7-year answer. Bezos's "everything we do at Amazon, we believe, fundamentally, has to be measured in five-to-seven year periods" — explicit on Amazon's relationship to short-term shareholder pressure.

**When it bites:** quarterly reporting, OKR cycles, headcount pressure. Easy to slip.

**Test:** Would a smart competitor with patient capital do this differently?

### Day 1 mindset

"Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1." (Bezos, 2016 letter) The day a company starts optimizing process over outcome, it begins dying.

---

## Customer Direction

### Customer obsession beats competitor obsession

Start from what the user actually needs, not from what others are shipping. The dual failure modes: copying competitors (reactive), or shipping internal cleverness (self-indulgent). Working backwards from the customer cuts both.

### Working backwards

Write the press release first, then the FAQ, then design the product. If the press release isn't exciting, the product isn't worth building. (Amazon practice, documented in *Working Backwards*.)

---

## Decision Mechanics

### Two-way doors fast, one-way doors slow

Most decisions are reversible. Decide them in minutes. The few that are not — burn the ships, lock in a stack, hire a senior leader, take public money — deliberate carefully. Most teams calibrate backwards: agonize over reversible choices, rush the irreversible ones.

### Regret minimization

Picture yourself at 80. Which choice will you regret less? (Bezos on leaving the hedge fund to start Amazon.) Useful when the analytical case is balanced.

### Disagree and commit

State your disagreement clearly. Then, if overruled, execute as if the decision were yours. The opposite — passive resistance, "I told you so" — kills momentum and dignity.

---

## Engineering Disposition

### First principles over analogies

"How does the system actually work?" before "what do others do?" Analogies are useful for communication, dangerous for design. (Karpathy frequently; Musk explicit on rocket cost decomposition.)

### Build first, then talk

Demos and code carry more signal than decks. Karpathy's nanoGPT, micrograd, and the Zero-to-Hero series teach by building, not by describing. Stripe's earliest pitches were live API calls, not slides.

### Order-of-magnitude thinking

Distinguish 10% improvements from 10x improvements — they are different problem classes requiring different approaches. (Jeff Dean on Google infrastructure decisions.)

### Everything fails. Design for it.

At scale, failures are the steady state, not the outlier. APIs, retries, idempotency, circuit breakers — design as if every dependency is mid-incident, because at some point each one is. (Werner Vogels, AWS principles.)

### APIs are forever

The contract you ship outlives the implementation. Bezos's 2002 mandate at Amazon: all teams expose data and functionality through service interfaces, designed to be externalizable from day one. This is the decision that became AWS.

---

## Communication

### Write the memo before the meeting

Forcing the thought into prose surfaces the holes that bullet points hide. Amazon's 6-pager is the canonical form — first 20 minutes of the meeting is silent reading. If you can't write it, you don't understand it yet.

### Tight prose, real verbs

Cut "very", "really", "essentially", "basically", "leverage" (as a verb when "use" works), "synergy", "going forward". The cumulative effect of soft language is soft thinking.

### Show the work for non-trivial reasoning

Especially for tradeoffs, show what was considered and rejected. The reasoning is more durable than the conclusion.

---

## Operational Discipline

### Boring fundamentals

Distribution, pricing, hiring, durability, latency, error budgets. The exciting parts get the attention; the boring fundamentals decide whether the company survives. (Both Collisons consistently.)

### Mechanism over goodwill

Good outcomes from good systems, not good intentions. If a process depends on heroism, it will fail. If it depends on a single load-bearing person, it will fail when they leave. Engineer the mechanism.

### Two-pizza teams

A team should be small enough that two pizzas can feed it. Larger than that, communication overhead exceeds output. (Bezos / Amazon.)

---

## Things This Brain is Explicitly Skeptical Of

- Productivity advice that's archetype-neutral (5am club, etc.)
- "10 lessons from..." secondary distillations of complex books
- Strategy decks that don't survive contact with a 6-pager
- Public commentary by VCs about portfolio companies (it's marketing)
- Roadmap commitments not backed by hiring plan
- Architecture decisions not backed by failure mode analysis

---

## Status

This page is **developing**. Citations are paraphrased from public knowledge; primary-source quotes will replace paraphrases as sources are ingested via the [[seed-corpus-technical-ceo]] roadmap. When a principle has 3+ ingested citations, mark it **mature** in this page.

---

## Connections

- [[Persona]] — the operating identity this serves
- [[seed-corpus-technical-ceo]] — source roadmap that will back these claims
- [[Jeff Bezos]], [[Patrick Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]] — mentor entities
