---
type: concept
title: AI-Native Economics
address: c-000186
created: 2026-05-26
updated: 2026-05-26
tags:
  - concept
  - ai-native
  - economics
  - synthesis
status: mature
related:
  - "[[Persona]]"
  - "[[Operating Principles]]"
  - "[[Sam Altman]]"
  - "[[Dario Amodei]]"
  - "[[Demis Hassabis]]"
  - "[[Andrej Karpathy]]"
  - "[[AI Company Defensibility]]"
  - "[[seed-corpus-ai-native]]"
---

# AI-Native Economics

Synthesis page on what makes AI-native companies economically different from previous tech generations. The variable cost per inference, scaling laws as moat, model-as-commodity vs differentiator question, and the wrapper-vs-platform-vs-workflow trichotomy.

Most pre-2023 strategic frameworks ([[Aggregation Theory]], [[7 Powers]], [[Capital Strategy]]) need adjustment for AI-native markets. Some apply directly (Aggregation still describes attention economics); some need rethinking (Scale Economies operate differently when training is a one-time fixed cost and inference is a per-call variable cost).

---

## The Two Cost Curves

AI-native companies operate on two distinct cost curves that don't exist in software:

### Training cost (fixed, large, periodic)

> Each Claude model generation is roughly 10x more expensive to train than the previous. By 2027 a training run is expected to cost $10B+. ([[Amodei Lex Fridman]] applied)

- Claude 3 training: ~$50-100M (estimated public range).
- Claude 3.5 / GPT-4 training: ~$100-500M.
- 2025-2026 frontier models: $1B+ training runs.
- 2027-2028 frontier models: $10B+ training runs.

The implication: only 3-5 organizations globally can afford frontier training runs by 2027. Capability concentration is structural, not competitive.

### Inference cost (variable, per-request)

Unlike software, where marginal cost is near zero, AI has real per-request cost: GPUs running for milliseconds to seconds.

Cost per million tokens (2024-2025 ranges):
- Frontier models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro): $1-15 per million tokens
- Mid-tier (Claude 3.5 Haiku, GPT-4o-mini): $0.10-1
- Open-source self-hosted: depends on hardware, often $0.05-0.50

The implication: AI products have gross margins of 20-70%, not the 70-90% gross margins of software. This is a fundamentally different business model. Pricing must account for inference cost; "unlimited" usage tiers are economically dangerous.

---

## The Scaling Laws as Moat

> Capability scales predictably with compute + data + algorithmic improvements. ([[Amodei RSP Constitutional AI]] cross-reference)

The 2020 Kaplan et al. scaling laws (and subsequent Chinchilla, etc.) made model capability roughly predictable given compute budget. This created a counterintuitive moat structure:

- **Higher capability = more compute = more capital.** The capability ladder is climbable only by organizations that can raise $1B+ for training.
- **Algorithmic improvements compress this somewhat** (a better-trained smaller model can match a worse-trained larger one), but the compute floor still rises.
- **Capability gaps persist for ~12-18 months** between frontier and second tier.

