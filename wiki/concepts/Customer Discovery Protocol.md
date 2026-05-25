---
type: concept
title: Customer Discovery Protocol
address: c-000215
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - customer-discovery
  - synthesis
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Steve Blank]]"
  - "[[Rob Fitzpatrick]]"
  - "[[Paul Graham]]"
  - "[[Lenny Rachitsky]]"
  - "[[Decision Journals]]"
  - "[[seed-corpus-decision-customer-discovery]]"
---

# Customer Discovery Protocol

Synthesis page on the explicit customer-interview methodology. Combines [[Steve Blank]]'s Customer Development framework with [[Rob Fitzpatrick]]'s Mom Test discipline. The brain already implies customer discovery via [[Paul Graham]] "do things that don't scale" and [[Lenny Rachitsky]] PMF interviews; this page makes the protocol explicit.

The core problem: most customer interviews produce false positives. Customers lie to be polite. Founders hear what they want to hear. The interview protocol exists to eliminate the false positives so the founder can act on signal.

---

## The Two-Layer Framework

### Layer 1: Customer Development (Blank)

> A startup is not a small company; it is a search for a business model. The plan is hypotheses to test, not commitments to execute. ([[Blank Four Steps to Epiphany]])

The 4 stages:

1. **Customer Discovery:** identify the customer + problem + solution + channel + market hypotheses. Test them in interviews. Confirm or pivot.
2. **Customer Validation:** prove repeatable sales process. Sell to early customers. Confirm or pivot.
3. **Customer Creation:** drive end-user demand into the sales channel.
4. **Company Building:** transition from search to execute. Build functional org.

Most failed startups jump from Stage 1 (or skip it entirely) to Stage 4, building a functional org for a product nobody wants. The Customer Development cycle forces sequential validation.

### Layer 2: Mom Test (Fitzpatrick)

> Even your mother can't lie to a properly designed question. ([[Fitzpatrick Mom Test]])

The three rules:

1. **Talk about their life, not your idea.** Don't pitch; interview.
2. **Ask about specifics in the past, not generics or opinions about the future.** "When was the last time you did X?" not "Would you use a product that does X?"
3. **Talk less, listen more.** If you're explaining, you're not learning.

Combined: Blank tells you WHAT to test (the 5 hypotheses); Fitzpatrick tells you HOW to test them (the question pattern that produces signal).

---

## The Question Pattern (Fitzpatrick)

### Bad questions (produce false positives)

| Question | Why bad |
|---|---|
| "Do you think it's a good idea?" | Polite people say yes |
| "Would you buy a product that does X?" | Hypothetical; verbal yes ≠ purchase yes |
| "How much would you pay for it?" | No skin in the game; numbers meaningless |
| "What features would you want?" | Customers can't design products |
| "Would you use it?" | Politeness bias |

### Good questions (produce signal)

| Question | What it surfaces |
|---|---|
| "What did you do the last time this problem came up?" | Specific past behavior, not hypothetical |
| "Where in your day does this fit?" | Workflow context |
| "Why do you bother?" | Motivation; reveals if problem is real |
| "Can you show me how you currently solve this?" | Observed behavior > stated behavior |
| "What's frustrating about how you're solving it?" | Problem-validation without product-pitching |
| "How often does this come up?" | Frequency (if rare, weak problem) |
| "Who else has this problem?" | Network signal; do they introduce you? |
| "What would have to change for you to switch?" | Switching cost / commitment threshold |

---

## The Signal Hierarchy

> Observed behavior > stated past behavior > stated hypothetical behavior > stated opinion. ([[Fitzpatrick Mom Test]])

Most founders collect the bottom (stated opinions: "this is a good idea"). The top of the hierarchy is much rarer but worth 10x:

- **Stated opinion:** "I'd use this." (Cheap; meaningless.)
- **Stated hypothetical:** "I'd pay $X for this." (Better, but still hypothetical.)
- **Stated past:** "Last week I spent 3 hours doing X." (Specific; real.)
- **Observed:** "Can I watch you do this?" (Observed; highest signal.)
- **Behavioral commitment:** "Will you pay a deposit?" (Real signal: they put resources behind it.)

The discipline: design interviews to climb the hierarchy. End every interview with a commitment ask, not a "what do you think?".

---

## The Commitments Scale (Fitzpatrick)

Three commitments, in increasing strength:

