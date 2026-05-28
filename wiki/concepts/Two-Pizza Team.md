---
type: concept
title: "Two-Pizza Team"
address: c-000307
complexity: intermediate
domain: org-design
created: 2026-05-28
updated: 2026-05-28
tags:
  - concept
  - org-design
  - founder-operator
  - bezos
  - vogels
  - amazon
status: mature
related:
  - "[[Jeff Bezos]]"
  - "[[Werner Vogels]]"
  - "[[Bezos 2002 API Mandate]]"
  - "[[Vogels Working Backwards]]"
  - "[[Vogels Modern Applications]]"
  - "[[Vogels Distributed Computing Manifesto]]"
  - "[[Working Backwards Book]]"
  - "[[Working Backwards]]"
  - "[[Customer Obsession]]"
  - "[[Long-Term Thinking]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Two-Pizza Team

> "Teams sized such that the teams would be no larger than the number of people that could be adequately fed by two large pizzas." ([[Working Backwards Book]])

Roughly 6 to 10 people. The Amazon organizational unit that makes microservice architecture actually decompose. The team size is the lever that holds coordination cost under control as the company scales. This page consolidates the discipline; the architectural counterpart lives in the [[Bezos 2002 API Mandate]] (services are forever) and the product-process counterpart in [[Working Backwards]] (PR/FAQ).

## Principles That Anchor the Pole

### 1. Conway's law as a deliberate lever

The org structure determines the architecture. Vogels names this explicitly when describing how Amazon broke its 1998 monolith.

> "To support this new approach to architecture, we broke down our functional hierarchies and restructured our organization into small, autonomous teams, small enough that we could feed each team with only two pizzas. We focused each of these 'two-pizza teams' on a specific product, service, or feature set, giving them more authority over a specific portion of the app." ([[Vogels Modern Applications]])

Skipping the org change while doing the architecture change produces a distributed monolith. The two-pizza team is the structural form of microservice ownership.

### 2. Each team is a small startup inside a big company

The original Vogels framing from 2006.

> "In the fine grained services approach that we use at Amazon, services do not only represent a software structure but also the organizational structure. The services have a strong ownership model, which combined with the small team size is intended to make it very easy to innovate. In some sense you can see these services as small startups within the walls of a bigger company." ([[Vogels Working Backwards]])

The phrase is operative. A team is a startup if it owns its service, its roadmap, its on-call, and its customer relationship. Anything less is a feature team in disguise.

### 3. The API mandate is the substrate that makes two-pizza teams work

Small autonomous teams require strict service boundaries; otherwise dependencies cascade across the org and the autonomy is fiction. The 2002 directive made the boundaries non-negotiable.

> "All teams will henceforth expose their data and functionality through service interfaces. ... There will be no other form of interprocess communication allowed: no direct linking, no direct reads of another team's data store, no shared-memory model, no back-doors whatsoever. ... Anyone who doesn't do this will be fired." ([[Bezos 2002 API Mandate]])

The architecture enforces the team boundary. Mechanism over goodwill: the culture is downstream of the API.

### 4. Data domains belong to teams, not to the company

The 1998 architectural manifesto introduced the data-domain concept that makes one-database-per-microservice possible.

> "The idea of creating data domains allows us to split up this class of data according to its relationship with other data. For instance, all data pertaining to customers would make up one domain, all data about vendors another and all data about our catalog a third. This allows us to create services by which clients interact with the various data domains." ([[Vogels Distributed Computing Manifesto]])

One database per microservice ([[Vogels Modern Applications]]) is the modern restatement. Shared databases are the named anti-pattern that re-couples nominally independent teams.

### 5. Single-threaded leadership pairs with two-pizza teams

A team can be small only if its leader owns one thing. The [[Working Backwards Book]] formalization:

> "A single person, unencumbered by competing responsibilities, owns a single major initiative and heads up a separable, largely autonomous team to deliver its goals." ([[Working Backwards Book]])

Andy Jassy's 2021 letter restates the doctrine under new leadership.

> "Organize Builders into Teams That Are as Separable and Autonomous as Possible. It's hard for teams to be deep in what customers care about in multiple areas. Single-threaded teams will know their customers' needs better, spend all their waking work hours inventing for them, and develop context and tempo to keep iterating quickly." ([[Bezos 2021 Letter]])

## How This Brain Uses It

When evaluating any organizational design or scaling plan:

1. **Can each team be fed by two pizzas?** If teams are 15+ people, communication overhead is eating throughput. Subdivide.
2. **Does each team own a service with a public interface?** Without the interface, the team has no real boundary; "autonomy" is decorative.
3. **One leader, one initiative?** If the leader owns three things, they own none well. Single-thread the responsibility.
4. **Does each team own its data domain?** Shared databases re-couple teams that look independent on the org chart.

## Tensions With Other Frames

- **vs [[Customer Obsession]]:** Two-pizza teams optimize for autonomy and velocity; customer obsession requires cross-team coordination to deliver end-to-end experience (Prime crosses dozens of teams). The synthesis: each team is customer-obsessed for its slice of the customer experience, and the PR/FAQ ([[Working Backwards]]) is the artifact that aligns the slices.
- **vs [[Long-Term Thinking]]:** Small teams shipping fast can drift into local optimization. The long-horizon discipline is the counterweight: each team's roadmap should ladder to a multi-year customer outcome, not just this-sprint metrics.
- **vs monolithic architectures:** Vogels has explicitly disavowed microservices-as-religion ([[Vogels Monoliths Are Not Dinosaurs]]). The two-pizza team is the durable principle; microservices is one tactic. When four conditions match (always co-contribute, identical scaling, identical security, single owning team) merging services is rational, and the team boundary is what survives.

## Connections

- [[Bezos 2002 API Mandate]] the architectural substrate
- [[Vogels Working Backwards]] the 2006 primary source: services as startups
- [[Vogels Modern Applications]] the 2019 restatement: pizza-team definition verbatim
- [[Vogels Distributed Computing Manifesto]] the 1998 thesis: data domains and three-tier separation
- [[Working Backwards Book]] single-threaded leadership formalized
- [[Working Backwards]] the artifact-level practice each team uses
- [[Customer Obsession]] the posture each team owns for its slice
- [[Long-Term Thinking]] the horizon each team's roadmap ladders to
- [[Operating Principles]] Operational Discipline section
- [[Persona]] org-design defaults trace here
