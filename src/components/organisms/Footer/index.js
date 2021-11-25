import React, { useContext } from "react";
import "./index.scoped.scss";
import { LangContext } from "@context/lang";
import langs from "./langs";
import Logo from "@components/atoms/logo";
import SocLinks from "@components/molecules/socLinks";
import { Link } from "react-router-dom";

const Footer = ({ minimalMode = false }) => {
  const { lang } = useContext(LangContext);

  return (
    <footer className="footer">
      {!minimalMode && (
        <div className="footer__inner">
          <div className="footer__logo">
            <Logo withImage={false} />
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">{langs[lang].service.title}</h4>
            <ul className="footer__menu">
              <li>
                <a target="_blank" href="https://www.chia.net/download/">
                  {langs[lang].service.download}
                </a>
              </li>
              <li>
                <Link to="/faq">{langs[lang].service.faq}</Link>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__col-title">{langs[lang].help.title}</h4>
            <ul className="footer__menu">
              <li>
                <Link to="/about">{langs[lang].help.about}</Link>
              </li>
            </ul>
          </div>
          <div className="footer__media">
            <h4 className="footer__col-title">{langs[lang].media.title}</h4>
            <div className="footer__soc-links">
              <SocLinks />
            </div>
          </div>
        </div>
      )}
      <div className="footer__bottom">
        <span className="footer__copyright">{langs[lang].copyright}</span>
      </div>
    </footer>
  );
};

export default Footer;
