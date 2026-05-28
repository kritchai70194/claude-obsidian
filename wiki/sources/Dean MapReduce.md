---
type: source
title: "Dean MapReduce"
address: c-000311
author: "[[Jeff Dean]]"
year: 2004
source_url: "https://research.google.com/archive/mapreduce-osdi04.pdf"
raw_file: .raw/source-dean-mapreduce-2004.pdf
fidelity: full-text-summary
tags:
  - source
  - dean
  - founder-operator
  - systems
  - distributed-systems
  - google
status: mature
related:
  - "[[Jeff Dean]]"
  - "[[Operating Principles]]"
  - "[[Dean Stanford Talk]]"
  - "[[Dean Bigtable]]"
  - "[[Dean Tail at Scale]]"
  - "[[Persona]]"
---

# Dean MapReduce (2004)

[[Jeff Dean]] and Sanjay Ghemawat. "MapReduce: Simplified Data Processing on Large Clusters." OSDI 2004. The canonical paper that defined a generation of distributed batch computation and birthed an industry of MapReduce-shaped systems (Hadoop, Spark, BigQuery). Twelve pages. The contribution is not the math. It is the abstraction.

## Provenance

- Authors: Jeffrey Dean, Sanjay Ghemawat
- Venue: OSDI 2004 (6th Symposium on Operating Systems Design and Implementation)
- URL: https://research.google.com/archive/mapreduce-osdi04.pdf
- Raw PDF: [`.raw/source-dean-mapreduce-2004.pdf`](../../.raw/source-dean-mapreduce-2004.pdf)
- Fidelity: full-text-summary (text extracted from canonical PDF, all quotes verbatim from authors)

## Central Result

A two-function abstraction (map and reduce, borrowed from Lisp) plus a runtime library is enough to express the bulk of large-scale data processing problems at Google: indexing, log aggregation, graph computations, machine learning. The runtime hides the entire mess of distributed-systems engineering from the user.

> "As a reaction to this complexity, we designed a new abstraction that allows us to express the simple computations we were trying to perform but hides the messy details of parallelization, fault-tolerance, data distribution and load balancing in a library."

> "The major contributions of this work are a simple and powerful interface that enables automatic parallelization and distribution of large-scale computations, combined with an implementation of this interface that achieves high performance on large clusters of commodity PCs."

This is the founder-operator move stated plainly. Find a shape that repeats. Extract it. Hide the hard parts.

## Programming Model

```
map    (k1, v1)         -> list(k2, v2)
reduce (k2, list(v2))   -> list(v2)
```

The user writes two pure functions. Everything else is the library's problem.

WordCount is the canonical example (verbatim from the paper):

```
map(String key, String value):
  // key: document name, value: document contents
  for each word w in value:
    EmitIntermediate(w, "1");

reduce(String key, Iterator values):
  // key: a word, values: a list of counts
  int result = 0;
  for each v in values:
    result += ParseInt(v);
  Emit(AsString(result));
```

Other examples the paper enumerates as one-screen MapReduce programs: distributed grep, URL access frequency, reverse web-link graph, term-vector per host, inverted index, distributed sort.

## Implementation Architecture

One master, many workers. The master picks idle workers and assigns each a map task or a reduce task. Inputs are split into M pieces (typically 16 MB to 64 MB each). Intermediate keys are partitioned into R regions, often by `hash(key) mod R`. The master keeps O(M+R) scheduling state and O(M*R) metadata (about one byte per map-reduce task pair).

Typical operating point Dean cites: M = 200,000, R = 5,000, on 2,000 worker machines.

### Fault Tolerance

The library is designed around the assumption that machine failures are routine.

> "Since the MapReduce library is designed to help process very large amounts of data using hundreds or thousands of machines, the library must tolerate machine failures gracefully."

Mechanism: master pings every worker periodically. If no response, the worker is marked failed, and any work it had completed (map tasks; their output is on local disk) is reset to idle and reassigned. Completed reduce tasks survive worker failure because their output is in GFS.

The load-bearing example:

> "MapReduce is resilient to large-scale worker failures. For example, during one MapReduce operation, network maintenance on a running cluster was causing groups of 80 machines at a time to become unreachable for several minutes. The MapReduce master simply re-executed the work done by the unreachable worker machines, and continued to make forward progress, eventually completing the MapReduce operation."

Re-execution is the primary fault-tolerance mechanism. This requires that map and reduce be deterministic functions of their input.

### Locality

> "Network bandwidth is a relatively scarce resource in our computing environment."

GFS stores 64 MB blocks, three replicas each. The MapReduce master schedules map tasks on machines holding the input replicas, or failing that on the same network switch. "When running large MapReduce operations on a significant fraction of the workers in a cluster, most input data is read locally and consumes no network bandwidth."

### Backup Tasks (the straggler mechanism)

