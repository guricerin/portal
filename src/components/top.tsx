import { Avator, AvatorProps } from "./avator"
import { Accounts, AccountList } from "./accounts"

const avator: AvatorProps = {
  iconPath: 'img/avator.jpg',
  name: 'guricerin',
}

const accounts: AccountList = {
  list: [
    {
      url: 'https://keybase.io/guricerin',
      iconClass: 'fa-brands fa-keybase',
      siteName: 'Keybase',
    },
    {
      url: 'https://github.com/guricerin',
      iconClass: 'fa-brands fa-github',
      siteName: 'GitHub',
    },
    {
      url: 'https://twitter.com/guricerin',
      iconClass: 'fa-brands fa-twitter',
      siteName: 'Twitter',
    },
    {
      url: 'https://www.linkedin.com/in/shotaro-ikeguchi-678630249/',
      iconClass: 'fa-brands fa-linkedin',
      siteName: 'LinkedIn'
    },
    {
      url: 'https://guricerin.github.io/shit-blog/',
      iconClass: 'fa-solid fa-blog',
      siteName: 'Blog'
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
        <Accounts {...accounts} />
      </section>
    </div>
  )
}
