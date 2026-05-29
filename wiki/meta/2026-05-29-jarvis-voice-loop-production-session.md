---
type: session
title: "2026-05-29 Jarvis Voice Loop Production Session"
address: c-000323
created: 2026-05-29
updated: 2026-05-29
tags:
  - meta
  - session
  - jarvis
  - voice-ui
  - electron
  - whisper
  - vad
  - production
status: mature
related:
  - "[[2026-05-28-full-brain-tightening-session]]"
  - "[[Persona]]"
  - "[[hot]]"
  - "[[log]]"
---

# 2026-05-29: Jarvis Voice Loop Production Session

Took Jarvis (Electron voice UI) from "works in `npm run dev`" to "shipping production `.app` that survives terminal close, transcribes speech, and drives Claude end-to-end." Four cascading production bugs surfaced and got fixed in sequence; one canonical commit (`efda32f`) captures the load-bearing work.

This session is the tooling counterpart to the 2026-05-28 brain-tightening session. The wiki vault now has both a coherent persona (yesterday's work) AND a persistent voice frontend (today's work).

## Starting state

- Jarvis was running in **dev mode** (`electron-vite dev`, PID spawned via Bash `&` without `nohup`)
- Dependent on this Claude session staying open — SIGHUP propagates → Jarvis dies on terminal close
- Memory note said Thai work was on branch `feat/jarvis-claude-voice-ui`; investigation revealed it's actually WIP on `main` (23 dirty files including Thai wake words in `voice.ts`)
- No production `.app` had ever been built
- whisper.cpp not installed anywhere on the machine

## Five cascading problems, four fixes, one commit

### Problem 1: Jarvis dies when terminal closes

Dev mode spawned via Bash background process is child of the shell. Closing terminal kills it.

**Fix:** Build production `.app` bundle via `electron-builder` (config already in `package.json`); install to `~/Applications/Jarvis.app`; clear Gatekeeper quarantine (`xattr -dr com.apple.quarantine`); launch via `open` (detaches from terminal). Standard macOS app behavior — Cmd+Q, Dock icon, app switcher all work. Add to System Settings → Login Items for auto-launch.

The build itself took two iterations. First build failed because `src/renderer/public/` directory referenced by `vite-plugin-static-copy` didn't exist (it was untracked WIP). Restored via `git apply` from the stash that earlier branch-switch created.

### Problem 2: Whisper not installed

The packaged `.app` reported "Whisper not installed" at startup. `nodejs-whisper` ships the whisper.cpp source under `node_modules/nodejs-whisper/cpp/whisper.cpp/` but doesn't auto-build or download the model.

**Fix:**
1. `cmake -B build && cmake --build build --config Release -j 8` from `node_modules/nodejs-whisper/cpp/whisper.cpp/` (using portable cmake at `~/.local/bin/cmake`). Outputs `build/bin/whisper-cli`. Builds with Metal backend for arm64.
2. `bash ./models/download-ggml-model.sh small` downloads `ggml-small.bin` (320 MB, multilingual — supports Thai + English).
3. Hard-code an absolute fallback path in `src/main/whisper.ts` pointing at the dev tree's `node_modules/nodejs-whisper/cpp/whisper.cpp/`. The packaged `.app` ships only `out/**` + `package.json` (per electron-builder config); `node_modules` is not in the asar. Pointing at the source tree lets the `.app` reuse the already-built binary + downloaded model without bloating the bundle by 320 MB.

### Problem 3: "Voice init failed: VAD bundle load failed"

VAD assets exist in `src/renderer/public/` (vad.bundle.min.js, vad.worklet.bundle.min.js, silero_vad_v5/legacy.onnx, 8 variants of ort-wasm-simd-threaded.*). `vite-plugin-static-copy` ships them to `out/renderer/`. electron-builder packs them into `app.asar`. But the renderer's `<script src="/vad.bundle.min.js">` failed at runtime.

**Root cause:** Production renderer loads via `mainWindow.loadFile(...)` which uses `file://`. Under `file://`, the URL `/vad.bundle.min.js` resolves to **the OS filesystem root** (`file:///vad.bundle.min.js`), not the asar bundle root.

This is a multi-asset problem, not a single bug. `@ricky0123/vad-web` internally requests `/vad.worklet.bundle.min.js`, `/silero_vad_v5.onnx`, and 8 ORT WASM variants — all root-absolute. Fixing one path exposes the next.

**Fix:** Register a custom `app://` protocol scheme in the main process (`src/main/index.ts`):

```typescript
protocol.registerSchemesAsPrivileged([{
  scheme: 'app',
  privileges: { standard: true, secure: true, supportFetchAPI: true, stream: true, corsEnabled: true }
}])

// In app.whenReady():
protocol.handle('app', (request) => {
  const url = new URL(request.url)
  const filePath = join(__dirname, '../renderer', url.pathname)
  return net.fetch(pathToFileURL(filePath).toString())
})

// In createWindow():
mainWindow.loadURL('app://./index.html')  // was loadFile(...)
```

All `/foo` URLs in the renderer now resolve to `<asar>/renderer/foo`. Zero changes to renderer code, vad-web defaults, ONNX runtime defaults. This is the canonical Electron production pattern.

### Problem 4: "spawn ENOTDIR" after VAD detects speech

VAD now worked (`Detected real speech start`). But whisper spawn failed with `ENOTDIR` within 2-8 ms — before the binary even tried to launch.

Two compounding causes:

