---
type: concept
title: AI Company Defensibility
address: c-000187
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - ai-native
  - defensibility
  - moat
  - synthesis
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Sam Altman]]"
  - "[[Dario Amodei]]"
  - "[[Demis Hassabis]]"
  - "[[7 Powers]]"
  - "[[Aggregation Theory]]"
  - "[[AI-Native Economics]]"
  - "[[seed-corpus-ai-native]]"
---

# AI Company Defensibility

Synthesis page on how [[Hamilton Helmer]]'s 7 Powers framework and [[Ben Thompson]]'s [[Aggregation Theory]] apply (or break) for AI-native companies. The brain's existing defensibility frame ("Is this defensible?", decision frame 9) was built for pre-AI tech; this page extends it.

The short version: **AI companies are defensible at three distinct layers (foundation, workflow, distribution), and most "AI wrapper" companies are not defensible at any of them**.

---

## Layer 1: Foundation Model Defensibility

The model-as-product companies (OpenAI ChatGPT, Anthropic Claude.ai, Google Gemini) compete at this layer. Defensibility sources:

### Scale Economies + Cornered Resource (Helmer)

Training a frontier model costs $1B+ by 2025, $10B+ by 2027. Only 3-5 organizations globally can afford this. The cornered resource is GPU capacity + power + capital, not technology IP.

The Power exists but is fragile:
- New entrants can leapfrog with better algorithms (DeepSeek 2025 showed a $5M training run could approach frontier capability on specific benchmarks).
- Open-source models (Llama, DeepSeek, Mistral) commoditize the model itself, leaving differentiation only at the distribution layer.
- Inference cost is the recurring bill, not training cost; pure compute scaling does not automatically produce profitable inference.

### Process Power (Helmer)

The accumulated training methodology, fine-tuning approaches, safety techniques (Constitutional AI, RSP), and team expertise. Hard to replicate even with money because tacit knowledge transfers slowly.

Anthropic's Claude personality + safety profile is process power; OpenAI's RLHF expertise built over years is process power. New entrants take 18-24 months to replicate even with capital.

### Brand (Helmer)

ChatGPT became a verb in 2023. The brand carries 70%+ of consumer market share even as competitors match capability. Brand decays slowly but is reachable for new entrants with sustained capability + distribution.

---

## Layer 2: Workflow Defensibility

Companies that embed AI into a vertical workflow: Notion AI, Cursor, Harvey, Glean, Carry1st, Hippocratic AI.

### Switching Costs (Helmer)

The customer's data, integrations, and team habits inside the workflow create switching costs. The AI is replaceable; the workflow + data + integration depth is not.

Examples:
- Notion AI: the user's documents, databases, and team workflows are inside Notion; AI features are an enhancement but the moat is the workflow lock-in.
- Cursor: the user's codebase + IDE configuration + team's pull request culture; AI completion is replaceable but the editor is not.
- Linear AI: the user's project management workflows are inside Linear; AI is a feature.

### Network Economies (Helmer)

Two-sided networks where AI improves the network are particularly defensible. Hospitality matching (Airbnb if it adds AI matching), B2B procurement matching, talent matching.

### Process Power (Helmer)

Workflow companies that have built up domain-specific knowledge over years (Harvey for legal, Hippocratic for healthcare, Carry1st for African mobile games) have process power that pure AI wrappers can't replicate.

---

## Layer 3: Distribution Defensibility

Companies that own a distribution channel and add AI: Microsoft Copilot, Google Workspace AI, Apple Intelligence, Adobe Firefly, ServiceNow AI.

### Aggregation (Thompson)

Microsoft owns Office distribution; AI is a feature that competitors with better models cannot reach. Even if a startup builds better AI writing, it doesn't have 365M Office users.

### Counter-Positioning (Helmer)

Adobe's Firefly is trained on licensed content, counter-positioning against OpenAI's DALL-E (legally ambiguous training data). Enterprise customers who can't use ambiguous-IP image generation buy Firefly. This is hard for OpenAI to copy without abandoning their training strategy.

### Bundle Economics

Microsoft's Copilot at $30/seat/month bundled with Microsoft 365 is cheaper than standalone alternatives even if those alternatives have better models. The bundle is structural and the standalone product cannot match it.

---

## Why Most "AI Wrappers" Are Not Defensible

The 2023-2024 AI startup wave produced thousands of "AI for X" companies. Most are not defensible because:

