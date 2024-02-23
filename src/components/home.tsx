import type { FC } from 'hono/jsx'

interface AvatorProps {
  iconPath: string
  name: string
}

export const Home: FC<AvatorProps> = (props: AvatorProps) => {
  return (
    <div class="container my-5">
      <div class="avator">
        <img src={props.iconPath} />
        <span>{props.name}</span>
      </div>
    </div>
  )
}
