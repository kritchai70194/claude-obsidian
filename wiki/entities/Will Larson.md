---
type: entity
title: "Will Larson"
entity_type: person
role: Author and engineering leader. Former CTO Calm, ex-Stripe, ex-Digg, ex-Uber. Author of An Elegant Puzzle (2019) and Staff Engineer (2021). Blogs at lethain.com.
address: c-000263
pole: engineer-planner
first_mentioned: "[[Larson Elegant Puzzle]]"
created: 2026-05-28
updated: 2026-05-28
status: mature
roles: [author, engineering leader, former Stripe/Uber/Digg]
tags:
  - entity
  - person
  - mentor
  - engineer-planner
  - staff-engineer
  - org-design
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Staff Engineer Ladder]]"
  - "[[Org Design]]"
  - "[[John Carmack]]"
  - "[[Leslie Lamport]]"
  - "[[John Allspaw]]"
  - "[[Butler Lampson]]"
  - "[[Larson Elegant Puzzle]]"
  - "[[Larson Sizing Engineering Teams]]"
  - "[[Larson Migrations]]"
  - "[[Larson Staff Archetypes]]"
  - "[[entities/_index]]"
sources:
  - "[[Larson Elegant Puzzle]]"
  - "[[Larson Sizing Engineering Teams]]"
  - "[[Larson Migrations]]"
  - "[[Larson Staff Archetypes]]"
---

# Will Larson

Engineering leader and author. Former CTO at Calm, prior senior engineering leadership at Stripe (Foundation Engineering), Uber (Infrastructure), and Digg. Author of two canonical texts of the modern staff-engineering and engineering-management literature: *An Elegant Puzzle: Systems of Engineering Management* (Stripe Press, 2019) and *Staff Engineer: Leadership beyond the management track* (2021). Long-running blogger at lethain.com, where most of the book material first appeared as essays. Co-curator of staffeng.com.

Fifth anchor on the **engineer-planner pole** of this brain's [[Persona]]. Where [[John Carmack]] supplies the pragmatic individual-engineer frame, [[Leslie Lamport]] supplies the specify-before-implement frame, [[John Allspaw]] supplies the sociotechnical incident frame, and [[Butler Lampson]] supplies the systems-design hints frame, Larson supplies the **engineering-org-as-system** frame: how teams should be sized, what states teams move through, how senior ICs actually contribute at scale, and how to migrate an org off systems it has outgrown.

---

## Why This Mentor

Most engineering-management writing is either war stories or unfalsifiable principles. Larson's body of work is unusual in being **falsifiable, numerical, and structural**: managers should support 6-8 engineers, teams below 4 are not teams, migrations have three named phases, staff engineers come in exactly four archetypes, teams sit in exactly four states with exactly four corresponding system fixes. The numbers and the names are load-bearing.

This brain reaches for Larson when the question is: "how should this engineering org actually be shaped, and how does it change shape over time without falling apart?" His answers are concrete enough to apply mid-decision and refutable enough to be wrong. That combination is what makes them useful.

The book *An Elegant Puzzle* is the diagnostic backbone of the engineer-planner pole's org work. The book *Staff Engineer* and staffeng.com are the vocabulary the brain uses for senior IC work.

---

## Primary-Source Citations

### From [[Larson Sizing Engineering Teams]] (2017)

The headline ratios:

> "Managers should support 6-8 engineers."
> "Managers should support 4-6 managers."
> "Oncall rotations want 8 engineers."
> "Small teams (<4) are not teams."

Larson on small teams, verbatim: he has "regretted it every single time" he has sponsored a 1-2 person team.

New teams are formed by **fission, not founding**: grow an existing team to 8-10, then split into two groups of 4-5. Never staff an empty team.

### From [[Larson Migrations]] (2018)

Why migrations are the only lever:

> "Migrations are usually the only available avenue to make meaningful progress on technical debt."

Most tools support only "about one order of magnitude of growth" before becoming ineffective. Org-scale debt requires org-scale change, and that is what a migration is.

