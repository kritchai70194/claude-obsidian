---
type: source
title: Vogels Eventually Consistent
author: Werner Vogels
publication_year: 2008
url: 'https://www.allthingsdistributed.com/2008/12/eventually_consistent.html'
raw_file: .raw/source-vogels-eventually-consistent.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - source
  - distributed-systems
  - consistency
  - cap-theorem
  - vogels
status: mature
related:
  - '[[Werner Vogels]]'
  - '[[Vogels 10 Lessons from 10 Years of AWS]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
  - '[[Dean Latency Numbers]]'
---

# Vogels, "Eventually Consistent" (December 2008)

[[Werner Vogels]]'s canonical writeup of the consistency-model taxonomy that defines modern distributed-systems literacy. Originally a blog post; an expanded version appeared in ACM Queue and Communications of the ACM. Cited in virtually every modern distributed-systems course.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2008 (December); expanded ACM versions 2008-2009
- URL: https://www.allthingsdistributed.com/2008/12/eventually_consistent.html
- Raw extract: [`.raw/source-vogels-eventually-consistent.md`](../../.raw/source-vogels-eventually-consistent.md)
- Fidelity: extracts (WebFetch summary), definitions verbatim.

## Headline Takeaway

The essay's contribution is taxonomic: it gives engineers a vocabulary for the consistency tradeoffs they face. Before this post, "consistency" was used loosely; after, the field had named distinctions (strong, weak, eventual, causal, read-your-writes, session, monotonic-read, monotonic-write) that could be reasoned about precisely.

The CAP framing in this post became the canonical introduction to the theorem for a generation of working engineers.

## The Consistency Taxonomy (definitions verbatim where possible)

**Strong consistency.** "After the update completes, any subsequent access (by A, B, or C) will return the updated value."

**Weak consistency.** "The system does not guarantee that subsequent accesses will return the updated value."

**Eventual consistency.** "A specific form of weak consistency; the storage system guarantees that if no new updates are made to the object, eventually all accesses will return the last updated value." Canonical example: DNS.

**Causal consistency.** Updates propagate based on communication between processes; unrelated observers follow standard eventual consistency rules.

**Read-your-writes consistency.** "Process A, after it has updated a data item, always accesses the updated value and will never see an older value."

**Session consistency.** Read-your-writes guarantees but only within a session context.

**Monotonic read consistency.** "If a process has seen a particular value for the object, any subsequent accesses will never return any previous values."

**Monotonic write consistency.** "The system guarantees to serialize the writes by the same process."

## CAP Theorem (Vogels's framing)

> "Only two [of three properties: data consistency, system availability, and tolerance to network partition] can be achieved at any given time."

> "In larger distributed-scale systems, network partitions are a given; therefore, consistency and availability cannot be achieved at the same time."

This last sentence is the operational form of CAP that drove an entire generation of NoSQL and AP-system design. Many of the systems built between 2008 and 2015 (DynamoDB, Cassandra, Riak) are direct descendants of the reasoning in this post.

## What This Brain Takes From It

- **First principles over analogies.** Vogels gives precise definitions, not metaphors. This is the form first-principles thinking takes when applied to a real engineering domain.
- **Order of magnitude thinking.** The CAP claim "in larger distributed-scale systems, network partitions are a given" is itself an order-of-magnitude argument. At small scale you can pretend partitions are rare. At planetary scale they are not.
- **Vocabulary as a tool of engineering.** The post's lasting contribution isn't a technique. It's a set of words that let engineers describe their actual choices. Naming the tradeoff is what makes the tradeoff legible.
- **APIs are forever.** This taxonomy is itself a kind of API: once the field adopted these words, it became expensive to use them differently. Vogels did the field a long-horizon favor by picking words that scaled.

## Cross-References

- [[Werner Vogels]]
- [[Vogels 10 Lessons from 10 Years of AWS]]: the principle "Everything fails all the time" is operationalized partly through accepting eventual consistency
- [[Operating Principles]]: first principles, order of magnitude, design for failure
- [[Persona]]
- [[Dean Latency Numbers]]: the round-trip latencies that force consistency tradeoffs

## Status

Mature for the taxonomy and CAP framing. The full ACM Queue version has more nuance around quorum systems and the Dynamo paper's contribution; future re-ingest of the ACM version would deepen the source.
