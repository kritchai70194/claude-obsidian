---
type: source
title: "Vogels Monoliths Are Not Dinosaurs"
address: c-000280
author: "[[Werner Vogels]]"
year: 2023
source_url: "https://www.allthingsdistributed.com/2023/05/monoliths-are-not-dinosaurs.html"
fidelity: full-text-summary
raw_file: ".raw/source-vogels-monoliths-not-dinosaurs.md"
created: 2026-05-28
updated: 2026-05-28
tags: [source, vogels, founder-operator, aws, architecture, evolvability, microservices, monolith]
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Operating Principles]]"
  - "[[Vogels Modern Applications]]"
  - "[[Vogels Distributed Computing Manifesto]]"
  - "[[Vogels S3 Strong Consistency]]"
---

# Vogels Monoliths Are Not Dinosaurs (May 2023)

[[Werner Vogels]]'s May 5, 2023 post on allthingsdistributed.com (801 words). The defining Vogels post on architectural pragmatism: written in response to the Prime Video team's widely-discussed move from a Step Functions / Lambda architecture back to a monolith. The "evolvability is the strategy" pronouncement.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2023 (May 5)
- URL: https://www.allthingsdistributed.com/2023/05/monoliths-are-not-dinosaurs.html
- Raw extract: `.raw/source-vogels-monoliths-not-dinosaurs.md` (full text via WebFetch; defuddle skeleton-only fallback)
- Fidelity: full-text-summary

## Headline Takeaways

1. **Building evolvable software is the strategy. Microservices is one possible tactic.** "Building evolvable software systems is a strategy, not a religion. And revisiting your architectures with an open mind is a must."
2. **Order-of-magnitude growth = mandatory architecture review.** "My rule of thumb has been that with every order of magnitude of growth you should revisit your architecture, and determine whether it can still support the next order level of growth." A specific, repeatable trigger.
3. **Trust the engineers.** "If you hire the best engineers, you should trust them to make the best decisions." Cited as a quoted maxim.
4. **The case for combining services.** "If there are a set of services that always contribute to the response, have the exact same scaling and performance requirements, same security vectors, and most importantly, are managed by a single team, it is a worthwhile effort to see if combining them simplifies your architecture." A clean checklist for when to merge microservices.
5. **No architectural pattern rules them all.** "There is not one architectural pattern to rule them all." Direct rebuke of microservices dogmatism.
6. **Few one-way doors at the application layer.** "There are few one-way doors. Evaluating your systems regularly is as important, if not more so, than building them in the first place. Because your systems will run much longer than the time it takes to design them."
7. **The S3 case study.** "Amazon S3 is a wonderful example of a service that has expanded from a few microservices since its launch in 2006 to over 300 microservices."

## Key Quotes (verbatim)

### The opening pronouncement

> "Building evolvable software systems is a strategy, not a religion. And revisiting your architectures with an open mind is a must."

### Software is not bridges

> "Software architectures are not like the architectures of bridges and houses. After a bridge is constructed, it is hard, if not impossible, to change the way it was built. Software is quite different. Once we are running our software, we may get insights about our workloads that we did not have when it was designed. And, if we had realized this at the start, and we chose an evolvable architecture, we could change components without impacting the customer experience."

### The order-of-magnitude rule

> "My rule of thumb has been that with every order of magnitude of growth you should revisit your architecture, and determine whether it can still support the next order level of growth."

### The Prime Video case (paraphrased provenance, direct quote)

> "A great example can be found in two insightful blog posts written by Prime Video's engineering teams. The first describes how Thursday Night Football live streaming is built around a distributed workflow architecture. The second is a recent post that dives into the architecture of their stream monitoring tool, and how their experience and analysis drove them to implement it as a monolithic architecture. There is no one-size-fits-all. We always urge our engineers to find the best solution, and no particular architectural style is mandated. 'If you hire the best engineers, you should trust them to make the best decisions.'"

### When to combine services (the checklist)

> "If there are a set of services that always contribute to the response, have the exact same scaling and performance requirements, same security vectors, and most importantly, are managed by a single team, it is a worthwhile effort to see if combining them simplifies your architecture."

