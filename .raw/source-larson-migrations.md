# Source: Will Larson, "Migrations: The Sole Scalable Fix to Tech Debt"

- URL: https://lethain.com/migrations/
- Author: Will Larson
- Fetched: 2026-05-28
- Fidelity: WebFetch summary with verbatim quotes

## Why Migrations Matter

Migrations are "usually the only available avenue to make meaningful progress on technical debt." Most tools support only "about one order of magnitude of growth" before becoming ineffective, making migrations inevitable as companies scale.

Technical debt reduction typically occurs through individual engineer efforts on easy tasks. However, substantial progress requires many teams collaborating. Migrations are the primary mechanism for meaningful debt reduction. Without effective migration capability, organizations accumulate unsustainable technical debt.

## The Three-Phase Migration Playbook

### Phase 1: Derisk

Validate the approach with minimal risk and cost.

- Create a design document and iterate with teams expected to face the greatest challenges.
- Test against "the next six to twelve months of roadmap."
- Embed within "the most challenging one or two teams" rather than starting with easy migrations.
- Build trust: "each team that endorses a migration is making a bet on you."

### Phase 2: Enable

Reduce organizational burden through automation and tooling.

- "Programmatically migrate the easy ninety-percent" through automated solutions.
- Develop "self-service tooling and documentation" that allow teams to implement changes independently.
- Ensure tools are "incremental and reversible: folks should be able to immediately return to previous behavior."

### Phase 3: Finish

Complete the migration to 100% adoption.

- "Stopping the bleeding" by ensuring new code uses the new approach through linters or updated documentation.
- Generate tracking tickets and push migration status to leadership.
- The migration team handles remaining edge cases themselves.
- Celebrate completion rather than just the commencement of migrations.
