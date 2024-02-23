import app from './src/index'
import { toSSG } from 'hono/bun'

toSSG(app, {
  dir: 'dist'
})
