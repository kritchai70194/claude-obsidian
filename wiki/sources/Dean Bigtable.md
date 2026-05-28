---
type: source
title: "Dean Bigtable"
address: c-000312
author: "[[Jeff Dean]]"
year: 2006
source_url: "https://research.google.com/archive/bigtable-osdi06.pdf"
raw_file: .raw/source-dean-bigtable-2006.pdf
fidelity: full-text-summary
tags:
  - source
  - dean
  - founder-operator
  - systems
  - distributed-systems
  - storage
  - google
status: mature
related:
  - "[[Jeff Dean]]"
  - "[[Operating Principles]]"
  - "[[Dean MapReduce]]"
  - "[[Dean Stanford Talk]]"
  - "[[Dean Tail at Scale]]"
  - "[[Persona]]"
---

# Dean Bigtable (2006)

Fay Chang, [[Jeff Dean]], Sanjay Ghemawat, Wilson Hsieh, Deborah Wallach, Mike Burrows, Tushar Chandra, Andrew Fikes, Robert Gruber. "Bigtable: A Distributed Storage System for Structured Data." OSDI 2006. Fourteen pages. Two and a half years of design and implementation before publication, seven person-years of engineering, in production at Google since April 2005.

## Provenance

- Authors: Chang, Dean, Ghemawat, Hsieh, Wallach, Burrows, Chandra, Fikes, Gruber (Google, Inc.)
- Venue: OSDI 2006
- URL: https://research.google.com/archive/bigtable-osdi06.pdf
- Raw PDF: [`.raw/source-dean-bigtable-2006.pdf`](../../.raw/source-dean-bigtable-2006.pdf)
- Fidelity: full-text-summary (text extracted from canonical PDF, all quotes verbatim)

## Central Result

A wide-column distributed storage system serving more than sixty Google products (Web indexing, Google Analytics, Google Earth, Google Finance, Orkut, Personalized Search, Writely) from clusters of a handful to thousands of servers, storing up to hundreds of terabytes per cluster. Not a relational database. Not a key-value store. A new shape:

> "A Bigtable is a sparse, distributed, persistent multi-dimensional sorted map. The map is indexed by a row key, column key, and a timestamp; each value in the map is an uninterpreted array of bytes."

```
(row:string, column:string, time:int64) -> string
```

The data model is the contribution. Everything else is implementation.

## Data Model

- **Rows.** Arbitrary strings up to 64 KB (typically 10 to 100 bytes). Every read or write of a single row is atomic. Rows are stored in lexicographic order, partitioned into tablets (100 to 200 MB each) which are the unit of distribution.
- **Column families.** Grouping of column keys. Access control, disk accounting, memory accounting all happen at this level. Column families are few (hundreds at most) and rarely change. Columns within a family are unbounded.
- **Timestamps.** 64-bit integers, decreasing-order so most recent is read first. Per-column-family garbage collection: keep last N versions, or keep versions newer than T.

The Webtable example throughout: row key = reversed URL ("com.cnn.www"), "contents:" column family stores HTML by crawl timestamp, "anchor:" column family stores incoming link text keyed by referring site.

## API

C++ interface. Single-row transactions only (read-modify-write atomic on a single row). No general cross-row transactions ("we did not have an immediate use for them, however, we did not implement them"). Cells can be integer counters. Server-side scripts via Sawzall. MapReduce integration via wrappers letting Bigtables serve as input or output for MapReduce jobs.

## Building Blocks

> "Bigtable is built on several other pieces of Google infrastructure."

- **GFS** (Google File System) for storing log and data files.
- **Chubby**, a distributed lock service: five replicas with Paxos, one elected master. Used for at-most-one master guarantee, bootstrap location of Bigtable data, tablet-server discovery, schema storage, ACLs. Bigtable becomes unavailable if Chubby is unavailable; measured unavailability from Chubby was 0.0047% on average across 14 clusters.
- **SSTable** file format: persistent, ordered, immutable map from keys to values. Internally a sequence of 64 KB blocks plus a block index. A lookup is one disk seek. Optionally fully memory-mapped.
- **Cluster management system** for job scheduling and machine monitoring.

## Implementation

Three components: a client library, one master, many tablet servers. Tablet servers handle reads and writes. Clients do not go through the master. "Because Bigtable clients do not rely on the master for tablet location information, most clients never communicate with the master. As a result, the master is lightly loaded in practice."

### Tablet Location

A three-level hierarchy modeled on a B+ tree: a Chubby file points to the root tablet; the root tablet points to METADATA tablets; METADATA tablets point to user tablets. The root is special, never split. Scheme addresses 2^34 tablets (or 2^61 bytes at 128 MB METADATA tablets). Clients cache aggressively; an empty cache costs three round-trips, a stale cache up to six.

### Tablet Serving

Updates go to a commit log (group-committed) and a sorted in-memory buffer called a memtable. Older updates live in SSTables. Reads merge the memtable view with the SSTables.

- **Minor compaction:** memtable hits threshold, gets frozen, converted to SSTable on disk, new memtable created. Two purposes: shrink memory, shorten recovery time.
- **Merging compaction:** combines a few SSTables and the memtable into one new SSTable.
- **Major compaction:** rewrites all SSTables into exactly one, producing a clean SSTable with no deletion markers. Used to reclaim deleted-data storage and ensure timely deletion.

## Refinements

