---
type: meta
title: Seed Corpus, Unicorn-Builders
subtitle: Source roadmap for the unicorn-builder pole of the persona
address: c-000016
created: 2026-05-26
updated: 2026-05-26
tags:
  - meta
  - roadmap
  - ingest-plan
  - corpus
  - unicorn-builder
status: current
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-technical-ceo]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Lenny Rachitsky]]"
  - "[[Ben Thompson]]"
  - "[[Paul Graham]]"
---

# Seed Corpus, Unicorn-Builders

Third corpus for this brain. Companions: [[seed-corpus-technical-ceo]] (founder-operator pole) and [[seed-corpus-engineer-planners]] (engineer-planner pole). This corpus adds the **unicorn-builder pole** to the [[Persona]] bench.

The structural gap that motivated this corpus: the 8 prior mentors (Bezos, Collisons, Karpathy, Dean, Vogels, Carmack, Lamport) all published *post-PMF*. None of them speak with deep frameworks to the discipline of getting *to* PMF, building distribution from zero, or thinking about competitive durability in modern markets. Three mentors fill those gaps.

**Status legend:** `queued` (not yet ingested) · `partial` (some ingested, more available) · `done` (saturated) · `low-value` (started, dropping)

Total queued: 12. Designed for one focused session, mirroring the 2026-05-26 engineer-planner workflow.

---

## The Five Mentors

| Mentor | Pole | Core thesis |
|---|---|---|
| [[Lenny Rachitsky]] | Product + Growth | PMF is measurable. Retention is the signal. Define a North Star Metric and instrument everything around it. |
| [[Ben Thompson]] | Strategy + Moats (internet-era) | The durable advantage is owning the user relationship (Aggregation Theory). Distribution is the moat, not the product. |
| [[Hamilton Helmer]] | Strategy + Moats (universal) | Seven specific Powers, not infinite. Each Power has Benefit + Barrier. Strategy = the route to Power. |
| [[Andrew Chen]] | Growth + Network Effects (mechanics) | Cold start is solved by atomic networks. Growth loops compound; funnels do not. The 5-stage framework: Cold Start, Tipping Point, Escape Velocity, Hitting the Ceiling, The Moat. |
| [[Paul Graham]] | Early-Stage Epistemics | Startup = Growth. Do things that don't scale. Talk to users. The cofounders matter more than the idea. |

Together they cover: product discovery (Lenny), competitive durability internet-era (Thompson), competitive durability universal (Helmer), network-effect mechanics (Chen), and early-stage discipline (Graham). The four strategy/growth mentors form a complete stack: Thompson + Helmer name the destination Powers; Chen explains the route to Network Economies specifically; Lenny measures whether you have PMF along the way; Graham governs the early-stage discipline.

---

## Lenny (4 sources, product + growth)

| ID | Source | Type | URL / Location | Status |
|---|---|---|---|---|
| L1 | "Product-Market Fit: a definitive guide" | Essay | lennysnewsletter.com | queued |
| L2 | "What is good retention" | Essay (benchmark) | lennysnewsletter.com | queued |
| L3 | "How to define your North Star Metric" | Essay | lennysnewsletter.com | queued |
| L4 | Lenny's Podcast deep-dive (Chesky Founder Mode or Cagan on product discovery) | Long-form interview | lennysnewsletter.com | queued |

**Why these four:**
- L1 is the canonical Lenny essay on what PMF actually means, how to measure it, what the leading indicators are.
- L2 turns retention from a metric into a PMF diagnostic. Benchmarks by business model.
- L3 is the metrics discipline essay. "If you can't name your North Star, you don't have one."
- L4 is the synthesis voice. Lenny interviews the operators and distills their patterns.

## Thompson (4 sources, strategy + moats)

| ID | Source | Type | URL / Location | Status |
|---|---|---|---|---|
| T1 | "Aggregation Theory" (2015) | Foundational essay | stratechery.com | queued |
| T2 | "Defining Aggregators" (2017) | Extension essay | stratechery.com | queued |
| T3 | "The Bill Gates Line" (2018) | Platform vs aggregator distinction | stratechery.com | queued |
| T4 | An applied modern essay (e.g. "Stripe's Enduring Cleverness" or "AI and the Big Five") | Applied essay | stratechery.com | queued |

