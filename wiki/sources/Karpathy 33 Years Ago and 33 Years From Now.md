---
type: source
title: Karpathy 33 Years Ago and 33 Years From Now
author: Andrej Karpathy
publication_year: 2022
url: 'https://karpathy.github.io/2022/03/14/lecun1989/'
raw_file: .raw/source-karpathy-33-years.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - source
  - ml
  - karpathy
  - long-horizon
  - paradigm-shift
status: mature
related:
  - '[[Andrej Karpathy]]'
  - '[[Karpathy Software 2.0]]'
  - '[[Karpathy Unreasonable Effectiveness of RNNs]]'
  - '[[Karpathy Recipe for Training Neural Networks]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Karpathy "33 Years Ago and 33 Years From Now" (March 2022)

[[Andrej Karpathy]]'s March 2022 essay reproducing the 1989 LeCun handwritten-digit paper in 2022 conditions, then projecting 33 years forward. The longest-horizon Karpathy piece in the canon and the cleanest demonstration of his build-to-learn method applied across decades.

## Provenance

- Author: [[Andrej Karpathy]]
- Year: 2022 (March 14)
- URL: https://karpathy.github.io/2022/03/14/lecun1989/
- Raw extract: [`.raw/source-karpathy-33-years.md`](../../.raw/source-karpathy-33-years.md)
- Fidelity: extracts (WebFetch with quoted numerical claims and key passages)

## Headline Takeaway

The 1989 LeCun paper used 7,291 training images, 1,000 neurons, and 3 days of workstation compute. The macro shape of the work (architecture, loss, optimizer, evaluation) is unchanged in 2022. What changed: dataset ~10^8 larger, parameters ~10^6 larger, compute ~10^7 larger. Karpathy projects forward 33 years and concludes the next paradigm shift is not training from scratch; it is adaptation of foundation models via language.

The essay is the cleanest published instance of [[Persona|long-horizon framing]] applied to a specific technical domain.

## What He Did

Reproduced the 1989 model under multiple conditions:

| Setup | Test error |
|---|---|
| Original 1989 LeCun | 5.00% |
| Karpathy's faithful reproduction | 4.09% |
| With modern techniques (AdamW, dropout, ReLU, augmentation) | 1.59% |
| Modern techniques + 50,000-example dataset | 1.25% |

The exercise is the argument. Build the system; observe what it does; let the data speak.

## Key Quote: Macro Stability

> "Not much has changed in 33 years on the macro level. We're still setting up differentiable neural net architectures, optimizing them end-to-end with backpropagation."

## Quantitative Shape of the Change

- Dataset pixel information: ~10^8 larger
- Model parameters: ~10^6 larger
- Compute (MACs): ~10^7 larger
- Naive speedup (3-day training to 90 seconds on a fanless laptop): 3,000x
- Error reduction from modern techniques alone: ~60% without changing dataset

## Five-Year Projection (the most cited paragraph)

> "The whole setting of training a neural network from scratch on some target task is quickly becoming outdated due to finetuning, especially with the emergence of foundation models."

## 33-Year Projection (the most quotable closing)

> "In 2055, you will ask a 10,000,000X-sized neural net megabrain to perform some task by speaking (or thinking) to it in English. And if you ask nicely enough, it will oblige. Yes you could train a neural net too, but why would you?"

The paradigm shift: from "build a classifier" to "engage with megamodels via language."

## What This Brain Takes From It

- **Quantify the trend, not the vibe.** 10^7 compute increase is concrete; "AI growth" is vibes. Always reach for the order of magnitude. Strengthens the [[Operating Principles|order-of-magnitude thinking]] principle with a concrete instance.
- **Build-to-learn across decades.** Reproducing a 33-year-old paper is the same discipline as the [[Karpathy Recipe for Training Neural Networks|recipe]] applied to a historical artifact. The exercise teaches more than reading would.
- **Long-horizon framing made real.** 33 years back, 33 years forward. Most operator framing covers 1-5 years. The 33-year window matches [[Persona|the Persona]]'s long-horizon discipline.
- **Foundation models as paradigm shift.** The next [[Karpathy Software 2.0|Software 2.0]] move. From-scratch training becomes outdated.
- **Macro stability under surface change.** "Not much has changed" at the macro level is a useful corrective when industry discourse is in pure-novelty mode.

## Cross-References

- [[Andrej Karpathy]]
- [[Karpathy Software 2.0]] (the paradigm-shift framing this essay extends)
- [[Karpathy Unreasonable Effectiveness of RNNs]] (the build-to-learn predecessor)
- [[Karpathy Recipe for Training Neural Networks]] (the operational discipline applied here historically)
- [[Operating Principles]] (order-of-magnitude thinking, long-horizon framing)
- [[Persona]]

## Status

Mature for the surfaced claims. Numerical material is precise; the essay's specific technical setup (architecture details, training curves) would benefit from re-ingest at higher fidelity for engineering-deep reference.
