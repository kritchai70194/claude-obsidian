---
type: meta
title: "Concepts Index"
updated: 2026-05-26
tags:
  - meta
  - index
  - concept
domain: knowledge-management
status: evergreen
related:
  - "[[index]]"
  - "[[dashboard]]"
  - "[[Wiki Map]]"
  - "[[Hot Cache]]"
  - "[[LLM Wiki Pattern]]"
  - "[[Compounding Knowledge]]"
  - "[[Planning Before Code]]"
  - "[[Formal Specification Discipline]]"
---

# Concepts Index

Navigation: [[index]] | [[entities/_index|Entities]] | [[sources/_index|Sources]]

All concept pages — ideas, patterns, and frameworks extracted from sources.

---

## Knowledge Management

- [[LLM Wiki Pattern]] — the core architecture for persistent, compounding knowledge bases
- [[Hot Cache]] — ~500-word session context file, updated after every ingest
- [[Compounding Knowledge]] — why the wiki grows more valuable over time, unlike RAG
- [[DragonScale Memory]] — memory-layer spec: fold operator, deterministic page addresses, semantic tiling, boundary-first autoresearch (status: shipped v0.4, all four mechanisms opt-in)
- [[Persistent Wiki Artifact]]: durable Markdown page as the LLM's memory object (developing)
- [[Source-First Synthesis]]: provenance discipline for LLM wiki layers (developing)
- [[Query-Time Retrieval]]: query synthesis with citations, complementary to Obsidian search (developing)

---

## Decision-Making & Leadership

- [[Operating Principles]], decision-making heuristics distilled from the [[Persona]] mentor bench (mature, ~260 cited principles across 19 sections; Engineering Disposition + Operational Discipline restructured into themed sub-sections 2026-05-28)
- [[Customer Obsession]], Bezos-canonical: 90-95% of what we build is customer-driven; beautifully dissatisfied customers; invent on their behalf
- [[Long-Term Thinking]], Bezos-canonical: voting machine vs weighing machine; durable profitability funds R&D; wandering as counter-balance to efficiency
- [[Two-Pizza Team]], Bezos + Vogels canonical: Conway's law as deliberate lever; services as startups within the walls; single-threaded leadership
- [[Working Backwards]], Bezos memo discipline: write the press release first; if it isn't exciting, don't build it; skills-forward will be outmoded
- [[Leverage as Compounding]], Naval thesis: specific knowledge × judgment × leverage (code/media/capital/labor); play long-term games with long-term people; seek wealth not money or status
- [[Inflection Recognition]], Thiel + Maples + Hoffman synthesis: inflections precede ideas; secrets as contrarian belief about the inflection; speed beats efficiency conditionally

---

## Engineering Discipline

- [[Planning Before Code]], the writing-as-thinking discipline across rigor levels (Carmack `.plan` prose, Lamport TLA+ formal, Bezos memo organizational); synthesis page bridging the engineer-planner pole with the founder-operator pole
- [[Formal Specification Discipline]], the deeper pole focused on Lamport TLA+; when the cost of error justifies the cost of rigor
- [[Hints for System Design]], Lampson's taste-plus-engineering toolkit: interfaces as the most important artifact, hints with cheap checks, common-case-fast / worst-case-progress, don't hide power, end-to-end recovery, shed load, "they are just hints"
- [[Staff Engineer Ladder]], Larson's org-design framework: four staff archetypes (tech-lead, architect, solver, right-hand), four team states (falling behind, treading water, repaying debt, innovating), three-phase migration funnel, sizing ratios
- [[Distributed Systems]], synthesis across Lamport canonical trio + Vogels + Lampson: causality as the only intrinsic order, state-machine replication, the message-delay scale-free definition, data moves to the process
- [[Logical Clocks]], Lamport 1978-derived: the Clock Condition, IR1+IR2 implementation rules, concurrent means causally independent (not simultaneous)
- [[Byzantine Fault Tolerance]], Lamport 1982-derived: interactive consistency (IC1, IC2), the n ≥ 3m + 1 bound, formal-reasoning humility
- [[Carmack on AGI]], the counter-thesis to scale-monopoly AGI: small-program problem, biology existence proof, single-workstation thesis, investor money as discipline

---

## Unicorn-Building Discipline

