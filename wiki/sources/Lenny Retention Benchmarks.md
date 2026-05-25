---
type: source
title: Lenny Retention Benchmarks
address: c-000021
source_type: essay
author: "[[Lenny Rachitsky]]"
co_author: Casey Winters
publication: Lenny's Newsletter
publication_date: 2020
url: https://www.lennysnewsletter.com/p/what-is-good-retention-issue-29
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - essay
  - product
  - retention
  - benchmarks
status: developing
related:
  - "[[Lenny Rachitsky]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-unicorn-builders]]"
  - "[[Lenny PMF Guide]]"
---

# Lenny Retention Benchmarks

The canonical retention benchmark study, co-authored by Lenny and Casey Winters (ex-Growth at Pinterest/Eventbrite/Grubhub). They surveyed 20 growth experts and combined the findings with public company data. First place a product team can look up "what is good retention for my business model" and get a defensible answer.

## User Retention Benchmarks (6 months)

| Business Model | GOOD | GREAT |
|---|---|---|
| Consumer Social | ~25% | ~45% |
| Consumer Transactional | ~30% | ~50% |
| Consumer SaaS | ~40% | ~70% |
| SMB/Mid-Market SaaS | ~60% | ~80% |
| Enterprise SaaS | ~70% | ~90% |

User retention defined as: percentage of users who signed up and are still active (using the product, transacting, posting) six months later.

## Net Revenue Retention Benchmarks (12 months)

| Business Model | GOOD | GREAT |
|---|---|---|
| Consumer SaaS | ~55% | ~80% |
| Bottom-up SaaS | ~100% | ~120% |
| Land & Expand VSB SaaS | ~80% | ~100% |
| Land & Expand SMB/Mid-Market | ~90% | ~110% |
| Enterprise SaaS | ~110% | ~130% |

Bottom-up and enterprise models cross 100% (negative churn) at GOOD because existing customers expand spend faster than they churn out. This is the "land and expand" mechanic that defines durable SaaS.

## Core Thesis (Casey Winters)

> "Great retention is the scalable way to grow a product. It's the best indicator of product-market fit, it is the most important factor in a user's lifetime value, and high retention drives all of the best acquisition strategies."

Three claims chained:
1. Retention = PMF indicator
2. Retention = LTV driver
3. Retention enables paid acquisition (LTV/CAC works only with retention)

If retention is broken, no growth channel produces durable economics.

## The Curve Shape Discipline

Point-in-time benchmarks are not the deep diagnostic. The cohort retention curve shape is:

- **Declining to zero**: no PMF. Product is leaky.
- **Asymptoting to a positive floor**: PMF for that floor segment. The floor is the sustainable customer base.
- **Flat or rising over time**: PMF + a network/compounding effect. Rare (Slack, Notion in early years).

Most unicorns operate at the asymptoting pattern. The asymptote number matters more than the early-decline slope.

## Important Caveat (Fareed Mosavat)

> "Ultimately, what matters is that your retention supports sustained growth."

Benchmarks are not the goal. The goal is unit economics that fund growth. Low retention can be acceptable if:
- CAC is very low (organic, viral, product-led)
- Marginal cost per user is near zero
- The business is not trying to be venture-scale

A bootstrapped SaaS with 30% Day-180 retention can be a great business; a venture-funded one usually cannot.

## Marketplace Nuance

Two-sided marketplaces require both sides. Demand retention depends on supply economics:

- High supply churn + low supply acquisition cost → need low demand retention (Uber driver model)
- Low supply churn + low supply acquisition cost → can tolerate lower demand retention (Airbnb host model)
- High supply churn + high supply acquisition cost → need very high demand retention to fund supply acquisition (chronic Uber/Lyft challenge)

Retention is a system of numbers across both sides, not a single number.

## How to Measure It

- Define active-user precisely first (DAU/WAU/MAU/transacting/paying); different definitions give wildly different curves
- Cohort by acquisition month
- Track at Day 1, 7, 30, 60, 90, 180, 365
- Show the curve, not just the headline number
- Recompute monthly to detect drift

## Principles Cited From This Source

(Will be added to [[Operating Principles]] under Product Discipline.)

- **Retention is the PMF signal, LTV driver, and acquisition enabler.** Three claims, one mechanism.
- **The retention curve shape is the diagnostic.** Asymptote, not slope.
- **Net revenue retention >100% defines healthy SaaS.** Bottom-up and enterprise should reach negative churn.
- **Marketplaces are two-sided retention systems.** Demand retention depends on supply economics.
- **Define your active-user precisely.** Inconsistent definitions produce inconsistent answers.

## Connections

- [[Lenny Rachitsky]] mentor anchor
- [[Operating Principles]]
- [[seed-corpus-unicorn-builders]] source L2
- [[Lenny PMF Guide]] paired source; this essay provides the numerical foundation under the PMF essay's diagnostics
- Adjacent: [[Stripe Annual Letter 2024]] (the durable-profitability thesis depends on the same retention mechanics)
