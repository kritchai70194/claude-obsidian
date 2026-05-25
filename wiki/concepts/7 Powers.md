---
type: concept
title: 7 Powers
address: c-000041
complexity: advanced
domain: strategy
aliases:
  - Seven Powers
  - Helmer 7 Powers
  - Strategic Powers
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - strategy
  - moats
  - durability
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Hamilton Helmer]]"
  - "[[Ben Thompson]]"
  - "[[Aggregation Theory]]"
  - "[[Helmer 7 Powers Book]]"
  - "[[Helmer Acquired Podcast]]"
  - "[[Helmer Counter-Positioning Deep Dive]]"
  - "[[Helmer 7 Powers Applied to AWS]]"
  - "[[Innovators Dilemma]]"
---

# 7 Powers

Hamilton Helmer's framework for evaluating business durability. Seven specific Powers, each with a strict definition requiring both Benefit (creates value) and Barrier (prevents competitive imitation). The canonical universal moat taxonomy.

This concept page synthesizes [[Hamilton Helmer]]'s framework into a working reference. Use it as the entry point; consult [[Helmer 7 Powers Book]] for the canonical text, [[Helmer Counter-Positioning Deep Dive]] for the most original Power, [[Helmer 7 Powers Applied to AWS]] for an applied analysis.

Complement to [[Aggregation Theory]]: Thompson's framework is internet-era-specific (digital goods, zero marginal cost); Helmer's framework is universal (any business, any era).

---

## Definition of Power

> Power is "a set of conditions creating the potential for persistent differential returns." ([[Helmer 7 Powers Book]])

Three required elements:
1. **Persistent** — sustainable over time, not a temporary advantage
2. **Differential** — produces returns above cost of capital
3. **Returns** — generates substantial free cash flow

Power manifests as persistently high returns on capital, durable above-market growth, substantial free cash flow over extended periods.

---

## The Universal Test: Benefit + Barrier

Every Power requires BOTH:
- **Benefit:** Creates value (lower cost or higher willingness-to-pay)
- **Barrier:** Prevents competitive imitation

If you have one without the other, you do not have a Power.

This precision is what distinguishes Helmer from generic "moat" discourse. "Network effects" is not a Power; "Network Economies with Benefit (value increases with users) AND Barrier (competitors cannot pay users to switch to sub-scale alternative)" is a Power.

---

## The Seven Powers

### 1. Scale Economies

**Definition:** Per-unit cost declines as production volume increases.

**Benefit:** Margin expansion, or lower consumer prices that drive volume.
**Barrier:** Competitors must accept prolonged losses to gain enough share to compete on cost.

**Examples:** Netflix (content costs spread across larger subscriber base), Costco (passes savings to customers), AWS (datacenter + custom silicon economics)

**Key insight:** Scale only matters with meaningful *relative* advantage. Automotive OEMs and airlines are massive but lack the Power.

### 2. Network Economies

**Definition:** Customer value increases as the installed base grows.

**Benefit:** Winner-take-all/most dynamics; insurmountable lead for first-scaled company.
**Barrier:** Competitor must pay users to switch to a sub-scale network.

**Examples:** Facebook (3B users create gravitational pull), LinkedIn, Visa, payment networks generally

**Key insight:** Among the most durable Powers, but can be bounded by geography or segmentation. Undermined by poor execution that breaks the user experience.

### 3. Counter-Positioning

**Definition:** Newcomer adopts a superior business model that incumbents won't match due to anticipated damage to existing business.

**Benefit:** Smaller players disrupt established competitors through wedge strategies.
**Barrier:** Incumbent unwillingness to inflict short-term economic pain on profitable core business; psychological bias toward status quo; agency problem.

**Examples:** Netflix vs Blockbuster (DVD-by-mail, no late fees), Vanguard vs Fidelity (index funds), Dell vs Compaq (direct-to-consumer)

**Key insight:** Helmer's most underrated Power. The Barrier is structural/psychological, not technical. Counter-Positioning is a TRANSITION Power; lasts a few years, then must give way to other Powers for sustainability.

### 4. Switching Costs

**Definition:** Value loss a customer would incur switching to an alternate supplier for future purchases.

**Benefit:** High retention; predictable, durable revenue; premium pricing; cross-sell opportunities.
**Barrier:** Prohibitively high financial, procedural, or relational costs of migration.

**Three Types:**
- **Financial:** ERP installation costs, custom integration sunk cost
- **Procedural:** Engineer training (AutoCAD, ERP, Salesforce CRM)
- **Relational:** Emotional connection to service providers

**Examples:** Salesforce enterprise, SAP, AWS (deep service lock-in), Black Knight (50% of US first-lien mortgages)

**Key caveat:** Only applies to current customers. Acquiring new customers in mature markets remains difficult.

### 5. Branding

**Definition:** Durable attribution of higher value to objectively identical offerings due to historical seller information.

**Benefit:** Premium pricing power; outsized returns lasting decades.
**Barrier:** Time. Takes decades or longer to build. Cannot be recreated with capital alone.

**Examples:** Coca-Cola and Tiffany's (built since the 1800s), Apple, Hermès

**Key insight:** Helmer estimates $100B could not recreate the strongest brands. Economic hysteresis protects incumbents. Risks: brand dilution (Halston going "downstream" to JC Penney destroyed the brand).

### 6. Cornered Resource

**Definition:** Preferential access at attractive terms to a coveted asset that can independently enhance value.

