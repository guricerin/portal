import { React } from "../../deps.ts";

interface Props {
  text: string;
}

export function Header({ text }: Props) {
  return (
    <div>
      <span>{text}</span>
    </div>
  );
}
