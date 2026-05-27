---
type: source
title: Karpathy Software 2.0
address: c-000228
author: Andrej Karpathy
publication_year: 2017
url: 'https://karpathy.medium.com/software-2-0-a64152b37c35'
raw_file: .raw/source-karpathy-software-2.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-27'
tags:
  - source
  - ml
  - paradigm-shift
  - karpathy
status: mature
related:
  - '[[Andrej Karpathy]]'
  - '[[Karpathy Recipe for Training Neural Networks]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Karpathy, "Software 2.0" (2017)

[[Andrej Karpathy]]'s 2017 essay reframing neural networks not as a tool but as a paradigm shift in how software is produced. The vocabulary of "Software 1.0" vs "Software 2.0" entered the industry through this essay.

## Provenance

- **Author:** [[Andrej Karpathy]]
- **Year:** 2017 (November)
- **URL:** https://karpathy.medium.com/software-2-0-a64152b37c35
- **Raw extract:** [`.raw/source-karpathy-software-2.md`](../../.raw/source-karpathy-software-2.md)
- **Fidelity:** Extracts (WebFetch summary), thesis verbatim.

## Headline Takeaway

In Software 1.0, humans write code that compiles to binaries. In Software 2.0, humans write *datasets* that compile (via training) to neural-network binaries. The frame matters because it dictates what kind of tooling and engineering practice you need, they are different worlds, not different libraries.

## Key Extracts (verbatim)

> "Software 1.0 is written in languages such as Python, C++, etc. It consists of explicit instructions to the computer written by a programmer."

> "Software 2.0 is written in much more abstract, human unfriendly language, such as the weights of a neural network. No human is involved in writing this code."

> "Neural networks are not just another classifier, they represent the beginning of a fundamental shift in how we develop software."

## Enumerated Benefits of Software 2.0

1. Computationally homogeneous
2. Simple to bake into silicon
3. Constant running time
4. Constant memory use
5. Highly portable
6. Very agile
7. Modules can meld into an optimal whole
8. Superior to human-written code (in many domains)

## Closing, Infrastructure Implications

The 2.0 paradigm requires new infrastructure analogous to the 1.0 stack:
- Software 2.0 IDEs (for dataset curation/cleaning)
- A "Github for datasets"
- Deployment systems analogous to pip/conda for neural networks

## What This Brain Takes From It

- **First principles over analogies**, Karpathy doesn't say "neural nets are like classifiers, but bigger." He decomposes what code actually *is* (executable representations of behavior) and notes that weights satisfy the definition.
- **Reframe rather than incrementalize**, when a paradigm has shifted, calling it "another tool" misses the engineering implications. Worth checking other domains for the same trap.
- **Tooling lags the paradigm**, once a paradigm exists in working form, the value lives in building its tooling. The decade after 2017 has been exactly this for AI infrastructure.

This essay is the cleanest articulation in the corpus of why the [[Persona]] favors first-principles framing over analogical reasoning.

## Cross-References

- [[Andrej Karpathy]], author
- [[Karpathy Recipe for Training Neural Networks]], operational companion: once you accept the paradigm, here's the recipe
- [[Operating Principles]], first principles, reframing
- [[Persona]]

## Status

**Mature for the framing claims.** Reading the full essay directly will be more rewarding than reading paraphrases of it.
