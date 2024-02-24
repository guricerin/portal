import { Avator, AvatorProps } from "./avator"
import { Contacts, ContactList } from "./contacts"
import { Footer } from "./footer"
import { Works, WorkList } from "./works"

const avator: AvatorProps = {
  iconPath: "img/avator.jpg",
  name: "guricerin",
}

const contacts: ContactList = {
  list: [
    {
      url: "https://keybase.io/guricerin",
      iconClass: ["fa-brands", "fa-keybase"],
      siteName: "Keybase",
    },
    {
      url: "https://github.com/guricerin",
      iconClass: ["fa-brands", "fa-github"],
      siteName: "GitHub",
    },
    {
      url: "https://twitter.com/guricerin",
      iconClass: ["fa-brands", "fa-twitter"],
      siteName: "Twitter",
    },
    {
      url: "https://www.linkedin.com/in/shotaro-ikeguchi-678630249/",
      iconClass: ["fa-brands", "fa-linkedin"],
      siteName: "LinkedIn"
    },
    {
      url: "https://guricerin.github.io/shit-blog/",
      iconClass: ["fa-solid", "fa-blog"],
      siteName: "Blog"
    },
  ]
}

const works: WorkList = {
  list: [
    {
      name: "portal",
      description: "This site.",
      using: ["TypeScript", "Bun", "Hono"],
      url: "https://github.com/guricerin/portal",
    },
    {
      name: "bf-derivatives-tools",
      description: "Brainfuck interpreter and translator.",
      using: ["Rust"],
      url: "https://crates.io/crates/bf-derivatives-tools",
    },
    {
      name: "deno-lisp",
      description: "Make a Lisp implementation.",
      using: ["TypeScript", "Deno"],
      url: "https://github.com/guricerin/deno-lisp",
    },
  ]
}

export const Top = () => {
  return (
    <div>
      <header>
        <Avator {...avator} />
      </header>
      <section class="section">
        <Contacts {...contacts} />
      </section>
      <section class="section">
        <Works {...works} />
      </section>
      <footer class="footer custom-footer">
        <Footer />
      </footer>
    </div>
  )
}
