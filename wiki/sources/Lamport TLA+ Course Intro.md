---
type: source
title: Lamport TLA+ Course Intro
address: c-000010
source_type: course
author: "[[Leslie Lamport]]"
url: https://lamport.azurewebsites.net/video/videos.html
publication_date: 2018
fidelity: structural-summary
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - course
  - engineering
  - formal-methods
status: developing
related:
  - "[[Leslie Lamport]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Lamport Thinking for Programmers]]"
---

# Lamport TLA+ Course Intro

Lamport's own video lecture series on TLA+ and PlusCal, taught for working programmers. He created it after publishing the Hyperbook (a hypertext textbook) and noticing that, in his own words, "people don't read anymore". The video course is his pragmatic response to the cultural barrier the book did not cross.

The introductory lectures (first 3-5) cover the why and when of formal specification before any TLA+ syntax. This is the engineer-planner content. Later lectures cover the language itself, which serves the methodology.

## What the Course Teaches in the Intro

### TLA+ is a means, not an end

The end is precise thinking about concurrent and distributed systems. TLA+ is the notation that makes the thinking possible. Other notations might work; this is the one Lamport validated through decades of use.

### Mechanical checking is the feedback loop

The argument for TLA+ over informal math notation: TLA+ is mechanically checkable. You write a spec, the model checker tells you whether your spec is consistent. The math notation does not give you that feedback loop.

This is what turns specification from documentation into thinking. Documentation is written and forgotten; specification is written and checked, and the checking surfaces inconsistencies you would not have noticed.

### Small specs surface deep questions

The intro lectures typically use:

- A distributed counter (two processes, what consistency do you get)
- The dining philosophers problem
- A two-phase commit (surfaces failure-handling questions)

The pattern: pick a small system whose spec fits on a slide, write it, observe what the spec forces you to confront. The forced confrontations are the lesson. You discover what you did not understand by trying to write it down.

### Lamport's teaching style

The course is taught by Lamport himself with the patience of someone who has explained Paxos a thousand times and noticed which steps confuse people:

- Starts from the problem (what goes wrong without specs), not the syntax
- Uses concrete distributed counter examples before abstract theory
- Acknowledges the math objection early and addresses it directly
- Builds up TLA+ syntax slowly, one concept per lecture
- Repeats key points across lectures with different examples

The slowness is the point: the discipline being taught is precisely the discipline of not rushing past the conceptual scaffolding.

### Why he made the course

> "The Hyperbook is unfinished because people don't read anymore and I made the video course."

Lamport's honest pragmatic admission. The discipline of specification is so valuable that he is willing to teach it in any medium that gets the message across. The medium is incidental; the message is the thing.

## Principles Cited From This Source

(Will be added to [[Operating Principles]].)

- **The model checker is the feedback loop.** Specifications without checking are documentation; specifications with checking are thinking.
- **Small specs surface deep questions.** A two-page spec of a counter reveals questions a thousand lines of code would not.
- **Discipline taught slowly is the point.** Rushing past conceptual scaffolding produces shallow understanding that fails under load.

## Connections

- [[Leslie Lamport]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-engineer-planners]] source L2
- [[Lamport Thinking for Programmers]] paired source; the talk argues for the discipline, the course teaches it
- Adjacent: [[Karpathy Recipe for Training Neural Networks]] (same shape: start with the smallest meaningful test, watch what it surfaces)
