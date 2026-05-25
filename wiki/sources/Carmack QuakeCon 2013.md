---
type: source
title: Carmack QuakeCon 2013
address: c-000006
source_type: talk
author: "[[John Carmack]]"
event: QuakeCon 2013
publication_date: 2013-08
duration: ~2.5 hours
url: https://www.youtube.com/watch?v=W3RsQCGiTgA
archive: https://archive.org/details/john-carmack-quakecon-keynotes
fidelity: thematic-summary
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - talk
  - engineering
  - keynote
status: developing
related:
  - "[[John Carmack]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Carmack Inlined Code]]"
---

# Carmack QuakeCon 2013

John Carmack's annual unscripted technical keynote at QuakeCon 2013, ~2.5 hours, no slides, no rehearsal. The QuakeCon keynote series (2011-2019) is itself an engineering artifact: it shows what it looks like when an engineer who has internalized a system deeply can discuss the whole stack without notes.

This particular keynote sits at an inflection point. id Tech 5 had shipped. Carmack had just become Oculus CTO that August (resigned id Software in November 2013). He was publicly thinking through a shift from rendering to interaction, and was deep in his functional programming phase (porting Wolfenstein 3D to Haskell as a learning exercise).

## What He Covered

A partial topic list spanning the 2.5 hours:

- Next-gen consoles (PS4, Xbox One), unified memory
- Mobile (Android, iOS), tiled rendering (PowerVR)
- Large-scale software development discipline
- Optimization
- OpenGL
- Functional programming (Haskell, Lisp, Scheme), strong vs weak typing
- Multithreading, events, garbage collection
- MegaTexture, virtual texturing
- VR (he had just become Oculus CTO), AR, Google Glass
- Voxel, ray tracing
- GPU computing

The engineering-philosophy content lives in the bolded topics. Hardware coverage is dated; the methodology coverage is not.

## Key Themes

### Functional programming as a discipline, not a target language

Carmack publicly committed in 2013 to learning Haskell deeply. The keynote contains his reasoning: the "real enemy" he identified in his 2007 [[Carmack Inlined Code]] essay (unexpected state mutation) is solved directly by pure functions. Strong typing catches bug classes that would otherwise require runtime testing.

He recommends every working programmer learn Haskell or equivalent even if they never ship pure-functional code. The discipline changes how you think when you go back to C++.

### Static analysis is non-negotiable infrastructure

Carmack's QuakeCon 2013 take on shipping production code:

- Compiler warnings are errors.
- Run multiple static analyzers, they catch different bug classes.
- A bug a tool can catch should never reach production.

Same mental model as the Inlined Code essay applied at a different scale: make problems visible before they manifest as runtime failures.

### Optimization is upstream of coding

Recurring Carmack theme:

- Optimization is a planning exercise, not a coding exercise.
- The bottleneck is rarely where you think; profile first.
- Many "optimizations" make the code less optimizable later by obscuring the hot path.
- Architectural decisions early constrain optimization possibilities late.

This is the engineer-planner thesis stated directly: planning is what determines whether optimization is even possible.

### Incremental progress beats master plans

> "Little tiny steps using local information winds up leading to all the best answers."

Carmack on why gradient descent works in ML and why iterative refactoring beats big-bang rewrites in engineering. The same shape applies in both domains: local information, small reversible steps, no central master plan, the optimum emerges.

### Large-scale software erodes unless you fight back

Most production code is worse than it needs to be because of accreted decisions nobody re-examines. Carmack's remedy: periodically tear sections back to first principles, even on shipping projects. This is not the same as rewriting; it is rereading with fresh eyes and the willingness to revise.

### VR as a software problem in disguise

By August 2013 Carmack was already framing VR's challenges as software problems more than hardware problems: latency, sensor fusion, predictive tracking, rendering pipeline cohering within sub-20ms budgets. The keynote previews the engineering planning that would consume the next 6 years of his career.

## Why This Source Matters

The keynote is rare evidence of what engineering thinking-out-loud looks like at the level of a top practitioner. Most engineers never speak this much, this candidly, without preparation, on this much technical surface area. The format itself is an artifact: it requires a depth of system understanding that only comes from years of direct work.

Compared to written essays (which are revised, hedged, polished), the unscripted keynote captures the actual shape of the thinking, including the self-corrections.

## Principles Cited From This Source

(Will be added to [[Operating Principles]] under Engineering Disposition.)

- **Optimization is upstream of coding (it lives in architectural decisions).**
- **Static analysis is non-negotiable; warnings are errors.**
- **Local-information incremental progress beats top-down master plans.**
- **Periodically tear back to first principles, even on shipping projects.**

## Connections

- [[John Carmack]] mentor anchor
- [[Operating Principles]] target for citations
- [[seed-corpus-engineer-planners]] this is source C1 in the corpus
- [[Carmack Inlined Code]] paired source; 2007 essay anticipates 2013 functional-programming pivot
- Adjacent: [[Dean Stanford Talk]] (same "unscripted veteran engineer talking through their craft" format)
