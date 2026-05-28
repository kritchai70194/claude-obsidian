# claude-obsidian — Claude + Obsidian Wiki Vault

This folder is both a Claude Code plugin and an Obsidian vault.

**Plugin name:** `claude-obsidian`
**Skills:** `/wiki`, `/wiki-ingest`, `/wiki-query`, `/wiki-lint`
**Vault path:** This directory (open in Obsidian directly)

## What This Vault Is For

This vault demonstrates the LLM Wiki pattern — a persistent, compounding knowledge base for Claude + Obsidian. Drop any source, ask any question, and the wiki grows richer with every session.

## Vault Structure

```
.raw/           source documents — immutable, Claude reads but never modifies
wiki/           Claude-generated knowledge base
_templates/     Obsidian Templater templates
_attachments/   images and PDFs referenced by wiki pages
```

## How to Use

Drop a source file into `.raw/`, then tell Claude: "ingest [filename]".

Ask any question. Claude reads the index first, then drills into relevant pages.

Run `/wiki` to scaffold a new vault or check setup status.

Run "lint the wiki" every 10-15 ingests to catch orphans and gaps.

## Cross-Project Access

To reference this wiki from another Claude Code project, add to that project's CLAUDE.md:

```markdown
## Wiki Knowledge Base
Path: /path/to/this/vault

When you need context not already in this project:
1. Read wiki/hot.md first (recent context, ~500 words)
2. If not enough, read wiki/index.md
3. If you need domain specifics, read wiki/<domain>/_index.md
4. Only then read individual wiki pages

Do NOT read the wiki for general coding questions or things already in this project.
```

## Plugin Skills

| Skill | Trigger |
|-------|---------|
| `/wiki` | Setup, scaffold, route to sub-skills |
| `ingest [source]` | Single or batch source ingestion |
| `query: [question]` | Answer from wiki content |
| `lint the wiki` | Health check |
| `/save` | File the current conversation as a structured wiki note |
| `/autoresearch [topic]` | Autonomous research loop: search, fetch, synthesize, file |
| `/canvas` | Visual layer: add images, PDFs, notes to Obsidian canvas |

## Skill Routing — pick the best tool every time

When the user interacts with this vault, choose the skill that matches their intent. Default to invoking the skill (don't paraphrase its work) — that's why the plugin exists.

### Intent → skill

| User intent / signal | Skill to invoke |
|---|---|
| Drops a file in `.raw/`, pastes URL/PDF, "ingest X", "add this to the wiki", "process this" | `claude-obsidian:wiki-ingest` |
| Pastes a web URL that's noisy (article, blog, news) BEFORE ingest | `claude-obsidian:defuddle` → then `wiki-ingest` |
| "what is X", "explain X", "what do you know about X", "query:", "based on the wiki" | `claude-obsidian:wiki-query` |
| "research X", "deep dive into X", "investigate X", "go research" | `claude-obsidian:autoresearch` |
| "save this", "file this answer", "keep this conversation" | `claude-obsidian:save` |
| "lint", "health check", "find orphans", "audit", "clean up wiki" | `claude-obsidian:wiki-lint` |
| "fold the log", "roll up entries", `log.md` getting long | `claude-obsidian:wiki-fold` |
| "canvas", "visual map", "add image to canvas", "put this on canvas" | `claude-obsidian:canvas` |
| "create a base", "dynamic table", "database view", "reading list base" | `claude-obsidian:obsidian-bases` |
| Writing/editing any wiki page (wikilinks, callouts, embeds) | reference `claude-obsidian:obsidian-markdown` |
| "set up wiki", "scaffold vault", "/wiki" | `claude-obsidian:wiki` |

### Combination patterns

- **Messy URL → wiki:** `defuddle` first (saves 40-60% tokens), then `wiki-ingest`.
- **Deep topic from scratch:** `autoresearch` (it internally combines search + fetch + synthesize + file).
- **End of a productive chat:** offer `save` before the conversation ends.
- **After 10-15 ingests:** suggest `wiki-lint`.
- **After log grows past 2^k entries:** suggest `wiki-fold`.

### When unclear

If the user's intent maps to two skills, prefer the more specific one (`autoresearch` > `wiki-ingest` for "research X"; `wiki-query` > generic chat for "what do you know about X"). If still ambiguous, ask in one short line.

### When NOT to invoke a wiki skill

- General coding questions, debugging, file edits outside the vault — answer directly.
- Quick factual lookups answerable without the wiki — answer directly, then offer `save` if the answer was valuable.

### DragonScale verification (post-ingest / post-lint)

The vault has two opt-in DragonScale scripts that complement the wiki skills. Both are now Python 3.9-compatible.

- **After `wiki-ingest`** creates 1+ new pages: run `./scripts/tiling-check.py --report wiki/meta/tiling-report-YYYY-MM-DD.md` (Mechanism 3, semantic tiling). Surfaces candidate duplicates via embedding cosine similarity. Requires ollama at `127.0.0.1:11434` with `nomic-embed-text` pulled. Skip gracefully if ollama unreachable (exit 10) or model missing (exit 11).
- **After `wiki-lint`** writes its report: run `./scripts/boundary-score.py --top 10` (Mechanism 4, boundary scoring). Top scores are the vault's "frontier" pages (outward-pointing, recently-touched) — natural seeds for `/autoresearch`. Read-only, no ollama needed.

Both are best-effort: failure to invoke should not block the user's flow.

### Automation cadence (hook-driven)

The `hooks/hooks.json` `PostToolUse` watchdog (`scripts/hooks/wiki-watch.sh`) prints these reminders to stderr:

- **log.md crosses 2^k lines** (256, 512, 1024, 2048): "consider running `wiki-fold`". Threshold tracked in `.vault-meta/.last-log-warn` so a given threshold fires once.
- **Every 25 source/entity/concept page touches**: "consider running `wiki-lint`". Counter at `.vault-meta/ingest-counter.txt`; reset by `echo 0 > .vault-meta/ingest-counter.txt`.

When you see a `[wiki-watch]` line, action it.

## MCP (Optional)

If you configured the MCP server, Claude can read and write vault notes directly.
See `skills/wiki/references/mcp-setup.md` for setup instructions.
