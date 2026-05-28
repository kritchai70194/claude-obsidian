#!/usr/bin/env bash
# wiki-watch.sh — PostToolUse watchdog for the claude-obsidian vault.
#
# Prints two kinds of cadence reminders to stderr (visible to Claude):
#   1. log.md size watchdog — warns once when the log crosses each power-of-2
#      threshold (256, 512, 1024, 2048 lines). Tracks last-warned threshold in
#      .vault-meta/.last-log-warn.
#   2. Ingest counter — increments on every Edit/Write inside wiki/sources/,
#      wiki/entities/, or wiki/concepts/. Every 25 increments, suggests running
#      wiki-lint. Counter at .vault-meta/ingest-counter.txt.
#
# Receives the tool call JSON on stdin (Claude Code PostToolUse contract).
# Extracts the file_path field with a jq-less sed and bails out fast when the
# edit is outside the vault or unrelated.
#
# Exits 0 unconditionally so the hook never blocks subsequent tool calls.

# Hooks must be robust to any stdin, missing files, or empty input. No strict mode.
set +e

VAULT="/Users/simon/claude-obsidian"
META="$VAULT/.vault-meta"
mkdir -p "$META"

INPUT="$(cat 2>/dev/null || echo '{}')"

# Extract the first file_path occurrence from the tool input JSON.
FILE_PATH=$(printf '%s' "$INPUT" \
  | sed -n 's/.*"file_path"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' \
  | head -1)

[ -z "$FILE_PATH" ] && exit 0
case "$FILE_PATH" in
  "$VAULT"/*) ;;
  *) exit 0 ;;
esac

# --- 1. log.md size watchdog ----------------------------------------------
if [ "$FILE_PATH" = "$VAULT/wiki/log.md" ]; then
  N=$(wc -l < "$VAULT/wiki/log.md" 2>/dev/null | tr -d ' \n')
  STATE="$META/.last-log-warn"
  PREV=$(cat "$STATE" 2>/dev/null | tr -d ' \n')
  PREV=${PREV:-0}
  for THR in 2048 1024 512 256; do
    if [ "$N" -ge "$THR" ] && [ "$PREV" -lt "$THR" ]; then
      printf '[wiki-watch] log.md is %s lines (past 2^k=%s); consider running wiki-fold\n' "$N" "$THR" >&2
      echo "$THR" > "$STATE"
      break
    fi
  done
fi

# --- 2. Ingest counter (sources/entities/concepts) ------------------------
case "$FILE_PATH" in
  "$VAULT/wiki/sources/"*.md|"$VAULT/wiki/entities/"*.md|"$VAULT/wiki/concepts/"*.md)
    CTR="$META/ingest-counter.txt"
    N=$(cat "$CTR" 2>/dev/null | tr -d ' \n')
    N=${N:-0}
    N=$((N + 1))
    echo "$N" > "$CTR"
    if [ $((N % 25)) -eq 0 ]; then
      printf '[wiki-watch] %s source/entity/concept page touches since reset; consider running wiki-lint\n' "$N" >&2
    fi
    ;;
esac

exit 0
