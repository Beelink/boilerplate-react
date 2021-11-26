import apiConfig from "./api";
import langConfig from "./lang";
import projectConfig from "./project";

module.exports = {
  dev: {
    project: projectConfig,
    api: apiConfig.dev,
    lang: langConfig,
    isDebug: true,
  },
  stage: {
    project: projectConfig,
    api: apiConfig.stage,
    lang: langConfig,
    isDebug: true,
  },
  prod: {
    project: projectConfig,
    api: apiConfig.prod,
    lang: langConfig,
    isDebug: false,
  },
};
