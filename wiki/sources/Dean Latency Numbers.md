---
type: source
title: Dean Latency Numbers
author: Jeff Dean (numbers); Jonas Boner (compilation)
publication_year: 2012
url: 'https://gist.github.com/jboner/2841832'
raw_file: .raw/source-dean-latency-numbers.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-24T00:00:00.000Z'
tags:
  - source
  - distributed-systems
  - performance
  - latency
  - engineering
status: mature
related:
  - '[[Jeff Dean]]'
  - '[[Werner Vogels]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
---

# Dean — Latency Numbers Every Programmer Should Know

The most-cited single table in distributed systems engineering. Originated by [[Jeff Dean]] at Google (refined across multiple talks ~2009-2012) and preserved in canonical form as a public gist by Jonas Boner in 2012.

## Provenance

- **Originator:** [[Jeff Dean]] (numbers, derived in part from Peter Norvig's earlier programming-estimation work)
- **Canonical compilation:** Jonas Boner, GitHub Gist (2012)
- **URL:** https://gist.github.com/jboner/2841832
- **Raw extract:** [`.raw/source-dean-latency-numbers.md`](../../.raw/source-dean-latency-numbers.md)
- **Fidelity:** Table verbatim.

## Headline Takeaway

Latency in computer systems spans 9 orders of magnitude — from sub-nanosecond cache hits to ~150 ms intercontinental round trips. Senior engineers internalize the *ratios* between these regimes; that's the difference between architectural intuition that matches physical reality and intuition that doesn't.

## The Table (~2012)

| Operation | Nanoseconds | µs | ms | Notes |
|-----------|------------:|----:|----:|-------|
| L1 cache reference | 0.5 | | | |
| Branch mispredict | 5 | | | |
| L2 cache reference | 7 | | | 14× L1 |
| Mutex lock/unlock | 25 | | | |
| Main memory reference | 100 | | | 20× L2, 200× L1 |
| Compress 1K bytes (Zippy) | 3,000 | 3 | | |
| Send 1K bytes over 1 Gbps | 10,000 | 10 | | |
| Read 4K randomly from SSD | 150,000 | 150 | | ~1 GB/s SSD |
| Read 1 MB sequentially from memory | 250,000 | 250 | | |
| Round trip within same datacenter | 500,000 | 500 | | |
| Read 1 MB sequentially from SSD | 1,000,000 | 1,000 | 1 | 4× memory |
| Disk seek | 10,000,000 | 10,000 | 10 | 20× datacenter RTT |
| Read 1 MB sequentially from disk | 20,000,000 | 20,000 | 20 | 80× memory, 20× SSD |
| Send packet CA → Netherlands → CA | 150,000,000 | 150,000 | 150 | |

## Key Ratios Worth Memorizing

- L1 cache → main memory: **200×**
- Main memory → same-datacenter network: **5,000×**
- Same datacenter → intercontinental: **~300×**
- L1 cache → intercontinental: **~3 × 10⁸ ×** (9 orders of magnitude)

## What This Brain Takes From It

- **Order of magnitude thinking** — the canonical concrete instance. Reasoning about systems without these ratios is reasoning blind.
- **Everything fails. Design for it.** The latency table is implicitly a *budget* table: every component contributes to a deadline, and architecture is the art of fitting the work into the budget.
- **First principles over analogies** — Dean's contribution wasn't a methodology paper. It was numbers. The numbers are what generate intuition; the analogies of "fast / slow" don't.

## A 2026 Caveat

The numbers were a 2012 snapshot. Modern hardware shifts some entries (SSDs faster, some intra-cloud round trips lower). But the order-of-magnitude *relationships* hold: L1 is still 100-200× faster than DRAM, DRAM is still 1000s× faster than the network, datacenter round trips are still 100s× faster than intercontinental. The lesson is the ratios, not the absolute values.

## Cross-References

- [[Jeff Dean]] — originator
- [[Werner Vogels]] — engineering peer; many AWS principles encode the same reality
- [[Operating Principles]] — order of magnitude thinking, design for failure
- [[Persona]]

## Status

**Mature.** The full Stanford talk and other Dean material remain queued in [[seed-corpus-technical-ceo]].
