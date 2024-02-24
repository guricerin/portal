import { Avator, AvatorProps } from "./avator"
import { Accounts, AccountList } from "./account"

const avator: AvatorProps = {
  iconPath: 'img/avator.jpg',
  name: 'guricerin',
}

const accounts: AccountList = {
  list: [
    {
      url: 'https://keybase.io/guricerin',
      siteName: 'Keybase',
    },
    {
      url: 'https://github.com/guricerin',
      siteName: 'GitHub',
    },
    {
      url: 'https://twitter.com/guricerin',
      siteName: 'Twitter',
    },
    {
      url: 'https://www.linkedin.com/in/shotaro-ikeguchi-678630249/',
      siteName: 'LinkedIn'
    },
    {
      url: 'https://guricerin.github.io/shit-blog/',
      siteName: 'Blog'
    },
  ]
}

export const Top = () => {
  return (
    <div class="container">
      <section class="section">
        <Avator {...avator} />
      </section>
      <section class="section">
        <Accounts {...accounts} />
      </section>
    </div>
  )
}
