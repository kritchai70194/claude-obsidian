---
type: concept
title: "Distributed Systems"
address: c-000308
complexity: intermediate
domain: distributed-systems
created: 2026-05-28
updated: 2026-05-28
tags:
  - concept
  - distributed-systems
  - engineer-planner
  - lamport
  - vogels
status: mature
related:
  - "[[Leslie Lamport]]"
  - "[[Werner Vogels]]"
  - "[[Butler Lampson]]"
  - "[[Logical Clocks]]"
  - "[[Byzantine Fault Tolerance]]"
  - "[[Hints for System Design]]"
  - "[[Operating Principles]]"
  - "[[Lamport Time Clocks Distributed System]]"
  - "[[Lamport Byzantine Generals Problem]]"
  - "[[Lamport Paxos Made Simple]]"
  - "[[Vogels Eventually Consistent]]"
  - "[[Vogels Distributed Computing Manifesto]]"
  - "[[Vogels Decade of Dynamo]]"
  - "[[Vogels S3 Strong Consistency]]"
---

# Distributed Systems

> "A system is distributed if the message transmission delay is not negligible compared to the time between events in a single process." ([[Lamport Time Clocks Distributed System]])

A distributed system is any collection of processes where the cost of communication is large enough to matter. Lamport's definition is deliberately scale-free: it includes single-computer multiprocessing and planetary-scale clouds under the same umbrella. The discipline of distributed systems is the body of techniques for reasoning about and building these systems despite the absence of shared time, shared state, and reliable components.

This page synthesizes the canonical principles across [[Leslie Lamport]] (theory) and [[Werner Vogels]] (operational practice). It is the connective tissue between [[Logical Clocks]], [[Byzantine Fault Tolerance]], [[Hints for System Design]], and the consistency-model taxonomy.

## Five Principles That Anchor the Field

### 1. Causality is the only intrinsic order

There is no absolute time in a distributed system. The order in which events "really" happen is the partial order induced by message-sending. Anything stronger is a convention layered on top.

> "Definition. The relation '->' on the set of events of a system is the smallest relation satisfying the following three conditions: (1) If a and b are events in the same process, and a comes before b, then a -> b. (2) If a is the sending of a message by one process and b is the receipt of the same message by another process, then a -> b. (3) If a -> b and b -> c then a -> c." ([[Lamport Time Clocks Distributed System]])

Everything else (logical clocks, total orderings, consistency models) is built on top of this minimal causal substrate. See [[Logical Clocks]] for the construction that extends it to a total order.

### 2. Everything fails. Design for it.

Components in a distributed system fail not as a rare exception but as a constant background condition. Worse, components can fail by lying (see [[Byzantine Fault Tolerance]]) or by getting slow (gray failure) rather than stopping cleanly.

> "Failures are a given and everything will eventually fail over time. We needed to build systems that embrace failure as a natural occurrence even if we did not know what the failure might be." ([[Vogels 10 Lessons from 10 Years of AWS]] lesson 2)

The Lamport corollary at the chip level: a single faulty input device can send a voltage that one processor reads as 0 and another as 1, so even hardware cannot guarantee shared input ([[Lamport Byzantine Generals Problem]]).

### 3. Vocabulary is engineering

Distributed-systems progress is largely the work of naming distinctions precisely so engineers can reason about them. Once a tradeoff has a name, it can be designed against; before it does, it gets pretended away.

> "Strong consistency. After the update completes, any subsequent access (by A, B, or C) will return the updated value." ([[Vogels Eventually Consistent]])

> "Eventual consistency. A specific form of weak consistency; the storage system guarantees that if no new updates are made to the object, eventually all accesses will return the last updated value." ([[Vogels Eventually Consistent]])

The full taxonomy (strong, weak, eventual, causal, read-your-writes, session, monotonic-read, monotonic-write) is the canonical example. The Lamport equivalent is the happens-before partial order plus the safety/liveness distinction ([[Lamport Turing Lecture Concurrency Early Years]]).

### 4. State machine replication is the canonical reliability pattern

