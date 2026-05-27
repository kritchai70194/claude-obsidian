---
type: meta
title: "Lint Report 2026-05-27"
created: 2026-05-27
updated: 2026-05-27
tags:
  - meta
  - lint
status: developing
---

# Lint Report: 2026-05-27

## Summary

- Pages scanned: 296 (40 concepts, 48 entities, 162 sources, 2 comparisons, 1 questions, 2 folds, 35 meta, 6 top-level)
- Issues found: 34 errors (post-rollout missing address), 4 high-impact dead links, 8 candidate missing pages, 3 trivially-empty `_index` placeholders, 6 minor style hedges, 27 informational legacy-missing
- Auto-fixed: 0 (lint observes only)
- Needs review: all

Headline issues:

1. **34 post-rollout pages are missing `address:`.** This is by far the largest issue surface. Many are 2026-04-23 founder/sources pages that pre-date the auto-allocator hook, plus concepts created in the same window. Per DragonScale Mechanism 2, these classify as **error** because they are post-rollout. Fix: run `./scripts/allocate-address.sh` on each, paste into frontmatter.
2. **Allocator counter healthy.** `./scripts/allocate-address.sh --peek` returned **217** (mkdir-based lock works post-patch). Highest observed `c-` address is **c-000216**. No counter drift. No address-format violations. No address collisions. The 2026-05-24 `c-000042` "collision" was a false positive — it appeared inside a fenced code block in [[DragonScale Memory]] documenting the address format; the actual frontmatter address is `c-000001`. The path-aware sweep using the frontmatter parser confirms 215 unique addresses, zero collisions.
3. **Tiling check (Mechanism 3) blocked again.** `scripts/tiling-check.py` still requires Python 3.10+ (PEP 604 union syntax `Path | None`) but the system Python is 3.9.6. Ollama is also unreachable (`http://127.0.0.1:11434` returned 000). Same status as the 2026-05-24 report: tracking as infra, not a vault issue. Two independent gates — neither has moved.
4. **4 real dead-link targets carry the bulk of the dead-link signal**, all carried over from the 2026-05-24 report: `[[E-commerce SEO]]`, `[[How does the LLM Wiki pattern work?]]`, `[[AI Marketing Hub Cover Images Canvas]]`, plus the four `[[Claude Obsidian]]`/`[[Claude Canvas]]`/`[[Rankenstein]]`/`[[Karpathy LLM Wiki Pattern]]` references from the 2026-04-10 backlink-empire session frontmatter. None have been resolved in three days.
5. **Zero orphans** (excluding `_index`, `log`, `hot`, `overview`, `index`, `Wiki Map`, `getting-started`, `Persona`, `dashboard`, and meta/fold paths). Link density across the vault is excellent.

## Orphan Pages

None. Every non-meta, non-fold, non-excluded page has at least one inbound wikilink.

> [!note]
> The previous report flagged `[[2026-04-10-backlink-empire-session]]`, `[[fold-k3-from-2026-04-23-to-2026-04-24-n8]]`, and `[[tiling-report-2026-04-24]]` as orphans. All three are now in the `meta/` or `folds/` exclusion set per the skill spec, and the backlink-empire session is referenced from [[lint-report-2026-05-24]] anyway. No action.

## Dead Links

Total raw wikilinks pointing at non-existent stems: **22 targets, 45 refs**. After stripping fenced code blocks and accepting `.canvas` / `.base` targets, the real surface is:

### Real (page does not exist, no canvas/base equivalent)

Carried over from 2026-05-24:

