# Oral History of Butler Lampson — Computer History Museum (2023)

Source: https://archive.computerhistory.org/resources/access/text/2024/11/102808948-05-01-acc.pdf
Interviewer: David C. Brock. Editor: Dag Spicer.
Recorded: December 6, 2023, Cambridge MA, at MIT.
41 pages. CHM Ref: 2023.0211. © 2023 Computer History Museum, licensed to ACM.
Fetched: 2026-05-28 via pypdf extraction.

## Biographical highlights (verbatim and paraphrased)

- Born Dec 23, 1943, Washington DC.
- Spent early childhood overseas (Turkey, Germany) due to father's Foreign Service career.
- Lawrenceville prep school 1956-1960.
- First computing exposure: high-school friend got access to an IBM 650 at Princeton (vacuum-tube, decimal, drum memory). They took the bus to Princeton a few times a week to punch cards. "Not that I ever did anything very interesting on this machine, but, yeah, it seemed very cool at the time."
- Harvard 1960-1964, Physics A.B. magna cum laude.
- At Harvard: first programming via Peter Wegner's Fortran course; then "really came to grips with interactive computing for the first time" on a PDP-1 attached to a spark-chamber experiment under physics professor Lou Hand. The PDP-1 was hands-on. He worked nights. "I had lots of time on the machine. So that was where I did most of my programming."
- Encountered APL via Ken Iverson on sabbatical at Harvard: "APL only existed in the form of a book... Ken was actually strongly opposed to the idea of having an implementation, because he was sure that if somebody implemented it, they would make all kinds of compromises and ruin his beautiful language."
- The APL symbol-table revelation: when Lampson said it would be bad at building a symbol table, Iverson explained how to do it with matrix-vector equality and a row-wise AND. "And this was a revelation to me. As I say, I thought I had understood the idea pretty well. But, in fact, it was clear that I hadn't."

## Self-description

> "I was not very social, and extremely focused on the things that I was interested in."

> "I had terrible handwriting, but I think I excelled at pretty much everything else academic. I've never been very athletic, so I didn't do sports much."

> "I did great at Lawrenceville. It was very bad for me, actually. I got very lazy because I found that the schoolwork was so easy."

## On Harvard / MIT computing in the early 60s

> "Harvard computing was very weird at the time, because of course Harvard had been one of the pioneers in computing. Howard Aiken was there... There was a sizable building actually devoted... called the Aiken Laboratory."

The Mark I and Mark IV relay calculators were still in the building, behind a glass wall, no longer in use. The UNIVAC-I was the central facility. "Harvard was pretty primitive."

His observation on universities:
> "If you look at the universities that were into computing in the earliest days, Harvard, Illinois, UCLA, MIT, only one continued to lead in the field in the '60s. The others all fell by the wayside... the schools that came to the fore in the 60s, like Berkeley and Carnegie Mellon, were all different and had not been involved particularly in computing earlier. The only exception was MIT, which continued to lead."

## On MIT's attitude

Quoting Joel Moses on why MIT did not build campus computing facilities for decades:
> "He said he thought that the MIT administration thought that computing was a flash in the pan."

Lampson's reaction:
> "It's sort of the opposite today. People take it too seriously."

## On the scratch-tape incident

Anecdote: Lampson once shut down the MIT computer center by accidentally rewinding the batch input tape instead of his scratch tape. The job ran repeatedly. He fled the scene. "I certainly wasn't going to admit to having done this. And since there were no accounts, they had no way of easily tracking me down."

## Career stops (from Wikipedia + oral history)

- UC Berkeley (1967-1971): PhD in EECS under Harry Huskey. Director of System Development, Berkeley Computer Corporation (BCC) 1969-1971.
- Xerox PARC (1971-1983): Principal Scientist, then Senior Research Fellow. Co-designed the Alto, Bravo, Mesa, the laser printer, Ethernet, Pilot, Star.
- DEC Systems Research Center (1984-1995): Senior Consulting Engineer. Authentication work (Taos, with Abadi/Burrows/Wobber), AN1/AN2 networks, Modula-3, replicated state machines.
- Microsoft Research (1995-present): Architect, Distinguished Engineer, Technical Fellow.
- MIT (1987-present): Adjunct Professor.

## Major systems / contributions

- SDS 940 Berkeley Timesharing System (1965, with Peter Deutsch).
- **Xerox Alto** (1973): the first PC with GUI, three-button mouse, full-page bitmap display, Ethernet, laser printer attached. Lampson is one of the principal designers (with Thacker and Kay).
- **Bravo** (1974): first WYSIWYG text formatting program. Built by Lampson, Charles Simonyi, and others.
- **Laser printer**: scan-conversion (the Dover printer described in the 1983 Hints paper).
- **Ethernet** (Metcalfe-Boggs-Lampson-Thacker, 1973). Lampson is often listed as a co-inventor.
- **Mesa** (1976) and Pilot OS (1979): system-language and OS for Xerox D-machines.
- **Xerox Star** (1981): first commercial GUI office system.
- Two-phase commit protocols (with Sturgis, 1976 "Reflections on an operating system design").
- Replicated state machines, atomic transactions framing.
- Distributed authentication / Taos (with Abadi, Burrows, Wobber, 1992).
- Euclid programming language (with Popek, Horning, et al).
- BCPL pioneering work via SDS 940.

## Awards (full list)

- Turing Award (1992): "For contributions to personal computing and computer science."
- ACM Software System Award (1984, with Taylor & Thacker): for Alto.
- National Academy of Engineering (1984).
- IEEE Computer Pioneer Award (1996).
- IEEE John von Neumann Medal (2001).
- Charles Stark Draper Prize (2004, with Kay, Taylor, Thacker): for Alto.
- National Academy of Sciences (2005).
- Computer History Museum Fellow (2006).
- IFIP TC11 Kristian Beckman Award (2006): information security.
- National Cyber Security Hall of Fame (2016).
- Foreign Member of the Royal Society (2018).

## The famous quote

Often attributed to Lampson, actually credited by him to David Wheeler in his 1992 Turing Award Lecture:
> "Any problem in computer science can be solved with another level of indirection."

The corollary Lampson appends:
> "...except for the problem of too many levels of indirection."

## Why this matters for the mentor frame

The oral history shows a Lampson who is methodical, self-aware about his focus, dryly funny, and willing to admit when he didn't understand something (the APL revelation). His mentoring style — write down what you know, give other people slogans they can use, name the patterns — matches the persona of the Hints paper. He is the engineer-planner whose discipline is captured in compact named principles.