- [[Product-Market Fit]], the measurable state of having made something people want; synthesizes Lenny + PG + Bezos PMF disciplines into one diagnostic
- [[Aggregation Theory]], Thompson's four-essay arc on why digital businesses converge on winner-take-all dynamics; explains modern competitive durability (internet-era-specific)
- [[7 Powers]], Helmer's universal moat taxonomy; 7 specific Powers each with Benefit + Barrier; complement to Aggregation Theory
- [[Growth Loops]], Chen's framework for sustainable acquisition; 5-stage Cold Start framework; atomic network bootstrap; loops vs funnels; the route to Network Economies
- [[Early-Stage Discipline]], the compressed PG discipline for the first year of a startup; ideas-are-noticed + do-unscalable-work + growth-as-compass

---

## Founder Resilience Discipline

- [[Founder Resilience]], the discipline of surviving the multi-year emotional gauntlet of building a company; synthesizes Horowitz + Naval + Feld on wartime/peacetime, The Struggle, leverage compounding, founder depression, board management
- [[Founder Mode]], the named operating posture for founder-led companies at scale; Chesky synthesis with Horowitz cross-reference; skip-level engagement, design the company like a product, 11-star ladder

---

## Mental Models Discipline

- [[Mental Models Toolkit]], the multidisciplinary cross-domain pattern-matching toolkit; synthesizes Munger latticework + Kahneman bias inventory + Taleb uncertainty + Christensen causal frame; inversion, base rates, fat tails, JTBD
- [[Disruption vs Aggregation]], cross-references Christensen Disruption Theory against Thompson Aggregation Theory; when each applies, why incumbents lose in each, updates the defensibility frame
- [[Antifragility for Startups]], compresses Taleb antifragility applied to startup operations, capital, product bets, founder posture; Mediocristan vs Extremistan, barbell strategy, the turkey problem

---

## Capital Strategy Discipline

- [[Capital Strategy]], the multi-stage capital game; round sequencing, dilution math, blitzscale vs starve diagnostic, board composition, dirty-terms catalog, monopoly capital vs inflection capital
- [[Secrets and Inflections]], synthesis of Thiel "secrets" + Maples "inflections" as two angles on contrarian thesis formation; falsifiability, live in the future, the boring underbelly, the "what would have to be true" test

---

## GTM / Sales Discipline

- [[Repeatable GTM]], the 4-step Sales Acceleration Formula + 3 sales engines + SDR/AE specialization + unit economics + niche discipline; combines Roberge data-driven sales with Ross outbound prospecting
- [[Strategic Narrative]], the 5-part narrative arc (named world change → stakes → promised land → obstacles → evidence); Raskin synthesis with the Zuora case study
- [[Positioning as Strategy]], the 5 components of positioning (competitive alternatives, unique attributes, value, target customers, market category); Dunford framework, positioning vs messaging, negative positioning, 4 positioning styles

---

## Operating at Scale Discipline

- [[Scaling Operations]], the 10 → 100 → 1000 people disciplines; Grove managerial leverage + OKRs + 1:1 cadence, Slootman amp-it-up tempo, McCord freedom-and-responsibility culture, stage transitions
- [[Hiring at Scale]], hiring discipline as company grows; Rabois Barrels-and-Ammunition, Bezos Bar Raiser, McCord Keeper Test, Horowitz hire-for-strength, 24-48 hour decisions, 1 great > 10 average

---

## AI-Native Discipline

- [[AI-Native Economics]], what makes AI companies economically different; training cost curves, inference variable cost, scaling laws as moat, model-product-wrapper-workflow trichotomy, compute as new oil, AGI timeline trichotomy
- [[AI Company Defensibility]], the three defensibility layers (foundation, workflow, distribution); why most AI wrappers fail; AI Aggregators as new dominant player class; the "if OpenAI launched your product tomorrow" test

---

## Marketplace + Consumer Discipline

- [[Marketplace Liquidity]], the chicken-and-egg discipline; atomic network bootstrap, hard-side focus, 10 Gurley evaluation criteria, platform architecture (toolbox + magnet + matchmaker), take rate discipline
- [[Consumer Defensibility]], brand + network density + design as the three load-bearing sources; why B2B defensibility frameworks under-deliver in consumer; the combined discipline at $1B+ scale

---

## Decision Protocols + Customer Discovery Discipline

- [[Decision Journals]], the explicit decision-recording methodology; resulting bias correction (Duke), Kelly criterion bet sizing, pre-committed quit criteria, truthseeking pods, integration with two-way doors + inversion + base rate
- [[Customer Discovery Protocol]], the customer interview methodology; Blank Customer Development 4 stages + Fitzpatrick Mom Test question pattern, signal hierarchy (observed > stated past > stated hypothetical > stated opinion), commitments scale (time / reputation / money), 100 interviews in 10 weeks

---

## Add new concepts here as they are extracted from sources.
