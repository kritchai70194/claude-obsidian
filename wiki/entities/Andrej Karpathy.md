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
  - '[[Karpathy Unreasonable Effectiveness of RNNs]]'
  - '[[Karpathy Software 2.0]]'
  - '[[Karpathy Recipe for Training Neural Networks]]'
  - '[[Jeff Dean]]'
  - '[[entities/_index]]'
---

# Andrej Karpathy

AI researcher and educator. Former Director of AI at Tesla, founding member of OpenAI. Known for deep learning education (Neural Networks: Zero to Hero series, micrograd, nanoGPT) and for publishing practical AI patterns including the [[LLM Wiki Pattern]] that underlies this vault.

Anchor mentor in this brain's [[Persona]]. Frames: first principles, build-to-learn, pragmatic AI over hype.

---

## Key Contributions to This Wiki

Karpathy originated the [[LLM Wiki Pattern]] used to build this vault. His framing: the wiki is a persistent, compounding artifact; cross-references are already there; contradictions are already flagged; the synthesis already reflects everything you've read.

---

## Primary-Source Citations

### From [[Karpathy Unreasonable Effectiveness of RNNs]] (2015, earliest in his canon here)

The build-to-learn discipline first stated:

> "the ratio of how simple your model is to the quality of the results you get out of it blows past your expectations"

> "If training vanilla neural nets is optimization over functions, training recurrent nets is optimization over programs."

> "all it is is just a more fancy version of this 100-line gist"

> "NO compilation step"

The shape of the operating discipline that produces micrograd, nanoGPT, and the Zero-to-Hero series years later.

### From [[Karpathy Software 2.0]] (2017)

The paradigm-shift framing.

> "Software 2.0 is written in much more abstract, human unfriendly language, such as the weights of a neural network. No human is involved in writing this code."

> "Neural networks are not just another classifier, they represent the beginning of a fundamental shift in how we develop software."

### From [[Karpathy Recipe for Training Neural Networks]] (2019)

The operational discipline.

> "A 'fast and furious' approach to training neural networks does not work and only leads to suffering."

> "The qualities most correlated with success are patience and attention to detail."

> "Your misconfigured neural net will throw exceptions only if you're lucky; most of the time it will train but silently work a bit worse."

### From the original LLM Wiki idea file

> "I thought that I had to reach for fancy RAG, but the LLM has been pretty good at auto-maintaining index files and brief summaries of all documents and reads all the important related data fairly easily at this small scale."

---

## Core Frames (now backed by citations)

- **Build first, then talk.** ([[Karpathy Unreasonable Effectiveness of RNNs]], [[Karpathy Recipe for Training Neural Networks]]) Lead with results, not theory. 100-line gist runs first; production is a fancier version of the same shape.
- **First principles over analogies.** ([[Karpathy Software 2.0]], [[Karpathy Unreasonable Effectiveness of RNNs]]) Decompose what a system actually is. The RNN essay reframes sequence prediction as "optimization over programs", a first-principles move.
- **Patience and attention to detail.** ([[Karpathy Recipe for Training Neural Networks]]) The qualities most correlated with success.
- **Reframe rather than incrementalize.** ([[Karpathy Software 2.0]]) Paradigm shifts are not "another tool in the toolbox."
- **Order of magnitude thinking.** ([[Karpathy Recipe for Training Neural Networks]]) Overfit a small subset first; test whether the system can express the target before scaling.
- **Surprise is a signal.** ([[Karpathy Unreasonable Effectiveness of RNNs]]) When a simple thing produces unexpectedly good results, take the result seriously rather than explaining it away.
- **Persistent artifact over ephemeral chat.** ([[LLM Wiki Pattern]]) The wiki is the compounding object.

---

## Queued for Future Ingest

- "Deep Neural Nets: 33 Years Ago and 33 Years From Now" (2022)
- nanoGPT walkthrough video transcripts
- Recent talks on LLM agents
- Tesla Autopilot era talks

---

## Status

Mature. Three cited primary sources spanning 2015 to 2019 plus the LLM Wiki idea file; operating frame is well-established.

---

## Connections

- [[LLM Wiki Pattern]] his core contribution to knowledge management
- [[Compounding Knowledge]] the central insight
- [[Karpathy Unreasonable Effectiveness of RNNs]], [[Karpathy Software 2.0]], [[Karpathy Recipe for Training Neural Networks]] primary sources
- [[Persona]]
- [[Operating Principles]]
- [[Jeff Dean]] adjacent systems-ML thinker
- claude-obsidian plugin (this repo is a production implementation of his pattern)
