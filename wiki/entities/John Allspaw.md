---
type: entity
title: John Allspaw
entity_type: person
role: Co-founder Adaptive Capacity Labs. Former CTO Etsy. Master's Human Factors and System Safety from Lund. Pillar of resilience engineering and DevOps community.
address: c-000250
first_mentioned: "[[Allspaw Each Necessary]]"
created: 2026-05-27
updated: 2026-05-27
tags:
  - entity
  - person
  - engineer
  - mentor
  - engineer-planner
  - resilience-engineering
  - cognitive-systems-engineering
  - devops
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-engineer-planners]]"
  - "[[John Carmack]]"
  - "[[Leslie Lamport]]"
  - "[[Bezos 2017 Letter]]"
  - "[[Allspaw Each Necessary]]"
  - "[[Allspaw Infinite Hows]]"
  - "[[Allspaw Trade-Offs Under Pressure]]"
  - "[[Cook Stella Report]]"
  - "[[Cook How Complex Systems Fail]]"
  - "[[Richard Cook]]"
  - "[[entities/_index]]"
sources:
  - "[[Allspaw Each Necessary]]"
  - "[[Allspaw Infinite Hows]]"
  - "[[Allspaw Trade-Offs Under Pressure]]"
  - "[[Cook Stella Report]]"
adjacent_sources:
  - "[[Cook How Complex Systems Fail]]"
---

# John Allspaw

