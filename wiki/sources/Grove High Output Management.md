---
type: source
title: Grove High Output Management
address: c-000151
source_type: book
author: "[[Andy Grove]]"
publication: Random House, 1983 (revised Vintage Books, 1995)
publication_date: 1983
url: https://www.amazon.com/High-Output-Management-Andrew-Grove
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - book
  - operating-at-scale
  - management
  - grove
  - okr
status: mature
related:
  - "[[Andy Grove]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-operating-at-scale]]"
  - "[[High Output Management]]"
  - "[[Grove OKR Origin]]"
  - "[[Scaling Operations]]"
---

# Grove High Output Management

The canonical engineering-management text. Written by [[Andy Grove]] originally as an Intel internal management course, published by Random House in 1983, revised in 1995. Endorsed by [[Patrick Collison]], cited by [[Jeff Bezos]], required reading at Stripe and a generation of unicorn operators. The single most-cited management book in the technology industry.

This page is the canonical primary-source extract. The existing stub at [[High Output Management]] is preserved as a historical artifact; the deeper structural content lives here.

## Provenance

- Author: Andrew S. Grove
- Publication: Random House (1983); revised Vintage Books (1995)
- Pages: ~272
- Structure: 4 parts, 16 chapters. Part I (The Basics of Production), Part II (Management is a Team Game), Part III (Team of Teams), Part IV (The Players).
- Fidelity: extracts. Direct passages reproduced below from the most-cited chapters.

## Why This Source Matters

Grove built a coherent theory of management work from production-engineering first principles. Most management writing is folk wisdom; HOM is operations research applied to knowledge work by an engineer who happened to be CEO of the most important semiconductor company in the world. The structural rigor is what makes the book outlast every management trend that followed.

## Chapter 1: The Basics of Production (The Breakfast Factory)

Grove's pedagogical move: open the book with a breakfast factory. Eggs, toast, coffee. Each item has a production time; the manager's job is to schedule the longest-lead-time item first so all three arrive hot together. Identify the limiting step. Measure throughput. Reduce work-in-progress.

> The basic requirement of production is to deliver products in response to the demands of the customer at a scheduled delivery time, at an acceptable quality level, and at the lowest possible cost.

The transfer to management work is explicit. Substitute "decisions" for "breakfasts." Knowledge work has inputs, processes, outputs, bottlenecks. The manager who cannot identify the bottleneck in their org cannot manage it.

> We must apply our efforts to those things that will increase the output of our organization.

## Chapter 3: Managerial Leverage

The core chapter. The managerial output equation appears here:

> A manager's output = the output of his organization + the output of the neighboring organizations under his influence.

The reframe is structural. The manager's individual work product is the wrong unit of measurement. The team's output is the right one, plus the spillover into adjacent teams.

> The art of management lies in the capacity to select from the many activities of seemingly comparable significance the one or two or three that provide leverage well beyond the others and concentrate on them.

Grove names the highest-leverage activities explicitly:

> Training is, quite simply, one of the highest-leverage activities a manager can perform. Consider for a moment the possibility of your putting on a series of four lectures for members of your department. Let's count on three hours of preparation for each hour of course time, twelve hours of work in total. Say that you have ten students in your class. Next year they will work a total of about twenty thousand hours for your organization. If your training efforts result in a 1 percent improvement in your subordinates' performance, your company will gain the equivalent of two hundred hours of work as the result of the expenditure of your twelve hours.

The arithmetic is the point. Twelve hours in, two hundred hours out. The same logic does not apply to status reports or meetings about meetings, which is why those activities should be ruthlessly minimized.

## Chapter 4: Meetings (The Medium of Managerial Work)

Grove distinguishes process-oriented meetings (regular, scheduled, informational) from mission-oriented meetings (ad hoc, decision-oriented). The first kind should be routine and short. The second kind should be reserved for actual decisions.

> Meetings are the medium of managerial work. You can either run them well or run them poorly, but you can't avoid having them.

