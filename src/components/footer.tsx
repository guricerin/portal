import { Link, LinkProps } from './link'

export const Footer = () => {
  const linkProps: LinkProps = {
    url: 'https://bulma.io/',
    children: 'Bulma',
    cssClass: 'white',
  }
  return (
    <div class="">
      <div class="content">
        Made by guricerin, using with <Link {...linkProps} />.
      </div>
    </div>
  )
}
