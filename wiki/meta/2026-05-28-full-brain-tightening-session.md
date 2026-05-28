---
type: session
title: "2026-05-28 Full Brain-Tightening Session"
address: c-000322
created: 2026-05-28
updated: 2026-05-28
tags:
  - meta
  - session
  - brain-tightening
  - tier-1
  - tier-2
  - tier-a
  - tier-b
  - tier-c
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[hot]]"
  - "[[log]]"
  - "[[brain-lint-report-2026-05-28]]"
  - "[[lint-report-2026-05-28]]"
  - "[[lint-report-2026-05-28-v2]]"
  - "[[Butler Lampson]]"
  - "[[Will Larson]]"
  - "[[Andy Jassy]]"
  - "[[Hints for System Design]]"
  - "[[Staff Engineer Ladder]]"
  - "[[Working Backwards]]"
  - "[[Carmack on AGI]]"
  - "[[Customer Obsession]]"
  - "[[Long-Term Thinking]]"
  - "[[Two-Pizza Team]]"
  - "[[Distributed Systems]]"
  - "[[Logical Clocks]]"
  - "[[Byzantine Fault Tolerance]]"
  - "[[Leverage as Compounding]]"
  - "[[Inflection Recognition]]"
---

# 2026-05-28: Full Brain-Tightening Session

The largest single-session expansion of the second-brain to date. Five sequential waves (Tier 1 → Tier 2 → Tier A → Tier B → Tier C) executed via parallel-agent dispatch. 50 new pages, ~80 new principles, 1 new Operating Principles section, 2 oversized sections restructured, DragonScale Mechanism 3 unblocked, 1 duplicate merged. Brain ended the session at maximum coherence: all 30 decision frames OP-backed, all 43 mentors at ≥ 4 sources, all major poles concept-anchored.

## Starting state (2026-05-28 morning)

Counter at c-000263. 43 mentors at 9 poles + 2 sub-poles. ~180 principles in 15 OP sections. 7 unbacked decision frames. 3 under-sourced mentors. Mechanism 3 blocked (ollama not installed). One duplicate page in vault (Innovators Dilemma).

## Five waves in sequence

### Wave 1: Tier 1 backlog drain (37 pages, 6 agents)

Parallel-dispatch ingest of the deferred Tier 1 backlog. Six implementer subagents owned disjoint mentor scopes:

- **Bezos backlog** (1 agent): 14 shareholder letters (2000-2021). [[Bezos 2021 Letter]] flagged as Jassy-authored.
- **Vogels backlog** (1 agent): 6 canonical posts (DynamoDB Launch, Lambda Launch, Aurora Ascendant, Modern Applications, Purpose-Built Databases, Monoliths Are Not Dinosaurs).
- **Lampson entity + 4 sources** (1 agent): [[Butler Lampson]] new entity + Hints 1983 + Hints and Principles 2020 + Turing Lecture + Authentication 1992.
- **Larson entity + 4 sources** (1 agent): [[Will Larson]] new entity + Sizing Engineering Teams + Migrations + Staff Archetypes + Elegant Puzzle.
- **Carmack VR/AGI** (1 agent): 4 sources (Oculus Connect 2014, Meta Connect 2022, Farewell Meta 2022, on AGI Keen Technologies).
- **Lamport canonical** (1 agent): 3 papers (Time Clocks 1978, Byzantine Generals 1982, Turing Lecture 2014).

Engineer-planner pole expanded 3 → 5 mentors. Counter c-000263 → c-000299. Wall-clock ~23 min for 6-agent parallel dispatch vs ~120 min estimated sequential.

Operating Principles gained ~28 cited principles across Time Horizon, Customer Direction, Engineering Disposition, Operational Discipline, Operating at Scale. Decision frames grew 26 → 30 (added 4 Lampson/Larson frames).

### Wave 2: Tier 2 concept-page expansion (6 pages, 2 agents + diagnostic)

