---
type: source
title: "Lamport Byzantine Generals Problem"
address: c-000265
author: "[[Leslie Lamport]]"
year: 1982
source_url: "https://lamport.azurewebsites.net/pubs/byz.pdf"
fidelity: full-text-summary
tags: [source, lamport, engineer-planner, distributed-systems, foundational, fault-tolerance]
status: mature
related:
  - "[[Leslie Lamport]]"
  - "[[Operating Principles]]"
  - "[[Distributed Systems]]"
  - "[[Byzantine Fault Tolerance]]"
  - "[[Formal Methods]]"
---

# Lamport Byzantine Generals Problem

Lamport, Leslie; Shostak, Robert; Pease, Marshall. "The Byzantine Generals Problem." ACM Transactions on Programming Languages and Systems, Volume 4, Number 3, July 1982, pages 382-401. SRI International. The paper that named and characterized arbitrary-fault tolerance. The 3m+1 bound has been load-bearing for fault-tolerant systems for forty years and counting.

---

## Central Result

A reliable distributed system has to handle components that fail not merely by stopping, but by sending conflicting information to different parts of the system. Lamport, Shostak, and Pease formalize this as the Byzantine Generals Problem: a commander sends an order to n-1 lieutenants over a network; some unknown subset of up to m generals (possibly the commander) are traitors who can lie arbitrarily. The loyal generals must reach the same decision, and if the commander is loyal they must obey the loyal commander's order.

Two main results:

1. **With unauthenticated ("oral") messages, the problem is solvable iff n > 3m.** That is, you need at least n >= 3m + 1 to tolerate m Byzantine faults. A single liar can defeat two loyal generals.
2. **With unforgeable signed messages, the problem is solvable for any n >= m + 2.** Signatures shatter the lower bound.

The paper also extends both algorithms to incomplete communication graphs, provides connectivity bounds, and ties the whole thing back to engineering reliable computer systems via majority voting.

---

## Interactive Consistency Conditions (verbatim)

> "Byzantine Generals Problem. A commanding general must send an order to his n-1 lieutenant generals such that
> IC1. All loyal lieutenants obey the same order.
> IC2. If the commanding general is loyal, then every loyal lieutenant obeys the order he sends.
> Conditions IC1 and IC2 are called the interactive consistency conditions."

IC1 is agreement (a safety property); IC2 is validity. Note IC1 must hold even when the commander is a traitor.

---

## The 3-General Impossibility (verbatim sketch)

The paper builds intuition by showing no oral-message solution exists for n=3 with one traitor. Two scenarios are indistinguishable from Lieutenant 1's perspective: (i) commander loyal sends attack, Lieutenant 2 traitor reports "he said retreat"; (ii) commander traitor sends attack to L1 and retreat to L2. L1 cannot distinguish. Either he must attack in both (violating IC1 in case ii where L2 must retreat by symmetry) or retreat in both (violating IC2 in case i). The paper warns:

> "This argument may appear convincing, but we strongly advise the reader to be very suspicious of such nonrigorous reasoning. Although this result is indeed correct, we have seen equally plausible 'proofs' of invalid results. We know of no area in computer science or mathematics in which informal reasoning is more likely to lead to errors than in the study of this type of algorithm."

This sentence is itself a citable methodological principle. A rigorous proof appears in Pease, Shostak, Lamport (1980, JACM).

---

## The n >= 3m + 1 Bound (verbatim of generalization)

Using the 3-general impossibility, the paper shows no oral-message solution exists for n <= 3m generals coping with m traitors. The construction: assume such a solution; have each of three Byzantine generals simulate up to m "Albanian" generals from the assumed solution; derive a 3-general solution to the original problem, a contradiction.

The result is also shown for approximate agreement (IC1' "loyal lieutenants attack within 10 minutes of one another", IC2' "loyal lieutenant within 10 minutes of loyal commander's order"). Approximate agreement is no easier than exact agreement.

---

## Algorithm OM(m): Oral Messages, n >= 3m + 1

The algorithm assumes a function `majority` such that if a majority of vi equal v, then majority(v1,...,v_{n-1}) = v.

> "Algorithm OM(0).
> (1) The commander sends his value to every lieutenant.
> (2) Each lieutenant uses the value he receives from the commander, or uses the value RETREAT if he receives no value.
>
> Algorithm OM(m), m > 0.
> (1) The commander sends his value to every lieutenant.
> (2) For each i, let vi be the value Lieutenant i receives from the commander, or else be RETREAT if he receives no value. Lieutenant i acts as the commander in Algorithm OM(m-1) to send the value vi to each of the n-2 other lieutenants.
> (3) For each i, and each j != i, let vj be the value Lieutenant i received from Lieutenant j in step (2) (using Algorithm OM(m-1)), or else RETREAT if he received no such value. Lieutenant i uses the value majority(v1,...,v_{n-1})."

Recursion depth m. Messages explode: (n-1)(n-2)...(n-m-1). Message paths of length up to m+1, which Fischer and Lynch proved optimal.

**Message system assumptions** (A1-A3):

- A1. Every message that is sent is delivered correctly.
- A2. The receiver of a message knows who sent it.
- A3. The absence of a message can be detected.

A3 is critical and operationally hard. It requires synchronized clocks and bounded message delay. The paper notes that without these (or an equivalent assumption), the Byzantine Generals Problem is unsolvable even if traitors only fail by silence.

