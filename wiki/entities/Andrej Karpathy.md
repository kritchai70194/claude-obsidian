---
type: entity
title: Andrej Karpathy
entity_type: person
role: 'AI researcher, educator, founder; originator of the LLM Wiki pattern'
first_mentioned: '[[LLM Wiki Pattern]]'
created: '2026-04-07T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - entity
  - person
  - ai-researcher
  - mentor
status: mature
related:
  - '[[LLM Wiki Pattern]]'
  - '[[Compounding Knowledge]]'
  - '[[Persona]]'
  - '[[Operating Principles]]'
  - '[[Karpathy Software 2.0]]'
  - '[[Karpathy Recipe for Training Neural Networks]]'
  - '[[Jeff Dean]]'
  - '[[entities/_index]]'
---

# Andrej Karpathy

AI researcher and educator. Former Director of AI at Tesla, founding member of OpenAI. Known for deep learning education (Neural Networks: Zero to Hero series, micrograd, nanoGPT) and for publishing practical AI patterns including the [[LLM Wiki Pattern]] that underlies this vault.

Anchor mentor in this brain's [[Persona]]. The frame here: first principles, build-to-learn, pragmatic AI over hype.

---

## Key Contributions to This Wiki

Karpathy originated the [[LLM Wiki Pattern]] — the idea of using LLMs to build and maintain a persistent, compounding knowledge base rather than re-deriving knowledge from raw documents on every query.

He published the idea as an "idea file" — intentionally abstract, designed to be copy-pasted into a Claude Code or similar session and built out collaboratively. The claude-obsidian plugin is a production implementation of this pattern.

His framing: "The wiki is a persistent, compounding artifact. The cross-references are already there. The contradictions have already been flagged. The synthesis already reflects everything you've read."

---

## Primary-Source Citations

### From [[Karpathy Software 2.0]]

The 2017 essay that reframed neural nets as a paradigm shift in how software is produced, not a new kind of classifier.

> "Software 2.0 is written in much more abstract, human unfriendly language, such as the weights of a neural network. No human is involved in writing this code."

> "Neural networks are not just another classifier, they represent the beginning of a fundamental shift in how we develop software."

### From [[Karpathy Recipe for Training Neural Networks]]

The 2019 operational companion: how to actually do the work without losing your sanity. Two thesis claims (NN training is leaky abstraction; NN training fails silently) plus a six-step recipe.

> "A 'fast and furious' approach to training neural networks does not work and only leads to suffering."

> "The qualities most correlated with success are patience and attention to detail."

> "Your misconfigured neural net will throw exceptions only if you're lucky; most of the time it will train but silently work a bit worse."

### From the original LLM Wiki idea file

> "I thought that I had to reach for fancy RAG, but the LLM has been pretty good at auto-maintaining index files and brief summaries of all documents and reads all the important related data fairly easily at this small scale."

---

## Core Frames (now backed by citations)

- **First principles over analogies.** ([[Karpathy Software 2.0]]) Decompose what a system actually is rather than what it resembles.
- **Build first, then talk.** ([[Karpathy Recipe for Training Neural Networks]]) Step 2 of the recipe: end-to-end skeleton + dumb baseline before debating architecture.
- **Patience and attention to detail.** ([[Karpathy Recipe for Training Neural Networks]]) The qualities most correlated with success.
- **Reframe rather than incrementalize.** ([[Karpathy Software 2.0]]) Paradigm shifts are not "another tool in the toolbox."
- **Order of magnitude thinking — overfit a small subset first.** ([[Karpathy Recipe for Training Neural Networks]]) Test whether the system can express the target at all before scaling.
- **Persistent artifact over ephemeral chat.** ([[LLM Wiki Pattern]]) The wiki is the compounding object.

---

## Queued for Future Ingest

- "The Unreasonable Effectiveness of Recurrent Neural Networks" (2015)
- "Deep Neural Nets: 33 Years Ago and 33 Years From Now" (2022)
- nanoGPT walkthrough video transcripts
- Recent talks on LLM agents

---

## Status

**Mature for the cited frames.** Additional frames around education and the build-to-teach style remain ingestible from the Zero-to-Hero series.

---

## Connections

- [[LLM Wiki Pattern]] — his core contribution to knowledge management
- [[Compounding Knowledge]] — the central insight
- [[Karpathy Software 2.0]], [[Karpathy Recipe for Training Neural Networks]] — primary sources
- [[Persona]] — anchors this brain's operating identity
- [[Operating Principles]]
- [[Jeff Dean]] — adjacent systems-ML thinker
- claude-obsidian plugin — this repo is a production implementation of his pattern
