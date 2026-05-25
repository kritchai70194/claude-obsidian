---
type: concept
title: Product-Market Fit
address: c-000032
complexity: intermediate
domain: product-discipline
aliases:
  - PMF
  - Product Market Fit
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - product
  - pmf
  - discipline
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Lenny Rachitsky]]"
  - "[[Paul Graham]]"
  - "[[Jeff Bezos]]"
  - "[[Lenny PMF Guide]]"
  - "[[Lenny Retention Benchmarks]]"
  - "[[PG Startup = Growth]]"
  - "[[PG Do Things That Dont Scale]]"
  - "[[Working Backwards Book]]"
  - "[[Planning Before Code]]"
---

# Product-Market Fit

The defining question of early-stage company building: have you made something people want enough that they will keep using it and tell others? Synthesizes [[Lenny Rachitsky]]'s measurable PMF framework, [[Paul Graham]]'s growth-rate definition, and [[Jeff Bezos]]'s working-backwards discipline.

PMF is not a milestone you cross once. It is a measurable state you achieve, lose, and re-achieve as the product, market, and competitive landscape evolve.

---

## What PMF Is

Three operational definitions, each correct from a different vantage:

**Lenny's three dimensions** ([[Lenny PMF Guide]]):
> "[PMF is when] you've made a product people want, can find and keep people sustainably, and makes a profit delivering to people at scale."

Three checks: desirability, sustainability, profitability. Most "PMF" claims fail at least one.

**PG's growth-rate compass** ([[PG Startup = Growth]]):
> A startup with PMF grows at 5-7% weekly minimum, 10%+ exceptionally. Below 1% weekly is a signal you have not figured it out.

Growth as proxy. PMF produces growth; the absence of growth (at scale that customer interactions can confirm) is the absence of PMF.

**Bezos's customer-disappointment frame** (parallel to Sean Ellis):
The PR/FAQ discipline in [[Working Backwards Book]] is the pre-product equivalent of Sean Ellis's 40%-very-disappointed survey: if you cannot write an exciting press release, the product is not worth building.

The three definitions converge on the same shape: customers want it, they keep coming back, they tell others, growth happens.

---

## How to Detect It

### Behavioral signals (the strongest)

From [[Lenny PMF Guide]]:

> "Customers complain loudly when your site goes down. People keep using the product even when it is broken. Customers ask to pay before you ask them to."

These three are the cleanest binary signals. If customers exhibit any of them, you are close to PMF or have it. If none, you do not.

### The Sean Ellis survey

> "How would you feel if you could no longer use [product]?" 40%+ "very disappointed" = PMF. ([[Lenny PMF Guide]])

Best for products with clear use cases. Survey active users, not lapsed. Useful confirmation, but downstream of the behavioral signals.

### Cohort retention curve shape

The most reliable quantitative metric ([[Lenny Retention Benchmarks]]):

- Declining to zero: no PMF
- Asymptoting to a positive floor: PMF for that floor segment
- Flat or rising over time: PMF + compounding effect

The shape matters more than the day-1 number. Benchmark thresholds by business model in [[Lenny Retention Benchmarks]].

### Growth rate

PG's compass ([[PG Startup = Growth]]): 5-7% weekly during early YC stage; 10%+ exceptional; 1% means you have not figured it out. Growth as the integrated signal.

---

## How to Find It

### Pre-PMF (before launch)

Pre-product signals are weaker but cheaper:
- Founder has been the customer for years (scratching own itch)
- Existing manual solutions exist (people pay for ugly workarounds)
- Customer interviews surface the same pain in the same words

The strongest pre-product practice is [[Working Backwards Book]]'s PR/FAQ: write the press release before building. If it does not get you excited, the product is not worth building.

### Early product (post-launch, pre-PMF)

Do unscalable work ([[PG Do Things That Dont Scale]]):
- Recruit users manually (door-to-door, hand-deliver)
- Make early users happy by extraordinary means
- Take Airbnb-style photos for them yourself
- Sit down and do the install (Stripe "Collison installation")

Pick narrow segment (Facebook started at Harvard). The contained fire builds the love that lets the product expand.

### Iterating toward PMF

The diagnostic loop:
1. Ship to early users
2. Watch cohort retention curve
3. If declining to zero: the product is not yet solving a real problem; iterate or pivot
4. If asymptoting low: the segment is wrong; find the segment where retention floor is high
5. If asymptoting at acceptable floor: you have PMF for that segment; expand

### The pivot signal

When iteration stops moving the retention curve, the product or the segment is wrong. The pivot is not failure; it is the diagnostic working as intended.

---

## How to Lose PMF

PMF is not permanent. Common ways to lose it:

- Market shifts (the underlying need changes)
- Competitor with better solution (the substitute eats your retention)
- Internal drift (product changes that erode the thing customers actually loved)
- Scale brings new segments (the original PMF segment becomes a minority; the new segments do not have PMF)

The discipline: re-measure regularly. The behavioral signals and retention curves should be tracked monthly, not just at the initial "do we have PMF?" check.

---

## What This Concept Teaches

- PMF is measurable, not a feeling.
- Three vantages (Lenny, PG, Bezos) converge on the same shape.
- Behavioral signals are upstream of survey signals; survey signals are upstream of growth.
- Retention curve shape is the most reliable single metric.
- Pre-PMF, do unscalable work and iterate on segments.
- PMF is not permanent; re-measure regularly.

---

## Connections

- [[Lenny Rachitsky]] mentor anchor for product discipline
- [[Paul Graham]] mentor anchor for early-stage epistemics
- [[Jeff Bezos]] mentor for the working-backwards parallel
- [[Lenny PMF Guide]], [[Lenny Retention Benchmarks]] foundational sources
- [[PG Startup = Growth]], [[PG Do Things That Dont Scale]] foundational sources
- [[Working Backwards Book]] the Bezos equivalent
- [[Operating Principles]] where the PMF-derived principles live with citations
- [[Planning Before Code]] adjacent; same shape (write the spec / plan before the work)
- [[Aggregation Theory]] adjacent; once you have PMF, the strategic question becomes about durability