1. **`process.cwd()` is `/`** when Jarvis is launched via Finder/`open` — `lsof -p $PID | grep cwd` confirms. `spawn()` default cwd is `process.cwd()`. The `/` was actually fine here, BUT under `app://` protocol the working directory becomes ambiguous in some edge cases.

2. **Candidate path order in `resolveWhisperPaths()`**: the original list checked `process.cwd()` paths first, then `__dirname` relative paths (which point INTO asar), THEN the absolute fallback. asar magic can cause `existsSync` to be truthy on a path that can't actually be spawned. The first matching candidate "wins" and spawn fails.

**Fix:**
- Move the absolute fallback path to FIRST in the candidates list. Asar paths never get a chance to false-positive.
- Pass explicit `cwd: dir` (the just-created temp dir) to `spawn()` to avoid any process.cwd() ambiguity.
- Add `console.log('[whisper] resolved bin:', paths.bin)` at module load so future debug can trace which path was selected.

### Problem 5: Production-build feedback loop

Each rebuild required `pkill -f Jarvis.app` → `npm run build` (~3 min including DMG) → `rm -rf ~/Applications/Jarvis.app` → `cp -R dist/mac-arm64/Jarvis.app ~/Applications/` → `xattr -dr com.apple.quarantine` → `open`. Repeated 4 times across the four fixes.

No fix for this — production iteration is just slower than dev. Documented for future sessions.

## Final commit

`efda32f` — `jarvis: production voice loop end-to-end (Thai wake + whisper + app://)`. 24 files. Body covers the three load-bearing fixes (custom `app://` protocol, whisper resolution + spawn cwd, Thai wake words + VAD assets) in commit message detail.

## Thai wake word coverage (verified working in production)

```
Exact: เฮ้ ข้าวกล้า, เฮ้ข้าวกล้า, ไง ข้าวกล้า, ไงข้าวกล้า, สวัสดี ข้าวกล้า, สวัสดีข้าวกล้า
EN: hey claude, hey jarvis
Keywords (Latin): jarvis, claude
Keywords (Thai + 16 Whisper mishears): ข้าวกล้า, ข้าวก้า, ข้าวกล่า, ข้าวกลา, ข้าวกล้าว,
  ข้าวกล่าว, เข้ากล้า, ขาวกล้า, ก้า, ฮาวกล้า, ฮาวก้า, ดีก้่่า, โหลก้า, โลก้า, โลกา, โลกะ
Fuzzy edit distance: ≤ 2
```

The 16 Whisper-mishear variants reflect observed transcription drift on the ข้าวกล้า name — Whisper sometimes drops the อ์ tone mark or hears "kao kla" as "kaa", "haw kla", "loka", etc. The fuzzy bound catches the rest.

## Final state

- `~/Applications/Jarvis.app` — production build, 185 MB DMG, runs as standard macOS app
- whisper.cpp built at `node_modules/nodejs-whisper/cpp/whisper.cpp/build/bin/whisper-cli`
- `ggml-small.bin` (320 MB, multilingual) at `node_modules/nodejs-whisper/cpp/whisper.cpp/models/`
- Lang mode default: `th` (verified via `[lang] set to th` at startup)
- Voice loop end-to-end: VAD detects speech → whisper transcribes → wake word check → Claude CLI invoked → response → TTS speaks
- Process survives: terminal close ✓, Claude session close ✓, reboot via Login Items ✓ (user manual setup)
- Counter c-000322 → c-000323 (this session-meta only; jarvis is out-of-vault code)

## Outstanding (out of scope this session)

- **System Settings → Login Items**: user must manually add `~/Applications/Jarvis.app` for reboot auto-launch (GUI step, no CLI equivalent without polluting the launchd plist).
- **Code signing**: `.app` is unsigned. Gatekeeper bypass via `xattr -dr com.apple.quarantine` works for personal use; if ever distributed, would need a Developer ID Application cert.
- **SharedArrayBuffer warning**: console showed "SharedArrayBuffer usage is restricted to cross-origin isolated sites". `app://` protocol with `secure: true` privilege provides the secure context but full COOP+COEP headers might still be needed for ONNX Runtime threaded mode. Not blocking — VAD + Whisper work without it. Address if performance degrades.
- **Jarvis logo / app icon**: electron-builder warned "default Electron icon is used". Cosmetic; not blocking.
- **Vault `.obsidian/*` drift** (workspace.json, plugins manifest): unrelated to jarvis; left uncommitted intentionally.
- **`ported-skills/` directory**: untracked; not jarvis-related.

## Method notes

This session was less "parallel-agent dispatch" and more "sequential debug under uncertainty." Pattern:

1. Run production app → observe error
2. Investigate via Explore agents in parallel where the failure span is wide (used for VAD load investigation — 2 agents covered code-path side + bundle-inspection side)
3. Form hypothesis → patch → rebuild → relaunch → verify
4. If new error surfaces, repeat

The two Explore agents on the VAD bug both converged on the same root cause in under 5 minutes, which is the signal to trust the diagnosis. For the spawn ENOTDIR, a single Bash diagnostic round (`lsof -p` + path inspection + manual binary test from temp dir) was enough — no agent needed.

Total session wall-clock: ~90 minutes including 4 production rebuilds × ~3-4 min each.

## Connections

- [[2026-05-28-full-brain-tightening-session]] — yesterday's wiki/persona session; this session is the voice-frontend counterpart
- [[hot]] — session-context cache (Last Updated stays on Tier C close-out from yesterday; this session is out-of-vault code work)
- [[log]] — operation log
- [[Persona]] — the brain that Jarvis now speaks for
- [[Working Backwards]] — Jarvis as the "press release" of a working voice frontend
