import React, { FunctionComponent, useContext } from "react";
import { LangContext } from "@context/lang";
import langs from "./langs";
import "./index.scoped.scss";

const NotFoundPage: FunctionComponent = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="not-found-page">
      <div className="not-found-page__inner">
        <h1>404</h1>
        <h2>{ langs[lang].title }</h2>
        <h4>{ langs[lang].subtitle }</h4>
      </div>
    </div>
  );
};

export default NotFoundPage;