import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'cjfnfc',
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})
