import {
  useContext,
  useRef,
  FunctionComponent,
} from "react";
import { LangContext } from "@context/Lang";
import langs from "./langs";
import "./index.scoped.scss";

const Header: FunctionComponent = () => {
  const langCtx = useContext(LangContext);

  const menuItems = [
    {
      to: "/about",
      title: langCtx?.getStr(langs, 0).
    },
    {
      href: "https://www.chia.net/download/",
      // title: langs[lang].menu.download,
    },
    {
      to: "/faq",
      // title: langs[lang].menu.faq,
    },
  ];

  return (
    <header className="header">
      <div className="header__inner" />
    </header>
  );
};

export default Header;