- **Locality groups.** Group column families that are accessed together. Separate SSTable per locality group per tablet. Page metadata can live in one group while page contents live in another so metadata reads do not touch the body. In-memory locality groups load lazily and stay in memory; used internally for the METADATA location column.
- **Compression.** Two-pass scheme: Bentley-McIlroy long-window dictionary compression followed by fast small-window compression. Encodes at 100 to 200 MB/s, decodes at 400 to 1000 MB/s. Achieved 10-to-1 compression on Webtable (vs 3-to-1 for typical Gzip on HTML) because rows from the same host are stored adjacently and share boilerplate.
- **Caching.** Two levels: Scan Cache for key-value pairs, Block Cache for SSTable blocks.
- **Bloom filters.** Per locality group. Lets the system answer "might this SSTable contain this row/column" without touching disk. "Our use of Bloom filters also implies that most lookups for non-existent rows or columns do not need to touch disk."
- **Single commit log per tablet server** (not per tablet). Required because per-tablet logs would generate too many concurrent GFS writes. Complicates recovery: log must be sorted by (table, row, log sequence number) and shipped to recovering tablet servers in parallel.

## Lessons (Section 9, the most-cited section of the paper)

> "One lesson we learned is that large distributed systems are vulnerable to many types of failures, not just the standard network partitions and fail-stop failures assumed in many distributed protocols. For example, we have seen problems due to all of the following causes: memory and network corruption, large clock skew, hung machines, extended and asymmetric network partitions, bugs in other systems that we are using (Chubby for example), overflow of GFS quotas, and planned and unplanned hardware maintenance."

The actual failure surface is wider than the academic literature assumes. Defensive engineering: add checksums to RPC; remove cross-component assumptions about what error codes another system can return.

> "Another lesson we learned is that it is important to delay adding new features until it is clear how the new features will be used. For example, we initially planned to support general-purpose transactions in our API. Because we did not have an immediate use for them, however, we did not implement them. Now that we have many real applications running on Bigtable, we have been able to examine their actual needs, and have discovered that most applications require only single-row transactions."

YAGNI at infrastructure scale. The features you imagine your users will want are not the features they actually need.

> "A practical lesson that we learned from supporting Bigtable is the importance of proper system-level monitoring (i.e., monitoring both Bigtable itself, as well as the client processes using Bigtable)."

Per-RPC tracing for a sample of operations exposed lock contention, slow GFS writes, stuck METADATA accesses.

> "The most important lesson we learned is the value of simple designs. Given both the size of our system (about 100,000 lines of non-test code), as well as the fact that code evolves over time in unexpected ways, we have found that code and design clarity are of immense help in code maintenance and debugging."

The tablet-server membership protocol is the cautionary tale. The team iteratively complicated the protocol chasing edge cases, then "we scrapped this protocol and moved to a newer simpler protocol that depends solely on widely-used Chubby features." Complexity has a half-life; simple designs survive their authors.

## Production Reality (Section 8 highlights)

- **Google Analytics raw click table:** 200 TB, 80 billion cells, latency-sensitive.
- **Crawl table:** 800 TB, 1 trillion cells, 16 column families, 8 locality groups.
- **Google Earth imagery table:** 70 TB, 9 billion cells. Preprocessing pipeline drives MapReduce-over-Bigtable at over 1 MB/sec per tablet server.
- **Personalized Search:** stores per-user history keyed by userid, column family per action type. Built on Bigtable's eventual consistency and later moved to in-server replication.

## Conclusions

> "Given the unusual interface to Bigtable, an interesting question is how difficult it has been for our users to adapt to using it. New users are sometimes uncertain of how to best use the Bigtable interface, particularly if they are accustomed to using relational databases that support general-purpose transactions. Nevertheless, the fact that many Google products successfully use Bigtable demonstrates that our design works well in practice."

> "Finally, we have found that there are significant advantages to building our own storage solution at Google. We have gotten a substantial amount of flexibility from designing our own data model for Bigtable. In addition, our control over Bigtable's implementation, and the other Google infrastructure upon which Bigtable depends, means that we can remove bottlenecks and inefficiencies as they arise."

The last sentence is the founder-operator credo applied to infrastructure: own the stack so you can fix the bottleneck where it actually is.

## Frames Cited

- **Simple designs survive.** ([[Dean Bigtable]]) Stated explicitly as the most important lesson. Complexity accreted to handle edge cases gets debugged into its grave.
- **Delay features until usage is clear.** ([[Dean Bigtable]]) The transactions case study. Most users only need single-row; the others wanted secondary indices, a different feature entirely. YAGNI at infrastructure scale.
- **The real failure surface is wider than the literature assumes.** ([[Dean Bigtable]]) Memory corruption, clock skew, asymmetric partitions, bugs in your dependencies, quota overflow, scheduled maintenance. Plan for all of them.
- **Monitoring is half the design.** ([[Dean Bigtable]]) Per-RPC traces; cluster registration in Chubby; latency tracking per cluster. The system is not built unless it is observable.
- **Own your stack if you can.** ([[Dean Bigtable]]) "Building our own storage solution" is justified by removing bottlenecks where they actually live.
- **Sparse multi-dimensional sorted maps are a useful primitive.** ([[Dean Bigtable]]) Not relational, not key-value; somewhere in between. The shape became NoSQL.

## Cross-References

- [[Jeff Dean]]
- [[Dean MapReduce]] (built two years earlier; Bigtable integrates as input/output)
- [[Dean Stanford Talk]] (Dean retrospectively cites Bigtable as a "building block" to know)
- [[Dean Tail at Scale]] (Bigtable's micro-partitioning, tied requests, and replication echo here)
- [[Operating Principles]]
- [[Persona]]

## Status

Mature. The lessons section is among the most-cited engineering retrospectives in distributed-systems literature.
