---
type: meta
title: "Lint Report 2026-05-29"
created: 2026-05-29
updated: 2026-05-29
tags: [meta, lint]
status: developing
related:
  - "[[lint-report-2026-05-28-v2]]"
  - "[[2026-05-29-jarvis-voice-loop-production-session]]"
  - "[[tiling-report-2026-05-29]]"
---

# Lint Report: 2026-05-29

Light-touch lint after a tooling-focused session (no wiki content edits except the session-meta save). Brain-coherence work from 2026-05-28 (Tier A+B+C close-out) covered in `lint-report-2026-05-28-v2.md`.

## Summary

| Metric | Value |
|---|---|
| Pages scanned | 379 (+18 vs prior lint: jarvis-claude artifacts moved into git but most non-wiki) |
| Counter peek | c-000324 |
| Max address observed (frontmatter) | c-000323 ([[2026-05-29-jarvis-voice-loop-production-session]]) ✓ |
| New wiki pages this delta | 1 ([[2026-05-29-jarvis-voice-loop-production-session]]) |
| Frontmatter gaps on new page | 0 |
| Dead links from new page | 0 (5/5 wikilinks resolve) |
| Address collisions vault-wide | 0 |
| Tiling cache: hits / recomputed / skipped | 320 / 0 / 59 |
| Tiling Error band pairs | 22 (no change; no new pairs from this session) |
| DragonScale Mechanism 2 (addresses) | pass |
| DragonScale Mechanism 3 (tiling) | pass |
| DragonScale Mechanism 4 (boundary score) | not re-run (vault delta below significance) |

## Orphan Pages

None new. The 2026-05-29 session-meta is inbound-linked from `wiki/log.md` + itself's own self-mention (counts as 2 inbound per the standard grep).

## Dead Links

Zero from the new session-meta. All 5 wikilinks (`[[2026-05-28-full-brain-tightening-session]]`, `[[Persona]]`, `[[hot]]`, `[[log]]`, `[[Working Backwards]]`) resolve to existing pages.

## Frontmatter Gaps

None. New session-meta has `type: session`, `title`, `address: c-000323`, `status: mature`, `tags`, `created: 2026-05-29`, `updated: 2026-05-29`, `related: [...]`.

## Address Validation (DragonScale Mechanism 2)

- Counter state: **c-000324**
- Highest c- address observed: **c-000323**
- Post-rollout pages with addresses: 1/1 new this delta (100%)
- Counter consistency: peek (324) > max address (323) ✓
- Uniqueness: 0 collisions vault-wide

## Semantic Tiling (DragonScale Mechanism 3)

Incremental run: `wiki/meta/tiling-report-2026-05-29.md`.

- Pages scanned: 379
- Embedded: 320 (0 new; session-meta is under `wiki/meta/` which is excluded from tiling by skill scope)
- Skipped: 59 (9 excluded filenames + 1 meta + 2 folds + 42 wiki/meta/ + **5 too_large**)
- Cache: 320 hits / 0 recomputed (incremental, no work)
- Error band (≥0.90): **22 pairs** (unchanged since 2026-05-28 v6 run; no new actionable duplicates)

### Note on `too_large=5`

Up from 4 last lint. Cause: 1 additional tiling report exceeded 128 KB (the v6 from 2026-05-28). Pages skipped by size:

- `wiki/concepts/Operating Principles.md` (145 KB after Tier C)
- 4 tiling reports `wiki/meta/tiling-report-2026-05-28-v3.md` through `-v6.md` (each ~164 KB)

Tooling artifact, not a brain issue. Operating Principles is an aggregator; tiling reports are output artifacts that shouldn't tile against content anyway. To re-include Operating Principles in semantic comparison, bump `MAX_BODY_BYTES` 128 → 256 KB in `scripts/tiling-check.py` (1-line). Not gating.

## Stale Claims, Cross-Reference Gaps, Naming Conventions

None detected. The session-meta naming follows the canonical `YYYY-MM-DD-<topic>-session.md` pattern used by 12 prior session metas.

## Recommended Actions

**Zero blocking issues.** This was a tooling session; wiki content delta is minimal (1 new page).

Carry-over deferrals from prior lints (low priority, unchanged):

1. Calibrate tiling thresholds (~50 pair labeling exercise) to cut review-band noise 3-5×.
2. Wiki-fold the log (~800+ lines after this session's entry; next 2^k threshold 1024 not yet hit but approaching).
3. Bump `MAX_BODY_BYTES` 128 → 256 KB in `scripts/tiling-check.py` to re-include Operating Principles in tiling.
4. Tier 3 concept-page wave for ~17 remaining single-mentor aspirational dead links (lowest leverage).

## Status

**Lint passed clean.** Vault stable post-Jarvis session. The session's actual work was out-of-vault (jarvis-claude/ code, committed as `efda32f`); only artifact in the wiki is the session-meta at [[2026-05-29-jarvis-voice-loop-production-session]], and it's fully linked.

Brain at maximum coherence. Voice frontend in production. Both layers stable.
