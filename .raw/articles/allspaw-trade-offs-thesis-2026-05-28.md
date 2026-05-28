# Trade-Offs Under Pressure: Heuristics Used by Resolvers During Outages

Source: https://lup.lub.lu.se/student-papers/search/publication/8084520
Author: John Allspaw
Year: 2015 (Master's thesis, Lund University, Human Factors and System Safety)
Fetched: 2026-05-28 via WebFetch (abstract + landing page)

## Abstract (Verbatim)

"The increasing complexity of software applications and architectures in Internet services challenge the reasoning of operators tasked with diagnosing and resolving outages and degradations as they arise."

## Four Heuristics Identified

1. Initial correlation check: "initially look for correlation between the behaviour and any recent changes made in the software"
2. Widening search scope: "widen the search to any potential contributors imagined" when software changes show no correlation
3. Availability heuristic: focus on "the one that most easily comes to mind, either because symptoms match those of a difficult-to-diagnose event in the past, or those of any recent events"
4. Coordinative heuristic: "rely on peer review of the changes more than automated testing"

## Provenance Notes

Full PDF exceeded WebFetch size limit. Landing-page abstract and heuristics captured.
Thesis advisors at Lund: Sidney Dekker (Human Factors and System Safety program).
Thesis is built on a study of incident response practices at large internet services.

## Related Themes (per the abstract framing)

- Time pressure and uncertainty as the operative constraints during outage response
- Reliance on recent changes as the first hypothesis (correlation-not-causation risk)
- Peer review as a coordination/trust mechanism that complements (and sometimes substitutes for) automated testing
- Resolver judgment under degraded information
