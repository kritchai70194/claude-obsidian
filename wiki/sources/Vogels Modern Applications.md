---
type: source
title: "Vogels Modern Applications"
address: c-000278
author: "[[Werner Vogels]]"
year: 2019
source_url: "https://www.allthingsdistributed.com/2019/08/modern-applications-at-aws.html"
fidelity: full-text-summary
raw_file: ".raw/source-vogels-modern-applications.md"
created: 2026-05-28
updated: 2026-05-28
tags: [source, vogels, founder-operator, aws, microservices, serverless, architecture, two-pizza-team]
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Operating Principles]]"
  - "[[Vogels Distributed Computing Manifesto]]"
  - "[[Vogels Lambda Launch]]"
  - "[[Vogels Purpose-Built Databases]]"
  - "[[Bezos 2002 API Mandate]]"
---

# Vogels Modern Applications (August 2019)

[[Werner Vogels]]'s August 28, 2019 post on allthingsdistributed.com. The 5-pillar synthesis of "modern application development" as Amazon practices it. Names microservices, purpose-built databases, automated release pipelines, serverless operations, and continuous security as the components.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2019 (August 28)
- URL: https://www.allthingsdistributed.com/2019/08/modern-applications-at-aws.html
- Raw extract: `.raw/source-vogels-modern-applications.md` (full text via WebFetch; defuddle skeleton-only fallback)
- Fidelity: full-text-summary

## Headline Takeaways

1. **The Amazon DNA in one sentence.** "Invent, launch, reinvent, relaunch, start over, rinse, repeat, again and again." The iterative process is the operating system.
2. **The five pillars of modern application development.** Microservices, purpose-built databases, automated release pipelines, serverless operational model, automated continuous security. "In any order."
3. **Two-pizza teams as the org companion to microservices.** "Small enough that we could feed each team with only two pizzas." Conway's law inverted: structure the org to match the architecture you want.
4. **Decoupled databases are part of microservices.** "Modern applications are built with decoupled data stores in which there is a one-to-one mapping of database and microservice, rather than a single database." Shared databases are explicitly named as the wrong pattern.
5. **"As serverless as possible" is the operational model.** "We're not completely serverless ourselves, but we're moving in that direction. And so are many of our customers." This is the directional commitment, not a binary state.
6. **Security is built into every component.** "Security is no longer the sole responsibility of the security team. Rather, it is deeply integrated into every stage of the development lifecycle."

## Key Quotes (verbatim)

### The Amazon iterative process

> "Innovation has always been part of the Amazon DNA, but about 20 years ago, we went through a radical transformation with the goal of making our iterative process: 'invent, launch, reinvent, relaunch, start over, rinse, repeat, again and again', even faster."

### Why monoliths broke

> "The giant, monolithic 'bookstore' application and giant database that we used to power Amazon.com limited our speed and agility. Whenever we wanted to add a new feature or product for our customers, like video streaming, we had to edit and rewrite vast amounts of code on an application that we'd designed specifically for our first product, the bookstore."

### Two-pizza teams

> "To support this new approach to architecture, we broke down our functional hierarchies and restructured our organization into small, autonomous teams, small enough that we could feed each team with only two pizzas. We focused each of these 'two-pizza teams' on a specific product, service, or feature set, giving them more authority over a specific portion of the app."

### Dozens to millions

> "We've gone from deploying dozens of feature deployments each year to millions, as Amazon has grown."

### The five pillars (named)

> "To succeed in using application development to increase agility and innovation speed, organizations must adopt five elements, in any order: microservices; purpose-built databases; automated software release pipelines; a serverless operational model; and automated, continuous security."

### One database per microservice

> "Modern applications are built with decoupled data stores in which there is a one-to-one mapping of database and microservice, rather than a single database. This is an important shift from a traditional application architecture, because just as a monolithic application poses scaling and fault tolerance challenges as it grows, so does a database. Plus, a single database is a single point of failure."

### Deploying without humans was scary

> "At first, we found deploying without human intervention to be scary. But after we invested time in writing the right tests and fail-safes, we found that not only did it dramatically increase our speed and agility, it also improved the quality of the code."

### Secret sauce vs undifferentiated heavy lifting

> "These moving parts can be divided into two categories: Activities that are part of a company's 'secret sauce' and make it successful in the market, like creating a unique user experience and developing innovative products. Activities that we often refer to as 'undifferentiated heavy lifting,' which are tasks that must get done but don't provide competitive advantage."

### Serverless is the whole stack

> "When we say 'serverless,' we're referring to services that run without the need for infrastructure provisioning and scaling, have built-in availability and security, and use a pay-for-value billing model. Serverless isn't just Lambda, it's the entire application stack."

### A whole generation that never touched a server

> "In fact, we anticipate that there will soon be a whole generation of developers who have never touched a server and only write business logic."

### Security as a continuous, distributed concern

> "In modern applications, security features are built into every component of the application and automatically tested and deployed with each release. This means that security is no longer the sole responsibility of the security team. Rather, it is deeply integrated into every stage of the development lifecycle."

### Concrete proof points

> "Edmunds.com, which offers up-to-date vehicle information to car shoppers, has reduced the time needed to roll out new website features from six months to one week. The startup Bynder has also decreased the time it takes to bring products to market from one year to just one month."

## What This Brain Takes From It

- **The 5-pillar checklist.** Whenever evaluating a modernization plan, check it against the five named pillars. Missing pillars are technical debt waiting to surface.
- **Conway's law as a deliberate lever.** [[Two-Pizza Team]] is not a productivity trick; it is the organizational form that lets microservices actually evolve independently. Skipping the org change while doing the architecture change produces a distributed monolith.
- **The bookstore is the canonical anti-example.** Vogels keeps returning to the 1998 monolith. Anyone arguing for a shared codebase + shared database should explain why their case is different from 1998 Amazon.
- **"One database per microservice" is the rule.** Shared databases are the anti-pattern named in 1998 ([[Distributed Computing Manifesto]]) and reaffirmed in 2019.
- **"Undifferentiated heavy lifting" is the test for what to offload.** If a function is not part of your "secret sauce," there is a service that already does it better. Run that test continuously.
- **"As serverless as possible" is a direction, not a destination.** Useful framing for any infra decision: the right question is which way you are moving.
- **Deploying without humans is scary then better.** The leap to CD is named as emotionally hard. Naming the fear is the cure.

## Frames Cited

- [[Two-Pizza Team]] (verbatim)
- The 5 pillars of modern application development (verbatim, the named list)
- "One database per microservice" (verbatim)
- "Undifferentiated heavy lifting" as the offload test
- "Secret sauce vs undifferentiated heavy lifting" dichotomy
- "Serverless is the whole stack" (compute + data + integration)
- Security integrated into every component

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels Distributed Computing Manifesto]] (the 1998 document referenced by name)
- [[Vogels Lambda Launch]] (the compute primitive underpinning serverless)
- [[Vogels Purpose-Built Databases]] (the database pillar)
- [[Vogels DynamoDB Launch]] (the canonical purpose-built database)
- [[Bezos 2002 API Mandate]] (the architectural substrate that made all five pillars possible)
- [[Operating Principles]], Five-pillar checklist
- [[Persona]]

## Status

Mature, full-text. The five-pillar list and the two-pizza-team definition are the load-bearing citations. Useful as a single-document reference when arguing for or against any modernization plan.
