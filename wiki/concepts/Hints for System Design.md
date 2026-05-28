---
type: concept
title: "Hints for System Design"
address: c-000300
complexity: intermediate
domain: system-design
created: 2026-05-28
updated: 2026-05-28
tags:
  - concept
  - system-design
  - engineer-planner
  - lampson
status: mature
related:
  - "[[Butler Lampson]]"
  - "[[Lampson Hints for Computer System Design]]"
  - "[[Lampson Hints and Principles 2020]]"
  - "[[Lampson Turing Award Lecture 1992]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
  - "[[Planning Before Code]]"
  - "[[Formal Specification Discipline]]"
---

# Hints for System Design

> "These are not novel... or guaranteed to work; they are just hints." ([[Lampson Hints for Computer System Design]])

This page synthesizes [[Butler Lampson]]'s system-design discipline as a working toolkit. The phrase "hints" is the load-bearing meta-principle: none of these rules is universal. Each is a frame the engineer holds in mind and applies when it fits the situation. The catalog is useful only to the engineer who has learned which hint applies when. This is taste plus engineering, formalized.

## The Five Hints That Anchor the Pole

### 1. The Hint pattern

A hint is a saved result of computation. It has two properties that distinguish it from a cache: it may be wrong, and it is not necessarily reached by associative lookup. Because it may be wrong, there must be a cheap correctness check before any unrecoverable action.

**Engineering instances:** ARP cache, route caches, Smalltalk method-dispatch caches, branch predictors, speculative execution. All are hint patterns: cheap guess + cheap check + correctness fallback.

**Pole frame:** when in doubt, prefer hints with cheap checks over promises with hidden assumptions. The hint pattern is the architectural form of [[Carmack Inlined Code|Carmack's pragmatic optimism]] and [[Allspaw Infinite Hows|Allspaw's local rationality]] applied at the data structure level.

### 2. Common case fast, worst case make progress

Two execution paths with different requirements. The common path is optimized for speed; the worst-case path is optimized for guaranteed progress. Conflating them produces a slow common path or an unbounded worst case.

**Engineering instances:** reference-counting GC with periodic trace-and-sweep; piece-table editing with periodic cleanup; lock-free queues with mutex fallback; CPU branch prediction with rollback.

**Pole frame:** if your design has only one path, you have not yet thought about failure. If your design's common path is the same speed as its worst path, you are paying for safety you do not need on the common path.

### 3. Don't hide power

Abstractions exist to conceal undesirable properties. They should never conceal desirable ones. If a user has to bypass your abstraction to do something legitimate, the abstraction has hidden power it should expose.

**Engineering instances:** Unix's `/dev/raw` device files; database escape hatches to vendor SQL; React's `ref` for direct DOM access; CDN cache-control overrides.

**Pole frame:** the test is "can a competent caller accomplish the legitimate task within the abstraction?" If no, the abstraction is overconcealing. The corollary is [[Vogels Modern Applications|Vogels' five-pillar checklist]]'s reliance on primitives — give consumers the primitive, then build conveniences on top.

### 4. End-to-end recovery

End-to-end error recovery is logically necessary for a reliable system. Any intermediate-layer recovery is a performance optimization, not a correctness requirement.

**Engineering instances:** application-layer reconciliation over TCP retries; cryptographic signatures over network-layer integrity; idempotent operations over exactly-once delivery; eventual-consistency reconciliation over distributed transactions.

**Pole frame:** stake correctness on the highest layer that owns the meaning of the operation. Lower layers exist for throughput, not safety. This is the same shape as [[Lamport Time Clocks Distributed System|Lamport's causality-only-intrinsic-order]]: meaning lives at the layer that can observe the whole operation.

### 5. Shed load before failure

Refuse new work before the system saturates. Graceful degradation requires capacity discipline. Variance in arrival rate cascades into failure when utilization is near 100%; target ~2/3 capacity for stable steady state.

**Engineering instances:** AWS adaptive load shedding; database connection pools that refuse rather than queue; CDN circuit breakers; backpressure-based queue admission.

**Pole frame:** load shedding is a first-class operation, not a failure mode. Instrument it explicitly. The cousin frame is [[Carmack Farewell Meta 2022|Carmack on friction in large orgs]]: when the system is overloaded, the cure is removing load, not adding capacity.

## The Updated 2020 Framework: STEADY by AID with ART

The 2020 [[Lampson Hints and Principles 2020]] reorganizes the 1983 catalog into a more memorable mnemonic. Goals are STEADY (Simple, Timely, Efficient, Adaptable, Dependable, Yummy); techniques are AID (Approximate, Incremental, Divide-and-conquer); process is ART (Architecture, Automate, Review, Techniques, Test).

The reorganization is useful but the 1983 catalog is the canonical reference. The 2020 framing is the pedagogical update; the 1983 hints are the engineering substance.

## How This Brain Uses These Hints

This brain applies the hints catalog by asking, in order, when evaluating any system design:

1. **What's the interface, and what does it conceal?** (frame 28 in [[Persona]]). The interface is the durable contract; the implementation is mortal.
2. **Is this a hint or a promise?** (frame 27). Hints check; promises stake correctness. Conflating them produces fragile systems.
3. **Where does end-to-end recovery happen?** Name the layer that owns correctness. Lower layers are performance, not safety.
4. **What's the common case, and what's the worst case?** Two paths or one? If one, the design is incomplete.
5. **What does the load-shed look like?** If there is no load-shed plan, the system has not been designed for production.

## Tensions With Other Pole Frames

- **vs. [[Lamport Specifying Systems Ch1-3|Lamport's formal-spec discipline]]:** Lampson's "just hints" meta-principle is a counterweight to Lamport's "specify before you implement." Both are correct; the tension is that Lamport's discipline is rigorous and Lampson's is taste-based. The synthesis: use Lampson's hints to generate candidate designs; use Lamport's specs to falsify them.
- **vs. [[Carmack Plan Archive 1998|Carmack's local-information incremental progress]]:** Carmack's pragmatic frame and Lampson's hint pattern are the same shape applied at different scales. Carmack at the file/function level; Lampson at the interface/system level.
- **vs. [[Allspaw Each Necessary|Allspaw's resilience-engineering]]:** the load-shed hint is the architectural form of Allspaw's "human error is a starting point not a conclusion." Both treat failure as default state, not exception.

## Connections

- [[Butler Lampson]] entity page
- [[Lampson Hints for Computer System Design]] primary source
- [[Lampson Hints and Principles 2020]] updated framing
- [[Operating Principles]] specifically the seven Lampson principles in Engineering Disposition
- [[Planning Before Code]] synthesis page on written-decision discipline
- [[Formal Specification Discipline]] synthesis page on Lamport TLA+ counterweight
