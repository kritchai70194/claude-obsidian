---
type: source
title: "Lampson Hints for Computer System Design"
address: c-000282
source_type: paper
author: "[[Butler Lampson]]"
year: 1983
publication_date: 1983-10-01
source_url: "https://www.microsoft.com/en-us/research/wp-content/uploads/1983/10/Hints-for-Computer-System-Design-SOSP-version.pdf"
fidelity: full-text-summary
created: 2026-05-28
updated: 2026-05-28
tags:
  - source
  - lampson
  - engineer-planner
  - system-design
  - paper
status: mature
related:
  - "[[Butler Lampson]]"
  - "[[Operating Principles]]"
  - "[[Hints for System Design]]"
  - "[[Engineer Planner Pole]]"
  - "[[Leslie Lamport]]"
---

# Lampson Hints for Computer System Design

Lampson's 1983 SOSP paper. Sixteen pages, organized as a list of slogans for system designers, decorated with Hamlet quotations (Polonius advising Laertes). It is the canonical reference for "make the common case fast", "use hints", "end-to-end argument", "shed load", and roughly two dozen other named patterns. Almost every later systems-design pattern paper cites it.

The paper has three sections (Functionality, Speed, Fault-tolerance) crossed with three locations in the system (Completeness, Interface, Implementation). Figure 1 summarizes the slogans on this grid; double lines connect repetitions, single lines connect related ones.

## Opening framing (verbatim)

> "Designing a computer system is very different from designing an algorithm: The external interface (i.e., the requirement) is more complex, less precisely defined, and more subject to change. The system has much more internal structure, and hence many internal interfaces. The measure of success is much less clear."

> "The designer usually finds himself floundering in a sea of possibilities... There probably isn't a best way to build the system, or even any major part of it; much more important is to avoid choosing a terrible way, and to have clear division of responsibilities among the parts."

The thesis of the paper is in the title. They are **hints**, not laws:

> "These are not novel (with a few exceptions), foolproof recipes, laws of system design or operation, precisely formulated, consistent, always appropriate, approved by all the leading experts, or guaranteed to work; they are just hints."

This disclaimer is itself a methodological move: Lampson refuses to let his slogans become dogma. Use them, ignore them when wrong, but know them.

## The interface is the contract

The paper's deepest move (citing Parnas and Britton) is to define the interface precisely:

> "The interface between two programs consists of the set of assumptions that each programmer needs to make about the other program in order to demonstrate the correctness of his program."

> "Defining interfaces is the most important part of system design. Usually it is also the most difficult, since the interface design must satisfy three conflicting requirements: an interface should be simple, it should be complete, and it should admit a sufficiently small and fast implementation."

> "The main reason that interfaces are difficult to design is that each interface is a small programming language: it defines a set of objects, and the operations that can be used to manipulate the objects."

This is the load-bearing claim for everything that follows. Every "Keep it simple" or "Make it fast" is downstream of the question: what is the right interface for this thing?

## Functionality (named hints, verbatim)

- **Do one thing at a time, and do it well.** "An interface should capture the minimum essentials of an abstraction. Don't generalize; generalizations are generally wrong."
- **Get it right.** "Neither abstraction nor simplicity is a substitute for getting it right."
- **Make it fast, rather than general or powerful.** "If it's fast, the client can program the function it wants, and another client can program some other function."
- **Don't hide power.** "When a low level of abstraction allows something to be done quickly, higher levels should not bury this power inside something more general. The purpose of abstractions is to conceal undesirable properties; desirable ones should not be hidden."
- **Use procedure arguments to provide flexibility in an interface.**
- **Leave it to the client.** "As long as it is cheap to pass control back and forth, an interface can combine simplicity, flexibility and high performance together by solving only one problem and leaving the rest to the client."
- **Keep basic interfaces stable.**
- **Keep a place to stand, if you do have to change interfaces.** (compatibility packages, emulation layers)
- **Plan to throw one away; you will anyhow.** (citing Brooks)
- **Keep secrets of the implementation.** "Secrets are assumptions about an implementation that client programs are not allowed to make."
- **Divide and conquer.**
- **Use a good idea again, instead of generalizing it.** "A specialized implementation of the idea may be much more effective than a general one."
- **Handle normal and worst case separately as a rule, because the requirements for the two are quite different: the normal case must be fast; the worst case must make some progress.**

Aphorisms in the body:
- "If in doubt, leave it out." (Anonymous)
- "Exterminate features." (C. Thacker)
- "KISS: Keep It Simple, Stupid."
- "Everything should be made as simple as possible, but no simpler." (Einstein)
- "An engineer is a man who can do for a dime what any fool can do for a dollar."

## Speed (named hints, verbatim)

