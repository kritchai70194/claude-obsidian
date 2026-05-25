---
type: concept
title: Decision Journals
address: c-000214
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - decision-protocols
  - synthesis
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Annie Duke]]"
  - "[[Daniel Kahneman]]"
  - "[[Charlie Munger]]"
  - "[[Jeff Bezos]]"
  - "[[seed-corpus-decision-customer-discovery]]"
---

# Decision Journals

Synthesis page on the explicit decision-recording methodology. Combines [[Annie Duke]]'s decision-journal framework with [[Daniel Kahneman]]'s bias-correction approach and [[Charlie Munger]]'s inversion practice. The brain already has implicit decision discipline (Bezos two-way doors, Munger inversion); this page makes the protocol explicit.

The core problem: humans learn from outcomes, not from decisions. A good decision can produce a bad outcome (bad luck); a bad decision can produce a good outcome (good luck). Without a decision journal, the founder cannot tell which is which. With one, they can.

---

## The Resulting Problem (Duke)

> "Resulting" is the bias of judging a decision by its outcome rather than by the quality of the decision process. ([[Duke Thinking in Bets]])

Examples:
- Founder raises $50M at $500M valuation in 2021. In 2023, the company struggles; the round terms look bad. Was the 2021 decision wrong? Maybe, maybe not. Depends on what was known and reasonable to expect at the time.
- Founder bets product on a 6-month timeline. The team ships in 5 months. Was the original bet good? Or was the team coasting because the goal was too easy?
- Founder hires VP Sales who underperforms. Was the hiring decision wrong? Or was the hire correct but execution bad?

Without a decision journal recorded at the time, the founder rationalizes backward. With one, they can evaluate the decision separately from the outcome.

---

## The Journal Entry Format

What to record at the time of decision:

```
Decision: [what we're deciding]
Date: [when]
Stakeholder: [who decides]
Context: [what's true about the world right now]
Options considered: [3+ options, even if obvious]
Reasoning for choice: [why this option over the others]
Expected outcomes: [what we think happens]
Confidence: [probability assignment, e.g., 70%]
Time horizon: [when we'll know if right]
What would change our mind: [specific signals]
```

Optional additions:
- **Pre-mortem:** if this decision turns out to be wrong, what was the cause? (Munger inversion applied.)
- **Reversibility:** two-way door or one-way door? (Bezos frame.)
- **Decision-maker confidence calibration:** are we underconfident or overconfident historically?

---

## Review Cadence

The journal is useful only if reviewed:

- **Quarterly:** review decisions from the previous quarter. For each, evaluate: was the decision good independent of the outcome?
- **Semi-annually:** roll up patterns. Are we systematically over- or under-confident? Are we making the same mistake repeatedly?
- **Per-incident:** when a decision produces a bad outcome, review the journal entry. Was the reasoning sound? Was new information available that we didn't have?

The discipline is uncomfortable. Most founders avoid it. The benefit compounds over years; a founder who has reviewed 200+ decisions over a decade has a calibrated decision sense that no other practice produces.

---

## Cross-Pole Integration

The decision journal is the explicit version of:

- **Bezos two-way doors:** explicitly record whether the decision is reversible. The framework forces deliberation calibration.
- **Munger inversion:** the "if this is wrong, what was the cause" pre-mortem is applied inversion.
- **Kahneman base rate:** the "expected outcomes" + "confidence" forces explicit probability, which surfaces base-rate violations.
- **Naval long-term games:** the "time horizon" forces multi-cycle thinking.
- **Horowitz wartime/peacetime:** the "context" should name the current mode.

The journal does not invent new discipline; it forces the existing implicit disciplines to surface in writing.

---

## Team Variants

Beyond individual journals:

### Pre-decision team review

Before a major decision (hire, large spend, strategic pivot), the team writes their independent journal entries first, then shares. The independent writing prevents anchoring (Kahneman bias) and surfaces disagreements before they become political.

### Truthseeking pods

[[Duke Thinking in Bets]]'s concept: a small group committed to honest decision feedback. The team reviews each other's decision journals quarterly. Defaults to praise are useless; defaults to honest critique are useful.

### Decision logs as institutional memory

When the team grows, individual journals can't scale. Institutional decision logs (especially for hiring, pricing, product roadmap pivots) become the memory across leadership transitions. Amazon's narrative culture (6-pagers) is the institutional version of this discipline.

---

## When NOT to Journal

The journal is for **important, non-trivial decisions**. The signal-to-noise ratio breaks if everything is journaled.

- **Daily operational decisions:** what to work on today, which email to answer. Skip.
- **Reversible micro-decisions:** what color the button is. Skip.
- **High-frequency low-stakes:** which restaurant for lunch. Skip.

Journal only when the decision is:
- Worth at least 1 hour of consideration.
- Has stakes that matter (financial, strategic, reputational).
- Has uncertainty (not "we obviously do X").
- Has alternatives that were seriously considered.

This filters to roughly 10-30 decisions per quarter for a founder; manageable.

---

## The Kelly Criterion Calibration

[[Duke Thinking in Bets]] adapts the Kelly Criterion (optimal bet sizing in gambling): bet size should be proportional to edge and inversely proportional to uncertainty.

Applied to startup decisions:

- **High edge + low uncertainty:** go all-in. Examples: clear PMF + scaling decision.
- **High edge + high uncertainty:** medium bet. Examples: new market expansion with anecdotal evidence.
- **Low edge + low uncertainty:** small bet or pass. Examples: incremental feature.
- **Low edge + high uncertainty:** pass. Examples: speculative pivot without evidence.

Most founders go all-in on low-edge bets. The journal captures the edge + uncertainty estimates at the time, which calibrates bet sizing over time.

---

## Quit Criteria (Duke 2022)

> The optimal time to quit is "when you start to think about quitting"—because most people quit too late. ([[Duke Quit]])

Pre-commit to quit criteria in the journal:

- "We quit the X initiative if metric Y has not reached threshold Z by date W."
- "We pivot the company if cohort retention has not reached X% by month N."
- "I exit my CEO role if my truthseeking pod tells me I'm the wrong person."

Pre-commitment removes in-the-moment rationalization. Without pre-commitment, sunk cost bias keeps the founder in losing positions for 6-12 months too long, costing the company.

---

## Operating Principles Pulled From This Page

In [[Operating Principles]] (Mental Models section or new sub-section):

- **Decision quality is the controllable; outcome quality is not. Optimize what you control.** ([[Duke Thinking in Bets]])
- **Resulting is the dominant decision bias; the journal corrects it.** ([[Duke Thinking in Bets]])
- **Record decisions with reasoning, expected outcomes, confidence, kill criteria.** ([[Duke Decision Journal]])
- **Pre-commit to quit criteria; sunk cost bias keeps you in losing positions too long.** ([[Duke Quit]])
- **The Kelly criterion: bet size proportional to edge, inversely to uncertainty.** ([[Duke Thinking in Bets]])
- **Truthseeking pods provide honest feedback that defaults-to-praise cultures cannot.** ([[Duke Thinking in Bets]])

---

## Connections

- [[Annie Duke]] is the anchor
- Cross-pole: [[Jeff Bezos]] two-way doors, [[Charlie Munger]] inversion, [[Daniel Kahneman]] biases, [[Naval Ravikant]] long-term games all operationalize through this discipline
- [[Customer Discovery Protocol]] is the companion concept for the customer-side decision discipline
