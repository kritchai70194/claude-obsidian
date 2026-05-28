---
type: meta
title: "Brain Lint Report 2026-05-28"
created: 2026-05-28
updated: 2026-05-28
tags: [meta, lint, brain, persona, operating-principles]
status: developing
related:
  - "[[lint-report-2026-05-28-v2]]"
  - "[[Persona]]"
  - "[[Operating Principles]]"
---

# Brain Lint Report: 2026-05-28

Semantic / coherence audit of the second-brain layer (Persona, decision frames, Operating Principles, mentor bench, concept layer). Distinct from the structural wiki-lint (`wiki/meta/lint-report-2026-05-28-v2.md`), which validated file health.

Method: 2 parallel Explore agents. Stream A audited pole balance + mentor depth + concept coverage. Stream B audited 30 decision frames against ~229 principles for backing + section consistency.

## Summary Scorecard

| Check | Status | Note |
|---|---|---|
| Mentor maturity vault-wide | **pass** | 43/43 mentors at `status: mature`; no developing/seed |
| Pole balance (mentor counts) | **pass** | 6/5/5/4/4/4/4/4/3/3/3 distribution within healthy band |
| Source depth per mentor | **3 warns** | Dean (2), Allspaw (2), Feld (3) under target (≥4) |
| Concept coverage per pole | **4 warns** | founder-resilience, capital-strategy, marketplace-consumer, decision-customer-discovery each have only 2 concept pages |
| Decision frame ↔ principle backing | **11 warns** | 11/30 frames lack a direct OP citation |
| Operating Principles section count | **pass** | 15 sections present |
| Operating Principles section depth | **2 warns** | Engineering Disposition (48) + Operational Discipline (35) oversized; Customer Direction (4) under-sized |
| AI-native dedicated OP section | **fail** | No dedicated section; 2 principles embedded elsewhere |
| Persona narrative coherence | **pass** | Bench description matches current 43 mentors |
| Cross-pole tensions | **pass** | Concept pages document tensions where appropriate |
| Hot cache freshness | **pass** | Last Updated reflects 2026-05-28 Tier 2 wave |

**Overall grade:** Brain at strong baseline. Frame-level architecture is mature; principle-level articulation needs to catch up with the newest mentor integrations (Lampson, Larson, Amodei added 2026-05-28).

## Pole Balance Findings (Stream A)

### Healthy poles (no action needed)

- **Unicorn-builder** (5 mentors, 20 sources, 5 concept pages, 45 principles across 3 sections) — exemplary balance
- **Mental-models** (4 mentors, 16 sources, 3 concept pages, 15 principles) — tight integration
- **GTM-sales** (4 mentors, 16 sources, 3 concept pages, 12 principles) — end-to-end synthesis
- **Operating-at-scale** (4 mentors, 16 sources, 2 concept pages, 59 principles) — mechanically explicit

### Warning poles

| Pole | Issue | Recommended action |
|---|---|---|
| Founder-operator | Jeff Dean under-sourced (2 sources) | Ingest 2-3 more Dean talks/papers |
| Engineer-planner | John Allspaw under-sourced (2 sources) | Ingest Etsy blameless postmortem essay, resilience-engineering papers |
| Founder-resilience | Brad Feld under-sourced (3); lightly synthesized (2 concept pages) | Ingest 2 Feld sources; create [[Leverage as Compounding]] (Naval thesis) page |
| Capital-strategy | Lightly synthesized (2 concept pages); concepts embedded not anchored | Create [[Inflection Recognition]] or [[Blitzscale Framework]] page |
| Marketplace-consumer (sub) | 1+2 cross-listed structure; no dedicated OP section | Create dedicated OP section OR deepen Choudary sourcing |
| Decision-customer-discovery (sub) | 6 OP principles (smallest section) | Expand Decision Mechanics 6 → 12-15 |
| AI-native (sub) | No dedicated OP section | Promote dedicated OP section with 6-10 principles |

## Decision Frame ↔ Principle Mapping (Stream B)

19 of 30 frames have explicit backing principles. **11 frames lack direct OP backing:**

| Frame | Title | Pole | Status |
|---|---|---|---|
| 13 | "What is my unique leverage compounding here?" (Naval) | Founder-resilience | No direct principle |
| 17 | "What secret do we know that nobody else does?" (Thiel) | Capital-strategy | No direct principle |
| 19 | "What inflection is making this possible now?" (Maples) | Capital-strategy | No direct principle |
| 20 | "What named change in the world makes our category necessary now?" (Raskin) | GTM-sales | No direct principle |
| 23 | "Are we raising the bar this quarter or holding the line?" (Slootman) | Operating-at-scale | No direct principle |
| 25 | "What's our edge if foundation model capability doubles?" (Amodei) | AI-native | No AI-native section exists |
| 26 | "Is the model the product, wrapper, or workflow?" | AI-native | Same |
| 27 | "Is this a hint or a promise?" (Lampson) | Engineer-planner | Principle exists ("Hints, not promises") but not explicitly mapped |
| 28 | "What's the interface, and what does it conceal?" (Lampson) | Engineer-planner | Principle exists ("Interfaces are the most important design artifact") |
| 29 | "Are we migrating, or just talking about migrating?" (Larson) | Engineer-planner | Principle exists ("Migrations are usually the only path...") |
| 30 | "Is this an org-debt problem dressed as a tech-debt problem?" (Larson + Allspaw) | Engineer-planner | Principle exists ("Most poor working relationships are information gaps") |

