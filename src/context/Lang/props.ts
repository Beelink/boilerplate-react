interface LangContextProps {
  setLang?: (lang: string) => void;
  lang: string;
  allLangs: string[];
  t?: (text: string) => string;
}

export default LangContextProps;
