import { defineConfig } from "vite"
import { viteStaticCopy } from "vite-plugin-static-copy"

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/sections/**/*",
          dest: "src/sections",
        },
        {
          src: "src/assets/**/*",
          dest: "src/assets",
        },
      ],
    }),
  ],
})
