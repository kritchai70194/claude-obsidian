---
type: entity
title: John Carmack
entity_type: person
role: Founder, Keen Technologies. Formerly id Software, Oculus VR. Distinguished engineer-planner.
address: c-000003
first_mentioned: "[[seed-corpus-engineer-planners]]"
created: 2026-05-26
updated: 2026-05-26
tags:
  - entity
  - person
  - engineer
  - mentor
  - engineer-planner
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Leslie Lamport]]"
  - "[[Carmack Inlined Code]]"
  - "[[Carmack QuakeCon 2013]]"
  - "[[Carmack Lex Fridman 309]]"
  - "[[Carmack Plan Archive 1998]]"
  - "[[entities/_index]]"
sources:
  - "[[Carmack Inlined Code]]"
  - "[[Carmack QuakeCon 2013]]"
  - "[[Carmack Lex Fridman 309]]"
  - "[[Carmack Plan Archive 1998]]"
---

# John Carmack

Founder of Keen Technologies (AGI research, 2022-). Previously co-founder and lead programmer at id Software (Wolfenstein 3D, Doom, Quake, 1991-2013), CTO at Oculus VR (2013-2019), independent VR consultant (2019-2022). Three Emmy awards for graphics engineering. Holds key patents on real-time 3D rendering algorithms still in use.

Anchor mentor on the **engineer-planner pole** of this brain's [[Persona]]. The pragmatic, deep, sustained individual excellence archetype. Where the Technical CEO mentors think in customer obsession and capital allocation, Carmack thinks in architecture, latency budgets, and the discipline of planning before coding.

---

## Why This Mentor

Few engineers have shipped at the technical frontier for 30+ years. Carmack's body of work spans 2D scrolling (Commander Keen, 1990), real-time 3D (Doom, 1993), shader programming (Quake III, 1999), VR (Oculus, 2013), and now AGI architecture (Keen, 2024-). At each transition he rewrote his mental model from first principles.

The `.plan` files he kept publicly visible from 1996-2003 invented the cultural form of "build in public" engineering thinking. The QuakeCon keynotes (annual 2-3 hour unscripted talks, 2011-2019) are an unmatched corpus of an engineer thinking out loud about architecture, optimization, and judgment.

Frames here: plan the architecture in your head before writing code; deep over broad; first-principles over received wisdom; programmer judgment beats rules; the long-lived thing is the structure, not the syntax.

---

## Primary-Source Citations

### From [[Carmack Inlined Code]] (2007 email)

A 2007 email to id Software programmers about inlining vs extracting functions, opening from a concrete experiment: inlining all subroutines in the Armadillo Aerospace flight control code (a few thousand lines). The act of inlining revealed bugs the function decomposition had hidden.

The deep claim:

> "The real enemy addressed by inlining is unexpected dependency and mutation of state, which functional programming solves more directly."

> "Most bugs are a result of the execution state not being exactly what you think it is."

On rejecting mechanical style rules:

> "I now specifically disagree" (with rules limiting function size to a page or two).

On visibility into execution flow:

> "Awareness of all the code that is actually executing is important, and it is too easy to have very large blocks of code that you just always skip over while debugging."

On the partial-call bug, the canonical hazard of decomposed code:

> "There might be a FullUpdate() function that calls PartialUpdateA() and PartialUpdateB(), but in some particular case you may realize (or think) that you only need to do PartialUpdateB()."

On copy-paste-modify as the most common bug source:

> "I now strongly encourage explicit loops for everything, and hope the compiler unrolls it properly."

### From [[Carmack QuakeCon 2013]] (annual keynote)

The QuakeCon keynote series (2011-2019) is itself an engineering artifact: ~2.5 hours, unscripted, no slides. The 2013 keynote is at an inflection point. id Tech 5 had shipped, Oculus acquisition had just happened (Carmack became CTO that August), and he was deep in his functional programming phase.

