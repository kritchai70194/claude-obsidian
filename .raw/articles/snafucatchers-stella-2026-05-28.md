# STELLA: Report from the SNAFUcatchers Workshop on Coping with Complexity

Source: https://snafucatchers.github.io/
Authors: J. Allspaw, R. I. Cook, D. D. Woods, and the SNAFUcatchers Consortium
Year: 2017 (Columbia University Workshop, March 14-16, 2017)
Fetched: 2026-05-28 via WebFetch

## Table of Contents

1. tl;dr and Executive Summary
2. Introduction
   - About the SNAFUcatchers consortium and the STELLA meeting
   - The focus on handling anomalies
   - The above-the-line / below-the-line framework
3. Cases
   - Catching the Apache SNAFU
   - Catching the Travis CI SNAFU
   - Catching the Logstash SNAFU
   - Observations on the cases
   - Observations on the postmortem process
4. Themes
   - Capturing the value of anomalies through postmortems
   - Blame versus sanction in the aftermath of anomalies
   - Controlling the costs of coordination during anomaly response
   - Supporting anomaly response through improved visualizations
   - Strange loops dependencies
   - Dark Debt
5. Possible avenues for progress on coping with complexity
6. Back matter
7. References
   - Appendix A: Glossary

## Above-the-Line / Below-the-Line Framework

- Below the line: technical artifacts (code, hardware, databases, routers, load balancers).
- The line of representation: terminal displays, keyboards, interfaces mediating all interaction.
- Above the line: people with mental models performing cognitive work (observing, inferring, anticipating, troubleshooting).

"What lies below the line is never directly seen or touched but only accessed via representations."

## Woods' Theorem

"As the complexity of a system increases, the accuracy of any single agent's own model of that system decreases rapidly."

## Patterns in Anomaly Response

- Surprise: "I didn't know that it worked this way"
- Uncertainty: range of possibilities unknown, hard to distinguish signal from noise
- Hypothesis generation: rapid formation and testing of multiple explanatory models
- Search behavior: iterative exploration using internal representations to direct inquiry
- System representation evolution: mental models revised during response
- Coordination overhead: bringing new responders up to speed consumes attention
- Goal sacrifice: abandoning lower-priority objectives to achieve higher ones
- Risk management: explicit assessment of intervention hazards when sources unknown
- Escalating consequences: shift from diagnosis to disturbance management

## Verbatim Key Passages

On anomalies as messages:
"Anomalies are unambiguous but highly encoded messages about how systems really work. Postmortems represent an attempt to decode the messages and share them."

On the postmortem experience:
"We see repeatedly that postmortems generate I-didn't-know-that-the-system-worked-that-way experiences."

On collective resilience:
"Collectively, our skill isn't in having a good model of how the system works, our skill is in being able to update our model efficiently and appropriately."

On blame versus sanction:
The report distinguishes blame (attribution of outcomes to sources) from sanction (penalties on individuals). Organizations often claim "blameless" when actually they are "sanctionless."

"Creating a blame free environment remains for most organizations an aspiration rather than an accomplishment."

On complex system failures:
- Multiple latent factors combine (not single root causes)
- Unanticipated interactions between components
- Vulnerabilities present weeks/months before activation
- Activators are minor events or near-nominal conditions
- Buffering mechanisms (queues, failover, human action) become exhausted

On dark debt:
Beyond technical debt (Cunningham 1992), the report introduces "dark debt": liabilities from organizational decisions that remain largely invisible until anomalies expose them. Dark debt encompasses pressures to reduce investment in postmortems, adaptive capacity, and resilience-building work.

On coordination cost:
"During high tempo times the usually trivial costs of coordination become significant."

On strange loops dependencies:
Systems where components providing functions also depend on those same functions:
- Monitoring tools depend on the monitored system's availability
- Logging infrastructure depends on the systems it logs
- Deployment automation becomes mission-critical when continuous deployment is essential

The Logstash case exemplified this: examining logs required rsyslog, but rsyslog's backpressure created the problem being investigated.

On system fragility:
"Current generation internet-facing technology platforms are complex and prone to brittle failure. Without the continuous effort of engineers to keep them running they would stop working: many in days, most in weeks, all within a year."

On expertise and models:
"Experts demonstrated their ability to use their incomplete, fragmented models of the system as starting points for exploration and to quickly revise and expand their models during anomaly response."

On the library of incidents:
"The library of incidents is a write-only memory" (postmortems rarely reviewed across organizational boundaries).

On adaptive capacity trade-off:
"Shortchanging investments in adaptive capacity in order to devote more effort to production may yield immediate benefits by taking on additional systemic brittleness."

On engineering implications:
"A full understanding of how experts cope with the complexity confronting them is essential to engineering the processes to be more resilient."
