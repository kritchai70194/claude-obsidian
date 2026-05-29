import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { resolve } from 'node:path'

export default defineConfig({
  main: {
    build: {
      outDir: 'out/main',
      rollupOptions: {
        input: resolve(__dirname, 'src/main/index.ts')
      }
    },
    resolve: {
      alias: {
        '@main': resolve(__dirname, 'src/main'),
        '@shared': resolve(__dirname, 'src/shared')
      }
    }
  },
  preload: {
    build: {
      outDir: 'out/preload',
      rollupOptions: {
        input: resolve(__dirname, 'src/preload/index.ts')
      }
    },
    resolve: {
      alias: {
        '@shared': resolve(__dirname, 'src/shared')
      }
    }
  },
  renderer: {
    root: resolve(__dirname, 'src/renderer'),
    build: {
      outDir: 'out/renderer',
      rollupOptions: {
        input: resolve(__dirname, 'src/renderer/index.html')
      }
    },
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer'),
        '@shared': resolve(__dirname, 'src/shared')
      }
    },
    optimizeDeps: {
      // We DON'T import vad-web through Vite — it ships a CJS-only entry with
      // dynamic require('onnxruntime-web/wasm'), which Vite's module graph
      // cannot resolve. Instead we load the prebuilt UMD bundle.min.js (which
      // has ORT inlined) via a <script> tag from publicDir at runtime.
      exclude: ['@ricky0123/vad-web', 'onnxruntime-web']
    },
    assetsInclude: ['**/*.onnx', '**/*.wasm'],
    plugins: [
      react(),
      viteStaticCopy({
        targets: [
          {
            src: resolve(__dirname, 'node_modules/@ricky0123/vad-web/dist/silero_vad_v5.onnx'),
            dest: '.'
          },
          {
            src: resolve(__dirname, 'node_modules/@ricky0123/vad-web/dist/silero_vad_legacy.onnx'),
            dest: '.'
          },
          {
            src: resolve(__dirname, 'node_modules/@ricky0123/vad-web/dist/vad.worklet.bundle.min.js'),
            dest: '.'
          },
          {
            src: resolve(__dirname, 'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.wasm'),
            dest: '.'
          },
          {
            src: resolve(__dirname, 'node_modules/onnxruntime-web/dist/ort-wasm-simd-threaded.jsep.wasm'),
            dest: '.'
          }
        ]
      })
    ]
  }
})
