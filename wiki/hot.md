---
type: meta
title: "Hot Cache"
updated: 2026-05-27
tags:
  - meta
  - hot-cache
status: evergreen
related:
  - "[[index]]"
  - "[[log]]"
  - "[[Wiki Map]]"
  - "[[getting-started]]"
  - "[[Persona]]"
---

# Recent Context

Navigation: [[index]] | [[log]] | [[overview]] | [[Persona]]

## Operating Identity

**Archetype: Technical CEO with nine complementary poles.** This brain reads, decides, and synthesizes from nine stances:

- **Founder-operator pole** (6 mentors, all mature): [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]
- **Engineer-planner pole** (5 mentors, all mature): [[John Carmack]], [[Leslie Lamport]], [[John Allspaw]], [[Butler Lampson]], [[Will Larson]]
- **Unicorn-builder pole** (5 mentors, all mature): [[Lenny Rachitsky]], [[Ben Thompson]], [[Hamilton Helmer]], [[Andrew Chen]], [[Paul Graham]]
- **Founder-resilience pole** (4 mentors, all mature): [[Ben Horowitz]], [[Naval Ravikant]], [[Brad Feld]], [[Brian Chesky]]
- **Mental-models pole** (4 mentors, all mature): [[Charlie Munger]], [[Daniel Kahneman]], [[Nassim Taleb]], [[Clayton Christensen]]
- **Capital-strategy pole** (4 mentors, all mature): [[Reid Hoffman]], [[Bill Gurley]], [[Peter Thiel]], [[Mike Maples]]
- **GTM-sales pole** (4 mentors, all mature): [[Mark Roberge]], [[Aaron Ross]], [[April Dunford]], [[Andy Raskin]]
- **Operating-at-scale pole** (4 mentors, all mature): [[Andy Grove]], [[Frank Slootman]], [[Patty McCord]], [[Keith Rabois]]
- **AI-native sub-pole** (3 mentors, all mature): [[Sam Altman]], [[Dario Amodei]], [[Demis Hassabis]]
- **Marketplace-consumer sub-pole** (1 new + 2 cross-listed): [[Sangeet Paul Choudary]] (new), [[Bill Gurley]] (Phase 3 cross), [[Brian Chesky]] (Phase 1 cross)
- **Decision-customer-discovery sub-pole** (3 mentors, all mature): [[Annie Duke]], [[Steve Blank]], [[Rob Fitzpatrick]]

See [[Persona]] for full operating identity. [[Operating Principles]] holds ~150 cited decision principles across 15 sections. **8-phase unicorn-expansion roadmap COMPLETE as of 2026-05-26.**

**Pole assignment by question type:**
- "How do we build this strategically?" → founder-operator pole leads
- "How do we plan the engineering work?" → engineer-planner pole leads
- "Have we found PMF? Is this defensible? Should we start this?" → unicorn-builder pole leads
- "How do I keep operating when everything is on fire?" → founder-resilience pole leads
- "What am I missing? What does failure look like? What's the base rate?" → mental-models pole leads
- "How do we fund this and stage capital across rounds?" → capital-strategy pole leads
- "How do we build a repeatable sales motion?" → gtm-sales pole leads
- "How do we scale operations from 10 to 1000 people?" → operating-at-scale pole leads
- "How do we build an AI-native company that survives capability convergence?" → ai-native pole leads

Default synthesis: long-horizon over local maxima, customer obsession, written-memo discipline, first principles, regret minimization for irreversible decisions, two-way doors for the rest, plan/spec before code, PMF as measurable, Aggregation Theory + 7 Powers for defensibility, growth-rate as compass, and (new this session) wartime/peacetime mode awareness, The Struggle as default state, specific knowledge + leverage as compound advantage, Founder Mode as operating default.

## Last Updated

2026-05-28 (Tier 2 brain-tightening wave + DragonScale Mechanism 3 fully operational): Three parallel streams. Stream A wrote 3 founder-operator foundational concept pages ([[Customer Obsession]], [[Long-Term Thinking]], [[Two-Pizza Team]]) synthesizing Bezos / Vogels / Collison sources. Stream B wrote 3 engineer-planner distributed-systems foundations ([[Distributed Systems]], [[Logical Clocks]], [[Byzantine Fault Tolerance]]) synthesizing Lamport canonical + Vogels + Lampson. Stream C diagnosed and fixed the tiling embed-error root cause: ollama's default `num_ctx` for `nomic-embed-text` is 2048 tokens (not the model's nominal 8192); pages over ~8000 chars failed HTTP 500. Patched `scripts/tiling-check.py` to truncate input to 7500 chars before embedding (cache hash uses full body; transparent to invalidation). Post-fix: 309 pages embedded / 0 errors (was 260 / 45 errors). 6 addresses allocated (c-000305 to c-000310). Counter at 311. Mechanism 3 fully operational; the 21 Error-band pairs are all expected entity-canonical-source overlaps (no new merges needed beyond the Innovators-Dilemma one already resolved). Method continued to compound: 2 agents parallel-dispatch, orchestrator reconciles.

