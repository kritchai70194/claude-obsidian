# Principles for Computer System Design — Turing Award Lecture (Lampson 1992/1993)

Source: ACM Turing Award lecture, delivered 1992, published Feb 1993.
URL: https://dl.acm.org/doi/10.1145/1283920.2159562
Lampson's slide page: http://www.bwlampson.site/Slides/TuringLectureAbstract.htm
Fetched: 2026-05-28

## Citation (1992 Turing Award)

"For contributions to personal computing and computer science."

## Abstract / framing claim (verbatim from Lampson's slide page)

> "We have learned depressingly little in the last ten years about how to build computer systems. But we have learned something about how to do the job more precisely, by writing more precise specifications, and by showing more precisely that an implementation meets its specification."

## Two worked examples

The lecture is structured as two extended worked-through examples that demonstrate the principles in action:

1. **Connection establishment** — sending a reliable message over an unreliable network.
2. **Transactions** — making a large atomic action out of a sequence of small ones.

The point is methodological: principles are not slogans, they are tools you apply to concrete problems with concrete specs.

## The famous attribution

Lampson is widely credited with the maxim:

> "Any problem in computer science can be solved with another level of indirection."

He explicitly credits David Wheeler for originating this in the Turing Award Lecture. The corollary, often added by Lampson:

> "...except for the problem of too many levels of indirection."

## The core thesis

The lecture extends the 1983 Hints paper by formalizing the spec-vs-implementation gap:
- A spec says what the system does, in a language clients can reason about.
- An implementation does it, and may use very different machinery internally.
- Showing the implementation meets the spec is the engineering work.

This methodological insistence on writing specs (and showing implementations meet them) is the bridge from Lampson to Lamport: Lampson articulates it as engineering hygiene; Lamport (TLA+) builds the formal machinery.

## Connection to 1983 Hints

The Hints paper gave slogans (Keep it simple, Make it fast, Use hints, Shed load, etc.). The Turing lecture says: the slogans are right, but the deeper move is to write down what the system should do (the spec) and then show the code achieves it.

The 2020 Hints and Principles paper makes the principle explicit:
> "Have a spec. Get it right."

## Lampson's career as context for the lecture

When delivering this in 1992, Lampson had:
- Built the Berkeley Timesharing System (SDS 940, with Deutsch)
- Designed the Alto at PARC (first PC with GUI)
- Designed Bravo (first WYSIWYG editor)
- Co-developed Ethernet with Metcalfe and Boggs
- Designed the laser printer
- Co-designed Mesa and Pilot
- Worked on Star, the first commercial GUI office system

The award was for these contributions; the lecture was him telling the next generation what he had learned doing them.

## Note on access

The full text is behind ACM DL paywall. The slides page (bwlampson.site) gives the abstract and structure but not the full body. Pulling more would require ACM subscription. The summary in this raw file is based on the abstract page, the 1983 paper (which the lecture extends), and the 2020 paper (which references it).
