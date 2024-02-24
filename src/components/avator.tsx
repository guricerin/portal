export interface AvatorProps {
  iconPath: string
  name: string
}

export const Avator = (props: AvatorProps) => {
  return (
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container avator">
          <img src={props.iconPath} />
          <h1 class="title is-1">{props.name}</h1>
        </div>
      </div>
    </section>
  )
}
