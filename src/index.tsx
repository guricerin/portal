import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { Layout } from './components/layout'
import { Home } from './components/home'

const app = new Hono()

const avator = {
  iconSrc: '/static/avator.jpg',
  name: 'guricerin',
}

app.use('/static/*', serveStatic({ root: './' }))
app.get('/', async (c) => {
  return c.render(
    <Layout>
      <Home {...avator}/>
    </Layout>
  )
})

export default app
