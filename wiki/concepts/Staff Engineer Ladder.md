---
type: concept
title: "Staff Engineer Ladder"
address: c-000301
complexity: intermediate
domain: org-design
created: 2026-05-28
updated: 2026-05-28
tags:
  - concept
  - org-design
  - engineer-planner
  - staff-engineering
  - larson
status: mature
related:
  - "[[Will Larson]]"
  - "[[Larson Staff Archetypes]]"
  - "[[Larson Elegant Puzzle]]"
  - "[[Larson Sizing Engineering Teams]]"
  - "[[Larson Migrations]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Staff Engineer Ladder

> "Most poor working relationships are the by-product of information gaps." ([[Larson Elegant Puzzle]])

This page synthesizes [[Will Larson]]'s staff-engineering and engineering org-design discipline as the org-scale counterpart to [[Hints for System Design]]. Lampson is taste plus engineering at the interface layer; Larson is taste plus engineering at the org layer. Both are pragmatic, both are hint-based, both are about which lever to pull when.

## The Four Staff Archetypes

The four named roles a staff-plus engineer can occupy. Each has distinct scope, success criterion, and typical-org-size requirement. Most staff engineers settle into one archetype but cross archetypes as circumstances demand.

### 1. Tech Lead

The pragmatic, team-anchored staff engineer. Embedded in a single team, owns architecture and execution for that team's scope. Success measured by team output and technical quality. The most common archetype; the most replicable.

**When to deploy:** team with stable scope, growth-stage company, single-product focus.

### 2. Architect

Cross-team staff engineer who owns a domain (e.g., authentication, data platform, mobile). Success measured by cohesion across teams within the domain. The hardest archetype to hire for because it requires both depth and breadth.

**When to deploy:** mature company with multi-team domains that need consistent architecture.

### 3. Solver

Tactical specialist deployed to the org's hardest single problem at a time. Success measured by unblocking the highest-leverage initiative. Often the most senior IC role; sometimes the founder's right hand.

**When to deploy:** crisis-prone domains, high-variance initiatives, scale transitions.

### 4. Right Hand

Strategic partner to the senior engineering leader (CTO, VP Eng). Success measured by the leader's effectiveness. The archetype most adjacent to management without being a manager.

**When to deploy:** founder-led companies with deep technical CEOs; orgs with non-technical senior leadership.

## The Four Team States

Larson's framework for diagnosing a team's current state and prescribing the right system fix.

### Falling Behind

The team cannot keep up with incoming demand; tickets pile up; quality drops. **System fix: hire.** No process change will catch a team that is materially understaffed.

### Treading Water

The team can keep up with demand but cannot make progress on debt or strategy. **System fix: WIP limits.** Reduce work-in-progress until slack appears; the team needs the slack before it can spend it.

### Repaying Debt

The team has slack and is spending it on debt repayment. **System fix: time and quiet.** Do not interrupt; do not assign new initiatives; protect the work from being repurposed.

### Innovating

The team has slack and is using it for novel work. **System fix: defend slack.** This state is fragile; the default org pressure is to fill the slack. The manager's job is to refuse.

The diagnostic is the work. Misdiagnosing a team's state and applying the wrong system fix is the most common org-management failure mode.

## The Three-Phase Migration Funnel

Migrations are usually the only available avenue to make meaningful progress on technical debt. Three named phases:

### 1. Derisk

Pick the worst cases first. Prove the migration tool/process on the hardest 10% before the easy 90%. If you cannot migrate the worst cases, the migration cannot succeed.

### 2. Enable

The migration tool must be 90% automated, reversible, and self-serve. Reversibility is the load-bearing constraint: folks must be able to immediately return to previous behavior. Without reversibility, producers and consumers will resist.

### 3. Finish

The long tail (10%) is eaten by the migration team directly. Celebrate completion; do not declare victory at 90% complete. Incomplete migrations rot the codebase.

## The Sizing Ratios

The org-design constraints. Deviations are recoverable but should be intentional.

- **6-8 engineers per manager.** Headline span ratio.
- **4-6 managers per senior manager.** Same ratio at the next layer.
- **8-engineer on-call floor.** Below this, on-call burnout is structural.
- **4-engineer team floor.** Below this, "team" is a label on 1-2 ICs.
- **Fission, not founding.** New teams come from splitting existing teams, not from greenfield assembly. The split team inherits the parent team's context.

## Larson's Three-Phase Practice Spreading Pattern

How to spread a practice across an org without political adoption fights:

1. **Model.** Try the practice as an experiment in one team. Run it long enough to see the second-order effects.
2. **Document.** Write up what was learned, with specifics. The write-up is the spreading mechanism.
3. **Share.** Present the write-up without lobbying. Let other teams adopt or not; do not push for adoption decisions.

The counter-pattern is "rolling out" a practice top-down. Larson's frame: top-down rollouts produce compliance, not capability. Modeled-and-documented spreads produce capability without political cost.

## How This Brain Uses the Larson Frames

When evaluating any organizational situation, this brain applies the Larson catalog in order:

1. **What state is this team in?** (Falling behind, Treading water, Repaying debt, Innovating) — diagnosis precedes prescription. Frame 30 in [[Persona]].
2. **Is this a migration, or just a discussion about a migration?** (frame 29). If no named phase, it's a discussion.
3. **Are we moving work or moving people?** (Larson principle). Prefer work moves; reorgs cost months of context-rebuilding.
4. **What's the information flow?** (Larson principle). Most working-relationship friction is information-gap friction. Audit the flow before diagnosing personality.
5. **What archetype does this staff engineer occupy?** Naming the archetype clarifies the success criterion.

## Tensions With Other Pole Frames

- **vs. [[John Allspaw]] resilience-engineering:** Allspaw's "human error is a starting point" applies at the incident layer; Larson's "information gaps drive poor relationships" applies at the org layer. Same shape: the second-story diagnosis beats the surface diagnosis.
- **vs. [[Butler Lampson|Lampson's interface discipline]]:** Lampson's interface as durable contract is the technical analogue of Larson's team-charter as durable contract. Both are about defining the contract that outlives the implementation.
- **vs. [[Andy Grove|Grove's 1:1 discipline]]:** Grove's 1:1 frame is the manager's highest-leverage tool; Larson's information-gap frame names what the 1:1 is for (closing gaps).

## Connections

- [[Will Larson]] entity page
- [[Larson Staff Archetypes]] primary source on the four archetypes
- [[Larson Elegant Puzzle]] primary source on team states + general org-design
- [[Larson Sizing Engineering Teams]] primary source on the sizing ratios
- [[Larson Migrations]] primary source on the three-phase funnel
- [[Operating Principles]] specifically the seven Larson principles in Operating at Scale
- [[Hints for System Design]] Lampson's interface-level counterpart
