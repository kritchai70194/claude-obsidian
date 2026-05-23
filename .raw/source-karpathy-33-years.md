---
source_id: karpathy-33-years
title: "Deep Neural Nets: 33 years ago and 33 years from now"
author: Andrej Karpathy
publisher: karpathy.github.io
publication_date: 2022-03-14
url: https://karpathy.github.io/2022/03/14/lecun1989/
fetch_method: WebFetch (extracted with quoted material)
fetch_date: 2026-05-24
fidelity: extracts-with-quotes
license_note: Author's personal blog post. Quoted under fair use.
---

# Source, Karpathy "33 Years Ago and 33 Years From Now" (March 2022)

## Opening: The 1989 LeCun Paper as Time Capsule

Karpathy identifies the 1989 Yann LeCun et al. paper on handwritten zip code recognition as historically significant: "the earliest real-world application of a neural net trained end-to-end with backpropagation."

Tiny scale (7,291 training images, 1,000 neurons), yet:

> "This paper reads remarkably modern today, 33 years later."

> "It's all very recognizable and type checks as a modern deep learning paper, except it is from 33 years ago."

## Karpathy's Reproduction (the build-to-learn move)

Karpathy reproduces the 1989 model and runs comparisons:

| Setup | Test error |
|---|---|
| Original 1989 LeCun | 5.00% |
| Karpathy's faithful reproduction | 4.09% |
| With modern techniques (AdamW, dropout, ReLU, augmentation) | 1.59% |
| Modern techniques + 50,000-example dataset | 1.25% |

This is the [[Karpathy Recipe for Training Neural Networks|recipe]] applied retrospectively to a 33-year-old paper. The exercise is the argument.

## Five Lessons from 1989 to 2022

### 1. Macro-level stability

> "Not much has changed in 33 years on the macro level. We're still setting up differentiable neural net architectures, optimizing them end-to-end with backpropagation."

The deep structure of how we train neural networks is unchanged. What changed are scale, hardware, and second-order techniques.

### 2. Scale exploded

- Dataset pixel information: roughly **10^8** larger
- Model parameters: roughly **10^6** larger
- Compute (MACs): roughly **10^7** larger

Karpathy quantifies precisely; the brain prefers this to vague "AI has grown."

### 3. Hardware acceleration

> "A state-of-the-art classifier that took 3 days to train on a workstation now trains in 90 seconds on my fanless laptop (3,000X naive speedup)."

### 4. Technique leverage

Modern optimization techniques cut error rates by ~60% without changing dataset or test-time latency.

### 5. Fundamental constraint stays

> "Further significant gains would likely have to come from a larger model, which would require more compute."

The constraint shape is the same as 1989. Only the threshold values shift.

## Projections for 2055 (the why-now flipped forward)

Karpathy projects forward 33 years:

- 2055 models are "basically the same as 2022 neural nets on the macro level, except bigger"
- Datasets and models will be "somewhere around 10,000,000X larger"
- Current state-of-the-art systems become "a weekend fun project"

## The Most Provocative Projection

> "The whole setting of training a neural network from scratch on some target task is quickly becoming outdated due to finetuning, especially with the emergence of foundation models."

Karpathy expects this to intensify dramatically.

## Closing Vision

> "In 2055, you will ask a 10,000,000X-sized neural net megabrain to perform some task by speaking (or thinking) to it in English. And if you ask nicely enough, it will oblige. Yes you could train a neural net too, but why would you?"

The future is not training. It is *adapting* pre-trained models via language. The frontier moves from "build a classifier" to "engage with megamodels."

## What This Brain Takes From It

- **Build-to-learn at scale.** Karpathy's move (reproducing a 33-year-old paper to learn from it) is the same discipline as [[Karpathy Recipe for Training Neural Networks|the recipe]] applied across time.
- **Quantify the trend, not the vibe.** 10^7 compute increase is concrete; "AI growth" is vibes. Always reach for the order of magnitude.
- **Long-horizon framing made real.** Karpathy looks 33 years back, 33 years forward. Most operator framing covers 1-5 years. The 33-year window is closer to [[Persona|the Persona]]'s long-horizon discipline.
- **Foundation models as the paradigm shift.** From-scratch training is becoming outdated; adapt the megamodel via language. Connects to [[Karpathy Software 2.0|Software 2.0]]: another paradigm shift in how software is produced.

## Provenance Note

Extracted via WebFetch. The numerical claims and verbatim quotes are accurate to the published post.
