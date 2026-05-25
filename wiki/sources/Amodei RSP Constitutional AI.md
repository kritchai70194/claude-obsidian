---
type: source
title: Amodei RSP Constitutional AI
address: c-000179
source_type: paper
author: "[[Dario Amodei]]"
publication: Anthropic + arXiv
publication_date: 2022-2024 (Constitutional AI paper Dec 2022; RSP first published Sep 2023, updated through 2024)
url: https://www.anthropic.com/responsible-scaling-policy
fidelity: extracts
created: 2026-05-26
updated: 2026-05-26
tags:
  - source
  - paper
  - ai-native
  - anthropic
  - safety
  - alignment
  - rsp
  - constitutional-ai
status: developing
related:
  - "[[Dario Amodei]]"
  - "[[Operating Principles]]"
  - "[[seed-corpus-ai-native]]"
  - "[[Amodei Machines of Loving Grace]]"
  - "[[Amodei Anthropic Launches]]"
---

# Amodei RSP Constitutional AI

Combined source covering Anthropic's two flagship safety artifacts: the **Constitutional AI** methodology (paper published December 2022, arXiv:2212.08073) and the **Responsible Scaling Policy** (first published September 2023, updated through 2024, available at anthropic.com/responsible-scaling-policy). Both are public, both are operational at Anthropic, and both are widely cited as the templates for safety-focused frontier AI development.

## Part 1: Constitutional AI

### The Problem

Reinforcement Learning from Human Feedback (RLHF) is the standard alignment technique for large language models: humans rate model outputs, the model is fine-tuned toward higher-rated outputs. RLHF works but has three problems. It is expensive (humans are slow and inconsistent). It is opaque (the model learns to optimize for human approval, not for articulable principles). And it is brittle (small changes in rater pool produce large changes in model behavior).

### The Method

Constitutional AI replaces most of the human-rating loop with a self-critique loop against a written constitution.

The constitution is a written document of principles. Anthropic's published examples include excerpts from the UN Universal Declaration of Human Rights, plus Anthropic-specific principles on helpfulness, harmlessness, and honesty.

The training loop runs in two stages:

**Stage 1, supervised learning from self-critique (SL-CAI).** A base model generates a response to a prompt. A second pass through the same model critiques the response against the constitution ("does this response violate any of the principles? If so, how?"). A third pass revises the response based on the critique. The revised response becomes the training target.

**Stage 2, reinforcement learning from AI feedback (RLAIF).** The model generates pairs of responses. A separate model (also trained against the constitution) ranks the pair. The base model is fine-tuned toward the preferred responses. No humans in the inner loop.

### Why It Matters

Three claims from the Constitutional AI paper:

> Constitutional AI methods can be used to train a less harmful but more helpful AI assistant without using any human feedback labels for harms.

The cost claim: training is cheaper because human labels (the expensive component of RLHF) are replaced by AI labels.

The transparency claim: the model can articulate why it refuses a request, because the refusal is grounded in a specific principle from the constitution rather than in opaque human preference.

The scalability claim: Constitutional AI scales with model capability. As the base model gets smarter, its self-critique gets sharper, and the alignment improves. RLHF does not scale this way (a smarter model just gets better at gaming human raters).

### Operational Result

Claude (every version since Claude 1) is trained with Constitutional AI as the primary alignment method. The published constitution evolves between versions but remains anchored on the same three goals: helpfulness, harmlessness, honesty.

## Part 2: Responsible Scaling Policy (RSP)

### The Problem

Frontier AI labs are under structural pressure to ship faster than their safety work matures. Without a public, predefined commitment to safety actions at specific capability thresholds, "we will be careful" is an unfalsifiable statement. Each lab will define "careful" in whatever way suits their next release.

### The Method

RSP is a public ladder of **AI Safety Levels (ASL)** with predefined actions at each level. As a model's capabilities are demonstrated to cross a threshold (via standardized evaluations), Anthropic commits to specific safety measures or to pausing further development until the measures are in place.

The four levels (as of the 2024 update):

**ASL-1.** Systems that pose no meaningful catastrophic risk. Small, narrow, or already-superseded models. Standard ML practices apply.

**ASL-2.** Current frontier models (Claude 3.5, GPT-4-class). Show early signs of dangerous capability (e.g., providing some uplift on bioweapon-related questions) but not enough to provide meaningful uplift over existing resources (Google search). Standard responsible-deployment measures apply: red-teaming, safety fine-tuning, refusal training, monitoring.

**ASL-3.** Models that provide meaningful uplift on catastrophic-risk vectors. Examples: substantial bioweapon synthesis assistance, autonomous offensive cyber capabilities, or autonomous self-replication. At this level, Anthropic commits to specific containment measures (hardened model weights, restricted API access, enhanced red-teaming) and will not deploy externally without them.

**ASL-4+.** Models that approach or exceed broad human-level capability in dangerous domains. At this level, Anthropic commits to pausing capability development until alignment research catches up.

The published policy includes specific evaluation protocols for each transition. Anthropic commits to running these evaluations before training the next-generation model is complete, so that the decision to scale further is informed by current capability data.

### Why It Matters

Three claims from the RSP:

> If we cannot meet the safety commitments at a given ASL, we will pause further capability development until we can.

The commitment claim: predefined thresholds + predefined actions are a stronger commitment than "we will be careful."

The industry-standard claim: by publishing the RSP, Anthropic creates a template that other labs can adopt or that regulators can codify. OpenAI's Preparedness Framework (Dec 2023) and Google DeepMind's Frontier Safety Framework (May 2024) both follow the RSP template.

The "race to the top" claim: if safety becomes a competitive standard, the market shifts from "ship the most capable model" to "ship the most capable model that meets the safety bar." Anthropic's strategic bet is that this shift is achievable and that Anthropic is positioned to lead it.

## Connection to "Machines of Loving Grace"

The two artifacts are the operational substrate of the [[Amodei Machines of Loving Grace]] thesis. Constitutional AI is how you make models that are useful and articulately safe. RSP is how you avoid deploying models whose risks outrun the safety work. Together they describe how the compressed century becomes plausible rather than reckless.

## Principles Cited From This Source

- **Self-critique against written principles scales better than human feedback alone.** Constitutional AI as alignment infrastructure.
- **Predefined capability thresholds + predefined actions beat ad hoc judgment.** RSP as a template for safety commitments.
- **Transparent refusal beats opaque refusal.** A model that can cite a principle is more trustworthy than one that refuses without explanation.
- **Safety can be a competitive standard.** Race-to-the-top thesis.

## Connections

- [[Dario Amodei]] author and mentor anchor
- [[Operating Principles]]
- [[seed-corpus-ai-native]] source Am2
- [[Amodei Machines of Loving Grace]] foundational; this source is the operational substrate of that essay's optimism
- [[Amodei Anthropic Launches]] adjacent; product strategy expresses these methodologies