Co-founder of Adaptive Capacity Labs (consultancy on incident analysis and resilience engineering). Former CTO at Etsy (2010-2016), where he led engineering through the IPO and codified the blameless postmortem discipline that became canonical across the Web Operations and DevOps community. Master's degree in Human Factors and System Safety from Lund University under Sidney Dekker. Author of *Web Operations: Keeping the Data on Time* (O'Reilly, 2010) and co-author of *The Art of Capacity Planning* (O'Reilly, 2008, 2nd ed. 2017). Co-organizer of the SNAFU Catchers consortium.

Third anchor on the **engineer-planner pole** of this brain's [[Persona]]. Where [[John Carmack]] supplies the pragmatic individual-engineer-at-the-frontier frame and [[Leslie Lamport]] supplies the specify-before-you-implement frame, Allspaw supplies the **sociotechnical systems** frame: how teams reason about failure, why "root cause" is the wrong question, and how the discipline of incident review is the substrate of learning at scale.

---

## Why This Mentor

Most engineering wisdom is about how to write or design code well. Allspaw's body of work is about something earlier and rarer: how the human-plus-software system actually fails, and what an engineering organization has to do to learn from it. He imported the Cognitive Systems Engineering and Resilience Engineering tradition (Hollnagel, Cook, Woods, Dekker, Leveson) into Web Operations at exactly the moment when continuous deployment was making incidents into first-class engineering events.

The Etsy "Blameless PostMortems and a Just Culture" post (2012) is the canonical artifact: when this brain reaches for the principle that **postmortems are learning instruments, not blame assignments**, the citation is Allspaw. The "Infinite Hows" critique of the Five Whys (2014) is the canonical artifact for the principle that **'why' questions linguistically bias toward blame; 'how' questions bias toward local rationality and second stories**.

For an operator running a real production system, the Allspaw frames are non-negotiable in a way that few other engineering-pole frames are. You can ship without Carmack-style architectural planning, you can build without Lamport-style formal spec, but you cannot operate at scale without an answer to "what do we do after an incident."

Frames here: incidents emerge from confluences of contributing causes, not single roots; hindsight is the systematic enemy of learning; blame and learning are mutually exclusive; the engineer who broke production had local rationality at the moment of action; the new view of human error.

---

## Primary-Source Citations

### From [[Allspaw Each Necessary]] (2012, kitchensoap.com)

The bust-the-myth essay against "root cause":

> "for complex socio-technical systems (web engineering and operations) there is a myth that deserves to be busted...there is no root cause."

The Hollnagel framing he endorses:

> "Accidents emerge from a confluence of conditions...each necessary but only jointly sufficient...able to trigger failure."

The Five Whys is structurally wrong because it "assumes each presenting symptom has only one sufficient cause" and validates hindsight bias.

### From [[Allspaw Infinite Hows]] (2014, kitchensoap.com)

The replacement for the Five Whys: **ask How, not Why.** Why-questions linguistically bias toward identifying who. How-questions generate operational narratives describing the conditions a person was actually responding to.

Prompts to gather:

- Cues observed at critical moments
- Knowledge and experience applied
- Expectations about how events would develop
- Influences shaping interpretation and action
- Communication patterns used
- Goals and time pressures involved

The frame this reveals is **local rationality**: how it made sense for someone to do what they did at the time, given what they knew and were under.

The conceptual lineage:
- **First stories** identify human error as the cause.
- **Second stories** reveal the systemic vulnerabilities that made the human action consequential.
- Allspaw cites Sidney Dekker, Nancy Leveson, Todd Conklin to argue that complexity demands moving beyond Newtonian-Cartesian reductionism.
- **Human error is "a starting point, not a conclusion."**

---

## Core Frames (now backed by citations)

- **No root cause in complex sociotechnical systems.** ([[Allspaw Each Necessary]]) Failures emerge from multiple contributing factors, each necessary but only jointly sufficient.
- **The Five Whys is structurally wrong.** ([[Allspaw Each Necessary]], [[Allspaw Infinite Hows]]) It assumes single sufficient causes and validates hindsight bias.
- **Ask How, not Why.** ([[Allspaw Infinite Hows]]) Why-questions bias toward blame; how-questions surface local rationality and operational context.
- **Local rationality is the investigator's frame.** ([[Allspaw Infinite Hows]]) People do what makes sense given what they know and the pressures they are under. The investigator's job is to reconstruct that local rationality, not to second-guess it from the outside.
- **Second stories beat first stories.** ([[Allspaw Infinite Hows]]) First story = "human error caused the outage." Second story = "the conditions that made the human action consequential." Only the second story produces learning.
- **Human error is a starting point, not a conclusion.** ([[Allspaw Infinite Hows]]) The label closes investigation; the systemic question opens it.
- **Blameless postmortems are the substrate of organizational learning.** (Etsy "Blameless PostMortems and a Just Culture", 2012, summary) The cost of fear of blame is suppressed signal: engineers stop reporting near-misses, the org stops seeing the incidents that haven't yet become outages.
- **Hindsight is the systematic enemy of incident review.** ([[Allspaw Each Necessary]]) Knowing the outcome makes prior decisions look obviously wrong in ways they were not at the time.

---

## Connection to the Brain

Allspaw bridges the engineer-planner pole to several others:

- **[[John Carmack]] adjacency:** both engineers reject mechanical rules in favor of context-specific judgment. Carmack on inlining ("I now specifically disagree" with size rules); Allspaw on root cause ("there is no root cause"). The deeper shared move: programmer judgment beats received wisdom about how engineering should be done.
- **[[Leslie Lamport]] adjacency:** Lamport's "code without spec is patches" and Allspaw's "first stories close investigation" are the same move at different layers. Both insist that the easy answer (the patch, the human-error label) buries the real problem (the unstated spec, the systemic condition).
- **[[Bezos 2017 Letter]] (high standards):** Bezos says high standards are teachable; Allspaw says blameless review is teachable. Both are claims that an organizational practice that looks like personality is actually a learnable discipline.
- **Operating Principles**: feeds the "Everything fails. Design for it" principle (no. 10) with a sharper formulation — failures aren't outliers, they're the steady state, and the question is whether the org can learn from each one.

---

## Citations Added in 2026-05-28 Ingest

Three new sources expand the Allspaw corpus from two blog posts to a coherent theory-method-data-synthesis arc.

### From [[Allspaw Trade-Offs Under Pressure]] (2015, Lund master's thesis)

The empirical study underneath the blog posts. Four heuristics resolvers actually reach for during outages:

1. Initial correlation check (look at recent changes first)
2. Widening search scope (when no recent change correlates, expand outward)
3. Availability heuristic (most-recently-seen failure anchors the hypothesis)
4. Coordinative heuristic (peer review beats automated testing as a trust mechanism)

The thesis's load-bearing claim:

> "The increasing complexity of software applications and architectures in Internet services challenge the reasoning of operators tasked with diagnosing and resolving outages and degradations as they arise."

### From [[Cook Stella Report]] (2017, SNAFUcatchers consortium, co-authored with Cook and Woods)

The community synthesis. Above-the-line / below-the-line framework: everything below the line is technical artifact accessed only through representations; everything above is human cognition trying to model the artifact.

Woods' Theorem (load-bearing):

> "As the complexity of a system increases, the accuracy of any single agent's own model of that system decreases rapidly."

Anomalies-as-messages (load-bearing):

> "Anomalies are unambiguous but highly encoded messages about how systems really work. Postmortems represent an attempt to decode the messages and share them."

Collective resilience (load-bearing):

> "Collectively, our skill isn't in having a good model of how the system works, our skill is in being able to update our model efficiently and appropriately."

Dark debt: liabilities from organizational decisions that remain invisible until anomalies expose them. The dual of technical debt.

Blame vs sanction distinction: many orgs that call themselves "blameless" are actually merely "sanctionless."

### From [[Cook How Complex Systems Fail]] (1998, Richard Cook)

Closely-cited adjacent source (Cook-authored, but the foundational essay of the lineage Allspaw imports). Eighteen propositions. The load-bearing ones:

- (5) "Complex systems run as broken systems."
- (7) "There is no isolated 'cause' of an accident. There are multiple contributors."
- (10) "All practitioner actions are actually gambles."
- (16) "Safety is an emergent property of systems; it does not reside in a person, device or department."
- (17) "Failure free operations are the result of activities of people who work to keep the system within the boundaries of tolerable performance."

These are the upstream of every Allspaw frame: no root cause (7), hindsight bias (8), local rationality (10, 11), human-as-adaptive-element (12), safety as continuously produced (17).

---

## Updated Core Frames (now backed by all five sources)

- **No root cause in complex sociotechnical systems.** ([[Allspaw Each Necessary]], [[Cook How Complex Systems Fail]] prop. 7)
- **Complex systems run in degraded mode.** ([[Cook How Complex Systems Fail]] prop. 5) The default state is broken-but-functioning, held together by human compensation.
- **All practitioner actions are gambles.** ([[Cook How Complex Systems Fail]] prop. 10) Judging the gamble by outcome rather than information-at-the-time is the canonical incident-review mistake.
- **Safety is continuously produced by humans.** ([[Cook How Complex Systems Fail]] props. 16, 17) It is not a property of components; it is the rate at which the team manufactures it under pressure.
- **Woods' theorem.** ([[Cook Stella Report]]) No single agent's model of a complex system is accurate. Resilience is collective model-update rate, not individual model-accuracy.
- **Anomalies are encoded messages.** ([[Cook Stella Report]]) The postmortem is the decoder. Skipping the postmortem discards the system's most expensive signal.
- **Dark debt vs technical debt.** ([[Cook Stella Report]]) Technical debt is known and unpaid; dark debt is unknown until an incident reveals it.
- **Blame vs sanction.** ([[Cook Stella Report]]) "Sanctionless" is the floor; "blameless" is the ceiling. Most orgs achieve only the floor.
- **Coordination cost is a hidden tax.** ([[Cook Stella Report]]) Trivial in calm time, prohibitive during outage. Pre-stage the call ladders and channels.
- **Correlation-to-recent-change is the load-bearing first heuristic.** ([[Allspaw Trade-Offs Under Pressure]]) The reason continuous deployment works at all.
- **Peer review is a coordination primitive, not a testing primitive.** ([[Allspaw Trade-Offs Under Pressure]]) Trust scales differently than tests.

---

## Queued for Future Ingest

- "Blameless PostMortems and a Just Culture" (Etsy Code as Craft, 2012). Fetch failed previously (Etsy blog blocks WebFetch); re-ingest via alt mirror.
- "Web Operations" (O'Reilly book, 2010). Book-length engineering management text.
- "The Art of Capacity Planning" (O'Reilly, 2008). Adjacent technical text.
- Full PDF of [[Allspaw Trade-Offs Under Pressure]] (exceeded WebFetch size cap; landing-page abstract captured, full body queued).
- Dekker, Leveson, Conklin primary works (Allspaw's cited lineage).

---

## Status

Mature for the surfaced frames. Five sources now ingested ([[Allspaw Each Necessary]], [[Allspaw Infinite Hows]], [[Allspaw Trade-Offs Under Pressure]], [[Cook Stella Report]], and the closely-cited adjacent [[Cook How Complex Systems Fail]]). Operating frame is stable across theory (Cook 1998), method (Allspaw 2012, 2014), data (Allspaw 2015), and community synthesis (STELLA 2017).

---

## Connections

- [[Persona]], engineer-planner pole, third anchor
- [[John Carmack]], complementary engineer-planner (pragmatic individual)
- [[Leslie Lamport]], complementary engineer-planner (formal spec)
- [[Operating Principles]], Engineering Disposition section
- [[seed-corpus-engineer-planners]]
- [[Bezos 2017 Letter]], shared "discipline as learnable" thesis
