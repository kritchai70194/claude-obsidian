---
source_id: vogels-decade-of-dynamo
title: "A Decade of Dynamo"
author: Werner Vogels
publisher: All Things Distributed
publication_date: 2017-10
url: https://www.allthingsdistributed.com/2017/10/a-decade-of-dynamo.html
fetch_method: WebFetch (summarized extraction with quoted highlights)
fetch_date: 2026-05-24
fidelity: extracts-not-full-text
license_note: Public engineering blog post. Quoted under fair use.
---

# Source, Vogels "A Decade of Dynamo" (October 2017)

## Opening Frame

Anniversary post marking 10 years since the Dynamo whitepaper. Vogels reflects:

> "[The Dynamo whitepaper anniversary serves as] a milestone that made me reflect on how much innovation has occurred in the area of databases over the last decade."

> "Taking a customer obsessed approach to solving hard problems can have lasting impact beyond your original expectations."

## The Workload Discovery That Started Dynamo

Amazon found that their Oracle databases were underutilized for the actual workload:

> "About 70 percent of operations were of the key-value kind, where only a primary key was used and a single row would be returned."

> "An additional 20 percent would return a set of rows, but still operate on only a single table."

90% of operations didn't need relational machinery. The cost of relational consistency was being paid for queries that didn't require it.

## Three Distinct Systems (clarifying the lineage)

Vogels carefully distinguishes three things people often conflate:

1. **Original internal Dynamo (2004 to 2007).** Built to address Oracle's limitations for "high-scale, mission-critical services like Amazon's shopping cart" by "questioning assumptions traditionally held by relational databases such as the requirement for strong consistency."

2. **The Dynamo whitepaper (2007).** Published to share findings. Vogels: "The Dynamo paper was well-received and served as a catalyst to create the category of distributed database technologies commonly known today as 'NoSQL.'"

3. **DynamoDB (2012).** The AWS service. "Designed from the ground up to support extreme scale, with the security, availability, performance and manageability needed to run mission-critical workloads."

## Design Lessons for the Hosted Service

Design priorities Vogels names for DynamoDB:

- Scalable: "supporting hundreds of thousands, or even millions of AWS customers"
- Durable and highly available: "99.99 percent availability in the event of a server, a rack of servers, or an Availability Zone failure"
- Manageable: eliminating "manual capacity planning, provisioning, monitoring of servers" through automation
- Consistent performance: "single-digit millisecond latencies" at scale

## Legacy and Forward Look

> "Ten years ago, we never would have imagined the lasting impact our efforts on Dynamo would have."

> The original work "turned into a catalyst for a broader industry movement towards non-relational databases, and ultimately, an enabler for a new class of internet-scale applications."

> "It is still Day One for DynamoDB."

The "Day One" echo of [[Bezos 2016 Day 1 Letter]] is deliberate. Same year (2017 post, 2016 letter context still fresh) and same operating frame applied to a specific product.

## Provenance Note

Extracted via WebFetch summary. Companion to [[Vogels 10 Lessons from 10 Years of AWS]] from the previous year (March 2016). Same retrospective format, focused on one product instead of the whole platform.
