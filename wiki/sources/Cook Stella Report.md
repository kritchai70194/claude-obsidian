---
type: source
title: "Cook Stella Report"
address: c-000320
author: "[[Richard Cook]]"
year: 2017
source_url: "https://snafucatchers.github.io/"
fidelity: full-text-summary
tags:
  - source
  - allspaw
  - engineer-planner
  - resilience-engineering
  - cognitive-systems-engineering
  - snafucatchers
  - stella
status: mature
related:
  - "[[John Allspaw]]"
  - "[[Richard Cook]]"
  - "[[Operating Principles]]"
  - "[[Cook How Complex Systems Fail]]"
  - "[[Allspaw Each Necessary]]"
  - "[[Allspaw Infinite Hows]]"
---

# STELLA: Report from the SNAFUcatchers Workshop on Coping with Complexity (2017)

The canonical resilience-engineering report from the SNAFUcatchers consortium workshop at Columbia University, March 2017. Authored by [[Richard Cook]], [[John Allspaw]], David D. Woods, and consortium members. Three real-world anomaly cases (Apache, Travis CI, Logstash) plus six theme essays. Single most-cited operational artifact of the modern resilience engineering community.

Filed under "Cook" as primary author by convention (he led the writeup); Allspaw is co-author and one of the workshop organizers via Adaptive Capacity Labs.

## Provenance

- Authors: [[Richard Cook]], [[John Allspaw]], David D. Woods, and the SNAFUcatchers Consortium
- Year: 2017 (Columbia University Workshop, March 14-16)
- URL: https://snafucatchers.github.io/
- Raw extract: `.raw/articles/snafucatchers-stella-2026-05-28.md`
- Fidelity: full table of contents captured, all named patterns extracted, key verbatim quotes preserved

## The Above-the-Line / Below-the-Line Framework

The report's most reusable mental model. Systems are divided into three regions:

- **Below the line**: technical artifacts. Code, hardware, databases, routers, load balancers. The things engineers think they are working on.
- **The line of representation**: terminal displays, keyboards, dashboards, interfaces. The narrow channel through which all interaction passes.
- **Above the line**: people with mental models doing the cognitive work. Observing, inferring, anticipating, troubleshooting.

The pivotal claim:

> "What lies below the line is never directly seen or touched but only accessed via representations."

This is the framing that explains why incident response is hard: every responder is reasoning about a system they cannot directly observe, only through partial and possibly stale representations.

## Woods' Theorem

> "As the complexity of a system increases, the accuracy of any single agent's own model of that system decreases rapidly."

A pillar claim. No individual engineer has an accurate model of a complex production system. Everyone is working from a fragmentary, partially-wrong, partially-stale internal map. Incident response is collective model-repair, not individual model-recall.

## Patterns in Anomaly Response

The report catalogs nine patterns engineers exhibit during outage response:

- **Surprise**: "I didn't know that it worked this way." Experts encounter unanticipated dependencies.
- **Uncertainty**: the range of possibilities is unknown; signal is hard to separate from noise.
- **Hypothesis generation**: rapid formation and testing of multiple explanatory models.
- **Search behavior**: iterative exploration using internal representations to direct inquiry.
- **System representation evolution**: mental models get revised during the response itself.
- **Coordination overhead**: bringing new responders up to speed consumes critical attention.
- **Goal sacrifice**: lower-priority objectives are abandoned to achieve higher ones.
- **Risk management**: explicit assessment of intervention hazards when sources are unknown.
- **Escalating consequences**: as cascades grow, attention shifts from diagnosis to disturbance management.

## Themes (the six theme chapters)

1. **Capturing the value of anomalies through postmortems**
2. **Blame versus sanction in the aftermath of anomalies**
3. **Controlling the costs of coordination during anomaly response**
4. **Supporting anomaly response through improved visualizations**
5. **Strange loops dependencies**
6. **Dark debt**

## Verbatim Load-Bearing Passages

### On anomalies as messages

> "Anomalies are unambiguous but highly encoded messages about how systems really work. Postmortems represent an attempt to decode the messages and share them."

The single best argument for blameless postmortems as engineering practice. Each anomaly is a high-fidelity signal about the actual (not imagined) system; the postmortem is the decoder.

### On the value of postmortems

> "We see repeatedly that postmortems generate I-didn't-know-that-the-system-worked-that-way experiences."

Postmortems are not records, they are discoveries. The artifact is secondary to the cognitive event of the participants.

### On collective resilience

> "Collectively, our skill isn't in having a good model of how the system works, our skill is in being able to update our model efficiently and appropriately."

