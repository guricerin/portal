interface AvatorProps {
  iconPath: string
  name: string
}

export const Home = (props: AvatorProps) => {
  return (
    <div class="container">
      <div class="avator">
        <img src={props.iconPath} />
        <span>{props.name}</span>
      </div>
      <div>
      </div>
    </div>
  )
}
