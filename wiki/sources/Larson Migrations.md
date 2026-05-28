---
type: source
title: "Larson Migrations"
address: c-000268
author: "[[Will Larson]]"
year: 2018
source_url: "https://lethain.com/migrations/"
fidelity: full-text-summary
raw_file: .raw/source-larson-migrations.md
created: 2026-05-28
updated: 2026-05-28
tags: [source, larson, engineer-planner, migrations, tech-debt, org-design]
status: mature
related:
  - "[[Will Larson]]"
  - "[[Operating Principles]]"
  - "[[Staff Engineer Ladder]]"
  - "[[Org Design]]"
  - "[[John Allspaw]]"
  - "[[Leslie Lamport]]"
---

# Larson "Migrations: The Sole Scalable Fix to Tech Debt" (2018)

[[Will Larson]]'s essay arguing that **migrations are the only mechanism by which a growing engineering organization actually reduces technical debt at scale.** Pairs structurally with [[Larson Sizing Engineering Teams]] (how the org should be shaped) by answering the question "how does the org change shape over time without falling apart."

## Provenance

- Author: [[Will Larson]]
- URL: https://lethain.com/migrations/
- Raw extract: `.raw/source-larson-migrations.md`
- Fidelity: full-text-summary, verbatim on each named phase

## Headline Takeaway

Migrations are "usually the only available avenue to make meaningful progress on technical debt." Individual cleanup is local and does not compound; only a coordinated migration moves a 100-team org off a system that no longer scales. The job of an engineering leader is to make migrations cheap and routine, not heroic.

## Why Migrations Are the Only Lever

Most tools support only "about one order of magnitude of growth" before becoming ineffective. As the company scales, the tool stack has to be repeatedly replaced. Individual engineers can clean up local debt on easy tasks, but the structural debt (the wrong database, the wrong service framework, the wrong deploy system) can only be paid down by **many teams cooperating to change at once.** That coordination is a migration.

Without effective migration capability, "organizations accumulate unsustainable technical debt." This is the org-level analogue to the personal-productivity claim that you cannot exercise your way out of a bad diet.

## The Three-Phase Migration Funnel

### Phase 1: Derisk

Validate the approach with minimal risk and cost.

- "Create a design document and iterate with teams expected to face the greatest challenges."
- Test against "the next six to twelve months of roadmap."
- Embed within "the most challenging one or two teams" rather than starting with easy migrations.
- Build trust: "each team that endorses a migration is making a bet on you."

The counterintuitive move: do not start with the easy cases. Start with the worst cases. If the design doesn't survive them, the migration will fail at scale anyway.

### Phase 2: Enable

Reduce organizational burden through automation and tooling.

- "Programmatically migrate the easy ninety-percent" through automated solutions.
- Develop "self-service tooling and documentation" that allow teams to implement changes independently.
- Ensure tools are "incremental and reversible: folks should be able to immediately return to previous behavior."

Reversibility is the load-bearing constraint. A migration tool that is not reversible is not a migration tool; it is a one-way door, and the org will reject it.

### Phase 3: Finish

Complete the migration to 100% adoption.

- "Stopping the bleeding" by ensuring new code uses the new approach (linters, updated docs).
- Generate tracking tickets and push migration status to leadership.
- The migration team handles remaining edge cases themselves.
- "Celebrate completion rather than just the commencement of migrations."

The third instruction is the most often violated: orgs declare victory at 80% and call it done. Larson's rule is that the migration team eats the long tail itself, because the alternative is leaving a permanent two-version regime.

## Named Pattern: "Do the Hard Work to Make It Easy"

Implicit in the three phases: the migration team's job is to absorb the complexity so that every other team can move with low effort. The migration succeeds when the cost-of-adoption curve has been pushed almost to zero for the consumer teams.

## Frames Cited

- [[Will Larson]]: the migration funnel as the canonical scalable-fix pattern.
- [[John Allspaw]]: shared "reversibility is the bedrock organizational property" frame; Allspaw applies it to deploys, Larson to migrations.
- [[Leslie Lamport]]: shared "the design document is the artifact" frame. Larson's Phase 1 derisk is a Lamport-style spec, applied to org change rather than algorithm.

## Connection to the Brain

This essay turns "tech debt" from a moral failure into a structural workflow with three phases and a named first principle (reversibility). When the brain hears "we should clean up X," the right next question is: is this an individual-cleanup-scale problem (just do it) or a migration-scale problem (derisk, enable, finish)? Most non-trivial debt is the second, and treating it as the first is how orgs end up with five years of half-finished migrations stacked on top of each other.
