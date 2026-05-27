---
type: source
title: Vogels Working Backwards
address: c-000258
author: Werner Vogels
publication_year: 2006
url: https://www.allthingsdistributed.com/2006/11/working_backwards.html
raw_file: .raw/articles/vogels-working-backwards-2026-05-27.html
created: 2026-05-27
updated: 2026-05-27
tags:
  - source
  - blog-post
  - amazon
  - aws
  - product-process
  - working-backwards
status: mature
related:
  - "[[Werner Vogels]]"
  - "[[Vogels 10 Lessons from 10 Years of AWS]]"
  - "[[Bezos 2009 Letter]]"
  - "[[Working Backwards Book]]"
  - "[[Operating Principles]]"
  - "[[Persona]]"
---

# Vogels "Working Backwards" (November 2006)

[[Werner Vogels]]'s November 1, 2006 post on allthingsdistributed.com. The earliest primary-source description of Amazon's Working Backwards product-definition process. Predates *Working Backwards* the book (Bryar/Carr, 2021) by 15 years.

## Provenance

- Author: [[Werner Vogels]]
- Year: 2006 (November 1)
- URL: https://www.allthingsdistributed.com/2006/11/working_backwards.html
- Raw extract: [`.raw/articles/vogels-working-backwards-2026-05-27.html`](../../.raw/articles/vogels-working-backwards-2026-05-27.html) — full text HTML
- Fidelity: full-text (defuddled HTML, all quotes verbatim from Vogels post)

## Headline Takeaways

1. **Working Backwards is a four-document process.** Press release first; then FAQ; then customer experience description; then user manual.
2. **The point is to drive simplicity through customer focus.** "Start with your customer and work your way backwards until you get to the minimum set of technology requirements to satisfy what you try to achieve."
3. **Services as both software and org structure.** Amazon's fine-grained services represent both. Each service is "a small startup within the walls of a bigger company."

## Key Quotes (verbatim)

### The Process Definition

> "To ensure that a service meets the needs of the customer (and not more than that) we use a process called 'Working Backwards' in which you start with your customer and work your way backwards until you get to the minimum set of technology requirements to satisfy what you try to achieve. The goal is to drive simplicity through a continuous, explicit customer focus."

### The Four Steps (verbatim)

> "The product definition process works backwards in the following way: we start by writing the documents we'll need at launch (the press release and the faq) and then work towards documents that are closer to the implementation."

> "1. **Start by writing the Press Release**. Nail it. The press release describes in a simple way what the product does and why it exists — what are the features and benefits. It needs to be very clear and to the point. Writing a press release up front clarifies how the world will see the product — not just how we think about it internally.
>
> 2. **Write a Frequently Asked Questions document**. Here's where we add meat to the skeleton provided by the press release. It includes questions that came up when we wrote the press release. You would include questions that other folks asked when you shared the press release and you include questions that define what the product is good for. You put yourself in the shoes of someone using the product and consider all the questions you would have.
>
> 3. **Define the customer experience**. Describe in precise detail the customer experience for the different things a customer might do with the product. For products with a user interface, we would build mock ups of each screen that the customer uses. For web services, we write use cases, including code snippets, which describe ways you can imagine people using the product. The goal here is to tell stories of how a customer is solving their problems using the product.
>
> 4. **Write the User Manual**. The user manual is what a customer will use to really find out about what the product is and how they will use it. The user manual typically has three sections, concepts, how-to, and reference, which between them tell the customer everything they need to know to use the product. For products with more than one kind of user, we write more than one user manual."

### Service Ownership

> "In the fine grained services approach that we use at Amazon, services do not only represent a software structure but also the organizational structure. The services have a strong ownership model, which combined with the small team size is intended to make it very easy to innovate. In some sense you can see these services as small startups within the walls of a bigger company."

### The Outcome

> "Once we have gone through the process of creating the press release, faq, mockups, and user manuals, it is amazing how much clearer it is what you are planning to build. We'll have a suite of documents that we can use to explain the new product to other teams within Amazon. We know at that point that the whole team has a shared vision on what product we are going the build."

## What This Brain Takes From It

- **Working Backwards is older than the book.** This 2006 post is the canonical primary source. Cite this when discussing the practice.
- **The press release IS the spec.** "Writing a press release up front clarifies how the world will see the product — not just how we think about it internally." The press release operates as a forcing function for clarity that ordinary specs do not provide.
- **Four documents, not one.** The full Working Backwards practice is press release + FAQ + experience description + user manual. Many companies adopt just the press release and miss the FAQ as the document where the real hard questions get answered.
- **Services = org structure.** The Conway's-law point: the service decomposition is the team decomposition. "Small startups within the walls" is the operative phrase, and is the conceptual ancestor of two-pizza teams.
- **Drive simplicity through customer focus.** The point isn't the document; it's the customer-first thinking the document forces. Generalizes well beyond product launches.
- **Connects to the Bezos discipline.** [[Bezos 2009 Letter]]'s "start with customers and work backwards" applied to annual planning is the same move applied to a different artifact (goals instead of press releases).

## Cross-References

- [[Werner Vogels]] entity
- [[Vogels 10 Lessons from 10 Years of AWS]] (the platform-level retrospective)
- [[Bezos 2009 Letter]] (working backwards applied to annual goal-setting)
- [[Working Backwards Book]] (the 2021 Bryar/Carr book; this post is the 2006 primary source)
- [[Bezos 2017 Letter]] (the six-pager memo is the document substrate that supports this process)
- [[Operating Principles]], Write the memo before the meeting
- [[Persona]]

## Status

Mature, full-text. The four-step process and the "service = startup" framing are verbatim primary citations.
