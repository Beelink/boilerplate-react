import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import "./index.scoped.scss";

const LangChooser: FunctionComponent = () => {
  const { setLang } = useContext(LangContext);
  return (
    <div className="lang-chooser">
      {__config.lang.allLangs.map((lang, langIndex) => {
        return (
          <button
            key={langIndex}
            onClick={() => {
              setLang(lang);
            }}
          >
            {lang}
          </button>
        );
      })}
    </div>
  );
};

export default LangChooser;
