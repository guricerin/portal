import {
  FaGithub,
  FaKeybase,
  FaMastodon,
  FaTwitter,
  React,
} from "../../deps.ts";
import { Header } from "./Header.tsx";

interface AccountProps {
  icon: React.ReactElement;
  name: string;
  url: string;
}

function Account(props: AccountProps) {
  return (
    <div className="icon-container">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        {props.icon}
        <span>{props.name}</span>
      </a>
    </div>
  );
}

export function Accounts() {
  return (
    <div className="section">
      <Header text="Accounts" />
      <div className="">
        <Account
          icon={<FaKeybase />}
          name="Keybase"
          url="https://keybase.io/guricerin"
        />
        <Account
          icon={<FaGithub />}
          name="GitHub"
          url="https://github.com/guricerin"
        />
        <Account
          icon={<FaMastodon />}
          name="Mastodon@mstdn.maud.io"
          url="https://mstdn.maud.io/@gusalute"
        />
        <Account
          icon={<FaTwitter />}
          name="Twitter"
          url="https://twitter.com/guricerin"
        />
      </div>
    </div>
  );
}
