---
type: source
title: "Lampson Hints and Principles 2020"
address: c-000283
source_type: paper
author: "[[Butler Lampson]]"
year: 2020
publication_date: 2021-05-14
source_url: "https://arxiv.org/pdf/2011.02455"
fidelity: full-text-summary
created: 2026-05-28
updated: 2026-05-28
tags:
  - source
  - lampson
  - engineer-planner
  - system-design
  - paper
status: mature
related:
  - "[[Butler Lampson]]"
  - "[[Operating Principles]]"
  - "[[Hints for System Design]]"
  - "[[Lampson Hints for Computer System Design]]"
  - "[[Engineer Planner Pole]]"
---

# Lampson Hints and Principles 2020

The 2020 sequel to the [[Lampson Hints for Computer System Design|1983 Hints paper]], dated May 14, 2021. Published on arXiv (2011.02455) and on Microsoft Research. 107 pages. Lampson's update covers what changed since 1983: the Internet, Web, mobile, cloud, eventual consistency, scaling, security. The 1983 paper was 16 pages; this one is 107.

The structural advance: Lampson now distinguishes **hints** (rules of thumb, often violable) from **principles** (about abstraction and modules, "more than just hints"). And he organizes the whole thing into a single mnemonic.

## The mnemonic: STEADY by AID with ART

> "I've organized the hints along three axes, corresponding to three time-honored questions, with a catchy summary: STEADY by AID with ART."

- **What?** Goals: **STEADY** — Simple, Timely, Efficient, Adaptable, Dependable, Yummy
- **How?** Techniques: **by AID** — Approximate, Incremental, Divide & Conquer
- **When, who?** Process: **with ART** — Architecture, Automate, Review, Techniques, Test

## The six most important hints (verbatim list from §1)

> "There are a lot of hints, but here are the most important ones:
> - Keep it simple.
> - Write a spec.
> - Design with independent modules.
> - Exploit the ABCs of efficiency.
> - Treat state as both being and becoming.
> - Use eventual consistency to keep data local."

These six are the distilled wisdom. Each unpacks into a section.

## STEADY: the goals

| Goal | Question | Adjective | Noun | Antonym |
|---|---|---|---|---|
| Simple | Is it clean? | Frugal | Beauty | Complex |
| Timely | Is it ready? | First | Time to market | Late |
| Efficient | Is it fast? | Fast | Economy | Wasteful |
| Adaptable | Can it evolve? | Flexible | Evolution | Rigid |
| Dependable | Does it work? | Faithful | Fidelity | Flaky |
| Yummy | Will it sell? | Fashionable | Elegance | Crummy |

Lampson's prioritization (verbatim):

> "Simple should always be the leading goal, and abstraction is the best tool for making things simpler, but neither one is a panacea. There's no substitute for getting it right."

The three goals that grew in importance since 1983:

> "Three other goals are much more important now than in the 1980s: Timely, Adaptable, and Yummy."

- Timely because cheap cloud hardware and time-to-market pressure means the slow builder loses.
- Adaptable because Internet scale and rapidly changing user needs make agility beat correctness.
- Yummy because consumers buy on fashion, not procurement specs.

## AID: the techniques (verbatim definitions)

> "**Approximate** rather than exact, perfect or optimal results are almost always good enough, and often much easier and cheaper to achieve. Loose rather than tight specs are more likely to be satisfied, especially when there are failures or changes. Lazy or speculative execution helps to match resources with needs."

> "**Incremental** design has many aspects; often they begin with 'i'. The most important is to build the system out of independent, isolated parts called modules with interfaces, that you can put together in different ways. Such parts are easier to get right, evolve and secure, and with indirection and virtualization you can reuse them in many different environments."

> "**Divide and conquer** is the most important idea, especially in the form of abstractions with clean specs for imposing structure on your system. This is the only way to maintain control when the system gets too big for one person's head, now or later."

## ABCs of efficiency

> "Most of what I have to say about [efficiency] is in the ABCs below: Algorithms, Approximate, Batch, Cache, Concurrent, Commute, Shard/Stream."

Sub-headings under Efficient: Before the ABCs, Algorithms, Approximate, Batch, Cache, Concurrency.

The optimization order:
> "Two fundamental rules for program optimization: Rule 1: Don't do it. Rule 2: (for experts) Don't do it yet." (Lampson quoting Michael Jackson)

> "The greatest performance improvement of all is when a system goes from not-working to working." (quoting Ousterhout)

> "There are two basic ways to reduce latency: concurrency and fast path — do the common case fast, leaving the rare cases to be slow."

## Principles (§2): the things that always apply

Where hints are slogans, principles are framework. The principles section covers:
- Abstraction — Have a spec
- Safety and liveness (what the code may do; what it must do)
- Writing a spec (state as relations; actions as predicates on pre/post states)
- Writing the code: correctness, types, languages
- Modules and interfaces (classes, layers, components, robustness, standards)
- Points of view, notation

Key claims:

> "Abstraction is the most important idea in computing. It's the way to make things simple enough that your limited brain can get the machine to do what you want, even though the details of what it does are too complicated for you to track."