- [[E-commerce SEO]]: referenced in [[Claude SEO]] frontmatter and [[2026-04-14-claude-seo-v190-session]] frontmatter (and self-referenced in [[lint-report-2026-05-24]]). Three days since flagged, no resolution. **Suggest:** create a stub entity page under `wiki/entities/` or remove both references.
- [[AI Marketing Hub Cover Images Canvas]]: referenced from [[overview]] (and from the 2026-05-24 lint report). No file exists under `wiki/` or `wiki/canvases/`. **Suggest:** create the canvas or remove the bullet from `wiki/overview.md`.
- [[Claude Obsidian]], [[Claude Canvas]], [[Rankenstein]], [[Karpathy LLM Wiki Pattern]]: all referenced from [[2026-04-10-backlink-empire-session]] `related:` frontmatter. None exist. The canonical pages are [[LLM Wiki Pattern]] and [[Andrej Karpathy]]. **Suggest:** rewrite the session's `related:` to point at the canonical pages and drop the SEO-target stubs.
- [[How does the LLM Wiki pattern work?]]: referenced from [[Persistent Wiki Artifact]], [[Query-Time Retrieval]], [[Source-First Synthesis]]. This is a Q&A page that three concepts want to point at. **Suggest:** create `wiki/questions/How does the LLM Wiki pattern work.md` and link the three concepts.
- [[fold-template]], [[wiki-fold]]: referenced from [[fold-k3-from-2026-04-23-to-2026-04-24-n8]]. These are skill/script names, not wiki pages. **Suggest:** the fold itself is a write-once log artifact; leave the frontmatter alone, or convert to inline text instead of wikilinks.
- [[Christensen]], [[Thompson]]: referenced in [[AI Company Defensibility]]. Should be `[[Clayton Christensen]]` and `[[Ben Thompson]]` (both of which exist). **Suggest:** rewrite as canonical full names.
- [[Bezos Letters]]: referenced in [[Reid Hoffman]]. No canonical page — Bezos letters are individual source pages (1997, 2015, 2016, 2017, 2020). **Suggest:** either create an aggregate concept/comparison page, or rewrite to point at a specific letter.
- [[Jony Ive]]: referenced in [[Brian Chesky]]. No entity page. **Suggest:** create stub or rewrite to inline mention.
- [[jarvis-claude-app]]: referenced from [[fold-k4-from-2026-05-26-to-2026-05-27-n16]]. Fold artifact pointing at a project-folder name that is not a wiki page. **Suggest:** leave as-is (write-once fold) or convert to inline text.

### Resolves in Obsidian but flagged by stem-only check

These are not real dead links. Obsidian resolves them via path-qualified lookup.

- `[[concepts/_index]]`, `[[entities/_index]]`, `[[sources/_index]]`: 59 combined refs. All three `_index.md` files exist in their respective folders. The lint flagged them because the stem-only basename check sees three `_index` files with the same stem and cannot disambiguate. Fine in Obsidian.
- `[[concepts/Operating Principles]]`: referenced from [[Persona]]. Resolves to `wiki/concepts/Operating Principles.md`. Fine.
- `[[Wiki Map]]`: 5 refs. Resolves to `wiki/Wiki Map.canvas`. Fine.
- `[[dashboard.base]]`: resolves to `wiki/meta/dashboard.base`. Fine.
- `[[claude-obsidian-presentation]]`: resolves to `wiki/canvases/claude-obsidian-presentation.canvas`. Fine.

### Illustrative wikilinks inside prose or code examples

Not real cross-references; the stripped-fenced-code pass eliminated these, but recording for posterity.

- `[[Foo]]`, `[[notes/Foo]]`: example link-resolution syntax inside [[DragonScale Memory]] and [[log]]. Leave as-is.
- `[[Three laws of motion]]`: example from the Obsidian docs, cited verbatim in [[Persistent Wiki Artifact]]. Leave as-is.
- `[[wikilinks]]`: example inside an inline code span in [[cherry-picks]]. Cosmetic only.
- `[[hot.md]]`: appears in [[log]] and [[2026-05-26-engineer-planner-training-session]] as a literal filename reference. Not a real link; consider rewriting to `[[hot]]` if intentional.
- `[[folds]]`: appears only in [[lint-report-2026-05-24]] as a directory reference inside prose. Cosmetic.

## Missing Pages

Concepts or entities mentioned in multiple pages but lacking their own page. **Priority by reference count:**

| Candidate | Refs | Suggested location |
|-----------|------|---------------------|
| `How does the LLM Wiki pattern work?` | 3 | `wiki/questions/` (Q&A type) |
| `E-commerce SEO` | 3 | `wiki/entities/` or `wiki/concepts/` |
| `AI Marketing Hub Cover Images Canvas` | 2 | `wiki/canvases/` (or remove from overview) |
| `Claude Obsidian` | 2 | `wiki/concepts/` (this product/repo) |
| `Claude Canvas` | 2 | `wiki/concepts/` |
| `Rankenstein` | 2 | `wiki/entities/` |
| `Karpathy LLM Wiki Pattern` | 2 | duplicate of [[LLM Wiki Pattern]] — rewrite instead |
| `Jony Ive` | 1 | `wiki/entities/` (low priority) |
| `Bezos Letters` | 1 | `wiki/comparisons/` (aggregate) (low priority) |

