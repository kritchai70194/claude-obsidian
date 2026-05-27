import type { JarvisAPI } from '../preload'

declare global {
  interface Window {
    api: JarvisAPI
    webkitSpeechRecognition: typeof SpeechRecognition
  }

  interface SpeechRecognitionAlternative {
    transcript: string
    confidence: number
  }

  interface SpeechRecognitionResult {
    isFinal: boolean
    readonly length: number
    item(index: number): SpeechRecognitionAlternative
    [index: number]: SpeechRecognitionAlternative
  }

  interface SpeechRecognitionResultList {
    readonly length: number
    item(index: number): SpeechRecognitionResult
    [index: number]: SpeechRecognitionResult
  }

  interface SpeechRecognitionEvent extends Event {
    resultIndex: number
    results: SpeechRecognitionResultList
  }

  interface SpeechRecognitionErrorEvent extends Event {
    error: string
    message: string
  }

  class SpeechRecognition extends EventTarget {
    continuous: boolean
    interimResults: boolean
    lang: string
    start(): void
    stop(): void
    abort(): void
    onresult: ((ev: SpeechRecognitionEvent) => void) | null
    onend: ((ev: Event) => void) | null
    onerror: ((ev: SpeechRecognitionErrorEvent) => void) | null
    onstart: ((ev: Event) => void) | null
  }
}

export {}
