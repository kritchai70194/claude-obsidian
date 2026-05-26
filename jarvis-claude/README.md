# jarvis-claude

JARVIS-style voice UI that drives the `claude` CLI as a subprocess. macOS only.

## Architecture

- **Main (Node):** spawns `claude -p --output-format stream-json --verbose --include-partial-messages [--resume <id>]` per turn; runs `say -v Daniel` for TTS.
- **Renderer (React + Three.js):** holographic glass panels around a shader-driven arc reactor; Web Speech API for STT with wake-word detection.
- **State machine:** `idle → listening → capturing → thinking → speaking → idle`. Recognition is paused while TTS speaks.

Backend = real `claude` CLI, so skills, plugins, hooks, MCP, and your subscription auth come along for free.

## Setup

```bash
cd jarvis-claude
npm install
npm run dev
```

Requires:
- macOS (uses `say` and `vibrancy`)
- Node ≥ 20
- `claude` on PATH (Claude Code CLI, logged in)
- Daniel voice installed: **System Settings → Accessibility → Spoken Content → System Voice → Manage Voices → English (UK) → Daniel**

## Ship

```bash
npm run build
```

Produces `dist/Jarvis-<version>.dmg`. Install, launch from `/Applications/Jarvis.app`.

## Smoke test (after install)

1. **Backend.** Click *Test send* → console shows `init`, `content_block_delta`*, `result`. ChatPanel renders; `say -v Daniel` speaks.
2. **Voice in.** Say *"Hey JARVIS, what files are in my home directory?"* → state dot transitions cyan → solid cyan → amber. ToolCallPanel shows `Bash`. ChatPanel streams. TTS reads.
3. **Resume.** Ask *"What did I just ask?"* → check `~/Library/Application Support/jarvis-claude/sessions/*.jsonl` to confirm `--resume <sessionId>` was used; answer should reference the previous turn.
4. **Skill / MCP inheritance.** *"Run /wiki-query on …"* — fires through the spawned `claude` unchanged.
5. **Barge-in.** Wake while TTS is mid-sentence → `tts:stop` IPC fires, recognition resumes, new turn starts.
6. **Packaged build.** Repeat 1–4 from `/Applications/Jarvis.app` (Finder-launched). If step 1 only works under `npm run dev`, the `fix-path` PATH wiring is broken.

## Notes

- **Web Speech API needs network** (Chromium forwards audio to Google). Picovoice is the offline swap-in.
- TTS speaks the final `result.result` string on `message_stop`, not per-delta — otherwise `say` restarts dozens of times and stutters.
- Session JSONL logs land in `~/Library/Application Support/jarvis-claude/sessions/`.

## Out of scope (V1)

Cross-platform, multi-session tabs, Picovoice, ElevenLabs/OpenAI TTS, Thai voice, voice cloning. Each premium swap is isolated to one function.