2026-05-28 (Tier 1 backlog drain, parallel-agent dispatch): Six parallel subagents ingested 37 new source pages in a single wave: 14 Bezos shareholder letters 2000-2021 (final letter Jassy-authored, filed under naming convention for corpus consistency), 6 Vogels canonical posts (DynamoDB launch, Lambda launch, Aurora Ascendant, Modern Applications, Purpose-Built Databases, Monoliths Are Not Dinosaurs), [[Butler Lampson]] entity + 4 sources (Hints 1983, Hints and Principles 2020, Turing Lecture, Authentication 1992), [[Will Larson]] entity + 4 sources (Sizing Engineering Teams, Migrations, Staff Archetypes, Elegant Puzzle), 4 Carmack VR/AGI-era sources (Oculus Connect 2014, Meta Connect 2022, Farewell Meta 2022, on AGI at Keen Technologies), and 3 Lamport canonical papers (Time Clocks 1978, Byzantine Generals 1982, Turing Lecture 2014). **Engineer-planner pole expanded 3 → 5 mentors**; bench grew 41 → 43; counter advanced 263 → 299 (37 addresses). Operating Principles gained ~28 cited principles across five sections (Time Horizon, Customer Direction, Engineering Disposition, Operational Discipline, Operating at Scale), total now ~180. Highest-leverage frames added: Lampson "interfaces are the most important design artifact" + "hints with cheap checks", Lamport "n ≥ 3m + 1" + "state-machine replication", Carmack "ship the imperfect intermediate" + "large orgs lose to friction not capacity", Larson "managers should support 6-8 engineers" + "migrations are the only path to material tech-debt progress", Bezos "wandering is an essential counter-balance to efficiency" + "failure scale is the invention scale", Vogels "evolvability is a strategy not a religion" + "10x growth triggers architecture review". Parallel dispatch wall-clock ~23 minutes for 37 pages vs estimated ~120 minutes sequential. Method validated: agents work disjoint mentor scopes, orchestrator reconciles shared state (Persona, hot, Operating Principles, indexes, manifest, log, concept pages).

2026-05-27 (Tier 1 content starter batch): Engineer-planner pole expanded 2 → 3 mentors with [[John Allspaw]] (resilience engineering, "no root cause," ask How not Why, local rationality, blameless postmortems). Bench grew 40 → 41 mentors. Shipped 13 new pages: [[John Allspaw]] entity + 2 Allspaw sources ([[Allspaw Each Necessary]], [[Allspaw Infinite Hows]]) + 5 new Bezos shareholder letters (1998 with the three hiring questions, 1999 "What Do You Own?" platform reframe, 2003 tenant/owner long-term thinking, 2009 the 452-goals letter, 2014 dreamy-business + flywheel) + 5 new Vogels posts ([[Vogels Working Backwards]] the 2006 primary source for the 4-doc process, [[Vogels Distributed Computing Manifesto]] 1998 SOA thesis 4 years before the API mandate, [[Vogels 2023 Predictions]] custom-silicon thesis, [[Vogels S3 Strong Consistency]] refusing trade-offs at petabyte scale, [[Vogels Reinventing Virtualization Nitro]] one-way-door discipline at infrastructure scale). Counter advanced 13 (c-000250 through c-000262). `defuddle` worked via full path; `allocate-address.sh` worked (mkdir-lock patched). Highest-value Allspaw insight feeding [[Operating Principles]]: **"human error is a starting point, not a conclusion"** — upgrades the brain's incident-handling discipline from "everything fails, design for it" (passive) to "everything fails, and the discipline is to ask How not Why to surface the second story" (active).

