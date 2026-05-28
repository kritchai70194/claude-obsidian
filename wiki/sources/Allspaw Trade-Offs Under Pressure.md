---
type: source
title: "Allspaw Trade-Offs Under Pressure"
address: c-000321
author: "[[John Allspaw]]"
year: 2015
source_url: "https://lup.lub.lu.se/student-papers/search/publication/8084520"
fidelity: abstract-and-heuristics
tags:
  - source
  - allspaw
  - engineer-planner
  - resilience-engineering
  - cognitive-systems-engineering
  - lund
  - thesis
status: mature
related:
  - "[[John Allspaw]]"
  - "[[Operating Principles]]"
  - "[[Allspaw Each Necessary]]"
  - "[[Allspaw Infinite Hows]]"
  - "[[Cook How Complex Systems Fail]]"
  - "[[Cook Stella Report]]"
---

# Allspaw "Trade-Offs Under Pressure: Heuristics Used by Resolvers During Outages" (2015)

[[John Allspaw]]'s master's thesis from Lund University, Human Factors and System Safety program (advised by Sidney Dekker). The empirical study underneath his blog-post claims. Where the kitchensoap.com essays argue from authority and lineage, this thesis goes after primary data: what do operators actually do when an outage is in progress?

## Provenance

- Author: [[John Allspaw]]
- Year: 2015
- Institution: Lund University, Master of Science in Human Factors and System Safety
- URL: https://lup.lub.lu.se/student-papers/search/publication/8084520
- Raw extract: `.raw/articles/allspaw-trade-offs-thesis-2026-05-28.md`
- Fidelity: abstract verbatim + four-heuristic skeleton. Full PDF exceeded WebFetch size cap; deeper material queued for re-ingest via direct PDF read.

## Abstract (Verbatim)

> "The increasing complexity of software applications and architectures in Internet services challenge the reasoning of operators tasked with diagnosing and resolving outages and degradations as they arise."

The thesis is positioned as an empirical answer to a question the resilience-engineering literature had largely treated theoretically: when an operator is staring at a half-broken production system at 2am, what heuristics does she actually reach for?

## The Four Heuristics

1. **Initial correlation check.** "Initially look for correlation between the behaviour and any recent changes made in the software." The first reach is always to recent deploys, config changes, feature flags. This is correlation-not-causation as standard operating procedure: it is the heuristic that catches most outages because most outages are change-induced, and it is the heuristic that misleads in the rare cases where the cause is unrelated.

2. **Widening search scope.** "Widen the search to any potential contributors imagined" when software changes show no correlation. When the first heuristic fails, resolvers expand the hypothesis space outward: infrastructure, dependencies, external services, environmental factors.

3. **Availability heuristic.** Focus on "the one that most easily comes to mind, either because symptoms match those of a difficult-to-diagnose event in the past, or those of any recent events." The mental-model upweighting of recently-seen failures. Useful (past pattern-matching) and dangerous (anchors on the wrong prior).

4. **Coordinative heuristic.** "Rely on peer review of the changes more than automated testing." A social mechanism: when in doubt, bring in someone whose judgment you trust to look at the change. Peer review functions as a coordination-and-trust device that automated testing cannot replace.

## Frames Cited

- Resolvers operate under time pressure and uncertainty, not under the conditions assumed by checklist-driven incident response
- Heuristics are not biases-to-eliminate; they are the rational adaptations that make outage response possible at all
- Correlation-to-recent-change is the first move because it is usually right, not because operators are lazy
- Peer review beats automated testing as a coordination tool because trust scales differently than tests do

## What This Brain Takes From It

- The empirical undertow of [[Allspaw Each Necessary]] and [[Allspaw Infinite Hows]]. The blog posts argue from theory; this is the data.
- "What did the operator know at the time" is operationalizable: the four heuristics describe what knowledge actually gets used.
- The correlation-with-recent-change heuristic is the load-bearing reason continuous deployment works at all. The first hypothesis is almost always right; that pattern is what makes the operational tempo sustainable.
- Peer review is a coordination primitive, not a testing primitive. The thesis tells you why "ask someone to look at this PR" is doing different work than "the CI passed."

## Connection to the Allspaw Corpus

- [[Allspaw Each Necessary]] (2012): no root cause. The theoretical claim.
- [[Allspaw Infinite Hows]] (2014): ask How, second stories. The constructive method.
- This thesis (2015): what resolvers actually do under pressure. The empirical study.
- [[Cook Stella Report]] (2017): cross-case workshop study with Cook and Woods. The community synthesis.

The four artifacts form a coherent arc: theory, method, data, synthesis.

## Cross-References

- [[John Allspaw]] entity
- [[Allspaw Each Necessary]]
- [[Allspaw Infinite Hows]]
- [[Cook How Complex Systems Fail]] (theoretical upstream)
- [[Cook Stella Report]] (the next-step community study)
- [[Operating Principles]], Engineering Disposition section
- [[seed-corpus-engineer-planners]]

## Status

Mature for the abstract and the four heuristics. Full PDF ingest is queued. When the brain needs deeper material on coordination cost, sharp-end practitioner judgment, or the empirical structure of resolver reasoning, re-ingest the PDF locally.
