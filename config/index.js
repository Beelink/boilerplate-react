import apiConfig from "./api";
import langConfig from "./lang";

module.exports = {
  dev: {
    api: apiConfig.dev,
    lang: langConfig,
  },
  stage: {
    api: apiConfig.stage,
    lang: langConfig,
  },
  prod: {
    api: apiConfig.prod,
    lang: langConfig,
  },
};
