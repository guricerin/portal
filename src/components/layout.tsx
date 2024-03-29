import { html } from "hono/html"

interface SiteDataProps {
  title: string
  children?: any
}

export const Layout = (props: SiteDataProps) => html`<!doctype html>
  <html lang="ja">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content="https://nitro6th.net" />
      <meta property="og:title" content="${props.title}" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <link rel="stylesheet" href="css/style.css" /> <!-- overrides bulma -->
      <link rel="icon" href="favicon.ico" />
      <title>${props.title}</title>
    </head>
    <body>
      <div>${props.children}</div>
    </body>
  </html>`
