# Hints and Principles for Computer System Design (Lampson 2020/2021)

Source: https://arxiv.org/pdf/2011.02455 (also Microsoft Research)
Dated May 14, 2021. arXiv:2011.02455.
107 pages.
Fetched: 2026-05-28 via WebFetch + pypdf extraction
Author: Butler Lampson

## Abstract (verbatim)

> "This new long version of my 1983 paper suggests the goals you might have for your system — Simple, Timely, Efficient, Adaptable, Dependable, Yummy (STEADY) — and techniques for achieving them — Approximate, Incremental, Divide & Conquer (AID). It also gives some principles for system design that are more than just hints, and many examples of how to apply the ideas."

## The mnemonic: STEADY by AID with ART

> "I've organized the hints along three axes, corresponding to three time-honored questions, with a catchy summary: STEADY by AID with ART."

- What? — Goals — **STEADY**: Simple, Timely, Efficient, Adaptable, Dependable, Yummy
- How? — Techniques — **by AID**: Approximate, Incremental, Divide & Conquer
- When, who? — Process — **with ART**: Architecture, Automate, Review, Techniques, Test

## The six most important hints (verbatim)

> "There are a lot of hints, but here are the most important ones:
> - Keep it simple.
> - Write a spec.
> - Design with independent modules.
> - Exploit the ABCs of efficiency.
> - Treat state as both being and becoming.
> - Use eventual consistency to keep data local."

## STEADY goals (table)

| Goal | As question | Alliterative | As nouns | Antonyms |
|---|---|---|---|---|
| Simple | Is it clean? | Frugal | Beauty | Complex |
| Timely | Is it ready? | First | Time to market | Late |
| Efficient | Is it fast? | Fast | Economy | Wasteful |
| Adaptable | Can it evolve? | Flexible | Evolution | Rigid |
| Dependable | Does it work? | Faithful | Fidelity | Flaky |
| Yummy | Will it sell? | Fashionable | Elegance | Crummy |

> "Simple should always be the leading goal, and abstraction is the best tool for making things simpler, but neither one is a panacea. There's no substitute for getting it right."

## Techniques: AID (verbatim definitions)

> "**Approximate** rather than exact, perfect or optimal results are almost always good enough, and often much easier and cheaper to achieve. Loose rather than tight specs are more likely to be satisfied, especially when there are failures or changes. Lazy or speculative execution helps to match resources with needs."

> "**Incremental** design has many aspects; often they begin with 'i'. The most important is to build the system out of independent, isolated parts called modules with interfaces, that you can put together in different ways. Such parts are easier to get right, evolve and secure, and with indirection and virtualization you can reuse them in many different environments."

> "**Divide and conquer** is the most important idea, especially in the form of abstractions with clean specs for imposing structure on your system. This is the only way to maintain control when the system gets too big for one person's head."

## Principles vs hints

> "There are also some principles (about abstraction and modules) that almost always apply, and some oppositions that suggest different ways to look at things."

The Principles (Section 2) cover:
- Abstraction — Have a spec
- Safety and liveness
- Writing a spec (math, sets, relations, state machines)
- Writing the code: correctness (types, languages)
- Modules and interfaces (classes, layers, components, open systems, robustness, standards)
- Points of view (notation)

> "Abstraction is the most important idea in computing. It's the way to make things simple enough that your limited brain can get the machine to do what you want, even though the details of what it does are too complicated for you to track."

> "Finding good abstractions is the most important part of designing a system."

## Spec ↔ code opposition (slogans)

> "Have a spec. Get it right. Keep it clean. Don't hide power. Leave it to the client. Keep secrets. Free the implementer. Good fences make good neighbors. Embrace nondeterminism. Abstractions leak."

## Simple opposition (slogans)

> "KISS: Keep It Simple, Stupid. Don't generalize. Do one thing well. Don't hide power. Make it fast. Use brute force."

## Efficient — ABCs

> "Most of what I have to say about it is in the ABCs below: Algorithms, Approximate, Batch, Cache, Concurrent, Commute, Shard/Stream."

Sub-headings under Efficient: Before the ABCs, Algorithms, Approximate, Batch, Cache, Concurrency.

> "The greatest performance improvement of all is when a system goes from not-working to working." (quoting Ousterhout)

> "Two fundamental rules for program optimization: Rule 1: Don't do it. Rule 2: (for experts) Don't do it yet." (quoting Michael Jackson)

> "There are two basic ways to reduce latency: concurrency and fast path — do the common case fast, leaving the rare cases to be slow."

## Other named principles and key statements

On reduction (good and bad kinds):
> "Redo logging reduces making an arbitrary update atomic in spite of crashes to atomically appending update records to a log, and then to just atomically writing a commit record after logging all the updates."

> "Encryption reduces keeping stored or transmitted data secret to just keeping the keys secret."

On the web (why permissive specs win):
> "Perhaps the biggest reason the web is successful is that it doesn't have to work. The model is that the user will try again, switch to an alternative service, or come back tomorrow."

On do-one-thing-well:
> "Design your system around a small number of key modules with simple specs and predictably good performance."

> "Make it fast rather than general or powerful, because then the client can program the function it wants. Slow, powerful operations force the client who doesn't want the power to pay more for the basic function."

On Vista failure (universal goals):
> "They failed because they did not deliver enough value, added a lot of generality and complexity, were incompatible with the large base of existing applications, and were unpredictably slow. Lesson: beware of universal goals."

On performance debt (taxonomy):
> "When performance of a module or application is bad or unpredictable, you have incurred performance debt, a special case of technical debt. This takes several forms:
> - It's unknown — you haven't measured it realistically.
> - It's bad — worse than your intuition says it should be, or than what you need.
> - It's fragile — it's okay now, but you don't have any process to keep it that way."

## Oppositions (full list — Section 5)

- Simple ↔ rich, fine ↔ features, general ↔ specialized
- Perfect ↔ adequate, exact ↔ tolerant
- Spec ↔ code
- Imperative ↔ functional ↔ declarative
- Immutable ↔ append-only ↔ mutable
- Precise ↔ approximate software
- Dynamic ↔ static
- Indirect ↔ inline
- Time ↔ space
- Lazy ↔ eager ↔ speculative
- Centralized ↔ distributed, share ↔ copy
- Fixed ↔ evolving, monolithic ↔ extensible
- Evolution ↔ revolution
- Policy ↔ mechanism
- Consistent ↔ available ↔ partition-tolerant (CAP)
- Generate ↔ check
- Persistent ↔ volatile
- Being ↔ becoming
- Iterative ↔ recursive, array ↔ tree
- Recompute ↔ adjust

## What changed since 1983

> "For many years I saw no reason to rewrite or extend my 1983 paper on hints for system design. It said what I knew about personal distributed computing, operating systems, languages, networking, databases and fault tolerance, and things hadn't changed that much from the 1970s. But since the mid-1990s the Internet, the World Wide Web, search engines, mobile phones, social media, electronic commerce, malware, phishing, robots and the Internet of Things have become part of everyday life, and concurrency and scaling are now dominant themes in systems."

The new emphasis is on:
- Timely (time-to-market)
- Adaptable (scaling, evolving APIs)
- Yummy (consumer fashion)
- Concurrency
- Eventual consistency
- Scaling (S3: shard, stream or struggle)
