import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { Layout } from './components/layout'
import { Top } from './components/top'

const app = new Hono()

const siteData = {
  title: 'guricerin\'s portal'
}

app.use('*', serveStatic({ root: './static' }))
app.get('/', (c) => {
  return c.html(
    <Layout {...siteData} >
      <Top />
    </Layout>
  )
})

export default app