Three parallel streams. Two agents wrote 6 foundational concept pages; main thread diagnosed and fixed the tiling embed-error root cause.

- **Founder-operator foundations** (1 agent): [[Customer Obsession]], [[Long-Term Thinking]], [[Two-Pizza Team]].
- **Engineer-planner distributed foundations** (1 agent): [[Distributed Systems]], [[Logical Clocks]], [[Byzantine Fault Tolerance]].
- **Tiling embed-error fix** (main thread): root cause was ollama's default `num_ctx = 2048 tokens` for `nomic-embed-text`. Patched `scripts/tiling-check.py` to truncate input to 7500 chars before embedding. Embed errors dropped 45 → 0.

Earlier in this wave, 3 auto-fix concept pages were also created from lint-report Category A findings: [[Working Backwards]] (Bezos memo discipline, distinct from existing Vogels Working Backwards), [[Carmack on AGI]] (consolidates 6 Carmack-AGI dead links), [[Andy Jassy]] (entity stub for Bezos 2021 Letter author).

Counter c-000299 → c-000311.

### Wave 2.5: Duplicate merge

DragonScale Mechanism 3 (semantic tiling), now operational, identified one real near-duplicate: `Innovators Dilemma.md` (c-000234, Wikipedia-sourced) and `Christensen Innovators Dilemma.md` (c-000089, HBR-sourced) had 0.9047 similarity and described the same Christensen 1997 book. Augmented the keeper (c-000089) with the loser's unique content (Patrick Collison endorsement + [[Collison Cowen Interview]] cross-reference), rewrote 17 inbound wikilinks vault-wide, deleted the loser. Counter slot c-000234 retired (DragonScale addresses are append-only). Page count 353 → 352.

### Wave 3: Tier A close-out (22 new principles, 1 new OP section)