If every process simulates the same state machine using the same totally-ordered command sequence, they stay consistent. This pattern, introduced in the 1978 time-clocks paper, underlies Paxos, Raft, etcd, ZooKeeper, and every replicated-log system since.

> "This is a distributed algorithm. Each process independently follows these rules, and there is no central synchronizing process or central storage." ([[Lamport Time Clocks Distributed System]])

[[Lamport Paxos Made Simple]] is the working engineer's entry point. The algorithm is the implementation of state-machine replication under crash failures; the rewrite itself is a lesson in clarity-as-engineering ("The Paxos algorithm, when presented in plain English, is very simple.").

### 5. Data moves to the process, not the process to the data

The 1998 Amazon architecture thesis (preceding the famous Bezos API Mandate by four years) made this the foundation of service-oriented architecture.

> "Instead of processes coming to the data, the data would travel to the process. This means that each workflow element would require all of the information required for the next node in the workflow to act upon it." ([[Vogels Distributed Computing Manifesto]])

The corollary at runtime is the CAP framing:

> "In larger distributed-scale systems, network partitions are a given; therefore, consistency and availability cannot be achieved at the same time." ([[Vogels Eventually Consistent]])

## How This Brain Uses These Principles

When evaluating any distributed design, ask in order:

1. **What is the partial order I am promising?** Name the causal structure. If you cannot, you do not yet have a design.
2. **What is the failure model?** Fail-stop, fail-silent, crash-recovery, or Byzantine? Each implies different costs (see [[Byzantine Fault Tolerance]]).
3. **What is the consistency model, in [[Vogels Eventually Consistent|Vogels's vocabulary]]?** Saying "consistent" without picking from the taxonomy is the named anti-pattern.
4. **Where does state-machine replication live?** Even if you don't run Paxos, the ordered-log-of-commands shape is usually the right backbone.
5. **What is the workload measurement that justified this design?** ([[Vogels Decade of Dynamo|the 70%/20% measurement]] is the template.) Without one, the design is speculation.

## Tensions With Other Frames

- **vs. [[Hints for System Design|Lampson's hint pattern]]:** Lampson's pole says "use cheap guesses with cheap checks"; the Lamport pole says "specify the invariant precisely". The synthesis: hints are how you make the common case fast; specifications are how you prove the worst case correct. Both live in the same system.
- **vs. [[Vogels Eventually Consistent|the eventual-consistency taxonomy]] vs. [[Vogels S3 Strong Consistency]]:** Vogels 2008 explains why eventual consistency is a legitimate design choice; Vogels 2021 shows how to move to strong consistency without sacrificing what eventual bought you. Same engineer, same system, 13-year arc. The lesson: consistency is a dial, and the right setting changes with scale and customer demand.
- **vs. the monolith:** [[Vogels Distributed Computing Manifesto]] and [[Bezos 2002 API Mandate]] are the canonical case for SOA; [[Vogels Monoliths Are Not Dinosaurs|Vogels 2023]] is the canonical case for revisiting that choice. "Building evolvable software systems is a strategy, not a religion."

## Connections

- [[Logical Clocks]] (the foundational ordering technique)
- [[Byzantine Fault Tolerance]] (the foundational fault-tolerance result)
- [[Hints for System Design]] (the sibling pole: Lampson's engineering catalog)
- [[Leslie Lamport]] entity (theory pole)
- [[Werner Vogels]] entity (operational pole)
- [[Lamport Time Clocks Distributed System]] (1978 founding paper)
- [[Lamport Byzantine Generals Problem]] (1982 fault-tolerance founding paper)
- [[Lamport Paxos Made Simple]] (2001 consensus exemplar)
- [[Vogels Eventually Consistent]] (consistency-model taxonomy)
- [[Vogels Distributed Computing Manifesto]] (1998 SOA thesis)
- [[Vogels Decade of Dynamo]] (NoSQL lineage)
- [[Vogels S3 Strong Consistency]] (cache-coherence at planetary scale)
- [[Operating Principles]] Engineering Disposition section
