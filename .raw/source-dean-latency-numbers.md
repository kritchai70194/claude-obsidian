---
source_id: dean-latency-numbers
title: "Latency Numbers Every Programmer Should Know"
author: Jeff Dean (original numbers); Jonas Boner (gist compilation)
publisher: GitHub Gist (by jboner)
publication_date: 2012 (gist); original numbers refined from Dean's talks ~2009-2012
url: https://gist.github.com/jboner/2841832
fetch_method: WebFetch (table extraction)
fetch_date: 2026-05-24
fidelity: table-verbatim
license_note: Public engineering reference. Widely reproduced.
---

# Source — Dean's Latency Numbers Every Programmer Should Know

## Latency Comparison Numbers (~2012)

| Operation | Nanoseconds | Microseconds | Milliseconds | Notes |
|-----------|------------:|-------------:|-------------:|-------|
| L1 cache reference | 0.5 | | | |
| Branch mispredict | 5 | | | |
| L2 cache reference | 7 | | | 14x L1 |
| Mutex lock/unlock | 25 | | | |
| Main memory reference | 100 | | | 20x L2, 200x L1 |
| Compress 1K bytes (Zippy) | 3,000 | 3 | | |
| Send 1K bytes over 1 Gbps | 10,000 | 10 | | |
| Read 4K randomly from SSD | 150,000 | 150 | | ~1 GB/s SSD |
| Read 1 MB sequentially from memory | 250,000 | 250 | | |
| Round trip within same datacenter | 500,000 | 500 | | |
| Read 1 MB sequentially from SSD | 1,000,000 | 1,000 | 1 | 4x memory |
| Disk seek | 10,000,000 | 10,000 | 10 | 20x datacenter RTT |
| Read 1 MB sequentially from disk | 20,000,000 | 20,000 | 20 | 80x memory, 20x SSD |
| Send packet CA → Netherlands → CA | 150,000,000 | 150,000 | 150 | |

Conversions:
- 1 ns = 10⁻⁹ s
- 1 µs = 10⁻⁶ s = 1,000 ns
- 1 ms = 10⁻³ s = 1,000 µs = 1,000,000 ns

## Attribution

Numbers credited to Jeff Dean (Google), derived in part from Peter Norvig's earlier work on programming estimation. Boner's gist is the most-shared canonical compilation.

## What This Table Encodes

The table makes order-of-magnitude reasoning concrete: an L1 cache hit is ~200× faster than a main-memory read; main memory is ~5,000× faster than a same-datacenter network round trip; that round trip is itself ~300× faster than an intercontinental round trip. A senior engineer internalizes these ratios so that architectural intuition matches physical reality.

---

## Provenance Note

Numbers approximate as of ~2012. Modern hardware has shifted some entries (SSDs faster, network RTTs to some clouds lower), but the order-of-magnitude relationships hold.