Brain-lint identified 7 unbacked decision frames and 2 under-sized OP sections. Tier A executed via 1 research subagent + sequential main-thread edits (single-writer pattern; same-file edits can't safely parallelize).

- 5 missing-backing principles added: Naval leverage formula (frame 13), Thiel secrets (17), Maples inflections (19), Raskin world-change (20), Slootman mediocrity (23).
- **New AI-Native OP section** with 8 principles (Altman compute-as-oil + Moore's-Law + Amodei capability resilience + workflow-vs-wrapper + Constitutional AI + RSP + Hassabis decade-bets + AI-for-science). Backs frames 25 + 26.
- Decision Mechanics expanded 6 → 15 (added Duke resulting + bets-with-probabilities + kill criteria + truthseeking pods + decision journals; Blank get-out-of-building + search-not-small-company; Fitzpatrick Mom Test + behavioral commitments).
- Frame 26 attribution fixed to explicit "(Altman/Amodei)".

OP sections 15 → 18. Principles ~180 → ~205.

### Wave 4: Tier B deepening (11 pages, 4 agents)

Four parallel streams. Three agents deepened under-sourced mentors; one wrote synthesis concept pages.

- **Dean ingest** (1 agent): MapReduce, Bigtable, Tail at Scale. Dean 2 → 5 sources.
- **Allspaw ingest** (1 agent): Cook How Complex Systems Fail (adjacent), Cook Stella Report, Allspaw Trade-Offs Under Pressure. Allspaw 2 → 5.
- **Feld ingest** (1 agent): VC Rights, Bringing Depression Out of the Shadows, Founders Companion. Feld 3 → 6.
- **2 synthesis concepts** (1 agent): [[Leverage as Compounding]] (Naval thesis), [[Inflection Recognition]] (Thiel + Maples + Hoffman). Backs frames 13 + 17 + 19 with dedicated pages on top of OP backing.

Counter c-000311 → c-000321. All 43 mentors now at ≥ 4 sources. Founder-resilience pole 2 → 3 concept pages; capital-strategy pole 2 → 3 concept pages.

### Wave 5: Tier C restructure (3 streams)

Three parallel restructure agents + Python surgical-replace integration.

- **Engineering Disposition** (48 principles): restructured into 5 themed sub-sections. System Design Hints (7) + Distributed Systems Foundations (5) + Pragmatic Engineering (21) + Written-decision Discipline (9) + Carmack VR/AGI-era frames (6). Byte-for-byte preservation of every principle body verified via Python diff.
- **Operational Discipline** (35 principles): 5 themes. Operating Cadence (8) + Bezos+Vogels Operational Patterns (6) + Customer-Service Discipline (8) + Disruption Patterns (4) + Standards + Distinctiveness (9).
- **New Marketplace + Consumer section** (8 principles): Choudary platform triad + Gurley monetization (take-rate, frequency, hard-side subsidy) + Chesky consumer defensibility (brand + network density + design).

Operating Principles 18 → 19 sections, ~205 → ~260 principles, 0 → 83 sub-section ####-level entries. File grew 2066 → 2172 lines. Counter c-000321 → c-000322 (this session-meta page).

## Method validation

The parallel-agent dispatch pattern compounded across five consecutive waves:

| Wave | Pages / Output | Agents | Wall-clock |
|---|---|---|---|
| Tier 1 | 37 source/entity pages | 6 | ~23 min |
| Tier 2 | 6 concept pages + Mechanism 3 fix | 2 + main | ~10 min |
| Tier A | 22 principles + AI-Native section | 1 research + main | ~15 min |
| Tier B | 11 pages (8 sources + 2 concepts + 1 adjacent) | 4 | ~12 min |
| Tier C | 2 restructures + new section | 3 | ~10 min |

**Method idiom (now durable):**

1. Plan → identify disjoint outputs.
2. Dispatch N parallel implementer subagents, each owning one output.
3. Orchestrator owns ALL shared state (Persona, hot, OP, indexes, manifest, log) — no agent touches shared files.
4. Reconcile in single sequential pass after agents return.
5. Verify with bash counts + spot-checks.
6. Commit auto-fires via PostToolUse hook; push at end of wave.

The pattern's load-bearing constraint: outputs MUST be disjoint at the file level. Same-file edits (Tier A, Tier C restructure) collapse to single-writer pattern.

## Ollama install (no-admin path)

DragonScale Mechanism 3 was blocked at session start (ollama not installed; user constraint: no admin). Resolved by:

- Downloaded `Ollama-darwin.zip` (160 MB) to `/tmp/`.
- Extracted to `~/Applications/` (no admin required).
- Cleared Gatekeeper quarantine via `xattr -dr com.apple.quarantine`.
- Symlinked CLI binary `~/Applications/Ollama.app/Contents/Resources/ollama` → `~/.local/bin/ollama` (already on PATH).
- Started `ollama serve` in background; pulled `nomic-embed-text` (274 MB).

Mechanism 3 now fully operational. Cache populated with 320 page embeddings at `.vault-meta/tiling-cache.json` (5.5 MB). 6 tiling reports written this session (v1 through v6).

## Final brain state (2026-05-28 end)

- **Counter**: c-000322 (advanced 59 addresses this session: c-000263 → c-000321 + this meta)
- **Mentors**: 43 across 9 poles + 2 sub-poles, all `status: mature`, all ≥ 4 sources
- **Operating Principles**: 19 sections, ~260 cited principles, 83 ####-level sub-section entries
- **Decision frames**: 30 in [[Persona]], all OP-backed
- **Concept pages added this session**: 13 (Hints for System Design, Staff Engineer Ladder, Working Backwards, Carmack on AGI, Customer Obsession, Long-Term Thinking, Two-Pizza Team, Distributed Systems, Logical Clocks, Byzantine Fault Tolerance, Leverage as Compounding, Inflection Recognition, plus Andy Jassy entity stub)
- **Source pages added this session**: 37
- **Total new pages**: 50 (37 sources + 13 concepts + this session meta)
- **DragonScale Mechanisms**: 1 (folds) unchanged, 2 (addresses) advanced 59, 3 (tiling) operational, 4 (boundary score) verified frontier dominated by this-session pages (8 of top 15)

## Reports generated this session

- `wiki/meta/lint-report-2026-05-28.md` (structural lint after Tier 1)
- `wiki/meta/lint-report-2026-05-28-v2.md` (structural lint after Tier 2 + duplicate merge)
- `wiki/meta/brain-lint-report-2026-05-28.md` (semantic / coherence audit + post-Tier-C verification appendix)
- `wiki/meta/tiling-report-2026-05-28.md` through `-v6.md` (6 tiling runs as Mechanism 3 evolved)

## Outstanding (deferred to future sessions)

- **Calibrate tiling thresholds**: 1806 review-band pairs is heavy noise. Following the skill's calibration procedure (label ~50 pairs) would cut review noise by 3-5x.
- **Wiki-fold the log**: `wiki/log.md` is at ~750 lines after this session. Next 2^k threshold is 1024; not yet, but a k4 fold of the last 16 entries would compress this session's work for future context loading.
- **Bump `MAX_BODY_BYTES`** in `scripts/tiling-check.py` from 128 to 256 KB if you want Operating Principles to be re-included in semantic tiling. Currently OP is skipped (low-impact; OP is an aggregator, not a per-page content unit).
- **Tier 3 concept-page wave**: ~17 remaining aspirational dead links from Tier 1 sources (single-mentor named patterns from Carmack VR/AGI era + Vogels API frames + a few Larson archetypes).

## Connections

- [[Persona]] — operating identity at peak coherence
- [[Operating Principles]] — 19-section principle catalog
- [[brain-lint-report-2026-05-28]] — original audit + post-execution verification appendix
- [[log]] — session log entries
- [[hot]] — session context (Last Updated reflects Tier C close-out)
- [[Wiki Map]] — vault structure
- All concept pages created this session (linked in `related:` frontmatter)
- All entity pages affected (Lampson, Larson, Jassy created; Dean, Allspaw, Feld deepened; Bezos, Vogels, Carmack, Lamport expanded)

---

## Session close addendum (graph view colorization)

After Tier C close + brain-lint verification + session-meta save, one cosmetic improvement: Obsidian Graph View was tuned to make the brain's pole structure visually legible.

`.obsidian/graph.json` updated with:

- **11 color groups by pole tag**: founder-operator (gold), engineer-planner (deep blue), unicorn-builder (emerald), founder-resilience (crimson), mental-models (violet), capital-strategy (cyan), gtm-sales (orange), operating-at-scale (indigo), ai-native (pink), marketplace-consumer (teal), decision-customer-discovery (yellow)
- **3 type-layer color groups by path**: concepts (light purple, synthesis layer), folds (brown, history), meta (dim grey, admin)
- **Force tuning for the 322-page vault**: repelStrength 10 → 15 (spread clusters), linkDistance 250 → 200 (tighter), lineSizeMultiplier 1 → 0.8 (thinner edges so colors pop), textFadeMultiplier 0 → 0.5 (labels appear when zoomed), showArrow true, showOrphans false (cleaner)

Constraint discovered during application: Obsidian writes `graph.json` from in-memory state every time the Graph panel refreshes or the app interacts with it. Apply pattern: quit Obsidian → write the file → reopen. Window-close (Cmd+W) alone is not enough; must Cmd+Q to terminate the process.

Visual result: 11 mentor-pole clusters become spatially separated by color; concept pages float in the middle as bridges between poles; folds and meta sit at the periphery without crowding the core.

Commit: `043b237 obsidian: graph view color groups by mentor pole` (pushed on top of session-end `e8ec9b4`).

This addendum closes the cosmetic tail of the 2026-05-28 brain-tightening session. The brain is now coherent both logically (Tier A+B+C closures) and visually (graph clusters by pole).
