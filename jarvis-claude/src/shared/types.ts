export const IPC = {
  ClaudeSend: 'claude:send',
  ClaudeAbort: 'claude:abort',
  ClaudeEvent: 'claude:event',
  TtsSpeak: 'tts:speak',
  TtsStop: 'tts:stop',
  TtsSpeaking: 'tts:speaking',
  TtsEnd: 'tts:end'
} as const

export type SystemInitEvent = {
  type: 'system'
  subtype: 'init'
  session_id: string
  model: string
  tools?: string[]
  mcp_servers?: unknown[]
  slash_commands?: string[]
  skills?: string[]
}

export type SystemStatusEvent = {
  type: 'system'
  subtype: 'status'
  status: string
  session_id: string
}

export type SystemHookEvent = {
  type: 'system'
  subtype: 'hook_started' | 'hook_response'
  hook_name: string
  session_id: string
}

export type TextDelta = { type: 'text_delta'; text: string }
export type InputJsonDelta = { type: 'input_json_delta'; partial_json: string }

export type ContentBlock =
  | { type: 'text'; text: string }
  | { type: 'tool_use'; id: string; name: string; input: unknown }
  | { type: 'tool_result'; tool_use_id: string; content: unknown }

export type StreamSubEvent =
  | { type: 'message_start'; message: { id: string; model: string } }
  | { type: 'content_block_start'; index: number; content_block: ContentBlock }
  | { type: 'content_block_delta'; index: number; delta: TextDelta | InputJsonDelta }
  | { type: 'content_block_stop'; index: number }
  | { type: 'message_delta'; delta: { stop_reason: string | null } }
  | { type: 'message_stop' }

export type StreamEventWrapper = {
  type: 'stream_event'
  event: StreamSubEvent
  session_id: string
  parent_tool_use_id?: string | null
}

export type AssistantEvent = {
  type: 'assistant'
  message: { id: string; content: ContentBlock[]; model: string }
  session_id: string
}

export type UserEvent = {
  type: 'user'
  message: { content: ContentBlock[] }
  session_id: string
}

export type ResultEvent = {
  type: 'result'
  subtype: string
  is_error: boolean
  duration_ms: number
  result: string
  session_id: string
  total_cost_usd: number
  usage?: unknown
}

export type ClaudeEvent =
  | SystemInitEvent
  | SystemStatusEvent
  | SystemHookEvent
  | StreamEventWrapper
  | AssistantEvent
  | UserEvent
  | ResultEvent
  | { type: string; [k: string]: unknown }

export type SendArgs = { prompt: string; sessionId: string | null; model?: string }
