---
type: source
title: Carmack Inlined Code
address: c-000005
source_type: essay
author: "[[John Carmack]]"
publication_date: 2007-09-09
url: http://number-none.com/blow/john_carmack_on_inlined_code.html
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - essay
  - engineering
  - code-style
status: developing
related:
  - "[[John Carmack]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
---

# Carmack Inlined Code

A 2007 email John Carmack sent to id Software programmers, later published with his permission. Ostensibly about inlining functions, actually about programmer judgment, state mutation, and why mechanical style rules fail.

Cited as one of the most influential short pieces of practitioner writing on coding style.

## Origin Context

Carmack opens by referencing a real experiment: he inlined all subroutines in the Armadillo Aerospace flight control code (a few thousand lines). The exercise revealed bugs hiding inside the function decomposition. The essay generalizes from that experience.

## Key Claims

### Awareness of what actually runs is the discipline

> "Awareness of all the code that is actually executing is important, and it is too easy to have very large blocks of code that you just always skip over while debugging."

Function decomposition hides execution flow. The reader of a chain of calls cannot easily see what runs in what order. Inlining makes the order explicit.

### Order of execution matters more than function boundaries

> "If something is going to be done once per frame, there is some value to having it happen in the outermost part of the frame loop, rather than buried deep inside some chain of functions."

> "If everything is just run out in a 2000 line function, it is obvious which part happens first, and you can be quite sure that the later section will get executed before the frame is rendered."

### The partial-call bug is the canonical hazard

> "There might be a FullUpdate() function that calls PartialUpdateA() and PartialUpdateB(), but in some particular case you may realize (or think) that you only need to do PartialUpdateB()."

A subset of the actual required work runs, the system is in a partial state, and the bug is invisible at the call site.

### Function-size rules are wrong

> "I now specifically disagree" (with rules limiting function size to a page or two).

Carmack rejects mechanical style rules in favor of contextual judgment. A 2000-line function is fine if sequential visibility matters; a 50-line function is fine if it is genuinely reusable. The rule is the wrong unit.

### The real enemy is state mutation, not function length

> "The real enemy addressed by inlining is unexpected dependency and mutation of state, which functional programming solves more directly."

> "Most bugs are a result of the execution state not being exactly what you think it is."

Inlining is one technique for making mutation visible. Pure functions are another. The deep goal is the same: make state changes legible.

### Copy-paste-modify is the most common bug pattern

> "I now strongly encourage explicit loops for everything, and hope the compiler unrolls it properly."

Tracking his own bug history, Carmack found copy-paste-modify operations were the most common source. Loop the operation; trust the compiler to unroll.

### Style is a means, not an end

> "Strictly functional functions that only read their input arguments and just return a value without examining or modifying any permanent state are safe from these types of errors."

But:

> "I don't think that purely functional programming writ large is a pragmatic development plan, because it makes for very obscure code and spectacular inefficiencies."

The 2014 addendum has Carmack much more bullish on functional programming, having gone deeper into Haskell. The 2007 essay is a snapshot of someone reasoning toward that destination from a C++ practitioner's vantage.

## Principles Cited From This Source

(Will be added to [[Operating Principles]] under Engineering Disposition.)

- **Programmer judgment beats mechanical style rules.**
- **The real enemy is unexpected state mutation; visibility is the cure.**
- **Most bugs come from execution state not matching mental state.**
- **Track your own bug history; the patterns will surprise you.**

## Connections

- [[John Carmack]] mentor anchor
- [[Operating Principles]] target for citations
- [[seed-corpus-engineer-planners]] this is source C2 in the corpus
- Adjacent in spirit: [[Karpathy Recipe for Training Neural Networks]] (the same "patience and attention to detail beats fancy methodology" frame, applied to ML rather than code style)
