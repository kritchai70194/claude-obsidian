---
type: concept
title: "Working Backwards"
address: c-000302
complexity: intermediate
domain: product-development
created: 2026-05-28
updated: 2026-05-28
tags:
  - concept
  - product-development
  - founder-operator
  - bezos
status: mature
related:
  - "[[Jeff Bezos]]"
  - "[[Bezos 2008 Letter]]"
  - "[[Bezos 2016 Day 1 Letter]]"
  - "[[Working Backwards Book]]"
  - "[[Vogels Working Backwards]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Working Backwards

> "Working backwards from customer needs can be contrasted with a 'skills-forward' approach. ... The skills-forward approach says, 'We are really good at X. What else can we do with X?' ... Eventually the existing skills will become outmoded." ([[Bezos 2008 Letter]])

The canonical Amazon product-development discipline: start from the customer outcome and reverse-engineer the product, never the other way around. This page consolidates the discipline as the Bezos / Amazon canonical frame, distinct from the [[Working Backwards Book]] (Bryar/Carr 2021 book about the practice) and [[Vogels Working Backwards]] (the 2006 Vogels post on the four-document process).

## The Discipline

Working backwards has two operational forms at Amazon.

### Form 1: Customer-first vs Skills-forward

The strategic posture. The skills-forward stance asks "we are good at X, what else can we do with X?" The working-backwards stance asks "what does the customer need?"

> "Working backwards from customer needs can be contrasted with a 'skills-forward' approach... Eventually the existing skills will become outmoded." ([[Bezos 2008 Letter]])

Why it matters: skills are mortal. Customers persist. A product portfolio built skills-forward eventually serves a market that no longer exists. A portfolio built working-backwards forces continuous capability acquisition.

### Form 2: The Four-Document Process

The operational artifact. Before any product is built at Amazon, the team writes four documents in order: (1) Press Release, (2) FAQ, (3) Customer-Experience walkthrough, (4) Service interfaces. The press release sits first because if it isn't exciting, the product isn't worth building.

> "Before we start building, we write a Press Release to clearly define how the new idea or product will benefit customers, and we create a list of Frequently Asked Questions to resolve the tough issues up front." ([[Working Backwards Book]])

> "We refused to launch S3 until the API was right." ([[Vogels Working Backwards]])

The press release is under one page, in customer-facing language. The FAQ runs up to five pages and addresses the hard questions before any code is written. The documents are the artifact of working backwards; the writing surfaces the holes that diagrams hide.

## How the Brain Uses This

When evaluating any product proposal, this brain applies working backwards in order:

1. **Write the press release first.** If you can't write it, you don't yet know what you're building.
2. **Is the press release exciting?** If not, kill the project before any code. The PR-FAQ is a one-way door inserted before the implementation one-way door.
3. **What customer outcome does this produce?** Not "what feature does this ship," but "what changes in the customer's world."
4. **Are we working backwards or skills-forward?** Skills-forward is the easy default. Working-backwards is the deliberate discipline.

## Tensions and Boundaries

- **vs. [[Carmack Plan Archive 1998|Carmack's .plan files]]:** Carmack's discipline is engineer-facing (write decisions down so the team can reason about them later). Bezos's is customer-facing (write the press release so the team can reason about whether the customer cares). Both are written-discipline frames; different audiences.
- **vs. [[Karpathy Software 2.0|Karpathy's first-principles building]]:** Karpathy's "build to learn" is a research stance; Bezos's working-backwards is a product stance. When the goal is research, build-to-learn beats working-backwards. When the goal is product, working-backwards beats build-to-learn.
- **The disruption-from-below caveat:** Working backwards from current customers can miss disruptive entrants who serve non-customers. [[Clayton Christensen]]'s caveat: listen to non-customers too. The synthesis: working backwards from customer outcomes, not customer requests.

## Connections

- [[Bezos 2008 Letter]] primary source on skills-forward vs working backwards
- [[Bezos 2016 Day 1 Letter]] on customer obsession and high-velocity decision-making
- [[Working Backwards Book]] Bryar/Carr 2021 book about the practice
- [[Vogels Working Backwards]] 2006 Vogels post on the four-document process
- [[Operating Principles]] specifically the "Working backwards" and "Working backwards beats skills-forward" principles in Customer Direction
- [[Persona]] decision frame "How do we build this strategically?" defaults to working backwards
