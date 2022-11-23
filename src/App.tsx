import { React } from "../deps.ts";
import { Accounts } from "./components/Accounts.tsx";
import { Works } from "./components/Works.tsx";

interface AvatorProps {
  icon: string;
  name: string;
}

const avator = {
  icon: "avator.jpg",
  name: "guricerin",
};

function Avator({ icon, name }: AvatorProps) {
  return (
    <div className="section">
      <img src={icon} />
      <span>{name}</span>
    </div>
  );
}

export default function App() {
  return (
    <div className="container">
      <Avator {...avator} />
      <Accounts />
      <Works />
    </div>
  );
}
