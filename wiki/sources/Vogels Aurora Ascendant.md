---
type: source
title: "Vogels Aurora Ascendant"
address: c-000277
author: "[[Werner Vogels]]"
year: 2019
source_url: "https://www.allthingsdistributed.com/2019/03/amazon-aurora-design-cloud-native-relational-database.html"
fidelity: full-text-summary
raw_file: ".raw/source-vogels-aurora-ascendant.md"
created: 2026-05-28
updated: 2026-05-28
tags: [source, vogels, founder-operator, aws, aurora, databases, relational, distributed-systems]
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Operating Principles]]"
  - "[[Vogels DynamoDB Launch]]"
  - "[[Vogels Purpose-Built Databases]]"
  - "[[Vogels S3 Strong Consistency]]"
  - "[[Vogels Eventually Consistent]]"
---

# Vogels Aurora Ascendant (March 2019)

[[Werner Vogels]]'s March 13, 2019 post on allthingsdistributed.com (2268 words). The most-detailed public engineering explainer of Amazon Aurora's cloud-native architecture. Names the design principles: "the log is the database," cell-based architecture, quorums, fast repairs.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2019 (March 13)
- URL: https://www.allthingsdistributed.com/2019/03/amazon-aurora-design-cloud-native-relational-database.html
- Raw extract: `.raw/source-vogels-aurora-ascendant.md` (full text, defuddled markdown)
- Fidelity: full-text-summary

## Headline Takeaways

1. **Aurora reimagines the relational stack by decomposing it.** The "monolithic relational database stack hadn't changed much in the last 30-40 years." Aurora moves caching and logging into a "purpose-built, scale-out, self-healing, multitenant, database-optimized storage service."
2. **"The log is the database."** Database instances write redo log records to distributed storage; storage reconstructs page images on demand. Dirty pages never need flushing. Eliminates write amplification, gives 5x write IOPS on SysBench vs RDS MySQL.
3. **Cell-based architecture, AZ+1 durability.** 4-out-of-6 write quorum across three Availability Zones (two replicas each). System tolerates losing an entire AZ plus one more failure with no durability loss.
4. **Gray failures named as a first-class concern.** "Truly insidious problem of 'gray failures.' These occur when components do not fail completely, but become slow. If the system design does not anticipate the lag, the slow cog can degrade the performance of the overall system."
5. **Repairs at 10-GiB protection group granularity, fleet-wide.** "Massive bandwidth to complete the entire batch of repairs quickly." Repairs are seconds, not hours.
6. **One-tenth the cost of commercial-grade.** "Performance and availability of commercial grade databases at 1/10th the cost." This is the customer value statement, not just an engineering claim.

## Key Quotes (verbatim)

### The reimagining

> "To start addressing the limitations of relational databases, we reconceptualized the stack by decomposing the system into its fundamental building blocks. We recognized that the caching and logging layers were ripe for innovation. We could move these layers into a purpose-built, scale-out, self-healing, multitenant, database-optimized storage service."

### The log is the database

> "In Amazon Aurora, the log is the database. Database instances write redo log records to the distributed storage layer, and the storage takes care of constructing page images from log records on demand. Database instances never have to flush dirty pages, because the storage layer always knows what pages look like."

### Everything fails. Engineer for it.

> "As I said before, everything fails all the time. Components fail, and fail often, in large systems. Entire instances fail. Network failures can isolate significant chunks of infrastructure. Less often, an entire data center can become isolated or go down due to a natural disaster. At AWS, we engineer for failure, and we rely on cell-based architecture to combat issues before they happen."

### Gray failures named

> "And then, there's the truly insidious problem of 'gray failures.' These occur when components do not fail completely, but become slow. If the system design does not anticipate the lag, the slow cog can degrade the performance of the overall system."

### Quorums make a write fast even when something is broken

> "You don't have to wait for all three to complete before the logical write operation is declared a success. It's OK if one write fails, or is slow, because the overall operation outcome and latency aren't impacted by the outlier. This is a big deal: A write can be successful and fast even when something is broken."

