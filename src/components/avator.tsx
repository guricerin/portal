export interface AvatorProps {
  iconPath: string
  name: string
}

export const Avator = (props: AvatorProps) => {
  return (
    <div class="avator">
      <img src={props.iconPath} />
      <span>{props.name}</span>
    </div>
  )
}
