export interface LinkProps {
  url: string
  cssClass?: string
  children?: any
}

export const Link = (props: LinkProps) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer" class={props.cssClass}>
      {props.children}
    </a>
  )
}
