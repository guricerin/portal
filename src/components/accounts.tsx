import { Link } from './link'

interface AccountProps {
  url: string
  siteName: string
}

const Account = (props: AccountProps) => {
  const linkProp = {
    url: props.url,
    children: props.siteName,
  }
  return (
    <li>
      <Link {...linkProp} />
    </li>
  )
}

export interface AccountList {
  list: AccountProps[]
}

export const Accounts = (props: AccountList) => {
  const a = (
    <ul class="account">
      {props.list.map(a => <Account {...a} />)}
    </ul>
  )
  return (
    <div class="container">
      <h2 class="subtitle">Accounts</h2>
      <hr/>
      {a}
    </div>
  )
}