1. **No foundation model edge** (they use OpenAI/Anthropic APIs; capability comes from foundation models, not the wrapper).
2. **No workflow lock-in** (the wrapper is a thin layer; users can switch to ChatGPT directly).
3. **No distribution advantage** (they're a website; customers are acquired through paid marketing).
4. **No data advantage** (they don't have proprietary data the foundation models don't already have access to via internet training).

The diagnostic question: **if OpenAI launched a feature equivalent to your product tomorrow, would you survive?**

If the answer is no, the company is not defensible. The wrapper layer fills a temporary niche while foundation models lack a specific feature; the foundation models close the gap; the wrapper dies.

The few defensible "AI for X" companies:
- Have proprietary data (legal documents, medical records, internal company data) that foundation models can't access.
- Have proprietary workflow integration (deep integration with non-API tools).
- Have proprietary distribution (already-installed customer base before AI features).
- Operate in regulated industries where compliance + trust outweigh capability.

---

## The Updated Defensibility Frame for AI

The decision frame **"Is this defensible?"** (frame 9 in [[Persona]]) needs an AI-specific addendum:

For AI-native companies, ask:
1. **Which layer are we?** Foundation, workflow, distribution.
2. **Which Powers (Helmer) do we have at our layer?** Scale Economies, Network Economies, Counter-Positioning, Switching Costs, Branding, Cornered Resource, Process Power.
3. **What happens if foundation model capability doubles in 12 months?** ([[AI-Native Economics]] resilience test)
4. **What happens if our foundation model partner builds our product?** (OpenAI/Anthropic vertical-integration risk)
5. **What data, distribution, or workflow do we have that the foundation models cannot access?**

If the answers to 3, 4, and 5 are weak, the company is fragile. If they are strong, the company has real defensibility.

---

## The Capability Convergence Thesis

> By 2027, the top 5 foundation models will be within 10-20% capability of each other on most general benchmarks. ([[Sam Altman]] + [[Dario Amodei]] implied)

The implication: capability convergence at the foundation layer is likely. Defensibility shifts upward toward workflow and distribution layers. The model itself becomes a commodity (like compute or electricity).

This rhymes with [[Clayton Christensen]] Disruption (the commoditized layer attracts new entrants who compete on cost) and [[Ben Thompson]] Aggregation (the aggregator owns the user relationship, not the supplier).

For founders building today: assume model capability convergence by 2027. Build defensibility at the workflow or distribution layer where it can persist. Don't bet the company on "we'll always have the best model".

---

## AI Aggregators

A specific class of AI companies that combine Layer 1 + Layer 3: ChatGPT (model + consumer distribution), Claude (model + Anthropic+AWS+Google distribution), Gemini (model + Google distribution).

These are emerging as the **AI Aggregators** in the Thompson Aggregation Theory sense:
- Direct relationship with users (the chat interface).
- Zero marginal cost for serving users (within inference economics).
- Demand-driven multi-sided networks (the more users, the more data, the better the next model).

The AI Aggregators are the most powerful new player class in 2024-2025. They will likely consolidate further as smaller models cannot match their feature sets (voice, vision, agents, tools).

---

## Operating Principles Added

In [[Operating Principles]]:

- **Three layers of AI defensibility: foundation, workflow, distribution.** (synthesis)
- **Most AI wrappers are not defensible because they have no edge at any layer.** (synthesis)
- **If OpenAI launched a feature equivalent to your product tomorrow, would you survive? If no, you are not defensible.** (Altman implied)
- **Capability convergence at the foundation layer is likely by 2027; build defensibility above it.** ([[Amodei Lex Fridman]] implied)
- **AI Aggregators (model + distribution) are the new dominant player class.** (Thompson framework applied)

---

## Decision Frame Added

- **"Is the model the product, the wrapper, or the workflow?"** (positioning trichotomy, synthesis)

---

## Connections

- [[Sam Altman]], [[Dario Amodei]], [[Demis Hassabis]] are the three mentors
- [[AI-Native Economics]] is the cost-structure companion concept
- [[7 Powers]] is extended at the AI-native layer
- [[Aggregation Theory]] gets the AI Aggregator extension
- Cross-pole: [[Hamilton Helmer]] framework applied; [[Ben Thompson]] Aggregation Theory applied; [[Andrew Chen]] Cold Start Problem (atomic networks) applies to AI workflow products
