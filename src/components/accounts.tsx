import { Link, LinkProps } from './link'

interface AccountProps {
  url: string
  iconClass: string
  siteName: string
}

const Account = (props: AccountProps) => {
  const children = (
    <div>
      <i class={props.iconClass}></i>
      <span>{props.siteName}</span>
    </div>
  )
  const linkProps: LinkProps = {
    url: props.url,
    children: children,
  }
  return (
    <li>
      <Link {...linkProps} />
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
      <h2 class="subtitle is-3">Accounts</h2>
      <hr/>
      {a}
    </div>
  )
}
