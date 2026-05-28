# Hints for Computer System Design (Lampson 1983)

Source: https://www.microsoft.com/en-us/research/wp-content/uploads/1983/10/Hints-for-Computer-System-Design-SOSP-version.pdf
Also: ACM SIGOPS Operating Systems Review, Vol 15, No 5, October 1983, pp 33-48. Reprinted IEEE Software 1, 1 (Jan 1984), pp 11-28.
Fetched: 2026-05-28 via WebFetch + pypdf extraction
Author: Butler W. Lampson, Xerox Palo Alto Research Center

## Structure (from Figure 1)

Axes:
- Why: Functionality (does it work?), Speed (is it fast enough?), Fault-tolerance (does it keep working?)
- Where: Completeness, Interface, Implementation

## Hints, verbatim slogans

### Functionality

- "Do one thing at a time, and do it well. An interface should capture the minimum essentials of an abstraction."
- "Don't generalize; generalizations are generally wrong."
- "If in doubt, leave it out." (Anonymous)
- "Exterminate features." (C. Thacker)
- "KISS: Keep It Simple, Stupid."
- "Everything should be made as simple as possible, but no simpler." (Einstein)
- "Get it right. Neither abstraction nor simplicity is a substitute for getting it right."
- "Make it fast, rather than general or powerful. If it's fast, the client can program the function it wants."
- "Don't hide power. When a low level of abstraction allows something to be done quickly, higher levels should not bury this power inside something more general."
- "Use procedure arguments to provide flexibility in an interface."
- "Leave it to the client. As long as it is cheap to pass control back and forth, an interface can combine simplicity, flexibility and high performance together by solving only one problem and leaving the rest to the client."
- "Keep basic interfaces stable."
- "Keep a place to stand, if you do have to change interfaces."
- "Plan to throw one away; you will anyhow."
- "Keep secrets of the implementation. Secrets are assumptions about an implementation that client programs are not allowed to make."
- "Divide and conquer."
- "Use a good idea again, instead of generalizing it."
- "Handle normal and worst case separately as a rule, because the requirements for the two are quite different: the normal case must be fast; the worst case must make some progress."

### Speed

- "Split resources in a fixed way if in doubt, rather than sharing them. It is usually faster to allocate dedicated resources."
- "Use static analysis if you can."
- "Dynamic translation from a convenient representation to one which can be quickly interpreted."
- "Cache answers to expensive computations, rather than doing them over."
- "Use hints to speed up normal execution. A hint, like a cache entry, is the saved result of some computation. It is different in two ways: it may be wrong, and it is not necessarily reached by an associative lookup. Because a hint may be wrong, there must be a way to check its correctness before taking any unrecoverable action."
- "When in doubt, use brute force."
- "Compute in background when possible."
- "Use batch processing if possible."
- "Safety first. In allocating resources, strive to avoid disaster, rather than to attain an optimum."
- "Shed load to control demand, rather than allowing the system to become overloaded."

### Fault-tolerance

- "End-to-end error recovery is absolutely necessary for a reliable system, and any other error detection or recovery is not logically necessary, but is strictly for performance. This observation is due to Saltzer."
- "Log updates to record the truth about the state of an object."
- "Make actions atomic or restartable. An atomic action (often called a transaction) is one which either completes or has no effect."

## Key supporting claims (verbatim)

Opening:
> "Designing a computer system is very different from designing an algorithm: The external interface (i.e., the requirement) is more complex, less precisely defined, and more subject to change. The system has much more internal structure, and hence many internal interfaces. The measure of success is much less clear."

> "The designer usually finds himself floundering in a sea of possibilities, unclear about how one choice will limit his freedom to make other choices, or affect the size and performance of the entire system. There probably isn't a best way to build the system, or even any major part of it; much more important is to avoid choosing a terrible way, and to have clear division of responsibilities among the parts."

On hints (the slogan that defines the paper):
> "These are not novel (with a few exceptions), foolproof recipes, laws of system design or operation, precisely formulated, consistent, always appropriate, approved by all the leading experts, or guaranteed to work; they are just hints."

On interfaces (defining the foundational concept):
> "The interface between two programs consists of the set of assumptions that each programmer needs to make about the other program in order to demonstrate the correctness of his program (paraphrased from Britton et al)."

> "Defining interfaces is the most important part of system design. Usually it is also the most difficult, since the interface design must satisfy three conflicting requirements: an interface should be simple, it should be complete, and it should admit a sufficiently small and fast implementation."

On interface as small language:
> "The main reason that interfaces are difficult to design is that each interface is a small programming language: it defines a set of objects, and the operations that can be used to manipulate the objects."

On power and interfaces:
> "The purpose of abstractions is to conceal undesirable properties; desirable ones should not be hidden."

On hints vs caches:
> "A hint, like a cache entry, is the saved result of some computation. It is different in two ways: it may be wrong, and it is not necessarily reached by an associative lookup. Because a hint may be wrong, there must be a way to check its correctness before taking any unrecoverable action."

On Saltzer's end-to-end:
> "End-to-end error recovery is absolutely necessary for a reliable system, and any other error detection or recovery is not logically necessary, but is strictly for performance."

On shedding load:
> "Shed load to control demand, rather than allowing the system to become overloaded. There are many ways to shed load. An interactive system can refuse new users, or if necessary deny service to existing ones. A memory manager can limit the jobs being served so that their total working sets are less than the available memory. A network can discard packets. If it comes to the worst, the system can crash and start over, hopefully with greater prudence."

On atomic actions:
> "An atomic action (often called a transaction) is one which either completes or has no effect. The advantages of atomic actions for fault-tolerance are obvious: if a failure occurs during the action, it has no effect, so that in recovering from a failure it is not necessary to deal with any of the intermediate states of the action."

On separating cases:
> "Handle normal and worst case separately as a rule, because the requirements for the two are quite different: the normal case must be fast; the worst case must make some progress."

Conclusion:
> "Such a collection of good advice and anecdotes is rather tiresome to read; perhaps it is best taken in small doses at bedtime. In extenuation I can only plead that I have ignored most of these rules at least once, and nearly always regretted it."

## Examples cited (named systems Lampson worked on)

- Alto (personal computer, PARC)
- Dorado (high-performance personal computer)
- Bravo (WYSIWYG editor, the piece-table example for normal/worst case)
- Star (Xerox office system)
- Ethernet (Metcalfe-Boggs)
- Pilot (operating system)
- SDS 940 (Berkeley timesharing)
- Mesa (programming language)
- Grapevine (replicated mail/registration, eventual consistency before the name existed)
- Dover printer (raster printing, divide and conquer with band buffers)
- Pup internet (best-efforts packet delivery)
- Cedar / Interlisp-D

## Cited authors / debts

- Brooks ("Plan to throw one away")
- Saltzer (end-to-end argument)
- Parnas (interface and information hiding)
- Hoare ("The unavoidable price of reliability is simplicity"; "Algol 60 was not only an improvement on its predecessors, but also on nearly all its successors")
- Dijkstra ("An efficient program is an exercise in logical brinkmanship")
- Britton et al (interface as set of assumptions)
- Bob Morris (the "large red button" idea for shed load)

Decorated with quotations from Hamlet (Polonius' advice to Laertes, I iii 57-82).
