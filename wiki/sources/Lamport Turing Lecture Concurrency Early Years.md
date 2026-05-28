---
type: source
title: "Lamport Turing Lecture Concurrency Early Years"
address: c-000266
author: "[[Leslie Lamport]]"
year: 2015
source_url: "https://lamport.azurewebsites.net/pubs/turing.pdf"
fidelity: full-text-summary
tags: [source, lamport, engineer-planner, distributed-systems, foundational, formal-methods]
status: mature
related:
  - "[[Leslie Lamport]]"
  - "[[Operating Principles]]"
  - "[[Distributed Systems]]"
  - "[[Formal Methods]]"
  - "[[Logical Clocks]]"
---

# Lamport Turing Lecture Concurrency Early Years

Lamport, Leslie. "The Computer Science of Concurrency: The Early Years." Microsoft Research, 28 February 2015. Companion essay to Lamport's 2013 ACM Turing Award (delivered as a retrospective on the first dozen years of the field of concurrency). Dedicated to Edsger Dijkstra. Epigraph from Samuel Johnson: "It is insufficiently considered that men more often require to be reminded than informed."

---

## Central Theme

Lamport reframes his life's work, looking back across forty years. The thesis: concurrency is a field of computer science with a particular history, founded by Dijkstra's 1965 mutual exclusion paper, and animated by two fundamentally different classes of synchronization (mutual exclusion vs. producer-consumer) that require different mathematical tools. Throughout the essay Lamport argues for the **standard model** (executions as sequences of states) as the most practical way to reason about concurrent algorithms, while also introducing the **event history / two-arrow model** for non-atomic operations and distributed systems.

The retrospective is also a manifesto for formal reasoning. Three themes recur: (1) concurrent algorithms are subtle and informal reasoning fails reliably; (2) the standard model with invariants is the most practical tool, even for distributed systems where event histories seem more natural; (3) the field of "models of concurrency" split off into formalisms that do not describe real algorithms, while concurrent algorithms themselves are best handled by temporal logic and the standard model.

---

## Mutual Exclusion as the Origin

> "the computer science of concurrency began with Edsger Dijkstra's seminal 1965 paper that introduced the mutual exclusion problem"

Dijkstra's requirements: any process may halt outside its critical section, no real-time assumption, the only progress assumption is **process fairness** (every non-halted process eventually takes a step). These are stringent constraints that rule out simple solutions.

Lamport defines the two property classes:

> "Mutual exclusion is an example of what is now called a safety property, and livelock freedom is called a liveness property. Intuitively, a safety property asserts that something bad never happens; a liveness property asserts that something good must eventually happen."

The safety/liveness distinction (formalized in 1985 by Alpern and Schneider) underlies all modern reasoning about concurrent and distributed systems.

---

## The Bakery Algorithm: A Methodological Lesson

> "It was the first algorithm to implement mutual exclusion without assuming any lower-level mutual exclusion. In 1973, this was considered impossible. Even in 1990, experts still thought it was impossible."

The bakery algorithm achieves mutual exclusion using reads and writes that need not be atomic. A read of a number can return any value if it overlaps a concurrent write, and the algorithm still works. Lamport notes:

> "incorrect concurrent algorithms are still being published and will no doubt continue to be for a long time, despite modern tools for catching errors that require little effort, in particular, model checkers."

This is itself a citable principle: tools exist; using them is a separate discipline.

---

## The Standard Model

> "an execution is represented as a sequence of states, where a state consists of an assignment of values to the algorithm's variables plus other necessary information such as the control state of each process (what code it will execute next). I have found this to be the most generally useful model of computation, for example, it underlies a Turing machine. I like to call it the standard model."

The standard model is the default Lamport defends throughout. Even when event histories are introduced for distributed systems, he argues invariants (state predicates true in every reachable state) are the practical tool.

---

## The Two-Arrow Model

For algorithms with non-atomic operations (like the bakery algorithm), the standard model is awkward. Lamport introduces the two-arrow formalism: operation executions are intervals with begin and end times, and two relations on them:

> "A -> B is true iff (if and only if) A ends before B begins.
> A --> B is true iff A begins before B ends."

With four axioms (A1 transitivity/irreflexivity of ->, A2 -> implies -->, A3 mixed transitivity, A4 four-step composition). This formalism abstracts away physical time and supports rigorous proofs of algorithms whose operations are not atomic.

The MB (memory barrier) puzzle in the essay is striking: a memory barrier orders operations within a single process. How does single-process ordering suffice for interprocess synchronization? Answer via A4: if A in process p is ordered before B in p (by MB), and B is observed by C in q (via shared memory, B --> C), and C is ordered before D in q (by MB), then A -> D. Two memory barriers plus one observation give cross-process precedence.

---

## Mutual Exclusion vs Producer-Consumer: A Fundamental Distinction

> "Producer-consumer synchronization is inherently deterministic. On the other hand, mutual exclusion synchronization is inherently nondeterministic. It has an inherent race condition: two processes can compete to enter the critical section, and either might win."

