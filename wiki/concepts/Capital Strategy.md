---
type: concept
title: Capital Strategy
address: c-000118
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - capital-strategy
  - fundraising
  - synthesis
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Reid Hoffman]]"
  - "[[Bill Gurley]]"
  - "[[Peter Thiel]]"
  - "[[Mike Maples]]"
  - "[[Secrets and Inflections]]"
  - "[[seed-corpus-capital-strategy]]"
---

# Capital Strategy

Synthesis page on the multi-stage capital game. Most founder fundraising failure modes are not "did not get funded" but "got funded in a way that destroyed optionality, dilution structure, or board dynamics". This page names the discipline.

The four mentors here disagree productively. Hoffman says blitzscale (speed > efficiency in winner-take-most markets). Gurley says burn discipline (cash is the company killer). Thiel says monopoly (raise enough to dominate one niche, then expand). Maples says inflections (raise only after the secret is identified). The brain holds all four lenses and picks the right one for the situation.

---

## The Core Tension

The two strategic poles:

**Hoffman / Blitzscale side:** in a market with winner-take-most dynamics, accepting capital inefficiency in exchange for speed is rational. Being second in such a market means permanent loss. The cost of slowness exceeds the cost of bad capital discipline.

**Gurley / Burn discipline side:** most markets are not winner-take-most. Late-stage capital cycles produce dirty terms (participating preferred, multi-x liquidation preferences, ratchets) that destroy founder outcomes even when valuations look high. Burning $50M/quarter on bad unit economics kills companies that could have survived on $5M/quarter with disciplined growth.

Both are right in different situations. The frame to resolve:

> Is this market a Stage 5 Cold Start environment (Chen) with Network Economies (Helmer) at stake, and are we in a position to win it within 3-5 years? If yes, blitzscale. If no, burn discipline.

The wrong direction in either case is fatal. Blitzscaling a non-winner-take-most market is how unicorns become zero. Burn-disciplining a real winner-take-most market is how startups lose to faster-moving competitors.

---

## Round Sequencing and Dilution

Standard rounds, indicative ownership pattern:

| Round | Typical raise | Typical dilution | Founder ownership after | Notes |
|---|---|---|---|---|
| Pre-seed / Angel | $0.5-2M | 10-15% | ~85% | Friends/family + angels; safest terms |
| Seed | $2-5M | 15-25% | ~65% | Lead VC; clean SAFE or priced round |
| Series A | $8-20M | 20-30% | ~45% | Real board, real terms, real diligence |
| Series B | $20-50M | 15-25% | ~35% | Growth metrics dominant; some primary-secondary mix |
| Series C+ | $50M+ | 10-20% | ~25% | Late-stage capital; preferred structures matter most |

Founder dilution is roughly 50-65% by Series B in a typical path. The variables that change this materially:

- **Higher dilution:** weaker company, weaker founder, weaker market. Or "blitzscale" deliberately.
- **Lower dilution:** strong product traction, strong founder negotiating, profitability optionality, secondary structure where founders take cash instead of company taking more.

The "right" amount to raise:

> Raise enough to be safe through the next milestone, plus 6-12 months of buffer. Do NOT raise "as much as possible" because more capital removes optionality. ([[Bill Gurley]] frame applied)

Hoffman's contrary: in blitzscale environments, "as much as possible" is the right move because dilution is the smaller cost than market loss.

---

## When to Blitzscale vs Starve

Hoffman's *Blitzscaling*: spend like growth depends on it when the market is winner-take-most AND you can credibly win.

Gurley's contrarian: most founders confuse "winner-take-most" with "winner-take-all", and most are wrong about both. Default to capital efficiency unless you have specific evidence the market is winner-take-most.

The diagnostic:

1. **Is this a network-effects market?** Multi-sided platforms, social networks, marketplaces with two-sided liquidity.
2. **Is the network global, regional, or hyperlocal?** Hyperlocal (Uber: each city) requires per-market blitzscale. Global (Facebook: one network) requires one-time blitzscale.
3. **Is there a credible #2 already at scale?** If yes, you may be too late; consider differentiation rather than blitzscale.
4. **Can you maintain the burn for 18+ months?** If not, blitzscaling kills you faster than slow growth.

If 1 + 2 + maybe + 4 all check, blitzscale. If any fail, default to burn discipline.

---

## Board Composition