> "Finding good abstractions is the most important part of designing a system."

The spec-vs-code opposition slogans:
> "Have a spec. Get it right. Keep it clean. Don't hide power. Leave it to the client. Keep secrets. Free the implementer. Good fences make good neighbors. Embrace nondeterminism. Abstractions leak."

## Reduction (a deeper move than abstraction)

The good kind:
> "Redo logging reduces making an arbitrary update atomic in spite of crashes to atomically appending update records to a log, and then to just atomically writing a commit record after logging all the updates."

> "Encryption reduces keeping stored or transmitted data secret to just keeping the keys secret."

> "Certificates digitally signed by a trusted authority reduce learning another party's key to learning just the authority's key."

The bad kind (using a too-powerful library because it's easy):
> "Many powerful modules already exist, and using a fraction of their power to solve your problem is often good engineering. But it can be wasteful of computing resources; this is not always bad, but it's easy to lose track of how much is being wasted."

## Performance debt (verbatim taxonomy)

> "When performance of a module or application is bad or unpredictable, you have incurred performance debt, a special case of technical debt. This takes several forms:
> - It's unknown — you haven't measured it realistically.
> - It's bad — worse than your intuition says it should be, or than what you need.
> - It's fragile — it's okay now, but you don't have any process to keep it that way."

## On the web (why permissive specs win, verbatim)

> "Perhaps the biggest reason the web is successful is that it doesn't have to work. The model is that the user will try again, switch to an alternative service, or come back tomorrow. It's quite rare to find a web service that is precise."

This is the Hints discipline applied to scale: choose specs that allow failure modes that humans can absorb. Don't promise what you cannot deliver.

## On universal goals (Vista failure)

Vista tried four universal infrastructures (WinFS, Avalon, Indigo, managed code). All four were removed.

> "They failed because they did not deliver enough value, added a lot of generality and complexity, were incompatible with the large base of existing applications, and were unpredictably slow. Lesson: beware of universal goals."

This is "Don't generalize; generalizations are generally wrong" (1983) restated with a 2020s case.

## Oppositions (§5)

20 oppositions are catalogued, each with slogans. Sample:

- Simple ↔ rich, general ↔ specialized: "KISS. Do one thing well. Don't generalize."
- Spec ↔ code: "Keep secrets. Free the implementer. Good fences make good neighbors."
- Perfect ↔ adequate: "Good enough. Worse is better."
- Time ↔ space: "Cache answers. Keep data small and close."
- Centralized ↔ distributed: "Do it again. Make copies. Reach consensus."
- Consistent ↔ available ↔ partition-tolerant (CAP): "Safety first. Always ready. Good enough."
- Being ↔ becoming: "How did we get here? Don't copy, share."
- Generate ↔ check: "Trust but verify."
- Persistent ↔ volatile: "Don't forget. Start clean."

The opposition framing is the methodological advance over 1983: design choices are not optimizations along a single axis, they are trade-offs along orthogonal axes, and naming the axes helps you see what you are trading.

## What's new since 1983 (verbatim)

> "For many years I saw no reason to rewrite or extend my 1983 paper on hints for system design... But since the mid-1990s the Internet, the World Wide Web, search engines, mobile phones, social media, electronic commerce, malware, phishing, robots and the Internet of Things have become part of everyday life, and concurrency and scaling are now dominant themes in systems."

The 1983 paper is still right. The 2020 paper adds:
- Concurrency as a primary concern (not a corner case)
- Scaling discipline ("S3: shard, stream or struggle")
- Eventual consistency as a default for distributed state
- Yummy as a first-class goal (consumer markets)
- Adaptability and time-to-market as design constraints
- The principles vs hints distinction

## Frames cited

Principles taken from this paper for [[Operating Principles]]:

- **Keep it simple. Write a spec. Design with independent modules.** The three pillars of system design.
- **Treat state as both being and becoming.** Don't choose between snapshot and event-log; have both.
- **Use eventual consistency to keep data local.** Distributed coordination is expensive; partition the state.
- **Beware of universal goals.** General infrastructure that tries to serve everyone usually serves no one.
- **Performance debt has three forms: unknown, bad, fragile.** Name the form before fixing.
- **Don't optimize until you know it's not working.** (Rule 1: don't do it. Rule 2: don't do it yet.)
- **Reduce hard problems to easy solved ones (good kind), but watch the cost of reducing to a too-powerful general solution.**
- **The web is successful because it doesn't have to work.** Loose specs survive scale.
- **Oppositions, not optimization.** Design choices are trade-offs along named axes.

## Connections

- [[Butler Lampson]] mentor anchor
- [[Lampson Hints for Computer System Design]] (the 1983 predecessor; this paper extends it)
- [[Hints for System Design]] concept page (named patterns synthesized from both papers)
- [[Operating Principles]]
- [[Engineer Planner Pole]]
- [[Leslie Lamport]] (specs as first-class artifacts)
- [[Werner Vogels]] (eventual consistency, adjacent thinking)
