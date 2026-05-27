---
type: source
title: Karpathy Recipe for Training Neural Networks
address: c-000236
author: Andrej Karpathy
publication_year: 2019
url: 'https://karpathy.github.io/2019/04/25/recipe/'
raw_file: .raw/source-karpathy-recipe-training.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-27'
tags:
  - source
  - ml
  - engineering-discipline
  - karpathy
  - debugging
status: mature
related:
  - '[[Andrej Karpathy]]'
  - '[[Karpathy Software 2.0]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Karpathy, "A Recipe for Training Neural Networks" (2019)

[[Andrej Karpathy]]'s operational companion to [[Karpathy Software 2.0|Software 2.0]]. Where the 2017 essay made the conceptual case, this 2019 essay describes how to actually do the work without losing your sanity.

## Provenance

- **Author:** [[Andrej Karpathy]]
- **Year:** 2019 (April 25)
- **URL:** https://karpathy.github.io/2019/04/25/recipe/
- **Raw extract:** [`.raw/source-karpathy-recipe-training.md`](../../.raw/source-karpathy-recipe-training.md)
- **Fidelity:** Extracts (WebFetch summary), key quotes verbatim.

## Headline Takeaway

Two opening claims define the worldview: NN training is a *leaky abstraction*, and it *fails silently*. Together these mean a casual approach guarantees subtly broken systems. The recipe is a six-step discipline that catches failures by structure, since they won't catch themselves.

## The Two Thesis Claims (paraphrased)

1. **Neural net training is a leaky abstraction.** Unlike most software libraries with clean APIs, NN training breaks the moment you step off the well-trodden path. The abstraction does not hide its complexity from you when something goes wrong.

2. **Neural net training fails silently.** Traditional software throws exceptions; misconfigured neural nets just *train a bit worse*. You only notice when the metric is mysteriously low.

## Verbatim Quotes

> "Everything could be correct syntactically, but the whole thing isn't arranged properly, and it's really hard to tell ... your misconfigured neural net will throw exceptions only if you're lucky; most of the time it will train but silently work a bit worse."

> "A 'fast and furious' approach to training neural networks does not work and only leads to suffering."

> "The qualities most correlated with success are patience and attention to detail."

## The Six-Step Recipe

1. **Become one with the data.** Look at it, by hand, in bulk. Notice patterns and outliers before any model.
2. **Set up the end-to-end training/evaluation skeleton + get dumb baselines.** Build the trustworthy infrastructure first; verify with a simple model.
3. **Overfit.** Prove the system *can* learn by deliberately overfitting a small subset.
4. **Regularize.** Add the standard regularization techniques in calibrated doses.
5. **Tune.** Hyperparameter search after the architecture is right, not before.
6. **Squeeze out the juice.** Final-stage techniques (ensembling, longer training, etc.) once the pipeline is sound.

## What This Brain Takes From It

- **First principles over analogies**, the recipe is an inverted-pyramid debugging discipline derived from the failure mode (silent failure), not borrowed from software engineering folk wisdom.
- **Mechanism over goodwill**, "patience and attention to detail" are stated values, but the recipe's contribution is the *mechanism* that forces those values to show up in the work. Six steps, in order, each catching a different failure mode.
- **Build first, then talk**, step 2 (skeleton + dumb baselines) is the canonical instance: get something working end-to-end before debating architecture.
- **Order of magnitude**, step 3 (overfit a small batch) tests an order-of-magnitude question before scaling, validating the system can express the target function at all.

## A Generalizable Pattern

The recipe generalizes far beyond ML. Many engineering problems have silent failure modes: data pipelines, distributed systems, security configurations. The recipe's structure, *prove the system can do the thing on a trivial case, then scale*, is one of the most transferable patterns in engineering.

## Cross-References

- [[Andrej Karpathy]], author
- [[Karpathy Software 2.0]], conceptual prequel
- [[Operating Principles]], patience, mechanism, build-first
- [[Persona]]

## Status

**Mature for the recipe structure and key quotes.** Re-reading the full essay would deepen specific subsections (the regularization advice especially).
