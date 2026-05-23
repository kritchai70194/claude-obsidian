---
source_id: karpathy-recipe-training
title: "A Recipe for Training Neural Networks"
author: Andrej Karpathy
publisher: karpathy.github.io
publication_date: 2019-04-25
url: https://karpathy.github.io/2019/04/25/recipe/
fetch_method: WebFetch (summarized extraction)
fetch_date: 2026-05-24
fidelity: extracts-not-full-text
license_note: Author's personal blog post. Quoted under fair use for research.
---

# Source — Karpathy "A Recipe for Training Neural Networks" (2019)

## Opening Framings (the two thesis claims)

**1. Neural net training is a leaky abstraction.** NNs lack the clean, abstracted APIs found in standard software libraries. They fail to be "off-the-shelf" technology the moment you deviate from a standard task.

**2. Neural net training fails silently.** Unlike traditional software, which throws exceptions when things go wrong, neural networks operate without obvious failure signals when misconfigured.

## The Silent Failure Quote (verbatim)

"Everything could be correct syntactically, but the whole thing isn't arranged properly, and it's really hard to tell ... your misconfigured neural net will throw exceptions only if you're lucky; most of the time it will train but silently work a bit worse."

## Recipe Steps

1. Become one with the data
2. Set up the end-to-end training/evaluation skeleton + get dumb baselines
3. Overfit
4. Regularize
5. Tune
6. Squeeze out the juice

## Debugging Discipline (verbatim)

"A 'fast and furious' approach to training neural networks does not work and only leads to suffering."

"The qualities most correlated with success are patience and attention to detail."

## Closing Reflection

Once you understand the technology, the dataset, the problem, and have built trustworthy infrastructure while exploring increasingly complex models with each next-step improvement predicted in advance, you are equipped to pursue state-of-the-art results.

---

## Provenance Note

Extracted via WebFetch. Full essay at URL above.
