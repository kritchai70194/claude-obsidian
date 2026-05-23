---
source_id: dean-stanford-2010
title: "Building Software Systems at Google and Lessons Learned"
author: Jeff Dean
publisher: Stanford EE380 Distinguished Lecture Series
publication_date: 2010-11-10
url: https://web.stanford.edu/class/ee380/Abstracts/101110.html
canonical_pdf: http://research.google.com/people/jeff/Stanford-DL-Nov-2010.pdf
fetch_method: PDF curl + pypdf text extraction (slide deck, 103 slides)
fetch_date: 2026-05-24
fidelity: extracted-from-slides (some structure lost; slide text fragmented; substantive principles captured)
license_note: Public lecture; slides hosted publicly by Google Research. Quoted under fair use.
---

# Source, Dean Stanford Talk 2010 (slide deck)

## Talk Structure (as presented on Plan slide)

- Evolution of various systems at Google: computing hardware, core search systems, infrastructure software
- Techniques for building large-scale systems: decomposition into services, design patterns for performance and reliability

## The 1000x Scaling Framing

Google Web Search 1999 vs 2010:

- Docs: tens of millions to tens of billions
- Queries/day: ~1000x growth
- Per-doc info in index: ~3x growth
- More machines × faster machines: ~1000x
- Update latency: months to tens of seconds
- Average query latency: <1s to <0.2s

This single comparison is the talk's spine: how do you build systems that survive 1000x growth across multiple dimensions simultaneously, while also dropping latency and update times by orders of magnitude?

## Lessons Theme: "Know Your Basic Building Blocks"

From a slide titled exactly "Know Your Basic Building Blocks":

> "Core language libraries, basic data structures, protocol buffers, GFS, BigTable, indexing systems, MapReduce. Not just their interfaces, but understand their implementations (at least at a high level). If you don't know what's going on, you can't do decent back-of-the-envelope calculations!"

Back-of-the-envelope reasoning is presented as the engineer's most-used tool for evaluating designs before building them.

## Lessons Theme: Build Infrastructure for Common Problems

From a slide titled "Designing & Building Infrastructure":

> "Identify common problems, and build software systems to address them in a general way."

> "Important to not try to be all things to all people. Clients might be demanding 8 different things. Doing 6 of them is easy. Handling 7 of them requires real thought. Dealing with all 8 usually results in a worse system: more complex, compromises other clients in trying to satisfy everyone."

The 6/7/8 framing is one of the more useful operating heuristics in the deck. It justifies *deliberately not* solving every problem.

> "Don't build infrastructure just for its own sake: Identify common needs and address them. Don't imagine unlikely potential needs that aren't really there."

This is YAGNI for infrastructure design, but stated by someone who has actually built the infrastructure that runs Google.

## Lessons Theme: MapReduce as Pattern

> "A simple programming model that applies to many large-scale computing problems. Allowed us to express all phases of our indexing system. Hide messy details in MapReduce runtime library: automatic parallelization, load balancing, network and disk transfer optimizations, handling of machine failures, robustness."

The MapReduce story in this talk is told as a *pattern-recognition* story: Dean and Ghemawat noticed many parallel data processing jobs at Google had the same shape, so they extracted the shape into a runtime.

## Lessons Theme: Cache Behavior at Scale

From the caching slide:

> "Queries that hit in cache tend to be both popular and expensive (common words, lots of documents to score, etc.). Beware: big latency spike/capacity drop when index updated or cache flushed."

Concrete operational lesson: cache effects mask design assumptions until the cache invalidates.

## Lessons Theme: Hardware Realities

> "Simple batch indexing system. No real checkpointing, so machine failures painful. No checksumming of raw data, so hardware bit errors caused problems. Exacerbated by early machines having no ECC, no parity. Sort 1 TB of data without parity: ends up 'mostly sorted'. Sort it again: 'mostly sorted' another way."

The hardware reality lesson: at scale, every hardware behavior you take for granted on a single machine becomes a load-bearing assumption you can't take for granted on 10,000 machines.

## Provenance Note

PDF text extraction via pypdf. Slide decks lose visual context (diagrams, layouts) but the textual content is preserved. The original talk has a YouTube video (search "Building Software Systems At Google" Stanford EE380); future ingest of the transcript would add the conversational nuance.
