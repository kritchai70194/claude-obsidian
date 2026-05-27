---
type: source
title: Vogels Reinventing Virtualization Nitro
address: c-000262
author: Werner Vogels
publication_year: 2020
url: https://www.allthingsdistributed.com/2020/09/reinventing-virtualization-with-nitro.html
raw_file: .raw/articles/vogels-nitro-virtualization-2026-05-27.html
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - amazon
  - aws
  - nitro
  - ec2
  - one-way-door
  - virtualization
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Bezos 2015 Letter]]"
  - "[[Vogels 10 Lessons from 10 Years of AWS]]"
  - "[[Vogels S3 Strong Consistency]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Vogels "Reinventing Virtualization with the AWS Nitro System" (September 2020)

[[Werner Vogels]]'s September 14, 2020 post. Engineering retrospective on the 5-year journey from a Xen-based hypervisor (30% resource overhead) to the Nitro System (offloaded virtualization, bare-metal-capable, microsecond-jitter-class). One of the clearest primary-source examples of the Amazon **one-way door** decision discipline at the infrastructure level.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2020 (September 14)
- URL: https://www.allthingsdistributed.com/2020/09/reinventing-virtualization-with-nitro.html
- Raw extract: [`.raw/articles/vogels-nitro-virtualization-2026-05-27.html`](../../.raw/articles/vogels-nitro-virtualization-2026-05-27.html) — full text HTML
- Fidelity: full-text (~1,816 words, all quotes verbatim)

## Headline Takeaways

1. **The 30% tax.** "As much as 30% of the resources in an instance were allocated to the hypervisor and operational management for network, storage, and monitoring." Thirty percent of compute being unavailable to the customer was the motivating problem.
2. **One-way door discipline at infrastructure scale.** Building Nitro was deliberately framed as a one-way door — "almost impossible to reverse" — and so was made "methodically, carefully, slowly, and with great deliberation."
3. **5-year multi-stage build.** First Nitro card in C3 (2013, networking). Then C4 (2014, EBS). Annapurna Labs acquired 2015. Full Nitro System with C5 in 2017. Each step "validating the direction we were taking."
4. **Bare metal as a Nitro-enabled byproduct.** Once virtualization is offloaded to hardware, the hypervisor can be made optional, enabling I3 bare-metal instances.

## Key Quotes (verbatim)

### The Motivating Problem

> "In the early days of EC2, we used the Xen hypervisor, which is purely software-based, to protect the physical hardware and system firmware; virtualize the CPU, storage, and networking; and provide a rich set of management capabilities. But with this architecture, as much as 30% of the resources in an instance were allocated to the hypervisor and operational management for network, storage, and monitoring."

> "Thirty percent is significant, and this waste wasn't providing direct value to our customers. It became clear to us that if we wanted to significantly improve performance, security, and agility for our customers, we had to migrate most of our hypervisor functionalities to dedicated hardware."

### The One-Way Door Framing

> "At Amazon, we often talk about one-way and two-way door decisions. A two-way door decision is easily reversible, like testing out a new web page format. With this type of decision, you can move fast because, even if it takes a little time, you can reverse the decision. A one-way door decision is almost impossible to reverse, so you have to make it methodically, carefully, slowly, and with great deliberation and consultation."

> "Creating the Nitro System was a one-way door decision. We knew that we had outgrown the capabilities of traditional virtualization techniques. We had to innovate. But we did not make the decision quickly or lightly. The journey consisted of careful trial and error over the course of five years, with each step validating the direction we were taking."

### The Incremental Validation Sequence

> "We launched our first Nitro offload card in the C3 instance type in 2013, offloading our network processes into hardware. Next came the C4 instance type in 2014, offloading EBS storage into hardware. For the C4 instance type, we worked for the first time with a company called Annapurna Labs. We were so impressed by the technology and the team there that we acquired Annapurna Labs in early 2015. By 2017, we had offloaded the last of the components, including the control plane and the remaining I/O, and we introduced a new hypervisor, the full Nitro System with the C5 instance type."

### Customer-Specific Jitter Requirements

> "We have a customer that manages satellites, and it needed a real-time compute environment to support communication to its fleet. Specifically, response to a network packet had to be within 150 µs for the workload to function. Traditional hypervisors simply cannot support this type of workload."

### The Bare Metal Implication

> "The Nitro architecture also enabled us to make the hypervisor layer optional and offer bare metal instances. Bare metal instances provide applications with direct access to the processor and memory resources of the underlying server."

## What This Brain Takes From It

- **One-way door as engineering decision frame.** This is one of the few primary-source illustrations of the Bezos one-way-door discipline being applied at the infrastructure level. Nitro is exactly the irreversible architectural commitment the framework is designed for. Connects to [[Bezos 2015 Letter|the original two-way/one-way doors letter]].
- **Validate incrementally inside an irreversible commitment.** The 5-year, 4-step rollout (C3 → C4 → Annapurna acquisition → C5) is how you execute a one-way door decision: each step is reversible enough to learn from, but the overall direction has been committed to.
- **Acquire when you find your supplier impresses you.** Annapurna Labs example. The decision to acquire wasn't strategic up front; it was post-collaboration: "we were so impressed by the technology and the team there that we acquired Annapurna Labs in early 2015." Most acquisitions go the other way (acquire first, integrate second).
- **30% is a number worth taking seriously.** Many engineering organizations would treat 30% of compute being lost to overhead as acceptable. The Nitro story is what it looks like when that number is treated as unacceptable.
- **The 150-µs satellite example.** Concrete, falsifiable, customer-specific. Like the [[Vogels 2023 Predictions|"southern California to Dallas before the fruit deteriorates"]] example, the form of a good engineering anecdote.
- **Optional hypervisor as a free byproduct.** A common pattern: once you've done the right architectural rewrite, capabilities that were previously off-limits become free. Bare metal wasn't the goal; it was the gift.

## Cross-References

- [[Werner Vogels]] entity
- [[Bezos 2015 Letter]] (the origin of the two-way / one-way doors framework)
- [[Vogels 10 Lessons from 10 Years of AWS]] (the platform-level principles)
- [[Vogels S3 Strong Consistency]] (the companion AWS engineering retrospective, refusing false trade-offs)
- [[Vogels Distributed Computing Manifesto]] (the architectural reinvention pattern at an earlier scale)
- [[Operating Principles]], Two-way doors fast, one-way doors slow
- [[Persona]]

## Status

Mature, full-text. The one-way door framing applied to Nitro and the 30%-hypervisor-overhead motivation are verbatim primary citations.
