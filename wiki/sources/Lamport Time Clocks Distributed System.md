---
type: source
title: "Lamport Time Clocks Distributed System"
address: c-000264
author: "[[Leslie Lamport]]"
year: 1978
source_url: "https://lamport.azurewebsites.net/pubs/time-clocks.pdf"
fidelity: full-text-summary
tags: [source, lamport, engineer-planner, distributed-systems, foundational]
status: mature
related:
  - "[[Leslie Lamport]]"
  - "[[Operating Principles]]"
  - "[[Distributed Systems]]"
  - "[[Logical Clocks]]"
  - "[[Formal Methods]]"
---

# Lamport Time Clocks Distributed System

Lamport, Leslie. "Time, Clocks, and the Ordering of Events in a Distributed System." Communications of the ACM, Volume 21, Number 7, July 1978, pages 558-565. Massachusetts Computer Associates (work done at SRI International). Possibly the most cited paper in computer science. Inspired by relativity, applied to systems.

---

## Central Result

The paper establishes that in a distributed system, the relation "happened before" is only a partial ordering of events, not a total ordering. Lamport defines this partial ordering rigorously from first principles, then constructs a distributed algorithm that synchronizes a system of logical clocks (counters, with no physical-time mechanism) that extends the partial order to a total order in a way every process can agree on. He uses this total order to solve mutual exclusion in a fully distributed way, with no central scheduler. Finally he specializes the algorithm to physical clocks and proves a tight bound on how far synchronized clocks can drift.

The deeper contribution is conceptual. The paper does for distributed systems what special relativity did for physics: it abolishes absolute simultaneity and replaces it with a causal partial order defined only by what messages were actually sent. Most of the field of distributed systems descends from this reframing.

---

## The Happened-Before Relation (verbatim)

> "Definition. The relation '->' on the set of events of a system is the smallest relation satisfying the following three conditions: (1) If a and b are events in the same process, and a comes before b, then a -> b. (2) If a is the sending of a message by one process and b is the receipt of the same message by another process, then a -> b. (3) If a -> b and b -> c then a -> c. Two distinct events a and b are said to be concurrent if a /-> b and b /-> a."

The relation is an irreflexive partial ordering. Two events are concurrent precisely when neither could have causally affected the other. "Concurrent" does not mean "simultaneous in time" but "causally independent". Lamport ties this explicitly to the space-time formulation of special relativity, but with a pragmatic twist: he considers only the messages that actually were sent, not the messages that could have been sent.

---

## Logical Clocks: The Clock Condition (verbatim)

A clock Ci for process Pi is a function assigning a number Ci(a) to any event a in that process. The system clock C maps any event b to a number such that C(b) = Cj(b) if b is in process Pj.

> "Clock Condition. For any events a, b: if a -> b then C(a) < C(b)."

Lamport stresses that the converse cannot hold; concurrent events must be allowed to have any relative numbering. The Clock Condition is guaranteed by two local rules:

- **C1.** If a and b are events in process Pi, and a comes before b, then Ci(a) < Ci(b).
- **C2.** If a is the sending of a message by process Pi and b is the receipt of that message by process Pj, then Ci(a) < Cj(b).

Implementation rules:

- **IR1.** Each process Pi increments Ci between any two successive events.
- **IR2.** (a) If event a is the sending of a message m by process Pi, then the message m contains a timestamp Tm = Ci(a). (b) Upon receiving a message m, process Pj sets Cj greater than or equal to its present value and greater than Tm.

These two rules are sufficient. Logical clocks need no shared notion of time. Each process needs only a counter and the discipline of stamping outgoing messages and advancing on incoming ones.

---

## Total Ordering and Distributed Mutual Exclusion

The total ordering ⇒ is defined by breaking ties with an arbitrary process priority order. If a is in Pi and b is in Pj, then a ⇒ b iff Ci(a) < Cj(b) or (Ci(a) = Cj(b) and Pi < Pj). The total ordering extends the partial ordering ->, but is not unique. Different clock systems yield different total orderings. Only the partial ordering is intrinsic to the system.

Lamport then solves distributed mutual exclusion with a five-rule algorithm. Each process maintains a local request queue. Requests, acknowledgments, and releases are timestamped messages broadcast to all processes. A process is granted the resource when (i) its request is at the head of its queue (by the total order) and (ii) it has received a later-timestamped message from every other process. Conditions (i) and (ii) are tested locally.

> "This is a distributed algorithm. Each process independently follows these rules, and there is no central synchronizing process or central storage."

