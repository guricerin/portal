import type { FC } from 'hono/jsx'

export const Footer: FC = () => {
  return (
    <footer class="age-footer">
      <hr />
      <div class="footer-copyright">
        <div class="">
          Powered By <a class="white-text" href="https://pages.github.com/">GitHub Pages</a>, Designed by <a class="white-text" href="https://materializeweb.com/">Materialize</a>
        </div>
      </div>
    </footer>
  )
}
