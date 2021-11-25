import { useState, useEffect, createContext, FunctionComponent } from "react";
import { withRouter } from "react-router";
import { stringify, parse } from "qs";
import { RouteConfigComponentProps } from "react-router-config";
import LangContextProps from "@context/Lang/props";

const LangContext = createContext<LangContextProps | null>(null);

const LangContextProvider: FunctionComponent<RouteConfigComponentProps> = ({
  children,
  location,
  history,
}) => {
  const query = parse(location.search, { ignoreQueryPrefix: true });

  const [lang, setLang] = useState(
    query.lang?.toString() || localStorage.getItem("lang") || __config.lang.defaultLang
  );

  if (lang) {
    if (!__config.lang.allLangs.includes(lang)) {
      setLang(__config.lang.defaultLang);
    }
  }

  const _setLang = (lang: string) => {
    localStorage.setItem("lang", lang);
    setLang(lang);
  };

  function _getProperty<Context, K extends keyof Context>(obj: Context, key: K): Context[K] {
    return obj[key];
}

  const _getStr = (langFile: object, lineIndex: number): string => {
    return _getProperty(langFile, lineIndex);
  };

  useEffect(() => {
    if (!query.lang || (query.lang && query.lang !== lang)) {
      let newQeary = stringify({ lang }, { encode: false, skipNulls: true });

      if (query.hash) {
        newQeary += `&hash=${query.hash}`;
      }

      history.replace({
        pathname: `${location.pathname}`,
        search: "?" + newQeary,
      });
    }
  }, [query, lang]);

  return (
    <>
      <LangContext.Provider
        value={{
          setLang: _setLang,
          lang,
          allLangs: __config.lang.allLangs,
          getStr: _getStr,
        }}
      >
        {children}
      </LangContext.Provider>
    </>
  );
};

const LangProvider = withRouter(LangContextProvider);

export { LangProvider, LangContext };
