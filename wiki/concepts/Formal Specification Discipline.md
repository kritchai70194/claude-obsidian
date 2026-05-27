---
type: concept
title: Formal Specification Discipline
address: c-000014
complexity: advanced
domain: formal-methods
aliases:
  - TLA+ Discipline
  - Specifying Systems
  - Spec-First Engineering
created: 2026-05-26
updated: 2026-05-27
tags:
  - concept
  - engineering
  - formal-methods
  - distributed-systems
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Leslie Lamport]]"
  - "[[Lamport Thinking for Programmers]]"
  - "[[Lamport TLA+ Course Intro]]"
  - "[[Lamport Specifying Systems Ch1-3]]"
  - "[[Lamport Paxos Made Simple]]"
  - "[[Planning Before Code]]"
---

# Formal Specification Discipline

The engineering practice of writing mathematical specifications for systems before implementing them, then mechanically checking the specifications for consistency. The canonical instance is [[Leslie Lamport]]'s TLA+ (Temporal Logic of Actions), but the discipline is broader than the notation.

This page is the deeper pole of [[Planning Before Code]]. Where that page treats planning across rigor levels, this page focuses on the formal end of the spectrum: when the cost of error justifies the cost of rigor.

---

## The Core Thesis

Formal specification is a feedback loop. You write down what the system is supposed to do in a precise notation. A tool (model checker) reads what you wrote and tells you whether your specification is internally consistent. The tool's feedback surfaces inconsistencies you would not have noticed.

> "TLA+ is a notation that makes thinking possible. The mechanical checking is what turns specification from documentation into thinking." ([[Lamport TLA+ Course Intro]])

Without the mechanical checking, formal notation is just expensive prose. With it, formal notation becomes a thinking aid the human alone cannot provide.

---

## Why Formal, Not Just Written

[[Planning Before Code]] treats prose specifications (Carmack's `.plan` files, Bezos's six-pagers) as the same shape as formal specs. They are, structurally. But for some systems the prose feedback loop (humans reading and challenging) is insufficient.

A distributed consensus algorithm has subtle correctness conditions that no human reviewer reliably catches. A payment processing system has concurrency edge cases that prose cannot enumerate. A safety-critical control system needs guarantees that "the smart engineer read it and thought about it" cannot provide.

For those systems, the prose discipline is necessary but not sufficient. The mechanical check is what makes the discipline complete.

---

## What Lamport's TLA+ Adds

### Mathematical precision in accessible math

> "The mathematics needed for writing specifications is simpler than any programming language: basically undergraduate-level discrete math, including first-order logic, sets, and functions." ([[Lamport Thinking for Programmers]])

The math is approachable. The barrier to formal methods has historically been cultural, not mathematical.

### Mechanical model checking via TLC

The TLC model checker reads a TLA+ spec and explores its state space. It finds:

- Deadlocks the writer did not notice
- Invariant violations under interleaving the writer did not consider
- Liveness failures (the system can get stuck without making progress)
- Refinement violations (the implementation does not implement what was specified)

Each finding is a specific counterexample: a sequence of events that exhibits the bug. The counterexample is what makes the feedback loop concrete.

### Small specs surface deep questions

> Lamport's pedagogical pattern: pick a small system (distributed counter, dining philosophers, two-phase commit), write its spec, observe what the spec forces you to confront. ([[Lamport TLA+ Course Intro]])

A two-page TLA+ spec of a distributed counter reveals consistency questions a thousand lines of code would not. The discipline is to write the spec for the smallest interesting system, observe what you discover, then scale up.

---

## When to Use Formal Specification

### High-cost systems

- Distributed consensus (Paxos, Raft, leader election)
- Concurrent data structures (lock-free queues, CRDTs)
- Payment and financial systems (correctness conditions worth their weight in lawyers)
- Safety-critical control (aerospace, medical devices, automotive)
- Cryptographic protocols (where bugs are exploits)

For these, the cost of formal specification is small relative to the cost of being wrong.

### High-leverage components

Even in systems that don't justify full formal specification, a few load-bearing components might:

- The consensus core of a distributed database
- The transaction manager of a payment processor
- The hypervisor of a cloud platform

The 90% of the system can use the [[Planning Before Code]] prose discipline; the load-bearing 10% gets the formal treatment.

### Production use is real

TLA+ has been used in production at Amazon (DynamoDB, S3), Microsoft (Cosmos DB, Azure), Intel (chip design), and elsewhere. The discipline is not academic; it ships systems.

---

## When Not to Use Formal Specification

### Most CRUD applications

The cost of being wrong in a typical web app is bounded (a few angry users, a hotfix deploy). The cost of formal specification (significant engineering time) is not justified. Use the prose discipline; reserve formal methods for the systems that need them.

### Early prototypes

You do not yet know what the system is supposed to do. Formal specification of a moving target is wasted work. Build, learn, then formalize the parts that have stabilized.

### Systems that change faster than specs can keep up

If the requirements churn weekly, formal specs become stale faster than they can be updated. The prose discipline is more sustainable at that pace.

---

## Adjacent Disciplines

### Type systems

Strong type systems (Rust, Haskell, OCaml) catch a subset of what formal specs catch, at a much lower cost. They are not a replacement for full specification, but they are a force multiplier on the prose discipline.

### Property-based testing

QuickCheck, Hypothesis, and similar tools generate test cases from properties. They catch a subset of what model checking catches, in a way that integrates with existing code rather than requiring a separate spec.

### Design by contract

Pre-conditions, post-conditions, and invariants attached to code. A middle ground between informal prose and formal specification.

---

## What This Concept Teaches

- Formal specification is a feedback loop, not just notation.
- The mechanical check is what makes the discipline complete.
- Use formal methods where the cost of error justifies the cost of rigor.
- The math is accessible; the barrier is cultural.
- Small specs of small systems surface deep questions the implementation would never reveal.
- Most systems live on the [[Planning Before Code]] prose end of the spectrum; the formal end is reserved for what truly needs it.

---

## Connections

- [[Planning Before Code]], the broader synthesis this concept refines
- [[Leslie Lamport]], the mentor whose work defines this discipline
- [[Lamport Thinking for Programmers]], the keynote arguing for the discipline
- [[Lamport TLA+ Course Intro]], the pedagogical resource for learning it
- [[Lamport Specifying Systems Ch1-3]], the book chapters that introduce the methodology
- [[Lamport Paxos Made Simple]], an example of the discipline applied to one of computer science's load-bearing algorithms
- [[Operating Principles]], where the principles distilled from this concept live with their citations
- Adjacent in spirit: [[Designing Data-Intensive Applications]] (the engineering canon book that operationalizes much of what this discipline targets)