- **Split resources in a fixed way if in doubt, rather than sharing them.** "It is usually faster to allocate dedicated resources, it is often faster to access them, and the behavior of the allocator is more predictable."
- **Use static analysis if you can.**
- **Dynamic translation from a convenient representation to one which can be quickly interpreted.**
- **Cache answers to expensive computations, rather than doing them over.**
- **Use hints to speed up normal execution.** Defined precisely: "A hint, like a cache entry, is the saved result of some computation. It is different in two ways: it may be wrong, and it is not necessarily reached by an associative lookup. Because a hint may be wrong, there must be a way to check its correctness before taking any unrecoverable action."
- **When in doubt, use brute force.**
- **Compute in background when possible.**
- **Use batch processing if possible.**
- **Safety first. In allocating resources, strive to avoid disaster, rather than to attain an optimum.** "A system cannot be expected to function well if the demand for any resource exceeds two-thirds of the capacity."
- **Shed load to control demand, rather than allowing the system to become overloaded.** "There are many ways to shed load. An interactive system can refuse new users, or if necessary deny service to existing ones. A memory manager can limit the jobs being served so that their total working sets are less than the available memory. A network can discard packets. If it comes to the worst, the system can crash and start over, hopefully with greater prudence."

## Fault-tolerance (named hints, verbatim)

- **End-to-end error recovery is absolutely necessary for a reliable system, and any other error detection or recovery is not logically necessary, but is strictly for performance.** Lampson attributes this to Saltzer (1981) and applies it widely.
- **Log updates to record the truth about the state of an object.**
- **Make actions atomic or restartable.** "An atomic action (often called a transaction) is one which either completes or has no effect."

Section opener (citing Hoare):
> "The unavoidable price of reliability is simplicity."

> "Making a system reliable is not really hard, if you know how to go about it. But retrofitting reliability to an existing design is very difficult."

## The hint pattern, precisely defined

The single most-quoted definition in the paper:

> "A hint, like a cache entry, is the saved result of some computation. It is different in two ways: it may be wrong, and it is not necessarily reached by an associative lookup. Because a hint may be wrong, there must be a way to check its correctness before taking any unrecoverable action. It is checked against the truth, information which must be correct, but which can be optimized for this purpose and need not be adequate for efficient execution."

Three live examples Lampson gives:
1. The Alto/Pilot file system: disk label is the truth, the directory and free-page map are hints, checked at use.
2. ARPANET routing: each node's route table is a hint; the truth is "each node knows its own identity", so if a packet arrives misrouted it can still be delivered.
3. Ethernet carrier-sense: lack of carrier is a hint that you can send. Collision detection is the check. The exponential backoff is what you do when the hint was wrong.

This is the named pattern that gave the paper its title. Hints are a discipline for getting speed without sacrificing correctness: pair a fast, possibly-wrong guess with a slow, definitely-right check.

## Examples cited

Drawn from systems Lampson worked on or studied:
- Xerox Alto, Dorado (personal computers)
- Bravo editor (the piece-table normal/worst-case example, his own work)
- Star (Xerox office system)
- Ethernet (Metcalfe and Boggs)
- Pilot operating system
- Mesa programming language
- SDS 940 timesharing system
- Grapevine (replicated mail/registration, eventual consistency before the term existed)
- Dover laser printer (raster band-buffering as divide-and-conquer)
- Pup internet (best-efforts packet delivery)
- Cedar, Interlisp-D (incremental garbage collection)

## Conclusion (verbatim)

> "Such a collection of good advice and anecdotes is rather tiresome to read; perhaps it is best taken in small doses at bedtime. In extenuation I can only plead that I have ignored most of these rules at least once, and nearly always regretted it."

The self-deprecation is the point. Lampson is saying: I am not a guru, I am an engineer who has built things, broken them, and learned slogans I keep handy because I forget. You will forget too.

## Frames cited

Principles taken from this paper for [[Operating Principles]]:

- **Defining interfaces is the most important part of system design.** It is also the most difficult; an interface must be simple, complete, and admit a small fast implementation.
- **Each interface is a small programming language.** Design it like one.
- **Make it fast rather than general or powerful.** Then the client can build what they want; slow powerful operations tax clients who don't want the power.
- **Don't hide power.** Abstractions are for concealing undesirable properties, not desirable ones.
- **Handle normal and worst case separately.** Normal must be fast; worst must make progress.
- **Use hints (cache entries that may be wrong, with cheap checks against the truth).**
- **Shed load before failure.** Refuse new work, drop packets, crash and restart. Do not let demand exceed capacity.
- **End-to-end error recovery is logically necessary; intermediate checks are strictly for performance.**
- **Log updates; make actions atomic.** The pair gives you crash safety from the most general durability primitive.
- **Plan to throw one away.** The first implementation is for learning, not shipping.
- **Keep secrets of the implementation.** Secrets are the things that can change without breaking clients.
- **They are just hints.** No system principle is universal; every one of them has been wrong somewhere.

## Connections

- [[Butler Lampson]] mentor anchor
- [[Hints for System Design]] concept page (named patterns from this paper)
- [[Operating Principles]] (engineering discipline section)
- [[Engineer Planner Pole]]
- [[Leslie Lamport]] (Lampson reviewed Paxos Made Simple; same PARC/SRC milieu, complementary spec discipline)
- [[John Carmack]] (pragmatic engineering pole; shares "make it work, then make it right, then make it fast")
- [[John Allspaw]] (operational discipline; shed-load and graceful degradation are the operational ancestor)
