---
source_id: ddia
title: "Designing Data-Intensive Applications (Martin Kleppmann, 2017)"
author: Martin Kleppmann
publisher: O'Reilly Media
publication_date: 2017
url: multiple summaries; primary URL https://www.shortform.com/summary/designing-data-intensive-applications-summary-martin-kleppman
fetch_method: WebSearch synthesis across summaries
fetch_date: 2026-05-24
fidelity: book-summary-aggregate
license_note: Book is in print; secondary summaries are widely available.
---

# Source, Designing Data-Intensive Applications (Kleppmann)

## Author Context

Martin Kleppmann is a researcher at the University of Cambridge, formerly an industry engineer at LinkedIn and Rapportive. The book ("DDIA" in industry shorthand) is the most-cited distributed systems engineering text of the modern era. Endorsed in the engineering canon Patrick Collison curates; companion frame to [[Werner Vogels]] and [[Jeff Dean]]'s public-facing engineering material.

## Three Core Pillars

The book organizes the field around three concerns:

### Reliability

> A system is reliable when it continues to operate correctly even when issues arise.

Critical distinction the book formalizes:

- **Fault:** an improper performance of a single system component.
- **Failure:** the system as a whole stops delivering the required service to users.

It's impossible to eliminate all faults. The discipline is *fault tolerance*: building systems where individual faults don't cascade into system failures. Direct connection to [[Werner Vogels|Vogels]]'s "everything fails all the time" framing in [[Vogels 10 Lessons from 10 Years of AWS]].

### Scalability

> A system's ability to cope with increased load.

The book frames scalability as a question about specific load axes (request rate, data volume, payload size) rather than as a global property. Different scaling strategies fit different load shapes:

- Vertical scaling (better hardware): simple, limited
- Horizontal scaling (more machines): complex, unbounded
- The choice depends on the actual load axis

Companion concept: latency percentiles (p50, p99, p999). Average latency is a poor metric because it hides tail behavior. Tail latency is what users actually experience under load.

### Maintainability

> The importance of keeping software simple and easy to operate, ensuring its evolution and adaptability over time.

Three sub-properties Kleppmann names:

- **Operability:** easy for operations teams to keep running smoothly
- **Simplicity:** easy for new engineers to understand
- **Evolvability:** easy to modify and extend

Connects to the [[Vogels 10 Lessons from 10 Years of AWS|build evolvable systems]] principle and the Dean Stanford "don't build for hypothetical needs" framing.

## Broader Topics Covered

- **Replication:** how to keep multiple copies of data consistent
- **Partitioning (sharding):** how to split large data across machines
- **Transactions:** how to provide stronger guarantees than eventual consistency when needed (companion to [[Vogels Eventually Consistent]] taxonomy)
- **Stream processing:** how to handle continuous data flows
- **Schema evolution:** how to change data formats without breaking compatibility

## Provenance Note

Aggregate summary across multiple online sources. Treat the structural claims (three pillars, fault-vs-failure distinction, three sub-properties of maintainability) as accurate. Exact wording from the book itself would be higher fidelity; the book's 12 chapters each have specific quotable material worth ingesting individually in future passes.