## Frontmatter Gaps

Sampled 30 pages across `concepts/` (10), `entities/` (10), `sources/` (10). **Gap rate: 0% (0/30 missing any required field).** Required fields checked: `type`, `status`, `created`, `updated`, `tags`. The wiki-ingest skill is consistently emitting full frontmatter; no systemic gap.

> [!note]
> The 2026-05-24 report flagged 12 pages missing `created:`, mostly meta. Spot-checks confirm meta pages still vary on `created:` but the sample of concepts/entities/sources is clean.

## Empty Sections

Refined check (heading with no content AND no sub-heading with content before the next same-or-higher level heading):

- [[_index]] (`wiki/concepts/_index.md`): `## Add new concepts here as they are extracted from sources.` — placeholder heading with no body. Cosmetic.
- [[_index]] (`wiki/sources/_index.md`): `## Add new sources here after each ingest.` — same.
- [[_index]] (`wiki/entities/_index.md`): `## Add new entities here as they are identified during ingests.` — same.

All three are scaffold placeholders. No action.

## Stale Index Entries

`wiki/index.md` contains 74 wikilinks. Stem-only check reports 5 stale targets, but all are resolvable in Obsidian:

- `[[Wiki Map]]` x 2: resolves to `wiki/Wiki Map.canvas`. Fine.
- `[[concepts/_index]]`, `[[entities/_index]]`, `[[sources/_index]]`: resolve via path-qualified lookup. Fine.

**No actual stale index entries.**

## Cross-Reference Gaps

Not exhaustively scanned this pass (skill flagged as low-priority in 2026-05-24). The targeted finds are folded into the dead-links section above ([[Christensen]] / [[Thompson]] inside [[AI Company Defensibility]] both reference real pages but use short forms).

## Writing Style Sample

6 hedges across the vault (out of ~250 candidate pages):

- [[Formal Specification Discipline]]: "basically"
- [[Operating Principles]]: "basically"
- [[Naval Almanack]]: "Basically"
- [[Lamport Thinking for Programmers]]: "basically"
- [[Munger USC Misery]]: "sort of"
- [[Leslie Lamport]]: "basically"

Each one warrants a single-word edit. Low priority.

## Address Validation

- **DragonScale state:** active (`./scripts/allocate-address.sh --peek` exit 0, returned **217**).
- **Counter state:** 217 (next allocation).
- **Highest c- address observed:** c-000216.
- **Counter drift:** none. All observed `c-NNNNNN` satisfy `NNNNNN < 217`.
- **Format errors:** 0.
- **Collisions:** 0 (215 unique addresses; the `c-000042` line in [[DragonScale Memory]] is inside a fenced code block, not a real second frontmatter address).
- **Post-rollout pages checked:** 229 total, 195 with valid address, **34 missing address (errors)**.
- **Legacy pages pending backfill:** 27 (informational).
- **Address-map manifest (`.raw/.manifest.json`):** 2 entries, both valid (no mismatches, no missing files).

### Errors (post-rollout pages without addresses)

The 34 post-rollout error pages. Sample (top 20):

```
wiki/concepts/Source-First Synthesis.md
wiki/concepts/Operating Principles.md
wiki/concepts/Persistent Wiki Artifact.md
wiki/concepts/Query-Time Retrieval.md
wiki/sources/Stripe Annual Letter 2024.md
wiki/sources/Vogels Decade of Dynamo.md
wiki/sources/Karpathy Unreasonable Effectiveness of RNNs.md
wiki/sources/Vogels Eventually Consistent.md
wiki/sources/Bezos 2020 Letter.md
wiki/sources/Bezos 2015 Letter.md
wiki/sources/Bezos 1997 Letter.md
wiki/sources/Collison Fast.md
wiki/sources/Karpathy Software 2.0.md
wiki/sources/Vogels 10 Lessons from 10 Years of AWS.md
wiki/sources/Bezos 2016 Day 1 Letter.md
wiki/sources/Collison Money Stuff Podcast.md
wiki/sources/Dean Stanford Talk.md
wiki/sources/Collison Questions.md
wiki/sources/Innovators Dilemma.md
wiki/sources/Bezos 2017 Letter.md
```