### The continuous evolution at Amazon

> "Evolvable architectures are something that we've taken to heart at Amazon from the very start. Re-evaluating and re-architecting our systems to meet the ever-increasing demands of our customers. You can go all the way back to 1998, when a group of senior engineers penned the Distributed Computing Manifesto, which put the wheels in motion to move Amazon from a monolith to a service-oriented architecture. In the decades since, things have continued to evolve, as we moved to microservices, then microservices on shared infrastructure, and as I spoke about at re:Invent, EDA."

### Evolvable architecture defined

> "It's what we call an evolvable architecture. It can easily be changed over time. You start with something small and allow it to grow in complexity to match your vision."

### S3 as the canonical example

> "Amazon S3 is a wonderful example of a service that has expanded from a few microservices since its launch in 2006 to over 300 microservices, with added storage methodologies, policy mechanisms, and storage classes. This was only possible because of the evolvability of the architecture, which is a critical consideration when designing systems."

### The pragmatic close

> "There are few one-way doors. Evaluating your systems regularly is as important, if not more so, than building them in the first place. Because your systems will run much longer than the time it takes to design them. So, monoliths aren't dead (quite the contrary), but evolvable architectures are playing an increasingly important role in a changing technology landscape."

### The five-engineer startup

> "A startup with five engineers may choose a monolithic architecture because it is easier to deploy and doesn't require their small team to learn multiple programming languages. Their needs are fundamentally different than an enterprise with dozens of engineering teams, each managing an individual subservice. And that's okay. It's about choosing the right tools for the job."

## What This Brain Takes From It

- **Evolvability over microservices.** The strategic commitment is to systems that can change. Microservices are a means to that end, not the end itself. If a monolith better supports continued evolution, use the monolith.
- **The order-of-magnitude review.** Whenever a system 10xs, schedule an architecture review. This is the operational discipline that prevents the trap of an architecture optimized for 1x running at 100x.
- **The merge-services checklist.** Four conditions, all required: always co-contribute to the response, identical scaling and perf needs, identical security vectors, single owning team. If all four match, merging is worth considering.
- **"Few one-way doors" applies to application architecture.** Contrast with [[Vogels Reinventing Virtualization Nitro]], where Nitro is named as a one-way door at the infrastructure layer. Application architecture is reversible; infrastructure foundations often are not. Distinguishing the two is critical.
- **S3 as the long-game proof point.** 2006 to 2023: a handful of microservices to 300+. The evolvability argument made concrete.
- **"Trust the engineers."** Cited as a quoted maxim. Maps to the [[Bezos 2014 Letter]] high-judgment culture and the two-pizza-team autonomy.
- **Startup vs enterprise are different products.** A five-engineer startup and a thirty-team enterprise are not arguing about the same architecture. The answer depends on the team, not just the problem.

## Frames Cited

- "Evolvable architecture is the strategy, not microservices" (verbatim)
- "Every order of magnitude, revisit your architecture" (verbatim, the named rule)
- "If you hire the best engineers, trust them to make the best decisions" (verbatim)
- The four-condition merge-services checklist (the actionable filter)
- "Few one-way doors" at the application layer
- "Start small, grow in complexity to match your vision"
- S3 as the canonical evolvability case study

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels Modern Applications]] (2019, the five-pillar microservices position this post pragmatizes)
- [[Vogels Distributed Computing Manifesto]] (1998, the original move away from monolith Vogels references here)
- [[Vogels Reinventing Virtualization Nitro]] (the one-way-door counterpoint at the infrastructure layer)
- [[Vogels S3 Strong Consistency]] (the 300-microservice S3 system referenced)
- [[Operating Principles]], "Every order of magnitude, revisit your architecture"
- [[Persona]]

## Status

Mature, full-text. The order-of-magnitude rule, the merge-services checklist, and "evolvable is the strategy" are the load-bearing citations. Useful counter-evidence to anyone who reads [[Vogels Modern Applications]] as a microservices mandate.