The implication: stop treating meetings as a failure mode. Treat them as the workplace itself, and engineer the workplace.

## Chapter 8: The One-on-One (Hybrid Organizations)

The chapter most-quoted in modern startup operations. Grove's recipe for the 1:1 is specific:

> A one-on-one should be regarded as the subordinate's meeting, with its agenda and tone set by him. There's good reason for this. Somebody needs to prepare for the meeting. The supervisor, with eight other subordinates, would have to prepare eight times; the subordinate only once.

> The supervisor is there to learn and to coach.

The structure is load-bearing. Without the subordinate-led agenda, the 1:1 degrades into a manager status update, which is worthless.

> What should be covered in a one-on-one? We can start with performance figures, indicators used by the subordinate, such as incoming order rates, production output, or project status. Emphasis should be on indicators that signal trouble. The meeting should also cover anything important that has happened since the last meeting: current hiring problems, people problems in general, organizational problems and future plans, and, very importantly, potential problems.

On frequency:

> The frequency of one-on-ones should be a function of the task-relevant maturity of each subordinate.

## Chapter 9: Meetings (Operations Reviews and the Decision-Making Process)

The pre-decision dissent / post-decision commitment frame appears in this chapter and in the operations reviews material. Grove insists that decisions made without dissent are worse than decisions made with it, and that dissent must be invited explicitly because organizational politeness suppresses it by default.

## Chapter 13: Task-Relevant Maturity

Grove introduces TRM as the calibration variable for management style:

> When the subordinate's task-relevant maturity is low, the most effective style is one that offers very precise and detailed instructions, wherein the supervisor tells the subordinate what needs to be done, when, and how: a highly structured style. As the task-relevant maturity of the subordinate grows, the most effective style moves from the structured to one more given to communication, emotional support, and encouragement. Finally, as the subordinate's task-relevant maturity becomes very high, the effective management style is to leave the subordinate alone.

The implication is uncomfortable: managers must vary their style by report and by task, not adopt a single "leadership style." The senior engineer newly promoted to manager has TRM zero in management and needs structured supervision in the new role, regardless of seniority.

## OKRs (Chapter on Planning)

Grove's planning chapter introduces the precursor of OKRs (he called them Objectives and Key Results in the book). Detailed in [[Grove OKR Origin]]; the brief version here is that Grove built OKRs as Intel's translation of Drucker's MBO into a quarterly, public, scored system that aligned distributed teams without micromanagement.

## What This Brain Takes

- **Managerial Output Equation.** Replaces "manager's individual output" with "team output + neighboring team influence."
- **Three high-leverage activities.** Pick them. Ignore everything else.
- **Training is the highest-leverage activity, full stop.** Do not outsource it to HR.
- **The 1:1 is subordinate-led, 90 minutes, frequency calibrated to TRM.** Without that structure, it is a status update.
- **TRM, not seniority, calibrates style.** Senior person, new task, low TRM, structured style.
- **Meetings are the medium, not the failure.** Engineer them.
- **Pre-decision dissent welcomed; post-decision commitment required.**

## Principles Cited From This Source

- **The manager's output is the team's output plus neighbor influence.** ([[Operating Principles]] Operating at Scale)
- **Concentrate on one to three high-leverage activities; ignore the rest.**
- **Training is the highest-leverage activity a manager can do.**
- **The 1:1 is the subordinate's meeting; the manager prepares to listen.**
- **Task-Relevant Maturity calibrates style, not seniority.**
- **Meetings are the workplace; engineer them like operations.**

## Connections

- [[Andy Grove]] mentor anchor
- [[Operating Principles]] Operating at Scale section
- [[seed-corpus-operating-at-scale]] source G1
- [[High Output Management]] existing stub; preserved as historical artifact
- [[Grove OKR Origin]] companion source; OKR mechanics in depth
- [[Scaling Operations]] downstream concept page
