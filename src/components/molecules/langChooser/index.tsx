import { useContext, FunctionComponent } from "react";
import { LangContext } from "@context/Lang";
import { SelectPicker } from "rsuite";
import "./index.scoped.scss";
import { ItemDataType } from "rsuite/esm/@types/common";
import { ValueType } from "rsuite/esm/SelectPicker/SelectPicker";

const LangChooser: FunctionComponent = () => {
  const { lang, setLang } = useContext(LangContext);

  const handleChange = (event: ValueType) => {
    setLang(event.toString());
  };

  const langs: ItemDataType[] = __config.lang.allLangs.map((l) => {
    return {
      label: l.toUpperCase(),
      value: l,
    };
  });

  return (
    <div className="lang-chooser">
      <SelectPicker
        value={lang}
        data={langs}
        searchable={false}
        cleanable={false}
        onChange={handleChange}
      />
    </div>
  );
};

export default LangChooser;
