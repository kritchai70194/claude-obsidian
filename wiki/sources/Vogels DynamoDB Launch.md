---
type: source
title: "Vogels DynamoDB Launch"
address: c-000275
author: "[[Werner Vogels]]"
year: 2012
source_url: "https://www.allthingsdistributed.com/2012/01/amazon-dynamodb.html"
fidelity: full-text-summary
raw_file: ".raw/source-vogels-dynamodb-launch.md"
created: 2026-05-28
updated: 2026-05-28
tags: [source, vogels, founder-operator, aws, dynamodb, nosql, databases]
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Operating Principles]]"
  - "[[Vogels Decade of Dynamo]]"
  - "[[Vogels Eventually Consistent]]"
  - "[[Vogels Purpose-Built Databases]]"
---

# Vogels DynamoDB Launch (January 2012)

[[Werner Vogels]]'s January 18, 2012 launch post for Amazon DynamoDB on allthingsdistributed.com. The primary-source document for the moment when the internal Dynamo lessons became a fully-managed cloud service. Connects directly to [[Vogels Decade of Dynamo]] (2017 retrospective) and [[Vogels Eventually Consistent]] (2008 vocabulary post).

## Provenance

- Author: [[Werner Vogels]]
- Year: 2012 (January 18)
- URL: https://www.allthingsdistributed.com/2012/01/amazon-dynamodb.html
- Raw extract: `.raw/source-vogels-dynamodb-launch.md` (full text, defuddled markdown)
- Fidelity: full-text-summary

## Headline Takeaways

1. **DynamoDB is what Amazon learned from running Dynamo in production.** Internal Dynamo "did nothing to reduce the operational complexity." Engineers preferred Amazon S3 and Amazon SimpleDB because those were managed. The product insight: developers want a service, not software.
2. **Managed services beat better software.** "Developers strongly preferred simplicity to fine-grained control as they voted with their feet." Even when Dynamo was technically superior to alternatives, internal teams chose the managed option.
3. **Predictable performance is itself a feature.** "Provisioned Throughput" was the new primitive. Customers specify the request rate they need and the system reconfigures itself behind the scenes. P99.9 latency, not just median.
4. **Combine the best of two products.** DynamoDB explicitly merged "the best parts of the original Dynamo design (incremental scalability, predictable high performance) with the best parts of SimpleDB (ease of administration of a cloud service, consistency, and a table-based data model that is richer than a pure key-value store)."
5. **Three-AZ synchronous replication is the default.** Built-in availability and durability, not an optional upgrade.

## Key Quotes (verbatim)

### The 15-year lineage

> "DynamoDB is the result of 15 years of learning in the areas of large scale non-relational databases and cloud services."

### Why internal Dynamo was not enough

> "While Dynamo gave them a system that met their reliability, performance, and scalability needs, it did nothing to reduce the operational complexity of running large database systems. Since they were responsible for running their own Dynamo installations, they had to become experts on the various components running in multiple data centers."

### The litmus moment (developers vote with their feet)

> "It became obvious that developers strongly preferred simplicity to fine-grained control as they voted 'with their feet' and adopted cloud-based AWS solutions, like Amazon S3 and Amazon SimpleDB, over Dynamo. Dynamo might have been the best technology in the world at the time but it was still software you had to run yourself. And nobody wanted to learn how to do that if they didn't have to. Ultimately, developers wanted a service."

### Service ownership and the API discipline

> "The Amazon.com ecommerce platform consists of hundreds of decoupled services developed and managed in a decentralized fashion. Each service encapsulates its own data and presents a hardened API for others to use. Most importantly, direct database access to the data from outside its respective service is not allowed."

This is the [[Bezos 2002 API Mandate]] in the Vogels voice, ten years after the mandate.

### The 99.9th percentile as an explicit design requirement

> "Another important requirement for Dynamo was predictability. This is not just predictability of median performance and latency, but also at the end of the distribution (the 99.9th percentile), so we could provide acceptable performance for virtually every customer."

### Combining Dynamo and SimpleDB

> "We concluded that an ideal solution would combine the best parts of the original Dynamo design (incremental scalability, predictable high performance) with the best parts of SimpleDB (ease of administration of a cloud service, consistency, and a table-based data model that is richer than a pure key-value store)."

### Provisioned throughput as the new primitive

> "As satisfied as engineers can be with the simplicity of cloud-based solutions, they would love to specify the request throughput they need and let the system reconfigure itself to meet their requirements. Without this ability, engineers often have to carefully manage caching systems to ensure they can achieve low-latency and predictable performance as their workloads scale."

### What "managed" means in 2012

> "DynamoDB frees developers from the headaches of provisioning hardware and software, setting up and configuring a distributed database cluster, and managing ongoing cluster operations. It handles all the complexities of scaling and partitions and re-partitions your data over more machine resources to meet your I/O performance requirements."

### The cost of self-hosted NoSQL

> "We have seen many job postings from companies using NoSQL products that are looking for NoSQL database engineers to help scale their installations. We know from our Amazon experiences that once these clusters start growing, managing them becomes the same nightmare that running large RDBMS installations was."

## What This Brain Takes From It

- **Developers want a service, not software.** The Dynamo to DynamoDB transition is the canonical example. If your beautifully engineered library is not also a managed service, your users will pick the inferior managed service every time. Generalizes to AI infra, observability, identity, payments.
- **Tail-latency is a product spec.** P99.9 named in the launch post. Compare [[Dean Latency Numbers]]: this is the operational consequence of taking the tail seriously.
- **Encapsulate data inside services. Always.** "Direct database access to the data from outside its respective service is not allowed." A blunt restatement of the [[API First]] principle. The shared-database anti-pattern is named and prohibited.
- **Naming combinations of trade-offs.** "Provisioned Throughput" is the named primitive that resolves the tension between cloud uniformity and customer-specific performance. Compare [[Vogels S3 Strong Consistency]] refuse-the-trade-off pattern.
- **Take the best parts of multiple internal systems.** DynamoDB is explicitly a synthesis, not a clean-slate redesign. Mature engineering looks like this.

## Frames Cited

- [[API First]] / shared-database prohibition (verbatim Vogels)
- "Developers want a service, not software" (the named lesson)
- P99.9 as design requirement
- Provisioned throughput as a managed-service primitive
- Three-AZ synchronous replication as default availability posture
- The [[Bezos 2002 API Mandate]] consequences described from the inside

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels Decade of Dynamo]] (2017 retrospective, the long-term view of this 2012 launch)
- [[Vogels Eventually Consistent]] (2008, the vocabulary that made DynamoDB's consistency knob designable)
- [[Vogels Purpose-Built Databases]] (2018, the thesis DynamoDB launched)
- [[Vogels Aurora Ascendant]] (the relational counterpart, six years later)
- [[Bezos 2002 API Mandate]]
- [[Operating Principles]]
- [[Persona]]

## Status

Mature, full-text. The "developers want a service" lesson and the verbatim shared-database prohibition are the load-bearing citations.
