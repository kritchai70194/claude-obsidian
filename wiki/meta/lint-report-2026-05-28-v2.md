---
type: meta
title: "Lint Report 2026-05-28 v2"
created: 2026-05-28
updated: 2026-05-28
tags: [meta, lint]
status: developing
related:
  - "[[lint-report-2026-05-28]]"
  - "[[tiling-report-2026-05-28-v4]]"
---

# Lint Report: 2026-05-28 v2

Re-lint following the Tier 2 brain-tightening wave + ollama install + Innovators Dilemma duplicate merge + tiling embed-error fix. This is the second lint of the day; v1 (`wiki/meta/lint-report-2026-05-28.md`) covered the Tier 1 backlog drain.

## Summary

| Metric | Value |
|---|---|
| Pages scanned | 361 (was 349 at v1; +12 net: +13 created, -1 merge) |
| New pages this re-lint (9) | 3 auto-fix concepts + 6 Tier 2 concepts |
| Counter peek | c-000311 |
| Max address observed | c-000310 ✓ (consistent) |
| **Orphans on new pages** | **0** |
| **Dead links from new pages** | **0** (was 39 from Tier 1 pages; concept layer wrote with full vault awareness) |
| **Frontmatter gaps on new pages** | **0** |
| **Address validity on new pages** | **0 errors** |
| Vault-wide frontmatter address uniqueness | clean (0 collisions) |
| DragonScale Mechanism 2 (addresses) | pass |
| DragonScale Mechanism 3 (tiling) | **operational** (was blocked at v1) |
| DragonScale Mechanism 4 (boundary score) | pass (run during Tier 2 reconciliation) |

## Orphan Pages

None among the 9 new pages.

Inbound link counts (verified):

| Page | Inbound |
|---|---|
| [[Working Backwards]] | 25 |
| [[Distributed Systems]] | 10 |
| [[Logical Clocks]] | 9 |
| [[Carmack on AGI]] | 8 |
| [[Customer Obsession]] | 8 |
| [[Long-Term Thinking]] | 8 |
| [[Two-Pizza Team]] | 8 |
| [[Byzantine Fault Tolerance]] | 8 |
| [[Andy Jassy]] | 5 |

The high inbound count on [[Working Backwards]] reflects the bare-name disambiguation absorbing prior aspirational mentions (was 22 immediately after creation; 25 now after Tier 2 concept pages also cross-referenced it).

## Dead Links

**Zero dead links from the 9 new pages.** The concept-page subagents and the auto-fix wave wrote with full vault awareness; every wikilink resolves to an existing page.

The earlier lint (v1) found 39 dead links from the Tier 1 pages. Of those, the auto-fix wave directly resolved 10 ([[Working Backwards]], [[Carmack on AGI]], [[Andy Jassy]], plus 7 Carmack-AGI sub-frames now linked from the concept page). The Tier 2 wave resolved ~12 more ([[Customer Obsession]], [[Long-Term Thinking]], [[Two-Pizza Team]], [[Distributed Systems]], [[Logical Clocks]], [[Byzantine Fault Tolerance]] and their sub-frames). Net dead-link reduction: ~22 of the original 39 resolved this session.

Remaining aspirational dead links from Tier 1 sources (deferred — single-mentor, lower leverage): [[VR]], [[Engineering Velocity]], [[Killer product is iteration]], [[The Platform is a Variable]], [[System-level over Per-app]], [[Architectural Graceful Degradation]], etc. These remain as concept-page candidates for a future wave.

## Frontmatter Gaps

None among the 9 new pages. All have `type`, `title`, `address`, `status`, `tags`.

## Address Validation (DragonScale Mechanism 2)

- Counter state: **311**
- Highest c- address observed (frontmatter): **c-000310** ([[Byzantine Fault Tolerance]])
- New pages this re-lint: 9, all with valid addresses c-000302 through c-000310 (contiguous, no gaps)
- Vault-wide frontmatter address uniqueness: **clean (0 collisions)**
- Retired slot: c-000234 (from Innovators Dilemma merge); not reissued (DragonScale addresses are append-only)

