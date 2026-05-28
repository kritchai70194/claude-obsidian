---
type: source
title: "Cook How Complex Systems Fail"
address: c-000319
author: "[[Richard Cook]]"
year: 1998
source_url: "https://how.complexsystems.fail/"
fidelity: full-text-summary
tags:
  - source
  - allspaw
  - engineer-planner
  - resilience-engineering
  - cognitive-systems-engineering
  - cook
status: mature
related:
  - "[[John Allspaw]]"
  - "[[Richard Cook]]"
  - "[[Operating Principles]]"
  - "[[Allspaw Each Necessary]]"
  - "[[Allspaw Infinite Hows]]"
  - "[[Cook Stella Report]]"
sources: []
---

# Cook "How Complex Systems Fail" (1998)

[[Richard Cook]]'s 18-proposition treatise from the Cognitive Technologies Laboratory at the University of Chicago. Filed in this wiki because [[John Allspaw]] cites Cook constantly: this is the foundational essay of the lineage Allspaw imported into Web Operations. Cook is also Allspaw's co-author on [[Cook Stella Report]] and a long-running collaborator on resilience engineering material.

## Provenance

- Author: [[Richard Cook]], MD (anesthesiologist, then human factors researcher)
- Year: 1998 (revised through ~2002)
- URL: https://how.complexsystems.fail/
- Raw extract: `.raw/articles/cook-how-complex-systems-fail-2026-05-28.md`
- Fidelity: full text of the 18 propositions, each summarized with the load-bearing verbatim sentence

## Why This Page Exists in an Allspaw-Heavy Wiki

Allspaw's frames (no root cause, second stories, local rationality, the new view of human error) are direct extensions of Cook's propositions. When this brain reaches for "complex systems run in degraded mode" or "all practitioner actions are gambles" or "safety is an emergent property", the upstream citation is Cook, not Allspaw. Closely-cited adjacent source.

## The 18 Propositions (load-bearing claims)

### 1. Complex systems are intrinsically hazardous systems.

> "All of the interesting systems (e.g. transportation, healthcare, power generation) are inherently and unavoidably hazardous by the own nature."

### 2. Complex systems are heavily and successfully defended against failure.

Multiple layers of defense: technical, human, organizational, regulatory.

### 3. Catastrophe requires multiple failures. Single point failures are not enough.

> "Overt catastrophic failure occurs when small, apparently innocuous failures join to create opportunity for a systemic accident."

This is the upstream of Allspaw's "each necessary but only jointly sufficient" framing.

### 4. Complex systems contain changing mixtures of failures latent within them.

> "The complexity of these systems makes it impossible for them to run without multiple flaws being present."

### 5. Complex systems run in degraded mode.

> "Complex systems run as broken systems. The system continues to function because it contains so many redundancies and because people can make it function."

A pillar claim. The default state of any interesting production system is broken-but-functioning, held together by human compensation.

### 6. Catastrophe is always just around the corner.

> "The potential for catastrophic outcome is a hallmark of complex systems. It is impossible to eliminate the potential for such catastrophic failure."

### 7. Post-accident attribution to a 'root cause' is fundamentally wrong.

> "Because overt failure requires multiple faults, there is no isolated 'cause' of an accident. There are multiple contributors to accidents."

The proposition Allspaw later imported wholesale in [[Allspaw Each Necessary]].

### 8. Hindsight biases post-accident assessments of human performance.

> "Knowledge of the outcome makes it seem that events leading to the outcome should have appeared more salient to practitioners at the time than was actually the case."

Upstream of Allspaw's "hindsight is the systematic enemy of incident review."

### 9. Human operators have dual roles: as producers and as defenders against failure.

Practitioners must simultaneously "operate the system in order to produce its desired product and also work to forestall accidents."

### 10. All practitioner actions are gambles.

> "All practitioner actions are actually gambles, that is, acts that take place in the face of uncertain outcomes."

A pillar claim. Operators do not have perfect information. Every action is a bet under uncertainty. Punishing a bet that lost because of its outcome (rather than because of its quality at the time) is hindsight bias dressed up as accountability.

### 11. Actions at the sharp end resolve all ambiguity.

> "All ambiguity is resolved by actions of practitioners at the sharp end of the system."

The "sharp end" is the human-system interface where decisions actually get made under pressure.

### 12. Human practitioners are the adaptable element of complex systems.

Practitioners restructure systems, concentrate critical resources, and provide pathways for retreat or recovery.

### 13. Human expertise in complex systems is constantly changing.

> "Training and refinement of skill and expertise is one part of the function of the system itself."

### 14. Change introduces new forms of failure.

> "When new technologies are used to eliminate well understood system failures... they often introduce new pathways to large scale, catastrophic failures."

The "fixing known failures introduces unknown ones" frame. Coupling and complexity are not free.

### 15. Views of 'cause' limit the effectiveness of defenses against future events.

> "Post-accident remedies usually increase the coupling and complexity of the system. This increases the potential number of latent failures."

A reform that locks in a specific causal narrative ("the operator pressed the wrong button, so we'll add a confirmation dialog") usually adds complexity and produces new failure modes.

### 16. Safety is a characteristic of systems and not of their components.

> "Safety is an emergent property of systems; it does not reside in a person, device or department of an organization or system."

A pillar claim. Safety cannot be located in a component or a person. It is the property of how the whole assembly behaves.

### 17. People continuously create safety.

> "Failure free operations are the result of activities of people who work to keep the system within the boundaries of tolerable performance."

Safety is produced, not present. Engineers, operators, and reviewers actively manufacture it every shift.

### 18. Failure free operations require experience with failure.

> "Recognizing hazard and successfully manipulating system operations to remain inside the tolerable performance boundaries requires intimate contact with failure."

The closing claim. To run reliably you have to have failed often enough to recognize hazard. Risk-free operations is a contradiction in terms.

## Frames Cited

- No isolated cause (proposition 7) flows into [[Allspaw Each Necessary]] "no root cause"
- Hindsight bias (8) flows into Allspaw's investigator-discipline frame
- Sharp-end practitioners (11), gambles (10), and adaptive humans (12) flow into the "new view of human error" Allspaw promotes in [[Allspaw Infinite Hows]]
- Safety as emergent (16), continuously created (17), requiring experience (18) sets the metaphysics of resilience engineering

## What This Brain Takes From It

- Real systems run broken. The interesting question is not "how do we avoid all failure" but "how do we run a degraded system safely."
- Every operator action is a gamble. Judging the gamble by the outcome rather than by the information available at the time is the canonical mistake of incident review.
- There is no isolated cause. The investigation has to enumerate contributing conditions, not collapse them to a single chain.
- Safety is produced by humans, continuously, through judgment under uncertainty. Removing the humans (full automation) removes the producers of safety.
- Adding controls to prevent known failures is not free. Each control adds coupling, which adds new latent failure pathways. The reform itself is a failure source.

## Cross-References

- [[John Allspaw]] (cites Cook constantly; this is upstream of Allspaw's whole frame)
- [[Allspaw Each Necessary]] (Allspaw imports proposition 3 and 7)
- [[Allspaw Infinite Hows]] (Allspaw imports propositions 8, 10, 11, 12)
- [[Cook Stella Report]] (Cook + Allspaw + Woods, 2017)
- [[Operating Principles]], Engineering Disposition section
- [[seed-corpus-engineer-planners]]

## Status

Mature for the 18 propositions. Verbatim quotes captured. The most-cited essay in the resilience engineering lineage; everything Allspaw says about incidents rests on this foundation.
