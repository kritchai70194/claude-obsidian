---
source_id: lenny-retention-benchmarks
title: "What is good retention"
author: Lenny Rachitsky
co_author: Casey Winters
publication: Lenny's Newsletter
publication_date: 2020
url: https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29
coverage: https://caseyaccidental.com/what-is-good-retention
fetch_method: WebFetch + WebSearch cross-reference
fetch_date: 2026-05-26
fidelity: extracts (benchmark tables and key definitions retrieved verbatim; operator commentary in summary)
license_note: Public Substack article. Quoted under fair use.
---

# Source, Lenny Retention Benchmarks

## What This Is

The canonical retention benchmark study, jointly authored by Lenny Rachitsky and Casey Winters (Growth at Pinterest, Eventbrite, Grubhub). They surveyed 20 growth experts and combined the findings with public company data to produce the most-cited retention benchmarks in the modern product industry.

Notable because it is the first place a product team can look up "what is good retention for my business model" and get a defensible answer.

## User Retention Benchmarks (at 6 months)

| Business Model | GOOD | GREAT |
|---|---|---|
| Consumer Social | ~25% | ~45% |
| Consumer Transactional | ~30% | ~50% |
| Consumer SaaS | ~40% | ~70% |
| SMB/Mid-Market SaaS | ~60% | ~80% |
| Enterprise SaaS | ~70% | ~90% |

User retention defined as: "the percentage of users who signed up and are still active (i.e. using the product, making a purchase, posting a photo) six months later."

## Net Revenue Retention Benchmarks (at 12 months)

| Business Model | GOOD | GREAT |
|---|---|---|
| Consumer SaaS | ~55% | ~80% |
| Bottom-up SaaS | ~100% | ~120% |
| Land & Expand VSB SaaS | ~80% | ~100% |
| Land & Expand SMB/Mid-Market | ~90% | ~110% |
| Enterprise SaaS | ~110% | ~130% |

Net revenue retention defined as: "how much revenue are you driving from one cohort of customers over time."

The bottom-up and land-and-expand models cross 100% (negative churn) at GOOD because existing customers expand spend faster than they churn out.

## Core Thesis (Casey Winters)

> "Great retention is the scalable way to grow a product. It's the best indicator of product-market fit, it is the most important factor in a user's lifetime value, and high retention drives all of the best acquisition strategies."

The three claims chained:
1. Retention is the PMF indicator
2. Retention is the LTV driver
3. Retention enables paid acquisition (because LTV/CAC works only with retention)

If retention is broken, no growth channel produces durable economics.

## The Curve Shape Discipline

The benchmarks above are point-in-time measurements. The deeper diagnostic is the shape of the cohort retention curve:

- **Declining to zero**: no PMF, no business model. The product is leaky.
- **Asymptoting to a positive floor**: PMF for that floor segment. The floor is your sustainable customer base.
- **Flat or rising over time**: PMF and a network or compounding effect (rare, characteristic of Slack, Notion in their early years).

Most unicorns operate at the asymptoting pattern. The number at the asymptote matters more than the slope of the early decline.

## Important Caveat (Fareed Mosavat)

> "Ultimately, what matters is that your retention supports sustained growth."

The benchmarks are not the goal. The goal is unit economics that fund growth. Low retention can be acceptable if:
- CAC is very low (organic, viral, or product-led)
- Marginal cost per user is near zero
- The business is not trying to be venture-scale

A bootstrapped SaaS with 30% Day-180 retention can be a great business; a venture-funded one usually cannot.

## Marketplace Nuance

Two-sided marketplaces require both sides. Demand-side retention depends on supply-side retention and acquisition cost:

- High supply churn + low supply acquisition cost = need low demand retention (Uber driver model)
- Low supply churn + low supply acquisition cost = can tolerate lower demand retention (Airbnb host model)
- High supply churn + high supply acquisition cost = need very high demand retention to fund driver acquisition (the constant Uber/Lyft strategic challenge)

The marketplace lesson: retention is not one number. It is a system of numbers across both sides.

## How to Measure It

- Define your active-user definition first (DAU, WAU, MAU, transacting user, paying user; different definitions give wildly different curves)
- Cohort by acquisition month
- Track at Day 1, 7, 30, 60, 90, 180, 365
- Show the curve, not just the headline number
- Recompute monthly with new cohorts to detect retention drift

## What This Source Teaches

- Retention is the PMF signal, the LTV driver, and the acquisition enabler.
- Specific numerical benchmarks exist by business model; "great" is roughly 2x "good".
- The retention curve shape is the diagnostic. Flat asymptote = PMF for that segment.
- Net revenue retention crosses 100% in healthy bottom-up SaaS and enterprise.
- Marketplaces are two-sided systems; demand retention depends on supply economics.
- Active-user definition determines the curve; pick carefully and stay consistent.