The Power this creates (in Helmer's terms): Scale Economies + Cornered Resource (compute capacity + data) + Process Power (training methodology accumulated over years). The moat is real but only at the foundation model layer. Above the model layer (apps, wrappers, workflows), the moat is much weaker.

---

## Model as Commodity vs Differentiator

The strategic question every AI-native company must answer:

**Is the model the product, or the input to the product?**

### Model-as-Product

Examples: OpenAI's ChatGPT, Anthropic's Claude.ai, Google Gemini.

- The model is the interface; user pays for access to model capability.
- Margins depend on inference economics; pricing must cover variable cost.
- Defensibility: scaling laws, training capability, brand.
- Risk: as model capabilities converge, the product becomes commoditized; users defect to whichever model is cheaper/better.

### Model-as-Input (Wrapper)

Examples: most "AI for X" startups in 2023-2024.

- The model is OpenAI's or Anthropic's; you build the UX, the workflow, the integrations on top.
- Margins depend on adding value beyond the model API (workflows, data integration, domain expertise).
- Defensibility: workflow integration, data moats, customer relationships.
- Risk: foundation model API providers could vertical-integrate; or the underlying model becomes the product (ChatGPT now has Voice + Code Interpreter + custom GPTs).

### Model-as-Input (Workflow)

Examples: Notion AI, Cursor, Linear AI, GitHub Copilot.

- The product is the workflow; AI enhances it.
- Margins depend on the underlying workflow's pricing model; AI is a feature, not the product.
- Defensibility: workflow lock-in, data, network effects.
- Risk: AI capabilities improve and the workflow becomes less necessary (the model can navigate the customer's tools directly).

The trichotomy resolves through positioning: name explicitly which of the three you are, and design the company accordingly.

---

## Compute as the New Oil

> Compute is the new oil: foundation model training and inference require unprecedented capital outlays. Companies that own compute have structural advantages. ([[Sam Altman]] thesis applied)

The supply chain:

- **NVIDIA** controls 80%+ of training GPU supply (H100, B100, B200). Margins are 70%+ on each card.
- **TSMC** manufactures the chips; capacity expansion takes 3-5 years per new fab.
- **Microsoft Azure, Google Cloud, AWS** own the data centers; capacity is the binding constraint, not capital.
- **Power supply** is increasingly the binding constraint at the data center level (2-5 GW campuses now planned; power transmission and substation construction lag).

The implication: vertically-integrated players (Google, Microsoft via OpenAI partnership, Anthropic via AWS+Google partnership) have structural advantages over pure-play model companies.

---

## The AGI Timeline Trichotomy

The three named voices in this pole give different timelines:

- **Altman:** Superintelligence ~2030. AGI capability rapidly compounds; the economic transition is sudden.
- **Amodei:** "Powerful AI" by 2026-2027. The compressed century thesis (100 years of progress in 5-10 years if it goes well).
- **Hassabis:** AGI "5-10 years from 2023" → ~2028-2033. AGI through scientific breakthroughs requires both compute and algorithmic progress.

The actual timeline matters less than the strategic implication: **plan for AGI within the company's relevant strategic horizon**. If you're building a company expected to have product-market fit by 2027, your strategy must account for foundation model capability doubling at least once in that period.

---

## The Decision Frame for AI-Native Companies

**"What's our edge if foundation model capability doubles in 12 months?"** ([[Dario Amodei]] resilience test)

The test forces the AI-native company to articulate the source of its edge:

- Better data (Bloomberg AI vs general models)
- Better workflow integration (Cursor for code, Harvey for legal)
- Better distribution (already-installed software like Notion, Linear)
- Better trust/regulation (healthcare, defense, finance)
- Better specific capability (fine-tuned for vertical that general models do poorly)

If the answer is "we'll be better at prompting" or "we have better UX", the company is fragile to capability progress; the model improvement will eat the edge.

---

## Operating Principles Pulled From This Page

In [[Operating Principles]] new "AI-Native" section (or appended to Strategic Durability). Sample:

- **AI gross margins are 20-70%, not 70-90%.** ([[Sam Altman]] + [[Dario Amodei]] cost economics)
- **Foundation model training cost rises ~10x per generation.** ([[Amodei Lex Fridman]])
- **Capability concentration at frontier: only 3-5 organizations by 2027.** ([[Sam Altman]])
- **Compute is the new oil; vertical integration matters.** ([[Sam Altman]])
- **The model is either the product, the input wrapper, or the workflow feature; pick one explicitly.** (synthesis)
- **What's our edge if foundation model capability doubles in 12 months?** ([[Dario Amodei]] resilience test)
- **Scaling laws are real but partial moats; pure model-layer defense is weakest above the foundation tier.** ([[Demis Hassabis]] research strategy)

---

## Decision Frame Added

- **"What's our edge if foundation model capability doubles in 12 months?"** ([[Dario Amodei]])

---

## Connections

- [[Sam Altman]], [[Dario Amodei]], [[Demis Hassabis]] are the three anchors
- [[Andrej Karpathy]] is the engineering side of this pole
- [[AI Company Defensibility]] is the moat-focused companion concept
- Cross-pole: [[Hamilton Helmer]] 7 Powers framework needs adaptation for AI markets (Scale Economies + Cornered Resource + Process Power at foundation layer); [[Ben Thompson]] Aggregation Theory adjusts at the AI-Aggregator level (ChatGPT as the new search front-end)
