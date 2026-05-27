---
type: source
title: Vogels 2023 Predictions
address: c-000260
author: Werner Vogels
publication_year: 2022
url: https://www.allthingsdistributed.com/2022/12/tech-predictions-for-2023-and-beyond.html
raw_file: .raw/articles/vogels-2023-predictions-2026-05-27.html
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - amazon
  - aws
  - predictions
  - custom-silicon
  - simulation
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Vogels 10 Lessons from 10 Years of AWS]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Vogels "Tech Predictions for 2023 and Beyond" (December 2022)

[[Werner Vogels]]'s December 1, 2022 annual predictions post. Five technology predictions plus the synthesizing thesis: "as every facet of life becomes data that we can analyze — we will start to see a torrent of innovation."

## Provenance

- Author: [[Werner Vogels]]
- Year: 2022 (December 1)
- URL: https://www.allthingsdistributed.com/2022/12/tech-predictions-for-2023-and-beyond.html
- Raw extract: [`.raw/articles/vogels-2023-predictions-2026-05-27.html`](../../.raw/articles/vogels-2023-predictions-2026-05-27.html) — full text HTML
- Fidelity: full-text (defuddled HTML, ~2,846 words, all quotes verbatim)

## The Five Predictions (verbatim, condensed)

1. **Cloud technologies will redefine sports as we know them.** "Like music and video, sports will become data streams that we can analyze."
2. **Simulated worlds will reinvent the way we experiment.** Spatial computing, simulation, and digital twins become cloud-accessible — "in 2023, the cloud will make these technologies more accessible, in turn enabling a new class of use cases that will be unbound by physical constraints."
3. **A surge of innovation in smart energy.** Energy-storing surface materials, decentralized grids, smart consumption technologies. Microgrids as "community gardens (but for energy)."
4. **The upcoming supply chain transformation.** Driverless fleets, autonomous warehouse management, simulation. "Autonomous trucking is set to have a massive impact on our global supply chain."
5. **Custom silicon goes mainstream.** Trainium / Inferentia / Graviton case. "People who are really serious about software should make their own hardware" (Alan Kay).

## Key Quotes (verbatim)

### The Synthesizing Thesis

> "As access to advanced technology becomes even more ubiquitous — as every facet of life becomes data that we can analyze — we will start to see a torrent of innovation."

### On Simulation

> "Simulations help us make better decisions about the roadways we construct, the ways we organize our warehouses, and the ways that we respond to disasters. With simulation, we can peer into the future to see the impacts of our efforts, running numerous what-if scenarios that answer our questions without having to wait and see what the impact might be many years down the line."

### On Custom Silicon

> "Custom silicon and specialized hardware have been quickly gaining traction in the consumer technology industry. Everything from our laptops, to our cell phones, to our wearable devices are seeing significant leaps in performance with the fabrication and adoption of custom silicon. While adoption has been quick in the consumer space, the same hasn't been true for business applications and systems, where software and hardware traditionally have longer refresh cycles. However, this will quickly change in the coming years..."

> "Software engineers have traditionally relied on expensive, power-hungry GPUs to do everything from model building to inference. However, this one-size-fits all approach is not efficient — most GPUs aren't optimized for these tasks. In the coming years, more engineers will see the benefits of moving workloads to processors specifically designed for things like model training (AWS Trainium) and inference (AWS Inferentia)."

> "Alan Kay once said, 'people who are really serious about software should make their own hardware.' And in the coming year, people who are really serious about software will really begin to take advantage of all that custom silicon has to offer."

### On Supply Chain

> "A human driver can only spend so long behind the wheel before they become distracted, tired, and potentially dangerous. And this is before we consider each country's specific health and safety regulations. This means that fresh fruits being shipped from southern California can only hope to make it as far as Dallas before they begin to deteriorate. However, an autonomous truck can be on the road for 24 hours."

### On Microgrids

> "I like to think of microgrids as community gardens (but for energy), where community members use these to sustain themselves, reducing their reliance on traditional energy companies and their aging infrastructure."

## What This Brain Takes From It

- **"Everything becomes a data stream"** is Vogels's master frame for the 2020s. Sports, energy, supply chain, building design — all reduce to streams that can be analyzed in real time. This is a coherent thesis, not just a prediction list.
- **Simulation as cloud-accessible** is the underrated point. Most companies dismiss simulation as expensive infrastructure for special use cases. Vogels's claim is that cloud-scale simulation (SimSpace Weaver) lets everyone simulate without needing the HPC stack. Connects to "build the digital twin first" engineering discipline.
- **Custom silicon is the AI-native company-building lesson.** This is Vogels's strongest 2023 prediction in retrospect (Trainium/Inferentia growth, plus the Apple Silicon precedent). The Kay quote is the canonical operating principle: serious software demands serious hardware.
- **Annual-predictions discipline.** Like [[Vogels 10 Lessons from 10 Years of AWS]] and [[Vogels Decade of Dynamo]], Vogels has a discipline of public annual reflection. This is itself a model for operating: reflect publicly, name your bets, hold yourself to them next year.
- **The "from southern California can only hope to make it as far as Dallas" example.** Concrete, falsifiable, supply-chain-specific. The form of a good prediction.

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels 10 Lessons from 10 Years of AWS]] (the platform-level retrospective pattern)
- [[Vogels Decade of Dynamo]] (the product-level retrospective pattern)
- [[Vogels Working Backwards]] (the product-process foundational text)
- [[Operating Principles]], First principles over analogies, Order of magnitude
- [[Persona]], ai-native sub-pole feeds from this on custom-silicon
- [[Dario Amodei]] (the capability-resilience test connects to compute-as-substrate)

## Status

Mature, full-text. The "everything becomes a data stream" thesis and the Kay-on-custom-silicon quote are verbatim primary citations.
