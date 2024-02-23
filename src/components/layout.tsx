import type { FC } from 'hono/jsx'
import { globalCss } from '../styles/global-css'
import { Style } from 'hono/css'

export const Layout: FC = () => {
  return (
    <html class={globalCss}>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://guricerin.github.io/portal/" />
        <title>guricerin's portal</title>
        <Style />
      </head>
      <body>
        <main>
          <div>
            Hello, Hono!!!!
          </div>
        </main>
      </body>
    </html>
  )
}
