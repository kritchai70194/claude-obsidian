---
type: meta
title: Seed Corpus, Technical CEO
subtitle: Source roadmap for persona training
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - meta
  - roadmap
  - ingest-plan
  - corpus
status: current
related:
  - '[[Persona]]'
  - '[[Operating Principles]]'
  - '[[Jeff Bezos]]'
  - '[[Patrick Collison]]'
  - '[[John Collison]]'
  - '[[Andrej Karpathy]]'
  - '[[Jeff Dean]]'
  - '[[Werner Vogels]]'
---

# Seed Corpus, Technical CEO Archetype

Source roadmap for training this brain into the [[Persona]] archetype. Each row is one ingest target. Drop the source into `.raw/` (or fetch via URL with the `defuddle` skill), then run `ingest`. The brain extracts entities and concepts and updates the relevant mentor pages.

**Status legend:** `queued` (not yet ingested) · `partial` (some ingested, more available) · `done` (saturated) · `low-value` (started, dropping)

Total queued: 14. Recommended first batch: items P1.1 through P1.4 (foundational, ~30k tokens, 4-5 ingest sessions).

---

## Priority 1, Foundational (do first)

| ID | Source | Type | Mentor | URL / Location | Status |
|---|---|---|---|---|---|
| P1.1 | Bezos shareholder letters 1997-2021 (25 letters) | Primary writing | [[Jeff Bezos]] | aboutamazon.com / SEC filings | partial, 1997 ([[Bezos 1997 Letter]]), 2015 ([[Bezos 2015 Letter]] full-text PDF), 2016 done; 2002 [[Bezos 2002 API Mandate]] (secondary); 21 letters queued |
| P1.2 | Bezos 2016 "Day 1" letter | Primary writing | [[Jeff Bezos]] | aboutamazon.com (2016) | done ([[Bezos 2016 Day 1 Letter]]) |
| P1.3 | Karpathy's blog (karpathy.github.io), top 10 posts | Primary writing | [[Andrej Karpathy]] | karpathy.github.io | partial, [[Karpathy Unreasonable Effectiveness of RNNs]] (2015), [[Karpathy Software 2.0]] (2017), [[Karpathy Recipe for Training Neural Networks]] (2019); ~7 more queued |
| P1.4 | Jeff Dean, "Numbers Every Programmer Should Know" + Stanford "Building Software Systems at Google" talk | Talk + slides | [[Jeff Dean]] | research.google / YouTube | done, [[Dean Latency Numbers]] table + [[Dean Stanford Talk]] full PDF |

## Priority 2, Core Operator Material

| ID | Source | Type | Mentor | URL / Location | Status |
|---|---|---|---|---|---|
| P2.1 | "Working Backwards" (Bryar & Carr, 2021) | Book | [[Jeff Bezos]] (institutional) | book, purchased copy or detailed summary | queued |
| P2.2 | Patrick Collison, "Fast" essay | Essay | [[Patrick Collison]] | patrickcollison.com/fast | done ([[Collison Fast]]) |
| P2.3 | Patrick Collison, "Questions" | Essay | [[Patrick Collison]] | patrickcollison.com/questions | done ([[Collison Questions]]) |
| P2.4 | Patrick Collison on Tyler Cowen (Conversations with Tyler) | Long-form interview | [[Patrick Collison]] | conversationswithtyler.com | done ([[Collison Cowen Interview]]) |
| P2.5 | Vogels, All Things Distributed top 20 posts | Blog | [[Werner Vogels]] | allthingsdistributed.com | partial, [[Vogels Eventually Consistent]] + [[Vogels Decade of Dynamo]] done; ~17 more queued |
| P2.6 | Vogels, "10 Lessons from 10 Years of AWS" | Anniversary post | [[Werner Vogels]] | allthingsdistributed.com | done ([[Vogels 10 Lessons from 10 Years of AWS]]) |
| P2.7 | Stripe Annual Letter (annual artifact) | Letter co-authored Patrick + John | [[John Collison]] / [[Patrick Collison]] | stripe.com/annual-updates | partial, 2024 done ([[Stripe Annual Letter 2024]]); 2022/2023 queued |

## Priority 3, Stripe Press / Canonical Books

| ID | Source | Type | Mentor association | URL / Location | Status |
|---|---|---|---|---|---|
| P3.1 | "High Output Management" (Andy Grove) | Book, endorsed canon | [[Patrick Collison]] (curator) | Stripe Press / purchased copy | done (summary), [[High Output Management]] |
| P3.2 | "Designing Data-Intensive Applications" (Kleppmann) | Book, engineering canon | [[Jeff Dean]] (frame) | book | done (summary), [[Designing Data-Intensive Applications]] |
| P3.3 | "The Innovator's Dilemma" (Christensen) | Book, strategy canon | (institutional) | book | done (summary), [[Innovators Dilemma]] |
| P3.4 | John Collison, "Cheeky Pint" interview series | Long-form interviews | [[John Collison]] | Stripe Press / YouTube | queued (John as interviewer; John-as-subject covered by [[Collison Money Stuff Podcast]]) |

---

## Ingest Notes

- **Token budget per ingest:** aim for one ingest session ≈ 5k-15k tokens of source content. Larger sources should be chunked.
- **Bezos letters:** suggest ingesting 5 letters per session, grouped by era (early Amazon 1997-2001, growth 2002-2008, AWS era 2009-2015, scale 2016-2021).
- **Karpathy posts:** the "Software 2.0", "A Recipe for Training Neural Networks", and "Deep Neural Nets: 33 years ago and 33 years from now" are top priority.
- **Don't ingest entire books raw.** Find the published author summary or the dense chapters. For *Working Backwards* and *High Output Management*, prioritize the operating mechanics chapters.
- **Defuddle first.** All URL sources should go through the `defuddle` skill to strip navigation/ads before ingest. Token savings 40-60%.

## After Each Ingest

The `wiki-ingest` skill updates:
- The relevant mentor entity (claim graduates from paraphrase to quoted)
- [[Operating Principles]], adds primary-source citations to existing principles
- [[Persona]], should NOT need updates after ingest; if it does, reflect on whether the persona itself is drifting
- `wiki/log.md`, append-only record
- `wiki/hot.md`, recent context

Run `lint the wiki` every 5-6 ingests. Look for orphans and stale claims especially in [[Operating Principles]].

## When This Manifest is Done

When all 14 sources are ingested:
- [[Operating Principles]] should be marked **mature** (every principle backed by 2+ citations)
- Each mentor entity moves from **developing** to **mature** (or stays developing if more content is wanted)
- This page itself should be archived to `wiki/folds/` once superseded by an updated corpus list

---

## Connections

- [[Persona]], the operating identity this corpus serves
- [[Operating Principles]], the principles these sources will back
- [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]
