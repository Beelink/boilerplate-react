interface LangContextProps {
  setLang(lang: string): void;
  lang: string;
  allLangs: string[];
  getStr(langFile: object, lineIndex: number): void;
}

export default LangContextProps;
