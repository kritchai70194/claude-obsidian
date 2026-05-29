import fixPath from 'fix-path'
import { execSync } from 'node:child_process'
import { existsSync, readdirSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

fixPath()

function resolveClaudeBin(): string {
  try {
    const found = execSync('which claude', { encoding: 'utf8' }).trim()
    if (found && existsSync(found)) return found
  } catch {
    // fall through
  }
  if (process.platform === 'darwin') {
    const base = join(homedir(), 'Library', 'Application Support', 'Claude', 'claude-code')
    if (existsSync(base)) {
      try {
        const versions = readdirSync(base).sort((a, b) =>
          b.localeCompare(a, undefined, { numeric: true })
        )
        for (const v of versions) {
          const bin = join(base, v, 'claude.app', 'Contents', 'MacOS', 'claude')
          if (existsSync(bin)) return bin
        }
      } catch {
        // fall through
      }
    }
  }
  return 'claude'
}

export const CLAUDE_BIN = resolveClaudeBin()
export const SAY_BIN = '/usr/bin/say'
