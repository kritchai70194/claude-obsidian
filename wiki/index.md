---
type: meta
title: "Wiki Index"
updated: 2026-04-07
tags:
  - meta
  - index
status: evergreen
related:
  - "[[overview]]"
  - "[[log]]"
  - "[[hot]]"
  - "[[dashboard]]"
  - "[[Wiki Map]]"
  - "[[concepts/_index]]"
  - "[[entities/_index]]"
  - "[[sources/_index]]"
  - "[[LLM Wiki Pattern]]"
  - "[[Hot Cache]]"
  - "[[Compounding Knowledge]]"
  - "[[Andrej Karpathy]]"
---

# Wiki Index

Last updated: 2026-04-15 | Total pages: 34 | Sources ingested: 2

Navigation: [[overview]] | [[log]] | [[hot]] | [[dashboard]] | [[Wiki Map]] | [[getting-started]] | [[Persona]]

---

## Operating Identity

- [[Persona]], the brain's instruction set (Technical CEO archetype); load on every session
- [[Operating Principles]], decision-making heuristics from the mentor bench (developing)
- [[seed-corpus-technical-ceo]], source roadmap for persona training (current)

---

## Concepts

- [[LLM Wiki Pattern]], the pattern for building persistent, compounding knowledge bases using LLMs (status: mature)
- [[Hot Cache]], ~500-word session context file, updated after every ingest and session (status: mature)
- [[Compounding Knowledge]], why wiki knowledge grows more valuable over time, unlike RAG (status: mature)
- [[cherry-picks]], prioritized feature backlog from ecosystem research; 13 features to add to claude-obsidian (status: current)
- [[SVG Diagram Style Guide]], canonical visual style for all diagrams: Space Grotesk, #0A0A0A dark theme, #E07850 accent, full design tokens (status: evergreen)
- [[Pro Hub Challenge]], community challenge pattern for building claude-seo/claude-blog extensions; first challenge produced 6 submissions, 5 integrated in v1.9.0 (status: evergreen)
- [[Semantic Topic Clustering]], SERP-based keyword grouping replacing paid tools; hub-spoke architecture with interactive visualization (status: evergreen)
- [[Search Experience Optimization]], "read SERPs backwards" methodology for page-type mismatch detection and persona scoring (status: evergreen)
- [[SEO Drift Monitoring]], "git for SEO" baseline/diff/track with 17 comparison rules and SQLite persistence (status: evergreen)
- [[DragonScale Memory]], memory-layer spec inspired by the Heighway dragon curve; fold operator, deterministic page addresses, semantic tiling, boundary-first autoresearch (status: shipped v0.4, all four mechanisms opt-in)
- [[Persistent Wiki Artifact]]: durable Markdown page as the LLM's memory object, distinct from ephemeral chat turns (status: developing)
- [[Source-First Synthesis]]: provenance discipline; raw sources stay immutable while the wiki layer is synthesized and cited (status: developing)
- [[Query-Time Retrieval]]: wiki query path synthesizes with citations; complementary to Obsidian's in-vault search (status: developing)

---

## Entities

### Mentor bench (Technical CEO persona)

- [[Jeff Bezos]], founder/CEO Amazon 1994-2021 (status: developing)
- [[Patrick Collison]], co-founder/CEO Stripe (status: developing)
- [[John Collison]], co-founder/President Stripe (status: developing)
- [[Jeff Dean]], Chief Scientist Google DeepMind (status: developing)
- [[Werner Vogels]], CTO Amazon since 2005 (status: developing)
- [[Andrej Karpathy]], AI researcher, creator of the LLM Wiki pattern, former Tesla AI director (status: developing)
- [[Ar9av-obsidian-wiki]], multi-agent compatible LLM Wiki plugin; delta tracking manifest (status: current)
- [[Nexus-claudesidian-mcp]], native Obsidian plugin + MCP bridge; workspace memory, task management (status: current)
- [[ballred-obsidian-claude-pkm]], goal cascade PKM; auto-commit hooks, /adopt command (status: current)
- [[rvk7895-llm-knowledge-bases]], 3-depth query system, Marp slides, parallel deep research (status: current)
- [[kepano-obsidian-skills]], official skills from Obsidian creator; defuddle, obsidian-bases (status: current)
- [[Claudian-YishenTu]], native Obsidian plugin embedding Claude Code; plan mode, @mention (status: current)
- [[Claude SEO]], Tier 4 Claude Code skill for SEO analysis; 23 skills, 17 agents, 30 scripts at v1.9.0 (status: evergreen)

