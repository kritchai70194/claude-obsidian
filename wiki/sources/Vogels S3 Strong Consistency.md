---
type: source
title: Vogels S3 Strong Consistency
address: c-000261
author: Werner Vogels
publication_year: 2021
url: https://www.allthingsdistributed.com/2021/04/s3-strong-consistency.html
raw_file: .raw/articles/vogels-s3-strong-consistency-2026-05-27.html
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - amazon
  - aws
  - s3
  - distributed-systems
  - consistency
  - cache-coherence
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Vogels Eventually Consistent]]"
  - "[[Vogels Decade of Dynamo]]"
  - "[[Vogels Distributed Computing Manifesto]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Vogels "Diving Deep on S3 Consistency" (April 2021)

[[Werner Vogels]]'s April 20, 2021 post. The engineering retrospective on how S3 moved from eventual to strong consistency — without raising prices, requiring opt-in, sacrificing latency, or limiting which objects get the new semantics. Sequel-in-spirit to [[Vogels Eventually Consistent]] (2008), showing how the same architect's frame evolves with 15 years of operational evidence.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2021 (April 20)
- URL: https://www.allthingsdistributed.com/2021/04/s3-strong-consistency.html
- Raw extract: [`.raw/articles/vogels-s3-strong-consistency-2026-05-27.html`](../../.raw/articles/vogels-s3-strong-consistency-2026-05-27.html) — full text HTML
- Fidelity: full-text (~1,938 words, all quotes verbatim)

## Headline Takeaways

1. **The bar was deliberately set high.** Strong consistency with no additional cost, applied to every new and existing object, with no performance or availability tradeoffs. "This made a hard engineering problem a lot harder, particularly at S3's scale."
2. **90% of the AWS roadmap comes directly from customers.** That's the explicit origin of the strong-consistency project — customers were running their own consistency-tracking infrastructure (Netflix s3mper, Cloudera S3Guard) on top of S3.
3. **Cache coherence is the mechanism.** S3 kept the cache (didn't bypass it), but added a "witness" component that observes writes and acts as a read barrier — a cache coherency protocol at scale.
4. **No false trade-offs.** Other providers offer opt-in strong consistency, cross-region dependencies, or other limitations. Vogels names these and explicitly rejects each.

## Key Quotes (verbatim)

### The Engineering Bar

> "We thought about strong consistency in the same way we think about all decisions we make: by starting with the customer. We considered approaches that would have required a tradeoff in cost, in the scope of which objects had consistency, or in performance. We didn't want to make any of those tradeoffs. So, we kept working towards a higher bar: **we wanted strong consistency with no additional cost, applied to every new and existing object, and with no performance or availability tradeoffs.**"

### The Naming of Compromised Alternatives

> "Other providers make compromises, such as making strong consistency an opt-in setting for a bucket or an account rather than for all storage, implementing consistency with dependencies across regions which undermine the regional availability of a service, or other limitations. If we wanted to change this fundamental underlying concept of consistency and stay true to our S3 design principles, we needed to make strong consistency the default for every request, free of charge, with no performance implications, and staying true to our reliability model. This made a hard engineering problem a lot harder, particularly at S3's scale."

### The Customer-Driven Roadmap

> "Remember that 90% of our roadmap at AWS comes directly from customers, and customers asked us if we could change S3 to avoid them needing to run extra infrastructure. We thought back to the core design principle of simplicity. It was true in 2006, and continues to be true today as a cornerstone for how we think about building S3 features."

### The Cache Coherence Insight

> "One early consideration for delivering strong consistency was to bypass our caching infrastructure and send requests directly to the persistence layer. But this wouldn't meet our bar for no tradeoffs on performance. We needed to keep the cache. To keep values properly synchronized across cores, CPUs implement cache coherence protocols. And that's what we needed here: a cache coherence protocol for our metadata caches that allowed strong consistency for all requests."

### Strong Means Strong

> "Strong consistency must always be strong with no exceptions."

### Scale Stats

> "S3 has well over 100 trillion objects and serves tens of millions of requests every second."

## What This Brain Takes From It

- **Refusing the trade-off is the engineering posture.** Most distributed-systems work is about choosing where to compromise. Vogels frames the S3 work as deliberately refusing to compromise on any dimension. This is the engineering-planner discipline applied at petabyte scale.
- **Customer-driven roadmaps with statistical precision.** "90% of our roadmap comes directly from customers" is a falsifiable, public claim. Bezos's [[Bezos 2009 Letter|customer experience metric]] applied to AWS prioritization.
- **The CPU analogy.** "To keep values properly synchronized across cores, CPUs implement cache coherence protocols. And that's what we needed here." Borrowing the right analog from another domain (hardware cache coherence) is the move. Cross-domain pattern matching is a [[Charlie Munger|Munger]] discipline applied to systems engineering.
- **Naming the compromised alternatives.** Vogels doesn't just say "we did it the hard way"; he enumerates exactly which compromises competitors made (opt-in, regional dependencies, etc.) and explicitly rejects each. This is the competitive-position-as-architectural-claim move.
- **Simplicity from 2006 still operating in 2021.** "We thought back to the core design principle of simplicity. It was true in 2006, and continues to be true today." Design principles, like APIs, are forever.
- **Sequel to "Eventually Consistent" (2008).** Then: explain why eventual consistency is a legitimate design choice. Now: explain how to move to strong consistency without sacrificing what eventual consistency bought you. Same engineer, same systems, 13-year arc.

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels Eventually Consistent]] (2008 — the prior framing)
- [[Vogels Decade of Dynamo]] (2017 — the parallel retrospective on Dynamo)
- [[Vogels Distributed Computing Manifesto]] (1998 — the architectural foundation that S3 sits on)
- [[Vogels 10 Lessons from 10 Years of AWS]] (the platform-level principles)
- [[Operating Principles]], APIs are forever, Refuse false trade-offs
- [[Persona]]

## Status

Mature, full-text. The engineering bar quote and the customer-roadmap-90% claim are verbatim primary citations.
