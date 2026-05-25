---
type: meta
title: Seed Corpus, Engineer-Planners
subtitle: Source roadmap for engineer-planner pole of the persona
address: c-000002
created: 2026-05-26
updated: 2026-05-26
tags:
  - meta
  - roadmap
  - ingest-plan
  - corpus
  - engineer-planner
status: current
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-technical-ceo]]"
  - "[[John Carmack]]"
  - "[[Leslie Lamport]]"
---

# Seed Corpus, Engineer-Planners

Source roadmap for the **engineer-planner pole** of this brain's [[Persona]]. The Technical CEO bench (Bezos, Collisons, Karpathy, Dean, Vogels) covers founder-operator thinking. This corpus extends the bench with two mentors who define the pragmatic and formal poles of sustained engineering planning.

Companion to [[seed-corpus-technical-ceo]]. Same conventions: drop sources in `.raw/`, run `ingest`, citations migrate from paraphrase to quoted on each pass.

**Status legend:** `queued` (not yet ingested) · `partial` (some ingested, more available) · `done` (saturated) · `low-value` (started, dropping)

Total queued: 8. Two passes per mentor, 2 sources per pass, ~5-10k tokens each. Designed for one focused training session.

---

## The Two Mentors

| Mentor | Pole | Core thesis |
|---|---|---|
| [[John Carmack]] | Pragmatic, deep, sustained individual excellence | Plan the architecture in your head before you write the code. The `.plan` file is the artifact. |
| [[Leslie Lamport]] | Formal, mathematical, pre-implementation rigor | If you can't write the spec, you don't understand the system. TLA+ as thought, not validation. |

Together they cover the full pragmatic-formal spectrum of engineering planning. Neither is a founder; both have shipped infrastructure that matters for decades; both are still active.

---

## Carmack (4 sources)

| ID | Source | Type | URL / Location | Status |
|---|---|---|---|---|
| C1 | QuakeCon 2013 keynote | Talk transcript | YouTube + community transcripts | queued |
| C2 | "John Carmack on Inlined Code" (2007) | Essay (email, archived) | number-none.com / various archives | queued |
| C3 | Lex Fridman Podcast #309 (Aug 2022) | Long-form interview | lexfridman.com/john-carmack-309 | queued |
| C4 | Selected .plan file entries (1996-2000) | Primary writing | fabiensanglard.net / dengine archives | queued |

**Why these four:**
- C1 is widely cited as the single best engineering talk of the 2010s. Architecture decisions explained from first principles.
- C2 is Carmack's most influential prose on style: when to inline, when to extract, why programmer judgment beats rules. The single best argument against pattern-thinking.
- C3 captures the post-Oculus Carmack in his most reflective mode: AGI bets, planning over decades, what he would tell young engineers.
- C4 is the cultural artifact `.plan` files were named after. The original "build in public" engineering log.

## Lamport (4 sources)

| ID | Source | Type | URL / Location | Status |
|---|---|---|---|---|
| L1 | "Thinking for Programmers" talk | Talk transcript | lamport.azurewebsites.net / Microsoft | queued |
| L2 | TLA+ video course, intro lectures | Pedagogical video | lamport.azurewebsites.net/video | queued |
| L3 | Specifying Systems, chapters 1-3 | Book chapters | lamport.azurewebsites.net (free PDF) | queued |
| L4 | Paxos Made Simple (2001) | Paper | lamport.azurewebsites.net/pubs | queued |

**Why these four:**
- L1 is Lamport's own framing of pre-code thinking, distilled. The "you can't think clearly about a system if you can't write its spec" thesis.
- L2 is Lamport's pedagogical voice on TLA+. Pick the first 3 lectures; the spec for distributed counters is a useful concrete example.
- L3 chapters 1-3 are the why-and-when of formal specs. Skip the TLA+ syntax reference; this is about thinking discipline.
- L4 is the exemplar of "explain it simply once you understand it deeply". Paxos is famously hard; Lamport rewrote his own paper to make it trivial.

---

## Ingest Notes

- **Token budget per ingest:** 5k-10k tokens of source content per session, matching the existing corpus discipline.
- **Pair the sources:** ingest C1+C2 together (Carmack pragmatic), then C3+C4 (Carmack reflective + archive). Ingest L1+L2 together (Lamport pedagogical), then L3+L4 (Lamport formal + canonical).
- **Defuddle URLs first.** All sources should pass through `defuddle` to strip nav and ads.
- **Quote, don't paraphrase.** Carmack and Lamport both speak with characteristic clarity. The voice carries the lesson; preserve it.

## After Each Ingest

Same pattern as Technical CEO corpus:
- Update mentor entity page (claim graduates from paraphrase to quoted)
- Add or update citations in [[Operating Principles]], specifically the Engineering Disposition section
- Append to `wiki/log.md`
- Refresh `wiki/hot.md`

After all 8 sources land:
- [[John Carmack]] and [[Leslie Lamport]] reach status `mature`
- [[Operating Principles]] gains 4-6 new principles in Engineering Disposition, all cited
- [[Persona]] gains both mentors in the bench and one new decision frame ("Plan/spec before code")
- Two synthesis concept pages land: [[Planning Before Code]] and [[Formal Specification Discipline]]

## When This Manifest is Done

When all 8 sources are ingested, this page either:
- Stays `current` and lists deferred Priority 2 sources (Allspaw, Lampson, Larson) for a future session
- Or gets archived to `wiki/folds/` and superseded by the next corpus iteration

---

## Connections

- [[Persona]], the operating identity this corpus extends
- [[Operating Principles]], specifically the Engineering Disposition section
- [[seed-corpus-technical-ceo]], the parallel corpus for the founder-operator pole
- [[John Carmack]], [[Leslie Lamport]] mentor anchors
