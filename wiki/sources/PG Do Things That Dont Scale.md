---
type: source
title: PG Do Things That Dont Scale
address: c-000029
source_type: essay
author: "[[Paul Graham]]"
publication_date: 2013-07
url: https://paulgraham.com/ds.html
raw_source: ".raw/articles/pg-ds-2026-05-27.md"
fidelity: full-text-summary
created: 2026-05-26
updated: 2026-05-27
tags:
  - source
  - essay
  - early-stage
  - growth
  - unscalable
status: mature
related:
  - "[[Paul Graham]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-unicorn-builders]]"
  - "[[Patrick Collison]]"
  - "[[John Collison]]"
  - "[[Brian Chesky]]"
  - "[[Sam Altman]]"
---

# PG Do Things That Dont Scale

Paul Graham's most-cited essay (2013). Inverts the standard startup advice of "build for scale from day one" with "the work in early stage IS the unscalable work". The Y Combinator partner's compressed wisdom from observing thousands of startups.

## The Core Inversion

The standard advice: build a product that scales. The startup death pattern: assume someone will come use it.

> Startups don't take off because users magically discover them. The founders have to recruit them manually.

## Manual User Recruitment

The signature pattern. Examples Graham gives:

- **Airbnb founders** went door-to-door in New York improving listings (taking professional photos of hosts' apartments themselves)
- **Wufoo founders** sent handwritten thank-you notes
- **Stripe founders** created the "Collison installation": they would not send a link; they would sit down with the new user and install Stripe live

> "If you're worried that the things you're doing are unscalable, then you're probably doing the right thing."

## The Math of Compound Growth

> Starting with 100 users, growing 10% weekly yields 14,000 users annually and 2 million after two years.

The math of compounding makes the math of recruitment work. Each manual user, multiplied by retention and compounding, becomes thousands of users over a year.

The unstated implication: 10% weekly growth is the goal. Manual recruitment of 10 users per week from a base of 100 reaches that.

## Obsessive User Delight

The Wufoo handwritten note pattern. The Airbnb professional photos pattern. Both share a shape:

> Spend disproportionate care on the early users, because they ARE the company at this stage. There are no others.

This is not customer-service philosophy. It is the recognition that the early users' experience is the only data the company has about whether it works.

## Consulting Mode

For B2B startups, the recommended pattern:

> Treat one customer as your entire focus. Tweak the product until their needs are perfectly met. Then discover others want similar solutions.

The B2B equivalent of door-to-door. Pick one customer; make them love the product; generalize from what worked.

## Starting Narrow (Fire Strategy)

> Facebook began restricted to Harvard students.

A "contained fire" creates critical mass before expansion. The narrow audience makes the product better for that audience, which produces the love that lets the product expand outward.

The mistake: trying to build for everyone at once produces a product that delights no one.

## Against Big Launches

> Launches themselves matter little; gradual user acquisition through effort beats coordinated publicity campaigns.

The "big launch" is theater. Press attention does not convert to retention. The work of recruiting users one at a time is what builds the foundation.

PG's diagnosis of why founders are still seduced by it:

> A combination of solipsism and laziness. They think what they're building is so great that everyone who hears about it will immediately sign up.

And the inverse correlation he half-jokingly notes in footnote [10]: the only launches he remembers are famous flops (Segway, Google Wave). Wave was a great idea that he believes was killed partly by its overdone launch.

Partnerships fall into the same category: "Six months later they're all saying the same thing: that was way more work than we expected, and we ended up getting practically nothing out of it."

## Pulling a Meraki (Hardware Manual Mode)

For hardware startups, the variant PG names "pulling a Meraki" — after a YC-adjacent company whose founders (Robert Morris's grad students) assembled their own routers when starting:

> Hardware startups face an obstacle that software startups don't. The minimum order for a factory production run is usually several hundred thousand dollars... without a product you can't generate the growth you need to raise the money to manufacture your product.

The fix: manufacture the first units yourself. Pebble assembled the first several hundred watches by hand before their Kickstarter; PG argues this is why they sold $10M of watches when they finally launched. Eric Migicovsky's quoted lesson: "how valuable it was to source good screws." The byproduct of self-manufacture is factory-level product knowledge.

## Consult Mode (B2B Single-Customer)

For B2B specifically, PG's pattern is to act like a consultancy without taking consulting money:

> Pick a single user and act as if they were consultants building something just for that one user. The initial user serves as the form for your mold; keep tweaking till you fit their needs perfectly, and you'll usually find you've made something other users want too.

The hard rule: the moment they pay you by the hour for attentiveness, you have crossed into consulting and are no longer a product company. Free attentiveness compounds into product. Paid attentiveness traps you in services.

A related pattern from Viaweb (PG's own company): when merchants would not adopt their software, they would build the stores for the merchants themselves, using their own software. Painful and embarrassing in the moment; gave them the only useful feedback loop they had.

## Manual Mode (Be Your Software)

The most extreme version: do by hand the thing you plan to automate.

> When you only have a small number of users, you can sometimes get away with doing by hand things that you plan to automate later. This lets you launch faster, and when you do finally automate yourself out of the loop, you'll know exactly what to build because you'll have muscle memory from doing it yourself.

The canonical instance:

> The way Stripe delivered "instant" merchant accounts to its first users was that the founders manually signed them up for traditional merchant accounts behind the scenes.

The user sees software. Behind the screen is a founder doing the work. Once the operator knows the shape of the work cold, automation is a translation, not a discovery.

## Startups as Vectors

The synthesizing frame PG offers at the end. Stop thinking of a startup idea as one thing (the product). Start thinking of it as a **pair**:

> Pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.

For most startups the second component is the same: manual recruitment + obsessive user delight. But framing the idea as a vector forces founders to be deliberate about the second component instead of leaving it implicit.

The hidden filter: an idea where the second component is empty (no way to find users manually) is probably a bad idea, at least for those founders. The vector framing exposes the gap before founders run out of runway.

When both components work together, they shape company DNA:

> The unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better.

## Named Patterns Introduced

- **Collison installation** — sit down with the user, install the product live, do not send a link. Origin: Patrick and John Collison at Stripe.
- **Pulling a Meraki** — hand-assemble hardware units before scaling to a factory run. Origin: Meraki founders (Robert Morris's grad students). Adopted by Pebble.
- **Contained fire** — start in a narrow market deliberately to build heat before adding logs. Origin: Facebook at Harvard.
- **Insanely great experience (not insanely great product)** — Jobs's phrase recast for the larval startup. The buggy product is acceptable if you compensate with founder-level attentiveness.
- **Startup as vector** — explicit pairing of product + unscalable initial work.

## What This Source Teaches

- The work in early stage IS the unscalable work.
- Recruit users manually. Door-to-door. Handwritten notes. Live installation.
- 10% weekly growth from 100 users compounds to 2M in two years.
- Disproportionate care on early users; they are the company at this stage.
- B2B: pick one customer, perfect for them, generalize.
- Start narrow; expand outward from a contained fire.
- Big launches and partnerships do not work; manual recruitment does.
- Hardware: hand-assemble before factory runs (Meraki / Pebble).
- Manual mode: do the work by hand until you know exactly what to automate (Stripe).
- Treat startup ideas as vectors: product + the unscalable thing you will do to get going.

## Principles Cited From This Source

(Will be added to [[Operating Principles]] Early-Stage Epistemics.)

- **The early-stage work is the unscalable work.** Manual recruitment, hand-holding, door-to-door.
- **Start narrow; the contained fire creates critical mass.** Then expand outward.
- **10% weekly growth is the target.** Manual recruitment of 10 users from a base of 100 hits it.
- **Disproportionate care on early users; they ARE the company.**
- **Big launches and partnerships fail; gradual recruitment compounds.** Solipsism and laziness explain the founder pull toward them.
- **Hardware founders should manufacture the first units themselves.** "Pulling a Meraki" gives factory-level product knowledge before factory-level volume.
- **Manual mode beats premature automation.** Be your software until you know what to automate.
- **A startup idea is a vector, not a scalar.** Product + the unscalable first move. An empty second slot is a red flag.

## Connections

- [[Paul Graham]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-unicorn-builders]] source G2
- [[Patrick Collison]] / [[John Collison]] origin of the "Collison installation" pattern; Stripe is the manual-mode and aggressive-recruitment exemplar
- [[Brian Chesky]] Airbnb door-to-door, professional-photos pattern; precursor to [[Chesky Founder Mode Essay]]
- [[Sam Altman]] mentioned in PG's footnote 2 (sales is non-delegable for founders); aligns with [[Altman YC Essays]]
- [[Lenny PMF Guide]] adjacent; the "10 users who love it beats 1000 who tolerate it" frame
- [[Carmack Lex Fridman 309]] adjacent; the protected-focus discipline maps to the manual-recruitment discipline (both reject the easy-but-shallow path)
- [[Working Backwards Book]] adjacent; Amazon's early operational mechanics share the "do whatever it takes for early users" DNA
- Raw text: `.raw/articles/pg-ds-2026-05-27.md`
