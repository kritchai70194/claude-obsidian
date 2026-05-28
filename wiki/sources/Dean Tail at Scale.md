---
type: source
title: "Dean Tail at Scale"
address: c-000313
author: "[[Jeff Dean]]"
year: 2013
source_url: "https://cacm.acm.org/magazines/2013/2/160173-the-tail-at-scale/fulltext"
raw_file: .raw/source-dean-tail-at-scale-2013.pdf
fidelity: full-text-summary
tags:
  - source
  - dean
  - founder-operator
  - systems
  - distributed-systems
  - latency
  - google
status: mature
related:
  - "[[Jeff Dean]]"
  - "[[Operating Principles]]"
  - "[[Dean Latency Numbers]]"
  - "[[Dean MapReduce]]"
  - "[[Dean Bigtable]]"
  - "[[Dean Stanford Talk]]"
  - "[[Persona]]"
---

# Dean Tail at Scale (2013)

[[Jeff Dean]] and Luiz André Barroso. "The Tail at Scale." Communications of the ACM, February 2013, Vol. 56 No. 2, pp. 74 to 80. Seven pages. The paper that named "tail latency" as a first-class engineering concern and provided the canonical toolkit for treating variability the way fault-tolerant computing treats failure.

## Provenance

- Authors: Jeffrey Dean and Luiz André Barroso (Google Fellows)
- Venue: Communications of the ACM, Feb 2013
- DOI: 10.1145/2408776.2408794
- Raw PDF: [`.raw/source-dean-tail-at-scale-2013.pdf`](../../.raw/source-dean-tail-at-scale-2013.pdf)
- Fidelity: full-text-summary (text extracted from canonical PDF, all quotes verbatim)

## Central Thesis

In large fan-out interactive systems, even rare slow responses dominate user-visible latency. You cannot eliminate variability at scale, so you build systems that mask it.

> "Just as fault-tolerant computing aims to create a reliable whole out of less-reliable parts, large online services need to create a predictably responsive whole out of less-predictable parts; we refer to such systems as 'latency tail-tolerant,' or simply 'tail-tolerant.'"

This is the deep generalization of the backup-task idea from [[Dean MapReduce]]. There, slow tasks were the killer for batch jobs. Here, slow responses are the killer for interactive ones, and the same mental move (mask variability via redundancy) applies.

## The Fan-Out Math (the load-bearing argument)

The headline scenario, verbatim:

> "Consider a system where each server typically responds in 10ms but with a 99th-percentile latency of one second. If a user request is handled on just one such server, one user request in 100 will be slow (one second). If a user request must collect responses from 100 such servers in parallel, then 63% of user requests will take more than one second."

> "Even for services with only one in 10,000 requests experiencing more than one-second latencies at the single-server level, a service with 2,000 such servers will see almost one in five user requests taking more than one second."

A real measured Google service example:

> "The 99th-percentile latency for a single random request to finish, measured at the root, is 10ms. However, the 99th-percentile latency for all requests to finish is 140ms, and the 99th-percentile latency for 95% of the requests finishing is 70ms, meaning that waiting for the slowest 5% of the requests to complete is responsible for half of the total 99%-percentile latency."

The slowest 5% are half the tail. Optimizing the median is mostly useless.

## Why Variability Exists

The paper enumerates the sources:

- **Shared resources** (CPU cores, processor caches, memory bandwidth, network)
- **Background daemons** (limited average resources, multi-millisecond hiccups when scheduled)
- **Global resource sharing** (network switches, shared filesystems)
- **Maintenance activities** (data reconstruction, log compactions in BigTable, GC pauses)
- **Queueing** (amplified at every layer)

Plus hardware trends pushing variability up:

- **Power limits.** CPUs run above their average envelope and throttle when sustained.
- **SSD garbage collection.** Background block compaction increases read latency by up to 100x at modest write loads.
- **Energy management.** Wake-from-idle latencies.

## Reducing Component Variability

Three engineering moves to keep individual components from generating the tail:

- **Differentiated service classes and shallow queues.** Run user-facing requests at higher priority. Keep low-level queues short (Google's cluster filesystem keeps few operations outstanding in the OS disk queue and maintains its own priority queues) so the priority policy can actually take effect.
- **Reduce head-of-line blocking.** Break long requests into a sequence of smaller requests so cheap queries are not stuck behind expensive ones. Google Web Search uses time-slicing on expensive queries.
- **Manage background activities and synchronized disruption.** Throttle, break down, schedule during low-load periods. For high-fan-out services, *synchronize* background work across all machines so one burst happens once on everyone rather than rolling perpetually over the fleet.

A frequently-overlooked observation:

> "Missing in this discussion so far is any reference to caching. While effective caching layers can be useful, even a necessity in some systems, they do not directly address tail latency, aside from configurations where it is guaranteed that the entire working set of an application can reside in a cache."

Caches help throughput, not tails.

## Living With Latency Variability (the canonical toolkit)

The core engineering thesis:

> "Google has therefore found it advantageous to develop tail-tolerant techniques that mask or work around temporary latency pathologies, instead of trying to eliminate them altogether."

### Within-request short-term techniques

**Hedged requests.** Send the request to one replica. If no response after a threshold, send a second. Cancel the loser. The threshold choice:

> "Defer sending a secondary request until the first request has been outstanding for more than the 95th-percentile expected latency for this class of requests. This approach limits the additional load to approximately 5% while substantially shortening the latency tail."

Measured impact:

> "In a Google benchmark that reads the values for 1,000 keys stored in a BigTable table distributed across 100 different servers, sending a hedging request after a 10ms delay reduces the 99.9th-percentile latency for retrieving all 1,000 values from 1,800ms to 74ms while sending just 2% more requests."

Two percent more load, 24x latency improvement at p99.9. This is the canonical "Pareto optimal" engineering example for the tail.

**Tied requests.** A stronger version: send to two replicas simultaneously, each tagged with the identity of the other. The first one to start execution sends a cancellation to its twin. The brief race window (one network message delay) is mitigated by a 1ms delay between the two sends.

Measured on a BigTable benchmark with three-replica file chunks, tied requests after 1ms delay:

| Percentile | No hedge (idle cluster) | Tied (idle) | No hedge (concurrent terasort) | Tied (concurrent) |
|---|---|---|---|---|
| 50%ile | 19ms | 16ms (-16%) | 24ms | 19ms (-21%) |
| 90%ile | 38ms | 29ms (-24%) | 56ms | 38ms (-32%) |
| 99%ile | 67ms | 42ms (-37%) | 108ms | 67ms (-38%) |
| 99.9%ile | 98ms | 61ms (-38%) | 159ms | 108ms (-32%) |

Overhead in disk utilization: less than 1%. The latency profile with tied requests under concurrent load matches a mostly-idle cluster without them. The operational consequence: workloads can be consolidated into one cluster instead of overprovisioned across many, with no responsiveness penalty.

### Cross-request long-term techniques

**Micro-partitions.** Generate many more partitions than machines, then dynamically reassign. BigTable does this (each tablet server holds 20 to 1,000 tablets). Failure recovery parallelizes naturally because many machines each pick up one tablet from the failed server. Load balancing happens in 5% increments instead of single-machine increments.

**Selective replication.** Detect or predict hot items and replicate them more. Google Web Search makes additional copies of popular documents. Replication can also be biased by language and adjusted as the query mix shifts through the day (Asian outage redirecting traffic to North America, etc).

**Latency-induced probation.** When a machine starts responding slowly, exclude it from live serving but keep sending shadow requests to detect when it recovers.

> "This situation is somewhat peculiar, as removal of serving capacity from a live system during periods of high load actually improves latency."

### Information retrieval techniques

**Good-enough responses.** In large IR systems, once a sufficient fraction of leaves has responded, return slightly incomplete results rather than waiting on stragglers. The probability that the missing leaf had the best result is below 1/1000 (and reduced further by replicating important documents into multiple leaves). Skip non-essential subsystems (ads, spelling correction) when they do not respond in time.

**Canary requests.** Before fanning out to thousands of leaves, send the request to one or two canaries first. Only fan out fully if the canary returns. Prevents a malformed request from crashing the entire serving fleet simultaneously. Used for every request in all of Google's large fan-out search systems.

## Mutations

The toolkit applies primarily to read-heavy operations. For writes:

> "Tolerating latency variability for operations that mutate state is somewhat easier for a number of reasons: First, the scale of latency-critical modifications in these services is generally small. Second, updates can often be performed off the critical path, after responding to the user. Third, many services can be structured to tolerate inconsistent update models for (inherently more latency-tolerant) mutations. And, finally, for those services that require consistent updates, the most commonly used techniques are quorum-based algorithms (such as Lamport's Paxos); since these algorithms must commit to only three to five replicas, they are inherently tail-tolerant."

Paxos is tail-tolerant because it commits when the majority responds, not when everyone does. Tail-tolerance was already built into the quorum primitives.

## Conclusion (the paper's own framing)

> "As systems scale up, simply stamping out all sources of performance variability will not achieve such responsiveness. Fault-tolerant techniques were developed because guaranteeing fault-free operation became infeasible beyond certain levels of system complexity. Similarly, tail-tolerant techniques are being developed for large-scale services because eliminating all sources of variability is also infeasible. Although approaches that address particular sources of latency variability are useful, the most powerful tail-tolerant techniques reduce latency hiccups regardless of root cause."

> "These tail-tolerant techniques allow designers to continue to optimize for the common case while providing resilience against uncommon cases."

The deepest line. Optimize for the median. Build tail-tolerance separately as a layer of redundancy that does not care about root cause.

## Frames Cited

- **Variability is inevitable at scale, like failure.** ([[Dean Tail at Scale]]) Stop trying to eliminate it. Build tolerance for it. This is the master frame of the paper.
- **The tail dominates the mean at fan-out.** ([[Dean Tail at Scale]]) The 99th-percentile of one server becomes the median of a 100-fan-out request. The math is unforgiving.
- **Hedged requests: 2% more load, 24x p99.9 improvement.** ([[Dean Tail at Scale]]) The canonical "small ask, huge win" engineering example.
- **Tied requests collapse the gap between idle and loaded clusters.** ([[Dean Tail at Scale]]) Operational consequence: consolidate workloads, save money, lose no responsiveness.
- **Caches help throughput, not tails.** ([[Dean Tail at Scale]]) Unless the working set fits entirely. A subtle and frequently violated rule.
- **Synchronize background work across the fleet.** ([[Dean Tail at Scale]]) One burst on everyone is better than perpetual rolling disruption.
- **Canary first, fan out second.** ([[Dean Tail at Scale]]) Free safety net against malformed requests crashing the fleet.

## Cross-References

- [[Jeff Dean]]
- [[Dean Latency Numbers]] (the underlying ratios that make the math tractable)
- [[Dean MapReduce]] (backup tasks are the batch-mode ancestor of hedged/tied requests)
- [[Dean Bigtable]] (the tied-request benchmark uses BigTable; micro-partitioning is BigTable's tablet design)
- [[Dean Stanford Talk]] (the 1000x scaling frame; tail-tolerance is one of the answers to "how did latency drop while scale grew")
- [[Operating Principles]]
- [[Persona]]

## Status

Mature. The most-cited single statement of the tail-latency thesis. The hedged-request and tied-request techniques are now table stakes in every serious large-scale serving system.