He generalizes this into the **State Machine** approach (now usually called state-machine replication): describe the synchronization as a state machine, have every process simulate the same state machine using the same totally-ordered sequence of commands, and synchronization follows. This pattern underlies Paxos, Raft, and every replicated-log system since.

---

## Anomalous Behavior and the Strong Clock Condition

The total ordering algorithm can order events differently from how an external user would order them, if the user uses out-of-system channels (a phone call between two computer requests). Lamport defines the larger event set S that includes external events, with relation =>.

> "Strong Clock Condition. For any events a, b in S: if a => b then C(a) < C(b)."

Logical clocks do not in general satisfy the Strong Clock Condition. Physical clocks can. This is "one of the mysteries of the universe": independently running physical clocks, if accurate enough and synchronized within a bound, can encode causal precedence even for events related through channels external to the system.

---

## Physical Clocks: The Synchronization Theorem

The paper closes by specializing to physical clocks. Two assumptions:

- **PC1.** There exists a constant K << 1 such that for all i: |dCi(t)/dt - 1| < K. (Crystal clocks typically have K <= 10^-6.)
- **PC2.** For all i, j: |Ci(t) - Cj(t)| < epsilon.

Implementation rules become IR1' (clocks run forward continuously) and IR2' (incoming message m with timestamp Tm advances the clock to at least Tm + mu_m, where mu_m is the known minimum transmission delay; clocks are never set backward).

> "THEOREM. Assume a strongly connected graph of processes with diameter d which always obeys rules IR1' and IR2'. Assume that for any message m, mu_m <= mu for some constant mu, and that for all t >= t0: (a) PC1 holds. (b) There are constants tau and xi such that every tau seconds a message with an unpredictable delay less than xi is sent over every arc. Then PC2 is satisfied with epsilon ~ d(2*K*tau + xi) for all t >= t0 + tau*d."

The proof appears in the appendix and Lamport notes that the never-set-backward constraint distinguishes it from prior work in clock synchronization. The bound says clock skew is proportional to diameter, drift rate, message frequency, and message delay variance. Practically: if your clocks tick well, your network is well-connected, you exchange messages often, and delays are tight, your skew stays bounded.

---

## Why It Matters

This is the founding paper of the discipline of distributed systems. Three principles, each independently load-bearing:

1. **Causality is the only intrinsic order.** Time is a derived concept. The order in which events "really" occur is the partial order induced by message-sending. Anything stronger is a convention.
2. **Logical clocks are sufficient for ordering.** You do not need synchronized physical clocks to totally order events; counters that obey IR1 and IR2 are enough. This is what every modern logging, tracing, and CRDT system uses.
3. **State machine replication is the way to build reliable distributed services.** If every process executes the same sequence of commands on the same state machine, they stay consistent. This is the precursor to Paxos, Raft, etcd, ZooKeeper, every distributed database.

The paper is also a stylistic exemplar. The English prose is clear, the math is small, the figures are simple, and the deepest insights (the analogy to special relativity, the "mystery of the universe" remark about physical clocks) are dropped almost casually.

---

## Frames Cited

- **[[Distributed Systems]]:** "A system is distributed if the message transmission delay is not negligible compared to the time between events in a single process." A definition that includes single-computer multiprocessing under the same umbrella as ARPANET.
- **[[Logical Clocks]]:** The system of counters Ci and stamping/advancing discipline that produces a total ordering of all events with no physical clock. Now usually called Lamport timestamps.
- **Happens-before relation:** The minimal partial order generated by program order plus message-passing causality. Notation a -> b. Concurrency defined as incomparability.
- **Clock Condition (weak/strong):** Weak: if a -> b then C(a) < C(b). Strong: if a => b (extended to all real events) then C(a) < C(b). Logical clocks meet weak; only physical clocks can meet strong.
- **State Machine Replication:** Synchronization specified as a state machine; each process simulates it using the total order; correctness reduces to ordering.
- **Anomalous behavior:** A logical-clock ordering can disagree with what users perceive as the natural order because users have out-of-system causal channels. The fix is either to thread external timestamps through or to use physical clocks satisfying the Strong Clock Condition.

---

## Status

Mature. Foundational paper for distributed systems. Backs the [[Leslie Lamport]] mentor and connects directly to [[Lamport Paxos Made Simple]] (state machine replication taken further) and [[Lamport Byzantine Generals Problem]] (the next layer: ordering under malicious failure).
