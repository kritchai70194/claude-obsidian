import fixPath from 'fix-path'
import { execSync } from 'node:child_process'

fixPath()

function resolveClaudeBin(): string {
  try {
    const found = execSync('which claude', { encoding: 'utf8' }).trim()
    if (found) return found
  } catch {
    // fall through
  }
  return 'claude'
}

export const CLAUDE_BIN = resolveClaudeBin()
export const SAY_BIN = '/usr/bin/say'
