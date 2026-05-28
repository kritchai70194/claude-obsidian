---
type: meta
title: "Operation Log"
updated: 2026-05-27
tags:
  - meta
  - log
status: evergreen
related:
  - "[[index]]"
  - "[[hot]]"
  - "[[overview]]"
  - "[[sources/_index]]"
---

# Operation Log

Navigation: [[index]] | [[hot]] | [[overview]]

Append-only. New entries go at the TOP. Never edit past entries.

Entry format: `## [YYYY-MM-DD] operation | Title`

## [2026-05-28] ingest | Tier 1 backlog drain: 6 parallel agents, 37 pages

- Method: 6 implementer subagents dispatched concurrently, one per mentor stream. Wall-clock ~23 minutes vs estimated ~120 minutes sequential. Each agent owned disjoint source/entity scope; orchestrator reconciled shared state (Persona, hot, Operating Principles, indexes, manifest, log, concept pages).
- Sources ingested: 37 (14 Bezos shareholder letters, 6 Vogels posts, 4 Lampson papers/talks, 4 Larson posts, 4 Carmack VR/AGI sources, 3 Lamport canonical papers, 2 new mentor entities)
- Pages created (37):
  - **Bezos (14)**: [[Bezos 2000 Letter]], [[Bezos 2001 Letter]], [[Bezos 2004 Letter]], [[Bezos 2005 Letter]], [[Bezos 2006 Letter]], [[Bezos 2007 Letter]], [[Bezos 2008 Letter]], [[Bezos 2010 Letter]], [[Bezos 2011 Letter]], [[Bezos 2012 Letter]], [[Bezos 2013 Letter]], [[Bezos 2018 Letter]], [[Bezos 2019 Letter]], [[Bezos 2021 Letter]] (Jassy-authored, flagged in body)
  - **Vogels (6)**: [[Vogels DynamoDB Launch]], [[Vogels Lambda Launch]], [[Vogels Aurora Ascendant]], [[Vogels Modern Applications]], [[Vogels Purpose-Built Databases]], [[Vogels Monoliths Are Not Dinosaurs]]
  - **Lampson (1 entity + 4 sources)**: [[Butler Lampson]], [[Lampson Hints for Computer System Design]], [[Lampson Hints and Principles 2020]], [[Lampson Turing Award Lecture 1992]], [[Lampson Authentication Distributed Systems]]
  - **Larson (1 entity + 4 sources)**: [[Will Larson]], [[Larson Sizing Engineering Teams]], [[Larson Migrations]], [[Larson Staff Archetypes]], [[Larson Elegant Puzzle]]
  - **Carmack VR/AGI (4)**: [[Carmack Oculus Connect 2014]], [[Carmack Meta Connect 2022 Unscripted]], [[Carmack Farewell Meta 2022]], [[Carmack on AGI Keen Technologies]]
  - **Lamport canonical (3)**: [[Lamport Time Clocks Distributed System]], [[Lamport Byzantine Generals Problem]], [[Lamport Turing Lecture Concurrency Early Years]]
- Pages updated: [[Persona]] (engineer-planner pole 3 → 5; bench 41 → 43; decision frames 26 → 30 with 4 new Lampson/Larson frames), [[hot]] (Last Updated), [[concepts/Operating Principles]] (~28 new cited principles across 5 sections; total ~180), [[Jeff Bezos]] (14 new letters in core-frames + Letters Covered section), [[Werner Vogels]] (6 new sources + 18 new bullets in Core Frames), [[John Carmack]] (VR/AGI era section + 13 new frames), [[Leslie Lamport]] (Foundational Papers section + 10 new frames). 2 concept pages written by orchestrator: [[Hints for System Design]], [[Staff Engineer Ladder]].
- Addresses allocated: c-000263 through c-000299 (37 addresses; counter now at 300)
- Pole count change: engineer-planner pole 3 → 5 with [[Butler Lampson]] (system-design hints lineage) and [[Will Larson]] (staff-engineering / org-design lineage). Pole now matches founder-resilience depth.
- Key insights synthesized into Persona decision frames:
  - **Frame 27** "Is this a hint or a promise?" (Lampson) — engineering discipline for distinguishing checkable guesses from staked contracts
  - **Frame 28** "What's the interface, and what does it conceal?" (Lampson) — interfaces are the durable contract; don't hide power
  - **Frame 29** "Are we migrating, or just talking about migrating?" (Larson) — the three-phase migration funnel as the only path to material tech-debt progress
  - **Frame 30** "Is this an org-debt problem dressed as a tech-debt problem?" (Larson + Allspaw cousin) — information flow before personality, org boundaries before codebase
- Fetch fidelity: full-text-summary for all 37 sources except [[Carmack on AGI Keen Technologies]] (extracts from composite primary sources). Notes: aboutamazon.com 404 for letters pre-2016 (used q4cdn / SEC EDGAR fallbacks via Wayback); ACM DL paywall on 1992 Lampson Turing lecture (filed at `status: developing` for future deepen); WebFetch refused PDF verbatim → fallback to pypdf extraction (Lampson + Lamport canonical) and Read-tool multimodal PDF extraction (Lamport).
- Tooling notes: mkdir-lock allocator handled 6-way concurrent contention without collision. defuddle worked for most HTML sources; failed on 3 Vogels URLs (HTML structure variance) → manual content extraction. No orchestrator-time WebSearch overhead — pure parallel-agent dispatch.