A pillar claim. Engineering excellence in complex systems is not accuracy of model, it is rate-of-correction of model.

### On blame vs sanction

The report distinguishes **blame** (attribution of outcomes to sources) from **sanction** (penalties on individuals). Organizations often claim "blameless" when actually they are merely "sanctionless."

> "Creating a blame free environment remains for most organizations an aspiration rather than an accomplishment."

A diagnostic tool. If your org has stopped firing people for incidents but still produces incident narratives that pin outcomes on individuals, you have sanction-free blame, not blamelessness.

### On system fragility

> "Current generation internet-facing technology platforms are complex and prone to brittle failure. Without the continuous effort of engineers to keep them running they would stop working: many in days, most in weeks, all within a year."

The "running broken" claim from [[Cook How Complex Systems Fail]] proposition 5, made concrete for internet infrastructure.

### On coordination costs

> "During high tempo times the usually trivial costs of coordination become significant."

The hidden tax of incident response: pulling responders together, bringing them up to speed, keeping everyone synchronized. Cheap in steady state, prohibitive during an outage. This justifies preparing coordination machinery (call ladders, runbooks, chat channels) in calm time.

### On the library of incidents

> "The library of incidents is a write-only memory."

A diagnostic. Postmortems are written and then never read across organizational boundaries. The org learns from this incident, sometimes; it does not learn from the union of all its incidents.

### On adaptive capacity trade-off

> "Shortchanging investments in adaptive capacity in order to devote more effort to production may yield immediate benefits by taking on additional systemic brittleness."

The economic frame for the resilience-engineering trade. Cutting incident-review time, on-call rotation, runbook hygiene, or postmortem follow-through buys short-term production at the cost of compounding brittleness.

### On engineering expertise

> "Experts demonstrated their ability to use their incomplete, fragmented models of the system as starting points for exploration and to quickly revise and expand their models during anomaly response."

What expertise actually looks like: not a complete map but a fast model-update procedure.

## Dark Debt

The report's most influential original concept. Beyond [[Technical Debt]] (Cunningham 1992: short-term shortcuts requiring later repayment), **dark debt** is the class of liabilities from organizational decisions that remain largely invisible until anomalies expose them.

Examples: postmortem follow-ups never staffed, monitoring blind spots no one mapped, runbooks that drifted from reality, coordination channels that work in calm time but not under load.

Dark debt is the dual of technical debt: technical debt is known and unpaid; dark debt is unknown until an incident reveals it. You cannot prioritize what you have not yet discovered.

## Strange Loops Dependencies

Components that provide a function also depend on that function:

- Monitoring tools depend on the monitored system's availability
- Logging infrastructure depends on the systems it logs
- Deployment automation becomes mission-critical when continuous deployment is essential

The Logstash case in the report: examining logs required rsyslog, but rsyslog's backpressure was the problem being investigated. The diagnostic instrument was the failure mode.

## Frames Cited

- Above-the-line / below-the-line as the operative mental model of any internet-facing system
- Woods' theorem on agent-model accuracy under complexity
- Dark debt as the dual of technical debt
- Strange loops as a class of high-leverage failure modes
- Coordination cost as a hidden tax of incident response
- The blame vs sanction distinction

## What This Brain Takes From It

- The org's job is not to prevent anomalies, it is to decode them. Postmortem hygiene is the throughput-of-learning bottleneck.
- The accuracy of any single engineer's mental model is worse than they think; resilience is a property of the team's update rate, not the individual's certainty.
- Coordination is cheap until it matters. Pre-stage the call ladders and channels before the outage.
- Dark debt accumulates silently. Periodic war-game / chaos exercises are the only mechanism that surfaces it.
- "Blameless" is a slogan; "sanctionless" is what most orgs actually achieve. Both are necessary; only the deeper one produces information.

## Cross-References

- [[John Allspaw]] (co-author and consortium organizer)
- [[Richard Cook]] (lead author; this builds on his "How Complex Systems Fail" propositions)
- [[Cook How Complex Systems Fail]] (the upstream essay)
- [[Allspaw Each Necessary]] (Allspaw's 2012 import of the no-root-cause frame)
- [[Allspaw Infinite Hows]] (Allspaw's 2014 second-stories frame)
- [[Operating Principles]], Engineering Disposition section
- [[seed-corpus-engineer-planners]]

## Status

Mature for the named patterns and the load-bearing quotes. The three case studies (Apache, Travis CI, Logstash) are summarized at the workshop-level here, not exhaustively reproduced. Deeper case ingest is queued if the brain ever needs concrete anomaly-response narratives.
