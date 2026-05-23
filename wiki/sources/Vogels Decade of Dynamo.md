---
type: source
title: Vogels Decade of Dynamo
author: Werner Vogels
publication_year: 2017
url: 'https://www.allthingsdistributed.com/2017/10/a-decade-of-dynamo.html'
raw_file: .raw/source-vogels-decade-of-dynamo.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - source
  - aws
  - dynamodb
  - distributed-systems
  - vogels
status: mature
related:
  - '[[Werner Vogels]]'
  - '[[Vogels 10 Lessons from 10 Years of AWS]]'
  - '[[Vogels Eventually Consistent]]'
  - '[[Bezos 2002 API Mandate]]'
  - '[[Bezos 2016 Day 1 Letter]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Vogels "A Decade of Dynamo" (October 2017)

[[Werner Vogels]]'s 10-year retrospective on Dynamo. Companion to [[Vogels 10 Lessons from 10 Years of AWS]] from 2016; same retrospective format, focused on one product (Dynamo, then DynamoDB) rather than the whole platform. Carefully distinguishes three things people often conflate: the original internal Dynamo, the 2007 whitepaper, and the 2012 hosted service DynamoDB.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2017 (October)
- URL: https://www.allthingsdistributed.com/2017/10/a-decade-of-dynamo.html
- Raw extract: [`.raw/source-vogels-decade-of-dynamo.md`](../../.raw/source-vogels-decade-of-dynamo.md)
- Fidelity: extracts (WebFetch summary), key quotes verbatim

## Headline Takeaway

The post's most useful contribution is the workload discovery that prompted Dynamo's design:

> "About 70 percent of operations were of the key-value kind, where only a primary key was used and a single row would be returned. An additional 20 percent would return a set of rows, but still operate on only a single table."

90% of Amazon's database operations didn't need the relational consistency machinery they were paying for. That single measurement is the entire argument for the move away from relational defaults.

## The Three-System Distinction (verbatim, an underused lineage clarification)

Vogels distinguishes:

1. **Original Dynamo (2004 to 2007).** Internal system. Built for "high-scale, mission-critical services like Amazon's shopping cart" by "questioning assumptions traditionally held by relational databases such as the requirement for strong consistency."
2. **The Dynamo whitepaper (2007).** A document, not a system. Vogels: "The Dynamo paper was well-received and served as a catalyst to create the category of distributed database technologies commonly known today as 'NoSQL.'"
3. **DynamoDB (2012).** The AWS service. "Designed from the ground up to support extreme scale, with the security, availability, performance and manageability needed to run mission-critical workloads."

Conflating these obscures the actual lineage. The paper inspired Cassandra and Riak. DynamoDB is a different system, with different design priorities, that benefits from the lessons of the internal Dynamo.

## Design Priorities of the Hosted Service

For DynamoDB specifically:

- Scalable: "supporting hundreds of thousands, or even millions of AWS customers"
- Durable and highly available: "99.99 percent availability in the event of a server, a rack of servers, or an Availability Zone failure"
- Manageable: eliminating "manual capacity planning, provisioning, monitoring of servers" through automation
- Consistent performance: "single-digit millisecond latencies" at scale

The progression from internal Dynamo to DynamoDB is itself the [[Vogels 10 Lessons from 10 Years of AWS|build evolvable systems]] principle in practice.

## Closing Frame

> "Ten years ago, we never would have imagined the lasting impact our efforts on Dynamo would have."

> "It is still Day One for DynamoDB."

The "Day One" echo of [[Bezos 2016 Day 1 Letter]] is deliberate. Same operating frame, applied to one specific product instead of the company.

## What This Brain Takes From It

- **Measure before you redesign.** The 70% / 20% workload measurement is what justified moving away from relational. Without that measurement, the move would have been speculation.
- **Distinguish systems from papers from services.** Treating "Dynamo" as one thing causes confusion. The lineage clarification is itself the operational discipline of precise naming. Related to [[Vogels Eventually Consistent]]'s contribution of *vocabulary as engineering*.
- **Anniversary retrospectives are a discipline.** [[Vogels 10 Lessons from 10 Years of AWS]] in 2016 and this post in 2017 form a pattern. Reflect annually, publicly, on what worked.
- **Day One scales down to individual products.** Bezos's Day One is a company-level frame. Vogels applies it to a product (DynamoDB). Useful generalization.

## Cross-References

- [[Werner Vogels]]
- [[Vogels 10 Lessons from 10 Years of AWS]] (the platform-level companion)
- [[Vogels Eventually Consistent]] (the engineering principles underlying Dynamo design)
- [[Bezos 2002 API Mandate]] (the architectural foundation that made DynamoDB possible)
- [[Bezos 2016 Day 1 Letter]] (the framing Vogels invokes in closing)
- [[Operating Principles]]
- [[Persona]]

## Status

Mature for the cited claims and the three-system lineage clarification.
