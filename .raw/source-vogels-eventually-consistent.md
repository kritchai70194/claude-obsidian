---
source_id: vogels-eventually-consistent
title: "Eventually Consistent"
author: Werner Vogels
publisher: All Things Distributed
publication_date: 2008-12
url: https://www.allthingsdistributed.com/2008/12/eventually_consistent.html
fetch_method: WebFetch (summarized extraction with key definitions verbatim)
fetch_date: 2026-05-24
fidelity: extracts-not-full-text
license_note: Public engineering blog post; an extended version appeared in ACM Queue and Communications of the ACM. Quoted under fair use for research.
---

# Source, Vogels "Eventually Consistent" (2008)

## Opening Definition

"This is a specific form of weak consistency; the storage system guarantees that if no new updates are made to the object, eventually all accesses will return the last updated value."

## Categorization of Consistency Models

**Strong consistency:** "After the update completes, any subsequent access (by A, B, or C) will return the updated value."

**Weak consistency:** "The system does not guarantee that subsequent accesses will return the updated value."

**Eventual consistency:** as above. The classic example given in the field is DNS.

**Causal consistency:** updates propagate based on communication between processes; unrelated observers follow standard eventual consistency rules.

**Read-your-writes consistency:** "Process A, after it has updated a data item, always accesses the updated value and will never see an older value."

**Session consistency:** guarantees read-your-writes within a session context only.

**Monotonic read consistency:** "If a process has seen a particular value for the object, any subsequent accesses will never return any previous values."

**Monotonic write consistency:** "The system guarantees to serialize the writes by the same process."

## CAP Theorem and Tradeoffs

"Only two [of three properties: data consistency, system availability, and tolerance to network partition] can be achieved at any given time."

"In larger distributed-scale systems, network partitions are a given; therefore, consistency and availability cannot be achieved at the same time."

## Provenance Note

The original ACM Queue/CACM article is the canonical published version. WebFetch summary captures the core taxonomy and CAP framing accurately, but the full article has more nuance on session contexts and read-your-writes semantics.
