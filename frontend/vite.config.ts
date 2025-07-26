import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'
import rehypePrettyCode from 'rehype-pretty-code'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    mdx({
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: 'one-dark-pro',
            keepBackground: true, 
          },
        ],
      ],
    }),
  ],
})