---

## Theorem 1 (verbatim)

> "THEOREM 1. For any m, Algorithm OM(m) satisfies conditions IC1 and IC2 if there are more than 3m generals and at most m traitors."

Proved via Lemma 1 (OM(m) satisfies IC2 with n > 2k + m generals and at most k traitors) by induction on m.

---

## Algorithm SM(m): Signed Messages, n >= m + 2

Adding assumption A4 changes the bound dramatically.

> "A4 (a) A loyal general's signature cannot be forged, and any alteration of the contents of his signed messages can be detected. (b) Anyone can verify the authenticity of a general's signature."

The commander signs an order and sends it. Each lieutenant who receives a new signed order adds it to his set V_i, then appends his own signature and forwards. After k signatures the message has form v:0:j1:...:jk. A lieutenant ignores duplicates and applies a function `choice(V_i)` at the end.

> "THEOREM 2. For any m, Algorithm SM(m) solves the Byzantine Generals Problem if there are at most m traitors."

Signatures eliminate the lower bound: with cryptographic non-repudiation, a traitor cannot tell two different stories to two loyal generals without leaving evidence. The cost: cryptographic infrastructure, sequence numbers to prevent replay, and the ability to detect missing messages (timeouts and synchronized clocks).

---

## Missing Communication Paths

The paper extends both algorithms to graphs that are not complete. Oral messages OM(m,p) require a 3m-regular graph (every node has a regular set of 3m neighbors with disjoint paths to every other node). For signed messages, the connectivity requirement collapses to the minimum possible: any graph in which the loyal generals form a connected subgraph admits a solution via SM(n-2) for n total generals.

> "THEOREM 4. For any m and d, if there are at most m traitors and the subgraph of loyal generals has diameter d, then Algorithm SM(m+d-1) (with the above modification) solves the Byzantine Generals Problem."

---

## Engineering Implications (Section 6)

The closing section translates the abstraction to reliable computing. Replicated processors voting on outputs require:

> "1. All nonfaulty processors must use the same input value (so they produce the same output).
> 2. If the input unit is nonfaulty, then all nonfaulty processes use the value it provides as input (so they produce the correct output).
>
> These are just our interactive consistency conditions IC1 and IC2, where the 'commander' is the unit generating the input, the 'lieutenants' are the processors, and 'loyal' means nonfaulty."

The "marginal signal on a wire" argument: a faulty input device can send a voltage that one processor reads as 0 and another as 1. Hardware cannot guarantee shared input. Byzantine agreement is required even at the chip level when extreme reliability is the goal (ballistic missile defense, flight-critical avionics).

Assumption A3 implies the need for synchronized clocks. The paper foreshadows the clock-sync problem and notes it as "as difficult a problem as the Byzantine Generals Problem itself", solved in a future paper (1985).

---

## Why It Matters

- **The 3m+1 bound is a fundamental limit** of distributed agreement under arbitrary faults. Every modern Byzantine fault tolerant system (PBFT, Tendermint, HotStuff, all blockchain consensus protocols) inherits this constraint.
- **Signatures shatter the bound.** Cryptography is not optional infrastructure; it is a constitutive change in the cost of agreement.
- **Faults are not benign.** Engineering practice tended to assume fail-stop. Lamport, Shostak, and Pease made the cost of that assumption visible and replaceable.
- **Approximate agreement is exact agreement.** You cannot relax IC1 to get cheaper algorithms; the lower bound holds even for fuzzy agreement.
- **Methodological warning.** "We know of no area in computer science or mathematics in which informal reasoning is more likely to lead to errors than in the study of this type of algorithm." The case for formal proof, in one sentence.

---

## Frames Cited

- **[[Byzantine Fault Tolerance]]:** Tolerating arbitrary (including malicious) component failures, not just fail-stop. Defined by the IC1/IC2 conditions and parameterized by m and n.
- **n >= 3m + 1:** Tight lower bound for oral-message Byzantine agreement. Requires at least four generals to tolerate one liar; thirteen to tolerate four. The constant 3 is the cost of unauthenticated messaging.
- **Interactive consistency (IC1, IC2):** Agreement plus validity. IC1 is a safety property; IC2 is a conditional correctness property. The pair captures the goal of any agreement protocol.
- **n >= m + 2 with signatures:** Cryptographic signatures collapse the bound to the trivial minimum. Two loyal generals can always agree if a third is present (even if that third is the traitor).
- **OM(m) and SM(m) algorithms:** The two canonical Byzantine agreement algorithms. Both have message paths of length up to m+1 (proved optimal by Fischer and Lynch) and require up to (n-1)(n-2)...(n-m-1) messages.
- **Synchrony assumption (A3, timeouts):** Detecting missing messages requires bounded transmission delay and synchronized clocks. Without synchrony, the problem is unsolvable even with only fail-silent faults. Foreshadows the FLP impossibility result.
- **Formal-reasoning humility:** "We know of no area in computer science or mathematics in which informal reasoning is more likely to lead to errors than in the study of this type of algorithm."

---

## Status

Mature. Companion to [[Lamport Time Clocks Distributed System]] and [[Lamport Paxos Made Simple]]. Together these three define the core of Lamport's distributed-systems contribution.
