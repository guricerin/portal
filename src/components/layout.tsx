import type { FC } from 'hono/jsx'

export const Layout: FC = (props) => {
  const { children } = props
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content="https://guricerin.github.io/portal/" />
        <link rel="stylesheet" href="style.css" />
        <link rel="icon" href="favicon.ico" />
        <title>guricerin's portal</title>
      </head>
      <body>
        <main class='container'>{children}</main>
      </body>
    </html>
  )
}
