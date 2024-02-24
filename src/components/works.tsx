import { Link, LinkProps } from './link'

interface WorkProps {
  name: string
  url: string
  description: string
  using: string[]
}

const Work = (props: WorkProps) => {
  const using = (props.using.join(', '))
  return (
    <div class="card">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title">{props.name}</p>
          </div>
        </div>

        <div class="content">
          {props.description}
          <br />
          using: {using}
        </div>
      </div>
    </div>
  )
}

export interface WorkList {
  list: WorkProps[]
}

export const Works = (props: WorkList) => {
  const list = (
    <div>
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
