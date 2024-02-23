interface AvatorProps {
  iconPath: string
  name: string
}

export const Home = (props: AvatorProps) => {
  return (
    <div class="container my-5">
      <div class="avator">
        <img class="circle responsive-img" src={props.iconPath} />
        <span class="mt-3">{props.name}</span>
      </div>
    </div>
  )
}
