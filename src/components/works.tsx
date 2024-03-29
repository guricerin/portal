import { Link, LinkProps } from "./link"

interface WorkProps {
  name: string
  description: string
  using: string[]
  url: string
}

const Work = (props: WorkProps) => {
  const using = `(using: ${props.using.join(", ")})`
  const link: LinkProps = {
    url: props.url,
    children: "link",
  }
  return (
    <div class="column">
      <div class="card custom-card is-shadowless">
        <div class="card-content">
          <div class="content">
            <p class="work-name">
              {props.name}
            </p>
            {props.description}
            <br />
            {using}
          </div>
        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <span>
              View on <Link {...link} />
            </span>
          </p>
        </footer>
      </div>
    </div>
  )
}

export interface WorkList {
  list: WorkProps[]
}

export const Works = (props: WorkList) => {
  const list = (
    <div class="columns">
      {props.list.map(x => <Work {...x} />)}
    </div>
  )
  return (
    <div class="container">
      <h2 class="subtitle is-3">Works</h2>
      <hr/>
      {list}
    </div>
  )
}
