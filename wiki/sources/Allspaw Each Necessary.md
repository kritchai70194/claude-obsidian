---
type: source
title: Allspaw Each Necessary
address: c-000251
author: John Allspaw
publication_year: 2012
url: https://www.kitchensoap.com/2012/02/10/each-necessary-but-only-jointly-sufficient/
raw_file: .raw/articles/allspaw-each-necessary-2026-05-27.md
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - resilience-engineering
  - incident-analysis
  - allspaw
  - cognitive-systems-engineering
status: mature
related:
  - "[[John Allspaw]]"
  - "[[Allspaw Infinite Hows]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
  - "[[seed-corpus-engineer-planners]]"
---

# Allspaw "Each Necessary, But Only Jointly Sufficient" (2012)

[[John Allspaw]]'s February 2012 post on kitchensoap.com. The myth-busting essay against root cause. Imported the Hollnagel / Cook framing of accident causation into the Web Operations and DevOps community.

## Provenance

- Author: [[John Allspaw]]
- Year: 2012 (February 10)
- URL: https://www.kitchensoap.com/2012/02/10/each-necessary-but-only-jointly-sufficient/
- Raw extract: [`.raw/articles/allspaw-each-necessary-2026-05-27.md`](../../.raw/articles/allspaw-each-necessary-2026-05-27.md)
- Fidelity: extracts (WebFetch summary), key quotes verbatim

## Headline Takeaway

For complex sociotechnical systems there is no single root cause. The cultural pressure to find one (engineers' preference for reductionism, management demand for a single quick answer, hindsight bias making causes look simpler than they were) systematically produces incident analyses that fail to capture how the system actually failed.

## Key Quotes

### The Myth Bust

> "for complex socio-technical systems (web engineering and operations) there is a myth that deserves to be busted...there is no root cause."

### The Hollnagel Framing (Endorsed)

> "Accidents emerge from a confluence of conditions...each necessary but only jointly sufficient...able to trigger failure."

### Critique of the Five Whys

The Five Whys method "assumes each presenting symptom has only one sufficient cause." That assumption fails to capture jointly sufficient causes, validates hindsight bias, and ignores system interconnectedness.

## What This Brain Takes From It

- **No root cause.** Real outages are produced by multiple conditions, each necessary, only jointly sufficient. The investigation has to enumerate them, not collapse them.
- **The Five Whys is structurally inadequate** for sociotechnical complexity. It enforces a single-chain causal narrative that the actual system doesn't have.
- **Hindsight bias is the systematic enemy** of incident review. The investigator knows what happened; the people in the system at the time did not. Treating their decisions as obviously wrong because of the outcome is the failure mode.
- **Organizational pressures bend analyses toward oversimplification.** Management wants a single fix; engineers want to be done with the uncomfortable conversation; hindsight makes the simple causal chain look right. The investigator's job is to resist all three.

This source upgrades the brain's "Everything fails. Design for it" principle to "Everything fails through confluences of conditions, and the investigation has to capture all of them."

## Cross-References

- [[John Allspaw]] entity
- [[Allspaw Infinite Hows]] (2014, the constructive companion: ask How not Why)
- [[Operating Principles]], Engineering Disposition section
- [[Persona]]
- [[seed-corpus-engineer-planners]]

## Status

Mature for the cited claims. The two key citations (no-root-cause and the Hollnagel framing) are verbatim. Deeper material on the lineage (Cook, Woods, Dekker, Leveson) is queued for future ingest via "How Complex Systems Fail" and Dekker's books.
