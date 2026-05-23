---
type: meta
title: "Lint Report 2026-05-24"
created: 2026-05-24
updated: 2026-05-24
tags:
  - meta
  - lint
status: developing
---

# Lint Report: 2026-05-24

## Summary

- Pages scanned: 46
- Issues found: 3 errors, 4 warnings, ~14 informational
- Auto-fixed: 0
- Needs review: all

Headline issues:

1. **Three post-rollout concept pages are missing addresses** (autoresearch output from 2026-04-24 was filed without running the `c-NNNNNN` allocator). Errors per DragonScale Mechanism 2 policy.
2. **Six likely-real dead wikilinks** in three pages (mostly from the 2026-04-10 backlink-empire session frontmatter, plus a missing E-commerce SEO entity referenced from two pages).
3. **Tiling check (Mechanism 3) cannot run** on this machine: `scripts/tiling-check.py` uses PEP 604 union syntax (`Path | None`) which requires Python 3.10+, but `/usr/bin/python3` is 3.9.6. Out of scope for the vault lint; tracking as an infra item.
4. Twelve pages are missing `created:`, mostly long-lived meta pages. One file (`wiki/meta/tiling-report-2026-04-24.md`) has no frontmatter at all.

## Orphan Pages

Pages with zero inbound wikilinks:

- [[2026-04-10-backlink-empire-session]]: real orphan. Suggest linking from [[index]] under "Recent sessions" or from [[2026-04-14-claude-seo-v190-session]] (the follow-up SEO work).
- [[fold-k3-from-2026-04-23-to-2026-04-24-n8]]: fold artifact. Expected; folds are write-once log rollups. No action.
- [[tiling-report-2026-04-24]]: meta report. Expected; the lint report format embeds tiling reports via wikilink only after they exist. The current `wiki/meta/dashboard.md` does not reference per-date tiling reports. Consider listing the most recent tiling and lint reports in the dashboard.

## Dead Links

### Real (page does not exist and is not a canvas/base)

