---
type: concept
title: Planning Before Code
address: c-000013
complexity: intermediate
domain: engineering-discipline
aliases:
  - Write Before Code
  - Spec Before Implementation
  - Planning Discipline
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - engineering
  - planning
  - discipline
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[John Carmack]]"
  - "[[Leslie Lamport]]"
  - "[[Jeff Bezos]]"
  - "[[Carmack Plan Archive 1998]]"
  - "[[Lamport Thinking for Programmers]]"
  - "[[Bezos 2016 Day 1 Letter]]"
  - "[[Formal Specification Discipline]]"
---

# Planning Before Code

The engineering discipline of writing down what a system is supposed to do, with reasoning, before writing the code. Across mediums and rigor levels, the discipline has the same shape: the act of writing forces the trade-offs to surface; the artifact commits you to a position the implementation must then serve.

This page synthesizes the discipline as practiced across three traditions visible in the brain's mentor bench:

1. **Carmack's `.plan` files** (1996-2003), informal prose engineering log made public via Unix `finger`
2. **Lamport's TLA+** (1999-present), formal mathematical specification with mechanical model checking
3. **Bezos's written memos** (1997-present), narrative six-pagers required before any decision meeting

Three traditions, one underlying claim: the writing is the thinking, and the act of writing is what discovers what you did not yet understand.

---

## The Three Traditions

### Carmack: prose specs, public

[[Carmack Plan Archive 1998]] shows the discipline at the prose level. Carmack used his `.plan` file as a public engineering journal: posted irregularly, written in plain text, addressing the team and the wider community simultaneously.

The pattern from his entries:

> "The networking architecture for Quake 2 was just not the right thing. The interpolating 10 hz server made a lot of animation easier...but it just wasn't a good thing for internet play." (June 8, 1998)

> "Quake 3 will have an all new entity communication mechanism that should be solidly better than any previous system."

Name the prior wrong decision, explain why it was wrong, commit publicly to the redesign. Each `.plan` entry is a small commitment made real by being written and made public.

### Lamport: formal specs, mechanically checked

[[Lamport Thinking for Programmers]] argues the same discipline at higher rigor. Lamport's claim:

> "Writing is nature's way of letting you know how sloppy your thinking is."

> "If you don't start with a spec, every piece of code you write is a patch."

> "Thinking doesn't guarantee that you won't make mistakes. Not thinking guarantees that you will."

Where Carmack's `.plan` is verified by public readership (his community will catch obvious wrongness), Lamport's TLA+ spec is verified by mechanical model checking (the TLC tool will catch consistency errors). Different feedback loops, same shape.

### Bezos: narrative memos, organizational

[[Bezos 2016 Day 1 Letter]] and the Amazon "six-pager" practice show the discipline at the organizational level. Meetings begin with 30 minutes of silent reading of a narrative document. The author wrote the memo to force the trade-offs to surface; the readers read it because the document does the thinking work that bullet points cannot.

> Bezos's argument: "Memos are real work. Bullet points hide weak thinking." (paraphrased frame consistent across his shareholder letters)

The press-release-first discipline ("Working Backwards") is the same shape applied to product decisions: write the press release before building the product. If the press release isn't exciting, the product isn't worth building.

---

## What All Three Have in Common

### Writing is the medium of thinking

The deepest claim. Writing is not documentation of pre-existing thoughts; writing is what makes thinking possible. The act of trying to write the explanation discovers what you did not understand.

> "To think, you have to write. If you think without writing, you only think you're thinking." ([[Lamport Thinking for Programmers]])

> "Most bugs are a result of the execution state not being exactly what you think it is." ([[Carmack Inlined Code]])

> Bezos's memo discipline forces the same surfacing: the bullet-point version felt sufficient; the prose version reveals the gap.

### Commitment changes the quality of the decision

Once written, a decision is committed in a way that an unwritten thought is not. The cost of changing it is real (you have to rewrite); the visibility is real (others can read and challenge).

A `.plan` entry, a TLA+ spec, and a six-page memo all share this property: the artifact is harder to dismiss than the original thought was.

### The feedback loop is what makes it thinking, not documentation

Each tradition has a feedback loop:

| Tradition | Feedback loop |
|---|---|
| Carmack `.plan` | Public readership; community will respond to obvious wrongness |
| Lamport TLA+ | Model checker; mechanical detection of consistency violations |
| Bezos memo | 30 minutes of silent reading by smart colleagues; the questions surface |

Without the feedback loop, writing degrades into documentation: written and forgotten, not checked. With the feedback loop, writing becomes thinking: the act of being checked is what surfaces what you did not understand.

---

## Operational Forms

### The smallest version: write down the decision

Even a one-paragraph note explaining "we chose X because Y, considered Z and rejected it for W" is more discipline than no note. The minimum viable practice is to write down decisions with reasoning, even when no one will read them.

### The medium version: design doc / RFC

A page or two on what the system does, what alternatives were considered, and why the chosen design was selected. Standard practice in many engineering organizations. Carmack's `.plan` entries are roughly at this scale.

### The maximum version: formal specification with model checking

A TLA+ or PlusCal spec that can be mechanically checked. Reserved for systems where the cost of error is high (distributed consensus, payment processing, safety-critical control systems). The full Lamport discipline.

The level of rigor should match the cost of being wrong. A small CRUD app needs the smallest version. A distributed database needs the maximum version. Most engineering work lives somewhere in the middle.

---

## What This Concept Teaches

- Engineering planning is a writing discipline, not a meeting discipline.
- The shape of the discipline is the same across mediums and rigor levels.
- The writing produces commitment; the feedback loop produces thinking.
- Choose the rigor that matches the cost of being wrong.
- The act of writing is the discovery of what you do not yet understand.

---

## Connections

- [[John Carmack]], the pragmatic prose pole of this discipline
- [[Leslie Lamport]], the formal pole of this discipline
- [[Jeff Bezos]], the organizational application of the same discipline
- [[Formal Specification Discipline]], the deeper synthesis of the Lamport pole
- [[Operating Principles]], where the principles distilled from this concept live with their citations
- [[Persona]], the operating identity this concept serves
