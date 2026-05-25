---
type: source
title: Kahneman Prospect Theory
address: c-000082
source_type: paper
author: "[[Daniel Kahneman]]"
publication: "Econometrica 47(2), 263-291 (with Amos Tversky)"
publication_date: 1979-03
url: https://www.jstor.org/stable/1914185
fidelity: extracts (paper is academic, freely available in multiple mirrors, equations and findings reproducible)
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - paper
  - mental-models
  - decision-theory
  - prospect-theory
  - loss-aversion
status: mature
related:
  - "[[Daniel Kahneman]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-mental-models]]"
  - "[[Kahneman Thinking Fast and Slow]]"
---

# Kahneman Prospect Theory

Kahneman and Tversky's 1979 *Econometrica* paper, "Prospect Theory: An Analysis of Decision under Risk." The foundational text behind the 2002 Nobel. The single most-cited paper in economics for several decades. Replaces expected utility theory as the descriptive (not normative) account of how people actually make risky choices.

## What the Paper Does

It documents three robust violations of expected utility theory, builds a descriptive model that reproduces them, and shows the model's structure: a value function defined over gains and losses relative to a reference point, plus a probability weighting function.

The paper is a demolition first, a reconstruction second. The demolition is a sequence of survey-style experiments in which subjects (including statistically trained ones) make choices that expected utility theory cannot rationalize. The reconstruction is prospect theory.

## The Three Violations

### Certainty Effect

People overweight outcomes that are certain relative to outcomes that are merely probable. Given a choice between a certain $3,000 and an 80 percent chance of $4,000 (expected value $3,200), most pick the certain $3,000. Given a choice between an 80 percent chance of $4,000 and a 20 percent chance of $3,000, most pick the 80 percent chance of $4,000. The pair of choices is inconsistent under expected utility but consistent under prospect theory: certainty is overweighted relative to high probability.

### Reflection Effect

Preferences flip when the same choice is reframed from gains to losses. A subject who prefers a certain $3,000 to an 80 percent chance of $4,000 (risk-averse in gains) will prefer an 80 percent chance of losing $4,000 to a certain loss of $3,000 (risk-seeking in losses). Same expected values, opposite risk attitudes.

### Isolation Effect

People simplify multi-stage problems by discarding shared components and evaluating only the differing parts. The framing of which component is the "shared" component changes the choice, even when the underlying payoffs are identical.

## The Value Function

The S-shaped value function v(x) replaces the utility function:

- Defined over gains and losses relative to a **reference point**, not absolute wealth states.
- **Concave in the gain domain** (diminishing marginal sensitivity to additional gains).
- **Convex in the loss domain** (diminishing marginal sensitivity to additional losses).
- **Steeper in the loss domain than in the gain domain.** This is loss aversion. The slope ratio in subsequent estimates lands around 2.0 to 2.5.

> The aggravation that one experiences in losing a sum of money appears to be greater than the pleasure associated with gaining the same amount.

Implication: people are risk-averse in gains, risk-seeking in losses, and weight losses roughly twice as heavily as equivalent gains. The reference point is the operative anchor, and it can be moved by framing.

## The Probability Weighting Function

Probabilities are not used at face value. They are transformed by a weighting function pi(p) that:

- **Overweights small probabilities.** This is why people buy lottery tickets and insurance against rare events.
- **Underweights moderate-to-large probabilities.** This is part of the certainty effect.
- Is not a probability itself (the weights need not sum to one across complementary events).

## Key Passages

On the reference point and framing:

> An essential feature of the present theory is that the carriers of value are changes in wealth or welfare, rather than final states.

On loss aversion:

> Most people find symmetric bets of the form (x, .50; -x, .50) distinctly unattractive. Moreover, the aversiveness of symmetric fair bets generally increases with the size of the stake.

On the failure of expected utility:

> The preferences of a significant majority of respondents violated expected utility theory in ways that cannot be attributed to errors or to ambiguity of the questions.

## Why It Matters for the Brain

Prospect theory underwrites a long list of operating implications:

- **Pricing.** A "20 percent discount" outperforms a "20 percent gain" of the same magnitude because losses (paying full price) loom larger than gains (paying less).
- **Negotiation.** The first offer sets the reference point. Concessions are evaluated relative to it.
- **Hiring and firing.** The pain of letting go a hire who was a mistake is felt more sharply than the gain of replacing them with a better hire of identical expected value.
- **Exit dynamics.** Founders hold on past the rational exit point because exit is felt as loss (giving up a position) more than as gain (realizing value).
- **Product framing.** "Don't lose your data" outperforms "save your data" at equal information content.

## Principles Cited From This Source

- **People evaluate outcomes as gains or losses relative to a reference point, not as absolute states.** The reference point is movable; framing moves it.
- **Losses loom roughly 2x larger than equivalent gains.** Loss aversion is the structural asymmetry behind status quo bias, endowment effects, and many framing effects.
- **Risk attitudes flip across the reference point.** Risk-averse in gains, risk-seeking in losses.
- **Small probabilities are overweighted; moderate-to-large probabilities are underweighted.** Lottery tickets and insurance both exploit this.
- **Expected utility theory fails as a descriptive account of human choice.** Prospect theory replaces it for descriptive (not normative) purposes.

## Connections

- [[Daniel Kahneman]] mentor anchor
- [[Operating Principles]] Mental Models section
- [[seed-corpus-mental-models]] source K2
- [[Kahneman Thinking Fast and Slow]] popularizes the Choices section based on this paper
- [[Nassim Taleb]] adjacent; Taleb's critique of expected-utility-flavored thinking under fat-tailed distributions complements prospect theory's critique on ordinary distributions
