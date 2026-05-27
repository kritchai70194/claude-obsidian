---
type: source
title: Allspaw Infinite Hows
address: c-000252
author: John Allspaw
publication_year: 2014
url: https://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/
raw_file: .raw/articles/allspaw-infinite-hows-2026-05-27.md
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - resilience-engineering
  - incident-analysis
  - allspaw
  - local-rationality
status: mature
related:
  - "[[John Allspaw]]"
  - "[[Allspaw Each Necessary]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
  - "[[seed-corpus-engineer-planners]]"
---

# Allspaw "The Infinite Hows (or, the Dangers of the Five Whys)" (2014)

[[John Allspaw]]'s November 2014 post on kitchensoap.com. The constructive companion to [[Allspaw Each Necessary]]: having argued root cause is a myth, here he provides what to do instead. The canonical statement of the new view of human error inside the Web Operations community.

## Provenance

- Author: [[John Allspaw]]
- Year: 2014 (November 14)
- URL: https://www.kitchensoap.com/2014/11/14/the-infinite-hows-or-the-dangers-of-the-five-whys/
- Raw extract: [`.raw/articles/allspaw-infinite-hows-2026-05-27.md`](../../.raw/articles/allspaw-infinite-hows-2026-05-27.md)
- Fidelity: extracts (WebFetch summary), key quotes verbatim

## Headline Takeaway

"Why?" is the wrong question. **Ask "How?"** Why-questions linguistically bias toward identifying who caused something; how-questions generate operational narratives that surface the conditions a person was actually responding to. This linguistic shift is not cosmetic; it changes what the investigation can see.

## Three Critiques of the Five Whys

1. **Linguistic bias toward blame.** "Why" leads naturally to "who", which leads naturally to blame.
2. **Oversimplification.** "Why?-because" chains assume linear causality; sociotechnical systems do not have it.
3. **Hindsight bias.** Investigators know the outcome; the people in the system did not. Knowing makes prior decisions look obviously wrong.

## The Replacement: How Questions

Instead of Five Whys, gather narratives that reconstruct what the person was responding to:

- Cues observed at critical moments
- Knowledge and experience applied
- Expectations about how events would develop
- Influences shaping interpretation and action
- Communication patterns used
- Goals and time pressures involved

This reconstructs **local rationality**: "how it made sense for someone to do what they did" at the time.

## Two Stories Framework

- **First stories** identify human error as the cause and stop.
- **Second stories** reveal the systemic vulnerabilities that made the human action consequential.

The pivotal claim:

> **Human error is "a starting point, not a conclusion."**

The label "human error" closes investigation. The systemic question (what conditions made this action possible, plausible, and harmful?) opens it.

## Lineage

Allspaw cites:
- **Sidney Dekker** (Field Guide to Understanding Human Error, Just Culture)
- **Nancy Leveson** (Engineering a Safer World, STAMP framework)
- **Todd Conklin** (Pre-Accident Investigations, Restoring System Safety)
- **Richard Cook** (How Complex Systems Fail)

All four argue complexity theory demands moving beyond "Newtonian-Cartesian" reductionism in safety thinking.

## What This Brain Takes From It

- **Ask How not Why.** The linguistic shift is the engineering practice.
- **Local rationality is the operative frame.** What did the person know? What were they under? What were they trying to optimize? The answer is almost always: they were behaving rationally given what they had.
- **First-stories close investigations; second-stories produce learning.** Any incident review that ends with "human error" has stopped one layer too early.
- **Human error is a starting point.** If your postmortem concludes "Bob made a mistake," you have not yet started investigating.
- **Postmortems are learning instruments.** The whole point is the second story.

This source feeds the brain's incident-handling discipline. Combined with [[Allspaw Each Necessary]], it forms a coherent two-essay foundation: (a) there is no root cause; (b) here is what to do instead.

## Cross-References

- [[John Allspaw]] entity
- [[Allspaw Each Necessary]] (2012, the negative companion: no root cause)
- [[Operating Principles]], Engineering Disposition section
- [[Persona]]
- [[seed-corpus-engineer-planners]]

## Status

Mature for the cited claims and the lineage names. The Dekker / Leveson / Conklin / Cook citations are correct attributions; their primary works are queued for future ingest.
