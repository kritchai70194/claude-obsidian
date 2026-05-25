---
type: meta
title: "Hot Cache"
updated: 2026-05-26
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

**Archetype: Technical CEO, with engineer-planner pole.** This brain reads, decides, and synthesizes from two complementary stances:

- **Founder-operator pole** (6 mentors, all mature): [[Jeff Bezos]], [[Patrick Collison]], [[John Collison]], [[Andrej Karpathy]], [[Jeff Dean]], [[Werner Vogels]]
- **Engineer-planner pole** (2 mentors, both mature): [[John Carmack]], [[Leslie Lamport]]

See [[Persona]] for full operating identity. [[Operating Principles]] holds 50+ cited decision principles across 6 sections. Source roadmaps: [[seed-corpus-technical-ceo]] (founder-operator) and [[seed-corpus-engineer-planners]] (engineer-planner).

When the question is "how do we build this strategically", the founder-operator pole leads. When the question is "how do we plan the engineering work", the engineer-planner pole leads.

Default synthesis: long-horizon over local maxima, customer obsession, written-memo discipline, first principles, regret minimization for irreversible decisions, two-way doors for the rest, and **plan/spec before code** (new decision frame this session).

## Last Updated

2026-05-26 (Engineer-Planner session, Phase 6 of 7): Engineer-planner pole synthesized into [[Persona]] (added 2 mentors, 1 decision frame) and 2 new concept pages ([[Planning Before Code]], [[Formal Specification Discipline]]). Phase 7 lint pending.

2026-05-26 (Engineer-Planner session, Phases 4-5): [[Leslie Lamport]] matured. 4 sources ingested: [[Lamport Thinking for Programmers]] (writing-is-thinking thesis), [[Lamport TLA+ Course Intro]] (mechanical checking as feedback loop), [[Lamport Specifying Systems Ch1-3]] (the chapters where the methodology lives, before the syntax), [[Lamport Paxos Made Simple]] (rewrite-as-engineering-discipline). 7 principles added to [[Operating Principles]]: specification-is-separate, writing-is-medium-of-thinking, model-checker-as-feedback-loop, small-specs-surface-deep-questions, not-thinking-guarantees-mistakes, clarity-is-engineering-work, rewrite-when-it-fails.

2026-05-26 (Engineer-Planner session, Phases 2-3): [[John Carmack]] matured. 4 sources ingested: [[Carmack Inlined Code]] (state-mutation-visibility thesis), [[Carmack QuakeCon 2013]] (optimization-as-architecture, static-analysis-as-infrastructure), [[Carmack Lex Fridman 309]] (protected-focus-as-substrate), [[Carmack Plan Archive 1998]] (engineering-decisions-written-publicly). 10 principles added to [[Operating Principles]] in Engineering Disposition section.

2026-05-26 (Engineer-Planner session, Phase 1): Scaffolded engineer-planner pole. Created [[seed-corpus-engineer-planners]] (8-source roadmap, Carmack + Lamport, 4 sources each). Stub mentor pages for Carmack and Lamport. DragonScale addresses c-000002 through c-000004 allocated. Plan file at `/Users/simon/.claude/plans/secondbrain-velvet-crown.md` (approved).

2026-05-24 (Phase 8, prior session): Founder-operator persona training closed. 25 sources, 6 of 6 mentors mature, Operating Principles fully cited and mature. See `wiki/meta/2026-05-24-persona-training-session.md`.

## Plugin State

- **Version**: 1.6.0 (no changes this session, vault-content work only)
- **Skills**: 11 (wiki, wiki-ingest, wiki-query, wiki-lint, wiki-fold, save, autoresearch, canvas, defuddle, obsidian-bases, obsidian-markdown)
- **Scripts**: `scripts/allocate-address.sh`, `scripts/tiling-check.py`, `scripts/boundary-score.py`
- **flock note**: macOS lacks `/usr/bin/flock`. This session used `/tmp/alloc_addr.py` (Python fcntl shim) as single-writer substitute. Counter file at `.vault-meta/address-counter.txt` rebuilt from existing addresses at session start.
- **Hooks**: 4 (SessionStart, PostCompact, PostToolUse stages wiki/, .raw/, .vault-meta/, Stop)

## DragonScale Mechanisms

1. **Fold operator** (Mechanism 1): unchanged this session; 1 fold exists at `wiki/folds/fold-k3-from-2026-04-23-to-2026-04-24-n8.md`.
2. **Deterministic addresses** (Mechanism 2): vault counter advanced this session. Pre-session: counter at 3, c-000001 only on DragonScale Memory.md. Post-session: counter at 15, addresses c-000002 through c-000014 assigned (seed corpus, 2 entities, 8 sources, 2 concepts). All new pages have addresses.
3. **Semantic tiling lint** (Mechanism 3): unchanged this session; last tiling report at `wiki/meta/tiling-report-2026-04-24.md`.
4. **Boundary-first autoresearch** (Mechanism 4): unchanged this session; sources for engineer-planner pole were hand-picked, not autoresearch-discovered.

## Session Statistics

- **Sources ingested this session**: 8 (4 Carmack + 4 Lamport)
- **Mentor entities matured**: 2 ([[John Carmack]], [[Leslie Lamport]])
- **New concept pages**: 2 ([[Planning Before Code]], [[Formal Specification Discipline]])
- **New principles in Operating Principles**: 17 (Engineering Disposition expanded by 12, Communication expanded by 5)
- **Persona changes**: bench grew from 6 to 8 mentors; 1 new decision frame ("Plan/spec before code"); archetype description expanded to acknowledge engineer-planner pole
- **Addresses allocated**: c-000002 through c-000014 (13 addresses)

## Style Preferences

- No em dashes (U+2014) or `--` as punctuation. Periods, commas, colons, or parentheses. Hyphens in compound words are fine.
- Short and direct responses. No trailing summaries.
- Parallel tool calls when independent.

## Active Threads

- Phase 7 lint + close pending (orphan check, dead-link check, frontmatter validation, address validation, session summary at `wiki/meta/2026-05-26-engineer-planner-training-session.md`).
- Deferred to next corpus iteration: Carmack VR/Oculus-era talks, Carmack Keen AGI material, Lamport Time/Clocks paper, Lamport Byzantine Generals, Lamport Turing Award lecture.
- Deferred mentors (next engineer-planner expansion): John Allspaw (resilience engineering), Butler Lampson (Hints for Computer System Design), Will Larson (engineering management).

## Repo Locations

- Working: `/Users/simon/claude-obsidian/`
- Public: https://github.com/AgriciDaniel/claude-obsidian (unchanged this session)
