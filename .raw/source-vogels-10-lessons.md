---
source_id: vogels-10-lessons-aws
title: "10 Lessons from 10 Years of Amazon Web Services"
author: Werner Vogels
publisher: All Things Distributed (allthingsdistributed.com)
publication_date: 2016-03
url: https://www.allthingsdistributed.com/2016/03/10-lessons-from-10-years-of-aws.html
fetch_method: WebFetch (summarized extraction with quoted highlights)
fetch_date: 2026-05-24
fidelity: extracts-not-full-text
license_note: Public engineering blog post. Quoted under fair use for research.
---

# Source, Vogels "10 Lessons from 10 Years of AWS" (March 2016)

## Opening Frame

"The epoch of AWS is the launch of Amazon S3 on March 14, 2006, now almost 10 years ago. Looking back over the past 10 years, there are hundreds of lessons that we've learned about building and operating services that need to be secure, reliable, scalable, with predictable performance at the lowest possible cost."

## The 10 Lessons (each with the most-quotable line)

### 1. Build evolvable systems

"The evolution of Amazon S3 could best be described as starting off as a single engine Cessna plane, but over time the plane was upgraded to a 737, then a group of 747s. All the while, we were refueling in midair."

### 2. Expect the unexpected

"Failures are a given and everything will eventually fail over time. We needed to build systems that embrace failure as a natural occurrence even if we did not know what the failure might be."

### 3. Primitives not frameworks

"We needed to be ultra-agile to make sure we were catering to our customers' needs. Offer customers a collection of primitives and tools, where they could pick and choose."

### 4. Automation is key

"A good litmus test has been that if you need to SSH into a server or an instance, you still have more to automate."

### 5. APIs are forever

"Once customers started building their applications and systems using our APIs, changing those APIs becomes impossible, as we would be impacting our customer's business operations."

### 6. Know your resource usage

"We had assumed that the storage and bandwidth were the resources we should charge for. After running for a while, we realized that the number of requests was an equally important resource."

### 7. Build security in from the ground up

"The security team is not a group that does validation after something has been built. They must be partners on day one."

### 8. Encryption is a first-class citizen

"Encryption is a key mechanism for customers to ensure that they are in full control over who has access to their data."

### 9. The importance of the network

"We have learned over time that we should not be afraid to develop our own hardware solutions to ensure our customers can achieve their goals."

### 10. No gatekeepers

"What's essential is that there are no gatekeepers on the AWS platform that tell our partners what they can and cannot do."

## Provenance Note

Extracted via WebFetch summary. Full post at URL above; well worth reading directly because each lesson is supported by specific operational anecdotes from the first decade of AWS.