**Types:**
- **Physical:** Land, pipelines, mining claims
- **Intangible:** Patents, regulatory capture, exclusive distribution
- **Human:** Pixar's creative directors

**Benefit:** Irreplaceable competitive advantage.
**Barrier:** Asset uniqueness and scarcity; cannot be replicated.

**Five Requirements (all must hold):**
1. Idiosyncratic
2. Non-arbitraged
3. Transferable (creates value where it goes)
4. Ongoing
5. Sufficient to drive outsized economics

**Examples:** Texas Pacific Land (royalties), Pixar (top directors), tobacco companies (exclusive distribution)

### 7. Process Power

**Definition:** Embedded organizational and activity systems enabling lower costs or superior products, matchable only through extended commitment.

**Benefit:** Qualitative, lasting competitive advantage. "Secret sauce" deeply ingrained in company culture.
**Barrier:** Takes decades to develop; tacit rather than explicit knowledge; cannot be copied by studying.

**Examples:** Toyota Production System, Constellation Software's VMS acquisition machine, GEICO operational systems, AWS operational discipline ([[Vogels 10 Lessons from 10 Years of AWS]])

**Key distinction:** Process Power differs from "operational excellence" through emergence from prolonged bottom-up trial and error. Cannot be replicated by reading about it; only by living it.

---

## Strategy = Route to Power

Helmer's central thesis:

> A strategy that does not lead to one of the 7 Powers is not a strategy. It is an operating plan in fancy dress.

For founders, this means a discipline: name the Power you are building toward. If you cannot, you do not have a strategy.

For investors, this means a checklist: does this company have any of the 7 Powers? If yes, which? Can it be defended? Is it stacked with others?

---

## How Powers Compound

The most durable businesses have **multiple stacked Powers**, often built sequentially.

AWS example (per [[Helmer 7 Powers Applied to AWS]]):
- 2006-2012: Counter-Positioning (vs on-prem datacenters)
- 2010+: Scale Economies (custom silicon, datacenter amortization)
- 2015+: Switching Costs (deep service lock-in)
- 2018+: Process Power (operational discipline from 18 years of "everything fails")

Four Powers stacked. This is the most durable profile Helmer's framework permits. Competitors must beat multiple Powers simultaneously, not just one.

Netflix example:
- 1997-2010: Counter-Positioning (vs Blockbuster)
- 2010+: Scale Economies (content costs spread across subscriber base)
- 2015+: Branding (Netflix = streaming)

The pattern: Counter-Positioning often starts; durable Powers (Scale, Network, Switching, Branding, Process) follow.

---

## How 7 Powers Relates to Aggregation Theory

[[Aggregation Theory]] (Thompson) and 7 Powers (Helmer) are complementary, not competing.

**Thompson** explains the internet-era-specific dynamics that produce winner-take-all outcomes:
- Why internet inverted the value chain
- Why suppliers commoditize while aggregators consolidate
- Why the moat is the user relationship

**Helmer** provides the universal taxonomy that explains WHY the aggregator's moat works in his terms:
- Most aggregators have **Network Economies** (Facebook, LinkedIn)
- Plus **Switching Costs** (Google, Amazon)
- Plus increasingly **Process Power** (Amazon, Google operational scale)

The two frameworks converge on the same companies but from different vantages:
- Thompson tells you which companies will win the internet era (aggregators with three-side networks)
- Helmer tells you which Powers their durability rests on (Network Economies + Switching Costs)

Use Thompson for "is this market structurally winner-take-all in the internet era?". Use Helmer for "which specific Powers does this business have, and is it stacked?".

---

## Diagnostic Application

When evaluating a business (existing or proposed):

1. **What Power(s) do you have or aim to build?** Name them specifically. If you cannot, no strategy.
2. **For each named Power, what is the Benefit and what is the Barrier?** Both must be present.
3. **Where on the S-curve are these Powers established?** Origination, take-off, or stability stage?
4. **Are they stacked?** Multiple Powers compound; one Power is fragile.
5. **If you have Counter-Positioning, what's next?** Counter-Positioning is a transition Power; plan the sustainable Powers that will replace it.
6. **What is the incumbent's economic dependence?** (Counter-Positioning specific) Find what they cannot lose.

---

## What This Concept Teaches

- Seven specific Powers exist; "competitive advantage" is fuzzy, the Powers are precise.
- Each Power requires Benefit AND Barrier; neither alone is a Power.
- Strategy = the route to Power; without Power, strategy is theater.
- Counter-Positioning is the most underrated; structural/psychological, not technical.
- Stacked Powers compound; the most durable businesses have multiple.
- Counter-Positioning is a transition Power; plan what follows.
- Thompson's Aggregation Theory and Helmer's 7 Powers are complementary lenses on the same underlying durability question.

---

## Connections

- [[Hamilton Helmer]] mentor anchor
- [[Helmer 7 Powers Book]], [[Helmer Acquired Podcast]], [[Helmer Counter-Positioning Deep Dive]], [[Helmer 7 Powers Applied to AWS]] foundational sources
- [[Aggregation Theory]] complementary concept; internet-era-specific vs universal
- [[Ben Thompson]] paired mentor
- [[Innovators Dilemma]] (Christensen) predecessor; Counter-Positioning extends disruption theory
- [[Werner Vogels]] AWS as the canonical stacked-Powers example
- [[Operating Principles]] Strategic Durability section
- Adjacent: [[Product-Market Fit]] — PMF gets you to a viable business; 7 Powers tells you whether the business is durable
