---
type: source
title: "Larson Sizing Engineering Teams"
address: c-000267
author: "[[Will Larson]]"
year: 2017
source_url: "https://lethain.com/sizing-engineering-teams/"
fidelity: full-text-summary
raw_file: .raw/source-larson-sizing-engineering-teams.md
created: 2026-05-28
updated: 2026-05-28
tags: [source, larson, engineer-planner, staff-engineer, org-design]
status: mature
related:
  - "[[Will Larson]]"
  - "[[Operating Principles]]"
  - "[[Staff Engineer Ladder]]"
  - "[[Org Design]]"
  - "[[John Allspaw]]"
---

# Larson "Sizing Engineering Teams" (2017)

[[Will Larson]]'s short, load-bearing essay on the right shape of an engineering org. It supplies the headline numbers that recur throughout *An Elegant Puzzle* and the StaffEng guides: how many engineers a manager should support, how many managers a senior manager should support, the on-call floor, and the lower bound below which a "team" is not a team.

## Provenance

- Author: [[Will Larson]]
- URL: https://lethain.com/sizing-engineering-teams/
- Raw extract: `.raw/source-larson-sizing-engineering-teams.md`
- Fidelity: full-text-summary with verbatim quotes on each headline ratio

## Headline Takeaway

Engineering org structure has a small number of tight ratios that almost always apply. Most pathologies of growth (manager burnout, on-call exhaustion, "teams" that are really individuals, fast-promoted managers stuck as coaches) are deviations from these ratios, and the fix is structural, not motivational.

## The Four Ratios

1. **Manager-to-engineer:** "Managers should support 6-8 engineers." Below 4, the manager defaults to being a tech-lead-manager (TLM) and stalls. Above 8-9, the manager defaults to a coach role and cannot invest in the domain.
2. **Manager-to-manager:** "Managers should support 4-6 managers." Below 4, the manager-of-managers is still ramping. Above 6, the same coach-only failure mode.
3. **On-call rotation floor:** "Oncall rotations want 8 engineers" for sustainable 24/7 two-tier coverage. Shared rotations across teams are explicitly framed as a temporary patch, not a steady state.
4. **Team-as-team floor:** "Small teams (<4) are not teams." Larson states he has "regretted it every single time" he has sponsored a 1-2 person team. Below 4, the unit functions as individuals.

## Manager Role Failure Modes

Each deviation from the headline ratios produces a named, predictable failure mode:

- **Tech Lead Manager:** fewer than four direct reports. The manager handles design and implementation alongside management. "A role with limited career progression."
- **Coach:** more than eight or nine direct reports. The manager functions purely as a problem-solver, "unable to actively invest in their teams or domains."
- **Ramping Up:** fewer than four manager-reports. Active learning phase, not steady state.

The implication: an org chart that is mostly TLMs and Coaches is one whose managers cannot grow, because they are pinned to the wrong shape.

## The Playbook for Team Formation

- Stable operating size: **6-8 engineers per team.**
- New teams emerge by **growing existing teams to 8-10, then splitting into two groups of 4-5.**
- Never establish empty teams.
- Never let a manager exceed eight direct reports.

The pattern is fission, not founding: teams come from mature teams that split, not from a manager being handed empty seats and told to hire.

## Frames Cited

- [[Will Larson]] (whole essay): the headline ratios as universal defaults.
- [[John Allspaw]]: shared "the structural conditions, not the individuals, produce the failure" frame. Allspaw applies it to incidents; Larson applies it to manager burnout and team dysfunction.

## Connection to the Brain

This essay is the **numerical backbone** of the engineer-planner pole's org-design view:

- When a manager complains of burnout, ask: are they at 6-8, 4-6, or off the chart?
- When a team feels "stuck" but the engineers are strong, check whether the team is below 4 (not a team) or above 10 (no longer a single coordination unit).
- When proposing an on-call rotation, refuse to ship it below 8 unless it is explicitly time-boxed.
- When proposing a new team, refuse to staff it empty. Grow then split.

These rules are concrete, refutable, and easy to apply mid-decision, which is what makes them load-bearing.
