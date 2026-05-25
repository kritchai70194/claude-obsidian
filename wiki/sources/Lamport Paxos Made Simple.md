---
type: source
title: Lamport Paxos Made Simple
address: c-000012
source_type: paper
author: "[[Leslie Lamport]]"
publication_date: 2001-11-01
url: https://lamport.azurewebsites.net/pubs/paxos-simple.pdf
microsoft_research: https://www.microsoft.com/en-us/research/publication/paxos-made-simple/
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - paper
  - engineering
  - distributed-systems
  - clarity
status: developing
related:
  - "[[Leslie Lamport]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[Carmack Lex Fridman 309]]"
---

# Lamport Paxos Made Simple

Lamport's 13-page 2001 rewrite of his own 1998 paper "The Part-Time Parliament", which had been universally regarded as difficult to understand. The 2001 rewrite is one of the most-cited examples in computer science of an author rewriting their own work to be drastically clearer.

The interesting artifact is not the algorithm (Paxos is widely implemented). The interesting artifact is the rewrite as a study in clarity-as-engineering-discipline.

## Key Claims

### The opening line

> "The Paxos algorithm, when presented in plain English, is very simple."

Lamport's bluntness is the point. The original paper had a reputation for being incomprehensible; the rewrite is named "Paxos Made Simple" to make the rebuttal explicit.

### The concession and redirect

> "The Paxos algorithm for implementing a fault-tolerant distributed system has been regarded as difficult to understand, perhaps because the original presentation was Greek to many readers. In fact, it is among the simplest and most obvious of distributed algorithms."

Lamport does not defend the original. He concedes it failed to communicate, then redirects to the underlying algorithm. The unstated implication: the difficulty was in the writing, not the algorithm. Clarity is the engineering work.

### Why the rewrite

Lamport got tired of everyone saying how difficult Paxos was. The 1998 paper used "pseudo-Greek names" (parliamentary metaphors with terms like "decree" and "President of the Chamber") that distracted readers from the logic.

The 2001 rewrite strips the metaphor and presents the algorithm directly. The result: 13 pages, no formula more complicated than `n1 > n2`. The contrast is explicit: original paper hard, rewrite easy, algorithm unchanged.

### Senior reviewers

Lamport credits Fred Schneider and Butler Lampson for comments that improved the rewrite. The presence of two senior reviewers on a 13-page paper is itself a methodology signal: clarity is not a solo effort.

## Meta-lessons

### Clarity is engineering work

The same algorithm can be incomprehensible or trivial depending on how it is written. The choice between the two is engineering, not aesthetic.

### Rewriting your own work is a legitimate artifact

A rewrite is not a failure to get it right the first time; it is the recognition that the audience has not yet been served. The discipline is to fix the artifact, not defend it.

### Metaphor that distracts from logic is worse than no metaphor

The 1998 parliamentary metaphor distracted from the algorithm. The 2001 paper drops the metaphor and is clearer. Sometimes the right move is to remove the framing, not improve it.

### Length is not the metric; clarity is

13 pages of clear writing beats 30 pages of unclear writing. The 1998 paper was longer because it had to support its own metaphor. The 2001 paper is shorter because it does not.

## The Lamport Style Applied to His Own Work

The paper is an artifact of Lamport's methodology applied recursively. He had a specification (the algorithm) that did not communicate. The "bug" was in the writing, not the algorithm. He rewrote and fixed the bug.

This is what "writing is the medium of thinking" looks like in practice: when the writing fails, the lesson is that the thinking has not yet reached the audience. The fix is not "explain it again with more words"; the fix is to rewrite at the level the audience needs.

## Principles Cited From This Source

(Will be added to [[Operating Principles]].)

- **Clarity is engineering work.** The same content can be incomprehensible or trivial depending on the writing.
- **Rewrite your own work when it fails to communicate.** The artifact is the writing, not your ego.
- **Length is not the metric; clarity is.** Short and clear beats long and obscure.
- **Senior reviewers are part of the clarity process.** "I made this clearer" is not a claim you can validate solo.

## Connections

- [[Leslie Lamport]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-engineer-planners]] source L4
- [[Carmack Lex Fridman 309]] same meta-pattern (willingness to throw away your own work)
- Adjacent: [[Working Backwards Book]] (Amazon's press-release-first discipline, also "rewrite until it lands")