### AZ+1 as the durability target

> "With Aurora, our goal is Availability Zone+1: we want to be able to tolerate a loss of a zone plus one more failure without any data durability loss, and with a minimal impact on data availability. We use a 4/6 quorum to achieve this."

### Fast repair is a function of granularity

> "An Aurora database volume is logically divided into 10-GiB logical units (protection groups), and each protection group is replicated six ways into physical units (segments). Individual segments are spread across a large distributed storage fleet. When a failure occurs and takes out a segment, the repair of a single protection group only requires moving ~10 GiB of data, which is done in seconds."

### Why six-way replication does not swamp the network

> "How is it possible to replicate data six ways and maintain high performance of writes? This would not be possible in a traditional database architecture, where full pages or disk sectors are written to storage, as the network would be swamped. By contrast, with Aurora, instances only write redo log records to storage. Those records are much smaller (typically tens to hundreds of bytes), and this makes a 4/6 write quorum possible without overloading the network."

### The customer-side outcome

> "Customers love this because Aurora provides the performance and availability of commercial grade databases at 1/10th the cost. Since Aurora's original release, it has been the fastest-growing service in the history of AWS."

### Read latency optimization

> "The client-side Aurora storage driver tracks which writes were successful for which segments. It does not need to perform a quorum read on routine page reads, because it always knows where to obtain an up-to-date copy of a page. Furthermore, the driver tracks read latencies, and always tries to read from the storage node that has demonstrated the lowest latency in the past."

## What This Brain Takes From It

- **Decompose the monolith at the right seams.** Aurora did not rewrite the database. It pulled out caching and logging because those were the right seams. Generalizes: when refactoring, identify the layers that are coupled by accident rather than necessity, and extract those.
- **The log is the unit of truth.** Write redo log records, derive everything else. This is the same insight as Kafka, event sourcing, and CRDTs: privilege the durable monotonic stream and treat snapshots as caches.
- **Gray failures are the hard ones.** Naming the failure mode is half the work. The system has to detect slow components, not just down components, and route around them.
- **Repair granularity is a design parameter.** 10-GiB protection groups make seconds-long repairs possible. Compare to RAID rebuild times that scale with disk size. The general lesson: when the unit of failure shrinks, repair time shrinks with it.
- **Quorum math is product math.** 4/6 across 3 AZs is the canonical posture for AZ+1 durability. This is a number worth memorizing as a baseline for any geographically-distributed system.
- **Read from the fastest replica.** Track read latency per segment and prefer the historically-fast one. Trivial to describe, hard to actually do, big win at scale.
- **1/10th the cost is the headline.** All the engineering rolls up to a price point. Without that, the architecture is just architecture.

## Frames Cited

- [[Everything Fails]] (verbatim, Aurora as a worked example)
- Gray failures as a named class
- "The log is the database" as a primitive
- Cell-based architecture as the AZ+1 default
- Quorum math (4/6 across 3 AZs)
- Repair granularity as a design variable
- Read from the historically-fastest replica
- 1/10th the cost as the customer headline

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels DynamoDB Launch]] (the NoSQL counterpart, six years earlier)
- [[Vogels Purpose-Built Databases]] (Aurora as the relational option in the purpose-built set)
- [[Vogels Eventually Consistent]] (the consistency vocabulary Aurora pushes back against by offering strong consistency at scale)
- [[Vogels S3 Strong Consistency]] (the same refuse-the-trade-off posture at object-storage scale)
- [[Vogels 10 Lessons from 10 Years of AWS]] (everything-fails lesson)
- [[Dean Latency Numbers]] (the latency reality that makes the quorum math necessary)
- [[Operating Principles]], Refuse-the-trade-off
- [[Persona]]

## Status

Mature, full-text. The "log is the database," gray failures, and 4/6 quorum citations are the load-bearing pieces. Cross-reference to the Verbitski SIGMOD 2017 paper available via the post.
