import { Hono } from 'hono'
import { Layout } from './components/layout'

const app = new Hono()

app.get('/', async (c) => {
  return c.render(
    <Layout />
  )
})

export default app
