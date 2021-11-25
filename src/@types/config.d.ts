interface ApiConfig {
  apiPrefix: string;
  staticPrefix: string;
}

interface Config {
  api: {
    dev: ApiConfig;
    stage: ApiConfig;
    prod: ApiConfig;
  };
  lang: {
    allLangs: string[];
    defaultLang: string;
  };
  isDebug: boolean;
}

declare const __config: Config;
