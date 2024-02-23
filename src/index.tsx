import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import { Layout } from './components/layout'
import { Home } from './components/home'

const app = new Hono()

const siteData = {
  title: 'guricerin\'s portal'
}

const avator = {
  iconPath: 'img/avator.jpg',
  name: 'guricerin',
}

app.use('*', serveStatic({ root: './static' }))
app.get('/', (c) => {
  return c.render(
    <Layout {...siteData} >
      <Home {...avator}/>
    </Layout>
  )
})

export default app
