---
type: source
title: Lamport Thinking for Programmers
address: c-000009
source_type: talk
author: "[[Leslie Lamport]]"
event: Microsoft Build 2014
publication_date: 2014-04
url: https://www.microsoft.com/en-us/research/video/thinking-for-programmers-rising-above-the-code/
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - talk
  - engineering
  - formal-methods
status: developing
related:
  - "[[Leslie Lamport]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Carmack Plan Archive 1998]]"
---

# Lamport Thinking for Programmers

Lamport's 2014 Microsoft Build keynote distilling decades of his argument that programmers should write specifications before code. The talk is methodological, not technical. Lamport does not advocate TLA+ specifically; he advocates the discipline of writing down what a system is supposed to do before writing it.

## Key Claims

### Writing is the medium of thinking

> "Writing is nature's way of letting you know how sloppy your thinking is."

> "To think, you have to write. If you think without writing, you only think you're thinking."

> "Everyone thinks they think. If you don't write down your thoughts, you're fooling yourself."

The argument: thinking is not a thing that happens silently in your head. Writing is what makes it real and exposes its gaps. Most engineering decisions are not thought through, because the thinker never wrote them down.

### Specification is a separate task from coding

> "No programming language, no methodology, obviates the need for specification. A specification is a separate task from coding."

The claim cuts across the language wars and the methodology wars. Strong type systems do not replace specs. Dynamic languages do not replace specs. Agile, Waterfall, TDD: none of them address the question the spec addresses, which is "what is the system supposed to do?".

### Code without spec is patches

> "If you don't start with a spec, every piece of code you write is a patch."

Code written without a spec is not code; it is patches on a problem not yet defined. Each patch creates new patch surface. The system grows without intention.

### Thinking does not eliminate mistakes; not thinking guarantees them

> "Thinking doesn't guarantee that you won't make mistakes. Not thinking guarantees that you will."

Minimal claim. Lamport is not promising specs eliminate bugs. He is promising the alternative ensures them.

### The math is accessible; the resistance is cultural

> "The mathematics needed for writing specifications is simpler than any programming language: basically undergraduate-level discrete math, including first-order logic, sets, and functions."

> TLA+ described as "a quixotic attempt to overcome engineers' antipathy towards mathematics."

The barrier is not technical. It is psychological: programmers have learned to identify with the act of coding and resist the act of specifying.

### The architect analogy

An architect would never start building without blueprints. Programmers routinely start "building" without drawing anything. Blueprints are not validation; they are the medium for the thinking that has to happen before construction. A TLA+ spec is the engineering equivalent.

## Principles Cited From This Source

(Will be added to [[Operating Principles]] under Engineering Disposition.)

- **Writing is the medium of thinking.** Unwritten thoughts are not thoughts.
- **Specification is a separate task from coding.** No language replaces it.
- **Code without a spec is patches on an undefined problem.**
- **Not thinking guarantees mistakes; thinking only reduces them.**

## Connections

- [[Leslie Lamport]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-engineer-planners]] source L1
- [[Carmack Plan Archive 1998]] same shape (writing decisions down with reasoning) in informal prose
- [[Bezos 2016 Day 1 Letter]] same shape (written memos before meetings, decisions made real by writing)
