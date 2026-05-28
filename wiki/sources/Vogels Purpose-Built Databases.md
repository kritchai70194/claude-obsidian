---
type: source
title: "Vogels Purpose-Built Databases"
address: c-000279
author: "[[Werner Vogels]]"
year: 2018
source_url: "https://www.allthingsdistributed.com/2018/06/purpose-built-databases-in-aws.html"
fidelity: full-text-summary
raw_file: ".raw/source-vogels-purpose-built-databases.md"
created: 2026-05-28
updated: 2026-05-28
tags: [source, vogels, founder-operator, aws, databases, polyglot-persistence]
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Operating Principles]]"
  - "[[Vogels DynamoDB Launch]]"
  - "[[Vogels Aurora Ascendant]]"
  - "[[Vogels Decade of Dynamo]]"
---

# Vogels Purpose-Built Databases (June 2018)

[[Werner Vogels]]'s June 21, 2018 post on allthingsdistributed.com (1529 words). Titled "A one size fits all database doesn't fit anyone." The single document that names the polyglot-persistence thesis as official AWS strategy. Cites the 70% key-value workload finding as the historical justification.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2018 (June 21)
- URL: https://www.allthingsdistributed.com/2018/06/purpose-built-databases-in-aws.html
- Raw extract: `.raw/source-vogels-purpose-built-databases.md` (full text via WebFetch; defuddle skeleton-only fallback)
- Fidelity: full-text-summary

## Headline Takeaways

1. **The monolithic-database era is over.** "The days of the one-size-fits-all monolithic database are behind us." This is a named pronouncement, not a hedge.
2. **Six categories of database, each purpose-built.** Relational, key-value, document, graph, in-memory, search. Each "solves a specific problem or a group of problems."
3. **The 70% finding restated.** "About 70 percent of our operations were key-value lookups." Originally surfaced in [[Vogels Decade of Dynamo]]; here used as the empirical justification for the polyglot strategy.
4. **Relational is alive.** "Amazon Aurora remains the fastest growing service in AWS history." The post is not anti-relational; it is anti-relational-as-default.
5. **Pair each use case with the database that fits.** The matching is the work. The named anti-pattern: "the database was driving the data model for the application use case."
6. **Real customers use 3-5 databases.** Airbnb, Capital One, Expedia, Zynga, Johnson & Johnson are named with their specific database combinations. The polyglot strategy is described as routine practice, not exotic.

## Key Quotes (verbatim)

### The thesis

> "Seldom can one database fit the needs of multiple distinct use cases. The days of the one-size-fits-all monolithic database are behind us, and developers are now building highly distributed applications using a multitude of purpose-built databases."

### The named anti-pattern

> "For decades because the only database choice was a relational database, no matter the shape or function of the data in the application, the data was modeled as relational. Instead of the use case driving the requirements for the database, it was the other way around. The database was driving the data model for the application use case."

### The 70% finding

> "We found that about 70 percent of our operations were key-value lookups, where only a primary key was used and a single row would be returned. With no need for referential integrity and transactions, we realized these access patterns could be better served by a different type of database."

### Why scaling up was not an option

> "Further, with the growth and scale of Amazon.com, boundless horizontal scale needed to be a key design point, scaling up simply wasn't an option."

### The framing that resolves the tension

> "What we experienced at Amazon.com was using a database beyond its intended purpose. That learning is at the heart of this blog post: databases are built for a purpose and matching the use case with the database will help you write high-performance, scalable, and more functional applications faster."

### The six categories (named)

> "Developers now have the choice of relational, key-value, document, graph, in-memory, and search databases. Each of these databases solve a specific problem or a group of problems."

### Key-value purpose statement

> "The purpose of DynamoDB is to provide 'consistent single-digit millisecond latency for any scale of workloads.'"

### Aurora purpose statement

> "Amazon Aurora remains the fastest growing service in AWS history."

### Real customer combinations

> "Airbnb uses DynamoDB to store users' search history for quick lookups as part of personalized search. Airbnb also uses ElastiCache to store session states in-memory for faster site rendering, and they use MySQL on Amazon RDS as their primary transactional database."

> "Capital One uses Amazon RDS to store transaction data for state management, Amazon Redshift to store web logs for analytics that need aggregations, and DynamoDB to store user data so that customers can quickly access their information with the Capital One app."

> "Zynga migrated the Zynga poker database from a MySQL farm to DynamoDB and got a massive performance boost. Queries that used to take 30 seconds now take one second."

### The closing exhortation

> "Just as they are no longer writing monolithic applications, developers also are no longer using a single database for all use cases in an application, they are using many databases."

## What This Brain Takes From It

- **The polyglot thesis as a strategic position, not a tactic.** When evaluating any new application, list the use cases first, then pick the database per use case. Default-to-relational is the named anti-pattern.
- **The 70% finding is one of the highest-leverage measurements in cloud computing.** It justified DynamoDB, justified the broader purpose-built thesis, and is still the canonical answer to "why NoSQL." Measure your access patterns before choosing your store.
- **Naming the six categories is itself a contribution.** Relational, key-value, document, graph, in-memory, search. Anyone designing for the cloud should be able to enumerate this list and articulate when each wins.
- **Database choice is application architecture.** A team that uses one database for everything has implicitly accepted constraints across the entire app. The polyglot move pushes the decision down to the right grain.
- **Aurora as the relational option is part of the polyglot story.** The post explicitly notes Aurora's growth alongside DynamoDB. Polyglot does not mean abandoning relational. It means picking relational only where relational wins.
- **Real customer architectures are 3-5 databases.** Worth memorizing the Airbnb / Capital One / Expedia patterns as canonical examples.

## Frames Cited

- "One size fits all doesn't fit anyone" (the named thesis)
- "Use case drives database choice, not the other way around"
- 70% key-value lookups (the historical measurement)
- Six database categories named
- Polyglot persistence as standard practice
- Aurora as the fastest-growing AWS service ever (2018 vintage)

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels DynamoDB Launch]] (2012, the key-value option)
- [[Vogels Aurora Ascendant]] (2019, the relational option)
- [[Vogels Decade of Dynamo]] (2017, the source of the 70% measurement)
- [[Vogels Modern Applications]] (2019, "purpose-built databases" as one of five pillars)
- [[Operating Principles]], Measure access patterns before choosing your store
- [[Persona]]

## Status

Mature, full-text. The "one size fits all" thesis statement and the six-category enumeration are the load-bearing citations. The 70% measurement appears in three Vogels posts (2008 EC, 2017 Decade, 2018 here); this post is the strategic restatement.
