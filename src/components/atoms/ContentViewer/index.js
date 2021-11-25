import React from "react";
import { Parser } from "html-to-react";

const htmlToReactParser = new Parser();

const ContentViewer = ({ content }) => {
  return htmlToReactParser.parse(`${content}`);
};

export default ContentViewer;
