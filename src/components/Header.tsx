import { React } from "../../deps.ts";

interface Props {
  text: string;
}

export function Header({ text }: Props) {
  return (
    <div>
      <div className="subtitle">
        <span>{text}</span>
      </div>
    </div>
  );
}