**Why these four:**
- T1 is THE canonical Stratechery essay. Explains why Google, Facebook, and Amazon won.
- T2 refines the theory with a taxonomy (super-aggregators, level 1-2-3 aggregators).
- T3 separates platforms (Microsoft) from aggregators (Google). Critical for modern positioning decisions.
- T4 shows the theory applied. Connects the framework to a company already in the brain's bench (Stripe).

## Graham (4 sources, early-stage epistemics)

| ID | Source | Type | URL / Location | Status |
|---|---|---|---|---|
| G1 | "How to Start a Startup" (2005) | Lecture transcript | paulgraham.com | queued |
| G2 | "Do Things That Don't Scale" (2013) | Essay | paulgraham.com | queued |
| G3 | "Startup = Growth" (2012) | Essay | paulgraham.com | queued |
| G4 | "How to Get Startup Ideas" (2012) | Essay | paulgraham.com | queued |

## Helmer (4 sources, universal moat taxonomy)

| ID | Source | Type | URL / Location | Status |
|---|---|---|---|---|
| H1 | "7 Powers" book core chapters | Book | Strategy Capital / amazon | queued |
| H2 | Helmer on Acquired Podcast | Long-form interview | acquired.fm | queued |
| H3 | "Counter-Positioning" deep-dive | Essay/talk | various Helmer content | queued |
| H4 | Applied case study (Spotify / Netflix / Adobe) | Analysis | various | queued |

**Why these four:**
- H1 is the canonical text. The 200-page book is the source of every other Helmer artifact.
- H2 is the most-cited Helmer interview, covering the framework + how it applies to real Acquired-podcast unicorns.
- H3 is the deep dive into Helmer's most original contribution. Counter-Positioning is the Power most people miss.
- H4 grounds the framework in a specific company (likely one already in the brain's bench).

**Why these four:**
- G1 is PG's most comprehensive early-stage essay. Idea + people + market + execution.
- G2 is the single most-cited PG essay. Manual unscalable work in early stage is the work.
- G3 redefines "startup" as a growth-rate, not a stage or industry. Sharp lens for evaluating opportunities.
- G4 attacks the most common founder mistake: brainstorming ideas instead of noticing them.

---

## Ingest Notes

- **Token budget per ingest:** 5k-10k tokens of source content per session, matching the existing two corpora.
- **Pair the sources:** ingest L1+L2 together (Lenny PMF + retention), then L3+L4 (North Star + podcast). Ingest T1+T2 together (Thompson foundational), then T3+T4 (extension + applied). PG essays are individually shorter so ingest all 4 in one pass.
- **Defuddle URLs first.** All sources should pass through `defuddle` to strip nav and ads.
- **Quote, don't paraphrase.** PG essays in particular reward verbatim extraction. Thompson's prose is dense; preserve.

## After Each Ingest

Same pattern as the prior two corpora:
- Update mentor entity page (claim graduates from paraphrase to quoted)
- Add citations to [[Operating Principles]], specifically the new Product Discipline / Strategic Durability / Early-Stage Epistemics sections (or extensions of existing sections)
- Append to `wiki/log.md`
- Refresh `wiki/hot.md`

After all 12 sources land:
- [[Lenny Rachitsky]], [[Ben Thompson]], [[Paul Graham]] all reach status `mature`
- [[Operating Principles]] gains 6-9 new principles across new/extended sections
- [[Persona]] gains all three mentors in a new "Unicorn-Builder pole" subsection, plus 2-3 new decision frames
- Three synthesis concept pages land: [[Product-Market Fit]], [[Aggregation Theory]], [[Early-Stage Discipline]]

## When This Manifest is Done

When all 12 sources are ingested, this page either:
- Stays `current` and lists deferred Priority 2 sources (Hamilton Helmer 7 Powers, Andrew Chen growth loops, Reid Hoffman Blitzscaling, Sam Altman startup playbook, Brian Chesky founder mode, Marc Andreessen Strong Hands)
- Or gets archived to `wiki/folds/` and superseded by the next corpus iteration

---

## Connections

- [[Persona]], the operating identity this corpus extends to a third pole
- [[Operating Principles]], where the new principles will live
- [[seed-corpus-technical-ceo]] and [[seed-corpus-engineer-planners]], the parallel corpora for the existing two poles
- [[Lenny Rachitsky]], [[Ben Thompson]], [[Paul Graham]] mentor anchors
