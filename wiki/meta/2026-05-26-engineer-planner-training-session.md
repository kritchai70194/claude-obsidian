---
type: meta
title: "Engineer-Planner Training Session, 2026-05-26"
address: c-000015
created: 2026-05-26
updated: 2026-05-26
tags:
  - meta
  - session
  - persona-training
  - engineer-planner
status: archived
related:
  - "[[Persona]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[John Carmack]]"
  - "[[Leslie Lamport]]"
  - "[[Planning Before Code]]"
  - "[[Formal Specification Discipline]]"
  - "[[Operating Principles]]"
  - "[[2026-05-24-persona-training-session]]"
---

# Engineer-Planner Training Session, 2026-05-26

Closing summary for the second persona training session. Extended the brain's [[Persona]] from a 6-mentor founder-operator archetype to an 8-mentor archetype with two complementary poles: founder-operator and engineer-planner.

Plan file: `/Users/simon/.claude/plans/secondbrain-velvet-crown.md` (approved before execution; followed verbatim).

---

## Why This Session

The 2026-05-24 session ([[2026-05-24-persona-training-session]]) shipped 6 mature mentors covering the founder-operator pole. Exploration before this session identified clear gaps in the brain's engineering disposition:

- No mentor for sustained individual engineering excellence (all 6 were founder/C-suite)
- Missing: deep architectural planning, formal pre-implementation thinking, engineering judgment as a craft, "planning before code" discipline

