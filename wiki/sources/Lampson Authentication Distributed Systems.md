---
type: source
title: "Lampson Authentication Distributed Systems"
address: c-000285
source_type: paper
author: "[[Butler Lampson]]"
co_authors: "Martin Abadi, Michael Burrows, Edward Wobber"
year: 1992
publication_date: 1992-11-01
source_url: "https://users.soe.ucsc.edu/~sbrandt/221/Papers/Security/lampson-tocs92.pdf"
fidelity: full-text-summary
created: 2026-05-28
updated: 2026-05-28
tags:
  - source
  - lampson
  - engineer-planner
  - system-design
  - paper
  - security
status: mature
related:
  - "[[Butler Lampson]]"
  - "[[Operating Principles]]"
  - "[[Lampson Hints for Computer System Design]]"
  - "[[Engineer Planner Pole]]"
---

# Lampson Authentication Distributed Systems

"Authentication in Distributed Systems: Theory and Practice" by Lampson, Abadi, Burrows, and Wobber. ACM Transactions on Computer Systems, Vol. 10, No. 4, November 1992, pp 265-310. Preliminary version at the 13th ACM SOSP. Written at DEC Systems Research Center. 46 pages.

The paper applies the Hints discipline ("find the right abstraction, write a spec, show the implementation meets it") to distributed security. Its central contribution is the **speaks-for relation**: a single abstraction that explains principals, channels, roles, delegation, and groups.

## Abstract (verbatim)

> "We describe a theory of authentication and a system that implements it. Our theory is based on the notion of principal and a 'speaks for' relation between principals. A simple principal either has a name or is a communication channel; a compound principal can express an adopted role or delegated authority. The theory shows how to reason about a principal's authority by deducing the other principals that it can speak for; authenticating a channel is one important application. We use the theory to explain many existing and proposed security mechanisms."

## The access control model (verbatim, four elements)

1. **Principals**: sources for requests.
2. **Requests** to perform operations on objects.
3. **A reference monitor**: a guard for each object that examines each request and decides whether to grant it.
4. **Objects**: resources such as files, devices, or processes.

The factoring of the question:

> "Authentication answers the question 'Who said this?', and authorization answers the question 'Who is trusted to access this?'"

The reference monitor needs (a) the principal making the request and (b) the access rule, usually attached to the object as an **access control list** (ACL). It must **authenticate the channel** the request arrived on to deduce the principal responsible.

## Why distributed authentication is hard (verbatim list)

> "**Autonomy**: The path to the object from the principal ultimately responsible for the request may be long and may involve several machines that are not equally trusted. We might want the authentication to take account of this, say by reporting the principal as 'Abadi working through a remote machine' rather than simply 'Abadi'."

> "**Size**: The system may be much larger than a centralized one, and there may be multiple sources of authority for such tasks as registering users."

> "**Heterogeneity**: The system may have different kinds of channels that are secured in different ways. Some examples are encrypted messages, physically secure wires, and interprocess communication done by the operating system."

> "**Fault-tolerance**: Some parts of the system may be broken, off line, or otherwise inaccessible, but the system is still expected to provide as much service as possible."

## What the theory is good for (verbatim, the key methodological claim)

> "In any security system there are assumptions about authority and trust. The theory tells you how to state them precisely and what the rules are for working out their consequences. Once you have done this, you can look at the assumptions, rules, and consequences and decide whether you like them. If so, you have a clear record of how you got to where you are. If not, you can figure out what went wrong and change it."

This is the Hints paper's spec discipline applied to a domain where it had never been done. Before this paper, security was a pile of ad-hoc mechanisms (ACLs, capabilities, passwords, certificates). After this paper, all of them are special cases of one relation.

## The taxonomy of principals (verbatim)

Simple principals:
- **Named**: People (Lampson, Abadi), Machines (VaxSN12648), Roles (Manager, NFS-Server), Services (SRC-NFS), Groups (DEC-Employees).
- **Channels** (the only kind that can directly make statements): wires/IO ports, encrypted channels, network addresses.