## Semantic Tiling (DragonScale Mechanism 3)

**Now fully operational.** Mechanism 3 was blocked at v1 due to ollama not installed and the embed-error root cause (default num_ctx 2048). Both resolved this session.

- Cache state: 310 embeddings (was 0 at start of session)
- Latest run: `wiki/meta/tiling-report-2026-05-28-v4.md`
- Cache hits: 309 / recomputed: 1 (incremental)
- Pages scanned: 361 / embedded: 310 / skipped: 51 (all intentional: filename exclusions, folds, wiki/meta/)
- Embed errors: **0** (was 45 before the truncation fix)

### Error band pairs (>=0.90)

22 total pairs. **21 are expected** (entity ↔ canonical source, entity ↔ similar-template-shape false positives, same-author topical overlaps).

**1 new pair from this session's concept layer:**

- `0.9303` [[Byzantine Fault Tolerance]] ↔ [[Lamport Byzantine Generals Problem]]

This is **expected**: the concept page synthesizes the canonical source. Same shape as [[Aggregation Theory]] ↔ [[Thompson Aggregation Theory]] (0.9084) and [[Decision Journals]] ↔ [[Duke Decision Journal]] (0.9260) — concept-page-cites-canonical-source pattern. **No action needed.**

### Review band (0.80-0.90)

1806 pairs (up from 1154 at v3 due to more pages embedded after the fix). Calibration still recommended per the tiling skill: ~50-pair labeling exercise tunes thresholds, expected to cut noise by ~3-5x.

## Cross-Reference Gaps

None detected. The concept-page subagents linked liberally and the auto-fix layer respected the existing wikilink conventions.

## Naming Conventions

All 9 new pages: Title Case with spaces, unique filenames, no conflicts.

## Index Integrity

- `wiki/concepts/_index.md`: updated with 11 new rows during Tier 2 reconciliation (covers all 9 new concepts + Hints for System Design + Staff Engineer Ladder from Tier 1)
- `wiki/entities/_index.md`: updated with Andy Jassy stub during auto-fix; [[Butler Lampson]] and [[Will Larson]] already present from Tier 1
- `wiki/sources/_index.md`: no new sources this re-lint (this wave was concept-layer only)

## Stale Claims

None flagged. The new concept pages are synthesis pages built from existing sources, not contradictions of older claims.

## Recommended Actions

**No blocking issues.** The vault is healthier post-Tier-2 than at any prior point: zero orphans, zero dead links from new pages, zero frontmatter gaps, zero address errors, zero new actionable duplicates.

Optional follow-ups (low priority):

1. **Calibrate tiling thresholds** (~30-min one-time exercise). 1806 review-band pairs is heavy noise. Following the skill's calibration procedure (label ~50 pairs, set new bands in `.vault-meta/tiling-thresholds.json`) would cut the review noise by 3-5x and tighten the Error band signal.
2. **Wiki-fold**: log.md is now at ~700 lines (3 fold-worthy session entries). Next 2^k threshold is 1024; not yet, but a k4 fold of the last 16 entries would compress this session's work for future context loading.
3. **Tier 3 concept-page wave**: ~10 remaining Tier 1 dead links could become concept pages in a future session. Lower leverage than Tier 1 + Tier 2 already shipped.

## Status

**Lint passed with zero blocking errors.** Vault is at its healthiest state of the session. 9 new pages created in 2 dispatched waves (auto-fix + Tier 2) + 1 deletion (Innovators Dilemma merge) + 17 wikilink rewrites + DragonScale Mechanism 3 now fully operational.

The autonomous-execution pattern (plan → parallel agents + main-thread diagnostic → reconcile → verify) continued to compound through three consecutive waves this session: Tier 1 (37 pages, 6 agents), auto-fix (3 pages, sequential), Tier 2 (6 pages, 2 agents + diagnostic). Method validated for repeated use.