The single most-cited operational insight in the paper.

> "One of the common causes that lengthens the total time taken for a MapReduce operation is a straggler: a machine that takes an unusually long time to complete one of the last few map or reduce tasks in the computation."

Causes Dean enumerates: bad disk (30 MB/s drops to 1 MB/s from correctable errors), contention from other cluster tasks, a bug in machine init code that disabled processor caches (100x slowdown). The fix:

> "When a MapReduce operation is close to completion, the master schedules backup executions of the remaining in-progress tasks. The task is marked as completed whenever either the primary or the backup execution completes."

Cost: a few percent more compute. Benefit measured in the paper: the sort program takes 44% longer with backup tasks disabled. This is the seed of the tail-latency thesis that becomes [[Dean Tail at Scale]] nine years later.

## Refinements

- **Combiner functions.** Partial pre-aggregation on the map side, for commutative-associative reducers. Cuts network traffic enormously for Zipf-distributed keys ("the", "of", etc).
- **Skipping bad records.** A signal handler catches segfaults, sends a "last gasp" UDP packet identifying the offending record. Two failures = the record is skipped on next retry. Forward progress over correctness when the bug is in a third-party library.
- **Local execution mode.** A sequential single-machine implementation of the same library, for debugging with gdb.

## Performance Results

1,800 machines, dual-Xeon, 4 GB RAM each, gigabit Ethernet.

- **Grep over 1 TB:** 150 seconds end-to-end, peak 30 GB/s scan rate at 1,764 workers. About 60s of that is startup overhead.
- **Sort 1 TB (TeraSort-style):** 891 seconds. The user code is fewer than 50 lines. With backup tasks disabled: 1,283 seconds (44% slower). With 200 machines intentionally killed mid-job: 933 seconds (only 5% slower than normal).

## Experience at Google

By August 2004 Google was running 29,423 MapReduce jobs per month, average completion time 634 seconds, average 157 worker machines per job, average 1.2 worker deaths per job. 426 unique map/reduce combinations checked into the source tree, up from 0 in early 2003.

The killer application was a rewrite of the web indexing system as five to ten chained MapReduce passes. The benefits, in Dean's own words:

> "The indexing code is simpler, smaller, and easier to understand, because the code that deals with fault tolerance, distribution and parallelization is hidden within the MapReduce library. For example, the size of one phase of the computation dropped from approximately 3800 lines of C++ code to approximately 700 lines when expressed using MapReduce."

> "The performance of the MapReduce library is good enough that we can keep conceptually unrelated computations separate, instead of mixing them together to avoid extra passes over the data. This makes it easy to change the indexing process. For example, one change that took a few months to make in our old indexing system took only a few days to implement in the new system."

The second point is the deep one. A good abstraction lets you stop mashing unrelated logic together for performance reasons. Decoupling at the conceptual layer becomes affordable because the library's overhead is low enough.

## Conclusions (paper's own framing)

> "First, restricting the programming model makes it easy to parallelize and distribute computations and to make such computations fault-tolerant. Second, network bandwidth is a scarce resource. A number of optimizations in our system are therefore targeted at reducing the amount of data sent across the network. Third, redundant execution can be used to reduce the impact of slow machines, and to handle machine failures and data loss."

Three lessons, one paper. Each is load-bearing.

## Frames Cited

- **Restriction enables abstraction.** ([[Dean MapReduce]]) The whole reason MapReduce works is that map and reduce are limiting. Library can parallelize and recover because the user code cannot do arbitrary things. A constraint is a feature.
- **Re-execution as the primary fault-tolerance mechanism.** ([[Dean MapReduce]]) Don't try to handle every failure mode in-place. Just re-run. The cluster is big enough.
- **The straggler is the killer, not the failure.** ([[Dean MapReduce]]) Tasks that finish slowly are more damaging than tasks that crash. Backup tasks are the seed of [[Dean Tail at Scale]].
- **Locality is a budget item.** ([[Dean MapReduce]]) Network bandwidth is scarcer than CPU. Schedule near the data.
- **An abstraction earns its existence when it lets you stop mashing unrelated logic together.** ([[Dean MapReduce]]) The indexing rewrite is the proof: 3800 lines collapse to 700, and unrelated phases can be separated without paying a performance tax.

## Cross-References

- [[Jeff Dean]]
- [[Dean Stanford Talk]] (the 2010 talk that retrospectively explains MapReduce as pattern-recognition)
- [[Dean Bigtable]] (built two years later on top of GFS, integrates with MapReduce via wrappers)
- [[Dean Tail at Scale]] (backup tasks generalized to interactive systems)
- [[Operating Principles]]
- [[Persona]]

## Status

Mature. Canonical. The fault-tolerance and straggler-recovery moves here become Dean's operating signature across the next two decades.