2026-05-27 (single ingest test): [[PG Do Things That Dont Scale]] upgraded `fidelity: extracts` → `full-text-summary` from `.raw/articles/pg-ds-2026-05-27.md`. Five named patterns now anchored on the source page and PG entity: Collison installation, Pulling a Meraki, Contained fire, Manual mode, Consult mode, plus the synthesizing **startup-as-vector** frame `(product, unscalable first move)`. Also the first end-to-end exercise of the new "Skill Routing" section in CLAUDE.md — routing fired correctly into `claude-obsidian:wiki-ingest`. Note: `defuddle` not installed and `flock` missing on macOS prevented `allocate-address.sh` from running, so no new pages were created this round.

2026-05-26 (Phase 8 Decision Protocols + Customer Discovery, COMPLETE; ROADMAP DONE): Final phase. Added 3 mentors ([[Annie Duke]], [[Steve Blank]], [[Rob Fitzpatrick]]) + 12 sources + 2 concept pages ([[Decision Journals]], [[Customer Discovery Protocol]]) + 1 seed corpus + 1 session meta. Bench 37 to 40. Counter 198 to 217. **8-phase unicorn-expansion roadmap complete.** Final brain state: 40 mentors / 9 poles / 26 decision frames / ~24 concept pages / ~150 cited principles / ~190 source pages.

2026-05-26 (Phase 7 Marketplace + Consumer Deep, complete): Added 1 new mentor ([[Sangeet Paul Choudary]]) cross-listed with [[Bill Gurley]] + [[Brian Chesky]] for a Marketplace + Consumer sub-pole + 4 sources + 2 concept pages ([[Marketplace Liquidity]], [[Consumer Defensibility]]). Bench 36 to 37. Counter 189 to 198. Smallest phase by design (Gurley + Chesky already in brain).

2026-05-26 (Phase 6 AI-Native sub-pole, complete): Added 9th pole + 3 mentors ([[Sam Altman]], [[Dario Amodei]], [[Demis Hassabis]]) + 12 sources + 2 concept pages ([[AI-Native Economics]], [[AI Company Defensibility]]) + 1 seed corpus + 1 session meta. Bench 33 to 36. Frames 24 to 26 (Amodei capability resilience, model-wrapper-workflow trichotomy). Operating Principles gained ~8 cited principles. Counter 170 to 189.

2026-05-26 (Phase 5 Operating at Scale pole, complete): Added 8th pole + 4 mentors ([[Andy Grove]], [[Frank Slootman]], [[Patty McCord]], [[Keith Rabois]]) + 16 sources + 2 concept pages ([[Scaling Operations]], [[Hiring at Scale]]) + 1 seed corpus + 1 session meta. Bench 29 to 33. Frames 22 to 24. Operating Principles gained ~14 cited principles in new Operating at Scale section. Counter 146 to 170.

2026-05-26 (Phase 4 GTM / Sales pole, complete): Added 7th pole + 4 mentors ([[Mark Roberge]], [[Aaron Ross]], [[April Dunford]], [[Andy Raskin]]) + 16 sources + 3 concept pages ([[Repeatable GTM]], [[Strategic Narrative]], [[Positioning as Strategy]]) + 1 seed corpus + 1 session meta. Bench 25 to 29. Frames 19 to 22 (Raskin world change, Dunford negative positioning, Roberge unit economics at scale). Operating Principles gained ~10 cited principles in new GTM/Sales section. Counter 121 to 146 (25 addresses).

2026-05-26 (Phase 3 Capital Strategy pole, complete): Added 6th pole + 4 mentors ([[Reid Hoffman]], [[Bill Gurley]], [[Peter Thiel]], [[Mike Maples]]) + 16 sources + 2 concept pages ([[Capital Strategy]], [[Secrets and Inflections]]) + 1 seed corpus ([[seed-corpus-capital-strategy]]) + 1 session meta. Persona archetype 5 to 6 poles. Decision frames 16 to 19 (added Thiel secrets, Hoffman blitzscale/starve, Maples inflections). Operating Principles gained 12 cited principles in new Capital Strategy section. Counter advanced 24 (c-000097 through c-000120). Parallel-agent dispatch.

2026-05-26 (Phase 2 Mental Models pole, complete): Added 5th pole + 4 mentors ([[Charlie Munger]], [[Daniel Kahneman]], [[Nassim Taleb]], [[Clayton Christensen]]) + 16 sources + 3 concept pages ([[Mental Models Toolkit]], [[Disruption vs Aggregation]], [[Antifragility for Startups]]) + 1 seed corpus ([[seed-corpus-mental-models]]) + 1 session meta ([[2026-05-26-mental-models-training-session]]). Persona archetype 4 poles to 5. Decision frames 13 to 16 (added inversion, base rate, antifragile). Operating Principles gained 14 cited principles in new Mental Models section. Counter advanced 25 (c-000072 through c-000096). Parallel-agent dispatch again.