Three durable points from the 2013 keynote:

1. **Functional programming as a discipline, not a target language.** Learn Haskell deeply even if you ship in C++; the discipline changes how you think when you return.
2. **Static analysis is non-negotiable.** Warnings are errors. Run multiple analyzers; they catch different bug classes. A bug a tool can catch should never reach production.
3. **Optimization is upstream of coding.** It lives in architectural decisions. Many "optimizations" make the code less optimizable later by obscuring the hot path.

The often-quoted line on incremental progress:

> "Little tiny steps using local information winds up leading to all the best answers."

The QuakeCon format itself is the artifact: showing what engineering thinking-out-loud looks like at the level of someone who has internalized the system deeply enough to discuss the whole stack without notes.

---

## Core Frames (now backed by citations)

- **Programmer judgment beats mechanical style rules.** ([[Carmack Inlined Code]]) Rules about function size, decomposition, or "best practice" are usually wrong in the specific. Context decides.
- **The real enemy is unexpected state mutation; visibility is the cure.** ([[Carmack Inlined Code]]) Whether you achieve visibility through inlining or through pure functions matters less than achieving it.
- **Static analysis is non-negotiable infrastructure.** ([[Carmack QuakeCon 2013]]) Warnings are errors; a bug a tool can catch should never reach production.
- **Optimization is upstream of coding.** ([[Carmack QuakeCon 2013]]) It lives in architecture decisions made early, not in micro-optimizations late.
- **Local-information incremental progress beats top-down master plans.** ([[Carmack QuakeCon 2013]]) "Little tiny steps using local information winds up leading to all the best answers."
- **Functional programming as discipline, not target.** ([[Carmack QuakeCon 2013]]) Learning Haskell changes how you write C++ even if you never ship Haskell.
- **Track your own bug history.** ([[Carmack Inlined Code]]) The patterns will surprise you; rules derived from your own data beat rules derived from books.
- **Protected focus is the substrate for engineering output.** ([[Carmack Lex Fridman 309]]) Long unbroken sessions are the raw material; technique without them produces nothing durable.
- **Read code more than you write code.** ([[Carmack Lex Fridman 309]]) The reverse-engineering skill is rarer and more valuable than the writing skill.
- **Willingness to throw away your own code.** ([[Carmack Lex Fridman 309]]) The second-most-important engineering discipline after focus.
- **Write your engineering decisions down with reasoning.** ([[Carmack Plan Archive 1998]]) Even when no one reads them. Writing forces the trade-offs to surface.
- **Public commitment improves decision quality.** ([[Carmack Plan Archive 1998]]) A small public commitment makes the decision real in a way an unrecorded thought does not.

---

## Queued for Future Ingest

See [[seed-corpus-engineer-planners]] Carmack sources C1-C4:
- QuakeCon 2013 keynote
- "John Carmack on Inlined Code" essay (2007)
- Lex Fridman Podcast #309 (2022)
- Selected .plan file entries (1996-2000)

After this batch, deferred to a future corpus iteration:
- QuakeCon 2011, 2012, 2015, 2016, 2017, 2018, 2019 keynotes (corpus of ~20 hours)
- Oculus Connect keynotes (2014-2018)
- Recent Keen Technologies talks and writing

---

## Status

Mature. Four sources ingested: [[Carmack Inlined Code]], [[Carmack QuakeCon 2013]], [[Carmack Lex Fridman 309]], [[Carmack Plan Archive 1998]]. Operating frame is stable. Further ingest would deepen specific topics (functional programming, VR/Oculus era, recent AGI work) rather than the core frame.

---

## Connections

- [[Persona]] anchors this brain's operating identity
- [[Leslie Lamport]] complementary engineer-planner mentor (formal pole)
- [[Jeff Dean]] adjacent in the "systems engineer mentor" cluster
- [[Operating Principles]], Engineering Disposition section
- [[seed-corpus-engineer-planners]]
