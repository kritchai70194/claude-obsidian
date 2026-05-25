---
type: source
title: Carmack Plan Archive 1998
address: c-000008
source_type: archive
author: "[[John Carmack]]"
publication_date: 1998
url: https://github.com/ESWAT/john-carmack-plan-archive
mirror: https://fabiensanglard.net/fd_proxy/doom3/pdfs/johnc-plan_1998.pdf
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - archive
  - engineering
  - planning
status: developing
related:
  - "[[John Carmack]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Carmack Lex Fridman 309]]"
---

# Carmack Plan Archive 1998

A year's worth of Carmack's `.plan` file entries from 1998. The `.plan` file (visible via the Unix `finger` protocol at `finger johnc@idsoftware.com`) was Carmack's public engineering journal from 1996 to ~2003. This was effectively the first public engineering blog: the cultural form of "the working programmer thinking out loud about decisions in progress" was invented here.

1998 was a particularly rich year. id was finishing Quake II, starting Quake III, and Carmack was re-thinking core architecture decisions in public.

## Representative Entries

### June 8, 1998: Naming a prior wrong decision

> "The networking architecture for Quake 2 was just not the right thing. The interpolating 10 hz server made a lot of animation easier...but it just wasn't a good thing for internet play."

> "Quake 3 will have an all new entity communication mechanism that should be solidly better than any previous system."

The pattern: name the prior decision, explain why it was wrong (single-player optimization made internet play worse), commit to the redesign publicly. The shape of an engineer-planner acknowledging a constraint that no longer applies.

### June 16, 1998: Purity of focus

> "In the past, we have always been designing two games at once, the single player game and the multi player game, and they often had conflicting goals."

Quake Arena multiplayer-only, framed as "purity of focus" rather than "cutting features". Trade-off articulated explicitly: feature breadth vs purity of focus.

### January 1, 1998: Public debugging

> "WSAEADDRNOTAVAIL errors. Map versions differ error. Sometimes connecting and seeing messages but not getting in. Decompression read overrun."

> "Of course, we don't actually get any of those errors on any of our systems here, so I am having to work remotely with other users."

List unsolved problems publicly. Admit the local environment does not reproduce them. Recruit distributed debugging by visibility. The original "build in public" debugging pattern, 25 years before the term existed.

### April 17, 1998: Style evolution as artifact

> "My C coding style has changed for Quake 3, which is going to give me a nice way of telling at a glance which code I have or haven't touched since Quake 2."

Style as a learning artifact. Each version of his style records what he had learned by that point. The code becomes a time capsule of engineering judgment.

### February 12, 1998: Hardware evaluation

GPU scorecards with consistent categories: throughput, fillrate, quality, features, implementation gaps.

> On the Riva 128: "They are very fast, but they don't support an important feature. We can crutch it up by performing some extra drawing passes, but there is a bit of a quality loss, and it will impact their speed."

The pattern: state the criteria, score against them, declare the verdict. No vendor loyalty, no hand-waving.

## Stylistic Patterns

- Terse subject lines.
- Numbered lists for clarity.
- Honest uncertainty ("I don't know", "haven't followed", "jury is still out").
- First-person accountability ("I decided", "I've learned", "I was wrong").
- Technical depth with accessibility.
- Multi-paragraph synthesis of dead-end research.

## What This Source Teaches

The `.plan` archive is evidence of what engineering planning looks like as a sustained practice. Two things to internalize:

1. **Engineering decisions benefit from being written down with reasoning.** Even if no one reads them. Writing forces the trade-offs to surface.
2. **Public commitment changes the quality of the decision.** A `.plan` entry is a small commitment, but it makes the decision real in a way an unrecorded thought does not.

The modern equivalents (engineering Twitter, RFCs, design docs, public roadmaps) descend from this practice. The original is still the cleanest example.

## Principles Cited From This Source

(Will be added to [[Operating Principles]].)

- **Write your engineering decisions down with reasoning, even when no one reads them.**
- **Publish enough to commit to the decisions you have made.**
- **Record the trade-offs you considered, not just the choice.**
- **Style is a learning artifact; let it evolve and notice when it does.**

## Connections

- [[John Carmack]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-engineer-planners]] source C4
- [[Carmack Lex Fridman 309]] reflective interview where Carmack discusses the `.plan` practice retrospectively
- Adjacent: [[Bezos 2002 API Mandate]] (another example of an engineering decision committed publicly with reasoning)
