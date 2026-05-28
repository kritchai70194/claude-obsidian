# Authentication in Distributed Systems: Theory and Practice (Lampson, Abadi, Burrows, Wobber 1992)

Source: https://users.soe.ucsc.edu/~sbrandt/221/Papers/Security/lampson-tocs92.pdf
ACM Transactions on Computer Systems, Vol. 10, No. 4, November 1992, pp 265-310.
Preliminary version: 13th ACM SOSP.
Fetched: 2026-05-28 via pypdf extraction.
Authors: Butler Lampson, Martin Abadi, Michael Burrows, Edward Wobber (all then at Digital Equipment Corp. Systems Research Center).

## Abstract (verbatim)

> "We describe a theory of authentication and a system that implements it. Our theory is based on the notion of principal and a 'speaks for' relation between principals. A simple principal either has a name or is a communication channel; a compound principal can express an adopted role or delegated authority. The theory shows how to reason about a principal's authority by deducing the other principals that it can speak for; authenticating a channel is one important application. We use the theory to explain many existing and proposed security mechanisms. In particular, we describe the system we have built. It passes principals efficiently as arguments or results of remote procedure calls, and it handles public and shared key encryption, name lookup in a large name space, groups of principals, program loading, delegation, access control, and revocation."

## The access control model

Four elements:
- **Principals**: sources for requests.
- **Requests** to perform operations on objects.
- **A reference monitor**: a guard for each object that examines each request for the object and decides whether to grant it.
- **Objects**: resources such as files, devices, or processes.

> "Thus authentication answers the question 'Who said this?', and authorization answers the question 'Who is trusted to access this?'"

## Why distributed makes it hard (verbatim list)

> "**Autonomy**: The path to the object from the principal ultimately responsible for the request may be long and may involve several machines that are not equally trusted."

> "**Size**: The system may be much larger than a centralized one, and there may be multiple sources of authority for such tasks as registering users."

> "**Heterogeneity**: The system may have different kinds of channels that are secured in different ways. Some examples are encrypted messages, physically secure wires, and interprocess communication done by the operating system."

> "**Fault-tolerance**: Some parts of the system maybe broken, off line, or otherwise inaccessible, but the system is still expected to provide as much service as possible."

## What the theory is good for (verbatim)

> "In any security system there are assumptions about authority and trust. The theory tells you how to state them precisely and what the rules are for working out their consequences. Once you have done this, you can look at the assumptions, rules, and consequences and decide whether you like them. If so, you have a clear record of how you got to where you are. If not, you can figure out what went wrong and change it."

This is the Hints paper's spec-discipline applied to security: trust is not vibes, it is a relation you can write down and check.

## Principals taxonomy (verbatim)

Simple principals:
- **Named principals**: People (Lampson, Abadi), Machines (VaxSN12648, 4thFloorPrinter), Roles (Manager, Secretary, NFS-Server), Services (SRC-NFS, X-server), Groups (SRC, DEC-Employees).
- **Channels**: the only kind of principal that can directly make statements to a computer. Wires/IO ports (Terminal14), Encrypted channels (DES with key #571897), Network addresses (IP 16.4.0.32).

> "A channel is the only kind of principal that can directly make statements to a computer. There is no direct path, for example, from a person to a program; communication must be over some channel, involving keystrokes, wires, terminal ports, networks, etc. Of course some of these channels, such as the IP address, are not very secure."

Compound principals:
- **Principals in roles**: Abadi as Manager.
- **Delegations**: BurrowsWS for Burrows.
- **Conjunctions**: Lampson ∧ Wobber.

## The "speaks for" relation

The central abstraction. A principal P speaks for Q (written P ⇒ Q) if every statement P makes can be treated as if Q made it. Authentication is then the deduction of who a channel speaks for. Authorization checks whether that principal is in the ACL.

This factoring (channel → principal via speaks-for; principal → access via ACL) is itself an instance of the Hints paper hint "Use a good idea again, instead of generalizing it": a single relation handles delegation, roles, groups, and named principals.

## The example scenario (Figure 2)

> "A user logs in to a workstation and runs a protected subsystem that makes a request to an object implemented by a server on a different machine. The server must decide whether to grant the request. We can distinguish the user, two machines, two operating systems, two subsystems, and two channels, one between the user and the workstation and one between the workstation and the server machine. We shall see how to take account of all these components in granting access."

## Section structure

- §2 Concepts (principals, channels, statements, trusted computing base, caching)
- §3 The theory (formal definition of speaks-for and the logic)
- §4 Secure channels
- §5 Names for principals
- §6 Roles and program loading
- §7 Delegation
- §8 Secure interprocess communication (efficient passing of principals on RPCs)
- §9 Access control uses authentication

## Why this matters for Lampson as a mentor

This paper applies the 1983 Hints discipline to a hard new domain (distributed security):
- Find the right abstraction (principal, channel, speaks-for).
- Write a spec.
- Show how the implementation meets it.
- Reduce ten security problems to one relation.

It is the engineering counterpart to Lamport's distributed-systems papers: where Lamport gives the algorithm (Paxos, Byzantine generals), Lampson gives the access-control framing.

## Cited / influential

- Saltzer's protection model (the access control model is the standard reference Lampson formalizes here).
- Has been the foundation for Taos, SDSI, SPKI, modern capability systems.
