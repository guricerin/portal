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
          <span>{props.name}</span>
        </div>
      </div>
    </section>
  )
}
