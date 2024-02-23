import type { FC } from 'hono/jsx'
import { html } from 'hono/html'

interface SiteDataProps {
  title: string
  children?: any
}

export const Layout: FC<SiteDataProps> = (props: SiteDataProps) => html`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://nitro6th.net" />
      <meta property="og:title" content="${props.title}" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="icon" href="favicon.ico" />
      <title>${props.title}</title>
    </head>
    <body>
      <main class='container'>${props.children}</main>
    </body>
  </html>`
