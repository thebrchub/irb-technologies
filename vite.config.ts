import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import type { IncomingMessage } from 'node:http'

function readRequestBody(req: IncomingMessage): Promise<string> {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
    })
    req.on('end', () => resolve(body))
    req.on('error', reject)
  })
}

function contactApiDevPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'contact-api-dev',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, _next) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        try {
          Object.assign(process.env, env)
          const { sendContactEmail } = await import('./api/lib/sendContactEmail')
          const rawBody = await readRequestBody(req)
          const body = JSON.parse(rawBody) as {
            name?: string
            user_email?: string
            message?: string
            company?: string
            service?: string
          }

          const { name, user_email, message, company, service } = body

          if (!name?.trim() || !user_email?.trim() || !message?.trim() || !company?.trim() || !service?.trim()) {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Missing required fields' }))
            return
          }

          await sendContactEmail({
            name: name.trim(),
            user_email: user_email.trim(),
            message: message.trim(),
            company: company.trim(),
            service: service.trim(),
          })

          res.statusCode = 200
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: true }))
        } catch (error) {
          console.error('Contact form error:', error)
          res.statusCode = 500
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Failed to send message. Please try again later.' }))
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      tailwindcss(),
      contactApiDevPlugin(env),
    ],
  }
})
