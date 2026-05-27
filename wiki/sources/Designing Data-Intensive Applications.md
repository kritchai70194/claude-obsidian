---
type: source
title: Designing Data-Intensive Applications
address: c-000242
author: Martin Kleppmann
publication_year: 2017
url: >-
  https://www.shortform.com/summary/designing-data-intensive-applications-summary-martin-kleppman
raw_file: .raw/source-ddia.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-27'
tags:
  - source
  - book
  - distributed-systems
  - kleppmann
  - engineering
status: mature
related:
  - '[[Jeff Dean]]'
  - '[[Werner Vogels]]'
  - '[[Vogels Eventually Consistent]]'
  - '[[Dean Latency Numbers]]'
  - '[[Dean Stanford Talk]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Designing Data-Intensive Applications (Kleppmann, 2017)

The most-cited distributed systems engineering book of the modern era. Written by Martin Kleppmann (University of Cambridge, formerly LinkedIn). Industry shorthand: "DDIA." Companion text to [[Werner Vogels]]'s and [[Jeff Dean]]'s public-facing engineering material.

## Provenance

- Author: Martin Kleppmann
- Year: 2017
- Raw extract: [`.raw/source-ddia.md`](../../.raw/source-ddia.md)
- Fidelity: book-summary aggregate

## Headline Takeaway

DDIA organizes distributed systems engineering around three pillars (reliability, scalability, maintainability) and gives precise vocabulary for each. The book's contribution is the same as [[Vogels Eventually Consistent]]'s: vocabulary as engineering. Once engineers can say "fault" vs "failure" with shared meaning, design conversations become precise.

## The Three Pillars

### Reliability

> A system is reliable when it continues to operate correctly even when issues arise.

Critical vocabulary distinction:

- **Fault:** improper performance of a single system component.
- **Failure:** the system as a whole stops delivering required service to users.

Faults are unavoidable at scale. The discipline is fault tolerance: building so that individual faults don't cascade into system failures. Direct connection to [[Vogels 10 Lessons from 10 Years of AWS|Vogels's lesson 2]]: "everything will eventually fail over time."

### Scalability

> A system's ability to cope with increased load.

Kleppmann frames scalability as a question about *specific load axes*, not as a global property. Different scaling strategies fit different load shapes:

- Vertical scaling (better hardware): simple, limited
- Horizontal scaling (more machines): complex, unbounded
- The choice depends on which load axis dominates

Companion concept: **latency percentiles** (p50, p99, p999). Average latency hides tail behavior. Tail latency is what users actually experience under load. The Dean latency table ([[Dean Latency Numbers]]) gives the ratios; percentile thinking gives the distribution.

### Maintainability

Three sub-properties:

- **Operability:** easy for operations teams to keep running smoothly
- **Simplicity:** easy for new engineers to understand
- **Evolvability:** easy to modify and extend

Connects directly to [[Vogels 10 Lessons from 10 Years of AWS|build evolvable systems]] (lesson 1) and Dean's "don't build for hypothetical future needs" framing from [[Dean Stanford Talk]].

## Broader Topics

The book covers (in 12 chapters):

- Data models and query languages
- Storage and retrieval (LSM trees vs B-trees)
- Encoding and evolution (schema migration)
- Replication strategies (single-leader, multi-leader, leaderless)
- Partitioning (sharding strategies, rebalancing)
- Transactions (the actual semantics of ACID across databases)
- The trouble with distributed systems (network faults, clocks, consensus)
- Consistency and consensus (paxos, raft, CAP applied)
- Batch processing (MapReduce and successors)
- Stream processing
- The future of data systems

## What This Brain Takes From It

- **Fault vs failure distinction.** New principle to add. Treat them as different categories. Faults are unavoidable; failures are designed against.
- **Latency percentiles, not averages.** When discussing system performance, p99 and p999 are the user-visible metrics. Averages mask the experience.
- **Three sub-properties of maintainability.** Operability + simplicity + evolvability. Operability especially is the under-cited one.
- **Vocabulary as engineering.** DDIA does for distributed systems what [[Vogels Eventually Consistent]] did for consistency models: gives the field precise words. Same epistemic move.

## Cross-References

- [[Jeff Dean]] (the systems-thinking peer)
- [[Werner Vogels]] (the practitioner peer; many DDIA chapters echo Vogels material)
- [[Vogels Eventually Consistent]] (the consistency taxonomy DDIA expands on)
- [[Dean Latency Numbers]] (the ratios that make percentile reasoning concrete)
- [[Dean Stanford Talk]] (the engineering disposition that produces DDIA-style work)
- [[Operating Principles]] (multiple principles connect to this book)
- [[Persona]]

## Status

Mature for the structural framework. Chapter-specific deep dives would surface more quotable material in future passes.
