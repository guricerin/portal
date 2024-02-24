interface LinkProps {
  url: string
  children?: any
}

export const Link = (props: LinkProps) => {
  return (
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}
