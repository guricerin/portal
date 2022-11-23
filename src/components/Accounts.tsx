import { React } from "../../deps.ts";
import { Header } from "./Header.tsx";

interface AccountProps {
  icon: string;
  name: string;
  url: string;
}

function Account(props: AccountProps) {
  return (
    <div>
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <i>{props.icon}</i>
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
        <Account icon="" name="Keybase" url="https://keybase.io/guricerin" />
        <Account icon="" name="GitHub" url="https://github.com/guricerin" />
        <Account
          icon=""
          name="Misskey (misskey.io)"
          url="https://misskey.io/@guricerin"
        />
        <Account icon="" name="Twitter" url="https://twitter.com/guricerin" />
      </div>
    </div>
  );
}
