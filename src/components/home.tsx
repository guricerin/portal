import type { FC } from 'hono/jsx'

interface AvatorProps {
  iconSrc: string
  name: string
}

export const Home: FC<AvatorProps> = ({ iconSrc, name }: AvatorProps) => {
  return (
    <div class="avator">
      <img src={iconSrc} />
      <span>{name}</span>
    </div>
  )
}
