---
type: source
title: Chen Cold Start Problem Book
address: c-000043
source_type: book
author: "[[Andrew Chen]]"
publisher: Harper Business
publication_date: 2021-12
url: https://www.coldstart.com/
coverage: https://www.sachinrekhi.com/p/andrew-chen-the-cold-start-problem
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - book
  - growth
  - network-effects
status: developing
related:
  - "[[Andrew Chen]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-unicorn-builders]]"
---

# Chen Cold Start Problem Book

Andrew Chen's 2021 book, the canonical modern text on building products with network effects from zero. ~330 pages compressing his ~5 years at Uber rider growth + a16z deal-flow pattern recognition across hundreds of network startups. Adopted as the standard reference at most growth teams.

The book's title is the question: how does a network product overcome the chicken-and-egg problem of needing users to attract users? Chen's answer is the 5-stage framework + atomic networks.

## The 5-Stage Framework

Every network product's lifecycle:

### Stage 1: The Cold Start Problem
Getting the first atomic network to work. The hardest stage. Most startups die here. The chicken-and-egg trap: users need other users; without users, no users join.

### Stage 2: The Tipping Point
Additional atomic networks compound. The product spreads from the original niche to adjacent ones. Word of mouth begins to drive organic growth.

### Stage 3: Escape Velocity
Multiple growth loops stack and accelerate. Acquisition becomes self-sustaining. The product is now "hot" in the market.

### Stage 4: Hitting the Ceiling
Growth slows. Channels saturate. Network quality degrades. The product faces the law of large numbers; new users add less marginal value than early users did.

### Stage 5: The Moat
Defensive moves required. Network effects become structural durability. Either you build the moat or competitors erode the network.

Each stage requires different teams, tactics, and metrics. Treating them as the same problem is the most common founder mistake.

## The Atomic Network

> An Atomic Network is the smallest network that can stand on its own.

The single most important concept in the book. Chen's answer to "how do you start a network from zero" is: **don't try to start a global network. Start the smallest possible viable network.**

Examples Chen uses:
- **Tinder**: started at USC. The founders threw a party. To enter, you had to download the app. A few hundred users from the same school. The atomic network = students at one college.
- **Uber**: started in San Francisco. The atomic network = a few drivers + a few riders in one city. Replicated city by city.
- **Slack**: started inside small teams. The atomic network = one team of 5-50 people who actually use it.
- **Reddit**: founders manually posted as fake users to seed content. The atomic network = ~50 active discussions across early subreddits.

The pattern: find the smallest grouping of users where the product is genuinely useful (not "would be useful if more people joined") and get THAT working. Then replicate.

## The Hard Side of the Network

> To get things started, focus on the "hard side" of the network, generally the small number of users whose participation creates disproportionate value.

In two-sided markets, one side is harder to acquire than the other. The hard side dictates strategy.

Examples:
- **Wikipedia**: 4,000 volunteer editors contribute most of the edits. The hard side = editors, not readers.
- **Uber**: "power drivers" handle 60% of trips. The hard side = drivers, not riders.
- **Dating apps**: attractive users (especially women) are the harder side; everyone else follows.
- **YouTube**: creators are the hard side; viewers follow once content exists.
- **Twitch**: streamers are the hard side; viewers follow.

The strategic move: invest disproportionately in the hard side. Pay drivers more than rationally justified by their LTV in early markets, because the supply side determines whether the marketplace exists at all.

## Network Effects Are Not One Thing

The book identifies multiple types:
- **Direct network effects** (Facebook: more users = more value to each user)
- **Indirect network effects** (iOS: more users → more developers → more apps → more users)
- **Two-sided market effects** (Uber: drivers + riders, each side's value depends on the other)
- **Data network effects** (Google: more searches → better algorithm → better search → more searches)
- **Social network effects** (LinkedIn: more contacts in your network = more value)

Different types have different mechanics. Generic "we have network effects!" claims are usually wrong; specify which type and prove it.

## Why Big Launches Fail

The standard PR launch playbook (TechCrunch coverage, viral video, big party) usually fails to bootstrap network products. Reason: attention does not equal an atomic network. You get 10,000 signups who try once and leave because the network is not yet useful.

Chen's recommendation: ignore launches. Build atomic networks one at a time, manually, in narrow segments. The launch is when you have 100 atomic networks already running.

## Saturation and Channel Death

Every acquisition channel saturates. The early adopters of any channel face low CPCs and high conversion; as competition crowds in, CPCs rise and conversion falls. By the time a channel is "proven", it is usually already declining.

Chen's implication: you need to be building the next channel before the current one dies. A growth team's job is not optimizing one channel; it is finding the next one.

## Connection to Helmer's 7 Powers

Chen does not use Helmer's vocabulary, but the book is largely about constructing **Network Economies** (Helmer's Power #2) from zero. Where Helmer names the destination, Chen explains the route.

Specifically:
- The atomic network is the first instance of Network Economies at sub-scale
- Hitting the tipping point is when Network Economies become observable
- Escape velocity is when Network Economies become defensive
- The Moat stage is when Network Economies become structurally durable (Helmer's Power proper)

The two books read together give both the destination (Helmer) and the route (Chen).

## Principles Cited From This Source

(Will be added to [[Operating Principles]] Product Discipline section.)

- **The cold start problem is solved by atomic networks, not big launches.**
- **The hard side of a two-sided market dictates strategy.** Invest disproportionately there.
- **5 stages each need different teams and tactics.** Cold Start tactics fail at Escape Velocity; Moat tactics fail at Cold Start.
- **Specify which type of network effect.** Generic "network effects" claims are usually wrong.
- **Every channel saturates.** Build the next loop before the current one dies.

## Connections

- [[Andrew Chen]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-unicorn-builders]] source AC1
- [[Helmer 7 Powers Book]] complementary; Helmer's Network Economies is what Chen builds toward
- [[Thompson Aggregation Theory]] adjacent; aggregators are network products that achieved tipping point
- [[PG Do Things That Dont Scale]] foundational; atomic networks require the manual recruitment discipline PG describes