The three-phase funnel:

1. **Derisk:** design doc, test against the next 6-12 months of roadmap, embed with "the most challenging one or two teams."
2. **Enable:** "programmatically migrate the easy ninety-percent," ship "self-service tooling and documentation," ensure tools are "incremental and reversible: folks should be able to immediately return to previous behavior."
3. **Finish:** "stopping the bleeding" via linters and docs, push status to leadership, the migration team handles the long tail itself, "celebrate completion rather than just the commencement."

The load-bearing constraint is **reversibility**. A non-reversible migration tool will be rejected by the org.

### From [[Larson Staff Archetypes]] (2021)

The four named archetypes:

- **Tech Lead:** "comfortable scoping complex tasks, coordinating their team towards solving them, and unblocking them along the way." Most common.
- **Architect:** "responsible for the success of a specific technical domain within their company."
- **Solver:** "a trusted agent of the organization who goes deep into knotty problems, continuing to work on them until they're resolved."
- **Right Hand:** "extends an executive's attention, borrowing their scope and authority to operate particularly complex organizations." Rarest, large orgs only.

Each archetype has a different success criterion. Most staff-engineer dissatisfaction is archetype mismatch.

### From [[Larson Elegant Puzzle]] (2019)

The four states of a team, verbatim:

- **Falling Behind:** "each week their backlog is longer than the week before...folks are working extremely hard but not making much progress, morale is low."
- **Treading Water:** "able to get their critical work done, but are not able to start paying down technical debt or start major new projects."
- **Repaying Debt:** "the debt repayment snowball: each piece of debt you repay leads to more time to repay more debt."
- **Innovating:** "their technical debt is sustainably low, morale is high, and the majority of work is satisfying new user needs."

System fix per state: Falling Behind needs hires, Treading Water needs WIP limits, Repaying Debt needs time and quiet, Innovating needs slack defended.

Other named principles, verbatim:

- "On hiring, fix one team at a time, not a bit on each."
- "Move work, not people."
- "Most poor working relationships are the by-product of information gaps."
- "With the right people, any process works, and with the wrong people, no process works."

The Model / Document / Share pattern for spreading a practice: try it as an experiment (model), write up what you learned (document), then present it without lobbying (share).

---

## Core Frames

### 1. The Four States of a Team (diagnostic)

Falling Behind / Treading Water / Repaying Debt / Innovating. Each has a different system fix. Applying the wrong fix to the wrong state makes the team worse. Diagnose before prescribing. ([[Larson Elegant Puzzle]])

### 2. The Four Staff Archetypes (vocabulary)

Tech Lead / Architect / Solver / Right Hand. Different scopes, different success criteria, different daily activity. The first move on any senior-IC question is to name the archetype. ([[Larson Staff Archetypes]])

### 3. The Three-Phase Migration Funnel

Derisk (worst cases first) -> Enable (self-serve, reversible tooling, 90% automated) -> Finish (long tail eaten by the migration team). The only mechanism by which org-scale tech debt actually goes down. ([[Larson Migrations]])

### 4. The Sizing Ratios

Manager : engineers = 6-8. Manager : managers = 4-6. On-call floor = 8. Team floor = 4. New teams come from fission of mature teams. Most "people" problems in growing orgs are structural deviations from these ratios. ([[Larson Sizing Engineering Teams]])

### 5. Reversibility Is the Bedrock Property

Migrations and tooling that cannot be reverted are rejected by the org. Build with "folks should be able to immediately return to previous behavior" as a hard constraint. Org-level analogue of [[Jeff Bezos]] two-way doors and [[John Allspaw]]'s safety-of-deploy frame. ([[Larson Migrations]])

### 6. Org-Debt Before Tech-Debt

"Most poor working relationships are the by-product of information gaps." The pattern matches [[John Allspaw]]'s "the conditions, not the people, produced the failure." Before fixing the code, fix the information flow. ([[Larson Elegant Puzzle]])

