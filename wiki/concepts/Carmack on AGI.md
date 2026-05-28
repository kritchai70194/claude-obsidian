---
type: concept
title: "Carmack on AGI"
address: c-000303
complexity: intermediate
domain: ai-native
created: 2026-05-28
updated: 2026-05-28
tags:
  - concept
  - ai-native
  - engineer-planner
  - carmack
  - agi
status: mature
related:
  - "[[John Carmack]]"
  - "[[Carmack on AGI Keen Technologies]]"
  - "[[Carmack Farewell Meta 2022]]"
  - "[[Carmack Lex Fridman 309]]"
  - "[[Operating Principles]]"
  - "[[AI-Native Economics]]"
  - "[[AI Company Defensibility]]"
  - "[[Persona]]"
---

# Carmack on AGI

> "The code for artificial general intelligence is going to be tens of thousands of lines of code, not millions of lines of code... my bet is there's less than six key insights that need to be made." ([[Carmack on AGI Keen Technologies]])

The counter-thesis to scale-monopoly AGI. Carmack's bet, operationalized at Keen Technologies, is that AGI is a small-program problem solvable by a small team on commodity hardware, requiring a handful of insights rather than massive infrastructure. This page synthesizes the position across the post-Meta sources.

## The Five Frames

### 1. AGI is a small-code problem

Tens of thousands of lines, not millions. Conceivably one individual writing it. Bounded search ("less than six key insights, each on the back of an envelope") rather than open-ended engineering scaling.

> "The code for artificial general intelligence is going to be tens of thousands of lines of code... my bet is there's less than six key insights that need to be made." ([[Carmack on AGI Keen Technologies]])

This is the load-bearing claim against scale-monopoly AGI. If Carmack is right, the foundation-model labs do not have the structural advantage that compute and capital usually buy.

### 2. The biology existence proof

A ~40MB compressed genomic specification produces the brain's architecture. Biology has bounded the architectural complexity any AGI design must reach. The argument is existence-proof, not blueprint: it does not say *how* but it does say *how much*.

The implication for engineers: the search space is bounded by biology, not by current model size. The current trillion-parameter models are likely overshooting the architectural minimum, even if they undershoot the data minimum.

### 3. Single-workstation thesis

AGI as an individual-research problem on commodity hardware. Carmack explicitly positions himself as "one of these random test points" who might or might not be right, but whose existence is the actual experiment.

The implication for AI strategy: do not assume scaling is the only path. Bet on insight + small-team + individual research as the alternative. Keen Technologies is the operating instance of this thesis.

### 4. Larval phase before output

Carmack reported ~2 years of immersive learning before substantive research output. Counter to move-fast default; pro-deep-grounding. The bet is that depth of understanding compounds even when output is invisible.

> "There's a larval phase of building up the relevant background." (paraphrased from Carmack on AGI interviews)

The implication for research org design: hire for deep-grounding capacity, not for past output. The early years look like nothing; the substrate they build is what produces later output.

### 5. Investor money as self-imposed discipline

Carmack could have written a check for $20M himself. He took investor money instead — explicitly to impose external discipline on scope, timeline, and accountability that the self-funded path lacks.

> "I could have written a check for $20 million myself, but accepting investor money forces me to be more disciplined and determined." ([[Carmack on AGI Keen Technologies]])

This is a commitment-device design pattern: external accountability beats internal accountability for sustained focus. Generalizable beyond AGI.

## Keen Technologies as the Anti-Friction Org

Keen is the operating instance of the [[Carmack Farewell Meta 2022]] diagnosis. Meta failed Carmack via "operating at half effectiveness," friction-not-capacity, decisions-not-killed, directions-not-held. Keen is the inverse: $20M, no near-term business opportunities, no product-delivery pressure, small team, kill-authority concentrated.

> "We have a ridiculous amount of people and resources, but we constantly self-sabotage and squander effort... operating at half the effectiveness that would make me happy." ([[Carmack Farewell Meta 2022]])

The structural design of Keen is the falsification test: if the small-program AGI thesis is right, removing all the friction Carmack named at Meta should produce visible progress. If it does not, the thesis is wrong.

## Synthesis With Other Pole Frames

- **vs. [[Sam Altman]] / [[Dario Amodei]] scale thesis:** Altman and Amodei bet on scaling laws as the path. Carmack bets on insights as the path. The brain treats both as live hypotheses; the world will resolve which is correct, and both produce useful sub-claims regardless.
- **vs. [[Demis Hassabis|Hassabis's AGI through science]]:** Hassabis's path is closer to Carmack's in shape (long-horizon research bets) but different in scale (DeepMind has thousands of researchers and direct DeepMind/Google compute). Carmack's anti-thesis is that Hassabis-scale orgs may also suffer the Meta friction problem.
- **vs. [[AI-Native Economics]]:** the conventional economics assume scaling. Carmack's thesis, if right, breaks the assumption — AGI capital intensity could collapse, repricing the entire AI-native company landscape.

## How This Brain Uses the Carmack AGI Frames

When evaluating any AI-native strategic question:

1. **Is this a scaling bet or an insight bet?** Carmack's frame forces the explicit choice. Most AI strategy assumes scaling; insight bets need explicit defense.
2. **What does the small-program path predict here?** If small-program AGI is real, second-order effects include cheap-AGI commodity dynamics and weakened foundation-lab monopolies.
3. **Are we operating at half effectiveness?** Carmack's diagnostic question applied internally. Friction-not-capacity is the default failure mode of large AI orgs.
4. **What's our commitment device?** External accountability beats internal accountability. Take the investment, take the deadline, take the public commitment.

## Connections

- [[John Carmack]] entity page
- [[Carmack on AGI Keen Technologies]] primary source on the AGI position
- [[Carmack Farewell Meta 2022]] primary source on the friction diagnosis
- [[Carmack Lex Fridman 309]] earlier exploration of related themes
- [[Operating Principles]] specifically the six new Carmack VR/AGI principles in Engineering Disposition
- [[AI Company Defensibility]] orthogonal AI-native frame
- [[AI-Native Economics]] the scaling-bet economics that Carmack's thesis falsifies if true
