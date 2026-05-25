---
source_id: lamport-tlaplus-course-intro
title: "The TLA+ Video Course (Introductory Lectures)"
author: Leslie Lamport
publication: lamport.azurewebsites.net/video
publication_date: 2018 (initial), ongoing updates
url: https://lamport.azurewebsites.net/video/videos.html
canonical_book: https://lamport.azurewebsites.net/tla/book.html (Specifying Systems)
fetch_method: WebFetch + cross-reference from Lamport's TLA+ learning page and biographical material
fetch_date: 2026-05-26
fidelity: structural-summary (video course content not directly transcribed; structure verified; pedagogical voice inferred from Lamport's own framing of why he made it)
license_note: Free educational content. Hosted by Lamport, supported by Microsoft. Reference under fair use.
---

# Source, Lamport TLA+ Video Course (Intro Lectures)

## What This Is

Lamport's own video lecture series on TLA+ and PlusCal, designed for working programmers. He created it after publishing the Hyperbook (a hypertext textbook) and noticing that "people don't read anymore". The video course is his pragmatic response to the cultural barrier the book did not cross.

The introductory lectures (the first 3-5 lectures, depending on which course path) cover the why and when of formal specification, before any TLA+ syntax. This is the part of the course that matters most for engineer-planner thinking. The later lectures cover the TLA+ language itself, which serves the methodology.

## Lamport's Framing of Why He Made It

> "The Hyperbook is unfinished because people don't read anymore and I made the video course."

Honest pragmatic observation. The discipline of specification is so valuable that he is willing to teach it in any medium that gets the message across. The medium is incidental; the message is the thing.

## The Pedagogical Voice

The course is taught by Lamport himself, with the patience of someone who has explained Paxos a thousand times and noticed which steps confuse people. The teaching style:

- Starts from the problem (what goes wrong without specs), not the syntax
- Uses concrete distributed counter examples before abstract theory
- Acknowledges the math objection early and addresses it directly
- Builds up TLA+ syntax slowly, one concept per lecture
- Repeats key points across lectures with different examples

Compared to most programming language tutorials, this is slower and more deliberate. The slowness is the point: the discipline being taught is precisely the discipline of not rushing past the conceptual scaffolding.

## Why TLA+ Specifically

Lamport's framing in the introductory lectures: TLA+ is a means, not an end. The end is precise thinking about concurrent and distributed systems. TLA+ is the notation he found that makes the thinking possible. Other notations might work; this is the one he validated through decades of use.

The argument for TLA+ over (say) LaTeX-style math notation is that TLA+ is mechanically checkable. You write a spec, the model checker tells you whether your spec is consistent. The math notation does not give you that feedback loop.

## Concrete Examples Used in Intro

The intro lectures typically use:

- A distributed counter (two processes incrementing a shared counter, what consistency guarantees do you get)
- The dining philosophers problem (the canonical small-spec example)
- A two-phase commit (the small spec that surfaces deep questions about failure handling)

The pattern: pick a small system whose spec fits on a slide, write the spec, observe what the spec forces you to confront. The forced confrontations are the lesson.

## What This Source Teaches

- TLA+ is a notation that makes thinking possible. The notation is incidental; the thinking is the point.
- The introductory lectures show the discipline before introducing the syntax.
- Mechanical checking of specs is the feedback loop that turns specification from documentation into thinking.
- Small specs (counter, commit protocol) surface deep questions you would not have noticed without writing them down.
- Lamport's teaching style is itself an artifact of the discipline: slow, deliberate, with the patience of someone who has done this many times.

## Connection to Carmack

Where Carmack's `.plan` archive ([[Carmack Plan Archive 1998]]) shows informal specification in prose, the TLA+ course shows formal specification with mechanical checking. Both have the same shape: write your engineering decision down with reasoning, in a form that someone (or something) can verify. Carmack's verifier is the public reading his `.plan`; Lamport's verifier is the TLC model checker. The discipline is the same; the medium and the rigor differ.
