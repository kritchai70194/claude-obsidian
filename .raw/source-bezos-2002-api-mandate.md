---
source_id: bezos-2002-api-mandate
title: "The Amazon API Mandate (2002, via Steve Yegge's 2011 leaked memo)"
author: Jeff Bezos (original 2002 internal memo); Steve Yegge (2011 public Google+ post quoting it)
publisher: Steve Yegge / Google+ (originally), preserved as GitHub gist
publication_date: 2002 (original mandate); 2011 (Yegge's public post)
url: https://gist.github.com/chitchcock/1281611
fetch_method: WebFetch (summarized extraction)
fetch_date: 2026-05-24
fidelity: extracts-not-full-text
license_note: Yegge's post was originally meant as an internal Google rant accidentally made public. Widely cited as the canonical public source for the Bezos API mandate.
---

# Source — Bezos API Mandate (2002)

## The Five Core Points (verbatim, as quoted by Yegge)

1. "All teams will henceforth expose their data and functionality through service interfaces."
2. "Teams must communicate with each other through these interfaces."
3. "There will be no other form of interprocess communication allowed: no direct linking, no direct reads of another team's data store, no shared-memory model, no back-doors whatsoever."
4. "It doesn't matter what technology they use. HTTP, Corba, Pubsub, custom protocols — doesn't matter."
5. "All service interfaces, without exception, must be designed from the ground up to be externalizable."

## The Enforcement Clause

"Anyone who doesn't do this will be fired."

## Yegge's Closing Gloss

Yegge adds a humorous "Thank you; have a nice day!" as a seventh point, then clarifies it is his own joke — Bezos was famously curt and did not soften the original directive.

## Historical Consequence

This 2002 mandate is widely credited as the architectural decision that, when followed through over the next several years, produced the service-oriented infrastructure that became AWS. The decision to make every internal interface "externalizable from day one" meant Amazon had already done the hard work of building reusable services by the time the cloud-services market existed.

---

## Provenance Note

This is a secondary source: Yegge quoting Bezos. No verified primary document of the original memo has been published. Treat the wording as Yegge's reconstruction from memory, not certified verbatim. The five-point structure and "anyone who doesn't will be fired" phrasing are consistent across multiple independent accounts.