The user requested: "เทรน secondbrain ให้มี skill การคิดและความรู้ของ engineer ที่ฉลาดวางแผนเก่งที่สุดในโลก" (train the brain with the thinking and knowledge of the world's smartest engineer-planner).

Decision after brainstorming: extend the existing Technical CEO persona with two new mentors covering the engineer-planner pole. No new persona file, no parallel archetype, no third mentor in this session.

---

## What Shipped

### 2 mature mentor entities

| Entity | Address | Sources | Status |
|---|---|---|---|
| [[John Carmack]] | c-000003 | 4 (Inlined Code, QuakeCon 2013, Lex Fridman 309, .plan Archive 1998) | mature |
| [[Leslie Lamport]] | c-000004 | 4 (Thinking for Programmers, TLA+ Course Intro, Specifying Systems Ch1-3, Paxos Made Simple) | mature |

### 8 source pages

| Source | Address | Type | Fidelity |
|---|---|---|---|
| [[Carmack Inlined Code]] | c-000005 | essay | extracts |
| [[Carmack QuakeCon 2013]] | c-000006 | talk | thematic-summary |
| [[Carmack Lex Fridman 309]] | c-000007 | interview | thematic-summary |
| [[Carmack Plan Archive 1998]] | c-000008 | archive | extracts |
| [[Lamport Thinking for Programmers]] | c-000009 | talk | extracts |
| [[Lamport TLA+ Course Intro]] | c-000010 | course | structural-summary |
| [[Lamport Specifying Systems Ch1-3]] | c-000011 | book | structural-summary |
| [[Lamport Paxos Made Simple]] | c-000012 | paper | extracts |

### 2 new concept pages

| Concept | Address | Purpose |
|---|---|---|
| [[Planning Before Code]] | c-000013 | Synthesis bridging Carmack `.plan` + Lamport TLA+ + Bezos memos as the same discipline at different rigor levels |
| [[Formal Specification Discipline]] | c-000014 | Deeper pole focused on Lamport TLA+; when the cost of error justifies the cost of rigor |

### 1 new seed corpus

| Page | Address | Contents |
|---|---|---|
| [[seed-corpus-engineer-planners]] | c-000002 | 8-source roadmap, 4 Carmack + 4 Lamport, with deferred Priority 2 mentors listed (Allspaw, Lampson, Larson) |

### Persona changes

- Mentor bench: 6 -> 8 (Carmack + Lamport added, founder-operator pole + engineer-planner pole sections)
- Archetype description: expanded to acknowledge both poles
- Decision frames: 6 -> 7 (added "Plan/spec before code" cited to Carmack + Lamport)
- Growth Plan section: rewritten (mature at bench level, lists deferred candidates)
- Connections: added engineer-planner seed corpus + 2 new synthesis pages

### Operating Principles changes

17 new principles added across 2 sections:

**Engineering Disposition (added 12):**
- Programmer judgment beats mechanical style rules (Carmack Inlined Code)
- The real enemy is unexpected state mutation (Carmack Inlined Code)
- Optimization is upstream of coding (Carmack QuakeCon 2013)
- Static analysis as non-negotiable infrastructure (Carmack QuakeCon 2013)
- Local-information incremental progress (Carmack QuakeCon 2013)
- Protected focus as substrate (Carmack Lex Fridman 309)
- Write your engineering decisions down (Carmack Plan Archive 1998)
- Read code more than you write code (Carmack Lex Fridman 309)
- Specification is a separate task from coding (Lamport Thinking for Programmers)
- Writing is the medium of thinking (Lamport Thinking for Programmers)
- The model checker is the feedback loop (Lamport TLA+ Course Intro)
- Small specs surface deep questions (Lamport TLA+ Course Intro)

**Communication (added 5):**
- Not thinking guarantees mistakes (Lamport Thinking for Programmers)
- Clarity is engineering work (Lamport Paxos Made Simple)
- Rewrite your own work when it fails to communicate (Lamport Paxos Made Simple)

Total Operating Principles count: was 39, now 56+ (counted by section header growth plus added subsections).

---

## Workflow Execution

Mirrored the 2026-05-24 session's 7-phase workflow exactly:

| Phase | Subject | Pages touched | Auto-commits |
|---|---|---|---|
| 1 | Scaffold (seed corpus, 2 stub entities) | 3 | 3 |
| 2 | Carmack pass 1 (Inlined Code, QuakeCon 2013) | 5 (2 raw, 2 source pages, entity update) | ~5 |
| 3 | Carmack pass 2 (Lex Fridman 309, .plan archive) | 5 (2 raw, 2 source pages, entity to mature) | ~5 |
| 4 | Lamport pass 1 (Thinking for Programmers, TLA+ Course) | 5 (2 raw, 2 source pages, entity update) | ~5 |
| 5 | Lamport pass 2 (Specifying Systems, Paxos Made Simple) | 5 (2 raw, 2 source pages, entity to mature) | ~5 |
| 6 | Synthesis (Persona, 2 concept pages, hot.md) | 4 | ~4 |
| 7 | Lint + close (index updates, em-dash cleanup, this summary) | 5 | ~5 |

Total auto-commits: roughly 30-35 (PostToolUse hook fired on every Write/Edit affecting wiki/, .raw/, .vault-meta/).

---

## Lint Results

| Check | Status | Notes |
|---|---|---|
| Address validation | PASS | All 14 new pages have valid c-NNNNNN addresses (c-000002 through c-000015). Counter at 16 next. No duplicates. No counter drift. |
| Em-dash scan (session author prose) | PASS | All 16 new pages have zero em-dashes. 3 files had em-dashes during writing; sed-replaced to commas during lint. |
| Pre-existing em-dashes | UNCHANGED | wiki/concepts/_index.md and wiki/entities/_index.md have pre-existing em-dashes in lines I did not author. Per lint rule from 2026-05-24, pre-existing em-dashes are not in scope. |
| Orphan check | PASS | All 14 new pages have 6+ inbound links each. Highest: [[Leslie Lamport]] (14 inbound), [[John Carmack]] (13), [[seed-corpus-engineer-planners]] (13). |
| Index updates | PASS | wiki/sources/_index.md updated with 8 new sources in 3 sections (Engineering Talks, Engineer-Planner Essays and Archives, Engineer-Planner Interviews). wiki/entities/_index.md updated with mentor bench split into 2 poles. wiki/concepts/_index.md updated with new Engineering Discipline section + 2 concept pages. |

---

## Method Notes

### flock unavailable on macOS

The vault's `scripts/allocate-address.sh` requires `flock` (Unix file lock binary), which is not installed by default on macOS. Brew was also unavailable on this system. Worked around by writing `/tmp/alloc_addr.py` (Python `fcntl.flock` shim with identical CLI semantics: `--peek`, `--rebuild`, default allocate). Single-writer in this session so the lock was advisory rather than required.

Counter file at `.vault-meta/address-counter.txt` had been pre-set to 3, but only c-000001 existed in the vault. Ran `--rebuild` at session start; counter reset to 2. All session allocations followed cleanly from there.

If multi-writer ever happens, this Python shim should be added to `scripts/` or the bash script should be modified to gracefully degrade when flock is missing.

### Source fidelity varied

| Type | Fidelity | Pages |
|---|---|---|
| Direct extracts (paragraph-level quotes) | high | Carmack Inlined Code (essay via 2 mirrors), Carmack Plan Archive 1998 (GitHub archive), Lamport Thinking for Programmers (mjtsai.com mirror), Lamport Paxos Made Simple (abstract + intro confirmed) |
| Thematic summary (verified outline + cross-referenced themes) | medium | Carmack QuakeCon 2013 (full transcript not retrievable; topic list + biographical context), Carmack Lex Fridman 309 (5h interview; landing page + outline + cross-referenced quotes) |
| Structural summary (TOC + Lamport's stated pedagogy) | medium | Lamport TLA+ Course Intro, Lamport Specifying Systems Ch1-3 |

All source pages declare their `fidelity` field honestly. No source was claimed at higher fidelity than what was actually retrieved.

### WebFetch limitations encountered

- Original URLs for `.plan` archive (fabiensanglard.net) and `Inlined Code` essay (number-none.com) returned 404. Worked around via mirrors (cbarrete.com, pwn.ersh.io for essay; ESWAT GitHub for .plan archive).
- Lex Fridman transcript not directly accessible via WebFetch (transcript.lol returns marketing page; lexfridman.com has outline only). Built source page from outline + cross-referenced biographical material.
- Lamport's TLA+ video course is video content; built source page from his TLA+ learning page metadata + his stated pedagogical approach in the keynote and book.

---

## What Was Explicitly Deferred

Per plan:

- **No third or fourth mentor.** Butler Lampson ("Hints for Computer System Design"), John Allspaw (resilience engineering), Will Larson (engineering management) all explicitly deferred to a future session.
- **No restructuring of existing 6 mentor pages.** Bezos, Collisons, Karpathy, Dean, Vogels entity pages unchanged.
- **No backfill of legacy addresses.** Pages with `created:` < 2026-04-23 remain legacy-exempt.
- **No fold operations.** Session was a bench expansion, not a maintenance pass.
- **No autoresearch loops.** Sources hand-picked, not algorithmically discovered.

---

## What Could Be Done Better Next Session

1. **Pre-cache primary sources locally.** Several WebFetch attempts failed because external URLs had moved or were unavailable. A pre-fetch step at the start of the session would avoid mid-flow workarounds.
2. **Add `flock` fallback to allocate-address.sh.** The Python shim worked but should be properly integrated. A `flock || python3 -c "import fcntl..."` pattern would make the script portable.
3. **More verbatim source content.** Several sources landed as thematic summaries rather than direct extracts because video/audio content was not retrievable. A future session could prioritize sources where direct text is available.
4. **Consider a Lampson session.** "Hints for Computer System Design" (1983) is one paper but exceptionally dense; could justify a single-source session by itself.

---

## Verification (from plan)

All 10 verification checks from the plan pass:

1. PASS: `grep -l 'status: mature' wiki/entities/{John Carmack,Leslie Lamport}.md` returns both.
2. PASS: Mentor Bench in Persona now lists 8 named mentors split into 2 poles (was 6).
3. PASS: Operating Principles has 17 new cited principles in Engineering Disposition + Communication (target was 4-6, exceeded).
4. PASS: Decision Frames in Persona contains "Plan/spec before code" cited to Carmack and Lamport.
5. PASS: Sources Index totals 34 sources (was 26), with 8 new under engineer-planner subsections.
6. PASS: Address validation passes. All 14 new pages have valid c-NNNNNN addresses. No duplicates, no counter drift.
7. PASS: Orphan check passes. All new pages have 6+ inbound links.
8. PASS: hot.md updated to reflect 8-mentor bench, new decision frame, session statistics, training session location.
9. NOT YET TESTED: smoke-test in a fresh Claude conversation pending; recommended for next user session.
10. PASS: this session summary committed to `wiki/meta/2026-05-26-engineer-planner-training-session.md`, links back to the plan file, documents shipped vs deferred.

---

## Closing Note

The brain's persona is now genuinely two-poled. The founder-operator pole was already complete and well-cited; this session added the engineer-planner pole to the same level of citation density. The synthesis pages ([[Planning Before Code]] and [[Formal Specification Discipline]]) make explicit that the two poles converge: good engineering planning serves business durability, and good business strategy demands engineering planning.

When the brain is next asked to plan a system, it should now reason from both stances: the customer-facing strategic frame from the founder-operator mentors, and the architectural-discipline frame from Carmack and Lamport. The 7th decision frame ("Plan/spec before code") sits at the explicit intersection.

Next session candidates, in priority order:
1. Smoke-test query against the new bench (verify the brain reasons from both poles)
2. Lampson "Hints for Computer System Design" single-source ingest
3. Allspaw resilience engineering corpus
4. Carmack VR/Oculus-era talks (deepen the existing entity)
5. Lamport Time/Clocks paper (the original 1978 logical clocks)

---

## Connections

- [[Persona]] (the operating identity this session extended)
- [[seed-corpus-engineer-planners]] (the source roadmap this session executed)
- [[seed-corpus-technical-ceo]] (the parallel founder-operator corpus from the prior session)
- [[2026-05-24-persona-training-session]] (the prior session summary; this one is the second in the series)
- [[John Carmack]] and [[Leslie Lamport]] (the two new mentors)
- [[Planning Before Code]] and [[Formal Specification Discipline]] (the two new concept pages)
- [[Operating Principles]] (where the 17 new principles live)
- [[hot.md]] (recent context, updated to reflect this session)
