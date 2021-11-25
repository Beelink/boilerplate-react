import React, { useContext, useState } from "react";
import "./index.scoped.scss";
import { LangContext } from "@context/lang";
import langs from "./langs";
import cn from "classnames";
import icon from "@assets/images/symbols/chevron-down.svg";
import ClickOutside from "@components/atoms/clickOutside";

const LangChooser = () => {
  const { lang, toggleLang, allLangs } = useContext(LangContext);
  const [ isShow, setShow ] = useState(false);

  const toggleShow = () => {
    setShow(!isShow);
  };

  const setLang = (l) => {
    toggleLang(l);
    setShow(false);
  };

  return (
    <footer className="lang-chooser">
      <div className="lang-chooser__inner">
        <button className="lang-chooser__current" onClick={ toggleShow }>
          <span>{ langs[lang].langName }</span>
          <img src={ icon } alt="" />
        </button>
        { isShow &&
          <ClickOutside
            className="lang-chooser__click-outside"
            onAction={ () => setShow(false) }
          >
            <ul className="lang-chooser__list">
            { allLangs.map((l, i) => {
              return (
                <li key={ i }>
                  <button onClick={ () => { setLang(l) } } className={ cn({
                    "lang-chooser__lang": true,
                    "lang-chooser__lang--active": l == lang,
                  }) }>
                    <span>{ langs[l].langName }</span>
                  </button>
                </li>
              )
            }) }
            </ul>
          </ClickOutside>
        }
      </div>
    </footer>
  );
};

export default LangChooser;
