import { Link, LinkProps } from './link'

interface WorkProps {
  name: string
  description: string
  using: string[]
  url?: string
}

const Work = (props: WorkProps) => {
  const using = `using: ${props.using.join(', ')}`
  return (
    <div class="column">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {props.name}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            {props.description}
            <br />
            {using}
          </div>
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