> "Resolving a race requires an arbiter, a device that decides which of two events happens first. An arbiter can take arbitrarily long to make its decision. (A well-designed arbiter has an infinitesimal probability of taking very long.) Any mutual exclusion algorithm can therefore, in principle, take arbitrarily long to allow some waiting process to enter its critical section. This is not an artifact of any model. It appears to be a law of nature."

> "Producer-consumer synchronization has no inherent nondeterminism, hence no race condition. It can be implemented without an arbiter, so each operation can be executed in bounded time. It is a fundamentally different class of problem than mutual exclusion."

This is a foundational distinction that many practitioners miss. Concurrency problems are not one category. The cost of mutual exclusion is fundamentally different from the cost of producer-consumer synchronization. The arbiter is a physical-world phenomenon (metastability in flip-flops) that mathematics cannot abolish.

---

## Distributed Algorithms and the Global State Critique

Lamport addresses the standard critique of his standard model: in a distributed system there is no global state, only local views. He grants that incompatible consistent cuts of an event history describe different "possible global states" that, in the standard model, never coexist in any single execution. Then:

> "Because the standard model refers to global states, it has been argued that the model should not be used for reasoning about distributed algorithms and systems. While this argument sounds plausible, it is wrong. An invariant of a global system is a meaningful concept because it is a state predicate that is true for all possible global states, and so does not depend on any preferred global states. The problem of implementing a distributed system can often be viewed as that of maintaining a global invariant even though different processes may have incompatible views of what the current state is at any instant."

> "Thinking is useful, and multiple ways of thinking can be even more useful. However, while event histories may be especially useful for helping us understand distributed systems, the best way to reason about these systems is usually in terms of global invariants. The standard model provides the most practical way to reason about invariance."

The methodological claim is sharp: event histories are good for intuition; global invariants are good for proof.

---

## The Split Between Algorithms and Models

> "the study of concurrent algorithms and the study of formal models of concurrency split into two fields. A number of formalisms based on the standard model were introduced for describing and reasoning about concurrent algorithms. Notable among them is temporal logic, introduced by Amir Pnueli in 1977."

Lamport identifies a sociological/intellectual schism. Milner's CCS, Petri nets, and event-based formalisms became one field; concurrent algorithms and their state-based proofs became another. Lamport plants his flag firmly in the latter and notes pointedly that Petri nets "have been used successfully to model some aspects of real systems, and they have been generalized to more expressive languages. But to my knowledge, neither Petri nets nor their generalizations have significantly influenced the field of concurrent algorithms."

---

## Closing: The Role of Dijkstra

> "Looking back at the origins of the field, what stands out is the fundamental role played by Edsger Dijkstra, to whom this history is dedicated."

The whole essay reads as a tribute. Dijkstra defined mutual exclusion (1965), introduced producer-consumer in print (1968), and first studied self-stabilization (1974). Lamport's recurring epigraph from Samuel Johnson ("men more often require to be reminded than informed") is the methodological frame for the whole retrospective.

---

## Frames Cited

- **The standard model.** "an execution is represented as a sequence of states." The most useful model of computation; underlies the Turing machine; the default tool for reasoning about concurrent algorithms.
- **Safety vs. liveness.** A safety property says something bad never happens. A liveness property says something good eventually happens. Defined formally in 1985 (Alpern and Schneider).
- **Process fairness.** The minimal progress assumption: every non-halted process eventually takes a step. Lamport: "Process fairness was all one could reasonably assume."
- **Mutual exclusion is fundamentally different from producer-consumer.** ME is inherently nondeterministic, requires an arbiter, can take arbitrarily long. PC is deterministic, arbiter-free, bounded-time. Treating them as one class of problem is a category error.
- **Arbiters and metastability.** "Resolving a race requires an arbiter, a device that decides which of two events happens first. An arbiter can take arbitrarily long to make its decision. ... This is not an artifact of any model. It appears to be a law of nature."
- **Bakery algorithm.** First mutual exclusion algorithm that does not assume lower-level mutual exclusion. Considered impossible until proved otherwise.
- **Two-arrow formalism.** Begin-end interval reasoning for non-atomic operations. Four axioms suffice. Resolves the memory-barrier puzzle.
- **Invariants for distributed systems.** "the best way to reason about these systems is usually in terms of global invariants. The standard model provides the most practical way to reason about invariance." A direct rejection of the claim that event-based formalisms are necessary for distributed reasoning.
- **The schism.** Models of concurrency (CCS, Petri nets, process calculi) and concurrent algorithms diverged after the 1970s. Lamport endorses the algorithms-plus-temporal-logic side.
- **Reminder over information.** "It is insufficiently considered that men more often require to be reminded than informed." A justification for retrospective writing.
- **Use the model checker.** Incorrect concurrent algorithms continue to be published despite modern tools. Use of formal tools is a separate discipline from knowing they exist.

---

## Status

Mature. Companion piece to [[Lamport Time Clocks Distributed System]] and [[Lamport Byzantine Generals Problem]]. Retrospective and methodological. Cites work that became [[Lamport Paxos Made Simple]] and the broader TLA+ enterprise covered in [[Lamport Specifying Systems Ch1-3]].