2026-05-26 (Phase 1 Founder Resilience pole, complete): Added 4th pole + 4 mentors ([[Ben Horowitz]], [[Naval Ravikant]], [[Brad Feld]], [[Brian Chesky]]) + 15 sources + 2 concept pages ([[Founder Resilience]], [[Founder Mode]]) + 1 seed corpus ([[seed-corpus-founder-resilience]]) + 1 session meta ([[2026-05-26-founder-resilience-training-session]]). Persona archetype expanded to four poles. Decision frames grew 11 → 13 (added "Am I in wartime or peacetime?" and "What is my unique leverage compounding?"). Operating Principles gained 13 cited principles in new Founder Resilience section. Counter advanced 23 (c-000049 through c-000071). Used parallel-agent dispatch: 4 agents wrote disjoint mentor sets concurrently, ~5 min wall-clock vs ~25 min sequential. Session meta at [[2026-05-26-founder-resilience-training-session]].

2026-05-26 (Unicorn-expansion roadmap session, no ingestion): Audit + 8-phase roadmap written to `~/.claude/plans/second-brain-jazzy-ullman.md`. Identifies 4 critical gaps (Founder Resilience, Mental Models, Capital Strategy, GTM/Sales) plus 4 secondary (Operating at Scale, AI-Native, Marketplace+Consumer Deep, Decision Protocols+Customer Discovery). Target end state: ~30 mentors, ~22 decision frames, ~24 concept pages. Recommended order: Phase 1 Founder Resilience → 2 Mental Models → 3 Capital Strategy. No wiki content created this session, no addresses allocated.

2026-05-26 (Chen expansion, additive to unicorn-builder pole): Added [[Andrew Chen]] as 13th mentor. 4 sources ingested (Cold Start Problem Book, Growth Loops, Atomic Network, Uber Rider Growth applied). New concept page [[Growth Loops]] cross-referencing [[7 Powers]] (Network Economies). Operating Principles gained 7 new cited principles in Product Discipline section (atomic network, hard side, loops compound, channel saturation, hyperlocal play, 5 stages). New decision frame 11 ("What stage of Cold Start framework are we in?"). Bench now 13 mentors, 11 decision frames, 70+ Operating Principles.

2026-05-26 (Helmer expansion, additive to unicorn-builder pole): Added [[Hamilton Helmer]] as 12th mentor. 4 sources ingested (7 Powers Book, Acquired Podcast, Counter-Positioning Deep Dive, 7 Powers Applied to AWS). New concept page [[7 Powers]] cross-referencing [[Aggregation Theory]]. Operating Principles gained 10+ cited principles in Strategic Durability section. Decision frame 9 ("Is this defensible?") updated to include both Aggregation Theory + 7 Powers lenses.

2026-05-26 (Unicorn-Builder session, complete): Three synthesis concept pages written ([[Product-Market Fit]], [[Aggregation Theory]], [[Early-Stage Discipline]]). [[Persona]] expanded to three-pole archetype with 10 decision frames (was 7). 3 unicorn-builder mentors matured (Lenny, Thompson, Graham).

