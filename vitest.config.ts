import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vitest/config";

export const setupFiles = [path.join(import.meta.dirname, "./vitestSetup.js")];

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      reporter: ["text"],
      skipFull: true,
      thresholds: {
        branches: 85,
        functions: 85,
        lines: 85,
        statements: 85,
      },
    },
    reporters: ["verbose"],
    include: ["**/*.test.tsx"],
    environment: "jsdom",
    setupFiles,
  },
});
