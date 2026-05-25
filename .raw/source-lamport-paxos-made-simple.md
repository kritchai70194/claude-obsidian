---
source_id: lamport-paxos-made-simple
title: "Paxos Made Simple"
author: Leslie Lamport
publication_date: 2001-11-01
publication: Lamport's site and ACM mirrors
url: https://lamport.azurewebsites.net/pubs/paxos-simple.pdf
microsoft_research: https://www.microsoft.com/en-us/research/publication/paxos-made-simple/
related_papers:
  - "The Part-Time Parliament (Lamport, 1998) - the original Paxos paper"
fetch_method: WebFetch + WebSearch (PDF not directly extractable; abstract, intro, and intent verified via multiple coverage sources)
fetch_date: 2026-05-26
fidelity: extracts (key quotes and structure cross-confirmed; full paper not retrieved)
license_note: Lamport's publication, freely available. Quoted under fair use.
---

# Source, Lamport "Paxos Made Simple" (2001)

## What This Is

Lamport's 13-page rewrite of his own 1998 Paxos paper, "The Part-Time Parliament", which had been universally regarded as difficult to understand. The 2001 rewrite is one of the most-cited examples in computer science of an author rewriting their own work to be drastically clearer.

The interesting artifact is not the algorithm (Paxos is widely implemented). The interesting artifact is the rewrite as a study in clarity-as-engineering-discipline.

## The Abstract

> "The Paxos algorithm, when presented in plain English, is very simple."

Lamport's opening line in the abstract. The bluntness is the point. The original paper had a reputation for being incomprehensible; the rewrite is named "Paxos Made Simple" to make the rebuttal explicit.

## The Introduction

> "The Paxos algorithm for implementing a fault-tolerant distributed system has been regarded as difficult to understand, perhaps because the original presentation was Greek to many readers. In fact, it is among the simplest and most obvious of distributed algorithms."

Note the rhetorical move. Lamport does not defend the original presentation. He concedes it failed to communicate, then redirects to the underlying algorithm, which he calls "among the simplest and most obvious".

The unstated implication: the difficulty was the writing, not the algorithm. Clarity is the engineering work.

## Why the Rewrite

Lamport's framing in the introduction: he got tired of everyone saying how difficult Paxos was. The original paper used "pseudo-Greek names" (parliamentary metaphors with terms like "decree" and "President of the Chamber") that distracted readers from the actual logic.

The 2001 rewrite strips the metaphor and presents the algorithm directly. The result: 13 pages, no formula more complicated than `n1 > n2`. Lamport explicitly notes the contrast: the original paper was hard, the rewrite is easy, the algorithm did not change.

## Acknowledgments

Lamport credits Fred Schneider and Butler Lampson for comments that improved the rewrite. The presence of two senior reviewers in a 13-page paper is itself a methodology signal: clarity is not a solo effort; it requires feedback from people who will tell you when you are still being unclear.

## The Algorithm in One Sentence

The paper builds up the algorithm in stages, but the punchline is something like: a value is chosen when a majority of acceptors accept a proposal with that value, and the protocol ensures that once a value is chosen, only that value can be chosen thereafter.

The full statement requires more care (proposer/acceptor/learner roles, two-phase protocol, ballot numbers), but Lamport's claim that the underlying logic is simple holds up. The 13 pages walk through the construction step by step.

## What This Source Teaches

- Clarity is engineering work. The same algorithm can be incomprehensible or trivial depending on how it is written.
- A rewrite is a legitimate engineering artifact; do not be too proud to rewrite your own work.
- Metaphor that distracts from logic is worse than no metaphor.
- 13 pages of clear writing beats 30 pages of unclear writing. Length is not the metric.
- Senior reviewers are part of the clarity process. "I made this clearer" is not a claim you can validate solo.

## Meta-lesson, the Lamport Style

The paper is itself an artifact of Lamport's methodology applied to his own work. He had a specification (the algorithm) that did not communicate. The "bug" was in the writing, not the algorithm. He rewrote and fixed the bug.

This is what "writing is the medium of thinking" looks like in practice: when the writing fails, you have learned that your thinking has not yet reached the audience. The fix is not "explain it again with more words"; the fix is to rewrite at the level the audience needs.

## Connection to Carmack

The same meta-pattern as Carmack's willingness to throw away his own code ([[Carmack Lex Fridman 309]]). Lamport throws away his own paper for the same reason: when you learn the artifact is not doing its job, the discipline is to rewrite, not defend.
