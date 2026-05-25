---
source_id: carmack-plan-archive-1998
title: "John Carmack .plan File Archive, 1998"
author: John Carmack
publication_date: 1998
canonical_archive: https://github.com/ESWAT/john-carmack-plan-archive
mirror_archive: https://fabiensanglard.net/fd_proxy/doom3/pdfs/johnc-plan_1998.pdf
fetch_method: WebFetch from ESWAT GitHub archive
fetch_date: 2026-05-26
fidelity: extracts (representative entries; not all entries; preserved dates and Carmack's verbatim writing where retrieved)
license_note: Originally posted by Carmack to public id Software server. Widely mirrored and archived. Quoted under fair use.
---

# Source, Carmack .plan Archive 1998

## What .plan Files Were

The Unix `.plan` file was a small text file in a user's home directory, accessible via the `finger` protocol. Carmack used his `.plan` (visible at `finger johnc@idsoftware.com` during the late 90s) as a public engineering journal, posting irregularly from 1996-2003.

This was, effectively, the first public engineering blog. The cultural form of "the working programmer thinking out loud about decisions in progress" was invented here. The format predates blogs, predates "build in public", predates the engineering Twitter pattern.

1998 was a particularly rich year: id was finishing Quake II, starting Quake III, and Carmack was re-thinking core architecture decisions in public.

## Representative Entries

### June 8, 1998: Quake 3 networking redesign

> "The networking architecture for Quake 2 was just not the right thing. The interpolating 10 hz server made a lot of animation easier...but it just wasn't a good thing for internet play."

Followed by the commitment:

> "Quake 3 will have an all new entity communication mechanism that should be solidly better than any previous system."

The pattern: name the prior decision, explain why it was wrong (single-player optimization made internet play worse), commit to the redesign publicly. This is the engineer-planner shape: a public acknowledgment of a constraint that no longer applies, and a stated new direction.

### June 16, 1998: Quake Arena multiplayer-only

> "In the past, we have always been designing two games at once, the single player game and the multi player game, and they often had conflicting goals."

The decision to make Quake Arena multiplayer-only was framed as "purity of focus" rather than "cutting features". Engineering planning with explicit trade-off articulation: feature breadth vs purity of focus, with the choice and the reasoning both visible.

### January 1, 1998: Public debugging

> "WSAEADDRNOTAVAIL errors. Map versions differ error. Sometimes connecting and seeing messages but not getting in. Decompression read overrun."

Then:

> "Of course, we don't actually get any of those errors on any of our systems here, so I am having to work remotely with other users."

The pattern: list the unsolved problems publicly. Admit the local environment doesn't reproduce them. Solicit distributed debugging help by visibility. This is the original "build in public" debugging pattern, 25 years before the term existed.

### June 8, 1998: Input system design (three modes)

Carmack documents three mouse input modes with quantified trade-offs:

- Mode 1: standard Win32 (baseline)
- Mode 2: DirectInput (more precision, slightly lower latency)
- Mode 3: filtered DirectInput (adds ~12ms latency for consistency across frame rates)

> "This will be the default for Quake 3, but some people may want the 12ms faster (but rougher) response time."

The pattern: enumerate options with quantified trade-offs, state the default with reasoning, leave the door open for users with different priorities. Engineering planning made transparent at the user-facing level.

### April 17, 1998: Style evolution as timeline marker

> "My C coding style has changed for Quake 3, which is going to give me a nice way of telling at a glance which code I have or haven't touched since Quake 2."

The meta-observation: style as a learning artifact. Each version of his style records what he had learned by that point. The code becomes a time capsule of engineering judgment.

### February 12, 1998: Hardware evaluation

GPU scorecards with consistent categories: throughput, fillrate, quality, features, implementation gaps.

> On the Riva 128: "They are very fast, but they don't support an important feature. We can crutch it up by performing some extra drawing passes, but there is a bit of a quality loss, and it will impact their speed."

Principled hardware assessment without vendor loyalty. The point: state the criteria, score against them, declare the verdict.

## Stylistic Patterns

- **Terse subject lines.** Updates often single-line topic headers.
- **Numbered lists for clarity.** Changes, problems, and options presented vertically.
- **Honest uncertainty.** "I don't know", "haven't followed", "jury is still out".
- **First-person accountability.** "I decided", "I've learned", "I was wrong".
- **Technical depth with accessibility.** Quantified constraints explained without assuming reader expertise.
- **Long-form research synthesis.** Multi-paragraph explorations of dead-end research (e.g. May 4 entry on lumigraphs and environment maps).

## Why This Source Matters

The .plan files are evidence of what engineering planning looks like as an ongoing practice. Most engineers do not have an artifact like this. The discipline (publish your decisions, with reasoning, in plain text, regularly) is the artifact itself.

Two things to internalize from this source:

1. **Engineering decisions benefit from being written down with reasoning.** Even if no one else reads them. The act of writing forces the trade-offs to surface.
2. **Public commitment changes the quality of the decision.** A `.plan` entry is a small commitment, but it makes the decision real in a way an unrecorded thought does not.

The modern equivalents (engineering Twitter, RFCs, design docs, public roadmaps) all descend from this practice. The original is still the cleanest example.

## What This Source Teaches

- Write your engineering decisions down with reasoning, even when no one reads them.
- Publish enough that you commit to the decisions you have made.
- Track the trade-offs you considered, not just the choice.
- Style is a learning artifact; let it evolve and notice when it does.
- Public debugging beats private debugging when users are part of the system.