**Note:** Frames 27-30 actually HAVE principles in Engineering Disposition and Operating at Scale (added during Tier 1 reconciliation). The "missing backing" finding is a false alarm caused by the Stream B agent not matching loose phrasing. Verified: all four are backed.

**True missing backings: 7 frames** (13, 17, 19, 20, 23, 25, 26). Frames 25 + 26 need an AI-Native OP section. Frames 13, 17, 19, 20, 23 need new principle entries in their respective sections.

### Minor mapping bugs

- Frame 9 references "strategic-durability" — should map to capital-strategy or unicorn-builder (Aggregation Theory + 7 Powers).
- Frame 26 attribution generic — should explicitly tag Altman/Amodei.

## Operating Principles Internal Consistency (Stream B)

15 sections, ~229 principles. Lopsided distribution:

| Section | Principles | Health |
|---|---|---|
| Engineering Disposition | 48 | **Oversized** — consider sub-sectioning |
| Operational Discipline | 35 | **Oversized** — consider sub-sectioning |
| Operating at Scale | 24 | Healthy |
| Mental Models | 15 | Healthy |
| Founder Resilience | 14 | Healthy |
| Capital Strategy | 12 | Healthy |
| GTM / Sales | 12 | Healthy |
| Product Discipline | 18 | Healthy |
| Strategic Durability | 17 | Healthy |
| Early-Stage Epistemics | 10 | Healthy |
| Time Horizon | 6 | Adequate |
| Decision Mechanics | 6 | **Under-sized** — expand to 12-15 |
| Customer Direction | 4 | **Under-sized** — expand to 10-12 |
| Communication | 7 | Healthy |
| Things This Brain Is Skeptical Of | 9 | Appendix; appropriate |

No near-duplicates detected within sections. No contradictions across sections.

## Stale / Outdated Narrative Spots

None significant. Persona narrative explicitly notes Tier 2 wave + engineer-planner expansion. Hot cache Last Updated reflects 2026-05-28 work. Seed corpora are dated 2026-05-24 to 2026-05-26 but accurately describe the original ingest intent; they are historical artifacts, not stale claims.

## Recommended Actions (ranked by leverage)

### Tier A (high-leverage, ~2-4 hours each)

1. **Add 7 missing-backing principles** for Frames 13, 17, 19, 20, 23, 25, 26. Each principle entry: verbatim quote from existing source + section placement + 2-3 sentence elaboration. Resolves the largest brain-coherence gap.
2. **Promote AI-Native section in Operating Principles** with 6-10 principles consolidating Altman + Amodei + Hassabis frames (Frames 25-26 backing). Currently embedded in Capital Strategy + Product Discipline; this section makes the AI-native pole as legible as other poles.
3. **Expand Decision Mechanics section** from 6 to 12-15 principles. Add: Kelly criterion bet sizing, signal hierarchy (observed > stated past > hypothetical > opinion), the Mom Test question patterns, pivot-as-planned-search (Blank), kill-criteria pre-commitment (Duke). Currently the smallest content section despite the rigor of the underlying mentors (Duke + Blank + Fitzpatrick).

### Tier B (medium-leverage, ~2-3 hours each)

4. **Ingest 2-3 sources each for under-sourced mentors:**
   - Jeff Dean: Stanford systems talk, Google papers, order-of-magnitude frameworks (~2h)
   - John Allspaw: Etsy blameless postmortem handbook, "STELLA: report from the SNAFUcatchers Workshop", cognitive-systems-engineering talks (~2h)
   - Brad Feld: Startup Boards chapters, Startup Life chapters, depression-specific talks (~2h)
5. **Create [[Leverage as Compounding]] concept page** synthesizing Naval's specific-knowledge × judgment × leverage thesis. Resolves Frame 13 + tightens founder-resilience pole.
6. **Create [[Inflection Recognition]] concept page** synthesizing Thiel secrets + Maples inflections + Hoffman blitzscale conditions. Resolves Frames 17 + 19 + tightens capital-strategy pole.

### Tier C (low-leverage, optional)

7. **Sub-section Engineering Disposition** (48 principles) into themed sub-sections: System Design Hints, Distributed Systems Foundations, Pragmatic Engineering, Written Discipline. Improves scannability without rewriting.
8. **Sub-section Operational Discipline** (35 principles) similarly.
9. **Fix Frame 9 + Frame 26 attribution** (one-line edits in Persona.md).
10. **Marketplace-consumer dedicated OP section** OR deeper Choudary sourcing. Lowest priority — the cross-listing structure is intentional.

## Status

**Brain at strong baseline.** No fatal incoherencies. The frame-level architecture is mature. Principle-level articulation has 7 known gaps (all in newer pole additions or sparse sub-poles). Two oversize sections + two undersize sections suggest mild re-balancing but not urgent.

The Tier A actions, if executed, would bring the brain to "all 30 decision frames cite at least one Operating Principles entry" — a clean state worth holding for ~1 month before the next ingest wave.

The autonomous-execution method this session shipped 48 new pages with zero structural defects (per `lint-report-2026-05-28-v2.md`); the brain-lint findings here are about deepening, not fixing.
