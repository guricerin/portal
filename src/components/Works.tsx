import { React } from "../../deps.ts";
import { Header } from "./Header.tsx";

interface WorkProps {
  icon: string;
  name: string;
  url: string;
}

function Work(props: WorkProps) {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <i>{props.icon}</i>
        <span>{props.name}</span>
      </a>
    </div>
  );
}

export function Works() {
  return (
    <div className="section">
      <Header text="Works" />
      <div className="">
        <Work
          icon=""
          name="Blog"
          url="https://guricerin.github.io/shit-blog/"
        />
        <Work
          icon=""
          name="bf-derivatives-tool"
          url="https://github.com/guricerin/bf-derivatives-tool"
        />
      </div>
    </div>
  );
}
