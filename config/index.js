import apiConfig from "./api.config";
import langConfig from "./lang.config";

module.exports = {
  dev: {
    api: apiConfig.dev,
    lang: langConfig,
    isDebug: true,
  },
  stage: {
    api: apiConfig.stage,
    lang: langConfig,
    isDebug: true,
  },
  prod: {
    api: apiConfig.prod,
    lang: langConfig,
    isDebug: false,
  },
};
