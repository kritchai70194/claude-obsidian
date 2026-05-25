---
source_id: carmack-inlined-code
title: "John Carmack on Inlined Code"
author: John Carmack
publication_date: 2007-09-09
original_publication: Email to id Software team, later published with permission
url: http://number-none.com/blow/john_carmack_on_inlined_code.html
mirror_urls:
  - https://cbarrete.com/carmack.html
  - https://pwn.ersh.io/notes/john_carmack__inlining_code/
fetch_method: WebFetch from mirror sites (original site unreachable on fetch attempt)
fetch_date: 2026-05-26
fidelity: extracts (key quotes preserved verbatim from mirror sources; full text not retrieved)
license_note: Original email by Carmack, published publicly with his permission by Jonathan Blow at number-none.com. Quoted under fair use.
---

# Source, Carmack "On Inlined Code" (2007)

## Origin

A 2007 email Carmack sent to id Software programmers about a specific style question (inlining vs extracting functions), later published with his permission. The essay extends into broader points about coding judgment, state mutation, and functional programming.

## Opening Context, Armadillo Aerospace

Carmack opens by referencing concrete work, not an abstract argument:

> "The flight control code for the Armadillo rockets is only a few thousand lines of code, so I took the main tic function and started inlining all the subroutines."

The point: this was a deliberate experiment in inlining at scale on safety-critical code.

The result of the experiment:

> "I did find several variables that were set multiple times, a couple control flow things that looked a bit dodgy, and the final code got smaller and cleaner."

The act of inlining revealed bugs the function decomposition had hidden.

## The Three Styles

Carmack presents three organizational choices:

- **Style A**, minor functions defined separately, called as needed
- **Style B**, minor functions defined after the major function (in the same file)
- **Style C**, code inlined into the major function with comments to delimit sections

He argues C has "definite advantages" in many contexts.

## Awareness of What Actually Runs

> "Awareness of all the code that is actually executing is important, and it is too easy to have very large blocks of code that you just always skip over while debugging."

This is the deep point. Function extraction hides flow. When you can't see the code, you can't reason about it.

## The Order-of-Execution Argument

> "If something is going to be done once per frame, there is some value to having it happen in the outermost part of the frame loop, rather than buried deep inside some chain of functions."

> "If everything is just run out in a 2000 line function, it is obvious which part happens first, and you can be quite sure that the later section will get executed before the frame is rendered."

A function decomposition makes execution order obscure. Sequential code makes it explicit.

## The Partial-Call Bug Pattern

> "There might be a `FullUpdate()` function that calls `PartialUpdateA()`, and `PartialUpdateB()`, but in some particular case you may realize (or think) that you only need to do `PartialUpdateB()`."

The result: a subset of the actual required work runs, the system is in a partial state, and the bug is invisible because the call site looks correct.

## Carmack's Core Recommendations

Distilled list (paraphrased from the essay):

- Inline single-call functions.
- For multi-call functions, arrange the work to execute once with flags or parameters, then inline.
- Consolidate multiple variants into a single function with parameters, then inline if practical.
- Use `const` aggressively.
- Favor consistent execution paths over conditional optimization.

## Function Size Rules, Rejected

> "I now specifically disagree" (regarding rules limiting function size to a page or two).

Carmack rejects mechanical rules in favor of contextual judgment. A 2000-line function is fine when the sequence of operations needs to be visible. A 50-line function is fine when the operation is genuinely reusable. The rule is the wrong unit.

## The Copy-Paste-Modify Bug Pattern

Carmack examines his own bug history and finds:

> Copy-paste-modify operations resulted in subtle bugs more often than any other pattern.

His response is counterintuitive:

> "I now strongly encourage explicit loops for everything, and hope the compiler unrolls it properly."

Manual unrolling of vector operations was a frequent error source. Loop the operation; trust the compiler.

## Style Block Formatting

> "Using large comment blocks inside the major function to delimit the minor functions is a good idea for quick scanning, and often enclosing it in a bare braced section to scope the local variables and allow editor collapsing of the section is useful."

Practical mechanics for keeping a long function readable.

## The Real Enemy

> "The real enemy addressed by inlining is unexpected dependency and mutation of state, which functional programming solves more directly."

> "Most bugs are a result of the execution state not being exactly what you think it is."

The point of inlining is not aesthetic. It is to make state mutation visible.

## Functional Programming Connection

> "Strictly functional functions that only read their input arguments and just return a value without examining or modifying any permanent state are safe from these types of errors."

But pragmatically:

> "I don't think that purely functional programming writ large is a pragmatic development plan, because it makes for very obscure code and spectacular inefficiencies."

This is 2007 Carmack. A 2014 addendum (also published with his permission) shows him much more bullish on functional programming after deeper exposure.

## What This Source Teaches

- Code style decisions should be context-dependent, not rule-driven.
- The deep enemy is state mutation, and visibility into where it happens.
- Programmer judgment, formed by tracking your own bugs, beats received best practices.
- The best style is the one that makes the bugs visible when they happen.