---

## Sources

### Persona corpus (Technical CEO, Phase 2-3 ingest 2026-05-24)

Phase 2 (Bezos, Karpathy, Dean):

- [[Bezos 1997 Letter]]: Amazon founding compact, 9 decision criteria
- [[Bezos 2016 Day 1 Letter]]: Day 1, customer obsession, two-way doors, disagree-and-commit
- [[Bezos 2002 API Mandate]]: service-interface directive that became AWS (via Yegge's 2011 account)
- [[Karpathy Software 2.0]]: paradigm-shift framing for neural networks (2017)
- [[Karpathy Recipe for Training Neural Networks]]: six-step debugging discipline (2019)
- [[Dean Latency Numbers]]: the canonical latency table, 9 orders of magnitude (2012)

Phase 3 (Collison, Vogels):

- [[Collison Fast]]: 24 historical projects completed surprisingly fast (JavaScript 10 days, Git 17 days, Pentagon 491 days)
- [[Collison Questions]]: 23 open intellectual problems Patrick maintains as public list
- [[Collison Cowen Interview]]: Conversations with Tyler Ep. 21 (2017, live at Stripe), Patrick interviews Tyler
- [[Vogels 10 Lessons from 10 Years of AWS]]: 2016 anniversary post, 10 engineering principles
- [[Vogels Eventually Consistent]]: 2008 consistency-model taxonomy and CAP framing

Phase 4 (PDF full-text + depth):

- [[Bezos 2015 Letter]]: ORIGIN of two-way doors framework, long-tailed bets, failure as invention's twin (full-text PDF)
- [[Stripe Annual Letter 2024]]: Patrick + John joint, profitability funds R&D, customer-selection as strategy (full-text PDF)
- [[Dean Stanford Talk]]: 2010 Stanford EE380 lecture, know-your-building-blocks, 6/7/8 scope heuristic (full PDF, 103 slides)
- [[Karpathy Unreasonable Effectiveness of RNNs]]: 2015, build-to-learn discipline first stated
- [[Vogels Decade of Dynamo]]: 2017 retrospective, three-system distinction, workload-measure-before-redesign

### Research

- [[claude-obsidian-ecosystem-research]], 2026-04-08 | web research across 16+ repos | 8 wiki pages created

---

## Questions

- [[How does the LLM Wiki pattern work]], how the pattern works and why it outperforms RAG at human scale (status: developing)

---

## Comparisons

- [[Wiki vs RAG]], when to use a wiki knowledge base versus RAG; verdict: wiki wins at <1000 pages
- [[claude-obsidian-ecosystem]], feature matrix of 16+ Claude+Obsidian projects; where claude-obsidian wins and gaps

---

## Decisions

- [[2026-04-14-community-cta-rollout]] - Skool community CTA footer added to 6 skill repos with per-tool frequency rules (status: active)
- [[2026-04-15-slides-and-release-session]] - Claude SEO v1.9.0 slides (15-slide HTML deck) + GitHub release v1.9.0 with PDF asset (status: complete)
- [[2026-04-15-release-report-session]] - Claude SEO v1.9.0 Release Report PDF: dark theme, 13 pages, WeasyPrint layout fixes, Challenge v2 added (status: complete)
- [[2026-04-14-claude-seo-v190-session]] - Claude SEO v1.9.0 Pro Hub Challenge integration: 5 submissions, 4 new skills, 4 review rounds, cybersecurity audit (status: complete)

---

## Folds

Extractive rollups of log batches. Each fold links to its constituent log entries.

- [[fold-k3-from-2026-04-23-to-2026-04-24-n8]] - DragonScale staged implementation (8 entries, 2026-04-23 to 2026-04-24)
- [[fold-k4-from-2026-05-26-to-2026-05-27-n16]] - Unicorn-expansion roadmap completion + Chen/Helmer expansions + PG full-text upgrade (16 entries, 2026-05-26 to 2026-05-27)

---

## Domains

<!-- Add domain entries here after scaffold -->