- [[E-commerce SEO]]: referenced in [[Claude SEO]] frontmatter and [[2026-04-14-claude-seo-v190-session]] frontmatter. No matching page. Suggest: create a stub entity page under `wiki/entities/` or remove both references.
- [[AI Marketing Hub Cover Images Canvas]]: referenced in [[overview]] as a canvas asset. No file exists under `wiki/` or `wiki/canvases/`. Suggest: create the canvas or remove the bullet.
- [[Karpathy LLM Wiki Pattern]]: referenced in [[2026-04-10-backlink-empire-session]] frontmatter. The canonical concept is [[LLM Wiki Pattern]] with [[Andrej Karpathy]] linked separately. Suggest: rewrite the frontmatter `related:` to `[[LLM Wiki Pattern]]` and `[[Andrej Karpathy]]`.
- [[Claude Canvas]], [[Claude Obsidian]], [[Rankenstein]]: all referenced from [[2026-04-10-backlink-empire-session]] frontmatter. None exist. Suggest: either create stubs (these are SEO targets from the backlink work, so brief entity pages would help that session's traceability) or trim the `related:` list to existing pages.

### Resolves in Obsidian, but flagged by stem-only check

These are not real dead links. The lint flagged them because the comm-style basename check treats only `.md` files as pages.

- [[Wiki Map]]: resolves to `wiki/Wiki Map.canvas`. Referenced from [[index]], [[hot]], [[getting-started]], [[concepts/_index]]. Fine.
- [[dashboard.base]]: resolves to `wiki/meta/dashboard.base`. Fine.
- [[claude-obsidian-presentation]]: resolves to `wiki/canvases/claude-obsidian-presentation.canvas`. Fine.

### Illustrative wikilinks inside prose or code examples

Not real cross-references; do not create pages.

- `[[Foo]]`, `[[notes/Foo]]`: example link-resolution syntax inside [[DragonScale Memory]] and [[log]]. Leave as-is.
- `[[Three laws of motion]]`: example from the Obsidian docs, cited verbatim in [[Persistent Wiki Artifact]]. Leave as-is.
- `[[wikilinks]]`: example inside an inline `` `[[wikilinks]]` `` code span in [[cherry-picks]]. The wikilink regex matched inside the backtick. Cosmetic only.

### Skill / template references

- [[fold-template]], [[wiki-fold]]: referenced from [[fold-k3-from-2026-04-23-to-2026-04-24-n8]]. These point at the `skills/wiki-fold/` skill template, not vault pages. Either intentional pointer to plugin assets, or worth resolving to a real wiki page that documents the fold operator. Recommend: leave alone unless the convention firms up.

## Missing Pages

Two candidates surfaced by the dead-link pass:

- "E-commerce SEO": mentioned in [[Claude SEO]] and [[2026-04-14-claude-seo-v190-session]]. The Claude SEO entity page describes E-commerce SEO as a v1.9.0 feature without giving it its own page. Suggest: create `wiki/entities/E-commerce SEO.md` or downgrade the frontmatter link to plain prose.
- "Karpathy LLM Wiki Pattern": informally referred to as "the Karpathy pattern" in several pages. Already covered by [[LLM Wiki Pattern]] + [[Andrej Karpathy]]. No new page needed.

## Frontmatter Gaps

Twelve pages are missing one or more required fields (`type`, `status`, `created`, `updated`, `tags`):

| Page | Missing |
|------|---------|
| [[hot]] | created |
| [[getting-started]] | created |
| [[log]] | created |
| [[index]] | created |
| [[dashboard]] | created |
| [[2026-04-15-release-report-session]] | created |
| [[2026-04-15-slides-and-release-session]] | created |
| [[boundary-frontier-2026-04-24]] | created |
| [[concepts/_index]] | created |
| [[sources/_index]] | created |
| [[entities/_index]] | created |
| [[tiling-report-2026-04-24]] | type, status, created, updated, tags (no frontmatter at all) |

The eleven `created`-only gaps are cheap auto-fixes. The tiling report's missing frontmatter is the bigger gap; the report was generated by `tiling-check.py --report`, which currently writes a markdown body with no frontmatter prelude. Recommend: patch the helper to emit `type: meta`, `tags: [meta, tiling]`, `status: developing`, and dated `created:`/`updated:` fields.

## Stale Claims

No actionable stale claims. The "NOT IMPLEMENTED" mentions of Mechanism 4 in [[hot]] line 33, [[log]] lines 71 and 82, [[2026-04-24-v1.6.0-release-session]] line 71, and [[DragonScale Memory]] line 274 are historical recordings of past state; each one is explicitly accompanied by "later reversed" / "removed" / "flipped to shipped" framing in the same line or the surrounding section. Leave them.

## Cross-Reference Gaps

Spot-checked the concept pages; entity mentions in body prose are already wikilinked. No actionable gaps found in this pass.

## Stale Index Entries

[[index]] entries all resolve. Several point at canvas/base files via stem only (`[[Wiki Map]]`, `[[dashboard]]`), which is fine. No deleted-page references found.

## Naming Conventions

All folder names are lowercase. Filenames mix Title Case (concepts, entities) with date-stamped session pages and lowercase meta files; this follows the existing convention. No collisions.

## Address Validation

- DragonScale enabled: **yes** (`scripts/allocate-address.sh` executable, counter file present).
- Counter state (peek): **3**
- Highest `c-` address observed: **c-000001**
- Post-rollout pages checked: **5** (2 passing, 3 errors). Includes [[DragonScale Memory]] (passing) and the [[folds]] page (fold, exempt).
- Legacy pages pending backfill: **27** (informational).
- `.raw/.manifest.json` `address_map`: 1 entry, matches frontmatter. Consistent.

### Errors

- [[Source-First Synthesis]]: missing address. Page created 2026-04-24 (post-rollout); address required. Run `./scripts/allocate-address.sh` and add the returned `c-NNNNNN` to frontmatter, then update `.raw/.manifest.json:address_map`.
- [[Persistent Wiki Artifact]]: missing address. Page created 2026-04-24 (post-rollout); address required. Same fix.
- [[Query-Time Retrieval]]: missing address. Page created 2026-04-24 (post-rollout); address required. Same fix.

Root cause: these three pages came from the M4 autoresearch validation pass on 2026-04-24. The autoresearch skill filed them but did not invoke `allocate-address.sh`. The skill should be updated to call the allocator before writing each post-rollout page; otherwise every future autoresearch run will reproduce these errors.

Counter implication: after backfilling these three, the counter advances 3 -> 6, leaving `c-000002` as the documented reserved-unassigned gap (per [[hot]]) and using `c-000003` / `c-000004` / `c-000005` for the three pages. The spec allows gaps, so this is fine.

### Pending backfill (informational)

27 legacy pages without addresses. Filter by `created:` < 2026-04-23. The legacy baseline manifest at `.vault-meta/legacy-pages.txt` currently lists no explicit paths (only the rollout-date comment), so the count is derived purely from `created:` dates. No action required until a backfill pass is planned.

## Semantic Tiling

**Did not run this session.**

`./scripts/tiling-check.py --peek` exited with status 1 (uncategorized) because the script fails to import on Python 3.9. Stack trace:

```
File "scripts/tiling-check.py", line 258
    report_path: Path | None,
TypeError: unsupported operand type(s) for |: 'type' and 'NoneType'
```

`Path | None` is PEP 604 syntax requiring Python >= 3.10. `/usr/bin/python3` on this machine is 3.9.6. The skill's expected exit codes (0/2/3/4/10/11) do not cover "interpreter too old"; this surfaces as the catch-all `1`.

Options:

1. **Fix in the script**: add `from __future__ import annotations` at the top of `scripts/tiling-check.py`. PEP 563 makes 604-style annotations strings at module load, so they no longer require 3.10. Lowest-risk patch, single line, preserves the current annotations.
2. **Add a runtime guard**: have the script check `sys.version_info < (3, 10)` at startup and exit with a new dedicated code (say 12) plus a clear "needs Python 3.10+" message. Then teach `wiki-lint`'s peek-exit case statement to handle it.
3. **Switch interpreter**: install a 3.10+ Python and have the script's shebang resolve to it.

Option 1 is the smallest change and the only one that actually unblocks the lint on systems shipping with system Python 3.9 (still common on macOS).

The last successful tiling report is [[tiling-report-2026-04-24]] (0 errors, 15 review-band pairs, uncalibrated). No `wiki/` page bodies have changed enough since then for a re-run to plausibly produce new error-band findings, but the tiling pass should resume in the next lint cycle once the interpreter issue is fixed.

## Style Check

Spot-checked recent pages. No style violations flagged this round: declarative present tense, sources cited on the three new autoresearch concepts, no missing `> [!gap]` / `> [!contradiction]` callouts where claims diverge.

---

## Recommended Order of Operations

1. **Fix the three address errors** (cheapest, mechanical). Run allocator three times, edit three frontmatter blocks, update one JSON file. Then update [[hot]] to reflect the new counter.
2. **Patch autoresearch** to invoke `allocate-address.sh` so this regression does not repeat.
3. **Add `from __future__ import annotations`** to `scripts/tiling-check.py` so future lints can run Mechanism 3 again.
4. **Triage the 2026-04-10 backlink-empire session frontmatter**: either create the four stub entities (Claude Canvas, Claude Obsidian, Rankenstein, Karpathy-pattern alias) or trim the `related:` list. This page is also an orphan, so consider linking it from [[index]] in the same edit.
5. **Backfill `created:`** on the eleven meta pages missing it (low priority, but useful for future lint runs that sort by date).
6. **Patch `tiling-check.py --report`** to emit frontmatter on its output so tiling reports stop showing up in the frontmatter-gap list.

None of these are urgent; the vault is healthy. The address errors are the only category that warrants action this session.