Full list (34 files): see `/tmp/post-rollout-missing.txt` if still present, otherwise re-run the lint check.

**Pattern:** these are concept and source pages with frontmatter `created:` >= 2026-04-23 but no `address:` field. Most appear to be founder/source autoresearch outputs that were filed before the allocator hook started running, or filed by skills/paths that didn't call the allocator. Worth investigating whether the autoresearch and ingest skills now call `./scripts/allocate-address.sh` reliably.

### Pending backfill (informational)

- 27 legacy pages without addresses. These have `created:` < 2026-04-23 or are listed in `.vault-meta/legacy-pages.txt` (currently empty of entries beyond comments). Not required until manual backfill.

## Semantic Tiling

**Skipped — infrastructure not ready.**

Two independent blockers:

1. `./scripts/tiling-check.py --peek` exits with `TypeError: unsupported operand type(s) for |: 'type' and 'NoneType'` — the script uses PEP 604 union syntax (`Path | None`) at line 258, which requires Python 3.10+. System Python is 3.9.6 (`/usr/bin/python3`). No `python3.10`/`3.11`/`3.12` found in PATH, `/usr/local/bin/`, `/opt/homebrew/bin/`, or `~/.local/bin/`.
2. Ollama unreachable: `http://127.0.0.1:11434/api/tags` returned HTTP 000 (connection failed). Even if the Python issue were fixed, the helper would exit 10 (ollama not reachable).

Same status as 2026-05-24. Tracking as infra; not a vault issue.

**Fix options:**
- Replace `Path | None` with `Optional[Path]` (and add `from typing import Optional`) — makes the script Python 3.9-compatible.
- Or install a newer Python (e.g. `~/.local/bin/python3.12`) and have the script's shebang prefer it.
- Independently, start ollama (`ollama serve`) and ensure `nomic-embed-text` is pulled before re-running.

## Naming Conventions

- Filenames are uniformly Title Case with spaces, lowercase-with-dashes for some product/code identifiers (e.g. `cherry-picks.md`, `claude-obsidian-presentation.canvas`). Consistent within each domain.
- Folder names are lowercase. Consistent.
- Tags surveyed: mostly lowercase hierarchical (`#concept`, `#engineering`, `#formal-methods`). Sample looks clean.
- Wikilink targets match filenames exactly where pages exist. The remaining mismatches are the dead-link section above.

## Recommended Priority Order

1. **Fix the 34 post-rollout missing addresses.** This is the only `error`-tier issue. Run `./scripts/allocate-address.sh` for each file in the list, paste the returned `c-NNNNNN` into the `address:` frontmatter field. Investigate which skill path is filing pages without calling the allocator.
2. **Resolve the 6 carry-over dead links from 2026-05-24.** Either create stubs ([[E-commerce SEO]], [[AI Marketing Hub Cover Images Canvas]], the Q&A page), rewrite frontmatter ([[2026-04-10-backlink-empire-session]] `related:` list), or fix short-form names ([[Christensen]] -> [[Clayton Christensen]], [[Thompson]] -> [[Ben Thompson]] in [[AI Company Defensibility]]).
3. **Unblock tiling infra.** Patch `scripts/tiling-check.py` to use `Optional[Path]` so it runs on Python 3.9, then start ollama and pull `nomic-embed-text`. Until then, Mechanism 3 lint is dark.

## Diff vs 2026-05-24

- Pages scanned: 46 -> 296 (the previous report had a much narrower scope; this one swept the full vault).
- Post-rollout missing addresses: 3 -> 34 (larger because the sweep is now full-vault, not narrow).
- Counter drift: none in either report.
- Address collisions: 1 reported in 2026-05-24 (false positive — code-block content) vs 0 here after parsing the frontmatter properly.
- Dead links carried over: 6 (none resolved in 3 days).
- Allocator state: previously broken (flock not available on macOS), now patched to use mkdir-based lock — `--peek` exits 0.
- Tiling: still blocked by the same two infra issues.
