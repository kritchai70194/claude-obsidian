---
type: source
title: "Larson Elegant Puzzle"
address: c-000270
author: "[[Will Larson]]"
year: 2019
source_url: "https://lethain.com/elegant-puzzle/"
fidelity: full-text-summary
raw_file: .raw/source-larson-elegant-puzzle.md
created: 2026-05-28
updated: 2026-05-28
tags: [source, larson, engineer-planner, org-design, book, tech-debt]
status: mature
related:
  - "[[Will Larson]]"
  - "[[Larson Sizing Engineering Teams]]"
  - "[[Larson Migrations]]"
  - "[[Operating Principles]]"
  - "[[Staff Engineer Ladder]]"
  - "[[Org Design]]"
  - "[[John Allspaw]]"
---

# Larson "An Elegant Puzzle: Systems of Engineering Management" (Stripe Press, 2019)

[[Will Larson]]'s book-length codification of engineering management as a systems problem. The book stitches together his individual blog posts (including [[Larson Sizing Engineering Teams]] and [[Larson Migrations]]) into a single framework. The most-cited contribution is **the four states of an engineering team** and the system-fix per state.

## Provenance

- Author: [[Will Larson]]
- Publisher: Stripe Press
- Year: 2019 (May 28)
- Primary URL: https://lethain.com/elegant-puzzle/ (landing page)
- Companion essay (verbatim source for the four-states model): https://lethain.com/durably-excellent-teams/
- Secondary summary (book notes): https://danlebrero.com/2022/07/06/an-elegant-puzzle-systems-of-engineer-management-book-summary/
- Raw extract: `.raw/source-larson-elegant-puzzle.md`
- Fidelity: full-text-summary; verbatim where the quote is sourced from Larson's own companion post, paraphrased where the quote is sourced from a third-party book summary

## Headline Takeaway

Engineering management is not a leadership-skills problem; it is a **systems-design problem.** Teams move through four named states, each state has a different bottleneck, and each bottleneck has a different system fix. Apply the wrong fix to the wrong state and the team gets worse. The manager's job is to diagnose the state and apply the right fix.

## The Four States of a Team

Verbatim, from Larson's companion essay:

1. **Falling Behind:** "each week their backlog is longer than the week before. Typically folks are working extremely hard but not making much progress, morale is low, and your users are vocally dissatisfied."
2. **Treading Water:** "able to get their critical work done, but are not able to start paying down technical debt or start major new projects. Morale is a bit higher, but folks are still working hard."
3. **Repaying Debt:** "able to start paying down technical debt, and are beginning to benefit from the debt repayment snowball: each piece of debt you repay leads to more time to repay more debt."
4. **Innovating:** "their technical debt is sustainably low, morale is high, and the majority of work is satisfying new user needs."

## System Fix Per State

| State | System Fix |
|-------|-----------|
| Falling Behind | Hire net-new people to increase team capacity. |
| Treading Water | Implement process improvements like work-in-progress limits. |
| Repaying Debt | Add time/space for technical debt reduction to compound. |
| Innovating | Maintain scheduling slack to preserve quality and avoid defunding. |

Critical move: when moving out of Treading Water, the lever is **reducing concurrent work** "until they're able to begin repaying debt (e.g. limit work in progress)." It is not motivational. It is structural.

Equally critical: do not spin up "innovation teams" while leaving the rest of the org on maintenance. The two-tiered class system is corrosive. "Keeping innovation and maintenance together fosters a culture of learning."

## Sizing (Echoed from [[Larson Sizing Engineering Teams]])

- "Managers should support 6-8 engineers."
- "Managers of managers should support 4-6 managers."
- "Teams smaller than 4 are not teams."
- The Tech Lead Manager role has "limited career opportunities: too little management and too little technical."

## Hiring and Organizational Practices

- **"On hiring, fix one team at a time, not a bit on each."** Concentrate hires; don't smear them.
- **"Move work, not people."** Reorganizing humans is high-friction. Reorganizing work assignments is low-friction.

## Debugging Organizations

- **"Most poor working relationships are the by-product of information gaps."** The fix is not personality, it is information flow.
- **"With the right people, any process works, and with the wrong people, no process works."** Process is a multiplier on people, not a substitute.

## Model / Document / Share (How to Spread a Practice)

A three-phase pattern for spreading practices across an org:

- **Model:** "Try it long enough as an experiment."
- **Document:** "The problem solved, learning, detailed approach."
- **Share:** "Don't lobby for changes, just present."

The order is load-bearing. Don't share before documenting; don't document before modeling. The pattern bypasses political adoption fights because the work has already been done.

## Named Principles

- "Prioritize long-term success over short-term quality."
- "Bad policy is one that does little constraint." (Useful policies have teeth.)
- "Growth only comes from change, and that is something you can influence."

## Author commentary

"So much of writing words, writing software, and being a manager is a method of creating the abstract and intangible. There is something very visceral, and surprisingly moving, to *hold in my hands* something that I created."

## Frames Cited

- [[Will Larson]]: four states, model/document/share, hiring concentration, move work not people, information-gap debugging.
- [[John Allspaw]]: "with the right people, any process works" is structurally Allspaw's "process is downstream of people and conditions."
- [[Leslie Lamport]]: model/document/share is a Lamport pattern (specify, then run, not the reverse) applied to org practices.

## Connection to the Brain

This is the **diagnostic backbone** of the engineer-planner pole's org work. Before suggesting a fix to a struggling team, the brain has to name the state (Falling Behind / Treading Water / Repaying Debt / Innovating) and apply the corresponding fix. Most management advice in the wild is "Treading Water" advice (process, WIP limits) applied to "Falling Behind" teams (which need hires) or "Repaying Debt" teams (which need time and quiet). The four-state map prevents that.
