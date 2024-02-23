import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { Layout } from './components/layout'
import { Home } from './components/home'

const app = new Hono()

const avator = {
  iconSrc: 'avator.jpg',
  name: 'guricerin',
}

app.use('*', serveStatic({ root: './static' }))
app.get('/', async (c) => {
  return c.html(
    <Layout>
      <Home {...avator}/>
    </Layout>
  )
})

export default app