### 7. Hard Work to Make It Easy

The migration team's job is to absorb the complexity so every other team can move with low effort. Leadership invests in clarity so other people can act fast. This is the same move as [[Jeff Bezos]]'s "high standards are teachable" and [[Patrick Collison]]'s "operations as the product." ([[Larson Migrations]])

### 8. Snowflakes vs Forest (kill snowflake systems)

Implicit across the migration and sizing work: a snowflake system (one-off team, one-off rotation, one-off tool stack) cannot be supported at scale. The org-design move is to convert snowflakes into instances of a forest pattern (the standard team shape, the standard migration tool, the standard archetype role). ([[Larson Sizing Engineering Teams]], [[Larson Migrations]])

### 9. Staff Projects Are Long-Running, High-Leverage, Often Invisible

The four archetypes share a property: their wins are not weekly. Architects measure impact in years. Solvers measure impact in problem-resolution. Right Hands measure impact in executive leverage. Evaluating any of them on weekly delivery is the standard failure mode. ([[Larson Staff Archetypes]])

### 10. Narrative as Artifact (Model / Document / Share)

Spreading a practice goes Model -> Document -> Share, never Share first. Writing forces clarity, and a documented experiment that already worked is harder to argue with than a proposal. Same move as [[Jeff Bezos]]'s six-pager and [[Leslie Lamport]]'s "write the spec." ([[Larson Elegant Puzzle]])

---

## Connection to the Brain

Larson bridges the engineer-planner pole to several others:

- **[[John Allspaw]] adjacency:** both treat org pathologies as structural rather than individual. Allspaw on incidents ("conditions, not people"); Larson on team dysfunction ("ratios, not motivation"). Both reject the moral framing.
- **[[Leslie Lamport]] adjacency:** Larson's "design document, then derisk" is Lamport's "spec, then implement" applied to org change. Both insist on the artifact-before-action discipline.
- **[[John Carmack]] adjacency:** Carmack's "judgment over rules" applies to code; Larson's "diagnose the state before applying the fix" applies to teams. Same epistemic move at different layers.
- **[[Butler Lampson]] adjacency:** Lampson's "hints for computer system design" and Larson's four-state/four-archetype/three-phase patterns are the same move: name the small number of patterns that actually recur, and design from them.
- **[[Jeff Bezos]] (two-way doors, six-pagers):** Larson's reversibility-as-constraint and his Model/Document/Share both echo Bezos. Reversibility = two-way doors; documented experiment = six-pager.
- **[[Operating Principles]]:** feeds the Engineering Disposition section with the four-state diagnosis, the four archetypes, the migration funnel, the sizing ratios, and reversibility.

---

## Queued for Future Ingest

- *Staff Engineer: Leadership beyond the management track* (2021) — full book, interview chapters.
- "Surviving the Vortex of Senior Engineering Roles" (staffeng.com guide).
- "Magnitudes of exploration" (lethain.com) — companion to the migration essay on when to go wide vs deep.
- "Useful sayings for engineering leaders" (lethain.com) — collected aphorisms.
- "How to invest in technical infrastructure" (lethain.com) — companion to the migrations essay.

---

## Status

Mature. Four canonical sources ingested ([[Larson Sizing Engineering Teams]], [[Larson Migrations]], [[Larson Staff Archetypes]], [[Larson Elegant Puzzle]]). Ten core frames stable. The engineer-planner pole now goes 4 -> 5 with this addition.

---

## Connections

- [[Persona]], engineer-planner pole, fifth anchor
- [[John Carmack]], complementary engineer-planner (pragmatic individual)
- [[Leslie Lamport]], complementary engineer-planner (formal spec)
- [[John Allspaw]], complementary engineer-planner (sociotechnical incident)
- [[Butler Lampson]], complementary engineer-planner (systems-design hints)
- [[Operating Principles]], Engineering Disposition section
- [[Staff Engineer Ladder]], canonical archetypes and progression
- [[Org Design]], canonical team-sizing and migration patterns