2026-05-26 (Unicorn-Builder Phases 1-5): Scaffolded unicorn-builder pole. Matured [[Lenny Rachitsky]] (4 sources: PMF Guide, Retention Benchmarks, North Star Metric, Chesky Founder Mode). Matured [[Ben Thompson]] (4 sources: Aggregation Theory, Defining Aggregators, Bill Gates Line, End of the Beginning). Matured [[Paul Graham]] (4 essays: How to Start a Startup, Do Things That Don't Scale, Startup = Growth, How to Get Startup Ideas). Operating Principles gained two new sections (Product Discipline + Strategic Durability + Early-Stage Epistemics) with 20+ new cited principles.

2026-05-26 (Engineer-Planner session, prior): Engineer-planner pole shipped. 8 sources, 2 mentors matured (Carmack, Lamport), 17 new principles, Persona expanded to two-pole archetype. Session summary at `wiki/meta/2026-05-26-engineer-planner-training-session.md`.

2026-05-24 (Phase 8, founder-operator session): 25 sources, 6 of 6 mentors mature, Operating Principles fully cited. See `wiki/meta/2026-05-24-persona-training-session.md`.

## Plugin State

- **Version**: 1.6.0 (no changes this session, vault-content work only)
- **Skills**: 11 (wiki, wiki-ingest, wiki-query, wiki-lint, wiki-fold, save, autoresearch, canvas, defuddle, obsidian-bases, obsidian-markdown)
- **Scripts**: `scripts/allocate-address.sh` (requires flock, unavailable on macOS), `/tmp/alloc_addr.py` (Python fcntl shim used this session), `scripts/tiling-check.py`, `scripts/boundary-score.py`
- **Hooks**: 4 (SessionStart, PostCompact, PostToolUse stages wiki/, .raw/, .vault-meta/, Stop)

## DragonScale Mechanisms

1. **Fold operator** (Mechanism 1): unchanged this session; 1 fold exists at `wiki/folds/fold-k3-from-2026-04-23-to-2026-04-24-n8.md`.
2. **Deterministic addresses** (Mechanism 2): vault counter at 35. Addresses c-000001 through c-000034 assigned. All new pages have addresses. Counter advanced 19 this session (c-000016 through c-000034 = 19 pages: 1 seed corpus + 3 entities + 12 sources + 3 concept pages).
3. **Semantic tiling lint** (Mechanism 3): unchanged this session; last tiling report at `wiki/meta/tiling-report-2026-04-24.md`.
4. **Boundary-first autoresearch** (Mechanism 4): unchanged; sources hand-picked, not autoresearch-discovered.
5. **Parallel-agent dispatch** (new pattern): Phase 1 ran 4 implementer subagents concurrently, one per mentor. Each agent owned disjoint output paths (entity + sources for one mentor). Wall-clock ~5 min vs estimated ~25 min sequential. Works when format pattern is established and content briefs are self-contained.

## Session Statistics (Phase 1, 2026-05-26 most recent)

- **Sources ingested this session**: 15 (4 Horowitz + 4 Naval + 3 Feld + 4 Chesky)
- **Mentor entities matured**: 4 ([[Ben Horowitz]], [[Naval Ravikant]], [[Brad Feld]], [[Brian Chesky]])
- **New concept pages**: 2 ([[Founder Resilience]], [[Founder Mode]])
- **New seed corpus**: 1 ([[seed-corpus-founder-resilience]])
- **New principles in Operating Principles**: 13 (new Founder Resilience section)
- **Persona changes**: bench grew from 13 to 17 mentors; 2 new decision frames (wartime/peacetime mode, leverage compounding); archetype expanded to four poles
- **Addresses allocated**: c-000049 through c-000071 (23 addresses)

## Style Preferences

- No em dashes (U+2014) or `--` as punctuation. Periods, commas, colons, or parentheses. Hyphens in compound words are fine.
- Short and direct responses. No trailing summaries.
- Parallel tool calls when independent.

## Active Threads

- **Unicorn-expansion roadmap (2026-05-26):** 8-phase plan at `~/.claude/plans/second-brain-jazzy-ullman.md`. **ALL 8 PHASES COMPLETE.** Brain grew from 13 → 40 mentors, 3 → 9 poles, 11 → 26 decision frames, 7 → 24 concept pages in single session.
- **Pending verification:** smoke-test the brain in a fresh Claude conversation with a unicorn-stage strategic question; confirm reasoning routes through multiple poles correctly. User to verify next session.
- **Optional follow-ups (deferred):** Claude Code skills suggested in roadmap (`/strategy-stress-test`, `/founder-decision`, `/pitch-coach`, `/hiring-loop`, `/sales-discovery`, `/competitor-watch`); not implemented this session.
- Roadmap-deferred to subsequent phases (after Phase 2): Phase 3 Hoffman/Gurley/Thiel/Maples (Capital), Phase 4 Roberge/Ross/Dunford/Raskin (GTM), Phase 5 Grove/Slootman/McCord/Rabois (Operating), Phase 6 Altman/Amodei/Hassabis (AI-Native), Phase 7 Gurley deep/Choudary (Marketplace+Consumer), Phase 8 Duke/Blank/Fitzpatrick (Decision+Customer Discovery).
- Out of scope per roadmap: design pole (Fadell, Ive), vertical-specific domain mentors (fintech, healthtech etc.), public-company operator depth (Iger, Dimon, Buffett), engineer-planner second wave (Lampson, Allspaw, Larson).

## Repo Locations

- Working: `/Users/simon/claude-obsidian/`
- Public: https://github.com/AgriciDaniel/claude-obsidian (unchanged this session)
