import { FaBlog, FaCode, React } from "../../deps.ts";
import { Header } from "./Header.tsx";

interface WorkProps {
  icon: React.ReactElement;
  name: string;
  url: string;
}

function Work(props: WorkProps) {
  return (
    <div className="icon-container">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.icon}
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
          icon={<FaBlog />}
          name="Blog"
          url="https://guricerin.github.io/shit-blog/"
        />
        <Work
          icon={<FaCode />}
          name="bf-derivatives-tool"
          url="https://github.com/guricerin/bf-derivatives-tool"
        />
      </div>
    </div>
  );
}