Compound principals:
- **Principals in roles**: `Abadi as Manager`
- **Delegations**: `BurrowsWS for Burrows`
- **Conjunctions**: `Lampson ∧ Wobber`

## The speaks-for relation

The central abstraction. P **speaks for** Q (written P ⇒ Q) if every statement P makes can be treated as if Q made it. Then:

- **Authentication** is the deduction of which principals a channel speaks for.
- **Authorization** is the check that the deduced principal is in the ACL.
- **Delegation** is `BurrowsWS for Burrows`: the workstation speaks for Burrows on requests Burrows authorized it for.
- **Roles** are `Abadi as Manager`: the person Abadi acting in a specific named capacity.
- **Groups** are sets of principals; the group name speaks for any member's authorized statements.
- **Trusted Computing Base** is the set of principals you have decided to trust without further checking.

One relation, six security concepts. This is the 1983 hint **"Use a good idea again, instead of generalizing it"** applied with theoretical rigor.

## The example scenario (Figure 2, verbatim)

> "A user logs in to a workstation and runs a protected subsystem that makes a request to an object implemented by a server on a different machine. The server must decide whether to grant the request. We can distinguish the user, two machines, two operating systems, two subsystems, and two channels, one between the user and the workstation and one between the workstation and the server machine. We shall see how to take account of all these components in granting access."

The whole chain (user → workstation → OS → channel → server → OS → object) becomes a composition of speaks-for relations the reference monitor can evaluate.

## Channels: the foundational claim (verbatim)

> "A channel is the only kind of principal that can directly make statements to a computer. There is no direct path, for example, from a person to a program; communication must be over some channel, involving keystrokes, wires, terminal ports, networks, etc. Of course some of these channels, such as the IP address, are not very secure."

This is a precise statement of the trust boundary: every authentication ultimately reduces to "I trust this channel to speak for that principal", and the security of the channel determines the security of the deduction.

## Section structure

- §2 Concepts (principals, channels, statements, TCB, caching) — informal introduction with examples.
- §3 The theory — formal definition of speaks-for and the logic.
- §4 Secure channels.
- §5 Names for principals.
- §6 Roles and program loading.
- §7 Delegation.
- §8 Secure interprocess communication (efficient passing of principals on RPCs).
- §9 Access control uses authentication.

Each later section follows the same pattern: state the problem, give the theoretical analysis, describe the implementation (DEC's Taos system), comment on alternatives. This is the [[Lampson Hints for Computer System Design|1983 Hints paper]] structure applied at the chapter level.

## Why this matters for the mentor frame

This paper is Lampson at his most rigorous. The 1983 Hints paper is folk wisdom presented with self-deprecation; this paper is the same kind of person applying the same discipline to a domain where you cannot afford folk wisdom. The result is a foundational document for distributed security: it underlies SDSI, SPKI, modern capability systems, and the whole "principals and delegation" lineage in OS security.

It also shows the engineer-planner pole at full strength. The paper has theorems and proofs, but it never loses sight of the engineering question: can the implementation efficiently pass these principals around on RPC calls? Section 8 is the answer. Theory and practice in one paper.

## Frames cited

- **In any security system there are assumptions about authority and trust. The theory tells you how to state them precisely and what the rules are for working out their consequences.** Trust is a relation, not vibes.
- **A channel is the only kind of principal that can directly make statements to a computer.** Every authentication is ultimately a statement about a channel.
- **Authentication answers 'Who said this?'; authorization answers 'Who is trusted to access this?'** These are different questions; don't conflate them.
- **One relation (speaks-for) replaces six ad-hoc mechanisms.** Find the right abstraction.

## Connections

- [[Butler Lampson]] mentor anchor
- [[Lampson Hints for Computer System Design]] (the methodological parent)
- [[Operating Principles]]
- [[Engineer Planner Pole]]
- [[Leslie Lamport]] (Lamport's logic-of-authentication work is adjacent; he and Lampson were both at SRC)
- Adjacent: capability systems, SDSI, SPKI, modern OAuth principal frameworks
