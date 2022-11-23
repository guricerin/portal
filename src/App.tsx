import { React } from "../deps.ts";
import { Avator } from "./components/Avator.tsx";
import { Accounts } from "./components/Accounts.tsx";
import { Works } from "./components/Works.tsx";

const avator = {
  icon: "avator.jpg",
  name: "guricerin",
};

export default function App() {
  return (
    <div className="">
      <Avator {...avator} />
      <Accounts />
      <Works />
    </div>
  );
}
