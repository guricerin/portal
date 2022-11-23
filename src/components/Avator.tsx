import { React } from "../../deps.ts";

interface AvatorProps {
  icon: string;
  name: string;
}

export function Avator({ icon, name }: AvatorProps) {
  return (
    <div className="avator">
      <img src={icon} />
      <span>{name}</span>
    </div>
  );
}
