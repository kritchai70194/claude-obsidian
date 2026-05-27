---
type: source
title: Vogels Distributed Computing Manifesto
address: c-000259
author: Werner Vogels
publication_year: 2022
url: https://www.allthingsdistributed.com/2022/11/amazon-1998-distributed-computing-manifesto.html
raw_file: .raw/articles/vogels-distributed-computing-manifesto-2026-05-27.html
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - amazon
  - architecture
  - distributed-systems
  - service-oriented-architecture
  - workflow
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Bezos 2002 API Mandate]]"
  - "[[Vogels Working Backwards]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Vogels "Amazon's Distributed Computing Manifesto" (November 2022, document dated 1998)

[[Werner Vogels]]'s November 2022 post publishing the **1998 internal architecture manifesto** that laid the groundwork for Amazon's move from a two-tier monolith (Obidos + databases) to service-oriented architecture. The document was authored by a collective of senior Amazon engineers in May-July 1998. Vogels released it to show "how advanced the thinking of Amazon's engineering team was in the late nineties."

## Provenance

- Original document: May 24, 1998, revised July 10, 1998 — internal Amazon architectural document
- Released by: [[Werner Vogels]] on November 17, 2022
- URL: https://www.allthingsdistributed.com/2022/11/amazon-1998-distributed-computing-manifesto.html
- Raw extract: [`.raw/articles/vogels-distributed-computing-manifesto-2026-05-27.html`](../../.raw/articles/vogels-distributed-computing-manifesto-2026-05-27.html) — full text HTML
- Fidelity: full-text (Vogels intro + 1998 manifesto), all quotes verbatim

## Historical Context

In 1998 Amazon was running on Obidos (a monolithic, stateless application) plus "a whole battery of databases that grew with every new set of product categories, products inside those categories, customers, and countries that Amazon launched in." The databases were a shared resource and "eventually became the bottleneck for the pace that we wanted to innovate." This manifesto is the architectural response — written four years before the [[Bezos 2002 API Mandate]] forced the company-wide move to services.

## Headline Takeaways (from the 1998 document)

1. **Two key architectural concepts:** move to a service-based model AND shift processing to a workflow approach.
2. **Three-tier architecture:** presentation (client) / business logic (services) / data — strictly separated, with clients reaching data only through service interfaces.
3. **Distributed workflow model:** instead of processes coming to data, the data moves between processing nodes. Each workflow element carries the information the next node needs to act on it.
4. **Data domains:** persistent data (customers, vendors, catalog) gets organized into domains accessed only through service interfaces, allowing replication and location-independence.
5. **The mindset shift required:** "data-centric" thinking must give way to "service-based" thinking, where the interface between client and service is designed to hide the data model from the client.

## Key Quotes (verbatim)

### Vogels's Framing

> "Back in 1998, a collective of senior Amazon engineers started to lay the groundwork for a radical overhaul of Amazon's architecture to support the next generation of customer centric innovation. A core point was separating the presentation layer, business logic and data, while ensuring that reliability, scale, performance and security met an incredibly high bar and keeping costs under control. Their proposal was called the *Distributed Computing Manifesto*."

> "They consistently invented themselves out of trouble, scaling a monolith into what we would now call a service-oriented architecture, which was necessary to support the rapid innovation that has become synonymous with Amazon."

### From the 1998 Manifesto Itself

#### Service-based Model

> "We propose moving towards a three-tier architecture where presentation (client), business logic and data are separated. This has also been called a service-based architecture. The applications (clients) would no longer be able to access the database directly, but only through a well-defined interface that encapsulates the business logic required to perform the function. This means that the client is no longer dependent on the underlying data structure or even where the data is located."

#### Software Engineering Discipline

> "The first is that we will have to adopt a much more disciplined approach to software engineering. Currently much of our database access is ad hoc with a proliferation of Perl scripts that to a very real extent run our business. Moving to a service-based architecture will require that direct client access to the database be phased out over a period of time."

#### The Mindset Shift

> "the second piece is something we have never done before, which is designing the interface between the client and the service so that the underlying data model is not exposed to or relied upon by the client."

#### Workflow Model

> "A solution to this is to distribute the workflow processing so that it can be offloaded from the central instance. Implementing this requires that workflow elements like customer_orders would *move* between business processing ('nodes') that could be located on separate machines. Instead of processes coming to the data, the data would travel to the process. This means that each workflow element would require all of the information required for the next node in the workflow to act upon it."

#### Data Domains

> "The idea of creating data domains allows us to split up this class of data according to its relationship with other data. For instance, all data pertaining to customers would make up one domain, all data about vendors another and all data about our catalog a third. This allows us to create services by which clients interact with the various data domains and opens up the possibility of replicating domain data so that it is closer to its consumer."

## What This Brain Takes From It

- **SOA was an Amazon practice four years before the API Mandate.** The 2002 mandate ([[Bezos 2002 API Mandate]]) is the famous primary source for Amazon services, but the architectural argument was made and documented in 1998. The Bezos memo is the *enforcement*; this is the *thesis*.
- **The mindset shift is the hard part.** "We have never done this before" applies to the work of designing client-service interfaces that hide the data model. Most "service-oriented" architectures fail at this layer.
- **Data movement, not process movement.** The workflow insight ("instead of processes coming to the data, the data would travel to the process") is the foundational message-passing argument. Closely related to Kleppmann's later "data-intensive applications" framing.
- **Data domains as a discipline.** Customer data is one domain. Vendor data is another. Catalog data is a third. Service interfaces are the only way to interact with a domain. This is the conceptual ancestor of Domain-Driven Design for Amazon.
- **The infrastructure for innovation.** Vogels's framing is explicit: this architectural overhaul *enables* the pace of customer-centric innovation that Amazon is known for. Without the SOA / workflow move, the product surface couldn't have grown the way it did. Architecture as strategy.
- **Inventing themselves out of trouble.** "They consistently invented themselves out of trouble." The engineering pattern is: when the existing architecture is the bottleneck, the response is a structural rewrite, not incremental optimization.

## Cross-References

- [[Werner Vogels]] entity
- [[Bezos 2002 API Mandate]] (the enforcement memo, 4 years after this thesis)
- [[Vogels Working Backwards]] (the product-process analog of this architectural process)
- [[Vogels Eventually Consistent]] (consistency model taxonomy that emerged from this lineage)
- [[Vogels Decade of Dynamo]] (the practical service that the manifesto enabled)
- [[Operating Principles]], APIs are forever, Mechanism over goodwill
- [[Persona]]

## Status

Mature, full-text. The architectural thesis and Vogels's framing are verbatim primary citations. This is one of the most important pre-AWS architectural artifacts in the corpus.