- Sources ingested: 12 (2 Allspaw essays, 5 Bezos shareholder letters, 5 Vogels blog posts)
- Pages created (13): [[John Allspaw]] (entity), [[Allspaw Each Necessary]], [[Allspaw Infinite Hows]], [[Bezos 1998 Letter]], [[Bezos 1999 Letter]], [[Bezos 2003 Letter]], [[Bezos 2009 Letter]], [[Bezos 2014 Letter]], [[Vogels Working Backwards]], [[Vogels Distributed Computing Manifesto]], [[Vogels 2023 Predictions]], [[Vogels S3 Strong Consistency]], [[Vogels Reinventing Virtualization Nitro]]
- Pages updated: [[Persona]] (engineer-planner pole 2 → 3 mentors, mentor bench 40 → 41), [[hot]] (Last Updated), [[entities/_index]], [[sources/_index]], [[Jeff Bezos]] entity, [[Werner Vogels]] entity, `.raw/.manifest.json`
- Addresses allocated: c-000250 through c-000262 (13 addresses)
- Pole count change: engineer-planner pole gained [[John Allspaw]] as third anchor, adding resilience-engineering / cognitive-systems-engineering lineage (Sidney Dekker, Richard Cook, Nancy Leveson, Todd Conklin) to the Carmack pragmatic-individual frame and the Lamport formal-spec frame
- Key insight: **"Human error is a starting point, not a conclusion"** ([[Allspaw Infinite Hows]]). Upgrades the brain's incident-handling discipline from passive "everything fails, design for it" to active "everything fails, and the second-story discipline is the substrate of organizational learning." Combined with Lamport's "code without spec is patches" and Carmack's "write decisions down with reasoning," the engineer-planner pole now has a coherent three-anchor frame: plan before code (Carmack) + specify before implement (Lamport) + learn after incidents (Allspaw).
- Fetch fidelity: Allspaw essays = extracts (kitchensoap.com via WebFetch); Etsy Code as Craft blog blocked WebFetch (403). All 5 Bezos letters = full-text PDFs (via q4cdn.com IR mirror + Amazon corporate-ir.net mirror via Wayback). All 5 Vogels posts = full text (via Wayback's archived snapshots; live allthingsdistributed.com behind a Cloudflare wall).
- Tooling notes: `defuddle` at `/Users/simon/.local/node/bin/defuddle` worked when invoked with full path. `./scripts/allocate-address.sh` mkdir-lock patch works on macOS (no flock needed). Counter at c-000262 at end (peek = 263).

## [2026-05-27] fold | batch-exponent-k4 rollup of 16 entries

- Location: wiki/folds/fold-k4-from-2026-05-26-to-2026-05-27-n16.md
- Range: 2026-05-26 to 2026-05-27
- Children: 16 log entries

## [2026-05-27] ingest | PG "Do Things That Don't Scale" full-text upgrade

- Source: `.raw/articles/pg-ds-2026-05-27.md` (URL: https://paulgraham.com/ds.html, md5 `af895ead`)
- Summary: [[PG Do Things That Dont Scale]] upgraded from `fidelity: extracts` → `full-text-summary`
- Pages created: (none — only updates this round)
- Pages updated: [[PG Do Things That Dont Scale]], [[Paul Graham]], `.raw/.manifest.json`, [[hot]]
- Named patterns now anchored: Collison installation, Pulling a Meraki, Contained fire, Manual mode, Consult mode, Startup-as-vector
- Key insight: ingesting from the FULL essay text revealed five named patterns the extracts page had collapsed into one ("manual recruitment"). The vector framing — pair `(product, unscalable first move)` — is the essay's synthesizing move and was missing entirely.
- Routing test: this ingest was the first end-to-end exercise of the new "Skill Routing" section in CLAUDE.md. `defuddle` was unavailable; fall-through to curl+WebFetch worked. DragonScale `allocate-address.sh` failed (no `flock` on macOS) — sidestepped by only updating pages with pre-existing addresses.

## [2026-05-27] tooling | JARVIS voice UI app built at jarvis-claude branch

- Location: jarvis-claude/ on feat/jarvis-claude-voice-ui (separate Electron app, out of scope for wiki vault)
- ChatGPT-style architecture: Silero VAD segments mic into utterances, Whisper.cpp transcribes, language-locked EN/TH
- Thai assistant name: ข้าวกล้า (Khaokla); push-to-talk Space-bar bypass available
- Architecture, decisions, gotchas captured in Claude project memory — see MEMORY.md entries dated 2026-05-27 (jarvis-claude-app, jarvis-whisper-cpp-setup, jarvis-claude-binary-resolution, jarvis-vad-web-vite-gotcha, feedback_jarvis-voice)

## [2026-05-26] persona-training | Phase 8 Complete + ROADMAP DONE

- Phase: 8 of 8 (FINAL)
- New mentors: Annie Duke, Steve Blank, Rob Fitzpatrick (3 mentors)
- New concept pages: Decision Journals (c-000214), Customer Discovery Protocol (c-000215)
- Counter: 198 to 217
- **8-phase unicorn-expansion roadmap COMPLETE in single session.**
- Final state: 40 mentors / 9 poles / 26 decision frames / ~24 concept pages / ~150 cited principles / ~190 source pages
- Pending: smoke-test in fresh Claude conversation

## [2026-05-26] persona-training | Phase 7 Marketplace + Consumer Deep Complete

- Phase: 7 of 8
- New mentor: Sangeet Paul Choudary (cross-listed with Gurley + Chesky)
- Counter: 189 to 198 (smallest phase by design)
- Next: Phase 8 Decision Protocols + Customer Discovery (Duke, Blank, Fitzpatrick), final

## [2026-05-26] persona-training | Phase 6 AI-Native Sub-Pole Complete

- Phase: 6 of 8
- New pole: AI-Native (9th)
- Mentors matured: Sam Altman, Dario Amodei, Demis Hassabis (3 mentors not 4)
- Counter: 170 to 189
- Updates: Persona (8 to 9 poles, 33 to 36 mentors, 24 to 26 frames), Operating Principles (~8 new principles)
- Next: Phase 7 Marketplace + Consumer Deep

## [2026-05-26] persona-training | Phase 5 Operating at Scale Pole Complete

- Phase: 5 of 8
- New pole: Operating at Scale (8th)
- Mentors matured: Andy Grove, Frank Slootman, Patty McCord, Keith Rabois
- Counter: 146 to 170 (24 addresses)
- Updates: Persona (7 to 8 poles, 29 to 33 mentors, 22 to 24 frames), Operating Principles (~14 new principles), hot, indices
- Next: Phase 6 AI-Native sub-pole (Altman, Amodei, Hassabis), 3 mentors

## [2026-05-26] persona-training | Phase 4 GTM / Sales Pole Complete

- Phase: 4 of 8
- New pole: GTM / Sales (7th)
- Pages created: seed corpus (c-000121), 4 mentors (c-000122-125), 16 sources (c-000126-141), 3 concept pages (c-000142-144), session meta (c-000145)
- Mentors matured: Mark Roberge, Aaron Ross, April Dunford, Andy Raskin
- Updates: Persona (6 to 7 poles, 25 to 29 mentors, 19 to 22 frames), Operating Principles (new GTM/Sales section ~10 principles), hot, indices
- Counter: 121 to 146 (25 addresses)
- Next: Phase 5 Operating at Scale (Grove, Slootman, McCord, Rabois)

## [2026-05-26] persona-training | Phase 3 Capital Strategy Pole Complete

- Phase: 3 of 8 (unicorn-expansion roadmap)
- New pole: Capital Strategy (6th pole)
- Pages created: [[seed-corpus-capital-strategy]] (c-000097), [[Reid Hoffman]] (c-000098), [[Bill Gurley]] (c-000099), [[Peter Thiel]] (c-000100), [[Mike Maples]] (c-000101), 16 source pages (c-000102 to c-000117), [[Capital Strategy]] (c-000118), [[Secrets and Inflections]] (c-000119), [[2026-05-26-capital-strategy-training-session]] (c-000120)
- Pages updated: [[Persona]] (5-pole to 6-pole, bench 21 to 25, frames 16 to 19), [[Operating Principles]] (new Capital Strategy section, 12 principles), [[hot]], [[entities/_index]], [[sources/_index]], [[concepts/_index]]
- Counter: 97 to 121 (24 addresses)
- Method: parallel-agent dispatch
- Next: Phase 4 GTM / Sales pole (Roberge, Ross, Dunford, Raskin)

## [2026-05-26] persona-training | Phase 2 Mental Models Pole Complete

- Phase: 2 of 8 (unicorn-expansion roadmap)
- New pole: Mental Models (5th pole)
- Pages created: [[seed-corpus-mental-models]] (c-000072), [[Charlie Munger]] (c-000073), [[Daniel Kahneman]] (c-000074), [[Nassim Taleb]] (c-000075), [[Clayton Christensen]] (c-000076), 16 source pages (c-000077 to c-000092), [[Mental Models Toolkit]] (c-000093), [[Disruption vs Aggregation]] (c-000094), [[Antifragility for Startups]] (c-000095), [[2026-05-26-mental-models-training-session]] (c-000096)
- Pages updated: [[Persona]] (archetype 4-pole to 5-pole, mentor bench 17 to 21, decision frames 13 to 16 with inversion + base rate + antifragile), [[Operating Principles]] (new Mental Models section, 14 cited principles), [[hot]], [[entities/_index]], [[sources/_index]], [[concepts/_index]]
- Mentor entities matured: 4 (Munger, Kahneman, Taleb, Christensen)
- Counter: 72 to 97 (25 addresses)
- Method: parallel-agent dispatch (4 implementer subagents concurrently)
- Next: Phase 3 Capital Strategy pole (Hoffman, Gurley, Thiel, Maples)

## [2026-05-26] persona-training | Phase 1 Founder Resilience Pole Complete

- Phase: 1 of 8 (unicorn-expansion roadmap at `~/.claude/plans/second-brain-jazzy-ullman.md`)
- New pole: Founder Resilience (4th pole, alongside founder-operator, engineer-planner, unicorn-builder)
- Pages created: [[seed-corpus-founder-resilience]] (c-000049), [[Ben Horowitz]] (c-000050), [[Naval Ravikant]] (c-000051), [[Brad Feld]] (c-000052), [[Brian Chesky]] (c-000053), 15 source pages (c-000054 to c-000068), [[Founder Resilience]] (c-000069), [[Founder Mode]] (c-000070), [[2026-05-26-founder-resilience-training-session]] (c-000071)
- Pages updated: [[Persona]] (archetype 3-pole to 4-pole, mentor bench 13 to 17, decision frames 11 to 13 with wartime/peacetime + leverage compounding), [[Operating Principles]] (new Founder Resilience section, 13 cited principles), [[hot]] (Last Updated entry, archetype, statistics, active threads), [[entities/_index]], [[sources/_index]] (new founder-resilience subsection with 15 sources), [[concepts/_index]] (new Founder Resilience Discipline section)
- Mentor entities matured: 4 (Horowitz, Naval, Feld, Chesky)
- Lint results: 0 em-dashes, 23 unique addresses c-000049 through c-000071, all pages have 5+ inbound links except session meta (1, will grow with future sessions), counter at 72
- Method: parallel-agent dispatch (4 implementer subagents concurrently, disjoint output paths, ~5 min wall-clock vs ~25 min sequential)
- Next: Phase 2 Mental Models pole (Munger, Kahneman, Taleb, Christensen)

## [2026-05-26] persona-training | Chen Expansion Phase 3 - Synthesis + Lint + Close

- Phase: 3 of 3 (synthesis, Persona/indices update, lint)
- Pages created: [[Growth Loops]] (c-000047, synthesis concept page integrating Chen's framework)
- Pages updated: [[Operating Principles]] (7 new principles in Product Discipline: atomic network, hard side, loops compound, four loop types, channel saturation, hyperlocal play, 5-stage tactics mismatch), [[Persona]] (mentor bench 12 -> 13, new decision frame 11 "What stage of Cold Start framework?"), [[hot.md]], all 3 indices
- Lint results: 11 em-dashes in Andrew Chen.md cleaned to 0; all addresses c-000042 through c-000047 valid; counter at 48; orphan check passed
- Session arc: 3 phases, 6 new vault pages, 4 sources ingested, 1 mentor matured, 1 synthesis concept page, Persona expanded to 13 mentors / 11 decision frames, Operating Principles Product Discipline section grew by 7 principles
- Key insight: Chen fills the missing layer between Helmer's destination (Network Economies Power) and PG's foundation (manual recruitment). Brain now has complete network-effect stack: PMF check (Lenny) → manual seeding (PG) → atomic network construction (Chen) → loop stacking (Chen) → Network Economies Power (Helmer) → Aggregation Theory durability (Thompson).

## [2026-05-26] persona-training | Chen Expansion Phase 2 - Ingest

- Phase: 2 of 3 (Chen ingest)
- Sources ingested: [[Chen Cold Start Problem Book]] (2021), [[Chen Growth Loops]] (essay framework), [[Chen Atomic Network]] (foundational concept), [[Chen Uber Rider Growth]] (applied case study)
- Pages created: 4 source pages (c-000043 through c-000046)
- Pages updated: [[Andrew Chen]] (seed -> mature, 10 cited core frames)
- Key insight: The Cold Start Problem framework is largely the Uber operating playbook generalized. Chen ran 70+ city expansions at ~$1B annual growth spend; the book is the consultant-style abstraction of an operating reality. Brain now has empirically-grounded network-effect mechanics, not just theory.

## [2026-05-26] persona-training | Chen Expansion Phase 1 - Scaffold

- Phase: 1 of 3 (Chen mini-session, additive to the unicorn-builder pole)
- Pages created: [[Andrew Chen]] (seed)
- Pages updated: [[seed-corpus-unicorn-builders]] (added Chen section, 4 sources AC1-AC4; bench grew from 4 to 5 mentors)
- Addresses allocated: c-000042 (Chen)
- Key insight: Chen fills the gap between Helmer's Network Economies (Power = destination) and PG's "do things that don't scale" (manual recruitment). Atomic Network framework explains specifically how to construct the network that becomes the Power. Brain now has destination-and-route stack for network-effect businesses.

## [2026-05-26] persona-training | Helmer Expansion Phase 3 - Synthesis + Lint + Close

- Phase: 3 of 3 (synthesis, Persona/indices update, lint)
- Pages created: [[7 Powers]] (c-000041, synthesis concept page bridging Helmer + Thompson)
- Pages updated: [[Operating Principles]] (10 new principles in Strategic Durability section, all cited to Helmer sources), [[Persona]] (mentor bench 11 -> 12, decision frame 9 updated to include both Aggregation Theory + 7 Powers lenses), [[Aggregation Theory]] concept page (cross-references 7 Powers), [[hot.md]] (Helmer + 7 Powers session), entities/_index.md and sources/_index.md and concepts/_index.md (Helmer additions)
- Lint results: 30 em-dashes in session-author files cleaned to 0; all addresses c-000036 through c-000041 valid; counter at 42; orphan check shows all 6 new pages with 3+ inbound links each.
- Session summary: brain bench grew from 11 to 12 mentors; unicorn-builder pole gained Helmer as complementary moat-framework mentor to Thompson; Operating Principles Strategic Durability section now has both Thompson Aggregation Theory + Helmer 7 Powers principles.
- Key insight: The 7 Powers Applied to AWS analysis demonstrated the brain's new emergent capability: take existing Vogels/Bezos content and re-evaluate through Helmer's framework. "Everything fails all the time" = Process Power. "APIs are forever" = Switching Costs. The two mentors converge.

## [2026-05-26] persona-training | Helmer Expansion Phase 2 - Ingest

- Phase: 2 of 3 (Helmer ingest)
- Sources ingested: [[Helmer 7 Powers Book]] (2016 framework), [[Helmer Acquired Podcast]] (2021 applied interview), [[Helmer Counter-Positioning Deep Dive]] (most original Power), [[Helmer 7 Powers Applied to AWS]] (applied analysis cross-referencing Vogels)
- Pages created: 4 source pages (c-000037 through c-000040)
- Pages updated: [[Hamilton Helmer]] (seed -> mature, 10 cited core frames)
- Key insight: The "Applied to AWS" analysis demonstrates the brain's NEW capability: take existing brain content (Vogels frames) and re-evaluate through Helmer's framework. AWS exhibits 4 stacked Powers, the most durable profile. "Everything fails all the time" maps to Process Power; "APIs are forever" maps to Switching Costs. The two mentors converge.

## [2026-05-26] persona-training | Helmer Expansion Phase 1 - Scaffold

- Phase: 1 of 3 (Helmer mini-session, additive to the unicorn-builder pole)
- Pages created: [[Hamilton Helmer]] (seed)
- Pages updated: [[seed-corpus-unicorn-builders]] (added Helmer section, 4 sources H1-H4; bench grew from 3 to 4 mentors)
- Addresses allocated: c-000036 (Helmer)
- Key insight: Helmer + Thompson are complementary, not redundant. Thompson explains internet-era dynamics specifically; Helmer provides the universal moat taxonomy that predates and outlives any specific era. Brain now has both modern and timeless strategy lenses.

## [2026-05-26] persona-training | Unicorn-Builder Phase 7 - Lint and Close

- Phase: 7 of 7 (lint + session close)
- Pages updated: wiki/sources/_index.md (3 new sections: Product Discipline, Strategic Durability, Early-Stage Epistemics), wiki/entities/_index.md (Unicorn-builder pole subsection), wiki/concepts/_index.md (Unicorn-Building Discipline section)
- Pages created: wiki/meta/2026-05-26-unicorn-builder-training-session.md (closing summary, c-000035)
- Lint results: 20 new pages all have valid addresses (c-000016 through c-000035); 23 session-author files have zero em-dashes after lint; orphan check shows all new pages with 3+ inbound links; pre-existing em-dashes untouched per rule.
- Counter state: was 16 at session start; now 36. Allocated 20 addresses this session.
- Session arc: 7 phases, 20 new vault pages, 12 sources ingested, 3 mentors matured, 3 synthesis concept pages, Persona expanded to three-pole archetype with 3 new decision frames (10 total), Operating Principles grew by ~22 cited principles across 3 new sections. Plan file at /Users/simon/.claude/plans/secondbrain-velvet-crown.md Plan 2 section fully executed.

## [2026-05-26] persona-training | Unicorn-Builder Phase 6 - Graham + Synthesis

- Phase: 6 of 7 (Graham ingest + 3 synthesis concept pages + Persona update)
- Sources ingested: [[PG How to Start a Startup]] (2005), [[PG Do Things That Dont Scale]] (2013), [[PG Startup = Growth]] (2012), [[PG How to Get Startup Ideas]] (2012)
- Pages created: [[PG How to Start a Startup]], [[PG Do Things That Dont Scale]], [[PG Startup = Growth]], [[PG How to Get Startup Ideas]], [[Product-Market Fit]], [[Aggregation Theory]], [[Early-Stage Discipline]]
- Pages updated: [[Paul Graham]] (seed -> mature, 12 cited core frames), [[Operating Principles]] (new Early-Stage Epistemics section with 10 cited principles), [[Persona]] (three-pole archetype, 11 mentors in bench, 10 decision frames, growth plan rewritten), [[hot.md]] (full session refresh)
- Key insight: The four PG essays compress into a coherent shape: notice problems you live -> build to remove suck -> recruit users manually -> measure growth ruthlessly. Combined with Lenny's PMF measurability and Thompson's Aggregation Theory, the brain now has three complementary stances for the full lifecycle of building a unicorn: getting to PMF (PG + Lenny), measuring PMF (Lenny), and securing durability after PMF (Thompson).

## [2026-05-26] persona-training | Unicorn-Builder Phase 5 - Thompson pass 2

- Phase: 5 of 7 (Thompson ingest pass 2 of 2)
- Sources ingested: [[Thompson Bill Gates Line]] (2018, platform/aggregator distinction), [[Thompson End of the Beginning]] (2020, modern landscape)
- Pages created: [[Thompson Bill Gates Line]], [[Thompson End of the Beginning]]
- Pages updated: [[Ben Thompson]] (developing -> mature, 13 cited core frames), [[Operating Principles]] (4 more Strategic Durability principles: Bill Gates Line, value distribution vs concentration, build-on-platforms, cloud+mobile as substrate endpoint)
- Key insight: The Thompson trilogy + End of the Beginning gives the brain a complete modern strategy stack. The brain can now answer "is this market winner-take-all? at which level? should I be a platform or aggregator? should I build on top of which incumbent?". The 2020 essay names the moment we are in: post-aggregation, build vertical on top.

## [2026-05-26] persona-training | Unicorn-Builder Phase 4 - Thompson pass 1

- Phase: 4 of 7 (Thompson ingest pass 1 of 2)
- Sources ingested: [[Thompson Aggregation Theory]] (2015, foundational), [[Thompson Defining Aggregators]] (2017, taxonomy)
- Pages created: [[Thompson Aggregation Theory]], [[Thompson Defining Aggregators]]
- Pages updated: [[Ben Thompson]] (seed -> developing, 7 cited core frames), [[Operating Principles]] (new Strategic Durability section with 6 cited principles)
- Key insight: The 2015 essay defines the pattern; the 2017 essay provides the taxonomy. Together they answer "is this market winner-take-all, and if so, at which level?". The brain can now reason about competitive durability with named structural categories instead of hand-waving about moats.

## [2026-05-26] persona-training | Unicorn-Builder Phase 3 - Lenny pass 2

- Phase: 3 of 7 (Lenny ingest pass 2 of 2)
- Sources ingested: [[Lenny North Star Metric]] (2021), [[Lenny Chesky Founder Mode]] (2024 podcast)
- Pages created: [[Lenny North Star Metric]], [[Lenny Chesky Founder Mode]]
- Pages updated: [[Lenny Rachitsky]] (developing -> mature, 13 cited core frames), [[Operating Principles]] (4 more Product Discipline principles: NSM as strategy, revenue-as-NSM-is-wrong, JTBD framing, founder mode, functional org)
- Key insight: The NSM essay paired with the Chesky podcast surfaces the same underlying principle from two directions. NSM is "strategy compressed into a number"; founder mode is "strategy preserved through presence". Both reject the manager-mode delegation pattern that lets companies drift.

## [2026-05-26] persona-training | Unicorn-Builder Phase 2 - Lenny pass 1

- Phase: 2 of 7 (Lenny ingest pass 1 of 2)
- Sources ingested: [[Lenny PMF Guide]] (2020), [[Lenny Retention Benchmarks]] (2020, with Casey Winters)
- Pages created: [[Lenny PMF Guide]], [[Lenny Retention Benchmarks]]
- Pages updated: [[Lenny Rachitsky]] (seed -> developing, 7 cited core frames), [[Operating Principles]] (new Product Discipline section with 7 cited principles)
- Key insight: The PMF guide + retention benchmarks together provide both the qualitative diagnostic (signals) and the quantitative ground truth (benchmark tables by business model). This pair is the foundation for any "should we keep building?" decision.

## [2026-05-26] persona-training | Unicorn-Builder Phase 1 - Scaffold

- Phase: 1 of 7 (scaffold)
- Pages created: [[seed-corpus-unicorn-builders]] (12-source roadmap: Lenny + Thompson + Graham, 4 each), [[Lenny Rachitsky]] (seed), [[Ben Thompson]] (seed), [[Paul Graham]] (seed)
- Addresses allocated: c-000016 (seed corpus), c-000017 (Lenny), c-000018 (Thompson), c-000019 (Graham)
- Plan: /Users/simon/.claude/plans/secondbrain-velvet-crown.md (Plan 2 section)
- Key insight: Three poles framing now established in advance of the synthesis pass. Mentor bench will go from 8 to 11; archetype expansion to three poles.

## [2026-05-26] persona-training | Engineer-Planner Phase 7 - Lint and Close

- Phase: 7 of 7 (lint + session close)
- Pages updated: wiki/sources/_index.md (8 new sources organized into 3 new sections), wiki/entities/_index.md (mentor bench split into founder-operator + engineer-planner poles), wiki/concepts/_index.md (new Engineering Discipline section)
- Pages created: wiki/meta/2026-05-26-engineer-planner-training-session.md (closing summary, c-000015)
- Lint results: 14 new pages all have valid addresses (c-000002 through c-000015); 16 new pages have zero em-dashes; orphan check shows all new pages with 6+ inbound links; pre-existing em-dashes in 2 index files untouched per lint rule.
- Counter state: was 3 at session start (rebuilt to 2 since only c-000001 existed); now 16. flock unavailable on macOS; used Python fcntl shim at /tmp/alloc_addr.py as single-writer substitute.
- Session arc: 7 phases, 14 new vault pages, 8 sources ingested, 2 mentors matured, 2 synthesis concept pages, Persona expanded to 2-pole archetype with 1 new decision frame, Operating Principles grew by 17 cited principles across 2 sections. Plan file at /Users/simon/.claude/plans/secondbrain-velvet-crown.md fully executed.

## [2026-05-26] persona-training | Engineer-Planner Phase 6 - Synthesis

- Phase: 6 of 7 (synthesis, Persona update, hot.md)
- Pages created: [[Planning Before Code]] (synthesis bridging Carmack `.plan` + Lamport TLA+ + Bezos memos), [[Formal Specification Discipline]] (deeper pole focused on Lamport TLA+)
- Pages updated: [[Persona]] (archetype expanded to acknowledge engineer-planner pole, bench grew 6 to 8, 1 new decision frame "Plan/spec before code", growth plan rewritten), [[hot.md]] (full session context refresh, addresses tally, session stats)
- Key insight: The two new concept pages reveal that what looked like three separate traditions (Carmack prose, Lamport formal, Bezos organizational) are the same discipline at different rigor levels. The synthesis page makes this explicit; the brain can now reason about which level of rigor matches the cost of error.

## [2026-05-26] persona-training | Engineer-Planner Phase 5 - Lamport pass 2

- Phase: 5 of 7 (Lamport ingest pass 2 of 2)
- Sources ingested: [[Lamport Specifying Systems Ch1-3]] (book chapters), [[Lamport Paxos Made Simple]] (2001 rewrite paper)
- Pages created: [[Lamport Specifying Systems Ch1-3]], [[Lamport Paxos Made Simple]]
- Pages updated: [[Leslie Lamport]] (developing -> mature, 13 cited core frames), [[Operating Principles]] (2 more principles: clarity is engineering work, rewrite your own work when it fails)
- Key insight: "Paxos Made Simple" is a canonical artifact of rewrite-as-engineering-discipline. The algorithm did not change between 1998 and 2001; the writing did. Pairs with Carmack's "willingness to throw away your own code".

## [2026-05-26] persona-training | Engineer-Planner Phase 4 - Lamport pass 1

- Phase: 4 of 7 (Lamport ingest pass 1 of 2)
- Sources ingested: [[Lamport Thinking for Programmers]] (2014 Microsoft Build keynote), [[Lamport TLA+ Course Intro]] (his own video lectures)
- Pages created: [[Lamport Thinking for Programmers]], [[Lamport TLA+ Course Intro]]
- Pages updated: [[Leslie Lamport]] (seed -> developing, 8 cited core frames), [[Operating Principles]] (5 more principles added: spec is separate from coding, writing is the medium of thinking, model checker as feedback loop, small specs surface deep questions, not thinking guarantees mistakes)
- Key insight: Lamport's "writing is the medium of thinking" unifies with Carmack's .plan discipline and Bezos's written memos. Different mediums, same claim: planning is what writing makes real.

## [2026-05-26] persona-training | Engineer-Planner Phase 3 - Carmack pass 2

- Phase: 3 of 7 (Carmack ingest pass 2 of 2)
- Sources ingested: [[Carmack Lex Fridman 309]] (5h interview, themes verified), [[Carmack Plan Archive 1998]] (representative .plan entries from ESWAT GitHub archive)
- Pages created: [[Carmack Lex Fridman 309]], [[Carmack Plan Archive 1998]]
- Pages updated: [[John Carmack]] (developing -> mature, 12 cited core frames), [[Operating Principles]] (4 more principles added in Engineering Disposition: protected focus, write decisions down, read code, all cited)
- Key insight: The .plan archive shows engineer-planning as a sustained public practice 25 years before "build in public" was a term. Pairs naturally with Bezos written memos: same shape, different audience.

## [2026-05-26] persona-training | Engineer-Planner Phase 2 - Carmack pass 1

- Phase: 2 of 7 (Carmack ingest pass 1 of 2)
- Sources ingested: [[Carmack Inlined Code]] (2007 essay), [[Carmack QuakeCon 2013]] (keynote)
- Pages created: [[Carmack Inlined Code]], [[Carmack QuakeCon 2013]]
- Pages updated: [[John Carmack]] (seed -> developing, primary-source citations added), [[Operating Principles]] (6 new principles in Engineering Disposition section, all cited to Carmack sources)
- Key insight: Carmack's two complementary frames - state mutation visibility (Inlined Code) and optimization-as-architecture (QuakeCon 2013) - extend the brain's engineering disposition beyond the founder-CEO frames it already held.

## [2026-05-26] persona-training | Engineer-Planner Phase 1 - Scaffold

- Phase: 1 of 7 (scaffold)
- Pages created: [[seed-corpus-engineer-planners]] (8-source roadmap), [[John Carmack]] (seed), [[Leslie Lamport]] (seed)
- Addresses allocated: c-000002 (seed corpus), c-000003 (Carmack), c-000004 (Lamport)
- Plan: /Users/simon/.claude/plans/secondbrain-velvet-crown.md
- Key insight: Mentor template scales cleanly to 7+ entries; no Persona refactoring required to add the engineer-planner pole.

Parse recent entries: `grep "^## \[" wiki/log.md | head -10`

---

## [2026-05-24] lint | Phase 8, final lint pass and closing session summary
- Type: housekeeping, vault health check, closing
- Lint findings:
  - 56 em-dashes in `wiki/log.md`, `wiki/index.md`, `wiki/hot.md`, `wiki/sources/_index.md` introduced by patches before the Phase 2 cleanup script ran. Cleaned via smarter script preserving blockquotes.
  - 3 orphan source pages (Bezos 2017, Bezos 2020, Karpathy 33-years) missing from `wiki/sources/_index.md`. Added.
  - Pre-existing vault content (33 files, ~270 em-dashes) intentionally untouched. Those predate this session's no-em-dash style and may be in quoted/verbatim material per the lint rule.
- Closing summary written at `wiki/meta/2026-05-24-persona-training-session.md` documenting the full session arc, final numbers, methodological notes, and queued future work.
- Final state: 26 source pages, 25 raw extracts, 6 of 6 mentors mature, [[Operating Principles]] mature with every principle cited, zero em-dashes in any session-author prose.
- Total source ingest across the day: 25 sources spanning shareholder letters, engineering essays, podcast interviews, book summaries, and slide decks.

## [2026-05-24] ingest | Phase 7, Bezos late letters + Karpathy 33-years (3 sources)
- Type: persona-training ingest, Phase 7 (autonomous mode)
- Sources ingested:
  - [[Bezos 2017 Letter]]: the High Standards letter. Standards are teachable and domain-specific. Scope is part of the standard. Six-page memo defended in Bezos's own voice.
  - [[Bezos 2020 Letter]]: farewell letter. The differentness principle ("the world will always try to make Amazon typical"). Create more than you consume. Closing benediction.
  - [[Karpathy 33 Years Ago and 33 Years From Now]]: 2022 essay. Reproduces 1989 LeCun paper. Quantifies 10^7 to 10^8 scale change. Projects 33 years forward (foundation models replace from-scratch training).
- Two Bezos letters did NOT successfully fetch (1998 and 2002 returned 404 on aboutamazon URL guess). SEC filing fallback URLs available for future re-ingest.
- New principles cited and added (7): high standards are teachable, high standards are domain-specific, scope is part of the standard, distinctiveness is maintained against pressure, create more than you consume, macro stability under surface change, quantify the trend not the vibe.
- Bezos entity gained 2017 and 2020 citations. Karpathy entity gained 33-years citation.
- Style: zero em dashes in Phase 7 prose.
- Total sources after Phase 7: 25.

## [2026-05-24] ingest | Phase 6, Stripe Press canon (3 management/engineering books)
- Type: persona-training ingest, Phase 6 (autonomous mode)
- Goal: bring canonical books endorsed by the Stripe Press canon and the engineering frame into the brain
- Sources ingested (all aggregate book summaries; the books themselves are higher fidelity):
  - [[High Output Management]] (Andy Grove, 1983): managerial-leverage formula, training as highest-leverage activity, one-on-ones as subordinate's meeting, TRM, OKRs origin clarification (Grove, not Doerr/Google), Grove's Law about hybrid organizations
  - [[Designing Data-Intensive Applications]] (Kleppmann, 2017): three pillars (reliability, scalability, maintainability), fault vs failure distinction, latency percentiles framing, three sub-properties of maintainability (operability/simplicity/evolvability)
  - [[Innovators Dilemma]] (Christensen, 1997): sustaining vs disruptive innovation, why incumbents lose, four mechanisms (resource dependence / small markets / unknowable futures / capabilities as constraints), separate-the-disruption-from-the-core strategic response
- New principles added (10): managers are multipliers, training as highest-leverage activity, one-on-ones as subordinate's meeting, fault vs failure precision, latency percentiles not averages, customer obsession has limits (disruption nuance), listen to non-customers, separate disruption from the core, sustaining vs disruptive is binary not spectrum, OKRs originate with Grove
- [[Operating Principles]] now covers management + distributed systems + strategy with cited principles across all three dimensions.
- Fidelity caveat: all 3 sources are aggregate summaries across multiple online book summaries. Structural claims accurate; exact wording paraphrased. Future re-ingest of the books themselves (especially specific chapters with quotable passages) would deepen.
- Total sources after Phase 6: 22.
- Style: zero em dashes in Phase 6 prose.

## [2026-05-24] ingest | Phase 5, unblock paraphrased principles + graduate John Collison
- Type: persona-training ingest, Phase 5 (autonomous mode, no per-step confirmation)
- Goal: close the 3 paraphrased Operating Principles gaps + graduate John Collison from developing to mature
- Sources ingested:
  - [[Working Backwards Book]]: Bryar and Carr 2021 book summary (via Lanre Dahunsi). Unlocks PR/FAQ, two-pizza teams, single-threaded leadership, narrative-over-slides, Bar Raiser hiring, input vs output metrics, WBR.
  - [[Bezos Regret Minimization]]: the 1994 founding decision frame (via A Wealth of Common Sense). Canonical Bezos quotes about projecting to age 80.
  - [[Collison Money Stuff Podcast]]: John Collison as subject (not interviewer) on Bloomberg's Money Stuff, October 2024. First John-solo source. Quotes on payments complexity, organizational change, IPO discipline, prospectus-as-product, mechanism for employee liquidity.
- Entities upgraded: [[John Collison]] developing to mature (2 sources now: joint Stripe letter + solo Money Stuff). [[Jeff Bezos]] gained Regret Minimization + Working Backwards mechanism citations.
- [[Operating Principles]] page: 3 previously paraphrased principles now cited (working backwards, regret minimization, two-pizza teams). Plus "Write the memo before the meeting" cited via Working Backwards mechanism. Seven new principles added and cited: single-threaded leadership, input metrics over output metrics, Bar Raiser hiring discipline, get close to the work, distinguish object from category, the product is the prospectus, two-way doors applied to IPOs. Every principle on the page now has at least one primary-source citation.
- Mentor bench after Phase 5: 6 of 6 mature. Full bench citation-backed.
- Style: zero em dashes in Phase 5 prose (verified).
- Source fidelity: Working Backwards is a third-party book summary; treat structural claims as accurate, exact wording as paraphrased. Money Stuff is show-notes plus extracted quotes; Bloomberg page was 403, iHeart page provided show notes.

## [2026-05-24] ingest | Phase 4, 5 deeper sources with PDF full-text extraction
- Type: persona-training ingest, Phase 4. Method upgrade: pypdf (user-space pip install) extracted full text from 3 PDFs, breaking past the WebFetch summarization limit that constrained Phases 2 and 3.
- Sources ingested:
  - [[Bezos 2015 Letter]]: full-text PDF (35K chars from 9-page Amazon letter). Contains the ORIGIN of Type 1/Type 2 (one-way/two-way doors) decision framework, long-tailed-bets thesis, failure-as-twin-of-invention, customer-back-vs-competitor-back, culture as discovered.
  - [[Stripe Annual Letter 2024]]: full-text PDF (35K chars, 14 pages, design letter-spacing produced extraction artifacts that were cleaned in quotes). Co-authored by Patrick and John. Profitability-funds-R&D, customer-selection-as-strategy, 9-century customer list, S&P 500 tenure decay (61 to 36 to 20 years).
  - [[Dean Stanford Talk]]: full-text PDF (34K chars from 103-slide deck). Know-your-building-blocks principle, 6/7/8 scope heuristic, YAGNI for infrastructure, MapReduce as pattern-recognition story, 1000x scaling spine.
  - [[Karpathy Unreasonable Effectiveness of RNNs]]: WebFetch summary. Earliest article in Karpathy's published canon. "Optimization over programs" framing as seed of Software 2.0 thesis 2 years later. Build-to-learn discipline first stated.
  - [[Vogels Decade of Dynamo]]: WebFetch summary. Companion to [[Vogels 10 Lessons from 10 Years of AWS]]. Three-system distinction (internal Dynamo / paper / DynamoDB). Workload measurement (70% key-value) that justified the move away from relational.
- Method note: PDF extraction. WebFetch returned binary stubs for the 3 PDFs (Bezos 2015, Stripe 2024, Dean Stanford). Switched to curl + pypdf in user space (`python3 -m pip install --user pypdf`). 3 PDFs successfully extracted; quoted material is verbatim where source was readable.
- CITATION CORRECTION: two-way doors / one-way doors / Type 1 / Type 2 framework originates in [[Bezos 2015 Letter]], NOT [[Bezos 2016 Day 1 Letter]]. The 2016 letter restates it. [[Operating Principles]] and [[Jeff Bezos]] entity now cite 2015 as origin and 2016 as restatement.
- Entities upgraded: [[Jeff Dean]] developing to mature (Stanford talk added). [[John Collison]] stub to developing (Stripe Annual Letter co-authorship). [[Jeff Bezos]], [[Andrej Karpathy]], [[Werner Vogels]] gained new citations within their existing mature status.
- After Phase 4: 5 of 6 mentor bench entities are mature. [[John Collison]] is developing pending John-as-subject interview ingest.
- [[Operating Principles]] page graduated from "maturing" to "mature". Five new principles added (durable profitability funds R&D, customer selection as strategy, long-tailed returns, failure as twin of invention, know your building blocks, 6/7/8 scope heuristic, YAGNI for infrastructure, measure before redesign, surprise is a signal, argument by enumeration, make prior forecasts checkable, vocabulary as engineering, unified operating culture, culture as discovered). All cited.
- Style discipline: zero em dashes in Phase 4 prose (verified pre-commit). Source quotes preserve original author em dashes where present.
- Insight: full-text PDF extraction is meaningfully higher fidelity than WebFetch summarization. Worth using as default for high-priority sources going forward.

## [2026-05-24] ingest | Phase 3, Collison and Vogels canonical sources (5 sources)
- Type: persona-training ingest, Phase 3 (continues Phase 2 brain-training initiative)
- Sources ingested (P2.2, P2.3, P2.4, P2.5, P2.6 of seed-corpus-technical-ceo):
  - [[Collison Fast]]: 24 historical projects completed in surprisingly short timeframes (JavaScript 10 days, Git 17 days, Spirit of St. Louis 60 days, Pentagon 491 days, etc.)
  - [[Collison Questions]]: 23 open intellectual problems Patrick maintains as public list. Themes: progress and stagnation, institutional design, information infrastructure, cultural durability.
  - [[Collison Cowen Interview]]: Conversations with Tyler Episode 21 (2017, live at Stripe). Patrick interviews Tyler. Patrick's questions reveal his frames more than Tyler's answers reveal Tyler's.
  - [[Vogels 10 Lessons from 10 Years of AWS]]: March 2016 anniversary post. 10 engineering principles including "everything fails", "APIs are forever", "primitives not frameworks", "build evolvable systems".
  - [[Vogels Eventually Consistent]]: December 2008 essay (plus ACM Queue / CACM expansion). The consistency-model taxonomy and CAP framing that defined a generation of distributed-systems literacy.
- Raw layer: 5 new .raw/source-*.md files
- Wiki source pages: 5 new pages in wiki/sources/
- Entities upgraded to mature: [[Patrick Collison]] (3 citations), [[Werner Vogels]] (2 citations)
- Entities still developing: [[John Collison]] (still stub; harder to find primary writing for him), [[Jeff Dean]] (Stanford talk still queued)
- [[Operating Principles]] page promoted from developing to maturing. 16 of 19 principles now cited. Three still paraphrased (working backwards, regret minimization, two-pizza teams), all blocked on *Working Backwards* book ingest.
- Four new principles introduced (all Vogels-cited): "Build evolvable systems", "Primitives not frameworks", "Automation as a litmus test", "High-agency curiosity" (Collison-cited).
- Style discipline: zero em dashes introduced in new prose (previous Phase 2 audit found 182, fixed in auto-commit 93655dd plus lint rule 086451b). Verified before commit.
- Key insight from synthesis: Vogels's 10 Lessons post is the harvest report for Bezos's 2002 API mandate. The same principle (APIs are forever) appears in both, 14 years apart, viewed from opposite ends of the consequence chain. This is exactly the kind of cross-source convergence that justifies citation density over breadth.
- Fetch method: WebFetch summarization (not full-text). Marked clearly in each .raw/ file.
- Next batch: P2.1 (*Working Backwards* by Bryar and Carr), additional Vogels archive posts, Jeff Dean Stanford talk.

## [2026-05-24] ingest | Phase 2, Technical CEO seed corpus, batch 1 (6 sources)
- Type: persona-training ingest (Phase 2 of brain-training initiative; Phase 1 was scaffold)
- Sources ingested (P1.1 partial, P1.2 done, P1.3 partial, P1.4 partial of seed-corpus-technical-ceo manifest):
  - [[Bezos 1997 Letter]], founding compact, nine decision criteria verbatim
  - [[Bezos 2016 Day 1 Letter]], Day 1, customer obsession, resist proxies, high-velocity decision-making (two-way doors, 70% info, disagree-and-commit)
  - [[Bezos 2002 API Mandate]], five-point service-interface directive (Yegge's 2011 leaked account)
  - [[Karpathy Software 2.0]], paradigm-shift framing, 8 benefits, infrastructure gaps
  - [[Karpathy Recipe for Training Neural Networks]], leaky abstraction, silent failure, six-step recipe, patience-and-attention
  - [[Dean Latency Numbers]], full ~2012 latency table, 9 orders of magnitude
- Raw layer (immutable extracts): `.raw/source-bezos-1997-letter.md`, `.raw/source-bezos-2016-day1-letter.md`, `.raw/source-bezos-2002-api-mandate.md`, `.raw/source-karpathy-software-2.md`, `.raw/source-karpathy-recipe-training.md`, `.raw/source-dean-latency-numbers.md`
- Wiki source pages (synthesis layer): 6 new pages in `wiki/sources/`, see Sources Index
- Entities upgraded paraphrase→quoted: [[Jeff Bezos]] (mature), [[Andrej Karpathy]] (mature), [[Jeff Dean]] (developing, partial; needs Stanford talk)
- Entities still stubs: [[Patrick Collison]], [[John Collison]], [[Werner Vogels]] (P2.x sources not yet ingested)
- [[Operating Principles]] page: 11 of ~18 principles now have primary-source citations. Page promoted developing→maturing.
- Fetch method: WebFetch summarization (not full-text). Marked clearly in each .raw/ file. Future improvement: re-ingest full-text where copyright allows.
- Key insight from synthesis: Bezos's 1997 letter is the cleanest single source for long-horizon discipline because it's framed as a *compact* (specific behavioral commitments with named tradeoffs) rather than as values. Worth re-reading annually.
- Tokens consumed: ~6 WebFetch calls (summaries returned ~500-1500 tokens each); wiki output ~30k tokens of synthesis
- Next batch (P2.x, Collison interviews, Vogels All Things Distributed, Working Backwards): queued

## [2026-05-24] save | Phase 1, Persona scaffold (Technical CEO archetype)
- Type: persona scaffold (instruction set for the brain)
- Locations (new): `wiki/Persona.md` (operating identity), `wiki/concepts/Operating Principles.md` (developing), `wiki/entities/{Jeff Bezos, Patrick Collison, John Collison, Jeff Dean, Werner Vogels}.md` (5 stubs), `wiki/meta/seed-corpus-technical-ceo.md` (14-source roadmap)
- Locations (modified): `wiki/hot.md` (Operating Identity header added at top so SessionStart loads it), `wiki/index.md` (Operating Identity section), `wiki/entities/_index.md` (mentor bench section), `wiki/concepts/_index.md` (Decision-Making section)
- Scope: user directive "เทรน second brain ของฉันโตเป็น ceo และ senior engineer". One AskUserQuestion narrowed archetype to "Technical CEO" (Bezos + Collison + Karpathy + Dean + Vogels) versus 3 alternative archetypes.
- Honesty discipline: mentor pages created as honest "developing" stubs with public-knowledge facts only; no invented quotes. Citations to arrive in Phase 2 ingest.
- Key insight: a persona definition (`wiki/Persona.md`) is the highest-leverage artifact for shaping all future ingest, query, autoresearch, and fold behavior. Before this scaffold, the wiki was a meta-vault about the plugin itself. After: it has an operating identity that biases every downstream skill.
- Vault counter unchanged (c-000003); address allocation deferred to next lint pass.

## [2026-04-24] save | v1.6.0 public release notes (Teams, Karpathy-style)
- Type: release doc + visual assets
- Locations (new): `docs/releases/v1.6.0.md` (346 lines, 6 sections, Karpathy-style prose), `wiki/meta/dragonscale-mechanism-overview.svg` (4-mechanism diagram with shared .vault-meta/ gate), `wiki/meta/dragonscale-6-test-flow.svg` (validation timeline), `wiki/meta/dragonscale-frontier-graph.svg` (M4 candidate + 3 filed pages)
- Locations (modified): `wiki/meta/2026-04-24-v1.6.0-release-session.md` (cross-reference added pointing to public release notes)
- Scope: Teams approach. R1 (chair) wrote 3 original SVGs per SVG Diagram Style Guide. R2 (codex worker) drafted Karpathy-style release prose. R3 (chair) stitched SVGs, pivoted Wikipedia imagery to text links only (no binary vendoring per permission). R4 (codex verifier) returned ACCEPT WITH FIXES, 3 wording fixes on version narrative. R5 (chair) applied fixes, committed.
- Style: direct, short, signal-dense, lists over prose, no em dashes, no marketing terms. Verifier confirmed zero em-dashes and zero banned marketing language ('revolutionary', 'seamless', 'world-class', 'game-changing', 'unlock', 'transform').
- Distribution (all three destinations covered): (1) `docs/releases/v1.6.0.md` public-facing file (commit `85515bb`), (2) `wiki/meta/2026-04-24-v1.6.0-release-session.md` internal engineering record (cross-linked), (3) GitHub Release body (user to paste from docs/releases/v1.6.0.md when ready to `gh release create v1.6.0`).
- Wikipedia imagery: referenced as text link to `https://en.wikipedia.org/wiki/Dragon_curve` rather than hotlinked or vendored. Cleaner license-wise (no CC-BY-SA attribution needed) and no external dependency. The 3 original SVGs carry the visual load instead.
- PII scan post-write: `docs/releases/v1.6.0.md` + all three SVGs are clean. No `/home/` paths, no real emails, no tokens.
- Next recommended: user runs `gh release create v1.6.0 --notes-file docs/releases/v1.6.0.md` when ready to cut the public release. This also creates the annotated tag.

## [2026-04-24] save | DragonScale end-to-end validation pass (Teams, 6 tests)
- Type: validation + first real fold + first real autoresearch
- Tests executed (all green):
  - T0 ollama pull `nomic-embed-text`: done (274MB, 15s wall)
  - T1 M1 dry-run k=3 via codex: DRY-RUN OK, 8 children, no em-dashes
  - T2 M2 real allocate: counter advanced 2 to 3, got `c-000002` (unassigned reservation; gap acceptable per spec)
  - T3 M3 full tiling with model present: 41 pages scanned, 21 embedded, 20 correctly skipped (meta/excluded/embed-error), 0 errors at >=0.9, 15 pairs in 0.8-0.9 review band (top 0.8822 Compounding Knowledge vs LLM Wiki Pattern, a legitimate semantic neighbor), report at `wiki/meta/tiling-report-2026-04-24.md`
  - T4 M1 commit via codex: first real fold committed, `wiki/folds/fold-k3-from-2026-04-23-to-2026-04-24-n8.md` (115 lines, 8 children, flat extractive). Flips the long-standing "no fold committed yet" status
  - T6 M4 autoresearch no-topic via codex: selected "How does the LLM Wiki pattern work?" as candidate (score 1.7022, #3 after skipping top-1 source + top-2 self-reference); 6 web fetches (Karpathy gist, RAG paper arXiv 2005.11401, MemGPT arXiv 2310.08560, Obsidian docs); 3 new concept pages filed, each with Primary Sources
- Locations (new): `wiki/folds/fold-k3-from-2026-04-23-to-2026-04-24-n8.md`, `wiki/meta/tiling-report-2026-04-24.md`, `wiki/concepts/Persistent Wiki Artifact.md`, `wiki/concepts/Source-First Synthesis.md`, `wiki/concepts/Query-Time Retrieval.md`
- Locations (modified): `.vault-meta/address-counter.txt` (2 to 3), `wiki/index.md` (3 concept links), `wiki/concepts/_index.md` (3 concept links)
- Scope: six-test menu the user approved. Codex gpt-5.4 for T1/T4/T6 (sub-agent delegation); chair for T0/T2/T3 (one-shot shell) and all integration (index, log, hot, commit).
- Style: all new content uses colons or parens instead of em-dashes. Pre-existing em-dashes in index entries and wiki/concepts/_index.md left as-is (clean-room boundary; deferred to F-slice style pass).
- Tests still green: `make test` passes (74+ assertions).
- Integration: chair added the 3 new concepts to `wiki/index.md` and `wiki/concepts/_index.md` with colon-style descriptions so the fresh pages are discoverable. The cluster extends `[[How does the LLM Wiki pattern work?]]` and cross-references `[[LLM Wiki Pattern]]`.
- Next recommended slice: either (G) commit this test batch and declare v1.6.0 validated, or (H) run a second fold k=3 now that 8 newer entries exist above this one and close the hierarchical-fold-not-yet-supported loop in a future phase.

## [2026-04-24] save | v1.6.0 closeout (Teams, chair-led)
- Type: docs + release hygiene
- Locations (new): wiki/meta/2026-04-24-v1.6.0-release-session.md (release session summary, 346 lines), wiki/meta/boundary-frontier-2026-04-24.md (first M4 run artifact against this vault), docs/dragonscale-guide.md (user-facing DragonScale guide, 563 lines)
- Locations (modified): wiki/hot.md (tag-claim fix, Scripts line adds boundary-score, tests line adds test_boundary_score, push-line drift, tiling line-count, one em-dash), docs/install-guide.md (version 1.5.0 to 1.6.0, DragonScale callout expanded to all four mechanisms, "hierarchical log folds" corrected to "flat extractive log folds", points to docs/dragonscale-guide.md), README.md (DragonScale parenthetical expanded to all four mechanisms plus guide link)
- Scope: Teams approach, chair-led. Slice A (2 codex read-only explorers: closeout punch list + doc-surface map). Slice B (6 bounded writes: 4 chair, 2 codex workers, non-overlapping write scopes). Slice C (codex adversarial verifier, ACCEPT WITH FIXES). Slice D (fix pass + log entry + manual commit of docs + README).
- Verifier: C1 found 11 items across 6 files. All 11 applied. Flag typos `--allow-remote-ollama` and `--report PATH` corrected in release-session; boundary-frontier provenance corrected to `--top 7` to match default vs explicit top; hot.md tiling line-count claim stripped to avoid drift; hot.md "local tag only" corrected to "local commits only, no git tag"; install-guide log-fold wording corrected from "hierarchical" to "flat extractive"; dragonscale-guide rollback wording corrected (`.vault-meta/` is a shared gate across M2+M3+M4, not per-mechanism).
- Model: codex gpt-5.4 used throughout. User requested gpt-5.5; not reachable via codex CLI 0.123.0 / this account at the time. models_cache lists max gpt-5.4, and the API rejects gpt-5.5 with "does not exist or you do not have access". Existing config already has `service_tier = "fast"` and `sandbox_mode = "workspace-write"`, matching the "fast for chatgpt with permission of full access" intent.
- Tests: `make test` passes. test_allocate_address.sh (shell, 12 assertions), test_tiling_check.py (python, 18 assertions), test_boundary_score.py (python, 44 assertions). Zero ollama dependency.
- Tags: still no local v1.5.0 / v1.5.1 / v1.6.0 tags. User controls tag creation and push. Pre-existing tags unchanged (v1.1, v1.4.0 through v1.4.3).
- Deliberately NOT done: no real M1 fold committed; no M3 end-to-end run (needs `ollama pull nomic-embed-text`); pre-existing em-dashes in install-guide.md and README.md left untouched (clean-room boundary, not in write scope this slice); CLAUDE.md pre-existing uncommitted change left untouched.
- Next recommended slice: either (E) push to origin/main and create annotated tags v1.5.0, v1.5.1, v1.6.0 in landing order, or (F) dedicated style pass to scrub pre-existing em-dashes across install-guide.md, README.md, and any other wiki files flagged by a grep scan.

## [2026-04-24] save | DragonScale Phase 4, boundary-first autoresearch shipped (v1.6.0)
- Type: feature release
- Locations (new): scripts/boundary-score.py (with --top, --page, --json, stdout-only CLI), tests/test_boundary_score.py (40+ assertions)
- Locations (modified): skills/autoresearch/SKILL.md (new Topic Selection section A/B/C with helper-failure fallback), commands/autoresearch.md (no-topic candidate flow with agenda-control label), wiki/concepts/DragonScale Memory.md (v0.4: M4 flipped from NOT IMPLEMENTED to shipped; exact formula without recency floor; filename-stem disclosure; fence-handling qualifiers), CHANGELOG.md, .claude-plugin/{plugin,marketplace}.json (1.5.0 -> 1.6.0), Makefile (test-boundary target), wiki/hot.md, wiki/index.md, wiki/concepts/_index.md (status drift resolved).
- Scope: boundary-first autoresearch as opt-in Topic Selection mode. `/autoresearch` without a topic surfaces top-5 frontier pages; user picks/overrides/declines. Explicit helper-failure fallback to user-ask. Labeled "agenda control" throughout to match the spec's scope disclosure.
- Correctness: filename-stem resolution including folder-qualified `[[notes/Foo]]` -> Foo.md. Self-loops, unresolved targets, meta-targets, symlinks, and vault escapes all excluded. Code-fence parser handles backticks AND tildes with CommonMark length tracking (longer opening fence is not closed by shorter inner fence). Indented blocks intentionally not filtered (Obsidian bullet convention).
- Recency: exp(-days/30), no floor. Stale pages approach zero weight so they do not dominate frontier ranking.
- Review rounds: codex adversarial Phase 4 round 1 (10 items: 7 reject + 3 refine). Round 2 (7 accept + 3 still-reject: folder-qualified stem, docstring floor mention, hot.md historical drift). Round 3 (3 accept, PASS).
- Phase 3.6 (pre-Phase-4 hardening) already landed as v1.5.1: tiling --report VAULT_ROOT confinement, rollout baseline, AGENTS.md consistency, wiki-ingest .raw/ contradiction, install-guide version.
- All four DragonScale mechanisms now shipped and opt-in. 44 commits ahead of origin/main, no push.

## [2026-04-24] save | DragonScale Phase 3.5, cross-phase hardening to v1.5.0
- Type: release hardening
- Locations (new): bin/setup-dragonscale.sh (opt-in installer), tests/test_allocate_address.sh, tests/test_tiling_check.py, Makefile, CHANGELOG.md
- Locations (modified): hooks/hooks.json (+.vault-meta/ staging), agents/wiki-ingest.md (single-writer rule for addresses), agents/wiki-lint.md (Mechanism 2+3 checks), skills/wiki-ingest/SKILL.md (aligned non-DragonScale wording), wiki/concepts/DragonScale Memory.md (M2 severity matches lint, M4 marked NOT IMPLEMENTED, seed page gets address c-000001), .claude-plugin/{plugin.json,marketplace.json} (1.4.2/1.4.3 → 1.5.0), README.md (11 skills + DragonScale callout), wiki/hot.md (refreshed for v1.5.0), .raw/.manifest.json (address_map now has DragonScale Memory.md → c-000001), .gitignore (.vault-meta/.tiling.lock + cache), .vault-meta/address-counter.txt (advanced to 2).
- Scope: resolve the 10 hold-ship items from the cross-phase audit. Add reproducible test harness (make test passes). Version-bump plugin.json and marketplace.json to 1.5.0. Create CHANGELOG.md. Refresh hot cache.
- Review rounds: codex 3.5a (5/5 accept on doc/agent fixes), codex final holistic (10/10 accept on audit items + 2 surgical regression fixes: wiki-ingest/wiki-lint non-DragonScale wording alignment, README skill count).
- Tests: `make test` runs 12 shell assertions (allocator) + 18 python assertions (tiling-check). All pass; no ollama dependency.
- Phase 3.5 complete. Repo state: 6 developer commits added this pass (f2e73c1, 2b49a0c, 8b28e48, 19ad7e4, 365f557, 2e7dd16). Total 39 commits ahead of origin/main. No push.

## [2026-04-24] save | DragonScale Phase 3, semantic tiling MVP
- Type: skill update + new script + threshold state
- Locations: scripts/tiling-check.py (485 lines), .vault-meta/tiling-thresholds.json (seed defaults), skills/wiki-lint/SKILL.md (109-line Semantic Tiling section + item #10 in checks), wiki/concepts/DragonScale Memory.md (Mechanism 3 cost framing clarified)
- Scope: opt-in embedding-based duplicate detection via ollama nomic-embed-text. Default bands error>=0.90, review>=0.80, explicitly documented as conservative seeds (not literature-backed interpolation). Calibration procedure documented, not automated.
- Security: default OLLAMA_URL locked to 127.0.0.1; non-localhost requires --allow-remote-ollama flag. Symlinks and vault-root escapes rejected before file reads (prevents data exfil).
- Correctness: cache keyed on sha256(model+body); orphan GC on save; model-drift auto-invalidation on load.
- Concurrency: flock(LOCK_EX) on .vault-meta/.tiling.lock; per-PID temp file for atomic writes.
- Scale: warn >500 pages; hard-fail exit 4 at >5000 pages.
- Exit codes: 0/2/3/4/10/11 distinctly surfaced in wiki-lint wiring (not collapsed into "unknown").
- Review rounds: 4 codex exec adversarial passes covering security, cache correctness, feature gate, inclusion logic, scale, threshold honesty, concurrency, exit codes, model drift, terminology coupling.
  Round 1: 10 items -> 7 reject + 3 refine.
  Round 2: 6 accept + 4 still-reject (symlink ordering, prose sync, exit-code wiring, terminology in checklist + "no API cost" claim).
  Round 3: 3 accept + 1 still-reject (cost-framing phrasing).
  Round 4: accept.
- Final verdict: 10/10 accept.
- Phase 3 complete. All three DragonScale mechanisms that were in-scope for the initial spec are now shipped as opt-in features. Mechanism 4 (boundary-first autoresearch) was flagged as agenda-control out-of-scope per the v0.2 scope boundary; may or may not ship as a future phase.

## [2026-04-23] save | DragonScale Phase 2, deterministic page addresses MVP
- Type: skill update + new script
- Locations: scripts/allocate-address.sh, skills/wiki-ingest/SKILL.md (Address Assignment section), skills/wiki-lint/SKILL.md (Address Validation section), wiki/concepts/DragonScale Memory.md (Mechanism 2 rewritten v0.2→v0.3), .vault-meta/address-counter.txt, .raw/.manifest.json (new)
- Scope: MVP address format `c-NNNNNN` (creation-order counter, zero-padded 6 digits). Rollout baseline 2026-04-23. Legacy pages exempt until deliberate backfill (future `l-` prefix). No content hash, no fold-ancestry encoding in the MVP (both deferred).
- Concurrency: atomic allocation via flock-guarded Bash helper. Counter recovery from max observed `c-` address, never silent reset to 1.
- Lint: post-rollout pages without address are errors; legacy pages without address are informational. Optional `.vault-meta/legacy-pages.txt` manifest grandfathers pages with missing/wrong `created:` metadata.
- Re-ingest idempotency: `.raw/.manifest.json` `address_map` preserves path→address mapping across re-ingests and renames.
- Naming: mechanism renamed from "content-addressable paths" to "deterministic page addresses" (the MVP is a counter, not a content hash; the old name was overclaim).
- Review rounds: 2 codex exec adversarial passes. Round 1: 8 rejects covering counter mutation, race conditions, uniqueness atomicity, missing-file recovery, terminology drift, silent regression path, legacy classification, re-ingest idempotency. Round 2: 7 accept + 1 reject (manifest.json absent). Round 3 (item 8 only): accept after creating `.raw/.manifest.json`.
- Final verdict: 8/8 accept.
- Phase 2 complete. Phase 3 (semantic tiling lint) gated on human approval.

## [2026-04-23] save | DragonScale Phase 1, wiki-fold skill shipped
- Type: skill
- Location: skills/wiki-fold/SKILL.md, skills/wiki-fold/references/fold-template.md
- Scope: flat extractive fold over raw wiki/log.md entries. Dry-run default via Bash stdout (no Write tool, avoids PostToolUse hook residue). Structural idempotency via deterministic fold_id. Duplicate-range detection. Fold-of-folds explicitly out of scope.
- Review rounds: 3 codex exec adversarial passes. Round 1: 1 refine + 6 reject across 7 items (allowed-tools, hook-mutation risk, idempotency claim, dry-run faithfulness, children structure, Mechanism 1 coverage, auto-commit conflict). Round 2: 6 accept + 1 reject (25/26 count inversion). Round 3 (item 4 only): accept.
- Final verdict: 7/7 accept.
- Dry-run artifact: /tmp/wiki-fold-dry-run-v2.md (not committed). fold_id: fold-k3-from-2026-04-10-to-2026-04-23-n8.
- Phase 1 complete. Phase 2 (content-addressable paths) gated on human approval.

## [2026-04-23] save | DragonScale Memory v0.2, post-adversarial-review
- Type: concept revision
- Location: wiki/concepts/DragonScale Memory.md
- Review: codex exec adversarial review rejected all 7 load-bearing claims in v0.1
- Changes: weakened LSM analogy, removed strong prompt-cache claim, replaced 0.85 threshold with calibration procedure, justified 2^k as MVP convenience, acknowledged scope-boundary leak for boundary-first autoresearch, added Operational Policies section (retention/tombstones/versioning/conflict/concurrency/provenance/ACL), tagged claims as [sourced]/[derived]/[conjecture], narrowed tagging scope per re-review
- Re-review result: 7/7 accepted (after one surgical fix on tagging-scope language)
- Phase 0 complete. Phase 1 (wiki-fold skill) gated on human approval.

## [2026-04-23] save | DragonScale Memory, Phase 0 design doc (proposed)
- Type: concept
- Location: wiki/concepts/DragonScale Memory.md
- From: brainstorming session on applying Heighway dragon curve properties to LLM wiki memory architecture
- Scope: memory-layer only, NOT agent reasoning. Four mechanisms: (1) fold operator (LSM-style exponential compaction at 2^k log entries), (2) content-addressable page paths for prompt-cache stability, (3) semantic tiling lint (embedding-based dedup, 0.85 cosine threshold), (4) boundary-first autoresearch scoring
- Status: proposed. Phase 0 pending codex adversarial review. Phase 1+ (fold skill, address anchors, tiling lint, boundary score) gated on review pass.
- Primary sources verified: Dragon curve (Wikipedia, boundary dim 1.523627086), Regular paperfolding sequence (OEIS A014577), LSM trees (arXiv 2504.17178, LevelDB 10x level ratio), MemGPT (arXiv 2310.08560), Anthropic prompt caching docs (5min/1hr TTL, 20-block lookback)
- Links updated: wiki/concepts/_index.md, wiki/index.md

## [2026-04-15] save | Claude SEO v1.9.0 Slides and GitHub Release
- Type: session
- Location: wiki/meta/2026-04-15-slides-and-release-session.md
- From: built 15-slide HTML presentation deck (v190.html), fixed hardcoded path in release_report.py, pushed 68 files to GitHub, tagged v1.9.0, created GitHub release with PDF asset
- Key lessons: Path.home() not hardcoded paths, git pull --rebase before big pushes, Chrome blocks file:// cross-origin images, .claude/ always in .gitignore
- Release: https://github.com/AgriciDaniel/claude-seo/releases/tag/v1.9.0

## [2026-04-15] save | Claude SEO v1.9.0 Release Report, PDF Complete
- Type: session
- Location: wiki/meta/2026-04-15-release-report-session.md
- From: full session completing the v1.9.0 PDF release report. Dark theme, 13 pages, 1.53 MB. Fixed logo (double-space filename), empty spaces, page-break orphans, file:// URL encoding.
- Key fixes: `urllib.parse.quote()` for file:// URIs; `display:table-cell` is atomic in WeasyPrint (no page-break); fixed `height:297mm` causes empty space; replaced orphan tables with paragraphs
- Challenge v2 added: keyword LEADS, $600 prize pool, deadline April 28
- Output: `~/Desktop/Claude-SEO-v1.9.0-Release-Report.pdf`

## [2026-04-14] save | Claude SEO v1.9.0, Pro Hub Challenge Integration Session
- Type: session + 4 concept pages + 1 entity page
- Location: wiki/meta/2026-04-14-claude-seo-v190-session.md
- From: full v1.9.0 implementation session, reviewed 5 community submissions, integrated 4 new skills (seo-cluster, seo-sxo, seo-drift, seo-ecommerce), enhanced seo-hreflang, added DataForSEO cost guardrails
- Pages created: [[2026-04-14-claude-seo-v190-session]], [[Claude SEO]], [[Pro Hub Challenge]], [[Semantic Topic Clustering]], [[Search Experience Optimization]], [[SEO Drift Monitoring]]
- Review rounds: 4 (code review x3 + cybersecurity audit). Score: 87 → 93 → 97 → 85 security
- Key learnings: always verify subagent output (40-line count error caught), insertion-point bugs caught by max-effort plan review, pre-existing security debt identified (10 of 15 findings)

## [2026-04-14] save | SVG Diagram Style Guide
- Type: concept
- Location: wiki/concepts/SVG Diagram Style Guide.md
- From: extracted design tokens from 17 production SVGs in claude-ads/assets/diagrams/
- Covers: colors, typography, layout primitives, card patterns, arrow connectors, numbered circles, file naming

## [2026-04-14] save | Community CTA Footer Rollout
- Type: decision
- Location: wiki/meta/2026-04-14-community-cta-rollout.md
- From: session adding Skool community footer to 6 skill repos (claude-ads, claude-seo, claude-obsidian, claude-blog, banana-claude, claude-cybersecurity)
- Key insight: frequency calibration per tool type; single-point orchestrator instruction pattern

## [2026-04-10] save | Backlink Empire - Blog Posts, Karpathy Gist, GitHub Cross-Linking
- Type: session
- Location: wiki/meta/2026-04-10-backlink-empire-session.md
- From: full session covering blog creation (claude-obsidian + claude-canvas), Karpathy gist comment, 26 GitHub README updates with Author/community/backlink sections, homepage URLs on 10 repos, topics on 25 repos, rankenstein.pro backlinks on 5 SEO repos
- Blog posts: agricidaniel.com/blog/claude-obsidian-ai-second-brain, agricidaniel.com/blog/claude-canvas-ai-visual-production
- Impact: ~87 new backlinks from DA 96 github.com, 6 rankenstein.pro backlinks, 25 Skool community links

## [2026-04-08] save | claude-obsidian v1.4 Release Session
- Type: session
- Location: wiki/meta/claude-obsidian-v1.4-release-session.md
- From: full release cycle covering v1.1 (URL/vision/delta tracking, 3 new skills), v1.4.0 (audit response, multi-agent compat, Bases dashboard, em dash scrub, security history rewrite), and v1.4.1 (plugin install command hotfix)
- Key lessons: plugin install is 2-step (marketplace add then install), allowed-tools is not valid frontmatter, Bases uses filters/views/formulas not Dataview syntax, hook context does not survive compaction, git filter-repo needs 2 passes for full scrub

## [2026-04-08] ingest | Claude + Obsidian Ecosystem Research
- Type: research ingest
- Source: `.raw/claude-obsidian-ecosystem-research.md`
- Queries: 6 parallel web searches + 12 repo deep-reads
- Pages created: [[claude-obsidian-ecosystem]], [[cherry-picks]], [[claude-obsidian-ecosystem-research]], [[Ar9av-obsidian-wiki]], [[Nexus-claudesidian-mcp]], [[ballred-obsidian-claude-pkm]], [[rvk7895-llm-knowledge-bases]], [[kepano-obsidian-skills]], [[Claudian-YishenTu]]
- Key finding: 16+ active Claude+Obsidian projects; 13 cherry-pick features identified for v1.3.0+
- Top gap confirmed: no delta tracking, no URL ingestion, no auto-commit

## [2026-04-07] session | Full Audit, System Setup & Plugin Installation
- Type: session
- Location: wiki/meta/full-audit-and-system-setup-session.md
- From: 12-area repo audit, 3 fixes, plugin installed to local system, folder renamed

## [2026-04-07] session | claude-obsidian v1.2.0 Release Session
- Type: session
- Location: wiki/meta/claude-obsidian-v1.2.0-release-session.md
- From: full build session, v1.2.0 plan execution, cosmic-brain→claude-obsidian rename, legal/security audit, branded GIFs, PDF install guide, dual GitHub repos


- Source: `.raw/` (first ingest)
- Pages updated: [[index]], [[log]], [[hot]], [[overview]]
- Key insight: The wiki pattern turns ephemeral AI chat into compounding knowledge, one user dropped token usage by 95%.

## [2026-04-07] setup | Vault initialized

- Plugin: claude-obsidian v1.1.0
- Structure: seed files + first ingest complete
- Skills: wiki, wiki-ingest, wiki-query, wiki-lint, save, autoresearch
