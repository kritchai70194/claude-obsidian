---
type: source
title: Bezos 2002 API Mandate
author: Jeff Bezos (memo); Steve Yegge (public account)
publication_year: 2002
url: 'https://gist.github.com/chitchcock/1281611'
raw_file: .raw/source-bezos-2002-api-mandate.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - source
  - api-design
  - amazon
  - service-oriented-architecture
  - mechanism
status: mature
related:
  - '[[Jeff Bezos]]'
  - '[[Werner Vogels]]'
  - '[[Bezos 1997 Letter]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Bezos 2002 API Mandate

The five-point internal directive [[Jeff Bezos]] issued at Amazon ~2002, requiring every team to expose all data and functionality through service interfaces designed to be externalizable. The architectural decision that, played out over the next several years, produced AWS.

The mandate has no certified primary document. It is known publicly through [Steve Yegge's 2011 leaked Google+ rant](https://gist.github.com/chitchcock/1281611), where Yegge quoted what he remembered of it, having heard about it from ex-Amazonians at Google.

## Provenance

- **Originator:** [[Jeff Bezos]] (~2002 internal memo)
- **Public source:** Steve Yegge's 2011 Google+ post (preserved as GitHub gist)
- **URL:** https://gist.github.com/chitchcock/1281611
- **Raw extract:** [`.raw/source-bezos-2002-api-mandate.md`](../../.raw/source-bezos-2002-api-mandate.md)
- **Fidelity:** Secondary source. The five-point structure is consistent across multiple independent accounts; exact wording is Yegge's reconstruction.

## Headline Takeaway

A single architectural directive, enforced with a firing threat, that decoupled every team's work behind a service interface. The constraint "externalizable from day one" was the part that mattered — it meant when AWS launched in 2006, Amazon had already done four years of practice building reusable services for themselves.

## Key Extracts — the Five Points (as quoted by Yegge)

1. > "All teams will henceforth expose their data and functionality through service interfaces."
2. > "Teams must communicate with each other through these interfaces."
3. > "There will be no other form of interprocess communication allowed: no direct linking, no direct reads of another team's data store, no shared-memory model, no back-doors whatsoever."
4. > "It doesn't matter what technology they use. HTTP, Corba, Pubsub, custom protocols — doesn't matter."
5. > "All service interfaces, without exception, must be designed from the ground up to be externalizable."

Enforcement:

> "Anyone who doesn't do this will be fired."

## What This Brain Takes From It

- **APIs are forever** — the single most influential operational instance of this principle in modern computing. The decision in 2002 about interface design constrained Amazon's engineering through 2026 and beyond.
- **Mechanism over goodwill** — Bezos didn't ask for cooperation. He defined a mechanism (service interfaces) and a forcing function (you will be fired). The architecture didn't depend on culture; the culture was downstream of the architecture.
- **Long-horizon over local maxima** — externalizing from day one was strictly more expensive than the cheap internal coupling that would have shipped products faster in 2002. The expensive choice in 2002 unlocked AWS in 2006.
- **Two-way / one-way doors** — this was a one-way door. Bezos treated it accordingly: a single directive, deliberated carefully, executed irreversibly.

## A Caveat on Sourcing

Treat the wording as Yegge's reconstruction. The shape of the decision is well-attested across many sources (including [[Werner Vogels]]' subsequent writing), but no certified copy of the 2002 memo has been published. When citing the principle, lean on the structure (five points + externalizable + enforcement), not on the exact phrasing.

## Cross-References

- [[Jeff Bezos]] — originator
- [[Werner Vogels]] — CTO who oversaw the resulting service-oriented architecture
- [[Bezos 1997 Letter]] — the long-horizon mindset that made this possible
- [[Operating Principles]] — "APIs are forever", "mechanism over goodwill" cite here
- [[Persona]]

## Status

**Mature for the canonical 5-point summary.** A more complete history of the mandate's rollout would require ingesting [[Werner Vogels]]'s retrospective material (queued in [[seed-corpus-technical-ceo]]).
