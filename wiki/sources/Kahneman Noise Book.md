---
type: source
title: Kahneman Noise Book
address: c-000083
source_type: book
author: "[[Daniel Kahneman]]"
publication: "Little, Brown Spark (with Olivier Sibony and Cass Sunstein)"
publication_date: 2021-05
url: https://www.hachettebookgroup.com/titles/daniel-kahneman/noise/9780316451390/
fidelity: extracts (book is recent and widely reviewed; key passages and frameworks reproducible from public reviews and excerpts)
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - book
  - mental-models
  - judgment
  - noise
  - decision-hygiene
status: mature
related:
  - "[[Daniel Kahneman]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-mental-models]]"
  - "[[Kahneman Thinking Fast and Slow]]"
---

# Kahneman Noise Book

*Noise: A Flaw in Human Judgment*. Daniel Kahneman with Olivier Sibony and Cass Sunstein. Little, Brown Spark, May 2021. The late-career thesis that variation in judgment within or across people is as costly as bias and far less often recognized. Roughly 450 pages.

The book frames itself as the missing companion to *Thinking, Fast and Slow*. That book covered bias (the systematic tilt away from the right answer). This book covers noise (the scatter around the right answer). Both contribute to error; almost all organizational discussion concerns only bias.

## The Bathroom Scale Analogy

The opening device. A bathroom scale that consistently reads 5 pounds high is **biased**. A bathroom scale that gives a different reading every time you step on it, all clustered around the true weight, is **noisy**. Both are broken. You can see the bias only if you know the true weight. You can see the noise by stepping on it repeatedly. Most organizations measure neither.

> Wherever there is judgment, there is noise, and more of it than you think.

The book's central empirical claim: in studies of judges, doctors, underwriters, asylum officers, parole boards, performance reviewers, and forecasters, the level of noise is consistently large, frequently larger than the levels of bias.

## Bias vs Noise

The mean squared error in a set of judgments decomposes into bias squared plus noise squared. Both are additive contributors to error. Reducing one does not reduce the other. Organizations obsessed with debiasing while ignoring noise can produce no net improvement.

A noise audit (described in detail in the book) is the diagnostic. The same case is sent to different judges; the spread of their judgments is the noise estimate. Insurance underwriters in one famous example varied by a factor of 5x on identical cases, where executives had assumed a 10 percent spread.

## System Noise vs Occasion Noise

**System noise**: different people judge the same case differently. A judge gives a longer sentence than another judge would for the same defendant.

**Occasion noise**: the same person judges the same case differently on different occasions. The same judge gives a longer sentence in the morning vs the afternoon, on Mondays vs Fridays, when their favorite team lost the night before vs won.

Both are noise. Occasion noise is more disturbing because it cannot even be attributed to a stable difference of opinion. It is pure random variation in the same person's judgment.

## Key Passages

On why noise is invisible:

> A judgment is a measurement in which the instrument is a human mind. Implicit in the word *measurement* is the goal of accuracy. The word implies the existence of a true value to which the judgment can be compared. But we usually do not see the true value, and we do not know that the instrument is noisy.

On the cost of noise:

> System noise is incompatible with the rule of law and with the basic ideal of justice that people who are treated alike should be treated alike.

On decision hygiene as the remedy:

> The point of decision hygiene is to make decisions less noisy, not to make them less biased.

## Decision Hygiene as the Remedy

The book's prescriptive core. A set of process disciplines that reduce noise even when bias cannot be touched. Direct analog to medical hygiene: you do not see the germs you are killing; you do the procedure anyway because the average outcome is better.

The main techniques:

1. **Use algorithms or structured rules where defensible.** Linear models with equal weights consistently outperform expert intuition on prediction tasks. The book is unsentimental about this.
2. **Break the judgment into independent components.** Score each component separately; aggregate only at the end. This is the principle behind structured interviews, structured underwriting checklists, and structured medical diagnosis.
3. **Have multiple independent judges, then aggregate.** Independence is load-bearing. The moment judges discuss the case before judging, you lose almost all the noise-reduction benefit (you also import groupthink).
4. **Defer intuition.** Use intuition at the end, after the components have been scored and aggregated, not at the start. Premature intuitive synthesis defeats the structure.
5. **Run noise audits.** Periodically test the system by sending the same case to multiple judges. Measure the spread. Most organizations are shocked the first time they do this.
6. **Prediction markets and the wisdom-of-crowds aggregation.** When done with independence, aggregating produces less-noisy estimates than any single expert.

## Why This Matters for the Brain

The book is the operating manual for a founder running interviews, doing diligence, scoring candidates, evaluating designs, or making any judgment-heavy decision repeatedly.

- **Interviewing.** Use a structured rubric, score components independently before discussion, aggregate at the end. Discussing first destroys the diversity of judgments.
- **Hiring committees.** Have each member write their evaluation before the meeting, not during. Discussion in the meeting should challenge inputs, not produce them.
- **Strategic forecasting.** Multiple independent estimates, then aggregate. Not a group meeting that produces one consensus number.
- **Code review and design review.** The reviewer's mood, the time of day, and the order of reviews introduce occasion noise. Structured rubrics dampen it.

## Principles Cited From This Source

- **Noise is variation in judgment; bias is systematic tilt. Both cost equally.** Organizations measure bias, ignore noise.
- **System noise (between people) and occasion noise (within the same person across time) are both real and large.** Occasion noise is the more uncomfortable finding.
- **Decision hygiene beats decision exhortation.** Process discipline beats trying harder to be unbiased.
- **Independent judgments aggregated outperform discussions converging on consensus.** Discussion destroys the noise-reducing benefit of independence.
- **Algorithms with equal weights frequently beat expert intuition on repeated prediction tasks.** Use them where defensible.
- **Noise audits are the diagnostic.** Send the same case to multiple judges; measure the spread; act on what you find.

## Connections

- [[Daniel Kahneman]] mentor anchor
- [[Operating Principles]] Mental Models section
- [[seed-corpus-mental-models]] source K3
- [[Kahneman Thinking Fast and Slow]] companion text; *Noise* is the missing piece
- [[Kahneman Lex Fridman]] Kahneman discusses *Noise* as the book he wishes he had written earlier
