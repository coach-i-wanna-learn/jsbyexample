const { defineConfig } = require("vite");

export default defineConfig({
  define: {
    globalVar: "'this is a globalVar'"
  }
})