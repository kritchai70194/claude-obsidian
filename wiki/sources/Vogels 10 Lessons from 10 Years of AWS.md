---
type: source
title: Vogels 10 Lessons from 10 Years of AWS
address: c-000229
author: Werner Vogels
publication_year: 2016
url: >-
  https://www.allthingsdistributed.com/2016/03/10-lessons-from-10-years-of-aws.html
raw_file: .raw/source-vogels-10-lessons.md
created: '2026-05-24T00:00:00.000Z'
updated: '2026-05-27'
tags:
  - source
  - aws
  - vogels
  - engineering-principles
  - distributed-systems
status: mature
related:
  - '[[Werner Vogels]]'
  - '[[Bezos 2002 API Mandate]]'
  - '[[Bezos 2016 Day 1 Letter]]'
  - '[[Vogels Eventually Consistent]]'
  - '[[Operating Principles]]'
  - '[[Persona]]'
  - '[[Dean Latency Numbers]]'
---

# Vogels, "10 Lessons from 10 Years of AWS" (March 2016)

[[Werner Vogels]]'s anniversary retrospective: a decade of running AWS distilled into 10 engineering principles. The single densest source for AWS-era operational wisdom in his own voice.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2016 (March, AWS 10-year mark counted from S3 launch on 2006-03-14)
- URL: https://www.allthingsdistributed.com/2016/03/10-lessons-from-10-years-of-aws.html
- Raw extract: [`.raw/source-vogels-10-lessons.md`](../../.raw/source-vogels-10-lessons.md)
- Fidelity: extracts (WebFetch summary), key quotes verbatim.

## Headline Takeaway

If [[Bezos 2002 API Mandate|the 2002 API mandate]] was the *seed* decision that produced AWS, this post is the *harvest* report: what running that architecture for a decade actually taught the engineers running it. Several principles overlap with Bezos's framing, which is the point. Working principles converge in practice.

## The 10 Lessons (each principle with the most-quotable line)

### 1. Build evolvable systems

> "The evolution of Amazon S3 could best be described as starting off as a single engine Cessna plane, but over time the plane was upgraded to a 737, then a group of 747s. All the while, we were refueling in midair."

The metaphor matters. Evolvable is not the same as flexible. An evolvable system can be re-architected under load without downtime.

### 2. Expect the unexpected

> "Failures are a given and everything will eventually fail over time. We needed to build systems that embrace failure as a natural occurrence even if we did not know what the failure might be."

This is the canonical Vogels framing. "Everything fails all the time" is the principle in one sentence.

### 3. Primitives not frameworks

> "Offer customers a collection of primitives and tools, where they could pick and choose."

The decision to expose primitives rather than opinionated frameworks is downstream of the 2002 API mandate: externalizable means simple, named, composable.

### 4. Automation is key

> "A good litmus test has been that if you need to SSH into a server or an instance, you still have more to automate."

The SSH test is a concrete check for the automation principle. If the operator's hands are on the keyboard, the system is not done.

### 5. APIs are forever

> "Once customers started building their applications and systems using our APIs, changing those APIs becomes impossible, as we would be impacting our customer's business operations."

Vogels restates the [[Bezos 2002 API Mandate]] principle from the perspective of 10 years of consequences. The mandate was right.

### 6. Know your resource usage

> "We had assumed that the storage and bandwidth were the resources we should charge for. After running for a while, we realized that the number of requests was an equally important resource."

The lesson behind the lesson: your initial cost model is probably wrong. Listen to the data, not the assumption.

### 7. Build security in from the ground up

> "The security team is not a group that does validation after something has been built. They must be partners on day one."

Security as a [[Bezos 2016 Day 1 Letter|Day 1]] discipline, not a gate at the end.

### 8. Encryption is a first-class citizen

> "Encryption is a key mechanism for customers to ensure that they are in full control over who has access to their data."

The principle behind KMS, S3 SSE, and many other services. The customer's data is the customer's data; the operator never has full custodianship of meaning.

### 9. The importance of the network

> "We have learned over time that we should not be afraid to develop our own hardware solutions to ensure our customers can achieve their goals."

The vertical integration argument applied to networking. AWS eventually built its own hardware because the off-the-shelf options didn't meet the latency/reliability budgets.

### 10. No gatekeepers

> "What's essential is that there are no gatekeepers on the AWS platform that tell our partners what they can and cannot do."

Platform philosophy: enable, don't curate. Connects to the "primitives not frameworks" principle from a different angle.

## What This Brain Takes From It

This post unlocks several [[Operating Principles]] citations that were paraphrased before:

- **Everything fails. Design for it.** Lesson 2 verbatim. Cites here.
- **APIs are forever.** Lesson 5. Confirms the [[Bezos 2002 API Mandate]] from the consequences side.
- **Mechanism over goodwill.** Lessons 4 (automate the operator out of the loop) and 7 (security as Day 1 partner, not gate) are both mechanism-design principles.
- **Build evolvable systems.** New principle worth adding: design so you can rebuild parts of the system while it's running.
- **Primitives not frameworks.** New principle. Useful in many product decisions, not just infrastructure.

## Cross-References

- [[Werner Vogels]]
- [[Bezos 2002 API Mandate]]: the seed decision this post harvests
- [[Bezos 2016 Day 1 Letter]]: same year, same company, philosophical companion
- [[Vogels Eventually Consistent]]: the engineering depth behind "everything fails"
- [[Operating Principles]]
- [[Persona]]
- [[Dean Latency Numbers]]: lessons 4 and 9 are downstream of the latency budgets the Dean numbers force

## Status

Mature. This post is one of the cleanest single sources for the Vogels operating frame.