1. **Time:** will they meet again? Will they spend 30+ min in a follow-up?
2. **Reputation:** will they introduce you to 2-3 other potential customers? Will they let you mention them in your pitch?
3. **Money:** will they pre-pay? Sign a letter of intent? Sign an actual contract?

A "good interview" without a commitment ask is mostly noise. An "interview" with a money commitment is the actual signal. Most founders don't ask, and so they don't know.

---

## How Many Interviews

The Blank rule (taught at Lean Launchpad): **100 interviews in 10 weeks** for early-stage discovery. The pace and density matter:

- Too few (10-20) and you over-fit to specific customers.
- Too many (500+) without iteration and you're not learning, just collecting.
- 100 in 10 weeks lets you iterate hypotheses 3-5 times based on aggregated learning.

After Customer Discovery (stage 1), interview cadence drops to 20-30 per quarter as you transition to Customer Validation, then to ongoing customer feedback once you're in market.

---

## Per-Hypothesis Testing

Blank's hypothesis grid (simplified):

| Hypothesis | Test | Pivot criteria |
|---|---|---|
| Customer profile (who) | First 20 interviews; confirm pattern | If <30% of interviewed customers fit, pivot |
| Problem (what) | Ask about past behavior; observe workflow | If problem is "nice to have", pivot |
| Solution (how) | Show prototype/wireframe; ask "would this help?" | If reaction is lukewarm, redesign |
| Channel (where) | Where do customers learn about products in this category? | If acquisition is too expensive at CAC > LTV, pivot |
| Market (how big) | TAM math + bottom-up estimate | If <$1B addressable, consider pivot to bigger market |

The pivot is a planned response to evidence, not panic. Most successful startups pivoted 2-3 times before finding PMF.

---

## Common Failure Modes

### Founders pitch instead of interview

Symptom: founder spends 30 min explaining the product; customer spends 5 min nodding. Solution: don't bring the product into the interview at all in early discovery. Talk about the customer's life.

### Founders cherry-pick the positives

Symptom: founder writes up "all 20 customers loved it" after the call. Solution: write up specific quotes + observed behaviors, not summary impressions. Have a co-founder or advisor read the transcripts.

### Founders confuse politeness with signal

Symptom: customer says "yes, I'd use it" but doesn't commit to anything. Solution: always end with a commitment ask. If they won't commit time, reputation, or money, the verbal "yes" is noise.

### Founders interview existing relationships

Symptom: interview list is friends, family, network connections. Solution: cold outreach + targeted lists. Friendly interviews produce false positives even with good questions.

### Founders stop too early

Symptom: 10 interviews, "the pattern is clear", commit to product. Solution: do at least 30 before believing the pattern; do 100 for big decisions.

---

## When Customer Discovery Ends

The end signal:

- 60%+ of interviewed customers in target profile express the same problem in similar language.
- 30%+ of those have already cobbled together a workaround (real signal of pain).
- 10%+ commit to time, reputation, or money for the proposed solution.

If these thresholds aren't met after 100 interviews, the discovery hypothesis is wrong. Pivot one or more hypotheses; restart discovery.

---

## Operating Principles Pulled From This Page

In [[Operating Principles]]:

- **Customer Development before product specification.** ([[Blank Four Steps to Epiphany]])
- **A startup is a search for a business model, not a small company.** ([[Steve Blank]])
- **Get out of the building.** ([[Steve Blank]])
- **Mom Test the questions: ask about specific past behavior, not hypothetical future opinion.** ([[Fitzpatrick Mom Test]])
- **Observed behavior > stated behavior > stated opinion.** ([[Fitzpatrick Mom Test]])
- **End every interview with a commitment ask (time, reputation, or money).** ([[Fitzpatrick Question Patterns]])
- **100 interviews in 10 weeks for early-stage discovery.** ([[Blank Lean Launchpad]])
- **Pivot is planned response to evidence, not panic.** ([[Blank Four Steps to Epiphany]])

---

## Connections

- [[Steve Blank]] (Customer Development) and [[Rob Fitzpatrick]] (Mom Test) are the two anchors
- [[Decision Journals]] is the companion concept for the decision side
- Cross-pole: [[Paul Graham]] "do things that don't scale" + "make something people want" + "ideas are noticed", [[Lenny Rachitsky]] PMF interviews + retention diagnostics, [[Andrew Chen]] atomic network bootstrap (which requires customer discovery to find), [[Andy Raskin]] strategic narrative is built from customer discovery (the world change is found, not invented)
