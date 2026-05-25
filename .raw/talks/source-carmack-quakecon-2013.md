---
source_id: carmack-quakecon-2013
title: "QuakeCon 2013 Keynote"
author: John Carmack
event: QuakeCon 2013 (Dallas, TX)
date: 2013-08
duration: ~2.5 hours (unscripted)
canonical_video: https://www.youtube.com/watch?v=W3RsQCGiTgA
archive: https://archive.org/details/john-carmack-quakecon-keynotes
coverage_url: https://pcper.com/2013/08/john-carmack-keynote-quakecon-2013/
fetch_method: WebSearch + coverage article (full transcript not retrieved; topic map + cross-referenced themes from biographical and Hacker News discussion sources)
fetch_date: 2026-05-26
fidelity: thematic-summary (topic structure verified; specific quote attributions limited to those cross-confirmed via multiple coverage sources)
license_note: Public keynote, recordings hosted publicly. Quoted under fair use.
---

# Source, Carmack QuakeCon 2013 Keynote

## What This Is

The QuakeCon keynotes (2011-2019) are Carmack's annual unscripted technical monologue at the id Software fan convention. Two to three hours, no slides, no rehearsal. The 2013 keynote is one of the most-cited in the series because it captured Carmack at the inflection point: id Tech 5 shipped, Oculus acquisition just happened (he became CTO in August 2013), and he was publicly thinking through a shift from pure rendering to interaction.

## Topic Map (~2.5 hours covered)

- Next-generation consoles (PS4, Xbox One launch was that fall)
- AMD hardware, unified memory architecture
- Game controllers, Kinect, motion input
- Digital distribution
- Portable consoles, Android, iOS
- Cloud gaming
- Creative vision vs technology
- PowerVR and tiled rendering
- Displays, head-mounted displays
- Movement tracking, sound
- **Large-scale software development**
- **Optimization**
- **OpenGL**
- **Functional programming, Haskell, Lisp, Scheme**
- **Strong vs weak typing**
- **Multithreading, events, garbage collection**
- QuakeC vs Scheme programming
- AMD vs Nvidia vs Intel GPUs
- CPU architectures
- GPU computing
- id Tech 5
- MegaTexture
- Virtual reality, augmented reality, Google Glass
- Voxel, ray tracing
- AMD's virtual texturing

The bolded topics are the engineering-philosophy content this source matters for.

## The Functional Programming Pivot (~2013 Era)

QuakeCon 2013 is the keynote where Carmack publicly declared his interest in functional programming. He had been writing Haskell on the side, porting Wolfenstein 3D to Haskell as a learning exercise. The keynote contains his reasoning:

- The "real enemy" identified in his 2007 Inlined Code essay (unexpected state mutation) is solved directly, not approximately, by pure functions.
- Strong typing catches whole bug classes that would otherwise require runtime testing.
- The discipline of functional programming changes how you think about a system even when you go back to C++.

He explicitly recommends programmers learn Haskell or another pure functional language even if they never ship code in it.

## On Large-Scale Software Development

The recurring theme: most production code is worse than it needs to be because of accreted decisions nobody re-examines. His remedy is to periodically tear back to first principles, even on shipping projects.

Carmack at QuakeCon 2013 advocates static analysis as a non-negotiable:

- Treat compiler warnings as errors.
- Run multiple static analyzers; they catch different bug classes.
- A bug that a tool can catch is a bug that should never reach production.

This is the same mental model as the 2007 essay applied at a different level: make problems visible before they manifest as runtime failures.

## On Optimization

A recurring Carmack theme he expanded on in 2013:

- Optimization is a planning exercise, not a coding exercise.
- The bottleneck is rarely where you think; profile first.
- Many "optimizations" make the code less optimizable later by obscuring the hot path.
- Architectural decisions made early constrain optimization possibilities late.

## On VR (Pre-Oculus Resignation from id)

By August 2013 Carmack was already CTO at Oculus while still at id Software (he resigned from id in November 2013). The keynote includes his framing of VR as a software problem more than a hardware problem: latency, sensor fusion, predictive tracking, and the rendering pipeline working together within sub-20ms budgets.

## Carmack's Communication Pattern (Visible in This Keynote)

- Unscripted, extemporaneous reasoning out loud
- No deference to audience comfort, deep technical content delivered at full speed
- Frequent self-correction and concession ("I was wrong about X for a long time")
- Examples from current work, not abstract hypotheticals
- Direct attribution when borrowing ideas

The keynote format is itself an artifact: it shows what engineering planning looks like when the planner has internalized the system deeply enough to discuss it without notes.

## Carmack on Incremental Progress (Often Cited)

> "Little tiny steps using local information winds up leading to all the best answers."

This frame applies to both algorithms (gradient descent works because of this) and engineering planning (refactor in small reversible steps, not big rewrites).

## What This Source Teaches

- The annual unscripted technical talk is itself an engineering artifact, and a rare one.
- Functional programming is worth studying for the discipline even if you never ship pure-functional code.
- Static analysis is non-negotiable infrastructure.
- Optimization is upstream of coding; it lives in architecture decisions.
- Local-information incremental progress beats top-down master plans.