> A bad board is worse than no board. ([[Brad Feld]]'s frame, applied to capital strategy)

Board choices encoded in funding terms:

- **Lead investor takes one board seat** (standard).
- **Independent director after Series A** (recommended).
- **Founder maintains 2-of-5 board seats minimum** (or equivalent control structure).
- **Information rights for non-board investors** is acceptable; board observer rights with veto is not.

Late-stage rounds often add protective provisions (super-majority votes for major decisions, drag-along rights). Negotiate these carefully; they constrain operating freedom in moments when speed matters most.

---

## The Asymmetric Costs of Dirty Terms

Gurley's 2016 "On the Road to Recap" essay catalogued the dirty terms that emerged at late stages:

- **Participating preferred:** investor gets their money back AND their pro-rata of remaining proceeds. Doubles the cost of the round in liquidation scenarios.
- **Multi-x liquidation preferences:** 2x or 3x return guaranteed before common gets anything. Devastating at moderate exits.
- **Anti-dilution ratchets (especially full ratchet):** if a down round happens, investor gets retroactively repriced. Often takes 30-50% of founder equity in a tough cycle.
- **IPO ratchets:** if IPO valuation is below the last round, the round-investor gets more shares. Many "unicorn" terms include this.
- **Cumulative dividends:** preferred shares accrue interest if not paid. Compounds over years.

The founder's defense:

> Take the lower valuation with clean terms over the higher valuation with dirty terms. Always.

A $80M raise at a $400M valuation with 1x non-participating preferred and no ratchet beats a $100M raise at a $500M valuation with 2x participating preferred and an IPO ratchet. The clean structure preserves outcome optionality for the founder; the dirty structure transfers all upside to the investor below the unicorn outcome.

---

## The Thiel Lens: Capital for Monopoly

> Monopoly is the goal, not competition. ([[Thiel Zero to One]])

Thiel's frame for capital strategy: raise enough to dominate one niche completely before expanding. PayPal dominated eBay power-sellers before going broader; Facebook dominated Harvard, then Ivies, then college, then everyone; Stripe dominated developer-first payments before going up-market.

The implication for capital strategy: don't raise based on TAM (total addressable market). Raise based on the cost of dominating the first niche.

> A startup that dominates a small market is more valuable than a startup that does poorly in a large market.

The right round size is "enough to win the niche", not "enough to attack the market".

---

## The Maples Lens: Capital for Inflections

> Inflections precede ideas. Ideas without inflections are tar pits. ([[Mike Maples]])

The Maples frame: raise after you have identified the specific inflection (technology shift, regulatory change, behavioral change) the company rides. Most founders raise based on idea momentum; the best raise based on inflection identification.

The implication: pre-seed should be founder + thesis + early users. Seed should be inflection-validated. Series A should be loop-validated (revenue model proven). Series B+ should be scale-stage.

Mismatches:
- Pre-seed without inflection thesis = vague raise, will dilute next round.
- Seed without inflection validation = "we're working on AI" without specifics.
- Series A without loop validation = high burn, no compound growth.

---

## Operating Principles Pulled From This Page

In [[Operating Principles]] under new "Capital Strategy" section. Sample:

- **Blitzscale only when the market is provably winner-take-most.** ([[Hoffman Blitzscaling Book]])
- **Default to capital efficiency.** ([[Bill Gurley]] frame)
- **Raise enough for the next milestone plus 6-12 month buffer. Not "as much as possible".** ([[Gurley J-curve and Recap]])
- **Clean terms at lower valuation beat dirty terms at higher valuation.** ([[Gurley J-curve and Recap]])
- **The board is a tool; curate it actively.** (cross with [[Feld Startup Boards]])
- **Monopoly is the goal; raise to dominate the first niche, not to attack the market.** ([[Thiel Zero to One]])
- **Inflections precede ideas; raise after inflection identification.** ([[Maples Pattern Breakers]])
- **Customer concentration is a moat-killer; whales eventually extract.** ([[Gurley All Markets Not Equal]])
- **The Alliance: employment relationship is series of tours, not permanent.** ([[Hoffman The Alliance]])

---

## Decision Frames Added

- **"What secret do we know that nobody else does?"** ([[Peter Thiel]]) The contrarian thesis test.
- **"Blitzscale or starve?"** ([[Reid Hoffman]]) When capital efficiency is the wrong question.
- **"What inflection is making this possible now?"** ([[Mike Maples]]) The "why now" question with rigor.

---

## Connections

- [[Reid Hoffman]], [[Bill Gurley]], [[Peter Thiel]], [[Mike Maples]] are the four mentors
- [[Secrets and Inflections]] is the Thiel + Maples sister concept on thesis formation
- Cross-pole: [[Andrew Chen]] growth loops are what capital deploys against; [[Hamilton Helmer]] Powers are what capital builds toward; [[Brad Feld]] board management is the operating layer of capital strategy
