import { Link, LinkProps } from './link'

interface ContactProps {
  url: string
  iconClass: string
  siteName: string
}

const Contact = (props: ContactProps) => {
  const children = (
    <>
      <span class="panel-icon">
        <i class={props.iconClass}></i>
      </span>
      {props.siteName}
    </>
  )
  const linkProps: LinkProps = {
    url: props.url,
    cssClass: "panel-block",
    children: children,
  }
  return (
    <Link {...linkProps} />
  )
}

export interface ContactList {
  list: ContactProps[]
}

export const Contacts = (props: ContactList) => {
  const list = (
    <article class="panel is-link is-shadowless">
      {props.list.map(a => <Contact {...a} />)}
    </article>
  )
  return (
    <div class="container">
      <h2 class="subtitle is-3">Contacts</h2>
      <hr/>
      {list}
    </div>
  )
}
