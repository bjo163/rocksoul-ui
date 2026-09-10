import { resolve } from "node:path"
import { readdirSync } from "node:fs"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: {
        index: resolve(import.meta.dirname, "src/library-entry.ts"),
        ...Object.fromEntries(readdirSync(resolve(import.meta.dirname, "src/components/ui"))
          .filter(name => /\.(ts|tsx)$/.test(name))
          .map(name => [`components/ui/${name.replace(/\.tsx?$/, "")}`, resolve(import.meta.dirname, "src/components/ui", name)])),
        ...Object.fromEntries(readdirSync(resolve(import.meta.dirname, "src/components/molecules"))
          .filter(name => /\.(ts|tsx)$/.test(name))
          .map(name => [`components/molecules/${name.replace(/\.tsx?$/, "")}`, resolve(import.meta.dirname, "src/components/molecules", name)])),
      },
      formats: ["es"],
      fileName: (_format, name) => `${name}.js`,
      cssFileName: "styles",
    },
    rollupOptions: {
      external: id => !id.startsWith(".") && !id.startsWith("/") && !/^[A-Za-z]:/.test(id),
    },
  },
})
